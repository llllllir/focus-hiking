# A/B 初版 PR 交接

共同 main 基线：e624c530e2e4e896e8bba7ae09b41ffae10b33e1。规格参考 [用户确认计划](../../../specs/001-phase-1/approved-plan.md)。本次由同一个 agent 顺序实现，仍由真人交叉审查，不冒充另一位作者或 reviewer。

## A 工程/契约/诊断

关联 #1。工程为 TypeScript/Vite/Three.js，锁文件与 CI 已建立。契约按 interfaces.md 初始定义，不新增公共字段；订阅返回 unsubscribe。模拟源明确 simulated，每 8 秒演示一次短失效；诊断目标与自动游览分离，不产生真实摄像头数据。

类型检查、3 项 A 边界测试及 A 基础构建以实际检查记录为准。B 审查类型、适配边界与消费方式后再合入；A 不批准自己的 PR。

## B 场景/游览

关联 #2。依赖 A 初始工程，B 集成分支基于 A 提交建立，PR 暂以 A 分支为 base，待 A 合入 main 后改 base 并更新分支。该预览是未合入契约的集成草案，不当作生产消费或冻结完成。

Blender 4.5.9 制作原创场景并保存源工程；树皮颜色已烘焙。GLB、本地贴图、路线与固定镜头清单已导出，Three.js 实例化重复植被。开始/暂停/恢复/回起点、失败重试与运行记录下载已实现。坐标与时间遵循 CSS 视口及 performance.now()，模型不暴露到共享契约。

剩余：植被和地形细节仍简化，未达到人工确认的写实效果；法线/AO 烘焙、静态间接 lightmap、LOD 和真人桌面性能未完成。三组浏览器/Eevee 图已生成，但不是用户验收通过。保留单地图，不推进摄像头或训练阶段。

## 运行与审阅

集成分支 `npm ci` → `npm run dev`；按终端地址开始、暂停、恢复与重启。`npm run typecheck`、`npm test`、`npm run build` 为检查入口。运行记录中的 source 是 simulated。

人工审阅和导师确认未完成；不合并自己的未审查 PR，不关闭 #1/#2/#3 或 M1。证据与实测见 [验收记录](README.md)。
