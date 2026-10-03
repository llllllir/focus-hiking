import { mountGazeTest } from './test-page';
import { eyeDisplay } from './features';
import type { CameraAttention } from './camera';

/** Composition only: uses B's existing mountGame(app, AttentionPort) contract. */
export function mountGazeScene(parent: HTMLElement) {
  const setup = document.createElement('div'), scene = document.createElement('div');
  setup.className = 'gaze-session-layer'; scene.className = 'gaze-session-layer gaze-scene-root'; scene.hidden = true;
  parent.replaceChildren(setup, scene);
  let sceneDispose: (() => void) | null = null, activeCamera: CameraAttention | null = null, disposed = false, entering = false;
  const leaveScene = () => {
    activeCamera?.setInteractionEnabled(false);
    sceneDispose?.(); sceneDispose = null;
    scene.hidden = true; setup.hidden = false;
  };
  const enterScene = async (camera: CameraAttention) => {
    if (entering || disposed || !camera.interactionReady) return;
    entering = true; activeCamera = camera;
    try {
      const { mountGame } = await import('../game/app');
      if (disposed || !camera.interactionReady) return;
      scene.hidden = false; setup.hidden = true;
      const game = mountGame(scene, camera);
      const hint = scene.querySelector('.explore small');
      if (hint) hint.textContent = '真实摄像头已连接。路线规划时注视目的地约 1.2 秒出发；移动期间暂停选择。';
      const hud = document.createElement('aside'); hud.className = 'gaze-scene-hud';
      hud.innerHTML = '<div class="gaze-eye"><div class="gaze-iris"><i></i></div></div><strong>camera · 正在确认视线</strong><output></output><button type="button">返回眼动校准</button>';
      scene.append(hud);
      const offUpdate = camera.subscribeUpdates(update => {
        hud.dataset.state = update.screen.state;
        hud.querySelector('strong')!.textContent = `camera · ${update.screen.state === 'on-screen' ? '屏幕内' : update.screen.state === 'off-screen' ? '屏幕外，暂停选择' : '无法判断，暂停选择'}`;
        if (update.features) { const p = eyeDisplay(update.features); (hud.querySelector('.gaze-iris') as HTMLElement).style.transform = `translate(${Math.max(-20, Math.min(20, (p.x - .5) * 80))}px,${Math.max(-12, Math.min(12, (p.y - .5) * 30))}px)`; }
        if (!camera.interactionReady) hud.querySelector('output')!.textContent = '校准已失效，请返回重新校准。';
      });
      const offGaze = camera.subscribeEvents(event => { hud.querySelector('output')!.textContent = event.type === 'signalLost' ? '信号中断，停留已清零' : `${event.targetId ?? ''} · ${Math.round(event.progress * 100)}%${event.type === 'targetConfirmed' ? ' · 已确认' : ''}`; });
      // B owns movement/pause locking through enabled TargetRegions. Do not add
      // another movement latch: cancelling a route need not emit an arrival.
      const offScene = game.subscribeEvents(event => {
        if (event.type === 'movementStarted') hud.querySelector('output')!.textContent = '正在行走，目的地选择已锁定';
      });
      hud.querySelector('button')!.onclick = leaveScene;
      sceneDispose = () => { offScene(); offGaze(); offUpdate(); game.dispose(); hud.remove(); };
      camera.setInteractionEnabled(true);
    } catch (error) {
      leaveScene(); const output = setup.querySelector('.gaze-status'); if (output) output.textContent = `场景加载失败，可重试：${error instanceof Error ? error.message : String(error)}`;
    } finally { entering = false; }
  };
  const disposeSetup = mountGazeTest(setup, { onSceneReady: camera => { void enterScene(camera); } });
  return () => { disposed = true; leaveScene(); disposeSetup(); parent.replaceChildren(); };
}
