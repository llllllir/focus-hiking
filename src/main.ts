import { SimulatedAttention } from './attention/simulated';
import { mountDiagnostics } from './attention/diagnostics';
import { mountGame } from './game/app';
import './style.css';

const app = document.querySelector<HTMLElement>('#app')!;
const attention = new SimulatedAttention();
attention.setTargets([{ id: 'diagnostic-only', x: .3, y: .3, width: .4, height: .4, enabled: true }]);
const game = mountGame(app);
const off = mountDiagnostics(app, attention);
if (import.meta.hot) import.meta.hot.dispose(() => { game.dispose(); off(); attention.dispose(); });
