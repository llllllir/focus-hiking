import { createForest } from '../scene/forest';
import type { ForestView } from '../scene/forest';
import { Tour } from './tour';
import { findTrailPath, TrailWalker } from './navigation';
import type { Point } from './navigation';
import type { AttentionPort, SceneEvent, ScenePort, GazeEvent, TargetRegion, InputSource } from '../contracts';

// Optional existing A port. The current entry deliberately does not pass simulated input.
export function mountGame(app: HTMLElement, attention?: AttentionPort) {
  app.innerHTML = `
    <div class="scene-host" aria-label="森林登山三维场景"></div>
    <header class="topbar"><a class="brand" href="/">FOCUS <span>HIKING</span></a><span class="version">框架场景1.0 · 探索迭代 / 画质未验收</span></header>
    <section class="intro"><p class="eyebrow">FOREST WALK · 林间漫步</p><h1>走进林间，<br>留一点时间给自己。</h1><p class="intro-copy">沿着小径，经过营地与溪流。<br>一段安静的森林游览，从这里开始。</p><button class="primary" id="start" disabled>正在准备森林…</button><p class="hint">约 2 分钟 · 自动游览 · 可随时暂停</p></section>
    <aside class="explore" hidden><h2>林地探索</h2><p>拖动画面转头 · WASD 行走<br>点击路面，沿小径自动走过去</p><div class="destinations"><button data-destination="camp">营地</button><button data-destination="trail">林间环线</button><button data-destination="creek">溪边支路</button><button data-destination="ridge">山坡观景台</button></div><button id="mode">自由探索</button><button id="center">视角归正</button><p id="navigation-status" aria-live="polite">自动游览中 · 可以转头观察</p><small>真实眼动尚未接入；当前目的地用鼠标选择。</small></aside>
    <aside class="error" role="alert" hidden><h2>暂时无法进入森林</h2><p></p><button id="retry">重新加载</button></aside>
    <section class="controls" hidden><div class="journey"><span id="stage">营地出发</span><span id="time">00:00 / 02:00</span></div><progress max="1" value="0" aria-label="游览进度"></progress><div class="buttons"><button id="pause">暂停</button><button id="restart">回到起点</button><button id="report">下载运行记录</button></div></section>
    <footer class="footer"><span>混合林 · 溪谷 · 山坡</span><span id="metrics">加载中</span></footer>
    <div class="end" hidden><p class="eyebrow">END OF THE TRAIL</p><h2>这一段，走完了。</h2><p>你可以再走一遍，也可以停留片刻。</p><button class="primary" id="again">再走一遍</button><button id="end-report">下载运行记录</button></div>`;
  const get = <T extends HTMLElement>(selector: string) => app.querySelector<T>(selector)!;
  const host = get<HTMLDivElement>('.scene-host');
  const start = get<HTMLButtonElement>('#start');
  const controls = get<HTMLElement>('.controls');
  const pause = get<HTMLButtonElement>('#pause');
  const error = get<HTMLElement>('.error');
  const intro = get<HTMLElement>('.intro');
  const end = get<HTMLElement>('.end');
  const tour = new Tour();
  let exploring = false, walker: TrailWalker | null = null, explorationPaused = false;
  let navigationSource: InputSource = 'manual';
  const keys = new Set<string>();
  let drag: { x: number; y: number; moved: boolean } | null = null;
  const exploration = get<HTMLElement>('.explore');
  const navigationStatus = get<HTMLElement>('#navigation-status');
  const setExploring = () => {
    if (!forest || fixedView) return;
    tour.pause(); exploring = true; explorationPaused = false;
    walker = new TrailWalker(forest.camera.position.toArray() as Point);
    end.hidden = true; controls.hidden = false; exploration.hidden = false;
    get<HTMLElement>('#mode').textContent = '继续自动游览'; pause.textContent = '暂停';
    navigationStatus.textContent = '自由探索 · 选择目的地或 WASD 行走';
  };
  const goTo = (goal: Point, source: InputSource = 'manual') => {
    if (!forest) return;
    if (!exploring) setExploring();
    walker!.position = forest.camera.position.toArray() as Point;
    const route = findTrailPath(forest.manifest.trails ?? [{ id: 'main', label: '主路', points: forest.manifest.route }], walker!.position, goal);
    if (!route.length) { navigationStatus.textContent = '这里没有连通的小径，请选择路标。'; return; }
    walker!.go(route); explorationPaused = false; pause.textContent = '暂停';
    navigationSource = source;
    navigationStatus.textContent = '沿小径前往目的地 · 可暂停或重新选择';
    emit({ type: 'movementStarted', timestampMs: performance.now() });
  };
  const targetRegions = (): TargetRegion[] => {
    const viewport = host.getBoundingClientRect();
    return [...app.querySelectorAll<HTMLButtonElement>('[data-destination]')].map(button => {
      const rect = button.getBoundingClientRect();
      return { id: `explore-${button.dataset.destination}`, x: (rect.left - viewport.left) / viewport.width, y: (rect.top - viewport.top) / viewport.height, width: rect.width / viewport.width, height: rect.height / viewport.height, enabled: !exploration.hidden && !document.hidden && !walker?.moving && !explorationPaused };
    });
  };
  let cameraValidAt = -Infinity, previousTargetState = '';
  const offSamples = attention?.subscribeSamples(sample => { cameraValidAt = sample.source === 'camera' && sample.valid ? sample.timestampMs : -Infinity; });
  const onConfirmation = (event: GazeEvent) => {
    const sampleAge = performance.now() - cameraValidAt;
    if (event.type !== 'targetConfirmed' || !event.targetId || sampleAge < 0 || sampleAge > 250) return;
    const target = targetRegions().find(region => region.id === event.targetId && region.enabled);
    const view = target && forest?.manifest.viewpoints.find(v => `explore-${v.id}` === target.id);
    if (view) goTo(view.position, 'camera');
  };
  const offEvents = attention?.subscribeEvents(onConfirmation);
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
      if (!exploring) tour.advance(Math.min(dt, 100));
      if (!exploring && (tour.state === 'running' || tour.state === 'completed')) {
        for (const [id, progress] of [['camp', 0], ['trail', .2], ['creek', .6], ['ridge', .85]] as const) {
          if (tour.progress >= progress && !arrived.has(id)) { arrived.add(id); emit({ type: 'nodeArrived', nodeId: id, timestampMs: now }); }
        }
      }
      if (!fixedView) {
        if (!exploring) forest.place(tour.progress);
        else if (!explorationPaused && walker) {
          const wasMoving = walker.moving;
          walker.update(dt / 1000);
          if (wasMoving) forest.walk(walker.position);
          if (wasMoving && !walker.moving) { navigationStatus.textContent = '已到达 · 可以转头、继续探索或返回营地'; emit({ type: 'movementEnded', timestampMs: now }); }
          const dx = Number(keys.has('d')) - Number(keys.has('a')), dz = Number(keys.has('s')) - Number(keys.has('w'));
          if (dx || dz) { walker.stop(); navigationSource = 'manual'; const speed = Math.min(dt, 100) * .00145 / Math.hypot(dx, dz); forest.move(dx * speed, dz * speed); walker.position = forest.camera.position.toArray() as Point; }
        }
      }
      forest.renderer.render(forest.scene, forest.camera);
      if (dt > 0 && dt < 1000) { frameTimes.push(dt); if (frameTimes.length > 3600) frameTimes.shift(); }
    }
    get<HTMLProgressElement>('progress').value = tour.progress;
    const seconds = Math.floor(tour.elapsedMs / 1000);
    get<HTMLElement>('#time').textContent = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')} / 02:00`;
    get<HTMLElement>('#stage').textContent = tour.progress < .2 ? '营地出发' : tour.progress < .6 ? '林间小径' : tour.progress < .85 ? '溪流木桥' : '山脊远景';
    if (!exploring && tour.state === 'completed' && end.hidden) { end.hidden = false; controls.hidden = true; emit({ type: 'movementEnded', nodeId: 'ridge', timestampMs: now }); }
    if (exploring && forest) { get<HTMLElement>('#stage').textContent = '自由探索'; get<HTMLElement>('#time').textContent = `相对高度 ${forest.camera.position.y.toFixed(1)} m`; }
    if (attention) {
      const regions = targetRegions(), state = JSON.stringify(regions);
      if (state !== previousTargetState) { attention.setTargets(regions); previousTargetState = state; }
    }
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
  const begin = () => { tour.start(); intro.hidden = true; controls.hidden = false; exploration.hidden = false; pause.textContent = '暂停'; emit({ type: 'movementStarted', timestampMs: performance.now() }); };
  start.onclick = begin;
  pause.onclick = () => { if (exploring) { explorationPaused = !explorationPaused; keys.clear(); pause.textContent = explorationPaused ? '继续' : '暂停'; } else if (tour.state === 'running') { tour.pause(); pause.textContent = '继续'; } else { tour.start(); pause.textContent = '暂停'; } };
  const restart = () => { if (tour.state === 'running') emit({ type: 'movementEnded', timestampMs: performance.now() }); tour.restart(); arrived.clear(); exploring = false; walker = null; keys.clear(); forest?.resetLook(); forest?.place(0); end.hidden = true; controls.hidden = true; exploration.hidden = true; intro.hidden = false; get<HTMLElement>('#mode').textContent = '自由探索'; };
  get<HTMLButtonElement>('#mode').onclick = () => { if (!exploring) setExploring(); else { exploring = false; walker?.stop(); tour.start(); pause.textContent = '暂停'; get<HTMLElement>('#mode').textContent = '自由探索'; navigationStatus.textContent = '自动游览中 · 可以转头观察'; } };
  get<HTMLButtonElement>('#center').onclick = () => forest?.resetLook();
  app.querySelectorAll<HTMLButtonElement>('[data-destination]').forEach(button => { button.onclick = () => { const view = forest?.manifest.viewpoints.find(v => v.id === button.dataset.destination); if (view) goTo(view.position); }; });
  const pointerDown = (event: PointerEvent) => { if (!intro.hidden || fixedView) return; drag = { x: event.clientX, y: event.clientY, moved: false }; host.setPointerCapture(event.pointerId); };
  const pointerMove = (event: PointerEvent) => { if (!drag) return; const dx = event.clientX - drag.x, dy = event.clientY - drag.y; if (Math.abs(dx) + Math.abs(dy) > 2) drag.moved = true; forest?.look(dx, dy); drag.x = event.clientX; drag.y = event.clientY; };
  const pointerUp = (event: PointerEvent) => { if (drag && !drag.moved && exploring && forest) { const rect = host.getBoundingClientRect(); const goal = forest.pick((event.clientX - rect.left) / rect.width, (event.clientY - rect.top) / rect.height); if (goal) goTo(goal); } drag = null; };
  const keyDown = (event: KeyboardEvent) => { if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement || !intro.hidden || fixedView) return; const key = event.key.toLowerCase(); if ('wasd'.includes(key) && key.length === 1) { event.preventDefault(); if (!exploring) setExploring(); keys.add(key); } };
  const keyUp = (event: KeyboardEvent) => keys.delete(event.key.toLowerCase());
  const blur = () => { keys.clear(); drag = null; };
  host.addEventListener('pointerdown', pointerDown); host.addEventListener('pointermove', pointerMove); host.addEventListener('pointerup', pointerUp); host.addEventListener('pointercancel', blur);
  window.addEventListener('keydown', keyDown); window.addEventListener('keyup', keyUp); window.addEventListener('blur', blur);
  get<HTMLButtonElement>('#restart').onclick = restart;
  get<HTMLButtonElement>('#again').onclick = () => { restart(); begin(); };
  get<HTMLButtonElement>('#retry').onclick = () => { restart(); void load(); };
  get<HTMLButtonElement>('#report').onclick = () => {
    const record = {
      version: '框架场景1.0', source: exploring ? navigationSource : 'simulated', visualAcceptance: 'not-reviewed', cameraImplemented: false,
      cameraInputConnected: !!attention,
      exploration: exploring, cameraPosition: forest?.camera.position.toArray(), cameraRotation: forest?.camera.rotation.toArray(), walkingDistance: walker?.distance ?? 0,
      browser: navigator.userAgent, gpu, loadedMs, cssViewport: [host.clientWidth, host.clientHeight],
      drawingBuffer: forest ? [forest.renderer.domElement.width, forest.renderer.domElement.height] : null,
      frameTimesMs: frameTimes, renderInfo: forest?.renderer.info.render,
      assets: forest?.manifest, recordedAt: new Date().toISOString(),
    };
    const url = URL.createObjectURL(new Blob([JSON.stringify(record, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url; link.download = 'focus-hiking-run.json'; link.click(); URL.revokeObjectURL(url);
  };
  get<HTMLButtonElement>('#end-report').onclick = () => get<HTMLButtonElement>('#report').click();
  const resize = () => forest?.resize();
  const visibility = () => { last = 0; if (document.hidden) { tour.pause(); explorationPaused = true; keys.clear(); pause.textContent = '继续'; } };
  const contextLost = (event: Event) => { event.preventDefault(); cancelAnimationFrame(frame); tour.pause(); error.hidden = false; error.querySelector('p')!.textContent = '图形上下文已丢失，请重新加载。'; };
  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', visibility);
  host.addEventListener('webglcontextlost', contextLost, true);
  void load();
  const port: ScenePort = {
    subscribeEvents(listener) { sceneListeners.add(listener); return () => { sceneListeners.delete(listener); }; },
    handleCommand() { throw new Error('M1 自动游览尚不支持训练命令；请在 M4 契约审查后接入。'); },
  };
  return { ...port, dispose() { disposed = true; attempt++; offSamples?.(); offEvents?.(); attention?.setTargets([]); cancelAnimationFrame(frame); forest?.dispose(); sceneListeners.clear(); window.removeEventListener('resize', resize); window.removeEventListener('keydown', keyDown); window.removeEventListener('keyup', keyUp); window.removeEventListener('blur', blur); document.removeEventListener('visibilitychange', visibility); host.removeEventListener('pointerdown', pointerDown); host.removeEventListener('pointermove', pointerMove); host.removeEventListener('pointerup', pointerUp); host.removeEventListener('pointercancel', blur); host.removeEventListener('webglcontextlost', contextLost, true); app.replaceChildren(); } };
}
