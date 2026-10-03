import { createForest } from '../scene/forest';
import type { ForestView } from '../scene/forest';
import { Tour } from './tour';
import type { SceneEvent, ScenePort } from '../contracts';

export function mountGame(app: HTMLElement) {
  app.innerHTML = `
    <div class="scene-host" aria-label="森林登山三维场景"></div>
    <header class="topbar"><a class="brand" href="/">FOCUS <span>HIKING</span></a><span class="version">M1 · 初版 / 视觉待审阅</span></header>
    <section class="intro"><p class="eyebrow">FOREST WALK · 林间漫步</p><h1>走进林间，<br>留一点时间给自己。</h1><p class="intro-copy">沿着小径，经过营地与溪流。<br>一段安静的森林游览，从这里开始。</p><button class="primary" id="start" disabled>正在准备森林…</button><p class="hint">约 2 分钟 · 自动游览 · 可随时暂停</p></section>
    <aside class="error" role="alert" hidden><h2>暂时无法进入森林</h2><p></p><button id="retry">重新加载</button></aside>
    <section class="controls" hidden><div class="journey"><span id="stage">营地出发</span><span id="time">00:00 / 02:00</span></div><progress max="1" value="0" aria-label="游览进度"></progress><div class="buttons"><button id="pause">暂停</button><button id="restart">回到起点</button><button id="report">下载运行记录</button></div></section>
    <footer class="footer"><span>一张地图，一段小径。</span><span id="metrics">加载中</span></footer>
    <div class="end" hidden><p class="eyebrow">END OF THE TRAIL</p><h2>这一段，走完了。</h2><p>你可以再走一遍，也可以停留片刻。</p><button class="primary" id="again">再走一遍</button></div>`;
  const get = <T extends HTMLElement>(selector: string) => app.querySelector<T>(selector)!;
  const host = get<HTMLDivElement>('.scene-host');
  const start = get<HTMLButtonElement>('#start');
  const controls = get<HTMLElement>('.controls');
  const pause = get<HTMLButtonElement>('#pause');
  const error = get<HTMLElement>('.error');
  const intro = get<HTMLElement>('.intro');
  const end = get<HTMLElement>('.end');
  const tour = new Tour();
  const sceneListeners = new Set<(event: SceneEvent) => void>();
  const arrived = new Set<string>();
  const emit = (event: SceneEvent) => sceneListeners.forEach(listener => listener(event));
  let forest: ForestView | null = null;
  let frame = 0, last = 0, disposed = false, attempt = 0;
  let startedAt = 0, loadedMs = 0, nextMetric = 0;
  let gpu = '不可获取';
  const frameTimes: number[] = [];
  const search = new URLSearchParams(location.search);
  const fixedView = search.get('view');
  const render = (now: number) => {
    if (disposed || !forest) return;
    const dt = last ? now - last : 0; last = now;
    if (!document.hidden) {
      tour.advance(Math.min(dt, 100));
      if (tour.state === 'running' || tour.state === 'completed') {
        for (const [id, progress] of [['camp', 0], ['trail', .2], ['creek', .6], ['ridge', .85]] as const) {
          if (tour.progress >= progress && !arrived.has(id)) { arrived.add(id); emit({ type: 'nodeArrived', nodeId: id, timestampMs: now }); }
        }
      }
      if (!fixedView) forest.place(tour.progress);
      forest.renderer.render(forest.scene, forest.camera);
      if (dt > 0 && dt < 1000) { frameTimes.push(dt); if (frameTimes.length > 3600) frameTimes.shift(); }
    }
    get<HTMLProgressElement>('progress').value = tour.progress;
    const seconds = Math.floor(tour.elapsedMs / 1000);
    get<HTMLElement>('#time').textContent = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')} / 02:00`;
    get<HTMLElement>('#stage').textContent = tour.progress < .2 ? '营地出发' : tour.progress < .6 ? '林间小径' : tour.progress < .85 ? '溪流木桥' : '山脊远景';
    if (tour.state === 'completed' && end.hidden) { end.hidden = false; controls.hidden = true; emit({ type: 'movementEnded', nodeId: 'ridge', timestampMs: now }); }
    if (now > nextMetric) {
      const recent = frameTimes.slice(-120); const fps = recent.length ? 1000 * recent.length / recent.reduce((a, b) => a + b, 0) : 0;
      get<HTMLElement>('#metrics').textContent = `${Math.round(fps)} FPS · ${forest.renderer.info.render.calls} draws · simulated`;
      nextMetric = now + 1000;
    }
    frame = requestAnimationFrame(render);
  };
  const load = async () => {
    const id = ++attempt; cancelAnimationFrame(frame); forest?.dispose(); forest = null;
    error.hidden = true; start.disabled = true; start.textContent = '正在准备森林…';
    startedAt = performance.now();
    try {
      const view = await createForest(host);
      if (disposed || id !== attempt) { view.dispose(); return; }
      forest = view; loadedMs = performance.now() - startedAt;
      const gl = view.renderer.getContext();
      const debug = gl.getExtension('WEBGL_debug_renderer_info');
      if (debug) gpu = String(gl.getParameter(debug.UNMASKED_RENDERER_WEBGL));
      if (fixedView) { view.viewpoint(fixedView); intro.hidden = true; }
      start.disabled = false; start.textContent = '开始漫步'; last = 0;
      frame = requestAnimationFrame(render);
    } catch (cause) {
      if (disposed || id !== attempt) return;
      error.hidden = false; start.textContent = '加载未完成';
      error.querySelector('p')!.textContent = `${cause instanceof Error ? cause.message : '加载失败'}。请检查本地资源或浏览器 WebGL 支持。`;
    }
  };
  const begin = () => { tour.start(); intro.hidden = true; controls.hidden = false; pause.textContent = '暂停'; emit({ type: 'movementStarted', timestampMs: performance.now() }); };
  start.onclick = begin;
  pause.onclick = () => { if (tour.state === 'running') { tour.pause(); pause.textContent = '继续'; } else { tour.start(); pause.textContent = '暂停'; } };
  const restart = () => { if (tour.state === 'running') emit({ type: 'movementEnded', timestampMs: performance.now() }); tour.restart(); arrived.clear(); forest?.place(0); end.hidden = true; controls.hidden = true; intro.hidden = false; };
  get<HTMLButtonElement>('#restart').onclick = restart;
  get<HTMLButtonElement>('#again').onclick = () => { restart(); begin(); };
  get<HTMLButtonElement>('#retry').onclick = () => { restart(); void load(); };
  get<HTMLButtonElement>('#report').onclick = () => {
    const record = {
      source: 'simulated', visualAcceptance: 'not-reviewed', cameraImplemented: false,
      browser: navigator.userAgent, gpu, loadedMs, cssViewport: [host.clientWidth, host.clientHeight],
      drawingBuffer: forest ? [forest.renderer.domElement.width, forest.renderer.domElement.height] : null,
      frameTimesMs: frameTimes, renderInfo: forest?.renderer.info.render,
      assets: forest?.manifest, recordedAt: new Date().toISOString(),
    };
    const url = URL.createObjectURL(new Blob([JSON.stringify(record, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url; link.download = 'focus-hiking-run.json'; link.click(); URL.revokeObjectURL(url);
  };
  const resize = () => forest?.resize();
  const visibility = () => { last = 0; if (document.hidden) { tour.pause(); pause.textContent = '继续'; } };
  const contextLost = (event: Event) => { event.preventDefault(); cancelAnimationFrame(frame); tour.pause(); error.hidden = false; error.querySelector('p')!.textContent = '图形上下文已丢失，请重新加载。'; };
  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', visibility);
  host.addEventListener('webglcontextlost', contextLost, true);
  void load();
  const port: ScenePort = {
    subscribeEvents(listener) { sceneListeners.add(listener); return () => { sceneListeners.delete(listener); }; },
    handleCommand() { throw new Error('M1 自动游览尚不支持训练命令；请在 M4 契约审查后接入。'); },
  };
  return { ...port, dispose() { disposed = true; attempt++; cancelAnimationFrame(frame); forest?.dispose(); sceneListeners.clear(); window.removeEventListener('resize', resize); document.removeEventListener('visibilitychange', visibility); host.removeEventListener('webglcontextlost', contextLost, true); app.replaceChildren(); } };
}
