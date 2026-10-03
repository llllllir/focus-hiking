// The engine's own count of GPU memory: every buffer and texture the device creates, until it is destroyed (or
// garbage-collected without destroy(): counted apart, `collected`). A region switch (S1-M4) must give back what the
// old region made; tools/soak.mjs switches back and forth and watches these numbers.
//   trackMemory( device )  once, right after requestDevice (GPU.init)
//   gpuMemory()            { buffers, bufferBytes, textures, textureBytes, collected, collectedBytes, collectedLabels,
//                            labels }  (collectedLabels: label -> how many of that label went without destroy();
//                            labels: label -> how many of that label are alive)
// Textures count all their mip levels, layers and samples.
import { formatInfo } from './GPU.js';

const live = { buffer: [ 0, 0 ], texture: [ 0, 0 ] }; // kind -> [ count, bytes ]
const collected = [ 0, 0 ];
const collectedLabels = new Map();
const liveLabels = new Map();
const count = ( m, k, d ) => {

	const n = ( m.get( k ) || 0 ) + d;
	if ( n ) m.set( k, n );
	else m.delete( k );

};
// objects dropped without destroy(): the registry hands back their kind and size once they are collected
const registry = typeof FinalizationRegistry === 'function' ? new FinalizationRegistry( ( [ kind, bytes, label ] ) => {

	live[ kind ][ 0 ] --;
	live[ kind ][ 1 ] -= bytes;
	collected[ 0 ] ++;
	collected[ 1 ] += bytes;
	count( collectedLabels, label, 1 );
	count( liveLabels, label, - 1 );

} ) : null;

function textureBytes( desc ) {

	const s = desc.size;
	const w = s.width ?? s[ 0 ], h = s.height ?? s[ 1 ] ?? 1, d = s.depthOrArrayLayers ?? s[ 2 ] ?? 1;
	let bpp = 4;
	try {

		bpp = formatInfo( desc.format ).bytes;

	} catch {

		// a format the engine's table doesn't list: counted at 4 bytes a texel

	}

	let bytes = 0;
	for ( let l = 0; l < ( desc.mipLevelCount || 1 ); l ++ ) {

		const layers = desc.dimension === '3d' ? Math.max( 1, d >> l ) : d;
		bytes += Math.max( 1, w >> l ) * Math.max( 1, h >> l ) * layers * bpp;

	}

	return bytes * ( desc.sampleCount || 1 );

}

function track( obj, kind, bytes, label ) {

	live[ kind ][ 0 ] ++;
	live[ kind ][ 1 ] += bytes;
	const token = {};
	label = label || '(no label)';
	count( liveLabels, label, 1 );
	if ( registry ) registry.register( obj, [ kind, bytes, label ], token );
	const destroy = obj.destroy.bind( obj );
	let done = false;
	obj.destroy = () => {

		if ( ! done ) {

			done = true;
			live[ kind ][ 0 ] --;
			live[ kind ][ 1 ] -= bytes;
			count( liveLabels, label, - 1 );
			if ( registry ) registry.unregister( token );

		}

		destroy();

	};
	return obj;

}

export function trackMemory( device ) {

	const createBuffer = device.createBuffer.bind( device );
	const createTexture = device.createTexture.bind( device );
	device.createBuffer = ( desc ) => track( createBuffer( desc ), 'buffer', desc.size, desc.label );
	device.createTexture = ( desc ) => track( createTexture( desc ), 'texture', textureBytes( desc ), desc.label );

}

export function gpuMemory() {

	return {
		buffers: live.buffer[ 0 ], bufferBytes: live.buffer[ 1 ],
		textures: live.texture[ 0 ], textureBytes: live.texture[ 1 ],
		collected: collected[ 0 ], collectedBytes: collected[ 1 ], collectedLabels: Object.fromEntries( collectedLabels ),
		labels: Object.fromEntries( liveLabels ),
	};

}
