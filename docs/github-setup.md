# GitHub 主仓建立与协作配置

主仓 `llllllir/focus-hiking`，公开；所有者/注意力负责人 llllllir，场景协作者 RUI-TW。

## 初始化脚本

优先使用已连接 GitHub app 上传。当前连接器缺少新建仓库、邀请协作者和新建 Milestone 的操作；仓库建立后，可上传 `.github/workflows/project-setup.yml` 自动创建标签、5 个 Milestone 和 15 个 Issue。GitHub Actions 的仓库令牌没有邀请成员或配置保护的管理权限，不宣称能完成这两项。

有本地账号授权时，`scripts/setup-github.ps1` 通过 GitHub 官方 REST API 核对账号、建立仓库、上传计划、邀请 RUI-TW、创建标签/里程碑/Issue，并尝试配置 main 保护；不依赖 CLI 子进程的网络可用性。

脚本读取 `docs/project-plan.json`，按标题/标记核对现有对象，避免重复创建。它不关闭里程碑，也不伪造验收。邀请须由 RUI-TW 接受；未接受前不将 B 强行设为 Issue assignee，而在正文明确负责人。接受后重运行配置可补全指派。

本地脚本使用已有 GH_TOKEN、Windows 加密的本地授权或 PATH 上 CLI 的登录，凭据从不输出。`.tools/` 已忽略，禁止推送。GitHub app 的连接与本地脚本登录是两个不同入口，不要求为了上传而重复连接 app。不得在 Issue 或聊天中粘贴 token。

运行（PowerShell）：

```powershell
./scripts/setup-github.ps1
```

如果只补齐协作权限、标签、里程碑/Issue 和保护而不推送文件：

```powershell
./scripts/setup-github.ps1 -ConfigureOnly
```

## 保护与验收

main 要求一人审批、更新后重新审批及 `docs` 检查通过，不允许强推和删除。允许作者获批后自己合并。脚本输出实际成功/失败状态，权限不足的设置不宣称完成。

初始化仅文档 CI。M1-A 加入应用类型检查和构建，并将实际必需检查名称同步到保护规则。必须再进行实际演示与阶段测试。

## 两人接着开发

A 从 M1-A 工程/接口开始。B 接受邀请并 clone 后从 M1-B 场景开始。双方分别使用独立分支与 agent 任务包，按 CONTRIBUTING.md 交叉审查。5 个总 Milestone 各含 A、B、验收三项 Issue；共同验收确认前保持里程碑打开。

