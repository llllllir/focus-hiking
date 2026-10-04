# 轻松进入模式检查（2026-10-04）

用户授权与全部阈值见 [开发记录](../../easy-entry.md)。此前已推送的 phase7 检查点为 `d7c2d35`；本目录为放宽门槛后的新证据，不覆盖 phase7 材料。

## 实际结果

- 类型检查、生产构建通过，逻辑测试 **49/49** 通过。新增检查覆盖15项方案实际训练、较大误差通过、缺失证据和反向状态拒绝、原始验证数据与策略标记CSV。
- 生产浏览器完整流程通过：[checks.json](checks.json)。位置15项 + 五点验证 + 屏内外10项 + 状态验证10项，共40项。
- 特意给独立位置验证注入偏移，中位及P90均为 **13.9%**；让一项屏内和一项屏外验证无效，屏内/离屏召回各 **80%**、无法判断 **20%**。新入口通过，旧门槛不会通过此案例。不是把理想输入的成功当作降低门槛的证据。
- 完成后台恢复、全无效位置验证禁入、只重试验证后恢复、实际森林行走、暂停/恢复、结束保存与下载、第二次徒步保存以及回首页释放摄像头，无页面脚本错误。
- 异常恢复检查通过：[recovery.json](recovery.json)。当前点样本不足暂停等待、恢复后推进、Worker失败保留错误并可重新开启、取消和停止不错误放行。
- 短时合成行走约9.57秒、10.64米，平均 **30.59 FPS**。这不是稳定30FPS或15分钟真实摄像头联合验收。

图像均为合成输入测试，带明确标记：[验证](validated-synthetic.png)、[行走](walking-synthetic.png)、[结果](result-synthetic.png)。不包含真人摄像头帧。摄像头形状的测试记录只存在于隔离浏览器，检查后清除，不作为真人存档上传。

## 实际命令与环境

沿用已安装依赖；本机等价执行：

```text
node ../../node_modules/typescript/bin/tsc --noEmit
node ../../node_modules/tsx/dist/cli.mjs --test tests/*.test.ts
node ../../node_modules/vite/bin/vite.js build --configLoader native
node scripts/calibration-flow-check.cjs
node scripts/calibration-recovery-check.cjs
node scripts/check-docs.cjs
```

浏览器为Edge，提前设置 `PLAYWRIGHT_MODULE` 和 `HIKE_URL`。Canvas + Worker模拟约11.8Hz，处理10ms是fixture设定，不能当真实推理速度。新增阈值不等于原M2验收通过。构建仍有既有大场景包约893KB警告。

放宽入口会增加注视方向误差及状态误判的可能，这是本轮明确授权的产品取舍。真人体验、真实长时性能仍待实测。保留原模型与共享接口，没有修改另一方场景/游戏源码。
