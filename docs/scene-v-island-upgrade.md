# 秋季森林：V-Island 引擎与阴雨模式

后续更新：本页记录首次引擎/天气接入的历史状态。最新生态、11 类骨架动物、完整场景反射、晴天录音与成功重跑见 [详细开发记录](scene-ecology-upgrade.md)；以下旧失败/未运行项不代表最新检查结果。原画性能与写实外观仍未达标。

2026-10-03，用户授权的 B 场景升级。开始建立了 `codex/m1-scene`，最终检查时工作区被外部工作切回 `codex/m2-attention`，A 模块也发生变化；本轮没有切回 A 分支或改写 A 的成果。基线为本地文档提交 `e624c53`，工作区仍有此前 A/B 未提交成果。已通过 gh 联网确认当前账户及只读查看 M1-B Issue #2。没有替他人提交、推送、审查、合并或关闭阶段。

## 参考与引擎

用户给出四种秋季参考：林下仰望树冠、两只成年雄性驼鹿、飞行绿头鸭的森林湿地、暗红色乡野木屋。第 5 段为共同排除项。另一个图片聊天的原始四张图没有出现在本聊天，也没有可用的跨聊天图片读取工具；本轮没有声称提取成功，没有生成替代图冒充原图。参考规格记录在 [秋季参考约束](../refs/autumn-direction.md)。

