# 公网发布检查 · 2026-10-06

公开入口：https://llllllir.github.io/focus-hiking/

源代码提交 `47aaf825599e9c724cc287a67d9adf1af7b4b6dd`，静态分支 `codex/github-pages-site` 提交 `8b98642f3fbef793029ca3bea8fffe2d75ad9033`。Pages 来源为静态分支根目录，HTTPS 已启用。[实际部署任务](https://github.com/llllllir/focus-hiking/actions/runs/37445629054) 成功，仓库保持 public，仓库首页链接已设置为网站。没有合并、删除分支或推送 main。

## 实际结果

- TypeScript 检查通过；63 项逻辑测试通过；Vite 使用 `/focus-hiking/` 基路径生产构建通过；文档检查通过。
- GitHub Application checks 与 Documentation checks 均成功。
- 本地子目录与公网生产页面均通过浏览器检查：主页/封面/返回链接/手动入口、森林模型、晴雨音频、80%初始音量、声音来源、真实 MediaPipe Worker/模型/WASM 初始化。页面脚本错误与 HTTP 400+ 响应均为 0。
- 产物与新文件扫描未发现本机用户目录、常见凭据前缀或私钥。只推送生产文件，环境档案与摄像头帧未上传。

命令为 `tsc --noEmit`、`tsx --test tests/*.test.ts`、`SITE_BASE=/focus-hiking/` 下的 Vite build，以及 `node scripts/check-docs.cjs`。浏览器命令为 `node scripts/pages-browser-check.cjs`，先配置本机 `PLAYWRIGHT_MODULE`；公网检查额外配置 `SITE_URL=https://llllllir.github.io/focus-hiking/`。该记录不保存本机工具绝对路径。

证据：[本地子目录](local.json)、[公网](live.json)。摄像头输入明确使用合成 Canvas，真实模型照常加载推理；并非真人精度验收。浏览器检查验证声音启动状态与资源加载，不代表扬声器实际听感。保留原包体积提醒；首次下载较大的森林模型可能需要等待。
