import { SimulatedAttention } from './attention/simulated';
import { mountDiagnostics } from './attention/diagnostics';
const app = document.querySelector<HTMLElement>('#app')!;
app.innerHTML = '<h1>Focus Hiking · A 工程基础</h1><p>工程与模拟适配器已就绪；森林场景由 B 分支接入。</p><p>source: simulated · 摄像头未实现</p>';
const attention = new SimulatedAttention();
attention.setTargets([{ id: 'diagnostic-only', x: .3, y: .3, width: .4, height: .4, enabled: true }]);
const off = mountDiagnostics(app, attention);
if (import.meta.hot) import.meta.hot.dispose(() => { off(); attention.dispose(); });
