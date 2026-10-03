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
from mathutils import Vector

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'public' / 'assets'
OUT.mkdir(parents=True, exist_ok=True)
SRC = ROOT / 'src' / 'scene' / 'assets'
SRC.mkdir(parents=True, exist_ok=True)
random.seed(4419)
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
    bpy.ops.mesh.primitive_cone_add(vertices=vertices, radius1=radius, radius2=radius*.6, depth=(b-a).length, location=(a+b)/2)
    obj = bpy.context.object
    obj.name = name
    obj.rotation_euler = (b-a).to_track_quat('Z','Y').to_euler()
    obj.data.materials.append(mat)
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

def tree_prototype(variant):
    rng = random.Random(91+variant)
    height = 10 + variant*2
    parts = [cylinder_between('Trunk',(0,0,0),(.2,-.1,height),.24+variant*.04,bark,16)]
    leaf_vertices, leaf_faces, leaf_uvs = [], [], []
    for branch in range(25):
        angle = branch*2.399 + rng.uniform(-.3,.3)
        z = 2.5 + (branch/25)*6.5
        spread = 3.8 * (1-abs(z-7.0)/6)
        end = (math.cos(angle)*spread,math.sin(angle)*spread,z+rng.uniform(.3,1.5))
        mid = (end[0]*.5,end[1]*.5,z+.35)
        parts.append(cylinder_between('Branch',(.1,0,z),mid,.08,bark))
        parts.append(cylinder_between('Twig',mid,end,.045,bark,8))
        for n in range(18):
            center = Vector((end[0]+rng.gauss(0,.8),end[1]+rng.gauss(0,.8),end[2]+rng.gauss(0,.65)))
            angle2=rng.random()*math.tau
            length=rng.uniform(.65,1.05); width=length*.45
            direction=Vector((math.cos(angle2),math.sin(angle2),rng.uniform(-.4,.4))).normalized()
            side=direction.cross(Vector((0,0,1))).normalized()
            start=len(leaf_vertices)
            for p in [center-direction*length-side*width,center+direction*length-side*width,center+direction*length+side*width,center-direction*length+side*width]: leaf_vertices.append(tuple(p))
            leaf_faces.append((start,start+1,start+2,start+3))
            # Two real branch clusters from the atlas; exclude its unused large polygons.
            u0,u1,v0,v1=(.02,.43,.04,.95) if n%2 else (.49,.85,.33,.96)
            leaf_uvs.extend([(u0,v0),(u0,v1),(u1,v1),(u1,v0)])
    trunk=join(parts,'Prototype_Trunk_'+str(variant))
    canopy=mesh('Prototype_Leaves_'+str(variant),leaf_vertices,leaf_faces,foliage)
    uv=canopy.data.uv_layers.new(name='UVMap')
    for polygon in canopy.data.polygons:
        for loop_index in polygon.loop_indices: uv.data[loop_index].uv=leaf_uvs[canopy.data.loops[loop_index].vertex_index]
    return trunk,canopy

prototype=tree_prototype(0)
bake_color(prototype[0],bark,'bark_baked.png')
prototype2=tree_prototype(1)

def path_x(z): return 3*math.sin(z/14)+.055*(30-z)
def elevation(x,z):
    hills=6.0*math.exp(-((x-27)/22)**2-((z+55)/28)**2)+3.4*math.exp(-((x+23)/19)**2-((z+6)/24)**2)
    rise=max(0,-z-40)*.075
    detail=.45*math.sin(x/9)*math.cos(z/13)+.10*math.sin(x*.7+z*.31)
    creek=-1.4*math.exp(-((z+36)/3.0)**2)
    return hills+rise+detail+creek

def main_points(): return [[path_x(31-i*3.9),31-i*3.9] for i in range(25)]
main=main_points()
# Each branch shares exact junction coordinates with the main trail.
loop=[main[4],[-9,12],[-18,4],[-23,-7],[-18,-17],main[13]]
ridge=[main[13],[17,-24],[27,-32],[30,-46],[23,-57],main[24]]
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
    asset='forest_floor' if mat==groundmat else 'rocky_trail'
    nodes=mat.node_tree.nodes; links=mat.node_tree.links
    base=nodes.new('ShaderNodeTexImage'); base.image=bpy.data.images.load(str(OUT/'textures'/(asset+'_diff_1k.jpg')),check_existing=True)
    links.new(base.outputs['Color'],nodes.get('Principled BSDF').inputs['Base Color'])
    normal=nodes.new('ShaderNodeTexImage'); normal.image=bpy.data.images.load(str(OUT/'textures'/(asset+'_nor_gl_1k.jpg')),check_existing=True); normal.image.colorspace_settings.name='Non-Color'
    nmap=nodes.new('ShaderNodeNormalMap'); nmap.inputs['Strength'].default_value=.5
    links.new(normal.outputs['Color'],nmap.inputs['Color']); links.new(nmap.outputs['Normal'],nodes.get('Principled BSDF').inputs['Normal'])
    rough=nodes.new('ShaderNodeTexImage'); rough.image=bpy.data.images.load(str(OUT/'textures'/(asset+'_rough_1k.jpg')),check_existing=True); rough.image.colorspace_settings.name='Non-Color'
    links.new(rough.outputs['Color'],nodes.get('Principled BSDF').inputs['Roughness'])

