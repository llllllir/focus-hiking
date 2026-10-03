"""Reproducible M1 Blender scene. Run with Blender --background --python this_file.
Generated models are original project assets; terrain textures are recorded in ASSETS.md.
This is an initial scene, not a claim of approved Eevee quality.
"""
import bpy
import math
import random
import json
import sys
from pathlib import Path
from mathutils import Vector, Matrix

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'public' / 'assets'
OUT.mkdir(parents=True, exist_ok=True)
SRC = ROOT / 'src' / 'scene' / 'assets'
SRC.mkdir(parents=True, exist_ok=True)
CONFIG=json.loads((ROOT/'src/scene/config/natural-upgrade.json').read_text(encoding='utf-8'))
sys.path.insert(0,str(ROOT/'src/scene'))
from natural_trees import create_tree
random.seed(CONFIG['vegetation']['seed'])
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
scene = bpy.context.scene
scene.render.engine = 'CYCLES'
scene.cycles.samples = 8
scene.cycles.bake_type = 'DIFFUSE'
scene.render.bake.use_pass_direct = False
scene.render.bake.use_pass_indirect = False
scene.render.bake.use_pass_color = True
scene.world.color = (.25, .3, .35)

def material(name, color, roughness=.85):
    mat = bpy.data.materials.new(name)
    mat.diffuse_color = (*color, 1)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get('Principled BSDF')
    bsdf.inputs['Base Color'].default_value = (*color, 1)
    bsdf.inputs['Roughness'].default_value = roughness
    return mat

def mesh(name, vertices, faces, mat):
    data = bpy.data.meshes.new(name)
    data.from_pydata(vertices, [], faces)
    data.update()
    obj = bpy.data.objects.new(name, data)
    scene.collection.objects.link(obj)
    data.materials.append(mat)
    return obj

def active(obj):
    bpy.ops.object.select_all(action='DESELECT')
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj

def cylinder_between(name, start, end, radius, mat, vertices=10):
    a, b = Vector(start), Vector(end)
    length=(b-a).length
    coords=[(math.cos(i*math.tau/vertices)*r,math.sin(i*math.tau/vertices)*r,z) for r,z in [(radius,-length/2),(radius*.6,length/2)] for i in range(vertices)]
    faces=[(i,(i+1)%vertices,(i+1)%vertices+vertices,i+vertices) for i in range(vertices)]
    faces.extend([tuple(reversed(range(vertices))),tuple(range(vertices,vertices*2))])
    obj=mesh(name,coords,faces,mat); obj.location=(a+b)/2
    obj.rotation_euler = (b-a).to_track_quat('Z','Y').to_euler()
    uv=obj.data.uv_layers.new(name='UVMap')
    for polygon in obj.data.polygons:
        for loop in polygon.loop_indices:
            vertex=obj.data.loops[loop].vertex_index; uv.data[loop].uv=((vertex%vertices)/vertices,vertex//vertices)
    for polygon in obj.data.polygons: polygon.use_smooth = True
    return obj

def join(objects, name):
    bpy.ops.object.select_all(action='DESELECT')
    for obj in objects: obj.select_set(True)
    bpy.context.view_layer.objects.active = objects[0]
    bpy.ops.object.join()
    obj = bpy.context.object
    obj.name = name
    # Linked instances depend on a common world-space prototype origin.
    scene.cursor.location = (0,0,0)
    bpy.ops.object.origin_set(type='ORIGIN_CURSOR')
    return obj

def bake_color(obj, mat, filename):
    image = bpy.data.images.new(filename, width=512, height=512)
    nodes = mat.node_tree.nodes
    target = nodes.new('ShaderNodeTexImage'); target.image = image
    nodes.active = target
    active(obj)
    bpy.ops.object.bake(type='DIFFUSE', pass_filter={'COLOR'})
    image.filepath_raw = str(OUT / 'textures' / filename)
    image.file_format = 'PNG'; image.save(); image.pack()
    mat.node_tree.links.new(target.outputs['Color'], nodes.get('Principled BSDF').inputs['Base Color'])
    return image

bark = material('Baked_Bark', (.19,.14,.10))
nodes = bark.node_tree.nodes; links = bark.node_tree.links
coords = nodes.new('ShaderNodeTexCoord')
mapping = nodes.new('ShaderNodeVectorMath'); mapping.operation='MULTIPLY'; mapping.inputs[1].default_value=(9,9,1)
noise = nodes.new('ShaderNodeTexNoise'); noise.inputs['Scale'].default_value=4; noise.inputs['Detail'].default_value=5
ramp = nodes.new('ShaderNodeValToRGB')
ramp.color_ramp.elements[0].color=(.06,.045,.027,1)
ramp.color_ramp.elements[1].color=(.28,.22,.15,1)
links.new(coords.outputs['Generated'], mapping.inputs[0]); links.new(mapping.outputs[0], noise.inputs['Vector'])
links.new(noise.outputs['Fac'], ramp.inputs[0]); links.new(ramp.outputs[0], nodes.get('Principled BSDF').inputs['Base Color'])
leaves = [material('Leaf_'+str(i), color, .92) for i,color in enumerate([(.105,.20,.046),(.16,.27,.065),(.23,.33,.083),(.08,.15,.032)])]
foliage=material('Foliage_PH_CC0',(.2,.3,.1),.95)
foliage.surface_render_method='DITHERED'
foliage.use_backface_culling=False
foliage_nodes=foliage.node_tree.nodes; foliage_links=foliage.node_tree.links
for filename,socket in [('tree_small_02_leaves_diff_1k.jpg','Base Color'),('tree_small_02_leaves_alpha_1k.png','Alpha')]:
    image_node=foliage_nodes.new('ShaderNodeTexImage'); image_node.image=bpy.data.images.load(str(OUT/'textures'/filename),check_existing=True)
    if socket=='Alpha': image_node.image.colorspace_settings.name='Non-Color'
    foliage_links.new(image_node.outputs['Color'],foliage_nodes.get('Principled BSDF').inputs[socket])
wood = material('Weathered_Wood',(.21,.16,.105))
rockmat = material('Granite',(.27,.29,.25))
# Bake original surface variation into exportable images; glTF cannot carry Noise nodes.
def surface_texture(mat, filename, colors, grain=12):
    image=bpy.data.images.new(filename,width=256,height=256)
    rng=random.Random(filename); pixels=[]
    for y in range(256):
        for x in range(256):
            t=max(0,min(1,.5+.22*math.sin(x*.15+math.sin(y*.08)*2)+rng.uniform(-.22,.22)))
            pixels.extend([colors[0][k]*(1-t)+colors[1][k]*t for k in range(3)]+[1])
    image.pixels=pixels; image.filepath_raw=str(OUT/'textures'/filename); image.file_format='PNG'; image.save(); image.pack()
    node=mat.node_tree.nodes.new('ShaderNodeTexImage'); node.image=image
    mat.node_tree.links.new(node.outputs['Color'],mat.node_tree.nodes.get('Principled BSDF').inputs['Base Color'])
surface_texture(wood,'weathered_wood.png',[(.13,.105,.075),(.36,.30,.21)])
surface_texture(rockmat,'granite_detail.png',[(.16,.18,.15),(.43,.45,.38)])

def photo_material(mat,asset):
    nodes=mat.node_tree.nodes; links=mat.node_tree.links; bsdf=nodes.get('Principled BSDF')
    for kind,socket in [('diff','Base Color'),('rough','Roughness'),('nor_gl','Normal')]:
        node=nodes.new('ShaderNodeTexImage'); node.image=bpy.data.images.load(str(OUT/'textures'/(asset+'_'+kind+'_1k.jpg')),check_existing=True)
        if kind!='diff': node.image.colorspace_settings.name='Non-Color'
        if kind=='nor_gl':
            normal=nodes.new('ShaderNodeNormalMap'); normal.inputs['Strength'].default_value=.55
            links.new(node.outputs['Color'],normal.inputs['Color']); links.new(normal.outputs['Normal'],bsdf.inputs[socket])
        else: links.new(node.outputs['Color'],bsdf.inputs[socket])
photo_material(bark,'bark_brown_02')
photo_material(rockmat,'rocky_terrain_02')
prototype=create_tree(ROOT,0,bark,foliage,mesh)
prototype2=create_tree(ROOT,1,bark,foliage,mesh)

def path_x(z): return 3*math.sin(z/14)+.055*(30-z)
camp_z=27; camp_x=path_x(camp_z)-5
def in_camp(x,z):
    return math.hypot(x-camp_x,z-camp_z)<2.6 or (camp_x-1<x<path_x(28)+1 and abs(z-28)<.75)
def elevation(x,z):
    hills=24.0*math.exp(-((x-27)/22)**2-((z+55)/28)**2)+12.0*math.exp(-((x+23)/19)**2-((z+6)/24)**2)
    hills+=sum(h*math.exp(-((x-cx)/w)**2-((z-cz)/w)**2) for cx,cz,h,w in [(-53,-58,17,18),(48,18,10,20),(-48,30,8,17)])
    rise=max(0,-z-40)*.075
    detail=.6*math.sin(x/9)*math.cos(z/13)+.18*math.sin(x*.7+z*.31)+.07*math.sin(x*1.8-z*1.2)
    bank=hills+rise+detail
    # Carve an actual channel below the water, independent of hillside elevation.
    blend=max(0,min(1,(abs(z+36)-CONFIG['terrain']['creekHalfWidth'])/CONFIG['terrain']['bankWidth'])); blend=blend*blend*(3-2*blend)
    result=-.7*(1-blend)+bank*blend
    # A low bridge sits in a gently graded valley approach, not at hillside height.
    channel=abs(z+36)
    if 1.35<channel<12:
        approach=max(0,min(1,(channel-3.8)/8.2)); approach=approach*approach*(3-2*approach)
        target=.72+(bank-.72)*approach
        corridor=math.exp(-((x-path_x(z))/2.2)**4)
        result=result*(1-corridor)+target*corridor
    clearing=max(0,min(1,(math.hypot(x-camp_x,z-camp_z)-1.65)/.95))
    clearing=clearing*clearing*(3-2*clearing)
    return 1.0*(1-clearing)+result*clearing

bridge_x=path_x(-36)
bridge_height=.85
def path_surface(x,z):
    height=elevation(x,z)+.045
    if abs(x-bridge_x)<1.1 and abs(z+36)<6:
        blend=max(0,min(1,(6-abs(z+36))/3.35))
        height=height*(1-blend)+(bridge_height+.065)*blend
    return height

def main_points(): return [[path_x(31-i*3.9),31-i*3.9] for i in range(25)]
main=main_points()
# Each branch shares exact junction coordinates with the main trail.
loop=[main[4],[-9,12],[-18,4],[-23,-7],[-18,-17],main[13]]
ridge=[main[13],[17,-24],[27,-32],[30,-46],[27,-55],[23,-57],main[24]]
trails=[('main','溪谷主路',main),('loop','苔岩环线',loop),('ridge','山坡观景路',ridge)]
def distance_to_trails(x,z):
    distances=[]
    for _,_,points in trails:
        for a,b in zip(points,points[1:]):
            dx=b[0]-a[0]; dz=b[1]-a[1]
            t=max(0,min(1,((x-a[0])*dx+(z-a[1])*dz)/(dx*dx+dz*dz)))
            distances.append(math.hypot(x-a[0]-t*dx,z-a[1]-t*dz))
    return min(distances)
groundmat=material('Forest_Floor',(.24,.23,.16))
roadmat=material('Trail',(.38,.31,.22))
for mat in [groundmat,roadmat]:
    asset='forest_ground_04' if mat==groundmat else 'rocky_trail'
    nodes=mat.node_tree.nodes; links=mat.node_tree.links
    base=nodes.new('ShaderNodeTexImage'); base.image=bpy.data.images.load(str(OUT/'textures'/(asset+'_diff_1k.jpg')),check_existing=True)
    links.new(base.outputs['Color'],nodes.get('Principled BSDF').inputs['Base Color'])
    normal=nodes.new('ShaderNodeTexImage'); normal.image=bpy.data.images.load(str(OUT/'textures'/(asset+'_nor_gl_1k.jpg')),check_existing=True); normal.image.colorspace_settings.name='Non-Color'
    nmap=nodes.new('ShaderNodeNormalMap'); nmap.inputs['Strength'].default_value=.5
    links.new(normal.outputs['Color'],nmap.inputs['Color']); links.new(nmap.outputs['Normal'],nodes.get('Principled BSDF').inputs['Normal'])
    rough=nodes.new('ShaderNodeTexImage'); rough.image=bpy.data.images.load(str(OUT/'textures'/(asset+'_rough_1k.jpg')),check_existing=True); rough.image.colorspace_settings.name='Non-Color'
    links.new(rough.outputs['Color'],nodes.get('Principled BSDF').inputs['Roughness'])

size=CONFIG['terrain']['grid']; tile=40
for tz in range(0,size,tile):
    for tx in range(0,size,tile):
        vertices=[]; faces=[]
        for j in range(tile+1):
            z=55-(tz+j)*160/size
            for i in range(tile+1):
                x=-80+(tx+i)*160/size; vertices.append((x,-z,elevation(x,z)))
        for j in range(tile):
            for i in range(tile):
                a=j*(tile+1)+i; faces.append((a,a+1,a+tile+2,a+tile+1))
        ground=mesh('Ground_Terrain_'+str(tx)+'_'+str(tz),vertices,faces,groundmat)
        uv=ground.data.uv_layers.new(name='UVMap')
        for polygon in ground.data.polygons:
            polygon.use_smooth=True
            for loop in polygon.loop_indices:
                p=ground.data.vertices[ground.data.loops[loop].vertex_index].co; uv.data[loop].uv=(p.x/5,p.y/5)

for trail_id,_,points in trails:
    verts=[]; faces=[]
    # Narrow paths; small subdivisions follow terrain instead of bridging hills.
    for a,b in zip(points,points[1:]):
        count=max(2,int(math.dist(a,b)*2))
        direction=Vector((b[0]-a[0],b[1]-a[1])).normalized()
        for i in range(count):
            t=i/count; x=a[0]+(b[0]-a[0])*t; z=a[1]+(b[1]-a[1])*t
            width=(.34 if trail_id=='main' else .26)+.035*math.sin(x*2+z)
            for side in [-1,1]:
                px=x+side*direction.y*width; pz=z-side*direction.x*width
                verts.append((px,-pz,path_surface(px,pz)))
    b=points[-1]; direction=Vector((b[0]-points[-2][0],b[1]-points[-2][1])).normalized()
    for side in [-1,1]:
        px=b[0]+side*direction.y*.32; pz=b[1]-side*direction.x*.32
        verts.append((px,-pz,path_surface(px,pz)))
    for i in range(len(verts)//2-1): faces.append((2*i,2*i+1,2*i+3,2*i+2))
    road=mesh('Ground_Path_'+trail_id,verts,faces,roadmat)
    uv=road.data.uv_layers.new(name='UVMap')
    for polygon in road.data.polygons:
        for loop_index in polygon.loop_indices:
            p=road.data.vertices[road.data.loops[loop_index].vertex_index].co
            uv.data[loop_index].uv=(p.x/3,p.y/3)

obstacles=[]
for index in range(CONFIG['vegetation']['treeCandidates']):
    z=random.uniform(-100,50); x=random.uniform(-75,75)
    if distance_to_trails(x,z) < 2.3 or abs(z+36)<3 or in_camp(x,z): continue
    if x>18 and z<-28 and random.random()<.72: continue # open summit overlooks the valley
    proto=[prototype,prototype2][index%2]
    scale=random.uniform(.72,1.18); angle=random.uniform(0,math.tau)
    obstacles.append({'x':x,'z':z,'radius':.3*scale})
    for source in proto:
        obj=bpy.data.objects.new('Tree_'+str(index)+'_'+source.name,source.data)
        scene.collection.objects.link(obj)
        obj.location=(x,-z,elevation(x,z)); obj.rotation_euler.z=angle; obj.scale=(scale,scale,scale)

# Lower shrubs add vertical undergrowth while leaving the trail navigable.
for index in range(280):
    z=random.uniform(-70,35); x=path_x(z)+random.choice([-1,1])*random.uniform(3.5,10)
    if abs(z+36)<3 or distance_to_trails(x,z)<1.5 or in_camp(x,z): continue
    scale=random.uniform(.13,.22)
    obj=bpy.data.objects.new('Tree_Shrub_'+str(index),prototype[1].data)
    scene.collection.objects.link(obj)
    obj.location=(x,-z,elevation(x,z)-.55); obj.rotation_euler.z=random.uniform(0,math.tau); obj.scale=(scale*1.7,scale*1.7,scale)

def cube(name,location,scale,mat):
    coords=[(x,y,z) for x in [-.5,.5] for y in [-.5,.5] for z in [-.5,.5]]
    obj=mesh(name,coords,[(0,4,6,2),(1,3,7,5),(0,1,5,4),(2,6,7,3),(0,2,3,1),(4,5,7,6)],mat)
    obj.location=location; obj.scale=scale
    uv=obj.data.uv_layers.new(name='UVMap')
    for polygon in obj.data.polygons:
        for loop in polygon.loop_indices:
            p=obj.data.vertices[obj.data.loops[loop].vertex_index].co; uv.data[loop].uv=(p.x+p.y,p.z+p.y)
    bevel=obj.modifiers.new('Soft_edges','BEVEL'); bevel.width=.025; bevel.segments=2
    # Keep the editable bevel and let glTF export_apply evaluate it once at export.
    return obj

for i in range(66): cube('Bridge_Plank_'+str(i),(bridge_x,33.5+i*.08,bridge_height),(.9,.073,.13),wood)
for side in [-1,1]:
    for y in [33.5,35.5,38.5]: cylinder_between('Bridge_Post',(bridge_x+side*.43,y,bridge_height),(bridge_x+side*.43,y,bridge_height+1),.055,wood,16)
    cylinder_between('Bridge_Rail',(bridge_x+side*.43,33.5,bridge_height+1),(bridge_x+side*.43,38.5,bridge_height+1),.04,wood,16)
water=material('Water',(.12,.22,.21),.2)
water.node_tree.nodes.get('Principled BSDF').inputs['Metallic'].default_value=.15
cube('Water_Stream',(0,36,-.32),(145,4.5,.02),water)

# Irregular smooth rocks, authored as real meshes rather than shader displacement.
rocks=[]
bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=3,radius=1)
rock_source=bpy.context.object; rock_source.name='Prototype_Rock'; rock_source.hide_render=True; rock_source.hide_set(True)
for i in range(430):
    z=random.uniform(-65,35); x=path_x(z)+random.choice([-1,1])*random.uniform(2.3,8)
    if i<15: z=random.choice([-39,-33])+random.uniform(-.6,.6); x=random.uniform(-30,30)
    if distance_to_trails(x,z)<1.35 or in_camp(x,z): continue
    obj=bpy.data.objects.new('Rock_'+str(i),rock_source.data.copy()); scene.collection.objects.link(obj)
    obj.location=(x,-z,elevation(x,z)+.12)
    for vertex in obj.data.vertices: vertex.co *= random.uniform(.84,1.15)
    obj.scale=(random.uniform(.4,1.3),random.uniform(.4,1),random.uniform(.25,.65))
    obj.data.materials.append(rockmat)
    obstacles.append({'x':x,'z':z,'radius':max(obj.scale.x,obj.scale.y)})
    for polygon in obj.data.polygons: polygon.use_smooth=True
    rocks.append(obj)

# Low fern groups along the trail provide close-range ground cover.
fern_vertices=[]; fern_faces=[]
for i in range(340):
    z=random.uniform(-65,33); x=path_x(z)+random.choice([-1,1])*random.uniform(2,7)
    if abs(z+36)<3 or distance_to_trails(x,z)<1.1: continue
    base=Vector((x,-z,elevation(x,z)))
    for frond in range(6):
        angle=frond*math.tau/6+random.uniform(-.3,.3)
        direction=Vector((math.cos(angle),math.sin(angle),0))
        side=Vector((-math.sin(angle),math.cos(angle),0))
        for segment in range(1,7):
            t=segment/7; center=base+direction*t*.65+Vector((0,0,math.sin(t*math.pi)*.45))
            for sign in [-1,1]:
                start=len(fern_vertices); reach=(1-t)*.21
                fern_vertices.extend([tuple(center),tuple(center+sign*side*reach-direction*.06),tuple(center+sign*side*reach+direction*.06),tuple(center+direction*.08)])
                fern_faces.append((start,start+1,start+2,start+3))
# Use a textured CC0 fern instead of the provisional flat green fronds.
fern_path=SRC/'vegetation'/'fern_02'/'fern_02_1k.gltf'
if not fern_path.exists(): raise RuntimeError('Missing fern source; see ASSETS.md download instructions')
before=set(scene.objects)
bpy.ops.import_scene.gltf(filepath=str(fern_path))
fern_sources=[obj for obj in set(scene.objects)-before if obj.type=='MESH']
for source in fern_sources:
    active(source); bpy.ops.object.transform_apply(location=False,rotation=True,scale=True)
    source.name='Prototype_Fern'
for i in range(1000):
    z=random.uniform(-70,33); x=random.uniform(-35,38)
    if abs(z+36)<3 or distance_to_trails(x,z)<1.15 or in_camp(x,z): continue
    source=fern_sources[i%len(fern_sources)]
    obj=bpy.data.objects.new('Tree_Fern_'+str(i),source.data); scene.collection.objects.link(obj)
    obj.location=(x,-z,elevation(x,z)); obj.rotation_euler.z=random.random()*math.tau
    scale=random.uniform(.6,1.3); obj.scale=(scale,scale,scale)
for source in fern_sources: source.hide_render=True; source.hide_set(True)

# A small trailhead camp: bench, logs, canvas shelter and wooden direction sign.
camp_z=27; camp_x=path_x(camp_z)-5
camp_height=elevation(camp_x,camp_z)
canvas=material('Canvas',(.34,.39,.24))
cube('Camp_Bench',(camp_x+1,-camp_z+3,.55),(2,.5,.15),wood)
for x in [camp_x+.3,camp_x+1.7]: cube('Camp_Bench_Leg',(x,-camp_z+3,.25),(.15,.4,.5),wood)
sign_x=path_x(24)+2
cylinder_between('Sign_Post',(sign_x,-24,0),(sign_x,-24,1.7),.06,wood)
cube('Sign_Board',(sign_x,-24,1.5),(1.4,.12,.34),wood)
lettering=material('Sign_Lettering',(.75,.79,.65))
bpy.ops.object.text_add(location=(sign_x-.56,-24.071,1.43),rotation=(math.pi/2,0,0))
label=bpy.context.object; label.name='Sign_Text'; label.data.body='CREEK  65 m'; label.data.size=.12; label.data.extrude=.001; label.data.materials.append(lettering)
bpy.ops.object.convert(target='MESH')
# Ground the camp furnishings and trailhead sign on the new terrain.
for obj in scene.objects:
    if obj.name.startswith('Camp_'): obj.location.z+=camp_height
    elif obj.name.startswith('Sign_'): obj.location.z+=elevation(sign_x,24)
# Fallen timber and exposed roots interrupt the tidy appearance of the understory.
for i in range(65):
    z=random.uniform(-65,20); x=random.uniform(-35,38)
    if distance_to_trails(x,z)<3 or abs(z+36)<3: continue
    h=elevation(x,z)
    cylinder_between('Fallen_Log_'+str(i),(x,-z,h+.22),(x+random.uniform(2,4),-z+1,h+.3),.18,bark,24)
    for n in range(3): cylinder_between('Exposed_Root',(x,-z,h+.1),(x+math.cos(n*2)*.9,-z+math.sin(n*2)*.9,h+.02),.045,bark,8)
mountainmat=material('Distant_Ridge',(.21,.28,.27))
mountain_verts=[]; mountain_faces=[]
for j in range(31):
    z=-90-j*5
    for i in range(81):
        x=-200+i*5
        height=(22+18*math.sin(x*.017)**2+9*math.sin(x*.061+1)) * math.sin(j/30*math.pi)**.8 + .4*math.sin(x*.15+j)
        mountain_verts.append((x,-z,height-3))
for j in range(30):
    for i in range(80):
        a=j*81+i; mountain_faces.append((a,a+1,a+82,a+81))
mountain=mesh('Mountain_Ridgeline',mountain_verts,mountain_faces,mountainmat)
for polygon in mountain.data.polygons: polygon.use_smooth=True

# All source objects are retained in the blend but only environment instances export.
for obj in [*prototype,*prototype2]: obj.hide_render=True; obj.hide_set(True)
def walk_point(x,z):
    y=path_surface(x,z)
    return [x,y+1.7,z]
route=[walk_point(x,z) for x,z in main]
trail_manifest=[]
for trail_id,label,points in trails:
    refined=[]
    for a,b in zip(points,points[1:]):
        steps=max(2,int(math.dist(a,b)*2))
        for i in range(steps):
            t=i/steps; refined.append(walk_point(a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t))
    refined.append(walk_point(*points[-1]))
    trail_manifest.append({'id':trail_id,'label':label,'points':refined})
views=[
    {'id':'camp','label':'营地','position':walk_point(path_x(31),31),'lookAt':[camp_x,camp_height+.9,26]},
    {'id':'trail','label':'苔岩环线','position':walk_point(-23,-7),'lookAt':walk_point(-18,-17)},
    {'id':'creek','label':'溪流','position':walk_point(path_x(-30),-30),'lookAt':walk_point(bridge_x,-43)},
    {'id':'ridge','label':'山顶俯瞰','position':walk_point(27,-55),'lookAt':[-4,elevation(-4,-4)+2,-4]},
]
# Triple both horizontal dimensions, preserving the scale of individual vegetation/rocks.
horizontal=Matrix.Diagonal((3,3,1,1))
for obj in list(scene.objects):
    if obj.type!='MESH' or obj.name.startswith('Prototype_'): continue
    if obj.name.startswith(('Ground','Mountain')):
        obj.data.transform(horizontal)
        if obj.data.uv_layers.active:
            for uv in obj.data.uv_layers.active.data: uv.uv*=3
    elif obj.name.startswith('Camp_Canvas'): obj.data.transform(Matrix.Translation((camp_x*2,-camp_z*2,0)))
    else:
        if obj.name.startswith('Camp_'): obj.location.x+=camp_x*2; obj.location.y-=camp_z*2
        elif obj.name.startswith('Sign_'): obj.location.x+=sign_x*2; obj.location.y-=24*2
        else: obj.location.x*=3; obj.location.y*=3
        if obj.name.startswith('Water'): obj.scale.x*=3; obj.scale.y*=3
        if obj.name.startswith('Bridge_Plank'): obj.scale.x*=3; obj.scale.y*=3
        if obj.name.startswith('Bridge_Rail'): obj.scale.z*=3
# A second pedestrian bridge gives free explorers another creek crossing.
second_x=-90; second_height=max(elevation(-30,-32.4),elevation(-30,-39.6))+.18
for i in range(72): cube('Bridge_Plank_Secondary_'+str(i),(second_x,100.2+i*.22,second_height),(2.5,.20,.13),wood)
for side in [-1,1]:
    for y in [100.2,104,108,112,115.8]: cylinder_between('Bridge_Post_Secondary',(second_x+side*1.2,y,second_height),(second_x+side*1.2,y,second_height+1),.06,wood,16)
    cylinder_between('Bridge_Rail_Secondary',(second_x+side*1.2,100.2,second_height+1),(second_x+side*1.2,115.8,second_height+1),.045,wood,16)
for start,end in [(97,100.2),(115.8,119)]:
    verts=[]
    for y in [start,end]:
        h=second_height+.065 if 100.2<=y<=115.8 else elevation(second_x/3,-y/3)+.045
        for side in [-1,1]: verts.append((second_x+side*1.25,y,h))
    ramp=mesh('Ground_Secondary_Bridge_Ramp',verts,[(0,1,3,2)],wood)
    uv=ramp.data.uv_layers.new(name='UVMap')
    for polygon in ramp.data.polygons:
        for loop_index in polygon.loop_indices:
            p=ramp.data.vertices[ramp.data.loops[loop_index].vertex_index].co; uv.data[loop_index].uv=(p.x,p.y)
for points in [route,*[t['points'] for t in trail_manifest]]:
    for p in points: p[0]*=3; p[2]*=3
for v in views:
    for p in [v['position'],v['lookAt']]: p[0]*=3; p[2]*=3
for o in obstacles: o['x']*=3; o['z']*=3

# New original plant forms: grass tufts, flowering herbs and slender birch stands.
grassmat=material('Grass_Leaves',(.21,.29,.10)); flower=material('Wildflower',(.70,.65,.40))
def ellipsoid(name,location,scale,mat):
    verts=[]; faces=[]; segments=16; rings=10
    for ring in range(rings+1):
        latitude=ring*math.pi/rings
        for step in range(segments+1):
            angle=step*math.tau/segments
            verts.append((math.sin(latitude)*math.cos(angle),math.sin(latitude)*math.sin(angle),math.cos(latitude)))
    for ring in range(rings):
        for step in range(segments):
            a=ring*(segments+1)+step; faces.append((a,a+1,a+segments+2,a+segments+1))
    obj=mesh(name,verts,faces,mat); obj.location=location; obj.scale=scale
    uv=obj.data.uv_layers.new(name='UVMap')
    for polygon in obj.data.polygons:
        polygon.use_smooth=True
        for loop in polygon.loop_indices:
            vertex=obj.data.loops[loop].vertex_index; uv.data[loop].uv=((vertex%(segments+1))/segments,(vertex//(segments+1))/rings)
    return obj
grass_vertices=[]; grass_faces=[]
for i in range(10000):
    x=random.uniform(-145,145); z=random.uniform(-225,112)
    if distance_to_trails(x/3,z/3)<.7 or abs(z+108)<8 or in_camp(x/3,z/3): continue
    h=elevation(x/3,z/3); verts=[]; faces=[]
    for blade in range(5):
        angle=random.random()*math.tau; length=random.uniform(.12,.42); n=len(verts)
        width=random.uniform(.015,.035)
        verts.extend([(x-width,-z,h),(x+width,-z,h),(x+math.cos(angle)*.12,-z+math.sin(angle)*.12,h+length)])
        faces.append((n,n+1,n+2))
    offset=len(grass_vertices); grass_vertices.extend(verts); grass_faces.extend(tuple(v+offset for v in f) for f in faces)
    if i%90==0:
        ellipsoid('Wildflower_'+str(i),(x,-z,h+.48),(.08,.08,.08),flower)
grass=mesh('Groundcover_Grass',grass_vertices,grass_faces,grassmat)
grassmat.use_backface_culling=False
birch=material('Birch_Bark',(.67,.65,.57)); surface_texture(birch,'birch_bark.png',[(.22,.23,.20),(.78,.77,.68)])
for i in range(75):
    x=random.uniform(-110,-30); z=random.uniform(-50,100)
    if distance_to_trails(x/3,z/3)<1 or in_camp(x/3,z/3): continue
    h=elevation(x/3,z/3)
    cylinder_between('Birch_Trunk',(x,-z,h),(x+.12,-z,h+8),.13,birch,20)
    source=prototype[1]; obj=bpy.data.objects.new('Tree_Birch_'+str(i),source.data); scene.collection.objects.link(obj)
    obj.location=(x,-z,h); obj.scale=(.65,.65,.80)
    obstacles.append({'x':x,'z':z,'radius':.18})

# Separate limbs and neck are articulated in the browser, no mesh deformation shortcut.
fur=material('Deer_Fur',(.38,.26,.15)); surface_texture(fur,'fur_detail.png',[(.33,.23,.14),(.39,.28,.17)])
cream=material('Deer_Underbelly',(.64,.57,.43)); dark=material('Deer_Hoof_Nose',(.045,.035,.027),.55)
eye=material('Deer_Eye',(.008,.006,.004),.18)
for i,(x,z) in enumerate([(-32,24),(-63,-25),(48,-74),(70,-115),(-18,70),(12,-152)]):
    h=elevation(x/3,z/3)
    root=bpy.data.objects.new('Animal_Deer_'+str(i),None); scene.collection.objects.link(root); root.location=(x,-z,h)
    def attach(obj,parent=root): obj.parent=parent; return obj
    attach(ellipsoid('Deer_Body',(0,0,1.08),(.72,.25,.33),fur))
    attach(ellipsoid('Deer_Underbelly',(0,0,1.00),(.57,.22,.23),cream))
    attach(ellipsoid('Deer_Rump',(-.43,0,1.12),(.32,.27,.36),fur))
    attach(ellipsoid('Deer_Shoulder',(.43,0,1.14),(.30,.24,.38),fur))
    attach(ellipsoid('Deer_Tail',(-.72,0,1.22),(.19,.07,.065),cream))
    neck=bpy.data.objects.new('Deer_Neck_'+str(i),None); scene.collection.objects.link(neck); neck.location=(.43,0,1.25); neck.parent=root
    n=attach(ellipsoid('Deer_Neck_Mesh',(.17,0,.20),(.15,.16,.34),fur),neck); n.rotation_euler.y=.40
    attach(ellipsoid('Deer_Head',(.35,0,.46),(.22,.105,.125),fur),neck)
    attach(ellipsoid('Deer_Muzzle',(.52,0,.40),(.14,.075,.065),fur),neck)
    attach(ellipsoid('Deer_Nose',(.64,0,.40),(.025,.061,.034),dark),neck)
    for side in [-1,1]:
        e=attach(ellipsoid('Deer_Ear',(.23,side*.14,.61),(.065,.045,.12),fur),neck); e.rotation_euler.x=side*.45
        attach(ellipsoid('Deer_Inner_Ear',(.24,side*.175,.62),(.034,.012,.08),cream),neck)
        attach(ellipsoid('Deer_Eye',(.39,side*.10,.49),(.019,.012,.021),eye),neck)
        for front in [-1,1]:
            leg=bpy.data.objects.new('Deer_Leg_'+str(i)+'_'+str(front)+'_'+str(side),None); scene.collection.objects.link(leg)
            leg.parent=root; leg.location=(front*.43,side*.16,1.12)
            attach(ellipsoid('Deer_Upper_Leg',(0,0,-.20),(.075,.075,.28),fur),leg)
            attach(cylinder_between('Deer_Lower_Leg',(0,0,-.4),(.035,0,-1.02),.035,fur,10),leg)
            attach(ellipsoid('Deer_Hoof',(.045,0,-1.04),(.065,.048,.055),dark),leg)
# Detailed walk-in camp tent, built in final metre coordinates after map expansion.
tent_x=camp_x*3; tent_z=camp_z*3; tent_floor=1.045
def tent_point(x,z,h): return (tent_x+x,-tent_z-z,1.0+h)
cloth=material('Tent_Woven_Canvas',(.38,.43,.27),.98); cloth.use_backface_culling=False
surface_texture(cloth,'tent_canvas.png',[(.29,.34,.21),(.43,.48,.31)])
trim=material('Tent_Reinforced_Trim',(.16,.20,.12),.92)
pole=material('Tent_Aluminium',(.22,.24,.22),.38)
rope=material('Tent_Guy_Rope',(.67,.63,.48),.94)
floor_mat=material('Tent_Groundsheet',(.11,.14,.11),.98)
surface_texture(floor_mat,'tent_groundsheet.png',[(.08,.105,.075),(.16,.19,.14)])
segments=32; longitudinal=12; verts=[]; faces=[]
for j in range(longitudinal+1):
    z=-2.6+5.2*j/longitudinal
    for i in range(segments+1):
        theta=math.pi*i/segments
        wrinkle=.018*math.sin(j*2.6+i*.6)*math.sin(theta)
        verts.append(tent_point(math.cos(theta)*(2.7+wrinkle),z,.05+math.sin(theta)*(2.6+wrinkle)))
for j in range(longitudinal):
    for i in range(segments):
        a=j*(segments+1)+i; faces.append((a,a+1,a+segments+2,a+segments+1))
shell=mesh('Tent_Canvas_Shell',verts,faces,cloth)
uv=shell.data.uv_layers.new(name='UVMap')
for poly in shell.data.polygons:
    poly.use_smooth=True
    for loop in poly.loop_indices:
        index=shell.data.loops[loop].vertex_index; uv.data[loop].uv=(index%(segments+1)/segments*3,index//(segments+1)/longitudinal*2)

def tent_panel(name,coords,mat=cloth):
    obj=mesh(name,[tent_point(*p) for p in coords],[tuple(range(len(coords)))],mat)
    uv=obj.data.uv_layers.new(name='UVMap')
    for poly in obj.data.polygons:
        for loop in poly.loop_indices:
            p=obj.data.vertices[obj.data.loops[loop].vertex_index].co; uv.data[loop].uv=(p.x*.6,p.z*.6)
    return obj
rear=[(2.7*math.cos(i*math.pi/segments),-2.6,.05+2.6*math.sin(i*math.pi/segments)) for i in range(segments+1)]
tent_panel('Tent_Back_Panel',rear)
stop=math.acos(.9/2.7)
for side in [-1,1]:
    coords=[(side*2.7*math.cos(stop*i/16),2.6,.05+2.6*math.sin(stop*i/16)) for i in range(17)]
    coords.extend([(side*.9,2.6,2.1),(side*.9,2.6,.045)])
    tent_panel('Tent_Front_Panel',coords)
top=[(2.7*math.cos(stop+(math.pi-2*stop)*i/12),2.6,.05+2.6*math.sin(stop+(math.pi-2*stop)*i/12)) for i in range(13)]
top.extend([(-.9,2.6,2.1),(.9,2.6,2.1)])
tent_panel('Tent_Entrance_Header',top)
cube('Ground_TentFloor',(tent_x,-tent_z,1.025),(5.3,5.1,.04),floor_mat)
access=[]; access_faces=[]
for i in range(21):
    x=tent_x+(path_x(28)*3-tent_x)*i/20
    for z in [83.35,84.65]: access.append((x,-z,elevation(x/3,z/3)+.025))
for i in range(20): access_faces.append((i*2,i*2+1,i*2+3,i*2+2))
access_obj=mesh('Ground_Camp_Access',access,access_faces,roadmat)
uv=access_obj.data.uv_layers.new(name='UVMap')
for polygon in access_obj.data.polygons:
    for loop in polygon.loop_indices:
        p=access_obj.data.vertices[access_obj.data.loops[loop].vertex_index].co; uv.data[loop].uv=(p.x/3,p.y/3)
# Two arched poles and raised seam tapes; open entrance is 1.8m wide, 2.1m tall.
for z in [-2.35,2.35]:
    for i in range(segments):
        a=i*math.pi/segments; b=(i+1)*math.pi/segments
        cylinder_between('Tent_Arched_Pole',tent_point(2.72*math.cos(a),z,.06+2.62*math.sin(a)),tent_point(2.72*math.cos(b),z,.06+2.62*math.sin(b)),.018,pole,12)
for theta in [.35,math.pi/2,math.pi-.35]:
    cylinder_between('Tent_Seam_Tape',tent_point(2.71*math.cos(theta),-2.6,.07+2.61*math.sin(theta)),tent_point(2.71*math.cos(theta),2.6,.07+2.61*math.sin(theta)),.012,trim,10)
for side in [-1,1]:
    cylinder_between('Tent_Door_Zipper',tent_point(side*.9,2.61,.05),tent_point(side*.9,2.61,2.1),.009,rope,10)
    for z in [-2.2,2.2]:
        cylinder_between('Tent_Guy_Line',tent_point(side*2.35,z,1.15),tent_point(side*3.5,z*1.5,.03),.007,rope,8)
        cylinder_between('Tent_Stake',tent_point(side*3.5,z*1.5,-.05),tent_point(side*3.5+.04,z*1.5,.09),.013,pole,12)
cylinder_between('Tent_Rolled_Door',tent_point(-.88,2.63,2.12),tent_point(.88,2.63,2.12),.07,cloth,24)
net=material('Tent_Window_Mesh',(.10,.14,.13),.98)
tent_panel('Tent_Rear_Window',[(-.6,-2.61,1.1),(.6,-2.61,1.1),(.6,-2.61,1.85),(-.6,-2.61,1.85)],net)
for x in [-.6,-.3,0,.3,.6]: cylinder_between('Tent_Window_Stitch',tent_point(x,-2.62,1.1),tent_point(x,-2.62,1.85),.003,rope,6)
bedding=material('Tent_Sleeping_Mat',(.35,.29,.19),.96)
for x in [-1.25,1.25]:
    cube('Tent_Sleeping_Mat',(tent_x+x,-tent_z-.35,1.085),(.7,1.85,.08),bedding)
    cylinder_between('Tent_Rolled_Blanket',tent_point(x-.34,-1.2,.20),tent_point(x+.34,-1.2,.20),.13,cloth,24)
solids=[]
for x0,x1,z0,z1 in [(-2.1,-1.8,-2.65,2.7),(1.8,2.1,-2.65,2.7),(-2.1,2.1,-2.75,-2.45),(-2.1,-.9,2.4,2.75),(.9,2.1,2.4,2.75)]:
    solids.append({'minX':tent_x+x0,'maxX':tent_x+x1,'minZ':tent_z+z0,'maxZ':tent_z+z1})
tent={'center':[tent_x,tent_floor,tent_z],'entrance':[tent_x,tent_floor,tent_z+3.1],'interiorCamera':[tent_x,tent_floor+1.7,tent_z+.65],'interiorLookAt':[tent_x-1.1,tent_floor+.4,tent_z-1.6],'clearanceRadius':7.8,'doorWidth':1.8,'doorHeight':2.1}
manifest={'version':'场景2.0','bounds':{'minX':-195,'maxX':195,'minZ':-255,'maxZ':126},'horizontalScale':3,'terrainSize':[480,480],'tent':tent,'solids':solids,'route':route,'trails':trail_manifest,'obstacles':obstacles,'viewpoints':views,'source':'Blender 4.5 / original generated meshes + Poly Haven CC0 ground textures','baked':['bark base-color','original wood / granite / birch / fur / tent color textures'],'upgrade':'natural-2026-10-03','pending':['static AO bake','static indirect lightmap','human visual acceptance']}
(OUT/'forest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')

scene.render.engine='BLENDER_EEVEE_NEXT'
scene.render.resolution_x=1920; scene.render.resolution_y=1200; scene.render.resolution_percentage=100
scene.view_settings.view_transform='AgX'
bpy.ops.object.light_add(type='SUN',location=(-35,-10,45))
sun=bpy.context.object; sun.name='Reference_Sun'; sun.data.energy=3; sun.data.angle=math.radians(8)
sun.rotation_euler=(Vector((0,20,0))-sun.location).to_track_quat('-Z','Y').to_euler()
scene.world.use_nodes=True
scene.world.node_tree.nodes.get('Background').inputs[0].default_value=(.32,.43,.5,1)
scene.world.node_tree.nodes.get('Background').inputs[1].default_value=.65
bpy.ops.object.camera_add()
camera=bpy.context.object; camera.name='Reference_Camera'
# Three.js FOV is vertical; set Blender sensor fit to vertical for matched views.
camera.data.sensor_fit='VERTICAL'; camera.data.lens=camera.data.sensor_height/(2*math.tan(math.radians(56)/2)); scene.camera=camera
for image in bpy.data.images:
    if image.source=='FILE':
        image.pack()
        image.filepath=bpy.path.relpath(image.filepath,start=str(SRC))
import hashlib
invalid=[o.name for o in scene.objects if o.type=='MESH' and any(not all(math.isfinite(v) for v in p.co) for p in o.data.vertices)]
if invalid: raise RuntimeError('Non-finite vertices: '+str(invalid))
report={'config':CONFIG,'finiteVertices':True,'meshes':sum(o.type=='MESH' for o in scene.objects),'triangles':sum(sum(len(p.vertices)-2 for p in o.data.polygons) for o in scene.objects if o.type=='MESH'),'sourceSha256':hashlib.sha256(Path(__file__).read_bytes()).hexdigest(), 'inputSha256':{str(p.relative_to(ROOT)).replace(chr(92),'/'):hashlib.sha256(p.read_bytes()).hexdigest() for p in [ROOT/'src/scene/natural_trees.py',ROOT/'src/scene/config/natural-upgrade.json',ROOT/'src/scene/natural-assets.json',ROOT/'src/scene/config/build-tools.json']}}
(OUT/'forest-build.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
bpy.ops.wm.save_as_mainfile(filepath=str(SRC/'forest.blend'))
bpy.ops.object.select_all(action='DESELECT')
for obj in scene.objects:
    if obj.type in {'MESH','EMPTY'} and not obj.name.startswith('Prototype_'): obj.select_set(True)
bpy.ops.export_scene.gltf(filepath=str(OUT/'forest.glb'),export_format='GLB',use_selection=True,export_apply=True,export_cameras=False,export_lights=False)
print('ASSETS_READY',str(OUT/'forest.glb'),flush=True)
if '--render' in sys.argv:
    renders=ROOT/'docs'/'acceptance'/'scene-2.0'/'eevee'
    renders.mkdir(parents=True,exist_ok=True)
    for view in views:
        p=view['position']; target=view['lookAt']
        camera.location=(p[0],-p[2],p[1])
        aim=Vector((target[0],-target[2],target[1]))
        camera.rotation_euler=(aim-camera.location).to_track_quat('-Z','Y').to_euler()
        scene.render.filepath=str(renders/(view['id']+'.png'))
        bpy.ops.render.render(write_still=True)
        print('REFERENCE_RENDER',view['id'],flush=True)
