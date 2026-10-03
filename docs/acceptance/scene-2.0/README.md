# 场景2.0验证记录

日期：2026-10-03。B 场景／游戏交付，当前仍是待人工审阅版本。功能检查不等于写实画质、真实摄像头、舒适度或总阶段验收。

实现与交接见 [场景2.0](../../scene-2.0.md)，素材与许可见 [ASSETS](../../../src/scene/ASSETS.md)。历史场景1.0的截图与数据保持原目录。

实际使用工作区忽略目录内的 npm CLI 执行标准脚本：`node .tools/npm/package/bin/npm-cli.js run typecheck`、`node .tools/npm/package/bin/npm-cli.js test`、`node .tools/npm/package/bin/npm-cli.js run build`。沙箱内初次测试的 Node 用户信息读取失败、构建的 esbuild 配置读取被拒；切换允许的执行权限后重跑。标准环境仍用 `npm run typecheck`、`npm test`、`npm run build`，没有更改配置或锁文件。

浏览器脚本为 `node scripts/scene-2-check.cjs`，使用已有 Playwright Core 与本机 Edge；脚本可通过 `PLAYWRIGHT_MODULE` 和 `PREVIEW_URL` 指向已安装工具与本地地址。本次开发预览为 5174 端口，因为 5173 已被其他进程使用。

证据位于 `browser/`：地图来源为 manual，固定 seed=42 的营地／环线／溪流／山顶截图，输入与暂停／规划／到达记录，另一个 seed=43 的记录。摄像头未接入，图像均为三维场景，没有测试者摄像头帧。

用户需确认：三条路线各方向的景观差异、随机变化是否足够、山顶俯瞰、近景质感、动物行为、行走舒适度、完整路线往返、扩大边界和第二座桥的自由探索。联合推理负载、Eevee 与浏览器逐视角对照和导师验收仍未进行；不关闭 Milestone。用户“火坡”一词仍待澄清。

营地追加可进入帐篷：`tent-outside.png` 为外观、`tent.png` 为固定内部视角，`tent-entered.png` 与 `inside.json` 为从起点通过键盘 WASD 实际走入；`tent-wall.json` 验证侧墙阻挡。自动检查包括入口／下方清除树石、真实步行进入与侧墙碰撞，不能用固定内部截图替代进入检查。

最终 `npm test` 的 12 项逻辑测试通过，`npm run typecheck` 与 `npm run build` 通过；生产构建仍提示主 JS 包超过 500kB。Blender 最终使用 `-- --reuse-bark` 导出成功；早先重复烘焙／逐个操作的慢速制作进程已停止，最终制作器直接构造网格减少重复计算。

最终浏览器脚本通过：命名、自由行走、路线确认前不出发、暂停／到达、动物移动、两个种子、WASD 进入帐篷、侧墙阻挡，无 pageerror。60 秒目的地行走记录见 `browser/performance.json`：实际适配器 Intel UHD / ANGLE D3D11，1920×1200，2262 个帧间隔，平均约 37.03FPS，帧时间 P95 30.6ms；本次缓存载入 284ms，不能当作首次加载。尚未达到单场景 60FPS 目标，亦未进行真实摄像头联合性能验收。运行 GLB 19,387,564 bytes，Blender 源 37,938,063 bytes。
