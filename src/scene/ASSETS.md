# 框架场景1.0 场景素材记录

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
