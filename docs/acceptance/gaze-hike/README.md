# 眼动徒步集成检查

2026-10-04。这是自动化与模拟输入记录，真人 M2/M3 联合验收、视觉验收和听感验收未完成。

实际运行：`npm run typecheck`、`npm test`（全项目 46 项，其中徒步纯规则 10 项）、`npm run build`、`npm run check:docs`。本机 npm 不在 PATH，使用已安装的 npm CLI 执行同一脚本；依赖复用已安装工程，未在此 worktree 重新执行 `npm ci`。

浏览器运行命令：启动 `npm run dev -- --port 5177`，在已安装 Playwright 的环境执行 `node scripts/hike-browser-check.cjs`。标准入口使用 `playwright-core`；本机通过 `PLAYWRIGHT_MODULE` 指定已有安装。Edge headless、1600×1000、Intel gen-12lp WebGPU。

[最终回归结果](checks.json) 无运行时/GPU错误，验证时长选择、拒绝摄像头许可门禁、模拟屏内运动与转向、离屏停止、提前恢复、无法判断、暂停、真实等待 30 秒反馈上限、音频上下文与雷声调度、提前结束、去重、模拟时钟自动结束、再次进入、重载历史及手动场景回归。音频调度存在不代表听感经过验收。

这次约 39 秒交互运行平均 39.69 FPS，P95 帧时间 42.5ms；最终自动降到 800×500。慢帧仍明显，不宣称全程不卡顿。另用 `node scripts/hike-performance-check.cjs` 预热 20 秒后连续测 60 秒模拟徒步，实际测得平均 51.49FPS、P95 36.3ms、超过 50ms 的帧 6 个，最终自动档 800×500；具体结果保存在 [稳定性能记录](performance.json)。两项都不含真实摄像头模型推理，不用于联合性能验收。

[修复前失败记录](checks-before-gpu-reuse-fix.json) 保留同页重入 GPU 错误，便于追踪原因，不代表最终复验结果。

画面证据：[首页](home.png)、[行走](walking.png)、[离屏阴天](cloudy-stopped.png)、[结算](result.png)。均为模拟装置截图，没有摄像头图像。画面审美与写实程度仍待用户审查。
