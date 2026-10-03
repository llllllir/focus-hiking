"""Project tree geometry; Sapling is a build-time GPL tool, not shipped code."""
import bpy, random, math, importlib.util, sys
from pathlib import Path
from mathutils import Vector

def create_tree(root, variant, bark, foliage, mesh):
    addon=root/'.tools/sapling-0.3.7'
    if 'project_sapling' not in sys.modules:
        spec=importlib.util.spec_from_file_location('project_sapling',addon/'__init__.py',submodule_search_locations=[str(addon)])
        module=importlib.util.module_from_spec(spec); sys.modules[spec.name]=module; spec.loader.exec_module(module); module.register()
    before=set(bpy.data.objects)
    bpy.ops.object.select_all(action='DESELECT')
    bpy.ops.curve.tree_add(seed=142+variant*37,showLeaves=False,bevel=True,levels=3,scale=10+variant*2,
        branches=(0,24,10,4),length=(1,.44,.48,.3),lengthV=(0,.13,.15,0),
        baseSize=.32,ratio=.022,curveRes=(7,4,3,1),bevelRes=0,resU=2,
        shape=str(7 if variant==0 else 4),downAngle=(90,52,48,45),rotate=(99,137.5,137.5,137.5))
    tree=next(o for o in set(bpy.data.objects)-before if o.type=='CURVE')
    tips=[]
    for spline in tree.data.splines:
        points=spline.bezier_points
        if len(points)>1:
            p=points[-1].co
            if p.z>3: tips.append(p.copy())
    bpy.context.view_layer.objects.active=tree; tree.select_set(True)
    bpy.ops.object.convert(target='MESH'); tree=bpy.context.object
    # Sapling's curve tessellation is excessive for metre-scale branch silhouettes.
    modifier=tree.modifiers.new('Branch_web_budget','DECIMATE'); modifier.ratio=.22
    bpy.ops.object.modifier_apply(modifier=modifier.name)
    tree.name='Prototype_Trunk_'+str(variant); tree.data.materials.clear(); tree.data.materials.append(bark)
    uv=tree.data.uv_layers.new(name='UVMap')
    for poly in tree.data.polygons:
        poly.use_smooth=True
        for loop in poly.loop_indices:
            p=tree.data.vertices[tree.data.loops[loop].vertex_index].co
            uv.data[loop].uv=(math.atan2(p.y,p.x)/math.tau,p.z/2)
    rng=random.Random(710+variant); verts=[]; faces=[]; coords=[]
    for tip in tips:
        for n in range(9):
            center=tip+Vector((rng.gauss(0,.45),rng.gauss(0,.45),rng.gauss(0,.35)))
            direction=Vector((rng.uniform(-1,1),rng.uniform(-1,1),rng.uniform(-.5,.8))).normalized()
            side=direction.cross(Vector((0,0,1))).normalized()
            length=rng.uniform(.45,.8); width=length*.48; start=len(verts)
            verts.extend(tuple(p) for p in [center-direction*length-side*width,center+direction*length-side*width,center+direction*length+side*width,center-direction*length+side*width])
            faces.append((start,start+1,start+2,start+3)); coords.extend([(.02,.04),(.02,.95),(.43,.95),(.43,.04)])
    canopy=mesh('Prototype_Leaves_'+str(variant),verts,faces,foliage)
    uv=canopy.data.uv_layers.new(name='UVMap')
    for poly in canopy.data.polygons:
        for loop in poly.loop_indices: uv.data[loop].uv=coords[canopy.data.loops[loop].vertex_index]
    # Treat cards as the surface of a crown rather than randomly lit flat paper.
    canopy.data.normals_split_custom_set_from_vertices([tuple(Vector((p.co.x,p.co.y,(p.co.z-(10+variant*2)*.65)*.7)).normalized()) for p in canopy.data.vertices])
    print('TREE_GENERATED',variant,len(tips),len(verts),flush=True)
    return tree,canopy
