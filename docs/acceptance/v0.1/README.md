# 框架场景1.0：原始自动游览版本记录

2026-10-03 用户正式命名并指出：画质／画风、景物数量、路线丰富度、自由视角、路况起伏与徒步感均不满足要求。本目录保留原始版本运行证据；后续探索迭代见 [修订 spec](../../scene-upgrade.md)。原检查成功不代表本次新标准通过。

状态：初版开发中，未通过联合验收；不关闭 M1。线上基线 main 为 e624c530e2e4e896e8bba7ae09b41ffae10b33e1，任务 [M1-A #1](https://github.com/llllllir/focus-hiking/issues/1)、[M1-B #2](https://github.com/llllllir/focus-hiking/issues/2)。用户要求本次联合初版，单 agent 顺序实现；没有真人交叉审批或伪装对方身份。

## 已实现

A：TS/Vite/Three.js 工程、共享类型与订阅边界、模拟源与诊断，停留确认、失效重置和重复事件防护。B：森林资源制作脚本、GLB 加载与植被实例化、自动游览状态、暂停恢复/重启、错误重试、运行记录下载。接口字段保持 docs/interfaces.md，不新增任务摘要。

## 实际检查（2026-10-03）

本机 Node 24.19，npm 11.6.1 使用工作区工具副本，不提交工具或凭据。

- `node .tools/npm/package/bin/npm-cli.js install --no-audit --no-fund`：退出 0，安装 77 个包，生成 package-lock.json。
- `node .tools/npm/package/bin/npm-cli.js run typecheck`：退出 0。
- `node .tools/npm/package/bin/npm-cli.js test`：正常本机环境退出 0，6 项测试通过；沙箱首次因 uv_os_get_passwd ENOMEM 失败，未掩盖该限制。
- `node .tools/npm/package/bin/npm-cli.js run build`：退出 0；Three.js 主包约 587KB，构建有超过 500KB 的提示，未当作性能达标证明。
- `node .tools/npm/package/bin/npm-cli.js run dev -- --port 5173 --strictPort`：Vite 本地启动成功。
- `node scripts/check-docs.cjs`：实际检查通过，检查文档、五个 Milestone 和十五项任务，不验证功能。

## 演示与待验证

打开本地预览，点击开始，经过营地、小径、溪流；暂停、恢复、回起点。来源始终 simulated，不申请摄像头。下载运行记录保存真实帧时间、浏览器/GPU、加载和画质参数；不保存图像或摄像头数据。

Blender 4.5.9 LTS 实际执行 `blender --background --python-exit-code 1 --python src/scene/build_forest.py -- --render` 成功，保存可编辑工程 12544855 bytes、GLB 11094260 bytes、路线/镜头清单及营地/小径/溪流三个 Eevee 视角。首轮引擎枚举错误已修复，未将失败首轮作为成功结果。

本机 headless Edge 实际运行 `scripts/browser-check.cjs`：资源失败重试、暂停 10 秒、恢复、连续重启三次通过，无 pageerror；[检查结果](browser/checks.json)。三组同镜头 1920×1200 浏览器截图与 Eevee 图均已生成。没有真人确认画质；初版仍明显简化，不能声称达到写实基准。

短时运行记录：实际适配器 ANGLE Intel UHD / D3D11，1920×1200 绘制缓冲；加载 128.2ms（本地资源、重试后计时，不代表首次下载）；508 帧算术帧时间平均约 36.63FPS，下载时记录 94 draw calls、1252100 triangles。该采样含初始静止与暂停，不是纯游览 FPS 或 15 分钟联合验收，未达到场景 60FPS 目标。[原始帧时间](browser/run.json)

Playwright 录制约 40 秒[实际游览 WebM](browser/tour-40s.webm)已完成。最终版本完整两分钟实际播放已到终点，进度 1、时间 02:00，见 [完整路线结果](browser/full-tour.json)。真人桌面 GPU 性能、双方 PR 审查、导师确认：未完成。

固定镜头对照：[营地浏览器](browser/camp.png) / [营地 Eevee](eevee/camp.png)，[小径浏览器](browser/trail.png) / [小径 Eevee](eevee/trail.png)，[溪流浏览器](browser/creek.png) / [溪流 Eevee](eevee/creek.png)。画质审阅仍未通过。

已知限制：程序枝叶与场景是初版，尚未声明达到 Eevee 基准；法线/AO 烘焙和静态间接 lightmap 尚未完成；所有摄像头与训练功能均未实现。具体资源见 [素材记录](../../../src/scene/ASSETS.md)。
