const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const source = fs.readFileSync(path.join(root, 'Focus-Hiking-调研.md'), 'utf8').replace(/^\uFEFF/, '');
const escape = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
function inline(s) {
  const links = [];
  s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, (_, label, url) => {
    links.push(`<a href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)} ↗</a>`);
    return `LINKTOKEN${links.length-1}END`;
  });
  return escape(s).replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/LINKTOKEN(\d+)END/g, (_, n) => links[Number(n)]);
}
function render(md) {
  const lines = md.trim().split(/\r?\n/); let result = ''; let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) { const level = heading[1].length; result += `<h${level}>${inline(heading[2])}</h${level}>`; i++; continue; }
    if (line.startsWith('|')) {
      const rows = []; while (i < lines.length && lines[i].startsWith('|')) rows.push(lines[i++]);
      const cells = row => row.split('|').slice(1,-1).map(s=>s.trim());
      result += '<div class="table-scroll"><table><thead><tr>' + cells(rows[0]).map(c=>`<th>${inline(c)}</th>`).join('') + '</tr></thead><tbody>';
      for (const row of rows.slice(2)) result += '<tr>' + cells(row).map(c=>`<td>${inline(c)}</td>`).join('') + '</tr>';
      result += '</tbody></table></div>'; continue;
    }
    const list = line.match(/^(?:- |\d+\. )(.+)$/);
    if (list) {
      const numbered = /^\d+\./.test(line); const tag = numbered ? 'ol' : 'ul'; result += `<${tag}>`;
      const pattern = numbered ? /^\d+\. (.+)$/ : /^- (.+)$/;
      while (i < lines.length && pattern.test(lines[i])) result += `<li>${inline(lines[i++].match(pattern)[1])}</li>`;
      result += `</${tag}>`; continue;
    }
    const paragraph = []; while (i < lines.length && lines[i].trim() && !/^(#{1,3}\s|\||- |\d+\. )/.test(lines[i])) paragraph.push(lines[i++]);
    result += `<p>${inline(paragraph.join(' '))}</p>`;
  }
  return result;
}
const chunks = source.split(/(?=^## )/m);
const lead = chunks.shift();
const sections = chunks.map((chunk,i)=>({id:`part-${i+1}`, title:chunk.split('\n')[0].replace(/^## /,''),body:render(chunk)}));
const html = `<!doctype html>
<html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Focus Hiking · 学界与业界调研</title>
<style>
:root{--ink:#20332f;--muted:#62756e;--green:#266950;--paper:#f6f7f2;--line:#dce4db}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.85 system-ui,"Microsoft YaHei",sans-serif}a{color:var(--green);text-underline-offset:4px}aside{position:fixed;inset:0 auto 0 0;width:260px;padding:30px 22px;background:#edf2e9;overflow:auto;border-right:1px solid var(--line)}.brand{font-size:21px;font-weight:750;letter-spacing:-.6px}.subtitle{font-size:12px;color:var(--muted);margin:4px 0 22px}nav a{display:block;text-decoration:none;color:var(--ink);font-size:14px;padding:9px 8px;border-radius:6px;line-height:1.65}nav a:hover{background:#dce7d8}main{margin-left:260px;padding:32px 44px 70px;max-width:1450px}header{background:#1f493b;color:#f4f6ee;padding:35px;border-radius:18px;margin-bottom:24px}header h1{font-size:32px;line-height:1.4;margin:8px 0 18px}header p{color:#d5e4d9;font-size:14px;margin:0}.eyebrow{font-size:11px;letter-spacing:2px;color:#d4dfac}.toolbar{display:flex;gap:12px;align-items:center;margin:0 0 22px;position:sticky;top:0;background:var(--paper);padding:12px 0;z-index:3}input{width:100%;max-width:470px;border:1px solid #bccdbf;border-radius:10px;padding:12px 14px;font:inherit;background:white}button{border:1px solid #bccdbf;background:white;padding:12px 16px;border-radius:10px;color:var(--ink);cursor:pointer;white-space:nowrap}.count{font-size:12px;color:var(--muted)}section{background:white;border:1px solid var(--line);border-radius:14px;padding:26px 30px;margin-bottom:22px;scroll-margin-top:100px}h2{font-size:25px;margin:0 0 20px;line-height:1.5}h3{font-size:19px;margin:30px 0 13px;line-height:1.6;padding-top:18px;border-top:1px solid var(--line)}p{margin:12px 0}strong{color:#244f3d}li{margin:6px 0}.table-scroll{overflow:auto;margin:20px 0;border:1px solid var(--line);border-radius:9px}table{border-collapse:collapse;width:100%;font-size:14px;min-width:620px;line-height:1.75}th{text-align:left;background:#edf3eb;font-weight:650;padding:13px 14px}td{padding:13px 14px;border-top:1px solid var(--line);vertical-align:top}tbody tr:nth-child(even){background:#fafbf8}td:first-child{min-width:110px;font-weight:550}footer{color:var(--muted);font-size:13px;padding:14px 0}.empty{display:none;padding:24px;background:white;border-radius:12px}[hidden]{display:none!important}a:focus-visible,button:focus-visible,input:focus-visible{outline:3px solid #91b95e;outline-offset:3px}
main{max-width:1220px}section{padding:32px 36px;border-radius:10px}section p{max-width:72ch;margin:17px 0}h2{font-size:25px;letter-spacing:.2px}h3{margin-top:35px;padding-top:24px;font-size:20px}header{border-radius:12px;padding:38px}header h1{max-width:22ch;font-size:34px}header p{line-height:1.8}table{min-width:560px}td:first-child{font-weight:500}footer{max-width:72ch}
@media(max-width:1000px){aside{width:215px;padding:24px 15px}main{margin-left:215px;padding:24px}section{padding:24px 20px}header h1{font-size:27px}}
@media(max-width:720px){aside{position:relative;width:auto;border-right:none;border-bottom:1px solid var(--line);padding:18px}nav{display:flex;gap:6px;overflow:auto}nav a{min-width:150px;background:#e2eadc}.subtitle{margin-bottom:10px}main{margin:0;padding:16px}header{padding:25px 22px}header h1{font-size:25px}section{padding:22px 18px}.toolbar{flex-wrap:wrap}input{max-width:none;flex:1;min-width:160px}.count{width:100%}h2{font-size:22px}}
@media print{aside,.toolbar{display:none}main{margin:0;padding:0;max-width:none}body{font-size:11pt;background:white}header{background:white;color:black;border-bottom:2px solid #555;border-radius:0;padding:0 0 16px}header p,.eyebrow{color:#444}section{border:none;padding:12px 0;break-before:auto}h2,h3{break-after:avoid}tr{break-inside:avoid}.table-scroll{overflow:visible}table{min-width:0;font-size:9pt}a{color:black}a::after{content:none}section[hidden]{display:block!important}}
</style></head><body>
<aside><div class="brand">Focus Hiking</div><div class="subtitle">项目研究报告 · 2026.10.02</div><nav aria-label="报告目录">${sections.map(s=>`<a href="#${s.id}">${escape(s.title)}</a>`).join('')}</nav></aside>
<main><header><div class="eyebrow">自然环境 · 注意练习 · 产品设计</div>${render(lead)}</header><div class="toolbar"><input id="search" type="search" aria-label="搜索报告章节" placeholder="搜索：自然、任务、AI、反馈…"><button id="clear" type="button">清除</button><button id="print" type="button">打印 / PDF</button><span class="count" id="count" aria-live="polite">9 个章节</span></div>
${sections.map(s=>`<section id="${s.id}">${s.body}</section>`).join('')}<p class="empty" id="empty">没有匹配章节。试试“注意”“反馈”或“自然”。</p><footer>参考资料与研究说明见文末。报告可离线阅读，打开外部资料需要联网。</footer></main>
<script>
const search=document.getElementById('search');const sections=Array.from(document.querySelectorAll('section'));const count=document.getElementById('count');
function filter(){const q=search.value.trim().toLocaleLowerCase();let n=0;for(const section of sections){section.hidden=q!==''&&!section.textContent.toLocaleLowerCase().includes(q);if(!section.hidden)n++;}count.textContent=q?'匹配 '+n+' / '+sections.length+' 个章节':sections.length+' 个章节';document.getElementById('empty').style.display=n?'none':'block';}
search.addEventListener('input',filter);document.getElementById('clear').addEventListener('click',()=>{search.value='';filter();search.focus();});document.getElementById('print').addEventListener('click',()=>window.print());document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{search.value='';filter();}));
</script></body></html>`;
fs.writeFileSync(path.join(root,'Focus-Hiking-调研.html'), html, 'utf8');
if(sections.length!==9)throw Error('Unexpected chapter count');
if(html.includes('LINKTOKEN'))throw Error('Unresolved link');
for (const match of html.matchAll(/href="#([^"]+)"/g)) if(!html.includes(`id="${match[1]}"`))throw Error('Broken anchor');
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];for(const script of scripts)new Function(script[1]);
console.log(JSON.stringify({chapters:sections.length, tables:(html.match(/<table>/g)||[]).length, sourceLinks:(html.match(/href="https/g)||[]).length, output:'Focus-Hiking-调研.html'}));
