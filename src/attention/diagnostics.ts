import type { AttentionPort } from '../contracts';

export function mountDiagnostics(parent: HTMLElement, attention: AttentionPort) {
  const panel = document.createElement('details');
  panel.className = 'diagnostics';
  panel.innerHTML = '<summary>开发诊断 · simulated</summary><p>模拟信号不控制路线，不代表摄像头识别。</p><output></output>';
  const output = panel.querySelector('output')!;
  let eventLabel = '等待事件';
  const offEvent = attention.subscribeEvents(event => { eventLabel = `${event.type} · ${Math.round(event.progress * 100)}%`; });
  const offSample = attention.subscribeSamples(sample => {
    output.textContent = `source: ${sample.source}\nvalid: ${sample.valid}\nx/y: ${sample.x ?? '—'} / ${sample.y ?? '—'}\n${eventLabel}`;
  });
  parent.append(panel);
  return () => { offEvent(); offSample(); panel.remove(); };
}
