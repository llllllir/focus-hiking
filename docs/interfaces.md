# 两个 Agent 的共享接口契约

状态：M1 实现前的契约 v1。由 A 写 TypeScript 类型，B 审核消费方式。当前没有宣称已经存在运行时实现。

## 坐标、时间与输入来源

所有交互坐标使用游戏 CSS 视口左上角原点，x/y 范围 0～1；注视评估保留未经裁剪的预测，超出范围不是自动注视屏幕边缘。B 用同一视口尺寸投影路标矩形。不要混用摄像头像素、devicePixelRatio 或渲染缓冲区。

事件时间戳统一用同一页面的 `performance.now()` 毫秒。A 统一转换 Worker 的时间基准；持久化记录额外保存会话起始墙钟时间，不将两种时间相减。

来源固定为 `camera`、`simulated` 或 `manual`，贯穿诊断、记录和验收。

## 接口与归属

| 接口 | 方向 | 必需内容 |
| --- | --- | --- |
| GazeSample | A → B | timestampMs、x/y（无有效预测时为 null）、valid、invalidReason、source |
| TargetRegion | B → A | id、归一化矩形 x/y/width/height、enabled |
| GazeEvent | A → B | timestampMs、type（dwellProgress/targetConfirmed/signalLost）、targetId（无目标时 null）、progress（0～1） |
| SceneEvent | B → A | timestampMs、type（nodeArrived/movementStarted/movementEnded/environmentStarted/environmentEnded）、nodeId、eventId（按事件适用） |
| TrainingCommand | A → B | type（startTask/showPrompt/triggerEnvironment/endSession）、taskId、eventId、message（按命令适用） |

训练反馈由 A 提供会话摘要，B 渲染；具体任务内容与字段在 M4 契约 PR 中冻结，不提前编造尚未确定的指标。

## 运行边界

- A 对外提供订阅样本/事件以及设置目标区域的接口；B 不直接调用视觉模型或读取摄像头帧。
- B 对外提供场景事件订阅和训练命令入口；A 不直接修改 Three.js 对象。
- 不启用的目标不参与停留。移动开始后 B 关闭目标选择，结束后重新投影并开放。
- A 确认目标后锁定本次停留，直到目标重新启用；B 对重复确认同样防护。
- 失效信号不累积停留时间。短噪声宽限初值约 150ms，确认阈值约 1.2s；后台切换暂停。
- 自由观景不启动目标注意判断。只有 A 定义的明确任务窗口才能触发重新聚焦规则。
- 摄像头/姿态失效属于传感器异常，不能转换成训练失败。

## 契约变化

新增跨模块行为先提契约 PR，写出旧接口、变化、两端修改和测试方式，由对方审核。消费端只有在契约合入后依赖新接口，不依赖尚未合入的私有分支实现。