vertices=[]; faces=[]; size=160
for j in range(size+1):
    z=55-j
    for i in range(size+1):
        x=-80+i
        vertices.append((x,-z,elevation(x,z)))
for j in range(size):
    for i in range(size):
        a=j*(size+1)+i; faces.append((a,a+1,a+size+2,a+size+1))
ground=mesh('Ground_Terrain',vertices,faces,groundmat)
uv=ground.data.uv_layers.new(name='UVMap')
for polygon in ground.data.polygons:
    polygon.use_smooth=True
    for loop in polygon.loop_indices:
        p=ground.data.vertices[ground.data.loops[loop].vertex_index].co
        uv.data[loop].uv=(p.x/5,p.y/5)

for trail_id,_,points in trails:
    verts=[]; faces=[]
    # Narrow paths; small subdivisions follow terrain instead of bridging hills.
    for a,b in zip(points,points[1:]):
        count=max(2,int(math.dist(a,b)*2))
        direction=Vector((b[0]-a[0],b[1]-a[1])).normalized()
        for i in range(count):
            t=i/count; x=a[0]+(b[0]-a[0])*t; z=a[1]+(b[1]-a[1])*t
            width=(.85 if trail_id=='main' else .62)+.10*math.sin(x*2+z)
            for side in [-1,1]:
                px=x+side*direction.y*width; pz=z-side*direction.x*width
                verts.append((px,-pz,elevation(px,pz)+.045))
    b=points[-1]; direction=Vector((b[0]-points[-2][0],b[1]-points[-2][1])).normalized()
    for side in [-1,1]:
        px=b[0]+side*direction.y*.7; pz=b[1]-side*direction.x*.7
        verts.append((px,-pz,elevation(px,pz)+.045))
    for i in range(len(verts)//2-1): faces.append((2*i,2*i+1,2*i+3,2*i+2))
    road=mesh('Ground_Path_'+trail_id,verts,faces,roadmat)
    uv=road.data.uv_layers.new(name='UVMap')
    for polygon in road.data.polygons:
        for loop_index in polygon.loop_indices:
            p=road.data.vertices[road.data.loops[loop_index].vertex_index].co
            uv.data[loop_index].uv=(p.x/3,p.y/3)

obstacles=[]
for index in range(320):
    z=random.uniform(-82,40); x=random.uniform(-48,48)
    if distance_to_trails(x,z) < 2.3 or abs(z+36)<3: continue
    proto=[prototype,prototype2][index%2]
    scale=random.uniform(.72,1.18); angle=random.uniform(0,math.tau)
    obstacles.append({'x':x,'z':z,'radius':.3*scale})
    for source in proto:
        obj=bpy.data.objects.new('Tree_'+str(index)+'_'+source.name,source.data)
        scene.collection.objects.link(obj)
        obj.location=(x,-z,elevation(x,z)); obj.rotation_euler.z=angle; obj.scale=(scale,scale,scale)

# Lower shrubs add vertical undergrowth while leaving the trail navigable.
for index in range(140):
    z=random.uniform(-70,35); x=path_x(z)+random.choice([-1,1])*random.uniform(3.5,10)
    if abs(z+36)<3 or distance_to_trails(x,z)<1.5: continue
    scale=random.uniform(.13,.22)
    obj=bpy.data.objects.new('Tree_Shrub_'+str(index),prototype[1].data)
    scene.collection.objects.link(obj)
    obj.location=(x,-z,elevation(x,z)-.55); obj.rotation_euler.z=random.uniform(0,math.tau); obj.scale=(scale*1.7,scale*1.7,scale)

def cube(name,location,scale,mat):
    bpy.ops.mesh.primitive_cube_add(size=1,location=location)
    obj=bpy.context.object; obj.name=name; obj.scale=scale; obj.data.materials.append(mat)
    bevel=obj.modifiers.new('Soft_edges','BEVEL'); bevel.width=.025; bevel.segments=2
    active(obj); bpy.ops.object.modifier_apply(modifier=bevel.name)
    return obj

bridge_x=path_x(-36)
bridge_height=max(elevation(bridge_x,-33),elevation(bridge_x,-39))+.12
for i in range(22): cube('Bridge_Plank_'+str(i),(bridge_x,33.5+i*.24,bridge_height),(2.5,.21,.13),wood)
for side in [-1,1]:
    for y in [33.5,35.5,38.5]: cylinder_between('Bridge_Post',(bridge_x+side*1.2,y,bridge_height),(bridge_x+side*1.2,y,bridge_height+1),.055,wood,8)
    cylinder_between('Bridge_Rail',(bridge_x+side*1.2,33.5,bridge_height+1),(bridge_x+side*1.2,38.5,bridge_height+1),.04,wood,8)
water=material('Water',(.12,.22,.21),.2)
water.node_tree.nodes.get('Principled BSDF').inputs['Metallic'].default_value=.15
cube('Water_Stream',(0,36,-.32),(145,4.5,.02),water)

# Irregular smooth rocks, authored as real meshes rather than shader displacement.
rocks=[]
for i in range(160):
    z=random.uniform(-65,35); x=path_x(z)+random.choice([-1,1])*random.uniform(2.3,8)
    if i<15: z=random.choice([-39,-33])+random.uniform(-.6,.6); x=random.uniform(-30,30)
    if distance_to_trails(x,z)<1.35: continue
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=2,radius=1,location=(x,-z,elevation(x,z)+.12))
    obj=bpy.context.object; obj.name='Rock_'+str(i)
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
for i in range(350):
    z=random.uniform(-70,33); x=random.uniform(-35,38)
    if abs(z+36)<3 or distance_to_trails(x,z)<1.15: continue
    source=fern_sources[i%len(fern_sources)]
    obj=bpy.data.objects.new('Tree_Fern_'+str(i),source.data); scene.collection.objects.link(obj)
    obj.location=(x,-z,elevation(x,z)); obj.rotation_euler.z=random.random()*math.tau
    scale=random.uniform(.6,1.3); obj.scale=(scale,scale,scale)
