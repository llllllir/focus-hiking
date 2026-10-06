function a(u,o){const e=document.createElement("details");e.className="diagnostics",e.innerHTML="<summary>开发诊断 · simulated</summary><p>模拟信号不控制路线，不代表摄像头识别。</p><output></output>";const n=e.querySelector("output");let s="等待事件";const r=o.subscribeEvents(t=>{s=`${t.type} · ${Math.round(t.progress*100)}%`}),c=o.subscribeSamples(t=>{n.textContent=`source: ${t.source}
valid: ${t.valid}
x/y: ${t.x??"—"} / ${t.y??"—"}
${s}`});return u.append(e),()=>{r(),c(),e.remove()}}export{a as mountDiagnostics};
