# 场景2.0 场景素材记录

## 场景2.0增量（2026-10-03）

仍使用此前已取得的本地 CC0 地表、叶片和蕨类素材，没有引入游戏资源。白桦、草丛、野花、鹿、额外坡地、第二座桥由 Blender 脚本自产；木材／花岗岩／白桦树皮／鹿毛的 256×256 颜色纹理由项目生成，保存为 `weathered_wood.png`、`granite_detail.png`、`birch_bark.png`、`fur_detail.png`。这是程序颜色纹理，不能称为扫描级 PBR 素材；浏览器使用木材与石材颜色作为轻微 bump，独立物理法线／AO 仍待完成。

树干保持原烘焙颜色，地表使用原有颜色／法线／粗糙度。地形／路径水平长度放大三倍同时扩大 UV 重复次数，避免纹理随地图拉伸；单棵树和单块石头保留自然尺寸。桥板增加到主桥 66 块、次桥 72 块，岩石提升到三级细分；实际输出数会因小径净空过滤而减少。

浏览器以 48m 区域实例化树木；动物保留独立网格并每 100ms 检查地表，避免每帧重复射线计算。会话随机种子改变树形、朝向与动物活动相位；不改变路线连通关系。动物没有骨骼行走动画，当前使用简单自主巡游轨迹，不宣称真实动物行为或写实画质已通过。

制作命令为 `blender --background --python src/scene/build_forest.py`；已有树皮烘焙图时可追加 `-- --reuse-bark` 跳过重复烘焙。保存同一可编辑源工程和本地 GLB／JSON。完整画质仍需浏览器和 Eevee 对照、用户审阅。

营地追加自产拱形帐篷：32 段横向／12 段纵向布面，两道细分铝撑杆、加固缝线、门口拉链边、卷门帘、拉绳和地钉、后窗格与内部睡具。`tent_canvas.png`、`tent_groundsheet.png` 为 256×256 原创颜色图；没有使用外部帐篷资产。制作器改用直接网格构造杆件／方块／球面、复制岩石原型并在导出时计算倒角，减少逐个 Blender 操作的重复场景计算；源工程保留可编辑倒角。

## 探索迭代新增资源

2026-10-03 从官方 API 与 dl.polyhaven.org 获取 [Tree Small 02](https://polyhaven.com/a/tree_small_02) 的叶片颜色、透明度贴图，作为自制树冠的枝叶卡片；使用 [Fern 02](https://polyhaven.com/a/fern_02) glTF 模型及 1K JPG 颜色／法线／ARM，四个变体随机实例化，每个位置只放一个变体。均适用 [CC0](https://polyhaven.com/license)，不下载或复制游戏素材。

可复现源：`assets/vegetation/fern_02/fern_02_1k.gltf`、对应 bin 与 textures；叶片贴图在 `public/assets/textures/`。Blender 脚本只读这些仓库资源，无工具目录依赖。所有图片打包进入 `.blend` 和 GLB，运行时仅请求本地 GLB／JSON。

大树完整模型的候选下载未完成且不适合直接重复实例化，未纳入本次资源；只采用已完整获取的叶片纹理。程序树形仍需改进，不把贴图更换等同于写实形态达标。

新地形、连通小径、岩石、倒木、根系、桥和营地由项目制作。叶片使用 Alpha Test 0.45、双面和深度写入，避免透明排序；树木按 24m 区域实例化用于视锥裁剪，静态岩石与木件按材质合批。未完成静态间接 lightmap 与法线／AO 烘焙，继续列为画质待解决项。

## 自制资源

`build_forest.py` 使用固定随机种子 4419 制作树干、枝叶、地形、小径、蕨类、岩石、营地、木桥和远山；生成源工程 `assets/forest.blend`、运行资源 `public/assets/forest.glb`、相机/路线清单 `public/assets/forest.json`。不含摄像头数据、人物图像或凭据。

树皮使用 Blender 程序噪声经 Diffuse Color 烘焙为 512×512 贴图 `bark_baked.png`。法线/AO 烘焙与独立静态间接 lightmap 尚未完成；不能将材质烘焙等同完整光照烘焙。

## 第三方资产

来源：[Poly Haven Rocky Trail](https://polyhaven.com/a/rocky_trail)。[资产许可 CC0](https://polyhaven.com/license)。获取日期 2026-10-03；通过官方资产下载域获取 1K JPEG 本体，不使用网站示例图。

| 文件 | 获取体积（bytes） | 用途 |
| --- | --- | --- |
| rocky_trail_diff_1k.jpg | 1076180 | 地表颜色，sRGB |
| rocky_trail_nor_gl_1k.jpg | 1398291 | 地表 OpenGL 法线，数据贴图 |
| rocky_trail_rough_1k.jpg | 747035 | 地表粗糙度，数据贴图 |

自制资源尚需用户画质审阅。运行时不请求第三方资源。Blender 程序与导出物体积在生成后记录到验收文档；未生成为未实现，不填估算值冒充实测。

第二套地表：[Poly Haven Forest Floor](https://polyhaven.com/a/forest_floor)，CC0，2026-10-03 获取 1K JPEG 颜色/法线/粗糙度，分别 1329853 / 1380104 / 736353 bytes。用于林地落叶地表，小径继续用 Rocky Trail；不采用其秋季景观作为整个项目季节设定。

场景2.0自然升级：林地改用 [Forest Ground 04](https://polyhaven.com/a/forest_ground_04)，树皮用 [Bark Brown 02](https://polyhaven.com/a/bark_brown_02)，岩石用 [Rocky Terrain 02](https://polyhaven.com/a/rocky_terrain_02)。2026-10-03 从官方 API 下载 1K 颜色、OpenGL 法线、粗糙度本体，全部 CC0；作者、源网址、官方大小核对与 SHA256 在 `natural-assets.json`。旧树皮烘焙是历史素材，本轮树皮以照片 PBR 为准。叶簇继续使用 [Tree Small 02](https://polyhaven.com/a/tree_small_02) 的 CC0 叶簇颜色/透明图集，不分发未完整取得的高模。

分枝通过官方 [Sapling Tree Gen 0.3.7](https://extensions.blender.org/add-ons/sapling-tree-gen/) 生成，GPL-3.0-or-later 工具仅用于构建，不放入浏览器分发；下载与指纹在 `config/build-tools.json`。调用脚本、叶簇装配、草丛和鹿由项目原创编写。森林地形为虚构程序生成地形。素材来源不能代替真人画质验收。
# V-Island / 秋季 / 阴雨新增记录

2026-10-03：V-Island 核心引擎固定 `ba73c70c3b591b2aca874da40a68cfdd0dfc7ab4`，保留 tidewater 原许可和引擎源文件指纹；不导入海岛地形/音频/第三方动物资产。见 [来源](vendor/v-island/CREDITS.md)。

`autumn.ts` 是原创可编辑驼鹿、绿头鸭、红木屋与落叶的程序模型源码；`weather.ts` 是原创雨丝/涟漪/水花/电光与 Web Audio 合成。后续 `wildlife.ts` 增加 11 类真正骨骼绑定的程序动物，交接 GLB/Blend 与指纹见 `wildlife-assets.json`；`soundscape-assets.json` 和运行目录的 CREDITS 记录八段实地自然录音、作者及 CC0/CC BY 4.0 许可。模型仍非扫描级，专业毛羽外观及声音听感待真人审阅。完整实现与限制见 [生态记录](../../docs/scene-ecology-upgrade.md)。

