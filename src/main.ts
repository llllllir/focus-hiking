import './style.css';

const app = document.querySelector<HTMLElement>('#app')!;
if (new URLSearchParams(location.search).get('mode') === 'gaze-scene') {
  const { mountGazeScene } = await import('./attention/scene-session');
  const dispose = mountGazeScene(app);
  if (import.meta.hot) import.meta.hot.dispose(dispose);
} else if (new URLSearchParams(location.search).get('mode') === 'gaze-test') {
  const { mountGazeTest } = await import('./attention/test-page');
  const dispose = mountGazeTest(app);
  if (import.meta.hot) import.meta.hot.dispose(dispose);
} else {
  const [{ SimulatedAttention }, { mountDiagnostics }, { mountGame }] = await Promise.all([
    import('./attention/simulated'), import('./attention/diagnostics'), import('./game/app'),
  ]);
  const attention = new SimulatedAttention();
  attention.setTargets([{ id: 'diagnostic-only', x: .3, y: .3, width: .4, height: .4, enabled: true }]);
  const game = mountGame(app);
  const off = mountDiagnostics(app, attention);
  if (import.meta.hot) import.meta.hot.dispose(() => { game.dispose(); off(); attention.dispose(); });
}
