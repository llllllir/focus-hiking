# GitHub Pages 发布

2026-10-06 用户授权公开仓库并发布当前版本。仓库已公开，原链接是依赖本机服务的地址，因此改为永久的 HTTPS 入口：

- 网站：https://llllllir.github.io/focus-hiking/
- 代码：https://github.com/llllllir/focus-hiking/tree/codex/m3-attention-calibration-fix
- 静态发布分支：`codex/github-pages-site`，Pages 来源为该分支根目录。

保留所有其他分支，不合并、不直接推送 main。发布分支仅包含当前生产构建、`.nojekyll` 和公开版本信息，不包含开发工具、凭据、摄像头帧或个人校准存档。

## 子目录适配

构建时设置 `SITE_BASE=/focus-hiking/`。Vite 处理入口、CSS 和打包资源；统一 `sitePath` 处理森林模型、清单、声音、主页与手动探索链接。眼动 Worker 原有 BASE_URL 机制继续处理本地 MediaPipe 模型和 WASM。默认本地构建仍使用 `/`，共享契约没有改变。

PowerShell 标准更新命令：

```powershell
npm ci
npm run typecheck
npm test
$env:SITE_BASE='/focus-hiking/'
npm run build
```

将 `dist` 内容同步到独立发布分支的根目录，审核产物后提交并推送该分支，等待 Pages 部署完成。不要把 `.tools` 或 `.env` 加入发布目录。公开 `release.json` 记录源提交和构建基路径。

官方依据：[Vite 静态部署](https://vite.dev/guide/static-deploy.html)、[GitHub Pages API](https://docs.github.com/en/rest/pages/pages?apiVersion=2022-11-28)。

## 检查范围

本机实际使用已有 Node/npm 依赖执行 TypeScript、tsx 测试和 Vite 构建；63 项逻辑测试通过。`scripts/pages-browser-check.cjs` 检查主页、森林、手动入口、晴雨声音资源、声音来源与真实眼动 Worker/模型/WASM 的加载；摄像头输入明确使用合成 Canvas，不属于真人精度验收。通过 `SITE_URL` 可以检查本地子目录或公网版本，结果保存到 `docs/acceptance/github-pages/`。

摄像头参数与环境存档只保存在当前浏览器；迁移到公网域名不会自动迁移旧本机存档。真人眼动精度、长时性能和主观声音听感仍待测试。
