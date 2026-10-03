# 框架场景1.0：探索迭代记录

2026-10-03。角色 B，任务 [M1-B #2](https://github.com/llllllir/focus-hiking/issues/2)，main 基线 e624c530e2e4e896e8bba7ae09b41ffae10b33e1，场景分支迭代前 08f581f17d2cfcf55749b66e86593882562d73f1。单 agent 执行 B 场景任务；A 模型、工程依赖、锁文件与共享字段未修改。

## 产出与检查

原始自动游览版正式更名“框架场景1.0”；旧证据保留 [v0.1](../v0.1/README.md)。本次增加自由观察、视角归正、WASD、按目的地沿小径步行、探索暂停／恢复；自动游览保留。三条同图连通小径：溪谷主路约 95.4m、苔岩环线 66.5m、山坡观景路 75.1m；路径采样高度范围约 7.09m。加入真实叶片纹理与林下植物、岩石、倒木和根系，更新源工程、四个相机与地图。

Blender 4.5.9 LTS 实际执行 `blender --background --python-exit-code 1 --python src/scene/build_forest.py -- --render` 成功，GLB 12976516 bytes、可编辑工程 16606080 bytes。输入资源全部在仓库，无 `.tools` 依赖。[素材与许可](../../../src/scene/ASSETS.md)

实际运行 `npm test` 等价本机 npm CLI 命令：10 项通过，包括停留信号原测试、支路往返、步行速度、到达终点、地图高差、暂停／重启。地图测试曾发现溪流目的地偏离路径，已修正并通过。`npm run build` 包含类型检查并通过，主 JS 约 600.53KB，仍有 500KB 包体提示。沙箱首次构建被父目录读取权限阻止，正常 Windows 环境构建成功，不掩盖首次失败。

实际 headless Edge 检查：

- [基础回归](browser/checks.json)：资源失败重试、暂停 10 秒、恢复、重启三次，无 pageerror。
- [探索结果](browser/exploration-checks.json)：命名、拖动转头、归正、键盘行走、暂停 10 秒、苔岩环线目的地到达；无 pageerror。曾修复按钮焦点导致 WASD 被忽略的问题。
- [探索时的运行记录](browser/arrived.json)：真实适配器 Intel UHD / D3D11；实际沿支路行走约 50.26m。手动输入明确为 manual，摄像头未申请。
- [完整自动路线](browser/full-tour.json)：实际两分钟播放到达终点。终点下载入口初次验证失败，已增加可见的下载按钮并重新检查；性能结果以 [游览测量](browser/tour-benchmark.json) 为准。
- [40 秒浏览器演示](browser/tour-40s.webm)。这是实际浏览器录制，没有替换为离线渲染。

最终自动游览测量：默认画质、1920×1200、Intel UHD，3600 个有效帧、约 114.10 秒采样，平均 31.55FPS，帧时间 P95 43.2ms，824 帧超过 33.33ms。场景 60FPS 目标未达到，也不能宣布稳定 30FPS 或后续联合门槛通过；RTX 4060 桌面运行尚未实测。画质与性能冲突保留给负责人审阅，未降低验收标准。

## 同镜头画面

| 地点 | 浏览器 1920×1200 | Eevee 1920×1200 |
| --- | --- | --- |
| 营地 | [浏览器](browser/camp.png) | [Eevee](eevee/camp.png) |
| 苔岩环线 | [浏览器](browser/trail.png) | [Eevee](eevee/trail.png) |
| 溪流 | [浏览器](browser/creek.png) | [Eevee](eevee/creek.png) |
| 山坡 | [浏览器](browser/ridge.png) | [Eevee](eevee/ridge.png) |

## 未通过与交接

用户的 [新标准](../../scene-upgrade.md) 仍需人工逐项审阅。当前树形、路径边缘、近景材质与林冠光照仍明显简化；浏览器与 Eevee 的明暗有差异，未宣布达到写实游戏风格。静态间接 lightmap、法线／AO 烘焙与距离分级仍未完成；当前采用实例化、区域视锥裁剪和静态合批。第一轮重复植物约 2.8M triangles、短采样约 24FPS，去重和裁剪后重新测量；不能以景物增加或功能检查通过代替画质和性能验收。

真实眼动未接入：`mountGame(app, attention?)` 消费现有 AttentionPort／TargetRegion／GazeEvent，近期有效 camera 样本才允许目的地确认，移动中锁定选择，到达重新开放。当前 `src/main.ts` 不传模拟源，A 在真实输入可用后完成接线和审查。任意地面点的真实注视投射、摄像头成功率与误触发尚未验证；不能将目的地鼠标点击描述为眼动自由探索已完成。

B 草稿 PR 等待 A 真人审查；A 基础 PR、双方合并、用户画质确认、桌面 GPU 性能和导师验收均未完成，不关闭 M1。
