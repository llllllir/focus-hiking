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
- [摄像头本地注视技术方案](docs/gaze-system.md)
- [跨模块接口](docs/interfaces.md)
- [学界与业界研究报告](docs/research.md) · [阅读版 HTML](docs/research.html)
- [验收材料规范](docs/acceptance/README.md)
- [GitHub 初始化与权限说明](docs/github-setup.md)

## 当前实现状态

本次初始化交付研究、计划、任务和 agent 规则。应用源码尚未实现，暂不存在 `npm run dev` 等应用启动命令。M1-A 必须建立并记录安装、启动、类型检查和构建命令，M1-B 交付首个可运行场景。

第一版不做路线导航、社交、排名、多地图或智能手表接入。摄像头图像不保存、不上传。注视行为与游戏表现不等于心理注意力，更不能证明长期训练效果。

