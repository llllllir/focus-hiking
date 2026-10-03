"""Import the reproducible rigged GLB into Blender for further anatomical editing.
Run: blender --background --python src/scene/build-wildlife.py
"""
from pathlib import Path
import sys
import bpy
from mathutils import Vector

root = Path(__file__).resolve().parents[2]
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
bpy.ops.import_scene.gltf(filepath=str(root / 'public/assets/wildlife.glb'))
rigs = [o for o in bpy.data.objects if o.type == 'ARMATURE']
meshes = [o for o in bpy.data.objects if o.type == 'MESH' and o.parent and o.parent.type == 'ARMATURE']
assert len(rigs) == 11, f'Expected 11 species armatures, got {len(rigs)}'
assert len(meshes) == 11, f'Expected 11 bound species meshes, got {len(meshes)}'
for o in meshes:
    print('RIG_BIND', o.name, [m.type for m in o.modifiers], o.parent.name if o.parent else None, o.parent_type, len(o.vertex_groups))
assert all(any(m.type == 'ARMATURE' for m in o.modifiers) or (o.parent and o.parent.type == 'ARMATURE' and o.parent_type == 'BONE') for o in meshes), 'Unbound wildlife mesh'
(root / 'assets').mkdir(exist_ok=True)
bpy.ops.wm.save_as_mainfile(filepath=str(root / 'assets/wildlife.blend'))
print(f'WILDLIFE_RIG_CHECK armatures={len(rigs)} meshes={len(meshes)}')
if '--render' in sys.argv:
    scene = bpy.context.scene
    scene.render.engine = 'BLENDER_EEVEE_NEXT'
    scene.render.resolution_x = 640
    scene.render.resolution_y = 480
    scene.render.resolution_percentage = 100
    scene.world.color = (.06, .06, .06)
    for obj in bpy.data.objects:
        if obj.type == 'MESH':
            obj.hide_render = True
    bpy.ops.object.camera_add()
    camera = bpy.context.object
    camera.data.type = 'ORTHO'
    scene.camera = camera
    bpy.ops.object.light_add(type='AREA')
    light = bpy.context.object
    light.data.energy = 450
    light.data.size = 3
    output = root / 'docs/acceptance/v-island-upgrade/models'
    output.mkdir(parents=True, exist_ok=True)
    for obj in meshes:
        obj.hide_render = False
        corners = [obj.matrix_world @ Vector(c) for c in obj.bound_box]
        center = sum(corners, Vector()) / 8
        size = Vector([max(v[k] for v in corners)-min(v[k] for v in corners) for k in range(3)])
        extent = max(size)
        camera.data.ortho_scale = max(.08, extent * 1.7)
        camera.location = center + Vector((1.1, -1.8, .7)) * max(.2, extent)
        camera.rotation_euler = (center-camera.location).to_track_quat('-Z', 'Y').to_euler()
        light.location = center + Vector((1, -2, 3)) * max(.2, extent)
        light.rotation_euler = (center-light.location).to_track_quat('-Z', 'Y').to_euler()
        light.data.energy = 120 * max(.2, extent) ** 2
        name = obj.parent.name.replace('Wildlife_', '').replace('_adult', '')
        scene.render.filepath = str(output / (name + '.png'))
        bpy.ops.render.render(write_still=True)
        obj.hide_render = True
