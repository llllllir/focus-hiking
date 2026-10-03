# 眼动精度与屏幕状态升级：实际检查

日期：2026-10-03。角色 A，分支 `codex/m2-attention`。本轮读取了 [M2-A #4](https://github.com/llllllir/focus-hiking/issues/4)，Issue仍打开。远程main核查为 `e624c530e2e4e896e8bba7ae09b41ffae10b33e1`，仍是文档基线。

操作、场景组合与接口说明见 [接入文档](../../eye-gaze-integration.md)。没有替换共享契约，没有修改B的scene/game源文件。

## 自动化命令

本机npm未在PATH，使用已有忽略目录中的CLI运行项目脚本，未为本轮重新安装依赖：

```powershell
node .tools/npm/package/bin/npm-cli.js run typecheck
node .tools/npm/package/bin/npm-cli.js test
node .tools/npm/package/bin/npm-cli.js run build
node .tools/npm/package/bin/npm-cli.js run check:docs
```

已执行结果：类型检查通过；30项逻辑测试通过；生产构建通过；文档检查通过。新增10项逻辑测试涵盖眼睑变化不改变纵向特征、稳健采样、分组模型选择、四侧/键盘分类、三态时序、验证前禁止交互、信号失效/屏幕外不触发场景确认、姿态与全屏限制、unknown计入分母、自适应滤波。

初次沙箱内测试遇到tsx读取Windows用户信息的`uv_os_get_passwd`错误，初次构建遇到esbuild读取父目录被拒绝；以正常本机权限重跑后通过。首次类型检查发现未使用变量，修复后通过。构建保留既有场景包大于500kB的提示，不等于联合性能已达标。

## 浏览器检查

配置 `PLAYWRIGHT_MODULE` 指向本机已安装Playwright，然后执行：

```powershell
node scripts/gaze-upgrade-browser-check.cjs
```

默认地址为本地5182端口，可通过 `GAZE_TEST_URL` 指向其它端口的 `/?mode=gaze-scene&quality=smooth`。本轮开发服务器命令：

```powershell
node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 5182 --strictPort
```

输入为Canvas合成视频和独立Worker特征夹具。真实MediaPipe加载检查只使用合成无脸画面，不是物理摄像头验收。完整校准、分类及场景测试的截图明确标注“自动化合成输入／非真人精度”；不保存标记camera的合成精度CSV或场景报告作为真人证据。

首轮完整流程完成26段位置/头姿校准、独立五点验证、20段屏幕校准和10段状态验证；进入森林后发现新增状态面板遮住“路线规划”按钮，导致浏览器点击失败。已将组合入口的场景侧栏移到右侧、眼动面板改为左上紧凑布局，并重新运行。初始截图过早抓到空白，脚本已增加页面挂载等待。

最终生产浏览器结果：[13组检查全部通过，页面错误0项](browser/checks.json)。在生产预览5183端口完成真实本地模型无脸/无外部请求、权限拒绝、模型缺失、26段位置校准与独立五点验证、20段屏幕校准与10段独立状态验证、匿名CSV、离屏/闭眼/过期/姿态恢复、现有AttentionPort触发森林路线、场景来源记录、退出全屏清除校准、取消与后台取消、停止释放、启动取消与Worker故障重启。开发入口也已跑通完整路线。

已查看 [校准页截图](browser/setup.png)、[合成验证页](browser/validated-fixture.png) 和 [森林路线截图](browser/scene-fixture.png)，确认左上眼球及状态面板不再遮挡右侧路线控制。截图中的低误差与高区分率来自合成输入，不能用于M2真人验收。森林截图当时HUD显示约15FPS，这是headless合成测试时的观察，不代表真实摄像头联合性能达到30FPS门槛。

生产预览命令为 `node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 5183 --strictPort`；测试时将GAZE_TEST_URL设为该端口的 `/?mode=gaze-scene&quality=smooth`。最终代码清单与哈希见 [验证快照](verification.json)。

## 真人仍须完成

- 眼睛向左/右/上/下时小球与左上眼球的方向、幅度与响应。
- 至少4人、至少3人达到原M2误差、有效率、区域/停留门槛。
- 实际看四角、边缘、键盘、四侧屏幕外时的混淆统计与unknown比例。
- 眼镜、反光、小幅头动、较暗光照、坐姿漂移；正常条件与困难条件分别报告。
- 原版与升级版的同人对比，640×480与1280×720实际协商设置对比；不预先声称精度提升。
- 实际摄像头下森林交互、15分钟联合负载、推理Hz/耗时、显示端到端响应及舒适度。
- B真人审查、共同验收和导师确认。

## PR交接草稿

建议标题：`feat(attention): calibrated screen-state gating and scene-ready camera session`。

问题：仅靠预测坐标越界无法可靠判断是否看在物理屏幕上，旧原型与场景间也不能保留校准会话。新增双眼质量门控、稳健校准、有限非线性岭回归选择、屏幕内外校准/独立验证、三态和交互许可；新入口在同一页面将CameraAttention注入B现有mountGame的AttentionPort参数。

接口：共享类型未变。B继续消费valid、TargetRegion和GazeEvent；摄像头模块只有验证通过且有效on-screen时发布可交互样本。场景消费内部三态字段需另提契约变更。旧场景运行报告静态cameraImplemented字段需由B维护，当前连接核对cameraInputConnected及事件来源。

检查：以上实际命令及最终浏览器结果。未完成：真人精度/屏幕分类/联合性能及交叉审查。M2保持打开。

远程main仍缺少已合入的M1应用基线；当前工作区含B未提交场景及共享骨架。没有将B文件当作A成果提交，没有创建缺少前置依赖的远程PR，也没有推送或合并。待前置工程/契约与场景按归属完成独立PR后，再提交可构建的A眼动PR。
