# 场景2.0：自然山林升级

2026-10-03，B 的场景/游戏修订，依据用户新请求；继续使用同一地图。角色边界为 `src/scene/`、`src/game/`、场景脚本、资源和交接文档。共享契约、摄像头和训练模块没有变化。

已只读核对 [M1-B Issue #2](https://github.com/llllllir/focus-hiking/issues/2)，线上 main 为 `e624c530e2e4e896e8bba7ae09b41ffae10b33e1`。开始时本地处于 `codex/m1-scene`。最终检查时共享工作区出现外部 A 模块/依赖更新，当前分支已变成 `codex/m2-attention`；本次没有切换到该分支、修改这些模块或归属这些新增成果。本轮仍属于 B 的用户授权场景迭代，不能把工作区状态描述为已同步 main 或已提交场景 PR。后续须按 B 边界分离提交、由 A 真人审查；本次不提交、合并或关闭 Issue。

## 参考与落实

读取用户提供的 [agents-guidance](https://github.com/BAP-CAMP/agents-guidance) 中 blender-asset-pipeline、worlds-living、web-3d-release、realistic-trees、real-terrain 和 showcase-engineering 的方法。沿用既有项目，采用可复现生成、资产指纹、距离分级、实际 GPU 测量与区分验收状态的方法；没有复制其代码，也没有将项目换成 WebGPU 或新地图。

以 [theHunter: Call of the Wild 官方 Emerald Coast 开发介绍](https://callofthewild.thehunter.com/developer-diary-exploring-emerald-coast/) 作为自然植被分层、开阔地与林地交错的视觉参考，不提取游戏模型或纹理。[Poly Haven](https://polyhaven.com/license) 提供可再分发的 CC0 本体贴图。网络参考不代表本项目已经达到这些作品的质量。

## 实现

- 地形：320×320 网格、约 1.5m 间距，多尺度起伏，64 块地形用于空间筛选；保留 480×480m 地形和 390×381m 可走范围。溪岸缓坡与低位木桥重新衔接。地形是原创程序生成的虚构山林，不是 DEM 实测地形。
- 树木：使用官方 Sapling 0.3.7 生成两种不规则分枝，移除旧的等距螺旋枝条；用 CC0 枝叶图集、向外林冠法线和照片树皮材质，保留白桦、灌木、蕨类、倒木。近/中/远枝叶分级有滞回，细树枝按投影细节需要减少；温和风动与深度阴影使用同一变形。
- 林下：增加万次候选的草丛分布、花草、照片森林地表/岩石法线与粗糙度，地表按大尺度斑块呈现苔绿与裸土变化。营地净空与路线避让继续生效。
- 动物：六只原创程序建模鹿，补充口鼻、眼睛、内耳、腹部、尾部、肩臀与蹄；腿和颈部独立关节，行走/停留/低头活动交替，并检测地表、障碍和溪流。它们是程序关节动画，没有专业扫描毛发、骨骼蒙皮或完整行为树。
- 光照/水面：程序天空、预过滤天空环境、日光和距离雾；溪水增加动态法线。没有实时反射、静态间接光照贴图或完整 AO 烘焙。
- 画质：原画、高清、流畅切换内部尺寸、阴影和分级距离，保留当前位置与路线。默认原画；不会自动调低分辨率来掩盖性能结果。
- 保留可进入拱形帐篷、入口净空、墙体碰撞、自由探索、规划确认、路线返回与轻微步幅起伏。

参数记录在 `src/scene/config/natural-upgrade.json`，每组标明 design 基础和原因。资产出处、作者、大小和 SHA256 记录在 `src/scene/natural-assets.json`，构建工具记录在 `src/scene/config/build-tools.json`。

最终仓库核对：仍未配置 remote，但外部工作已建立 `e624c53` 文档基线提交；不再是开始时的无提交状态。本次未建立或修改 Git 基线，未将外部 A 改动收入 B 提交。

## 复现

标准工程命令继续是 `npm ci`、`npm run dev`、`npm run typecheck`、`npm test`、`npm run build`。本机使用 `node .tools/npm/package/bin/npm-cli.js` 运行相同脚本，不能据此声称新机器安装已经验证。

生成前需要现有 Blender 4.5.9 项目工具和官方 Sapling 0.3.7 ZIP，将 ZIP 解包到 `.tools/sapling-0.3.7/`，原 ZIP 留作 SHA256 核对。`.tools` 不提交；没有全局安装插件。

```powershell
node src/scene/download_natural_assets.mjs
node src/scene/run_blender.mjs
node .tools/npm/package/bin/npm-cli.js run typecheck
node .tools/npm/package/bin/npm-cli.js test
node .tools/npm/package/bin/npm-cli.js run build
```

Blender wrapper 使用工厂初始状态、隔离用户目录、Python 错误退出码；检查有限顶点并保存构建/输入指纹报告。照片下载核对官方 MD5、字节数及自身 SHA256，浏览器运行只用本地资源。

## 演示与验证

本地预览 `http://127.0.0.1:5174/`，点击进入森林，WASD 行走、拖动转头；路线规划选择目的地后确认。固定 `?seed=42`；`?view=ridge`、`?view=creek`、`?view=tent-outside`、`?view=tent`、`?view=animals` 是评审视角，不替代真实行走检查。

本轮证据放在 `docs/acceptance/scene-2.0-natural/`。`browser/checks.json` 是功能结果，`performance.json` 是原画档 60 秒行走实测，`release-audit.json` 记录体积、预算及指纹。没有把静态截图 FPS 当作最终性能。此前场景2.0的证据目录用于历史对照。

初轮 12 项逻辑测试、类型检查和生产构建已实际运行；最终共享工作区增加外部 A 测试后，19 项现有测试全部通过，最终构建也通过。新增 A 测试并非本次实现。完整浏览器检查验证自由行走、规划等待、暂停、到达、种子变化、动物移动、实际进入帐篷与侧墙阻挡。画质切换增加位置保持与分辨率检查。JS 场景构建块超过 500kB，有 Vite 提示。

60 FPS 门槛、预算与主观写实感按真实记录判断；预算未通过不能改称完成验收。真人晕动舒适度、完整自由漫步过桥、专业动物外观、摄像头联合旅程和导师确认仍待人审阅。没有发布、合并或提交本轮远程 PR。

最终原画实测：Edge/ANGLE Intel UHD，1920×1200，60 秒目的地行走，平均 27.66 FPS、帧时间 p95 42.7ms，加载 418ms（本地缓存环境）。GLB 30,919,304 bytes，9 张新增照片贴图指纹核对通过。60 FPS 与内部 30,000,000 bytes 体积预算未达；记录末帧总绘制 229、总三角面 1,606,686，含阴影而非独立主 pass，不冒充整条路线峰值。

浏览器检查命令为 `node scripts/scene-2-check.cjs`，设置 `PLAYWRIGHT_MODULE` 指向现有 Playwright Core，`SCENE_EVIDENCE_DIR=docs/acceptance/scene-2.0-natural/browser`，使用 Edge。多次运行记录改为截获运行报告 Blob，避免连续自动下载限制；实际单次下载由演示脚本另行保存。`node scripts/natural-audit.cjs` 核对资源并输出预算。演示使用 `node scripts/natural-demo.cjs`，`PLAYWRIGHT_BROWSERS_PATH=.tools/playwright` 使用现有项目内 FFmpeg；不会要求全局安装。

35 秒实际浏览器路线演示已保存为 `browser/forest-walk-35s.webm`（1280×800、高清档、手动选择路线，非真人验收）。`demo-report.json` 来自实际单次报告下载；`demo.json` 记录零页面异常。视频不作为原画性能测量。
