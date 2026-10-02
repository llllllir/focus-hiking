const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const excluded = new Set(['.git', '.tools', '.cache', 'node_modules', 'dist']);
const markdown = [];
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (excluded.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name.endsWith('.md')) markdown.push(full);
  }
}
walk(root);
const errors = [];
for (const file of markdown) {
  const source = fs.readFileSync(file, 'utf8');
  if (!source.trim()) errors.push(`${path.relative(root, file)}: empty document`);
  for (const match of source.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const link = match[1].split('#')[0];
    if (!link || /^(https?:|mailto:|app:|codex:)/.test(link)) continue;
    if (/^[A-Za-z]:[\\/]/.test(link)) {
      errors.push(`${path.relative(root, file)}: local absolute link cannot be used on GitHub`);
      continue;
    }
    let target;
    try { target = decodeURIComponent(link); } catch { errors.push(`${file}: malformed link`); continue; }
    if (!fs.existsSync(path.resolve(path.dirname(file), target))) errors.push(`${path.relative(root, file)}: missing ${target}`);
  }
}
const config = JSON.parse(fs.readFileSync(path.join(root, 'docs/project-plan.json'), 'utf8'));
if (config.milestones.length !== 5 || config.issues.length !== 15) errors.push('Expected five milestones and fifteen issues');
for (const milestone of config.milestones) {
  const tasks = config.issues.filter(x => x.stage === milestone.id);
  if (tasks.length !== 3 || new Set(tasks.map(x => x.role)).size !== 3) errors.push(`${milestone.id}: expected A, B, acceptance`);
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Checked ${markdown.length} Markdown files, five milestones and fifteen task specifications.`);