采用用户指定 [BAP-CAMP/v-island](https://github.com/BAP-CAMP/v-island) 的 `src/engine/`，固定提交 `ba73c70c3b591b2aca874da40a68cfdd0dfc7ab4`。这是自有 WebGPU/WGSL 引擎，不是 Three.js 的扩展插件。上游 [引擎移植说明](https://github.com/BAP-CAMP/v-island/blob/ba73c70c3b591b2aca874da40a68cfdd0dfc7ab4/docs/engine/PORTING.md) 描述了原生 WebGPU、PBR、反向深度与级联阴影接口。

核心代码原样存放在 `src/scene/vendor/v-island/engine/`；森林适配器负责转换已有 Three.js 几何、实例、贴图、材质和相机。Three.js 继续负责加载、拾取和导航表示，默认可见绘制由 V-Island 引擎执行。显式 `?engine=webgl` 保留原有 WebGL 兼容绘制。没有切换成海岛地图，也没有引入上游驾驶、钓鱼和多区域玩法。工程配置、锁文件、摄像头、训练与共享契约未改写。

上游 CREDITS 说明引擎来自 tidewater（MIT，DRG Software Solutions LLC）；保留原许可和来源说明。没有导入海岛地形、音频、人物或第三方模型。完整源代码指纹见 `src/scene/vendor/v-island/source-manifest.json`；运行资源携带 `public/assets/licenses/v-island-engine-LICENSE.txt`。

## 当前代码

- 渲染：WGSL PBR、16/65/190 m 级联日光阴影、HDR 后处理、薄空气透视、基于阴影采样的轻微逆光散射。没有全局 Bloom 或景深。
- 树木：沿用既有 Sapling 分枝与 CC0 叶片图集，加入秋叶着色、透光和风动；树皮颜色贴图补充微小高度起伏。没有新增扫描级整树，也没有把换引擎当作树形已达参考质量。
- 溪水：动态表面法线、不透明场景颜色/深度采样、厚度吸收与折射、Fresnel 天空反射、浅处轻微水花色调。没有完整场景反射、FFT 海洋或物理流体求解。
- 动物：两个原创可编辑驼鹿设计模型、四只绿头鸭设计模型。包含连续躯干、长腿/蹄、头部/耳/眼、掌状角片和羽片；按材质合批。它们仍是程序模型草案，未达到可宣称专业写实模型或扫描级毛发的证据。
- 木屋：暗红板墙、两扇正面格窗、三扇侧面格窗、双坡屋顶、基础、电箱和桶；合批并提供墙体碰撞。鹿头挂饰、完整风化 PBR、苔石矮墙、屋前小径细节仍待完善。
- 原图构图尚未逐一匹配：湿地保留原溪谷，不是参考的大型开阔湖面；树冠、树种、前后遮挡与动物解剖仍需原图对照及真人审阅。

## 阴雨雷暴模式

底部“天气”选择晴天/阴雨雷暴，切换保持地图、相机、路线和输入来源。可用 `?weather=rain` 直接初始化雨天。声音须点击开始、天气选择或“开启环境声音”后启动，符合浏览器音频手势限制；可随时静音。

代码包含密集斜雨、地面/水面/屋顶局部采样的涟漪与水花、冷灰密云、远景湿雾、材质湿润与反光、窗面雨滴扰动、较强但克制的风动。雨天 8 秒首次远处电光，此后约 30～50 秒一次；仅绘制远处电光，不做整屏曝光闪烁。尊重减少动态效果设置，关闭可见电光。

Web Audio 原创合成持续雨声、风声、敲击声及低沉雷声，使用 HRTF Panner 和相机监听方向。闪电后分别延迟 2.4/4.5/7.8 秒播放远处闷雷、滚动雷声和较近末段雷声。它不是实地录音；双耳空间化不等于已验证所有多声道扬声器。实际听感、响度、方向和播放连续性待人审阅。

驼鹿缓慢进入预设林下位置、降低头颈；鸭子降低高度到采样水面并收翼，雨停逐步恢复。这是生物习性方向的规则草案，未实现完整障碍规划、专业步态、风场动力学或动物行为学验证。没有攻击、追逐或惊吓任务。

## 实际检查与复现

标准命令仍为 `npm ci`、`npm run dev`、`npm run typecheck`、`npm test`、`npm run build`、`npm run check:docs`。本机没有 PATH 上的 npm，实际使用 `node .tools/npm/package/bin/npm-cli.js` 运行对应脚本，未重新安装依赖。

本轮已实际执行：

```powershell
node .tools/npm/package/bin/npm-cli.js run typecheck
node .tools/npm/package/bin/npm-cli.js test
node .tools/npm/package/bin/npm-cli.js run build
node .tools/npm/package/bin/npm-cli.js run check:docs
node scripts/weather-logic-check.cjs
node --check src/scene/visland-renderer.js
```

天气加入前：20 项既有逻辑测试与生产构建通过，Vite 提示场景块超过 500 kB。初轮五视角检查曾报动物合批错误，保留失败记录；后续单溪流视角实际 WebGPU 检查为零着色器/页面错误。截图只能证明该次绘制，不能作为写实画质或性能达标依据。

天气加入后曾通过全工程类型检查、JS 语法检查和六组 CPU 状态/几何检查。最终外部 A 更新后，全工程 `typecheck` 报 `src/attention/test-page.ts:187` 的 `Mapping` 缺少新增 `coverage` 字段；按边界未修改 A。最终场景依赖图另用 `node scripts/scene-typecheck.cjs` 检查，不能代替全工程检查。后续浏览器命令被自动审批服务拒绝：用量限制导致审核无法完成，非安全判定。最新全量生产构建、浏览器雷雨/声音检查和 60 秒性能测量均未完成，不沿用旧结果冒充新版本已通过。

`weather-logic-check.cjs` 只检查有限数值、湿材质/恢复、动物避雨/降落、雨/闪电显隐和木屋碰撞范围，不验证 GPU 或音频。它在忽略目录生成临时 JS，原始可编辑源码留在 `src/scene/`。

审批恢复后的浏览器检查使用已安装 Playwright Core（通过 `PLAYWRIGHT_MODULE` 指定模块目录），本地 Vite 端口 5175：

```powershell
node scripts/island-check.cjs
node scripts/island-performance.cjs
node scripts/weather-browser-check.cjs
```

固定审阅视角：`?view=canopy`、`?view=moose`、`?view=wetland`、`?view=cabin`；附加 `&weather=rain` 审阅阴雨。截图脚本隐藏界面，输出 1600×900；隐藏界面不修改 3D 场景。

## 交接与待验收

修改范围：`src/scene/`、`src/game/app.ts`、场景检查脚本、许可和文档；共享契约无变化。新增场景内部天气控制没有转为 A 的训练事件，也没有将传感器问题统计为注意力失败。

本轮是可审阅源码草案，未完成用户要求的最终视觉升级。仍需四张原图、最新浏览器画面/音效审阅、原画档 60 秒性能与路线/碰撞回归、资源预算核对、真实动物外观和导师确认。由真人分离 B 交付并交 A 审查，不将当前 A/B 混合工作区整体收入场景 PR。
