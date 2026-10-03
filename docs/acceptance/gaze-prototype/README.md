# 摄像头眼动原型：检查与待验收项

日期：2026-10-03。A，`codex/m2-attention`，关联 [M2-A #4](https://github.com/llllllir/focus-hiking/issues/4)。

## 基线与范围

通过 GitHub 连接器读取实际Issue和main，基线提交 `e624c530e2e4e896e8bba7ae09b41ffae10b33e1`，main受保护。起始本地 Git 尚无提交，位于 `codex/m1-scene`，应用/场景等文件未跟踪。已创建眼动分支并取回main，以 mixed reset 建立分支与索引基线，保留现有文件。没有推送main、合并、关闭Issue或自审。

本轮修改A注意力实现、入口分流、依赖/锁文件/构建配置、模型资源、对应测试及文档。没有改写 `src/game/`、`src/scene/`、`src/contracts/`。现有本地M1工程及场景不等于已合入main。

## 实际执行

本机 npm 不在 PATH，实际采用忽略目录的 npm CLI 执行标准脚本：

```powershell
node .tools/npm/package/bin/npm-cli.js install --save-exact @mediapipe/tasks-vision@1.0.1 --registry=https://registry.npmjs.org --fetch-retries=0 --fetch-timeout=30000 --cache=.tools/npm-cache
node scripts/sync-gaze-assets.mjs
node .tools/npm/package/bin/npm-cli.js install --save-dev --save-exact vite@7.3.6 --registry=https://registry.npmjs.org --fetch-retries=0 --fetch-timeout=30000 --cache=.tools/npm-cache --no-audit
node .tools/npm/package/bin/npm-cli.js run typecheck
node .tools/npm/package/bin/npm-cli.js test
node .tools/npm/package/bin/npm-cli.js run build
node .tools/npm/package/bin/npm-cli.js run check:docs
node .tools/npm/package/bin/npm-cli.js audit --registry=https://registry.npmjs.org --fetch-retries=0 --fetch-timeout=15000 --cache=.tools/npm-cache
node .tools/npm/package/bin/npm-cli.js run preview -- --port 5180 --strictPort
```

- MediaPipe安装成功，模型下载成功，版本1模型3,758,596 bytes；SHA256见manifest。
- `typecheck` 成功；最终 `test` 20/20成功，包含8项新眼动逻辑测试。合成关键点覆盖平移、镜像、闭眼、姿态及矩阵缩放、岭回归、独立误差统计和失效后平滑重置。
- 生产构建成功。既有场景 chunk 超过500kB提示仍存在，未作为眼动或场景性能通过证据。
- 原 Vite 7.1.7 的实际审计报告有1项高等级受影响依赖，按同主版本更新至7.3.6；更新后审计0漏洞。
- 文档链接检查成功；新的交接文件写完后再次核查。
- 初次在沙箱内构建因 esbuild 父目录访问限制失败，tsx因Windows用户信息读取受限失败；在获准环境执行后成功。5174已有服务，未结束其它服务，使用5180。
- 未执行新环境 `npm ci`，标准安装说明不表示本次已经执行该命令。

浏览器检查命令：配置 `PLAYWRIGHT_MODULE` 为本机已安装的 Playwright 模块路径（不写入仓库），然后执行：

```powershell
node scripts/gaze-browser-check.cjs
```

脚本使用 headless Edge、Canvas合成视频流和独立注入的Worker夹具。真实模型加载检查只验证本地WASM/模型加载以及合成无脸画面的失效状态；校准及验证流程由合成特征检查。脚本不会保留标记camera的合成CSV作为验收数据。详见 [浏览器结果](browser/checks.json) 与 [初始界面截图](browser/landing.png)。这些材料不是真人精度证明。

浏览器检查过程中曾遇开发源码/依赖更新导致页面重载、Edge假媒体设备偶发自行断开；失败记录没有当作通过。已预编译MediaPipe依赖、修正停止/窗口变化/后台旧帧/Worker错误后的状态，最终使用稳定Canvas流在不变的生产构建上重测。物理摄像头路径仍须人工验收。

最终浏览器结果：本地真实Worker/模型处理合成无脸视频、无第三方运行时请求、权限拒绝重试、模型缺失重试、方向与眼球示意、18点校准/5点验证流程、CSV结构、失效/姿态越界/过期/恢复、窗口重置、取消/后台取消、停止释放与启动取消、运行期Worker错误可重启、窄屏按钮可见均通过。没有保存合成精度CSV，也没有把合成报告的低误差用于M2验收。

另用临时忽略目录内的浏览器辅助脚本检查开发端口5181首次加载模型不发生页面重载，并确认生产端口5180原森林入口加载、诊断继续标记simulated；记录见 [入口检查](browser/smoke.json)。所有摄像头输入为Canvas合成流，实际物理摄像头启动仍待用户测试。最终7项模型/WASM/加载脚本文件的SHA256均与manifest一致。

## 真人验收待完成

- 实际眼睛向左、右、上、下及回中时，小球与眼球示意的对应运动。
- 普通光照、眼镜、小幅头动和座位变化下的稳定性。
- 独立五点真实误差报告及至少4人数据。
- 真实摄像头推理Hz、P95、端到端响应与中央抖动。
- B的大目标/路标界面、区域与20次停留验收、自由观看误触发。
- 联合场景负载、真人视觉/舒适度、B审查与导师确认。

## PR交接草稿

建议标题：`feat(attention): local camera gaze diagnostic with calibration and eye widget`。

问题：现有应用只有模拟注视，无法验证真实眼部移动。增加独立 `?mode=gaze-test` 入口，用本地MediaPipe Worker提取双眼特征、九点两轮岭回归校准并显示连续小球和左上角眼球示意，支持独立五点验证和匿名CSV，失效/后台/窗口变化停止或重置交互。

契约无变化；`CameraAttention` 实现冻结 `AttentionPort`，B可订阅 `source=camera` 样本和停留事件，不能将未校准方向预览用于屏幕选择。模型内特征仅A诊断使用。当前没有把摄像头接入森林移动。

验证：类型检查、20项逻辑测试、构建、文档链接及依赖审计。浏览器结果按实际 `checks.json` 引用。真人测试待完成，不能关闭M2。

远程main仍是文档基线；当前本地M1骨架、契约与场景尚未形成已合入工程基线。若直接将此原型PR合到远程main，将缺少前置应用文件。先由原负责人完成M1工程/契约与场景的独立PR和审查，再同步A分支提交完整可构建的眼动PR。不得为凑齐PR把B的未跟踪场景当作A成果提交。当前仅本地实现，未创建远程PR、未提交或合并。
