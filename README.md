# Focus Hiking

电脑端虚拟登山与注视交互训练项目。屏幕呈现森林登山场景，摄像头在本地估计注视区域，通过注视路标、观察任务和温和环境事件构成训练体验。

## 两位开发者从这里开始

| 开发者 | 角色 | 第一个任务 |
| --- | --- | --- |
| [llllllir](https://github.com/llllllir) | A：主仓所有者；注视、训练与数据 | M1-A：工程骨架、冻结接口和模拟输入 |
| [RUI-TW](https://github.com/RUI-TW) | B：collaborator；场景、游戏与界面 | M1-B：今天可看的初步森林登山场景 |

1. 阅读 [最终开发计划](docs/development-plan.md)、[协作规则](CONTRIBUTING.md) 和 [AGENTS.md](AGENTS.md)。
2. A 阅读 [注意力开发者任务包](docs/agent-attention.md)；B 阅读 [场景开发者任务包](docs/agent-scene.md)。
3. 在 [Milestones](https://github.com/llllllir/focus-hiking/milestones) 找到当前阶段，在自己的交付 Issue 上工作。
4. 每人使用自己的 clone 和 `codex/mN-attention` / `codex/mN-scene` 分支，互相审核后分别合并。

## 计划与研究

- [总计划及个人里程碑](docs/development-plan.md)
- [Phase 1 规格](specs/001-phase-1/spec.md) · [实施计划](specs/001-phase-1/plan.md) · [任务清单](specs/001-phase-1/tasks.md)
- [偏写实森林视觉方向与参考资料](specs/001-phase-1/visual-direction.md)
- [摄像头本地注视技术方案](docs/gaze-system.md)
- [跨模块接口](docs/interfaces.md)
- [学界与业界研究报告](docs/research.md) · [阅读版 HTML](docs/research.html)
- [验收材料规范](docs/acceptance/README.md)
- [GitHub 初始化与权限说明](docs/github-setup.md)

## 当前实现状态

2026-10-04 用户明确改为“容易进入徒步优先”：位置校准 **15项**，屏幕内外校准 **10项**，取消转头采样；五点位置验证和屏幕状态验证使用放宽后的游戏入口门槛。详情见 [轻松进入模式](docs/easy-entry.md)。此前版本已保存为 [phase7](docs/phase7.md) 检查点，不把新的体验门槛称为原精度验收通过。

2026-10-04 校准流程修复：新增“连续校准与验证”，总采样项 61 → 47，切后台/当前点失败保留此前进度；修正约 11Hz 输入被按 15Hz 计数导致验证难通过的问题。保留独立验证及误差门槛。实际检查及真人待验收项见 [校准闭环修复](docs/acceptance/calibration-flow/README.md)。

默认入口已接入本地摄像头校准与 5/10/15 分钟眼动徒步：屏内注视控制方向与行走，明确离屏停步并触发最多 30 秒阴天雷声，返回后恢复晴天；结束记录本地体验汇总、成就与历史。自由探索、地图路线和晴雨模式通过 `?mode=explore` 保留。浏览器模拟交互检查通过，真人摄像头、长时联合性能、音效听感与写实画质仍待验收。见 [完整开发与交接](docs/gaze-hike-game.md) 和 [检查记录](docs/acceptance/gaze-hike/README.md)。

已建立 M1 初版工程、共享契约、模拟诊断及森林自动游览。场景资源由 Blender 脚本制作；视觉基准、真人体验与总阶段验收仍待确认。详细状态见 [v0.1 记录](docs/acceptance/v0.1/README.md)。

## 本地运行

要求 Node.js 22.12+ 或 Node.js 24 与 npm。在仓库根目录执行：

```powershell
npm ci
npm run dev
```

打开终端给出的本地地址，选择时长后点击校准并开始。摄像头授权、个人校准、独立验证和全屏准备通过后进入徒步；可暂停、提前结束及查看本地记录。开发模拟诊断与浏览器装置明确标记 simulated，不用于真人验收。

```powershell
npm run typecheck
npm test
npm run build
npm run preview
```

资源重新制作：在安装 Blender 的环境执行 `blender --background --python src/scene/build_forest.py`；增加 `-- --render` 生成 Eevee 对照。脚本使用本地素材，不需要下载插件。保持可编辑源工程与资产记录，参见 [场景素材](src/scene/ASSETS.md)。

界面规范见 [DESIGN](DESIGN.md)。固定审阅视角可用 `?view=camp`、`?view=trail`、`?view=creek`；浏览器与 Eevee 图片须人工比对后才能宣布画质达标。

第一版不做路线导航、社交、排名、多地图或智能手表接入。摄像头图像不保存、不上传。注视行为与游戏表现不等于心理注意力，更不能证明长期训练效果。


## 秋季生态升级保存

原生 WebGPU、天气、动物骨架、生态、自然声音和地图偏离提示见 [详细开发记录](docs/scene-ecology-upgrade.md)。自动化检查可审阅；写实外观、听感、真人眼动与原画性能仍未通过验收。此保存不合并、不关闭阶段，后续眼动徒步待接入。