for source in fern_sources: source.hide_render=True; source.hide_set(True)

# A small trailhead camp: bench, logs, canvas shelter and wooden direction sign.
camp_z=27; camp_x=path_x(camp_z)-5
camp_height=elevation(camp_x,camp_z)
canvas=material('Canvas',(.34,.39,.24))
mesh('Camp_Canvas',[(camp_x-2,-camp_z,0),(camp_x,-camp_z,1.8),(camp_x+2,-camp_z,0),(camp_x-2,-camp_z-3,0),(camp_x,-camp_z-3,1.8),(camp_x+2,-camp_z-3,0)],[(0,1,4,3),(1,2,5,4)],canvas)
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
for i in range(18):
    z=random.uniform(-65,20); x=random.uniform(-35,38)
    if distance_to_trails(x,z)<3 or abs(z+36)<3: continue
    h=elevation(x,z)
    cylinder_between('Fallen_Log_'+str(i),(x,-z,h+.22),(x+random.uniform(2,4),-z+1,h+.3),.18,bark,12)
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
    y=bridge_height+.065 if abs(z+36)<2.65 and abs(x-bridge_x)<1.2 else elevation(x,z)+.045
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
    {'id':'ridge','label':'山坡观景台','position':walk_point(30,-46),'lookAt':[0,elevation(0,-60),-60]},
]
manifest={'version':'框架场景1.0 · 探索迭代','route':route,'trails':trail_manifest,'obstacles':obstacles,'viewpoints':views,'source':'Blender 4.5 / original generated meshes + Poly Haven CC0 ground textures','baked':['bark base-color'],'pending':['normal/AO bake','static indirect lightmap','human visual acceptance']}
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
bpy.ops.wm.save_as_mainfile(filepath=str(SRC/'forest.blend'))
bpy.ops.object.select_all(action='DESELECT')
for obj in scene.objects:
    if obj.type=='MESH' and not obj.name.startswith('Prototype_'): obj.select_set(True)
bpy.ops.export_scene.gltf(filepath=str(OUT/'forest.glb'),export_format='GLB',use_selection=True,export_apply=True,export_cameras=False,export_lights=False)
print('ASSETS_READY',str(OUT/'forest.glb'),flush=True)
if '--render' in sys.argv:
    renders=ROOT/'docs'/'acceptance'/'framework-scene-1.0'/'eevee'
    renders.mkdir(parents=True,exist_ok=True)
    for view in views:
        p=view['position']; target=view['lookAt']
        camera.location=(p[0],-p[2],p[1])
        aim=Vector((target[0],-target[2],target[1]))
        camera.rotation_euler=(aim-camera.location).to_track_quat('-Z','Y').to_euler()
        scene.render.filepath=str(renders/(view['id']+'.png'))
        bpy.ops.render.render(write_still=True)
        print('REFERENCE_RENDER',view['id'],flush=True)
