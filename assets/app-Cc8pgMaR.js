const cl="attached",Ku="detached";const Pt="srgb",Xt="srgb-linear",$r="linear",ft="srgb";const hl="300 es";let ps=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}};const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ul=1234567;const Us=Math.PI/180,os=180/Math.PI;function cn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[s&255]+Dt[s>>8&255]+Dt[s>>16&255]+Dt[s>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function tt(s,e,t){return Math.max(e,Math.min(t,s))}function Ca(s,e){return(s%e+e)%e}function Zu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ju(s,e,t){return s!==e?(t-s)/(e-s):0}function Bs(s,e,t){return(1-t)*s+t*e}function Qu(s,e,t,n){return Bs(s,e,1-Math.exp(-t*n))}function ef(s,e=1){return e-Math.abs(Ca(s,e*2)-e)}function tf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function nf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function sf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function rf(s,e){return s+Math.random()*(e-s)}function of(s){return s*(.5-Math.random())}function af(s){s!==void 0&&(ul=s);let e=ul+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lf(s){return s*Us}function cf(s){return s*os}function hf(s){return(s&s-1)===0&&s!==0}function uf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ff(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function df(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function mn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const St={DEG2RAD:Us,RAD2DEG:os,generateUUID:cn,clamp:tt,euclideanModulo:Ca,mapLinear:Zu,inverseLerp:Ju,lerp:Bs,damp:Qu,pingpong:ef,smoothstep:tf,smootherstep:nf,randInt:sf,randFloat:rf,randFloatSpread:of,seededRandom:af,degToRad:lf,radToDeg:cf,isPowerOfTwo:hf,ceilPowerOfTwo:uf,floorPowerOfTwo:ff,setQuaternionFromProperEuler:df,normalize:lt,denormalize:mn};let be=class Eh{constructor(e=0,t=0){Eh.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==m){let g=1-a;const p=l*f+c*d+h*m+u*x,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const E=Math.sqrt(_),I=Math.atan2(E,p*M);g=Math.sin(g*I)/E,a=Math.sin(a*I)/E}const v=a*M;if(l=l*g+f*v,c=c*g+d*v,h=h*g+m*v,u=u*g+x*v,g===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*d-c*f,e[t+1]=l*m+h*f+c*u-a*d,e[t+2]=c*m+h*d+a*f-l*u,e[t+3]=h*m-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class Ah{constructor(e=0,t=0,n=0){Ah.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return po.copy(this).projectOnVector(e),this.sub(po)}reflect(e){return this.sub(po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const po=new z,fl=new Yn;let et=class Rh{constructor(e,t,n,i,r,o,a,l,c){Rh.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=i[0],g=i[3],p=i[6],M=i[1],_=i[4],v=i[7],E=i[2],I=i[5],C=i[8];return r[0]=o*x+a*M+l*E,r[3]=o*g+a*_+l*I,r[6]=o*p+a*v+l*C,r[1]=c*x+h*M+u*E,r[4]=c*g+h*_+u*I,r[7]=c*p+h*v+u*C,r[2]=f*x+d*M+m*E,r[5]=f*g+d*_+m*I,r[8]=f*p+d*v+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=t*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mo.makeScale(e,t)),this}rotate(e){return this.premultiply(mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const mo=new et;function Ch(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Hs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pf(){const s=Hs("canvas");return s.style.display="block",s}const dl={};function Ws(s){s in dl||(dl[s]=!0,console.warn(s))}function mf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const pl=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ml=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gf(){const s={enabled:!0,workingColorSpace:Xt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(i.r=Hn(i.r),i.g=Hn(i.g),i.b=Hn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(i.r=is(i.r),i.g=is(i.g),i.b=is(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?$r:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ws("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ws("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Xt]:{primaries:e,whitePoint:n,transfer:$r,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),s}const rt=gf();function Hn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ni;class xf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ni===void 0&&(Ni=Hs("canvas")),Ni.width=e.width,Ni.height=e.height;const i=Ni.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Hn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hn(t[n]/255)*255):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _f=0;class Pa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=cn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(go(i[o].image)):r.push(go(i[o]))}else r=go(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function go(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?xf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vf=0;const xo=new z;let qt=class Vr extends ps{constructor(e=Vr.DEFAULT_IMAGE,t=Vr.DEFAULT_MAPPING,n=1001,i=1001,r=1006,o=1008,a=1023,l=1009,c=Vr.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=cn(),this.name="",this.source=new Pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xo).x}get height(){return this.source.getSize(xo).y}get depth(){return this.source.getSize(xo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=300;qt.DEFAULT_ANISOTROPY=1;let ht=class Ph{constructor(e=0,t=0,n=0,i=1){Ph.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,v=(d+1)/2,E=(p+1)/2,I=(h+f)/4,C=(u+x)/4,U=(m+g)/4;return _>v&&_>E?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=I/n,r=C/n):v>E?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=I/i,r=U/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=C/r,i=U/r),this.set(n,i,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yf=class extends ps{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new qt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Pa(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};class Ci extends yf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ih extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mf extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let jn=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ir.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(e.matrixWorld),this.union(ir)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),sr.subVectors(this.max,ys),Fi.subVectors(e.a,ys),Ui.subVectors(e.b,ys),Bi.subVectors(e.c,ys),Jn.subVectors(Ui,Fi),Qn.subVectors(Bi,Ui),di.subVectors(Fi,Bi);let t=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-di.z,di.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,di.z,0,-di.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-di.y,di.x,0];return!_o(t,Fi,Ui,Bi,sr)||(t=[1,0,0,0,1,0,0,0,1],!_o(t,Fi,Ui,Bi,sr))?!1:(rr.crossVectors(Jn,Qn),t=[rr.x,rr.y,rr.z],_o(t,Fi,Ui,Bi,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};const In=[new z,new z,new z,new z,new z,new z,new z,new z],fn=new z,ir=new jn,Fi=new z,Ui=new z,Bi=new z,Jn=new z,Qn=new z,di=new z,ys=new z,sr=new z,rr=new z,pi=new z;function _o(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){pi.fromArray(s,r);const a=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Sf=new jn,Ms=new z,vo=new z;let Rn=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ms,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(vo)),this.expandByPoint(Ms.copy(e.center).sub(vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};const Ln=new z,yo=new z,or=new z,ei=new z,Mo=new z,ar=new z,So=new z;class Zs{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yo.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(yo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(or),a=ei.dot(this.direction),l=-ei.dot(or),c=ei.lengthSq(),h=Math.abs(1-o*o);let u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){const x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(yo).addScaledVector(or,f),d}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,i,r){Mo.subVectors(t,e),ar.subVectors(n,e),So.crossVectors(Mo,ar);let o=this.direction.dot(So),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,e);const l=a*this.direction.dot(ar.crossVectors(ei,ar));if(l<0)return null;const c=a*this.direction.dot(Mo.cross(ei));if(c<0||l+c>o)return null;const h=-a*ei.dot(So);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}let je=class ua{constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,m,x,g){ua.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,m,x,g)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ua().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Oi.setFromMatrixColumn(e,0).length(),r=1/Oi.setFromMatrixColumn(e,1).length(),o=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,m=c*h,x=c*u;t[0]=f+x*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,m=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+m,t[10]=f-x*u}else if(e.order==="XZY"){const f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bf,e,wf)}lookAt(e,t,n){const i=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),ti.crossVectors(n,Zt),ti.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),ti.crossVectors(n,Zt)),ti.normalize(),lr.crossVectors(Zt,ti),i[0]=ti.x,i[4]=lr.x,i[8]=Zt.x,i[1]=ti.y,i[5]=lr.y,i[9]=Zt.y,i[2]=ti.z,i[6]=lr.z,i[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],M=n[3],_=n[7],v=n[11],E=n[15],I=i[0],C=i[4],U=i[8],w=i[12],S=i[1],b=i[5],F=i[9],P=i[13],L=i[2],A=i[6],N=i[10],H=i[14],G=i[3],O=i[7],q=i[11],K=i[15];return r[0]=o*I+a*S+l*L+c*G,r[4]=o*C+a*b+l*A+c*O,r[8]=o*U+a*F+l*N+c*q,r[12]=o*w+a*P+l*H+c*K,r[1]=h*I+u*S+f*L+d*G,r[5]=h*C+u*b+f*A+d*O,r[9]=h*U+u*F+f*N+d*q,r[13]=h*w+u*P+f*H+d*K,r[2]=m*I+x*S+g*L+p*G,r[6]=m*C+x*b+g*A+p*O,r[10]=m*U+x*F+g*N+p*q,r[14]=m*w+x*P+g*H+p*K,r[3]=M*I+_*S+v*L+E*G,r[7]=M*C+_*b+v*A+E*O,r[11]=M*U+_*F+v*N+E*q,r[15]=M*w+_*P+v*H+E*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+x*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+g*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],M=u*g*c-x*f*c+x*l*d-a*g*d-u*l*p+a*f*p,_=m*f*c-h*g*c-m*l*d+o*g*d+h*l*p-o*f*p,v=h*x*c-m*u*c+m*a*d-o*x*d-h*a*p+o*u*p,E=m*u*l-h*x*l-m*a*f+o*x*f+h*a*g-o*u*g,I=t*M+n*_+i*v+r*E;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/I;return e[0]=M*C,e[1]=(x*f*r-u*g*r-x*i*d+n*g*d+u*i*p-n*f*p)*C,e[2]=(a*g*r-x*l*r+x*i*c-n*g*c-a*i*p+n*l*p)*C,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*C,e[4]=_*C,e[5]=(h*g*r-m*f*r+m*i*d-t*g*d-h*i*p+t*f*p)*C,e[6]=(m*l*r-o*g*r-m*i*c+t*g*c+o*i*p-t*l*p)*C,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*d+t*l*d)*C,e[8]=v*C,e[9]=(m*u*r-h*x*r-m*n*d+t*x*d+h*n*p-t*u*p)*C,e[10]=(o*x*r-m*a*r+m*n*c-t*x*c-o*n*p+t*a*p)*C,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*C,e[12]=E*C,e[13]=(h*x*i-m*u*i+m*n*f-t*x*f-h*n*g+t*u*g)*C,e[14]=(m*a*i-o*x*i-m*n*l+t*x*l+o*n*g-t*a*g)*C,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,x=o*h,g=o*u,p=a*u,M=l*c,_=l*h,v=l*u,E=n.x,I=n.y,C=n.z;return i[0]=(1-(x+p))*E,i[1]=(d+v)*E,i[2]=(m-_)*E,i[3]=0,i[4]=(d-v)*I,i[5]=(1-(f+p))*I,i[6]=(g+M)*I,i[7]=0,i[8]=(m+_)*C,i[9]=(g-M)*C,i[10]=(1-(f+x))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Oi.set(i[0],i[1],i[2]).length();const o=Oi.set(i[4],i[5],i[6]).length(),a=Oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],dn.copy(this);const c=1/r,h=1/o,u=1/a;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,t.setFromRotationMatrix(dn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=2e3,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===2e3)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===2001)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=2e3,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===2e3)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===2001)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};const Oi=new z,dn=new je,bf=new z(0,0,0),wf=new z(1,1,1),ti=new z,lr=new z,Zt=new z,gl=new je,xl=new Yn;let ci=class Lh{constructor(e=0,t=0,n=0,i=Lh.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xl.setFromEuler(this),this.setFromQuaternion(xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";let Ia=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tf=0;const _l=new z,zi=new Yn,Dn=new je,cr=new z,Ss=new z,Ef=new z,Af=new Yn,vl=new z(1,0,0),yl=new z(0,1,0),Ml=new z(0,0,1),Sl={type:"added"},Rf={type:"removed"},ki={type:"childadded",child:null},bo={type:"childremoved",child:null};let xt=class Hr extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hr.DEFAULT_UP.clone();const e=new z,t=new ci,n=new Yn,i=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new et}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Hr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(vl,e)}rotateY(e){return this.rotateOnAxis(yl,e)}rotateZ(e){return this.rotateOnAxis(Ml,e)}translateOnAxis(e,t){return _l.copy(e).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vl,e)}translateY(e){return this.translateOnAxis(yl,e)}translateZ(e){return this.translateOnAxis(Ml,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cr.copy(e):cr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Ss,cr,this.up):Dn.lookAt(cr,Ss,this.up),this.quaternion.setFromRotationMatrix(Dn),i&&(Dn.extractRotation(i.matrixWorld),zi.setFromRotationMatrix(Dn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sl),ki.child=e,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rf),bo.child=e,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sl),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,Ef),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,Af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}};xt.DEFAULT_UP=new z(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new z,Nn=new z,wo=new z,Fn=new z,Gi=new z,Vi=new z,bl=new z,To=new z,Eo=new z,Ao=new z,Ro=new ht,Co=new ht,Po=new ht;class gn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pn.subVectors(e,t),i.cross(pn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){pn.subVectors(i,t),Nn.subVectors(n,t),wo.subVectors(e,t);const o=pn.dot(pn),a=pn.dot(Nn),l=pn.dot(wo),c=Nn.dot(Nn),h=Nn.dot(wo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ro.setScalar(0),Co.setScalar(0),Po.setScalar(0),Ro.fromBufferAttribute(e,t),Co.fromBufferAttribute(e,n),Po.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ro,r.x),o.addScaledVector(Co,r.y),o.addScaledVector(Po,r.z),o}static isFrontFacing(e,t,n,i){return pn.subVectors(n,t),Nn.subVectors(e,t),pn.cross(Nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),pn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Gi.subVectors(i,n),Vi.subVectors(r,n),To.subVectors(e,n);const l=Gi.dot(To),c=Vi.dot(To);if(l<=0&&c<=0)return t.copy(n);Eo.subVectors(e,i);const h=Gi.dot(Eo),u=Vi.dot(Eo);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Gi,o);Ao.subVectors(e,r);const d=Gi.dot(Ao),m=Vi.dot(Ao);if(m>=0&&d<=m)return t.copy(r);const x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Vi,a);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return bl.subVectors(r,i),a=(u-h)/(u-h+(d-m)),t.copy(i).addScaledVector(bl,a);const p=1/(g+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(Gi,o).addScaledVector(Vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Io(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}let Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=Ca(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Io(o,r,e+1/3),this.g=Io(o,r,e),this.b=Io(o,r,e-1/3)}return rt.colorSpaceToWorking(this,i),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=Dh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return rt.workingToColorSpace(Nt.copy(this),e),Math.round(tt(Nt.r*255,0,255))*65536+Math.round(tt(Nt.g*255,0,255))*256+Math.round(tt(Nt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Nt.copy(this),t);const n=Nt.r,i=Nt.g,r=Nt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Pt){rt.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,i=Nt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(hr);const n=Bs(ni.h,hr.h,t),i=Bs(ni.s,hr.s,t),r=Bs(ni.l,hr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Nt=new Ye;Ye.NAMES=Dh;let Cf=0,An=class extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=cn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class _n extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new z,ur=new be;let Pf=0,Ot=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},La=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Nh=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ke=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},If=0;const rn=new je,Lo=new xt,Hi=new z,Jt=new jn,bs=new jn,Rt=new z;let pt=class Fh extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ch(e)?Nh:La)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return Lo.lookAt(e),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ke(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(Jt.min,bs.min),Jt.expandByPoint(Rt),Rt.addVectors(Jt.max,bs.max),Jt.expandByPoint(Rt)):(Jt.expandByPoint(bs.min),Jt.expandByPoint(bs.max))}Jt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Rt.fromBufferAttribute(a,c),l&&(Hi.fromBufferAttribute(e,c),Rt.add(Hi)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new z,l[U]=new z;const c=new z,h=new z,u=new z,f=new be,d=new be,m=new be,x=new z,g=new z;function p(U,w,S){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,U),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,S),h.sub(c),u.sub(c),d.sub(f),m.sub(f);const b=1/(d.x*m.y-m.x*d.y);isFinite(b)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(b),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(b),a[U].add(x),a[w].add(x),a[S].add(x),l[U].add(g),l[w].add(g),l[S].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let U=0,w=M.length;U<w;++U){const S=M[U],b=S.start,F=S.count;for(let P=b,L=b+F;P<L;P+=3)p(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const _=new z,v=new z,E=new z,I=new z;function C(U){E.fromBufferAttribute(i,U),I.copy(E);const w=a[U];_.copy(w),_.sub(E.multiplyScalar(E.dot(w))).normalize(),v.crossVectors(I,w);const b=v.dot(l[U])<0?-1:1;o.setXYZW(U,_.x,_.y,_.z,b)}for(let U=0,w=M.length;U<w;++U){const S=M[U],b=S.start,F=S.count;for(let P=b,L=b+F;P<L;P+=3)C(e.getX(P+0)),C(e.getX(P+1)),C(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,u=new z;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new Ot(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fh,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};const wl=new je,mi=new Zs,fr=new Rn,Tl=new z,dr=new z,pr=new z,mr=new z,Do=new z,gr=new z,El=new z,xr=new z;let Le=class extends xt{constructor(e=new pt,t=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Do.fromBufferAttribute(u,e),o?gr.addScaledVector(Do,h):gr.addScaledVector(Do.sub(t),h))}t.add(gr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(fr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(fr,Tl)===null||mi.origin.distanceToSquared(Tl)>(e.far-e.near)**2))&&(wl.copy(r).invert(),mi.copy(e.ray).applyMatrix4(wl),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,E=_;v<E;v+=3){const I=a.getX(v),C=a.getX(v+1),U=a.getX(v+2);i=_r(this,p,e,n,c,h,u,I,C,U),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const M=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);i=_r(this,o,e,n,c,h,u,M,_,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,E=_;v<E;v+=3){const I=v,C=v+1,U=v+2;i=_r(this,p,e,n,c,h,u,I,C,U),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const M=g,_=g+1,v=g+2;i=_r(this,o,e,n,c,h,u,M,_,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Lf(s,e,t,n,i,r,o,a){let l;if(e.side===1?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===0,a),l===null)return null;xr.copy(a),xr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(xr);return c<t.near||c>t.far?null:{distance:c,point:xr.clone(),object:s}}function _r(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,dr),s.getVertexPosition(l,pr),s.getVertexPosition(c,mr);const h=Lf(s,e,t,n,dr,pr,mr,El);if(h){const u=new z;gn.getBarycoord(El,dr,pr,mr,u),i&&(h.uv=gn.getInterpolatedAttribute(i,a,l,c,u,new be)),r&&(h.uv1=gn.getInterpolatedAttribute(r,a,l,c,u,new be)),o&&(h.normal=gn.getInterpolatedAttribute(o,a,l,c,u,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};gn.getNormal(dr,pr,mr,f.normal),h.face=f,h.barycoord=u}return h}class wn extends pt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function m(x,g,p,M,_,v,E,I,C,U,w){const S=v/C,b=E/U,F=v/2,P=E/2,L=I/2,A=C+1,N=U+1;let H=0,G=0;const O=new z;for(let q=0;q<N;q++){const K=q*b-P;for(let fe=0;fe<A;fe++){const Se=fe*S-F;O[x]=Se*M,O[g]=K*_,O[p]=L,c.push(O.x,O.y,O.z),O[x]=0,O[g]=0,O[p]=I>0?1:-1,h.push(O.x,O.y,O.z),u.push(fe/C),u.push(1-q/U),H+=1}}for(let q=0;q<U;q++)for(let K=0;K<C;K++){const fe=f+K+A*q,Se=f+K+A*(q+1),ze=f+(K+1)+A*(q+1),Fe=f+(K+1)+A*q;l.push(fe,Se,Fe),l.push(Se,ze,Fe),G+=6}a.addGroup(d,G,w),d+=G,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function as(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Vt(s){const e={};for(let t=0;t<s.length;t++){const n=as(s[t]);for(const i in n)e[i]=n[i]}return e}function Df(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Uh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Bh={clone:as,merge:Vt};var Nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nf,this.fragmentShader=Ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=Df(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let Oh=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const ii=new z,Al=new be,Rl=new be;let Wt=class extends Oh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return os*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,Al,Rl),t.subVectors(Rl,Al)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Us*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};const Wi=-90,Xi=1;class Uf extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wt(Wi,Xi,e,t);i.layers=this.layers,this.add(i);const r=new Wt(Wi,Xi,e,t);r.layers=this.layers,this.add(r);const o=new Wt(Wi,Xi,e,t);o.layers=this.layers,this.add(o);const a=new Wt(Wi,Xi,e,t);a.layers=this.layers,this.add(a);const l=new Wt(Wi,Xi,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Wi,Xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class zh extends qt{constructor(e=[],t=301,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bf extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new wn(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const o=new Le(i,r),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Uf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}let wt=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Of={type:"move"};class No{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Of)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Os{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=n}clone(){return new Os(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let Cl=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},zf=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};const Gt=new z;let kf=class kh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new kh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};const Pl=new z,Il=new ht,Ll=new ht,Gf=new z,Dl=new je,vr=new z,Fo=new Rn,Nl=new je,Uo=new Zs;class Gh extends Le{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cl,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vr),this.boundingBox.expandByPoint(vr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vr),this.boundingSphere.expandByPoint(vr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fo.copy(this.boundingSphere),Fo.applyMatrix4(i),e.ray.intersectsSphere(Fo)!==!1&&(Nl.copy(i).invert(),Uo.copy(e.ray).applyMatrix4(Nl),!(this.boundingBox!==null&&Uo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Uo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===cl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ku?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Il.fromBufferAttribute(i.attributes.skinIndex,e),Ll.fromBufferAttribute(i.attributes.skinWeight,e),Pl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Ll.getComponent(r);if(o!==0){const a=Il.getComponent(r);Dl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Gf.copy(Pl).applyMatrix4(Dl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Da extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vh extends qt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=1003,h=1003,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fl=new je,Vf=new je;class io{constructor(e=[],t=[]){this.uuid=cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Vf;Fl.multiplyMatrices(a,t[r]),Fl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new io(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Vh(t,e,e,1023,1015);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Da),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}let fa=class extends Ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};const qi=new je,Ul=new je,yr=[],Bl=new jn,Hf=new je,ws=new Le,Ts=new Rn;let It=class extends Le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Hf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),Bl.copy(e.boundingBox).applyMatrix4(qi),this.boundingBox.union(Bl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),Ts.copy(e.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(Ts)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ts.copy(this.boundingSphere),Ts.applyMatrix4(n),e.ray.intersectsSphere(Ts)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,qi),Ul.multiplyMatrices(n,qi),ws.matrixWorld=Ul,ws.raycast(e,yr);for(let o=0,a=yr.length;o<a;o++){const l=yr[o];l.instanceId=r,l.object=this,t.push(l)}yr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vh(new Float32Array(i*this.count),i,this.count,1028,1015));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};const Bo=new z,Wf=new z,Xf=new et;let Mi=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Bo.subVectors(n,t).cross(Wf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xf.getNormalMatrix(e),i=this.coplanarPoint(Bo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const gi=new Rn,qf=new be(.5,.5),Mr=new z;let Na=class{constructor(e=new Mi,t=new Mi,n=new Mi,i=new Mi,r=new Mi,o=new Mi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],M=r[12],_=r[13],v=r[14],E=r[15];if(i[0].setComponents(c-o,d-h,p-m,E-M).normalize(),i[1].setComponents(c+o,d+h,p+m,E+M).normalize(),i[2].setComponents(c+a,d+u,p+x,E+_).normalize(),i[3].setComponents(c-a,d-u,p-x,E-_).normalize(),n)i[4].setComponents(l,f,g,v).normalize(),i[5].setComponents(c-l,d-f,p-g,E-v).normalize();else if(i[4].setComponents(c-l,d-f,p-g,E-v).normalize(),t===2e3)i[5].setComponents(c+l,d+f,p+g,E+v).normalize();else if(t===2001)i[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){gi.center.set(0,0,0);const t=qf.distanceTo(e.center);return gi.radius=.7071067811865476+t,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Mr.x=i.normal.x>0?e.max.x:e.min.x,Mr.y=i.normal.y>0?e.max.y:e.min.y,Mr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};class Hh extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yr=new z,jr=new z,Ol=new je,Es=new Zs,Sr=new Rn,Oo=new z,zl=new z;class Fa extends xt{constructor(e=new pt,t=new Hh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Yr.fromBufferAttribute(t,i-1),jr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Yr.distanceTo(jr);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(i),Sr.radius+=r,e.ray.intersectsSphere(Sr)===!1)return;Ol.copy(i).invert(),Es.copy(e.ray).applyMatrix4(Ol);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){const p=h.getX(x),M=h.getX(x+1),_=br(this,e,Es,l,p,M,x);_&&t.push(_)}if(this.isLineLoop){const x=h.getX(m-1),g=h.getX(d),p=br(this,e,Es,l,x,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){const p=br(this,e,Es,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=br(this,e,Es,l,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function br(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Yr.fromBufferAttribute(a,i),jr.fromBufferAttribute(a,r),t.distanceSqToSegment(Yr,jr,Oo,zl)>n)return;Oo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Oo);if(!(c<e.near||c>e.far))return{distance:c,point:zl.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const kl=new z,Gl=new z;class $f extends Fa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)kl.fromBufferAttribute(t,i),Gl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+kl.distanceTo(Gl);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yf extends Fa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Wh extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vl=new je,da=new Zs,wr=new Rn,Tr=new z;class jf extends xt{constructor(e=new pt,t=new Wh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(i),wr.radius+=r,e.ray.intersectsSphere(wr)===!1)return;Vl.copy(i).invert(),da.copy(e.ray).applyMatrix4(Vl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){const g=c.getX(m);Tr.fromBufferAttribute(u,g),Hl(Tr,g,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,x=d;m<x;m++)Tr.fromBufferAttribute(u,m),Hl(Tr,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Hl(s,e,t,n,i,r,o){const a=da.distanceSqToPoint(s);if(a<t){const l=new z;da.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Xh extends qt{constructor(e,t,n=1014,i,r,o,a=1003,l=1003,c,h=1026,u=1){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qh extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tn extends pt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let m=0;const x=[],g=n/2;let p=0;M(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(d,2));function M(){const v=new z,E=new z;let I=0;const C=(t-e)/n;for(let U=0;U<=r;U++){const w=[],S=U/r,b=S*(t-e)+e;for(let F=0;F<=i;F++){const P=F/i,L=P*l+a,A=Math.sin(L),N=Math.cos(L);E.x=b*A,E.y=-S*n+g,E.z=b*N,u.push(E.x,E.y,E.z),v.set(A,C,N).normalize(),f.push(v.x,v.y,v.z),d.push(P,1-S),w.push(m++)}x.push(w)}for(let U=0;U<i;U++)for(let w=0;w<r;w++){const S=x[w][U],b=x[w+1][U],F=x[w+1][U+1],P=x[w][U+1];(e>0||w!==0)&&(h.push(S,b,P),I+=3),(t>0||w!==r-1)&&(h.push(b,F,P),I+=3)}c.addGroup(p,I,0),p+=I}function _(v){const E=m,I=new be,C=new z;let U=0;const w=v===!0?e:t,S=v===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,g*S,0),f.push(0,S,0),d.push(.5,.5),m++;const b=m;for(let F=0;F<=i;F++){const L=F/i*l+a,A=Math.cos(L),N=Math.sin(L);C.x=w*N,C.y=g*S,C.z=w*A,u.push(C.x,C.y,C.z),f.push(0,S,0),I.x=A*.5+.5,I.y=N*.5*S+.5,d.push(I.x,I.y),m++}for(let F=0;F<i;F++){const P=E+F,L=b+F;v===!0?h.push(L,L+1,P):h.push(L+1,L,P),U+=3}c.addGroup(p,U,v===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new be:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new z,i=[],r=[],o=[],a=new z,l=new je;for(let d=0;d<=e;d++){const m=d/e;i[d]=this.getTangentAt(m,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(tt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(tt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ua extends Cn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new be){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Kf extends Ua{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ba(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Er=new z,zo=new Ba,ko=new Ba,Go=new Ba;class Ti extends Cn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new z){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Er.subVectors(i[0],i[1]).add(i[0]),c=Er);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Er.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Er),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),zo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,x,g),ko.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,x,g),Go.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(zo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ko.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Go.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(zo.calc(l),ko.calc(l),Go.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new z().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wl(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Zf(s,e){const t=1-s;return t*t*e}function Jf(s,e){return 2*(1-s)*s*e}function Qf(s,e){return s*s*e}function zs(s,e,t,n){return Zf(s,e)+Jf(s,t)+Qf(s,n)}function ed(s,e){const t=1-s;return t*t*t*e}function td(s,e){const t=1-s;return 3*t*t*s*e}function nd(s,e){return 3*(1-s)*s*s*e}function id(s,e){return s*s*s*e}function ks(s,e,t,n,i){return ed(s,e)+td(s,t)+nd(s,n)+id(s,i)}class $h extends Cn{constructor(e=new be,t=new be,n=new be,i=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new be){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ks(e,i.x,r.x,o.x,a.x),ks(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sd extends Cn{constructor(e=new z,t=new z,n=new z,i=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new z){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ks(e,i.x,r.x,o.x,a.x),ks(e,i.y,r.y,o.y,a.y),ks(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Yh extends Cn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rd extends Cn{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jh extends Cn{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(zs(e,i.x,r.x,o.x),zs(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kh extends Cn{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(zs(e,i.x,r.x,o.x),zs(e,i.y,r.y,o.y),zs(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zh extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Wl(a,l.x,c.x,h.x,u.x),Wl(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new be().fromArray(i))}return this}}var Kr=Object.freeze({__proto__:null,ArcCurve:Kf,CatmullRomCurve3:Ti,CubicBezierCurve:$h,CubicBezierCurve3:sd,EllipseCurve:Ua,LineCurve:Yh,LineCurve3:rd,QuadraticBezierCurve:jh,QuadraticBezierCurve3:Kh,SplineCurve:Zh});class od extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kr[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Kr[i.type]().fromJSON(i))}return this}}class Xl extends od{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Yh(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new jh(this.currentPoint.clone(),new be(e,t),new be(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new $h(this.currentPoint.clone(),new be(e,t),new be(n,i),new be(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Zh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Ua(e,t,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Zr extends Xl{constructor(e){super(e),this.uuid=cn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Xl().fromJSON(i))}return this}}function ad(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Jh(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=fd(s,e,r,t)),s.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<i;f+=t){const d=s[f],m=s[f+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Xs(r,o,t,a,l,c,0),o}function Jh(s,e,t,n,i){let r;if(i===bd(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=ql(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=ql(o/n|0,s[o],s[o+1],r);return r&&ls(r,r.next)&&($s(r),r=r.next),r}function Pi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ls(t,t.next)||yt(t.prev,t,t.next)===0)){if($s(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Xs(s,e,t,n,i,r,o){if(!s)return;!o&&r&&xd(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?cd(s,n,i,r):ld(s)){e.push(l.i,s.i,c.i),$s(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=hd(Pi(s),e),Xs(s,e,t,n,i,r,2)):o===2&&ud(s,e,t,n,i,r):Xs(Pi(s),e,t,n,i,r,1);break}}}function ld(s){const e=s.prev,t=s,n=s.next;if(yt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),f=Math.max(i,r,o),d=Math.max(a,l,c);let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Ds(i,a,r,l,o,c,m.x,m.y)&&yt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function cd(s,e,t,n){const i=s.prev,r=s,o=s.next;if(yt(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=Math.min(a,l,c),m=Math.min(h,u,f),x=Math.max(a,l,c),g=Math.max(h,u,f),p=pa(d,m,e,t,n),M=pa(x,g,e,t,n);let _=s.prevZ,v=s.nextZ;for(;_&&_.z>=p&&v&&v.z<=M;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Ds(a,h,l,u,c,f,_.x,_.y)&&yt(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&Ds(a,h,l,u,c,f,v.x,v.y)&&yt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Ds(a,h,l,u,c,f,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&Ds(a,h,l,u,c,f,v.x,v.y)&&yt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function hd(s,e){let t=s;do{const n=t.prev,i=t.next.next;!ls(n,i)&&eu(n,t,t.next,i)&&qs(n,i)&&qs(i,n)&&(e.push(n.i,t.i,i.i),$s(t),$s(t.next),t=s=i),t=t.next}while(t!==s);return Pi(t)}function ud(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&yd(o,a)){let l=tu(o,a);o=Pi(o,o.next),l=Pi(l,l.next),Xs(o,e,t,n,i,r,0),Xs(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function fd(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Jh(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(vd(c))}i.sort(dd);for(let r=0;r<i.length;r++)t=pd(i[r],t);return t}function dd(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function pd(s,e){const t=md(s,e);if(!t)return e;const n=tu(t,s);return Pi(n,n.next),Pi(t,t.next)}function md(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(ls(s,t))return t;do{if(ls(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Qh(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);qs(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&gd(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function gd(s,e){return yt(s.prev,s,e.prev)<0&&yt(e.next,s,s.next)<0}function xd(s,e,t,n){let i=s;do i.z===0&&(i.z=pa(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,_d(i)}function _d(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function pa(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function vd(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Qh(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Ds(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Qh(s,e,t,n,i,r,o,a)}function yd(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Md(s,e)&&(qs(s,e)&&qs(e,s)&&Sd(s,e)&&(yt(s.prev,s,e.prev)||yt(s,e.prev,e))||ls(s,e)&&yt(s.prev,s,s.next)>0&&yt(e.prev,e,e.next)>0)}function yt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ls(s,e){return s.x===e.x&&s.y===e.y}function eu(s,e,t,n){const i=Rr(yt(s,e,t)),r=Rr(yt(s,e,n)),o=Rr(yt(t,n,s)),a=Rr(yt(t,n,e));return!!(i!==r&&o!==a||i===0&&Ar(s,t,e)||r===0&&Ar(s,n,e)||o===0&&Ar(t,s,n)||a===0&&Ar(t,e,n))}function Ar(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Rr(s){return s>0?1:s<0?-1:0}function Md(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&eu(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function qs(s,e){return yt(s.prev,s,s.next)<0?yt(s,e,s.next)>=0&&yt(s,s.prev,e)>=0:yt(s,e,s.prev)<0||yt(s,s.next,e)<0}function Sd(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function tu(s,e){const t=ma(s.i,s.x,s.y),n=ma(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ql(s,e,t,n){const i=ma(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function $s(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ma(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bd(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class wd{static triangulate(e,t,n=2){return ad(e,t,n)}}class Gn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Gn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];$l(e),Yl(n,e);let o=e.length;t.forEach($l);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Yl(n,t[l]);const a=wd.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function $l(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Yl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Oa extends pt{constructor(e=new Zr([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ke(i,3)),this.setAttribute("uv",new Ke(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Td;let _,v=!1,E,I,C,U;p&&(_=p.getSpacedPoints(h),v=!0,f=!1,E=p.computeFrenetFrames(h,!1),I=new z,C=new z,U=new z),f||(g=0,d=0,m=0,x=0);const w=a.extractPoints(c);let S=w.shape;const b=w.holes;if(!Gn.isClockWise(S)){S=S.reverse();for(let ee=0,Z=b.length;ee<Z;ee++){const V=b[ee];Gn.isClockWise(V)&&(b[ee]=V.reverse())}}function P(ee){const V=10000000000000001e-36;let X=ee[0];for(let ie=1;ie<=ee.length;ie++){const ne=ie%ee.length,k=ee[ne],Y=k.x-X.x,$=k.y-X.y,R=Y*Y+$*$,y=Math.max(Math.abs(k.x),Math.abs(k.y),Math.abs(X.x),Math.abs(X.y)),W=V*y*y;if(R<=W){ee.splice(ne,1),ie--;continue}X=k}}P(S),b.forEach(P);const L=b.length,A=S;for(let ee=0;ee<L;ee++){const Z=b[ee];S=S.concat(Z)}function N(ee,Z,V){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(Z,V)}const H=S.length;function G(ee,Z,V){let X,ie,ne;const k=ee.x-Z.x,Y=ee.y-Z.y,$=V.x-ee.x,R=V.y-ee.y,y=k*k+Y*Y,W=k*R-Y*$;if(Math.abs(W)>Number.EPSILON){const j=Math.sqrt(y),se=Math.sqrt($*$+R*R),te=Z.x-Y/j,xe=Z.y+k/j,pe=V.x-R/se,_e=V.y+$/se,Te=((pe-te)*R-(_e-xe)*$)/(k*R-Y*$);X=te+k*Te-ee.x,ie=xe+Y*Te-ee.y;const ge=X*X+ie*ie;if(ge<=2)return new be(X,ie);ne=Math.sqrt(ge/2)}else{let j=!1;k>Number.EPSILON?$>Number.EPSILON&&(j=!0):k<-Number.EPSILON?$<-Number.EPSILON&&(j=!0):Math.sign(Y)===Math.sign(R)&&(j=!0),j?(X=-Y,ie=k,ne=Math.sqrt(y)):(X=k,ie=Y,ne=Math.sqrt(y/2))}return new be(X/ne,ie/ne)}const O=[];for(let ee=0,Z=A.length,V=Z-1,X=ee+1;ee<Z;ee++,V++,X++)V===Z&&(V=0),X===Z&&(X=0),O[ee]=G(A[ee],A[V],A[X]);const q=[];let K,fe=O.concat();for(let ee=0,Z=L;ee<Z;ee++){const V=b[ee];K=[];for(let X=0,ie=V.length,ne=ie-1,k=X+1;X<ie;X++,ne++,k++)ne===ie&&(ne=0),k===ie&&(k=0),K[X]=G(V[X],V[ne],V[k]);q.push(K),fe=fe.concat(K)}let Se;if(g===0)Se=Gn.triangulateShape(A,b);else{const ee=[],Z=[];for(let V=0;V<g;V++){const X=V/g,ie=d*Math.cos(X*Math.PI/2),ne=m*Math.sin(X*Math.PI/2)+x;for(let k=0,Y=A.length;k<Y;k++){const $=N(A[k],O[k],ne);De($.x,$.y,-ie),X===0&&ee.push($)}for(let k=0,Y=L;k<Y;k++){const $=b[k];K=q[k];const R=[];for(let y=0,W=$.length;y<W;y++){const j=N($[y],K[y],ne);De(j.x,j.y,-ie),X===0&&R.push(j)}X===0&&Z.push(R)}}Se=Gn.triangulateShape(ee,Z)}const ze=Se.length,Fe=m+x;for(let ee=0;ee<H;ee++){const Z=f?N(S[ee],fe[ee],Fe):S[ee];v?(C.copy(E.normals[0]).multiplyScalar(Z.x),I.copy(E.binormals[0]).multiplyScalar(Z.y),U.copy(_[0]).add(C).add(I),De(U.x,U.y,U.z)):De(Z.x,Z.y,0)}for(let ee=1;ee<=h;ee++)for(let Z=0;Z<H;Z++){const V=f?N(S[Z],fe[Z],Fe):S[Z];v?(C.copy(E.normals[ee]).multiplyScalar(V.x),I.copy(E.binormals[ee]).multiplyScalar(V.y),U.copy(_[ee]).add(C).add(I),De(U.x,U.y,U.z)):De(V.x,V.y,u/h*ee)}for(let ee=g-1;ee>=0;ee--){const Z=ee/g,V=d*Math.cos(Z*Math.PI/2),X=m*Math.sin(Z*Math.PI/2)+x;for(let ie=0,ne=A.length;ie<ne;ie++){const k=N(A[ie],O[ie],X);De(k.x,k.y,u+V)}for(let ie=0,ne=b.length;ie<ne;ie++){const k=b[ie];K=q[ie];for(let Y=0,$=k.length;Y<$;Y++){const R=N(k[Y],K[Y],X);v?De(R.x,R.y+_[h-1].y,_[h-1].x+V):De(R.x,R.y,u+V)}}}ae(),he();function ae(){const ee=i.length/3;if(f){let Z=0,V=H*Z;for(let X=0;X<ze;X++){const ie=Se[X];ye(ie[2]+V,ie[1]+V,ie[0]+V)}Z=h+g*2,V=H*Z;for(let X=0;X<ze;X++){const ie=Se[X];ye(ie[0]+V,ie[1]+V,ie[2]+V)}}else{for(let Z=0;Z<ze;Z++){const V=Se[Z];ye(V[2],V[1],V[0])}for(let Z=0;Z<ze;Z++){const V=Se[Z];ye(V[0]+H*h,V[1]+H*h,V[2]+H*h)}}n.addGroup(ee,i.length/3-ee,0)}function he(){const ee=i.length/3;let Z=0;we(A,Z),Z+=A.length;for(let V=0,X=b.length;V<X;V++){const ie=b[V];we(ie,Z),Z+=ie.length}n.addGroup(ee,i.length/3-ee,1)}function we(ee,Z){let V=ee.length;for(;--V>=0;){const X=V;let ie=V-1;ie<0&&(ie=ee.length-1);for(let ne=0,k=h+g*2;ne<k;ne++){const Y=H*ne,$=H*(ne+1),R=Z+X+Y,y=Z+ie+Y,W=Z+ie+$,j=Z+X+$;Ve(R,y,W,j)}}}function De(ee,Z,V){l.push(ee),l.push(Z),l.push(V)}function ye(ee,Z,V){oe(ee),oe(Z),oe(V);const X=i.length/3,ie=M.generateTopUV(n,i,X-3,X-2,X-1);T(ie[0]),T(ie[1]),T(ie[2])}function Ve(ee,Z,V,X){oe(ee),oe(Z),oe(X),oe(Z),oe(V),oe(X);const ie=i.length/3,ne=M.generateSideWallUV(n,i,ie-6,ie-3,ie-2,ie-1);T(ne[0]),T(ne[1]),T(ne[3]),T(ne[1]),T(ne[2]),T(ne[3])}function oe(ee){i.push(l[ee*3+0]),i.push(l[ee*3+1]),i.push(l[ee*3+2])}function T(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ed(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Kr[i.type]().fromJSON(i)),new Oa(n,e.options)}}const Td={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new be(r,o),new be(a,l),new be(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],m=e[i*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new be(o,1-l),new be(c,1-u),new be(f,1-m),new be(x,1-p)]:[new be(a,1-l),new be(h,1-u),new be(d,1-m),new be(g,1-p)]}};function Ed(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Wn extends pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const M=p*f-o;for(let _=0;_<c;_++){const v=_*u-r;m.push(v,-M,0),x.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const _=M+c*p,v=M+c*(p+1),E=M+1+c*(p+1),I=M+1+c*p;d.push(_,v,I),d.push(v,E,I)}this.setIndex(d),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.widthSegments,e.heightSegments)}}class so extends pt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const f=(t-e)/i,d=new z,m=new be;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){const p=r+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}u+=f}for(let x=0;x<i;x++){const g=x*(n+1);for(let p=0;p<n;p++){const M=p+g,_=M,v=M+n+1,E=M+n+2,I=M+1;a.push(_,v,I),a.push(v,E,I)}}this.setIndex(a),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class za extends pt{constructor(e=new Zr([new be(0,.5),new be(-.5,-.5),new be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ke(i,3)),this.setAttribute("normal",new Ke(r,3)),this.setAttribute("uv",new Ke(o,2));function c(h){const u=i.length/3,f=h.extractPoints(t);let d=f.shape;const m=f.holes;Gn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const M=m[g];Gn.isClockWise(M)===!0&&(m[g]=M.reverse())}const x=Gn.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const M=m[g];d=d.concat(M)}for(let g=0,p=d.length;g<p;g++){const M=d[g];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let g=0,p=x.length;g<p;g++){const M=x[g],_=M[0]+u,v=M[1]+u,E=M[2]+u;n.push(_,v,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ad(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new za(n,e.curveSegments)}}function Ad(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Bt extends pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new z,f=new z,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){const M=[],_=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const I=E/t;u.x=-e*Math.cos(i+I*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(i+I*r)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(I+v,1-_),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const _=h[p][M+1],v=h[p][M],E=h[p+1][M],I=h[p+1][M+1];(p!==0||o>0)&&d.push(_,v,I),(p!==n-1||l<Math.PI)&&d.push(v,E,I)}this.setIndex(d),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ei extends pt{constructor(e=new Kh(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new z,l=new z,c=new be;let h=new z;const u=[],f=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(d,2));function x(){for(let _=0;_<t;_++)g(_);g(r===!1?t:0),M(),p()}function g(_){h=e.getPointAt(_/t,h);const v=o.normals[_],E=o.binormals[_];for(let I=0;I<=i;I++){const C=I/i*Math.PI*2,U=Math.sin(C),w=-Math.cos(C);l.x=w*v.x+U*E.x,l.y=w*v.y+U*E.y,l.z=w*v.z+U*E.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let v=1;v<=i;v++){const E=(i+1)*(_-1)+(v-1),I=(i+1)*_+(v-1),C=(i+1)*_+v,U=(i+1)*(_-1)+v;m.push(E,I,U),m.push(I,C,U)}}function M(){for(let _=0;_<=t;_++)for(let v=0;v<=i;v++)c.x=_/t,c.y=v/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ei(new Kr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Xe extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pn extends Xe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class nu extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rd extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Cr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Cd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Pd(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function jl(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function iu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Js{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Id extends Js{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:r=e,a=2*t-n;break;case 2402:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:o=e,l=2*n-t;break;case 2402:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,M=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,_=(-1-d)*g+(1.5+d)*x+.5*m,v=d*g-d*x;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+M*o[c+E]+_*o[l+E]+v*o[u+E];return r}}class Ld extends Js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}}class Dd extends Js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class vn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cr(t,this.TimeBufferType),this.values=Cr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cr(e.times,Array),values:Cr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ld(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Id(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Cd(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){const x=t[u+m];if(x!==t[f+m]||x!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=2301;class ms extends vn{constructor(e,t,n){super(e,t,n)}}ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=2300;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;class su extends vn{constructor(e,t,n,i){super(e,t,n,i)}}su.prototype.ValueTypeName="color";class cs extends vn{constructor(e,t,n,i){super(e,t,n,i)}}cs.prototype.ValueTypeName="number";class Nd extends Js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Yn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class hs extends vn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Nd(this.times,this.values,this.getValueSize(),e)}}hs.prototype.ValueTypeName="quaternion";hs.prototype.InterpolantFactoryMethodSmooth=void 0;class gs extends vn{constructor(e,t,n){super(e,t,n)}}gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=2300;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends vn{constructor(e,t,n,i){super(e,t,n,i)}}us.prototype.ValueTypeName="vector";class Fd{constructor(e="",t=-1,n=[],i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=cn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Bd(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(vn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Pd(l);l=jl(l,1,h),c=jl(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new cs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,m,x){if(d.length!==0){const g=[],p=[];iu(d,g,p,m),g.length!==0&&x.push(new u(f,g,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let x=0;x<f[m].morphTargets.length;x++)d[f[m].morphTargets[x]]=-1;for(const x in d){const g=[],p=[];for(let M=0;M!==f[m].morphTargets.length;++M){const _=f[m];g.push(_.time),p.push(_.morphTarget===x?1:0)}i.push(new cs(".morphTargetInfluence["+x+"]",g,p))}l=d.length*o}else{const d=".bones["+t[u].name+"]";n(us,d+".position",f,"pos",i),n(hs,d+".quaternion",f,"rot",i),n(us,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Ud(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return cs;case"vector":case"vector2":case"vector3":case"vector4":return us;case"color":return su;case"quaternion":return hs;case"bool":case"boolean":return ms;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Bd(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ud(s.type);if(s.times===void 0){const t=[],n=[];iu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Vn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Od{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const zd=new Od;class xs{constructor(e){this.manager=e!==void 0?e:zd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}xs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class kd extends Error{constructor(e,t){super(e),this.response=t}}class ru extends xs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Vn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Un[e]!==void 0){Un[e].push({onLoad:t,onProgress:n,onError:i});return}Un[e]=[],Un[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Un[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let x=0;const g=new ReadableStream({start(p){M();function M(){u.read().then(({done:_,value:v})=>{if(_)p.close();else{x+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let I=0,C=h.length;I<C;I++){const U=h[I];U.onProgress&&U.onProgress(E)}p.enqueue(v),M()}},_=>{p.error(_)})}}});return new Response(g)}else throw new kd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Vn.add(`file:${e}`,c);const h=Un[e];delete Un[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Un[e];if(h===void 0)throw this.manager.itemError(e),c;delete Un[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const $i=new WeakMap;class Gd extends xs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Vn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=$i.get(o);u===void 0&&(u=[],$i.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=Hs("img");function l(){h(),t&&t(this);const u=$i.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}$i.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Vn.remove(`image:${e}`);const f=$i.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onError&&m.onError(u)}$i.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Vn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Vd extends xs{constructor(e){super(e)}load(e,t,n,i){const r=new qt,o=new Gd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Qs extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Hd extends Qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Vo=new je,Kl=new z,Zl=new z;class ka{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kl),Zl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zl),t.updateMatrixWorld(),Vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wd extends ka{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=os*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Xd extends Qs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Wd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Jl=new je,As=new z,Ho=new z;class qd extends ka{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),As.setFromMatrixPosition(e.matrixWorld),n.position.copy(As),Ho.copy(n.position),Ho.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ho),n.updateMatrixWorld(),i.makeTranslation(-As.x,-As.y,-As.z),Jl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl,n.coordinateSystem,n.reversedDepth)}}class $d extends Qs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}let Ga=class extends Oh{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};class Yd extends ka{constructor(){super(new Ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ou extends Qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Yd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Wo=new WeakMap;class jd extends xs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Vn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Wo.has(o)===!0)i&&i(Wo.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Wo.set(l,c),Vn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Vn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Kd extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Va="\\[\\]\\.:\\/",Zd=new RegExp("["+Va+"]","g"),Ha="[^"+Va+"]",Jd="[^"+Va.replace("\\.","")+"]",Qd=/((?:WC+[\/:])*)/.source.replace("WC",Ha),ep=/(WCOD+)?/.source.replace("WCOD",Jd),tp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ha),np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ha),ip=new RegExp("^"+Qd+ep+tp+np+"$"),sp=["material","materials","bones","map"];class rp{constructor(e,t,n){const i=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ct{constructor(e,t,n){this.path=t,this.parsedPath=n||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,n):new ct(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zd,"")}static parseTrackName(e){const t=ip.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);sp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=rp;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Ql=new je;class Wa{constructor(e,t,n=0,i=1/0){this.ray=new Zs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ia,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ql.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ql),this}intersectObject(e,t=!0,n=[]){return ga(e,this,n,t),n.sort(ec),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ga(e[i],this,n,t);return n.sort(ec),n}}function ec(s,e){return s.distance-e.distance}function ga(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)ga(r[o],e,t,!0)}}function tc(s,e,t,n){const i=op(n);switch(t){case 1021:return s*e;case 1028:return s*e/i.components*i.byteLength;case 1029:return s*e/i.components*i.byteLength;case 1030:return s*e*2/i.components*i.byteLength;case 1031:return s*e*2/i.components*i.byteLength;case 1022:return s*e*3/i.components*i.byteLength;case 1023:return s*e*4/i.components*i.byteLength;case 1033:return s*e*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(s,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(s,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(s/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(s/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function op(s){switch(s){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function au(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ap(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ip=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,em=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,om=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,am=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Em=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Um=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Km=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,o0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,m0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,E0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,R0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,C0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,L0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,z0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:lp,alphahash_pars_fragment:cp,alphamap_fragment:hp,alphamap_pars_fragment:up,alphatest_fragment:fp,alphatest_pars_fragment:dp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:gp,batching_vertex:xp,begin_vertex:_p,beginnormal_vertex:vp,bsdfs:yp,iridescence_fragment:Mp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:wp,clipping_planes_pars_vertex:Tp,clipping_planes_vertex:Ep,color_fragment:Ap,color_pars_fragment:Rp,color_pars_vertex:Cp,color_vertex:Pp,common:Ip,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Np,displacementmap_vertex:Fp,emissivemap_fragment:Up,emissivemap_pars_fragment:Bp,colorspace_fragment:Op,colorspace_pars_fragment:zp,envmap_fragment:kp,envmap_common_pars_fragment:Gp,envmap_pars_fragment:Vp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:em,envmap_vertex:Wp,fog_vertex:Xp,fog_pars_vertex:qp,fog_fragment:$p,fog_pars_fragment:Yp,gradientmap_pars_fragment:jp,lightmap_pars_fragment:Kp,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:Jp,lights_pars_begin:Qp,lights_toon_fragment:tm,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:sm,lights_physical_fragment:rm,lights_physical_pars_fragment:om,lights_fragment_begin:am,lights_fragment_maps:lm,lights_fragment_end:cm,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:um,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:dm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:xm,metalnessmap_fragment:_m,metalnessmap_pars_fragment:vm,morphinstance_vertex:ym,morphcolor_vertex:Mm,morphnormal_vertex:Sm,morphtarget_pars_vertex:bm,morphtarget_vertex:wm,normal_fragment_begin:Tm,normal_fragment_maps:Em,normal_pars_fragment:Am,normal_pars_vertex:Rm,normal_vertex:Cm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Lm,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Nm,opaque_fragment:Fm,packing:Um,premultiplied_alpha_fragment:Bm,project_vertex:Om,dithering_fragment:zm,dithering_pars_fragment:km,roughnessmap_fragment:Gm,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Hm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:qm,skinbase_vertex:$m,skinning_pars_vertex:Ym,skinning_vertex:jm,skinnormal_vertex:Km,specularmap_fragment:Zm,specularmap_pars_fragment:Jm,tonemapping_fragment:Qm,tonemapping_pars_fragment:e0,transmission_fragment:t0,transmission_pars_fragment:n0,uv_pars_fragment:i0,uv_pars_vertex:s0,uv_vertex:r0,worldpos_vertex:o0,background_vert:a0,background_frag:l0,backgroundCube_vert:c0,backgroundCube_frag:h0,cube_vert:u0,cube_frag:f0,depth_vert:d0,depth_frag:p0,distanceRGBA_vert:m0,distanceRGBA_frag:g0,equirect_vert:x0,equirect_frag:_0,linedashed_vert:v0,linedashed_frag:y0,meshbasic_vert:M0,meshbasic_frag:S0,meshlambert_vert:b0,meshlambert_frag:w0,meshmatcap_vert:T0,meshmatcap_frag:E0,meshnormal_vert:A0,meshnormal_frag:R0,meshphong_vert:C0,meshphong_frag:P0,meshphysical_vert:I0,meshphysical_frag:L0,meshtoon_vert:D0,meshtoon_frag:N0,points_vert:F0,points_frag:U0,shadow_vert:B0,shadow_frag:O0,sprite_vert:z0,sprite_frag:k0},Re={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},bn={basic:{uniforms:Vt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Vt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Vt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Vt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Vt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Vt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Vt([Re.points,Re.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Vt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Vt([Re.common,Re.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Vt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Vt([Re.sprite,Re.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Vt([Re.common,Re.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Vt([Re.lights,Re.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};bn.physical={uniforms:Vt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Pr={r:0,b:0,g:0},xi=new ci,G0=new je;function V0(s,e,t,n,i,r,o){const a=new Ye(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function x(_){let v=!1;const E=m(_);E===null?p(a,l):E&&E.isColor&&(p(E,1),v=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(_,v){const E=m(v);E&&(E.isCubeTexture||E.mapping===306)?(h===void 0&&(h=new Le(new wn(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:as(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),xi.copy(v.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(G0.makeRotationFromEuler(xi)),h.material.toneMapped=rt.getTransfer(E.colorSpace)!==ft,(u!==E||f!==E.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Le(new Wn(2,2),new qn({name:"BackgroundMaterial",uniforms:as(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=rt.getTransfer(E.colorSpace)!==ft,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,v){_.getRGB(Pr,Uh(s)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,v,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:g,dispose:M}}function H0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(S,b,F,P,L){let A=!1;const N=u(P,F,b);r!==N&&(r=N,c(r.object)),A=d(S,P,F,L),A&&m(S,P,F,L),L!==null&&e.update(L,s.ELEMENT_ARRAY_BUFFER),(A||o)&&(o=!1,v(S,b,F,P),L!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,b,F){const P=F.wireframe===!0;let L=n[S.id];L===void 0&&(L={},n[S.id]=L);let A=L[b.id];A===void 0&&(A={},L[b.id]=A);let N=A[P];return N===void 0&&(N=f(l()),A[P]=N),N}function f(S){const b=[],F=[],P=[];for(let L=0;L<t;L++)b[L]=0,F[L]=0,P[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:F,attributeDivisors:P,object:S,attributes:{},index:null}}function d(S,b,F,P){const L=r.attributes,A=b.attributes;let N=0;const H=F.getAttributes();for(const G in H)if(H[G].location>=0){const q=L[G];let K=A[G];if(K===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),q===void 0||q.attribute!==K||K&&q.data!==K.data)return!0;N++}return r.attributesNum!==N||r.index!==P}function m(S,b,F,P){const L={},A=b.attributes;let N=0;const H=F.getAttributes();for(const G in H)if(H[G].location>=0){let q=A[G];q===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(q=S.instanceColor));const K={};K.attribute=q,q&&q.data&&(K.data=q.data),L[G]=K,N++}r.attributes=L,r.attributesNum=N,r.index=P}function x(){const S=r.newAttributes;for(let b=0,F=S.length;b<F;b++)S[b]=0}function g(S){p(S,0)}function p(S,b){const F=r.newAttributes,P=r.enabledAttributes,L=r.attributeDivisors;F[S]=1,P[S]===0&&(s.enableVertexAttribArray(S),P[S]=1),L[S]!==b&&(s.vertexAttribDivisor(S,b),L[S]=b)}function M(){const S=r.newAttributes,b=r.enabledAttributes;for(let F=0,P=b.length;F<P;F++)b[F]!==S[F]&&(s.disableVertexAttribArray(F),b[F]=0)}function _(S,b,F,P,L,A,N){N===!0?s.vertexAttribIPointer(S,b,F,L,A):s.vertexAttribPointer(S,b,F,P,L,A)}function v(S,b,F,P){x();const L=P.attributes,A=F.getAttributes(),N=b.defaultAttributeValues;for(const H in A){const G=A[H];if(G.location>=0){let O=L[H];if(O===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(O=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(O=S.instanceColor)),O!==void 0){const q=O.normalized,K=O.itemSize,fe=e.get(O);if(fe===void 0)continue;const Se=fe.buffer,ze=fe.type,Fe=fe.bytesPerElement,ae=ze===s.INT||ze===s.UNSIGNED_INT||O.gpuType===1013;if(O.isInterleavedBufferAttribute){const he=O.data,we=he.stride,De=O.offset;if(he.isInstancedInterleavedBuffer){for(let ye=0;ye<G.locationSize;ye++)p(G.location+ye,he.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ye=0;ye<G.locationSize;ye++)g(G.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let ye=0;ye<G.locationSize;ye++)_(G.location+ye,K/G.locationSize,ze,q,we*Fe,(De+K/G.locationSize*ye)*Fe,ae)}else{if(O.isInstancedBufferAttribute){for(let he=0;he<G.locationSize;he++)p(G.location+he,O.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let he=0;he<G.locationSize;he++)g(G.location+he);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let he=0;he<G.locationSize;he++)_(G.location+he,K/G.locationSize,ze,q,K*Fe,K/G.locationSize*he*Fe,ae)}}else if(N!==void 0){const q=N[H];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(G.location,q);break;case 3:s.vertexAttrib3fv(G.location,q);break;case 4:s.vertexAttrib4fv(G.location,q);break;default:s.vertexAttrib1fv(G.location,q)}}}}M()}function E(){U();for(const S in n){const b=n[S];for(const F in b){const P=b[F];for(const L in P)h(P[L].object),delete P[L];delete b[F]}delete n[S]}}function I(S){if(n[S.id]===void 0)return;const b=n[S.id];for(const F in b){const P=b[F];for(const L in P)h(P[L].object),delete P[L];delete b[F]}delete n[S.id]}function C(S){for(const b in n){const F=n[b];if(F[S.id]===void 0)continue;const P=F[S.id];for(const L in P)h(P[L].object),delete P[L];delete F[S.id]}}function U(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:U,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:I,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function W0(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function X0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==1023&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const U=C===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==1009&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==1015&&!U)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:E,maxSamples:I}}function q0(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Mi,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const M=r?0:n,_=M*4;let v=p.clippingState||null;l.value=v,v=h(m,f,_,d);for(let E=0;E!==_;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=d+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,v=d;_!==x;++_,v+=4)o.copy(u[_]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function $0(s){let e=new WeakMap;function t(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Bf(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ts=4,nc=[.125,.215,.35,.446,.526,.582],bi=20,Xo=new Ga,ic=new Ye;let qo=null,$o=0,Yo=0,jo=!1;const Si=(1+Math.sqrt(5))/2,Yi=1/Si,sc=[new z(-Si,Yi,0),new z(Si,Yi,0),new z(-Yi,0,Si),new z(Yi,0,Si),new z(0,Si,-Yi),new z(0,Si,Yi),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Y0=new z;class xa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=Y0}=r;qo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qo,$o,Yo),this._renderer.xr.enabled=jo,e.scissorTest=!1,Ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Xt,depthBuffer:!1},i=rc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j0(r)),this._blurMaterial=K0(r,e,t)}return i}_compileMaterial(e){const t=new Le(this._lodPlanes[0],e);this._renderer.compile(t,Xo)}_sceneToCubeUV(e,t,n,i,r){const l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(ic),u.toneMapping=0,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const x=new _n({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new Le(new wn,x);let p=!1;const M=e.background;M?M.isColor&&(x.color.copy(M),e.background=null,p=!0):(x.color.copy(ic),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const E=this._cubeSize;Ir(i,v*E,_>2?E:0,E,E),u.setRenderTarget(i),p&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ir(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Xo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sc[(i-r-1)%sc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Le(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*bi-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):bi;g>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${bi}`);const p=[];let M=0;for(let C=0;C<bi;++C){const U=C/x,w=Math.exp(-U*U/2);p.push(w),C===0?M+=w:C<g&&(M+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;const v=this._sizeLods[i],E=3*v*(i>_-ts?i-_+ts:0),I=4*(this._cubeSize-v);Ir(t,E,I,3*v,2*v),l.setRenderTarget(t),l.render(u,Xo)}}function j0(s){const e=[],t=[],n=[];let i=s;const r=s-ts+1+nc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ts?l=nc[o-s+ts-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,g=2,p=1,M=new Float32Array(x*m*d),_=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let I=0;I<d;I++){const C=I%3*2/3-1,U=I>2?0:-1,w=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];M.set(w,x*m*I),_.set(f,g*m*I);const S=[I,I,I,I,I,I];v.set(S,p*m*I)}const E=new pt;E.setAttribute("position",new Ot(M,x)),E.setAttribute("uv",new Ot(_,g)),E.setAttribute("faceIndex",new Ot(v,p)),e.push(E),i>ts&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rc(s,e,t){const n=new Ci(s,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function K0(s,e,t){const n=new Float32Array(bi),i=new z(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function oc(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ac(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Z0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new xa(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new xa(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function J0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ws("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Q0(s,e,t,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,m=u.attributes.position;let x=0;if(d!==null){const M=d.array;x=d.version;for(let _=0,v=M.length;_<v;_+=3){const E=M[_+0],I=M[_+1],C=M[_+2];f.push(E,I,I,C,C,E)}}else if(m!==void 0){const M=m.array;x=m.version;for(let _=0,v=M.length/3-1;_<v;_+=3){const E=_+0,I=_+1,C=_+2;f.push(E,I,I,C,C,E)}}else return;const g=new(Ch(f)?Nh:La)(f,1);g.version=x;const p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function eg(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*o,m),t.update(d,n,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function u(f,d,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*x[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function tg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ng(s,e,t){const n=new WeakMap,i=new ht;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;d===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const I=new Float32Array(v*E*4*u),C=new Ih(I,v,E,u);C.type=1015,C.needsUpdate=!0;const U=_*4;for(let S=0;S<u;S++){const b=g[S],F=p[S],P=M[S],L=v*E*4*S;for(let A=0;A<b.count;A++){const N=A*U;d===!0&&(i.fromBufferAttribute(b,A),I[L+N+0]=i.x,I[L+N+1]=i.y,I[L+N+2]=i.z,I[L+N+3]=0),m===!0&&(i.fromBufferAttribute(F,A),I[L+N+4]=i.x,I[L+N+5]=i.y,I[L+N+6]=i.z,I[L+N+7]=0),x===!0&&(i.fromBufferAttribute(P,A),I[L+N+8]=i.x,I[L+N+9]=i.y,I[L+N+10]=i.z,I[L+N+11]=P.itemSize===4?i.w:1)}}f={count:u,texture:C,size:new be(v,E)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function ig(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const lu=new qt,lc=new Xh(1,1),cu=new Ih,hu=new Mf,uu=new zh,cc=[],hc=[],uc=new Float32Array(16),fc=new Float32Array(9),dc=new Float32Array(4);function _s(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=cc[i];if(r===void 0&&(r=new Float32Array(i),cc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Et(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function At(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ro(s,e){let t=hc[e];t===void 0&&(t=new Int32Array(e),hc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function sg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function rg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2fv(this.addr,e),At(t,e)}}function og(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;s.uniform3fv(this.addr,e),At(t,e)}}function ag(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4fv(this.addr,e),At(t,e)}}function lg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;dc.set(n),s.uniformMatrix2fv(this.addr,!1,dc),At(t,n)}}function cg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;fc.set(n),s.uniformMatrix3fv(this.addr,!1,fc),At(t,n)}}function hg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;uc.set(n),s.uniformMatrix4fv(this.addr,!1,uc),At(t,n)}}function ug(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function fg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2iv(this.addr,e),At(t,e)}}function dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3iv(this.addr,e),At(t,e)}}function pg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4iv(this.addr,e),At(t,e)}}function mg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function gg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2uiv(this.addr,e),At(t,e)}}function xg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3uiv(this.addr,e),At(t,e)}}function _g(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4uiv(this.addr,e),At(t,e)}}function vg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(lc.compareFunction=515,r=lc):r=lu,t.setTexture2D(e||r,i)}function yg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hu,i)}function Mg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||uu,i)}function Sg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||cu,i)}function bg(s){switch(s){case 5126:return sg;case 35664:return rg;case 35665:return og;case 35666:return ag;case 35674:return lg;case 35675:return cg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return fg;case 35668:case 35672:return dg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return xg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return Sg}}function wg(s,e){s.uniform1fv(this.addr,e)}function Tg(s,e){const t=_s(e,this.size,2);s.uniform2fv(this.addr,t)}function Eg(s,e){const t=_s(e,this.size,3);s.uniform3fv(this.addr,t)}function Ag(s,e){const t=_s(e,this.size,4);s.uniform4fv(this.addr,t)}function Rg(s,e){const t=_s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Cg(s,e){const t=_s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Pg(s,e){const t=_s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ig(s,e){s.uniform1iv(this.addr,e)}function Lg(s,e){s.uniform2iv(this.addr,e)}function Dg(s,e){s.uniform3iv(this.addr,e)}function Ng(s,e){s.uniform4iv(this.addr,e)}function Fg(s,e){s.uniform1uiv(this.addr,e)}function Ug(s,e){s.uniform2uiv(this.addr,e)}function Bg(s,e){s.uniform3uiv(this.addr,e)}function Og(s,e){s.uniform4uiv(this.addr,e)}function zg(s,e,t){const n=this.cache,i=e.length,r=ro(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||lu,r[o])}function kg(s,e,t){const n=this.cache,i=e.length,r=ro(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||hu,r[o])}function Gg(s,e,t){const n=this.cache,i=e.length,r=ro(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||uu,r[o])}function Vg(s,e,t){const n=this.cache,i=e.length,r=ro(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||cu,r[o])}function Hg(s){switch(s){case 5126:return wg;case 35664:return Tg;case 35665:return Eg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Ig;case 35667:case 35671:return Lg;case 35668:case 35672:return Dg;case 35669:case 35673:return Ng;case 5125:return Fg;case 36294:return Ug;case 36295:return Bg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Vg}}class Wg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bg(t.type)}}class Xg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hg(t.type)}}class qg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function pc(s,e){s.seq.push(e),s.map[e.id]=e}function $g(s,e,t){const n=s.name,i=n.length;for(Ko.lastIndex=0;;){const r=Ko.exec(n),o=Ko.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){pc(t,c===void 0?new Wg(a,s,e):new Xg(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new qg(a),pc(t,u)),t=u}}}class Wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);$g(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function mc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Yg=37297;let jg=0;function Kg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const gc=new et;function Zg(s){rt._getMatrix(gc,rt.workingColorSpace,s);const e=`mat3( ${gc.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(s)){case $r:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function xc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Kg(s.getShaderSource(e),a)}else return r}function Jg(s,e){const t=Zg(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qg(s,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Lr=new z;function ex(){rt.getLuminanceCoefficients(Lr);const s=Lr.x.toFixed(4),e=Lr.y.toFixed(4),t=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function nx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ix(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ns(s){return s!==""}function _c(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function _a(s){return s.replace(sx,ox)}const rx=new Map;function ox(s,e){let t=Je[e];if(t===void 0){const n=rx.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _a(t)}const ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(s){return s.replace(ax,lx)}function lx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Mc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function hx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ux(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===302&&(e="ENVMAP_MODE_REFRACTION"),e}function fx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function dx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function px(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=cx(t),c=hx(t),h=ux(t),u=fx(t),f=dx(t),d=tx(t),m=nx(r),x=i.createProgram();let g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ns).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ns).join(`
`),p.length>0&&(p+=`
`)):(g=[Mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),p=[Mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Je.tonemapping_pars_fragment:"",t.toneMapping!==0?Qg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Jg("linearToOutputTexel",t.outputColorSpace),ex(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),o=_a(o),o=_c(o,t),o=vc(o,t),a=_a(a),a=_c(a,t),a=vc(a,t),o=yc(o),a=yc(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=M+g+o,v=M+p+a,E=mc(i,i.VERTEX_SHADER,_),I=mc(i,i.FRAGMENT_SHADER,v);i.attachShader(x,E),i.attachShader(x,I),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(b){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(x)||"",P=i.getShaderInfoLog(E)||"",L=i.getShaderInfoLog(I)||"",A=F.trim(),N=P.trim(),H=L.trim();let G=!0,O=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,E,I);else{const q=xc(i,E,"vertex"),K=xc(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+A+`
`+q+`
`+K)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(N===""||H==="")&&(O=!1);O&&(b.diagnostics={runnable:G,programLog:A,vertexShader:{log:N,prefix:g},fragmentShader:{log:H,prefix:p}})}i.deleteShader(E),i.deleteShader(I),U=new Wr(i,x),w=ix(i,x)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,Yg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=I,this}let mx=0;class gx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xx(e),t.set(e,n)),n}}class xx{constructor(e){this.id=mx++,this.code=e,this.usedTimes=0}}function _x(s,e,t,n,i,r,o){const a=new Ia,l=new gx,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,S,b,F,P){const L=F.fog,A=P.geometry,N=w.isMeshStandardMaterial?F.environment:null,H=(w.isMeshStandardMaterial?t:e).get(w.envMap||N),G=H&&H.mapping===306?H.image.height:null,O=m[w.type];w.precision!==null&&(d=i.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const q=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,K=q!==void 0?q.length:0;let fe=0;A.morphAttributes.position!==void 0&&(fe=1),A.morphAttributes.normal!==void 0&&(fe=2),A.morphAttributes.color!==void 0&&(fe=3);let Se,ze,Fe,ae;if(O){const st=bn[O];Se=st.vertexShader,ze=st.fragmentShader}else Se=w.vertexShader,ze=w.fragmentShader,l.update(w),Fe=l.getVertexShaderID(w),ae=l.getFragmentShaderID(w);const he=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),De=P.isInstancedMesh===!0,ye=P.isBatchedMesh===!0,Ve=!!w.map,oe=!!w.matcap,T=!!H,ee=!!w.aoMap,Z=!!w.lightMap,V=!!w.bumpMap,X=!!w.normalMap,ie=!!w.displacementMap,ne=!!w.emissiveMap,k=!!w.metalnessMap,Y=!!w.roughnessMap,$=w.anisotropy>0,R=w.clearcoat>0,y=w.dispersion>0,W=w.iridescence>0,j=w.sheen>0,se=w.transmission>0,te=$&&!!w.anisotropyMap,xe=R&&!!w.clearcoatMap,pe=R&&!!w.clearcoatNormalMap,_e=R&&!!w.clearcoatRoughnessMap,Te=W&&!!w.iridescenceMap,ge=W&&!!w.iridescenceThicknessMap,Ee=j&&!!w.sheenColorMap,He=j&&!!w.sheenRoughnessMap,Oe=!!w.specularMap,Ae=!!w.specularColorMap,Ze=!!w.specularIntensityMap,B=se&&!!w.transmissionMap,re=se&&!!w.thicknessMap,de=!!w.gradientMap,Me=!!w.alphaMap,me=w.alphaTest>0,ue=!!w.alphaHash,Pe=!!w.extensions;let ke=0;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ke=s.toneMapping);const Qe={shaderID:O,shaderType:w.type,shaderName:w.name,vertexShader:Se,fragmentShader:ze,defines:w.defines,customVertexShaderID:Fe,customFragmentShaderID:ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:ye,batchingColor:ye&&P._colorsTexture!==null,instancing:De,instancingColor:De&&P.instanceColor!==null,instancingMorph:De&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Xt,alphaToCoverage:!!w.alphaToCoverage,map:Ve,matcap:oe,envMap:T,envMapMode:T&&H.mapping,envMapCubeUVHeight:G,aoMap:ee,lightMap:Z,bumpMap:V,normalMap:X,displacementMap:f&&ie,emissiveMap:ne,normalMapObjectSpace:X&&w.normalMapType===1,normalMapTangentSpace:X&&w.normalMapType===0,metalnessMap:k,roughnessMap:Y,anisotropy:$,anisotropyMap:te,clearcoat:R,clearcoatMap:xe,clearcoatNormalMap:pe,clearcoatRoughnessMap:_e,dispersion:y,iridescence:W,iridescenceMap:Te,iridescenceThicknessMap:ge,sheen:j,sheenColorMap:Ee,sheenRoughnessMap:He,specularMap:Oe,specularColorMap:Ae,specularIntensityMap:Ze,transmission:se,transmissionMap:B,thicknessMap:re,gradientMap:de,opaque:w.transparent===!1&&w.blending===1&&w.alphaToCoverage===!1,alphaMap:Me,alphaTest:me,alphaHash:ue,combine:w.combine,mapUv:Ve&&x(w.map.channel),aoMapUv:ee&&x(w.aoMap.channel),lightMapUv:Z&&x(w.lightMap.channel),bumpMapUv:V&&x(w.bumpMap.channel),normalMapUv:X&&x(w.normalMap.channel),displacementMapUv:ie&&x(w.displacementMap.channel),emissiveMapUv:ne&&x(w.emissiveMap.channel),metalnessMapUv:k&&x(w.metalnessMap.channel),roughnessMapUv:Y&&x(w.roughnessMap.channel),anisotropyMapUv:te&&x(w.anisotropyMap.channel),clearcoatMapUv:xe&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:He&&x(w.sheenRoughnessMap.channel),specularMapUv:Oe&&x(w.specularMap.channel),specularColorMapUv:Ae&&x(w.specularColorMap.channel),specularIntensityMapUv:Ze&&x(w.specularIntensityMap.channel),transmissionMapUv:B&&x(w.transmissionMap.channel),thicknessMapUv:re&&x(w.thicknessMap.channel),alphaMapUv:Me&&x(w.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(X||$),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!A.attributes.uv&&(Ve||Me),fog:!!L,useFog:w.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:we,skinning:P.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&b.length>0,shadowMapType:s.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ve&&w.map.isVideoTexture===!0&&rt.getTransfer(w.map.colorSpace)===ft,decodeVideoTextureEmissive:ne&&w.emissiveMap.isVideoTexture===!0&&rt.getTransfer(w.emissiveMap.colorSpace)===ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===2,flipSided:w.side===1,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Pe&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&w.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const b in w.defines)S.push(b),S.push(w.defines[b]);return w.isRawShaderMaterial===!1&&(M(S,w),_(S,w),S.push(s.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function M(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function _(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const S=m[w.type];let b;if(S){const F=bn[S];b=Bh.clone(F.uniforms)}else b=w.uniforms;return b}function E(w,S){let b;for(let F=0,P=h.length;F<P;F++){const L=h[F];if(L.cacheKey===S){b=L,++b.usedTimes;break}}return b===void 0&&(b=new px(s,S,w,r),h.push(b)),b}function I(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function C(w){l.remove(w)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:I,releaseShaderCache:C,programs:h,dispose:U}}function vx(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function yx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Sc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function bc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,m,x,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function a(u,f,d,m,x,g){const p=o(u,f,d,m,x,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,f,d,m,x,g){const p=o(u,f,d,m,x,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||yx),n.length>1&&n.sort(f||Sc),i.length>1&&i.sort(f||Sc)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Mx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new bc,s.set(n,[o])):i>=r.length?(o=new bc,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Sx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ye};break;case"SpotLight":t={position:new z,direction:new z,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new z,halfWidth:new z,halfHeight:new z};break}return s[e.id]=t,t}}}function bx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let wx=0;function Tx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ex(s){const e=new Sx,t=bx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const i=new z,r=new je,o=new je;function a(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,M=0,_=0,v=0,E=0,I=0,C=0;c.sort(Tx);for(let w=0,S=c.length;w<S;w++){const b=c[w],F=b.color,P=b.intensity,L=b.distance,A=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=F.r*P,u+=F.g*P,f+=F.b*P;else if(b.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(b.sh.coefficients[N],P);C++}else if(b.isDirectionalLight){const N=e.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const H=b.shadow,G=t.get(b);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=A,n.directionalShadowMatrix[d]=b.shadow.matrix,M++}n.directional[d]=N,d++}else if(b.isSpotLight){const N=e.get(b);N.position.setFromMatrixPosition(b.matrixWorld),N.color.copy(F).multiplyScalar(P),N.distance=L,N.coneCos=Math.cos(b.angle),N.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),N.decay=b.decay,n.spot[x]=N;const H=b.shadow;if(b.map&&(n.spotLightMap[E]=b.map,E++,H.updateMatrices(b),b.castShadow&&I++),n.spotLightMatrix[x]=H.matrix,b.castShadow){const G=t.get(b);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=A,v++}x++}else if(b.isRectAreaLight){const N=e.get(b);N.color.copy(F).multiplyScalar(P),N.halfWidth.set(b.width*.5,0,0),N.halfHeight.set(0,b.height*.5,0),n.rectArea[g]=N,g++}else if(b.isPointLight){const N=e.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),N.distance=b.distance,N.decay=b.decay,b.castShadow){const H=b.shadow,G=t.get(b);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,G.shadowCameraNear=H.camera.near,G.shadowCameraFar=H.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=A,n.pointShadowMatrix[m]=b.shadow.matrix,_++}n.point[m]=N,m++}else if(b.isHemisphereLight){const N=e.get(b);N.skyColor.copy(b.color).multiplyScalar(P),N.groundColor.copy(b.groundColor).multiplyScalar(P),n.hemi[p]=N,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const U=n.hash;(U.directionalLength!==d||U.pointLength!==m||U.spotLength!==x||U.rectAreaLength!==g||U.hemiLength!==p||U.numDirectionalShadows!==M||U.numPointShadows!==_||U.numSpotShadows!==v||U.numSpotMaps!==E||U.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+E-I,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,U.directionalLength=d,U.pointLength=m,U.spotLength=x,U.rectAreaLength=g,U.hemiLength=p,U.numDirectionalShadows=M,U.numPointShadows=_,U.numSpotShadows=v,U.numSpotMaps=E,U.numLightProbes=C,n.version=wx++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0;const g=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const _=c[p];if(_.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(_.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),d++}else if(_.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function wc(s){const e=new Ex(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ax(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new wc(s),e.set(i,[a])):r>=o.length?(a=new wc(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Px(s,e,t){let n=new Na;const i=new be,r=new be,o=new ht,a=new nu({depthPacking:3201}),l=new Rd,c={},h=t.maxTextureSize,u={0:1,1:0,2:2},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Rx,fragmentShader:Cx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new pt;m.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Le(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(I,C,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;const w=s.getRenderTarget(),S=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),F=s.state;F.setBlending(0),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const P=p!==3&&this.type===3,L=p===3&&this.type!==3;for(let A=0,N=I.length;A<N;A++){const H=I[A],G=H.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const O=G.getFrameExtents();if(i.multiply(O),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/O.x),i.x=r.x*O.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/O.y),i.y=r.y*O.y,G.mapSize.y=r.y)),G.map===null||P===!0||L===!0){const K=this.type!==3?{minFilter:1003,magFilter:1003}:{};G.map!==null&&G.map.dispose(),G.map=new Ci(i.x,i.y,K),G.map.texture.name=H.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const q=G.getViewportCount();for(let K=0;K<q;K++){const fe=G.getViewport(K);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),F.viewport(o),G.updateMatrices(H,K),n=G.getFrustum(),v(C,U,G.camera,H,this.type)}G.isPointLightShadow!==!0&&this.type===3&&M(G,U),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(w,S,b)};function M(I,C){const U=e.update(x);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ci(i.x,i.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(C,null,U,f,x,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(C,null,U,d,x,null)}function _(I,C,U,w){let S=null;const b=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(b!==void 0)S=b;else if(S=U.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=S.uuid,P=C.uuid;let L=c[F];L===void 0&&(L={},c[F]=L);let A=L[P];A===void 0&&(A=S.clone(),L[P]=A,C.addEventListener("dispose",E)),S=A}if(S.visible=C.visible,S.wireframe=C.wireframe,w===3?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=s.properties.get(S);F.light=U}return S}function v(I,C,U,w,S){if(I.visible===!1)return;if(I.layers.test(C.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&S===3)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);const P=e.update(I),L=I.material;if(Array.isArray(L)){const A=P.groups;for(let N=0,H=A.length;N<H;N++){const G=A[N],O=L[G.materialIndex];if(O&&O.visible){const q=_(I,O,w,S);I.onBeforeShadow(s,I,C,U,P,q,G),s.renderBufferDirect(U,null,P,q,I,G),I.onAfterShadow(s,I,C,U,P,q,G)}}}else if(L.visible){const A=_(I,L,w,S);I.onBeforeShadow(s,I,C,U,P,A,null),s.renderBufferDirect(U,null,P,A,I,null),I.onAfterShadow(s,I,C,U,P,A,null)}}const F=I.children;for(let P=0,L=F.length;P<L;P++)v(F[P],C,U,w,S)}function E(I){I.target.removeEventListener("dispose",E);for(const U in c){const w=c[U],S=I.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const Ix={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Lx(s,e){function t(){let B=!1;const re=new ht;let de=null;const Me=new ht(0,0,0,0);return{setMask:function(me){de!==me&&!B&&(s.colorMask(me,me,me,me),de=me)},setLocked:function(me){B=me},setClear:function(me,ue,Pe,ke,Qe){Qe===!0&&(me*=ke,ue*=ke,Pe*=ke),re.set(me,ue,Pe,ke),Me.equals(re)===!1&&(s.clearColor(me,ue,Pe,ke),Me.copy(re))},reset:function(){B=!1,de=null,Me.set(-1,0,0,0)}}}function n(){let B=!1,re=!1,de=null,Me=null,me=null;return{setReversed:function(ue){if(re!==ue){const Pe=e.get("EXT_clip_control");ue?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),re=ue;const ke=me;me=null,this.setClear(ke)}},getReversed:function(){return re},setTest:function(ue){ue?he(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(ue){de!==ue&&!B&&(s.depthMask(ue),de=ue)},setFunc:function(ue){if(re&&(ue=Ix[ue]),Me!==ue){switch(ue){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Me=ue}},setLocked:function(ue){B=ue},setClear:function(ue){me!==ue&&(re&&(ue=1-ue),s.clearDepth(ue),me=ue)},reset:function(){B=!1,de=null,Me=null,me=null,re=!1}}}function i(){let B=!1,re=null,de=null,Me=null,me=null,ue=null,Pe=null,ke=null,Qe=null;return{setTest:function(st){B||(st?he(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(st){re!==st&&!B&&(s.stencilMask(st),re=st)},setFunc:function(st,Yt,zt){(de!==st||Me!==Yt||me!==zt)&&(s.stencilFunc(st,Yt,zt),de=st,Me=Yt,me=zt)},setOp:function(st,Yt,zt){(ue!==st||Pe!==Yt||ke!==zt)&&(s.stencilOp(st,Yt,zt),ue=st,Pe=Yt,ke=zt)},setLocked:function(st){B=st},setClear:function(st){Qe!==st&&(s.clearStencil(st),Qe=st)},reset:function(){B=!1,re=null,de=null,Me=null,me=null,ue=null,Pe=null,ke=null,Qe=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,_=null,v=null,E=null,I=null,C=new Ye(0,0,0),U=0,w=!1,S=null,b=null,F=null,P=null,L=null;const A=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,H=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=H>=1):G.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=H>=2);let O=null,q={};const K=s.getParameter(s.SCISSOR_BOX),fe=s.getParameter(s.VIEWPORT),Se=new ht().fromArray(K),ze=new ht().fromArray(fe);function Fe(B,re,de,Me){const me=new Uint8Array(4),ue=s.createTexture();s.bindTexture(B,ue),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pe=0;Pe<de;Pe++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(re,0,s.RGBA,1,1,Me,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(re+Pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return ue}const ae={};ae[s.TEXTURE_2D]=Fe(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=Fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=Fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=Fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(s.DEPTH_TEST),o.setFunc(3),V(!1),X(1),he(s.CULL_FACE),ee(0);function he(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function we(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function De(B,re){return u[B]!==re?(s.bindFramebuffer(B,re),u[B]=re,B===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=re),B===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=re),!0):!1}function ye(B,re){let de=d,Me=!1;if(B){de=f.get(re),de===void 0&&(de=[],f.set(re,de));const me=B.textures;if(de.length!==me.length||de[0]!==s.COLOR_ATTACHMENT0){for(let ue=0,Pe=me.length;ue<Pe;ue++)de[ue]=s.COLOR_ATTACHMENT0+ue;de.length=me.length,Me=!0}}else de[0]!==s.BACK&&(de[0]=s.BACK,Me=!0);Me&&s.drawBuffers(de)}function Ve(B){return m!==B?(s.useProgram(B),m=B,!0):!1}const oe={100:s.FUNC_ADD,101:s.FUNC_SUBTRACT,102:s.FUNC_REVERSE_SUBTRACT};oe[103]=s.MIN,oe[104]=s.MAX;const T={200:s.ZERO,201:s.ONE,202:s.SRC_COLOR,204:s.SRC_ALPHA,210:s.SRC_ALPHA_SATURATE,208:s.DST_COLOR,206:s.DST_ALPHA,203:s.ONE_MINUS_SRC_COLOR,205:s.ONE_MINUS_SRC_ALPHA,209:s.ONE_MINUS_DST_COLOR,207:s.ONE_MINUS_DST_ALPHA,211:s.CONSTANT_COLOR,212:s.ONE_MINUS_CONSTANT_COLOR,213:s.CONSTANT_ALPHA,214:s.ONE_MINUS_CONSTANT_ALPHA};function ee(B,re,de,Me,me,ue,Pe,ke,Qe,st){if(B===0){x===!0&&(we(s.BLEND),x=!1);return}if(x===!1&&(he(s.BLEND),x=!0),B!==5){if(B!==g||st!==w){if((p!==100||v!==100)&&(s.blendEquation(s.FUNC_ADD),p=100,v=100),st)switch(B){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case 3:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}M=null,_=null,E=null,I=null,C.set(0,0,0),U=0,g=B,w=st}return}me=me||re,ue=ue||de,Pe=Pe||Me,(re!==p||me!==v)&&(s.blendEquationSeparate(oe[re],oe[me]),p=re,v=me),(de!==M||Me!==_||ue!==E||Pe!==I)&&(s.blendFuncSeparate(T[de],T[Me],T[ue],T[Pe]),M=de,_=Me,E=ue,I=Pe),(ke.equals(C)===!1||Qe!==U)&&(s.blendColor(ke.r,ke.g,ke.b,Qe),C.copy(ke),U=Qe),g=B,w=!1}function Z(B,re){B.side===2?we(s.CULL_FACE):he(s.CULL_FACE);let de=B.side===1;re&&(de=!de),V(de),B.blending===1&&B.transparent===!1?ee(0):ee(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const Me=B.stencilWrite;a.setTest(Me),Me&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ne(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function V(B){S!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),S=B)}function X(B){B!==0?(he(s.CULL_FACE),B!==b&&(B===1?s.cullFace(s.BACK):B===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),b=B}function ie(B){B!==F&&(N&&s.lineWidth(B),F=B)}function ne(B,re,de){B?(he(s.POLYGON_OFFSET_FILL),(P!==re||L!==de)&&(s.polygonOffset(re,de),P=re,L=de)):we(s.POLYGON_OFFSET_FILL)}function k(B){B?he(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function Y(B){B===void 0&&(B=s.TEXTURE0+A-1),O!==B&&(s.activeTexture(B),O=B)}function $(B,re,de){de===void 0&&(O===null?de=s.TEXTURE0+A-1:de=O);let Me=q[de];Me===void 0&&(Me={type:void 0,texture:void 0},q[de]=Me),(Me.type!==B||Me.texture!==re)&&(O!==de&&(s.activeTexture(de),O=de),s.bindTexture(B,re||ae[B]),Me.type=B,Me.texture=re)}function R(){const B=q[O];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function W(){try{s.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{s.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{s.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{s.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{s.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{s.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{s.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{s.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{s.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(B){Se.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Se.copy(B))}function He(B){ze.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),ze.copy(B))}function Oe(B,re){let de=c.get(re);de===void 0&&(de=new WeakMap,c.set(re,de));let Me=de.get(B);Me===void 0&&(Me=s.getUniformBlockIndex(re,B.name),de.set(B,Me))}function Ae(B,re){const Me=c.get(re).get(B);l.get(re)!==Me&&(s.uniformBlockBinding(re,Me,B.__bindingPointIndex),l.set(re,Me))}function Ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},O=null,q={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,_=null,v=null,E=null,I=null,C=new Ye(0,0,0),U=0,w=!1,S=null,b=null,F=null,P=null,L=null,Se.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:we,bindFramebuffer:De,drawBuffers:ye,useProgram:Ve,setBlending:ee,setMaterial:Z,setFlipSided:V,setCullFace:X,setLineWidth:ie,setPolygonOffset:ne,setScissorTest:k,activeTexture:Y,bindTexture:$,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:W,texImage2D:Te,texImage3D:ge,updateUBOMapping:Oe,uniformBlockBinding:Ae,texStorage2D:pe,texStorage3D:_e,texSubImage2D:j,texSubImage3D:se,compressedTexSubImage2D:te,compressedTexSubImage3D:xe,scissor:Ee,viewport:He,reset:Ze}}function Dx(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,y){return d?new OffscreenCanvas(R,y):Hs("canvas")}function x(R,y,W){let j=1;const se=$(R);if((se.width>W||se.height>W)&&(j=W/Math.max(se.width,se.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const te=Math.floor(j*se.width),xe=Math.floor(j*se.height);u===void 0&&(u=m(te,xe));const pe=y?m(te,xe):u;return pe.width=te,pe.height=xe,pe.getContext("2d").drawImage(R,0,0,te,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+te+"x"+xe+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(R,y,W,j,se=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te=y;if(y===s.RED&&(W===s.FLOAT&&(te=s.R32F),W===s.HALF_FLOAT&&(te=s.R16F),W===s.UNSIGNED_BYTE&&(te=s.R8)),y===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(te=s.R8UI),W===s.UNSIGNED_SHORT&&(te=s.R16UI),W===s.UNSIGNED_INT&&(te=s.R32UI),W===s.BYTE&&(te=s.R8I),W===s.SHORT&&(te=s.R16I),W===s.INT&&(te=s.R32I)),y===s.RG&&(W===s.FLOAT&&(te=s.RG32F),W===s.HALF_FLOAT&&(te=s.RG16F),W===s.UNSIGNED_BYTE&&(te=s.RG8)),y===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(te=s.RG8UI),W===s.UNSIGNED_SHORT&&(te=s.RG16UI),W===s.UNSIGNED_INT&&(te=s.RG32UI),W===s.BYTE&&(te=s.RG8I),W===s.SHORT&&(te=s.RG16I),W===s.INT&&(te=s.RG32I)),y===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(te=s.RGB8UI),W===s.UNSIGNED_SHORT&&(te=s.RGB16UI),W===s.UNSIGNED_INT&&(te=s.RGB32UI),W===s.BYTE&&(te=s.RGB8I),W===s.SHORT&&(te=s.RGB16I),W===s.INT&&(te=s.RGB32I)),y===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(te=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(te=s.RGBA16UI),W===s.UNSIGNED_INT&&(te=s.RGBA32UI),W===s.BYTE&&(te=s.RGBA8I),W===s.SHORT&&(te=s.RGBA16I),W===s.INT&&(te=s.RGBA32I)),y===s.RGB&&(W===s.UNSIGNED_INT_5_9_9_9_REV&&(te=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(te=s.R11F_G11F_B10F)),y===s.RGBA){const xe=se?$r:rt.getTransfer(j);W===s.FLOAT&&(te=s.RGBA32F),W===s.HALF_FLOAT&&(te=s.RGBA16F),W===s.UNSIGNED_BYTE&&(te=xe===ft?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function v(R,y){let W;return R?y===null||y===1014||y===1020?W=s.DEPTH24_STENCIL8:y===1015?W=s.DEPTH32F_STENCIL8:y===1012&&(W=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===1014||y===1020?W=s.DEPTH_COMPONENT24:y===1015?W=s.DEPTH_COMPONENT32F:y===1012&&(W=s.DEPTH_COMPONENT16),W}function E(R,y){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==1003&&R.minFilter!==1006?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function I(R){const y=R.target;y.removeEventListener("dispose",I),U(y),y.isVideoTexture&&h.delete(y)}function C(R){const y=R.target;y.removeEventListener("dispose",C),S(y)}function U(R){const y=n.get(R);if(y.__webglInit===void 0)return;const W=R.source,j=f.get(W);if(j){const se=j[y.__cacheKey];se.usedTimes--,se.usedTimes===0&&w(R),Object.keys(j).length===0&&f.delete(W)}n.remove(R)}function w(R){const y=n.get(R);s.deleteTexture(y.__webglTexture);const W=R.source,j=f.get(W);delete j[y.__cacheKey],o.memory.textures--}function S(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let se=0;se<y.__webglFramebuffer[j].length;se++)s.deleteFramebuffer(y.__webglFramebuffer[j][se]);else s.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)s.deleteFramebuffer(y.__webglFramebuffer[j]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const W=R.textures;for(let j=0,se=W.length;j<se;j++){const te=n.get(W[j]);te.__webglTexture&&(s.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(W[j])}n.remove(R)}let b=0;function F(){b=0}function P(){const R=b;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),b+=1,R}function L(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function A(R,y){const W=n.get(R);if(R.isVideoTexture&&k(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(W,R,y);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+y)}function N(R,y){const W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){ae(W,R,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+y)}function H(R,y){const W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){ae(W,R,y);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+y)}function G(R,y){const W=n.get(R);if(R.version>0&&W.__version!==R.version){he(W,R,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+y)}const O={1e3:s.REPEAT,1001:s.CLAMP_TO_EDGE,1002:s.MIRRORED_REPEAT},q={1003:s.NEAREST,1004:s.NEAREST_MIPMAP_NEAREST,1005:s.NEAREST_MIPMAP_LINEAR,1006:s.LINEAR,1007:s.LINEAR_MIPMAP_NEAREST,1008:s.LINEAR_MIPMAP_LINEAR},K={512:s.NEVER,519:s.ALWAYS,513:s.LESS,515:s.LEQUAL,514:s.EQUAL,518:s.GEQUAL,516:s.GREATER,517:s.NOTEQUAL};function fe(R,y){if(y.type===1015&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===1006||y.magFilter===1007||y.magFilter===1005||y.magFilter===1008||y.minFilter===1006||y.minFilter===1007||y.minFilter===1005||y.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,O[y.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,O[y.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,O[y.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,q[y.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,q[y.minFilter]),y.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,K[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===1003||y.minFilter!==1005&&y.minFilter!==1008||y.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Se(R,y){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",I));const j=y.source;let se=f.get(j);se===void 0&&(se={},f.set(j,se));const te=L(y);if(te!==R.__cacheKey){se[te]===void 0&&(se[te]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,W=!0),se[te].usedTimes++;const xe=se[R.__cacheKey];xe!==void 0&&(se[R.__cacheKey].usedTimes--,xe.usedTimes===0&&w(y)),R.__cacheKey=te,R.__webglTexture=se[te].texture}return W}function ze(R,y,W){return Math.floor(Math.floor(R/W)/y)}function Fe(R,y,W,j){const te=R.updateRanges;if(te.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,W,j,y.data);else{te.sort((ge,Ee)=>ge.start-Ee.start);let xe=0;for(let ge=1;ge<te.length;ge++){const Ee=te[xe],He=te[ge],Oe=Ee.start+Ee.count,Ae=ze(He.start,y.width,4),Ze=ze(Ee.start,y.width,4);He.start<=Oe+1&&Ae===Ze&&ze(He.start+He.count-1,y.width,4)===Ae?Ee.count=Math.max(Ee.count,He.start+He.count-Ee.start):(++xe,te[xe]=He)}te.length=xe+1;const pe=s.getParameter(s.UNPACK_ROW_LENGTH),_e=s.getParameter(s.UNPACK_SKIP_PIXELS),Te=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let ge=0,Ee=te.length;ge<Ee;ge++){const He=te[ge],Oe=Math.floor(He.start/4),Ae=Math.ceil(He.count/4),Ze=Oe%y.width,B=Math.floor(Oe/y.width),re=Ae,de=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,B),t.texSubImage2D(s.TEXTURE_2D,0,Ze,B,re,de,W,j,y.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,pe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,_e),s.pixelStorei(s.UNPACK_SKIP_ROWS,Te)}}function ae(R,y,W){let j=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=s.TEXTURE_3D);const se=Se(R,y),te=y.source;t.bindTexture(j,R.__webglTexture,s.TEXTURE0+W);const xe=n.get(te);if(te.version!==xe.__version||se===!0){t.activeTexture(s.TEXTURE0+W);const pe=rt.getPrimaries(rt.workingColorSpace),_e=y.colorSpace===""?null:rt.getPrimaries(y.colorSpace),Te=y.colorSpace===""||pe===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ge=x(y.image,!1,i.maxTextureSize);ge=Y(y,ge);const Ee=r.convert(y.format,y.colorSpace),He=r.convert(y.type);let Oe=_(y.internalFormat,Ee,He,y.colorSpace,y.isVideoTexture);fe(j,y);let Ae;const Ze=y.mipmaps,B=y.isVideoTexture!==!0,re=xe.__version===void 0||se===!0,de=te.dataReady,Me=E(y,ge);if(y.isDepthTexture)Oe=v(y.format===1027,y.type),re&&(B?t.texStorage2D(s.TEXTURE_2D,1,Oe,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,Oe,ge.width,ge.height,0,Ee,He,null));else if(y.isDataTexture)if(Ze.length>0){B&&re&&t.texStorage2D(s.TEXTURE_2D,Me,Oe,Ze[0].width,Ze[0].height);for(let me=0,ue=Ze.length;me<ue;me++)Ae=Ze[me],B?de&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Ee,He,Ae.data):t.texImage2D(s.TEXTURE_2D,me,Oe,Ae.width,Ae.height,0,Ee,He,Ae.data);y.generateMipmaps=!1}else B?(re&&t.texStorage2D(s.TEXTURE_2D,Me,Oe,ge.width,ge.height),de&&Fe(y,ge,Ee,He)):t.texImage2D(s.TEXTURE_2D,0,Oe,ge.width,ge.height,0,Ee,He,ge.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){B&&re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Oe,Ze[0].width,Ze[0].height,ge.depth);for(let me=0,ue=Ze.length;me<ue;me++)if(Ae=Ze[me],y.format!==1023)if(Ee!==null)if(B){if(de)if(y.layerUpdates.size>0){const Pe=tc(Ae.width,Ae.height,y.format,y.type);for(const ke of y.layerUpdates){const Qe=Ae.data.subarray(ke*Pe/Ae.data.BYTES_PER_ELEMENT,(ke+1)*Pe/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,ke,Ae.width,Ae.height,1,Ee,Qe)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,ge.depth,Ee,Ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Oe,Ae.width,Ae.height,ge.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?de&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,ge.depth,Ee,He,Ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,me,Oe,Ae.width,Ae.height,ge.depth,0,Ee,He,Ae.data)}else{B&&re&&t.texStorage2D(s.TEXTURE_2D,Me,Oe,Ze[0].width,Ze[0].height);for(let me=0,ue=Ze.length;me<ue;me++)Ae=Ze[me],y.format!==1023?Ee!==null?B?de&&t.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Ee,Ae.data):t.compressedTexImage2D(s.TEXTURE_2D,me,Oe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?de&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Ee,He,Ae.data):t.texImage2D(s.TEXTURE_2D,me,Oe,Ae.width,Ae.height,0,Ee,He,Ae.data)}else if(y.isDataArrayTexture)if(B){if(re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Oe,ge.width,ge.height,ge.depth),de)if(y.layerUpdates.size>0){const me=tc(ge.width,ge.height,y.format,y.type);for(const ue of y.layerUpdates){const Pe=ge.data.subarray(ue*me/ge.data.BYTES_PER_ELEMENT,(ue+1)*me/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ue,ge.width,ge.height,1,Ee,He,Pe)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ee,He,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,ge.width,ge.height,ge.depth,0,Ee,He,ge.data);else if(y.isData3DTexture)B?(re&&t.texStorage3D(s.TEXTURE_3D,Me,Oe,ge.width,ge.height,ge.depth),de&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ee,He,ge.data)):t.texImage3D(s.TEXTURE_3D,0,Oe,ge.width,ge.height,ge.depth,0,Ee,He,ge.data);else if(y.isFramebufferTexture){if(re)if(B)t.texStorage2D(s.TEXTURE_2D,Me,Oe,ge.width,ge.height);else{let me=ge.width,ue=ge.height;for(let Pe=0;Pe<Me;Pe++)t.texImage2D(s.TEXTURE_2D,Pe,Oe,me,ue,0,Ee,He,null),me>>=1,ue>>=1}}else if(Ze.length>0){if(B&&re){const me=$(Ze[0]);t.texStorage2D(s.TEXTURE_2D,Me,Oe,me.width,me.height)}for(let me=0,ue=Ze.length;me<ue;me++)Ae=Ze[me],B?de&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Ee,He,Ae):t.texImage2D(s.TEXTURE_2D,me,Oe,Ee,He,Ae);y.generateMipmaps=!1}else if(B){if(re){const me=$(ge);t.texStorage2D(s.TEXTURE_2D,Me,Oe,me.width,me.height)}de&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,He,ge)}else t.texImage2D(s.TEXTURE_2D,0,Oe,Ee,He,ge);g(y)&&p(j),xe.__version=te.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function he(R,y,W){if(y.image.length!==6)return;const j=Se(R,y),se=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+W);const te=n.get(se);if(se.version!==te.__version||j===!0){t.activeTexture(s.TEXTURE0+W);const xe=rt.getPrimaries(rt.workingColorSpace),pe=y.colorSpace===""?null:rt.getPrimaries(y.colorSpace),_e=y.colorSpace===""||xe===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Te=y.isCompressedTexture||y.image[0].isCompressedTexture,ge=y.image[0]&&y.image[0].isDataTexture,Ee=[];for(let ue=0;ue<6;ue++)!Te&&!ge?Ee[ue]=x(y.image[ue],!0,i.maxCubemapSize):Ee[ue]=ge?y.image[ue].image:y.image[ue],Ee[ue]=Y(y,Ee[ue]);const He=Ee[0],Oe=r.convert(y.format,y.colorSpace),Ae=r.convert(y.type),Ze=_(y.internalFormat,Oe,Ae,y.colorSpace),B=y.isVideoTexture!==!0,re=te.__version===void 0||j===!0,de=se.dataReady;let Me=E(y,He);fe(s.TEXTURE_CUBE_MAP,y);let me;if(Te){B&&re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,Ze,He.width,He.height);for(let ue=0;ue<6;ue++){me=Ee[ue].mipmaps;for(let Pe=0;Pe<me.length;Pe++){const ke=me[Pe];y.format!==1023?Oe!==null?B?de&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe,0,0,ke.width,ke.height,Oe,ke.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe,Ze,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe,0,0,ke.width,ke.height,Oe,Ae,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe,Ze,ke.width,ke.height,0,Oe,Ae,ke.data)}}}else{if(me=y.mipmaps,B&&re){me.length>0&&Me++;const ue=$(Ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,Ze,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(ge){B?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ee[ue].width,Ee[ue].height,Oe,Ae,Ee[ue].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ze,Ee[ue].width,Ee[ue].height,0,Oe,Ae,Ee[ue].data);for(let Pe=0;Pe<me.length;Pe++){const Qe=me[Pe].image[ue].image;B?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe+1,0,0,Qe.width,Qe.height,Oe,Ae,Qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe+1,Ze,Qe.width,Qe.height,0,Oe,Ae,Qe.data)}}else{B?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Oe,Ae,Ee[ue]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ze,Oe,Ae,Ee[ue]);for(let Pe=0;Pe<me.length;Pe++){const ke=me[Pe];B?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe+1,0,0,Oe,Ae,ke.image[ue]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe+1,Ze,Oe,Ae,ke.image[ue])}}}g(y)&&p(s.TEXTURE_CUBE_MAP),te.__version=se.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function we(R,y,W,j,se,te){const xe=r.convert(W.format,W.colorSpace),pe=r.convert(W.type),_e=_(W.internalFormat,xe,pe,W.colorSpace),Te=n.get(y),ge=n.get(W);if(ge.__renderTarget=y,!Te.__hasExternalTextures){const Ee=Math.max(1,y.width>>te),He=Math.max(1,y.height>>te);se===s.TEXTURE_3D||se===s.TEXTURE_2D_ARRAY?t.texImage3D(se,te,_e,Ee,He,y.depth,0,xe,pe,null):t.texImage2D(se,te,_e,Ee,He,0,xe,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),ne(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,se,ge.__webglTexture,0,ie(y)):(se===s.TEXTURE_2D||se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,se,ge.__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(R,y,W){if(s.bindRenderbuffer(s.RENDERBUFFER,R),y.depthBuffer){const j=y.depthTexture,se=j&&j.isDepthTexture?j.type:null,te=v(y.stencilBuffer,se),xe=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=ie(y);ne(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,te,y.width,y.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,te,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,te,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,R)}else{const j=y.textures;for(let se=0;se<j.length;se++){const te=j[se],xe=r.convert(te.format,te.colorSpace),pe=r.convert(te.type),_e=_(te.internalFormat,xe,pe,te.colorSpace),Te=ie(y);W&&ne(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,_e,y.width,y.height):ne(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,_e,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,_e,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),A(y.depthTexture,0);const se=j.__webglTexture,te=ie(y);if(y.depthTexture.format===1026)ne(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0);else if(y.depthTexture.format===1027)ne(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ve(R){const y=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const se=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",se)};j.addEventListener("dispose",se),y.__depthDisposeCallback=se}y.__boundDepthTexture=j}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const j=R.texture.mipmaps;j&&j.length>0?ye(y.__webglFramebuffer[0],R):ye(y.__webglFramebuffer,R)}else if(W){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=s.createRenderbuffer(),De(y.__webglDepthbuffer[j],R,!1);else{const se=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=y.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,te)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),De(y.__webglDepthbuffer,R,!1);else{const se=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,te)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(R,y,W){const j=n.get(R);y!==void 0&&we(j.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&Ve(R)}function T(R){const y=R.texture,W=n.get(R),j=n.get(y);R.addEventListener("dispose",C);const se=R.textures,te=R.isWebGLCubeRenderTarget===!0,xe=se.length>1;if(xe||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=y.version,o.memory.textures++),te){W.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[pe]=[];for(let _e=0;_e<y.mipmaps.length;_e++)W.__webglFramebuffer[pe][_e]=s.createFramebuffer()}else W.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let pe=0;pe<y.mipmaps.length;pe++)W.__webglFramebuffer[pe]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(xe)for(let pe=0,_e=se.length;pe<_e;pe++){const Te=n.get(se[pe]);Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&ne(R)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let pe=0;pe<se.length;pe++){const _e=se[pe];W.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[pe]);const Te=r.convert(_e.format,_e.colorSpace),ge=r.convert(_e.type),Ee=_(_e.internalFormat,Te,ge,_e.colorSpace,R.isXRRenderTarget===!0),He=ie(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,He,Ee,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,W.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),De(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),fe(s.TEXTURE_CUBE_MAP,y);for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)we(W.__webglFramebuffer[pe][_e],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else we(W.__webglFramebuffer[pe],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(y)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let pe=0,_e=se.length;pe<_e;pe++){const Te=se[pe],ge=n.get(Te);let Ee=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ee=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ee,ge.__webglTexture),fe(Ee,Te),we(W.__webglFramebuffer,R,Te,s.COLOR_ATTACHMENT0+pe,Ee,0),g(Te)&&p(Ee)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,j.__webglTexture),fe(pe,y),y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)we(W.__webglFramebuffer[_e],R,y,s.COLOR_ATTACHMENT0,pe,_e);else we(W.__webglFramebuffer,R,y,s.COLOR_ATTACHMENT0,pe,0);g(y)&&p(pe),t.unbindTexture()}R.depthBuffer&&Ve(R)}function ee(R){const y=R.textures;for(let W=0,j=y.length;W<j;W++){const se=y[W];if(g(se)){const te=M(R),xe=n.get(se).__webglTexture;t.bindTexture(te,xe),p(te),t.unbindTexture()}}}const Z=[],V=[];function X(R){if(R.samples>0){if(ne(R)===!1){const y=R.textures,W=R.width,j=R.height;let se=s.COLOR_BUFFER_BIT;const te=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=n.get(R),pe=y.length>1;if(pe)for(let Te=0;Te<y.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const _e=R.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Te=0;Te<y.length;Te++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[Te]);const ge=n.get(y[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ge,0)}s.blitFramebuffer(0,0,W,j,0,0,W,j,se,s.NEAREST),l===!0&&(Z.length=0,V.length=0,Z.push(s.COLOR_ATTACHMENT0+Te),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Z.push(te),V.push(te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,V)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Z))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Te=0;Te<y.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,xe.__webglColorRenderbuffer[Te]);const ge=n.get(y[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function ie(R){return Math.min(i.maxSamples,R.samples)}function ne(R){const y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function k(R){const y=o.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Y(R,y){const W=R.colorSpace,j=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==Xt&&W!==""&&(rt.getTransfer(W)===ft?(j!==1023||se!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),y}function $(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=F,this.setTexture2D=A,this.setTexture2DArray=N,this.setTexture3D=H,this.setTextureCube=G,this.rebindTextures=oe,this.setupRenderTarget=T,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ne}function Nx(s,e){function t(n,i=""){let r;const o=rt.getTransfer(i);if(n===1009)return s.UNSIGNED_BYTE;if(n===1017)return s.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return s.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return s.BYTE;if(n===1011)return s.SHORT;if(n===1012)return s.UNSIGNED_SHORT;if(n===1013)return s.INT;if(n===1014)return s.UNSIGNED_INT;if(n===1015)return s.FLOAT;if(n===1016)return s.HALF_FLOAT;if(n===1021)return s.ALPHA;if(n===1022)return s.RGB;if(n===1023)return s.RGBA;if(n===1026)return s.DEPTH_COMPONENT;if(n===1027)return s.DEPTH_STENCIL;if(n===1028)return s.RED;if(n===1029)return s.RED_INTEGER;if(n===1030)return s.RG;if(n===1031)return s.RG_INTEGER;if(n===1033)return s.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===36283)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Fx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ux=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new qh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qn({vertexShader:Fx,fragmentShader:Ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Le(new Wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ox extends ps{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null;const x=typeof XRWebGLBinding<"u",g=new Bx,p={},M=t.getContextAttributes();let _=null,v=null;const E=[],I=[],C=new be;let U=null;const w=new Wt;w.viewport=new ht;const S=new Wt;S.viewport=new ht;const b=[w,S],F=new Kd;let P=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let he=E[ae];return he===void 0&&(he=new No,E[ae]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ae){let he=E[ae];return he===void 0&&(he=new No,E[ae]=he),he.getGripSpace()},this.getHand=function(ae){let he=E[ae];return he===void 0&&(he=new No,E[ae]=he),he.getHandSpace()};function A(ae){const he=I.indexOf(ae.inputSource);if(he===-1)return;const we=E[he];we!==void 0&&(we.update(ae.inputSource,ae.frame,c||o),we.dispatchEvent({type:ae.type,data:ae.inputSource}))}function N(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",H);for(let ae=0;ae<E.length;ae++){const he=I[ae];he!==null&&(I[ae]=null,E[ae].disconnect(he))}P=null,L=null,g.reset();for(const ae in p)delete p[ae];e.setRenderTarget(_),d=null,f=null,u=null,i=null,v=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){r=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){a=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(ae){if(i=ae,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",N),i.addEventListener("inputsourceschange",H),M.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,De=null,ye=null;M.depth&&(ye=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=M.stencil?1027:1026,De=M.stencil?1020:1014);const Ve={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ve),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Ci(f.textureWidth,f.textureHeight,{format:1023,type:1009,depthTexture:new Xh(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const we={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,we),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ci(d.framebufferWidth,d.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Fe.setContext(i),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(ae){for(let he=0;he<ae.removed.length;he++){const we=ae.removed[he],De=I.indexOf(we);De>=0&&(I[De]=null,E[De].disconnect(we))}for(let he=0;he<ae.added.length;he++){const we=ae.added[he];let De=I.indexOf(we);if(De===-1){for(let Ve=0;Ve<E.length;Ve++)if(Ve>=I.length){I.push(we),De=Ve;break}else if(I[Ve]===null){I[Ve]=we,De=Ve;break}if(De===-1)break}const ye=E[De];ye&&ye.connect(we)}}const G=new z,O=new z;function q(ae,he,we){G.setFromMatrixPosition(he.matrixWorld),O.setFromMatrixPosition(we.matrixWorld);const De=G.distanceTo(O),ye=he.projectionMatrix.elements,Ve=we.projectionMatrix.elements,oe=ye[14]/(ye[10]-1),T=ye[14]/(ye[10]+1),ee=(ye[9]+1)/ye[5],Z=(ye[9]-1)/ye[5],V=(ye[8]-1)/ye[0],X=(Ve[8]+1)/Ve[0],ie=oe*V,ne=oe*X,k=De/(-V+X),Y=k*-V;if(he.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Y),ae.translateZ(k),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),ye[10]===-1)ae.projectionMatrix.copy(he.projectionMatrix),ae.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const $=oe+k,R=T+k,y=ie-Y,W=ne+(De-Y),j=ee*T/R*$,se=Z*T/R*$;ae.projectionMatrix.makePerspective(y,W,j,se,$,R),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function K(ae,he){he===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(he.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(i===null)return;let he=ae.near,we=ae.far;g.texture!==null&&(g.depthNear>0&&(he=g.depthNear),g.depthFar>0&&(we=g.depthFar)),F.near=S.near=w.near=he,F.far=S.far=w.far=we,(P!==F.near||L!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),P=F.near,L=F.far),F.layers.mask=ae.layers.mask|6,w.layers.mask=F.layers.mask&3,S.layers.mask=F.layers.mask&5;const De=ae.parent,ye=F.cameras;K(F,De);for(let Ve=0;Ve<ye.length;Ve++)K(ye[Ve],De);ye.length===2?q(F,w,S):F.projectionMatrix.copy(w.projectionMatrix),fe(ae,F,De)};function fe(ae,he,we){we===null?ae.matrix.copy(he.matrixWorld):(ae.matrix.copy(we.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(he.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(he.projectionMatrix),ae.projectionMatrixInverse.copy(he.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=os*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ae){l=ae,f!==null&&(f.fixedFoveation=ae),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ae)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(ae){return p[ae]};let Se=null;function ze(ae,he){if(h=he.getViewerPose(c||o),m=he,h!==null){const we=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let De=!1;we.length!==F.cameras.length&&(F.cameras.length=0,De=!0);for(let T=0;T<we.length;T++){const ee=we[T];let Z=null;if(d!==null)Z=d.getViewport(ee);else{const X=u.getViewSubImage(f,ee);Z=X.viewport,T===0&&(e.setRenderTargetTextures(v,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(v))}let V=b[T];V===void 0&&(V=new Wt,V.layers.enable(T),V.viewport=new ht,b[T]=V),V.matrix.fromArray(ee.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(ee.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Z.x,Z.y,Z.width,Z.height),T===0&&(F.matrix.copy(V.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),De===!0&&F.cameras.push(V)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const T=u.getDepthInformation(we[0]);T&&T.isValid&&T.texture&&g.init(T,i.renderState)}if(ye&&ye.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let T=0;T<we.length;T++){const ee=we[T].camera;if(ee){let Z=p[ee];Z||(Z=new qh,p[ee]=Z);const V=u.getCameraImage(ee);Z.sourceTexture=V}}}}for(let we=0;we<E.length;we++){const De=I[we],ye=E[we];De!==null&&ye!==void 0&&ye.update(De,he,c||o)}Se&&Se(ae,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),m=null}const Fe=new au;Fe.setAnimationLoop(ze),this.setAnimationLoop=function(ae){Se=ae},this.dispose=function(){}}}const _i=new ci,zx=new je;function kx(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Uh(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,M,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===1&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===1&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),_=M.envMap,v=M.envMapRotation;_&&(g.envMap.value=_,_i.copy(v),_i.x*=-1,_i.y*=-1,_i.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),g.envMapRotation.value.setFromMatrix4(zx.makeRotationFromEuler(_i)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gx(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){const v=_.program;n.uniformBlockBinding(M,v)}function c(M,_){let v=i[M.id];v===void 0&&(m(M),v=h(M),i[M.id]=v,M.addEventListener("dispose",g));const E=_.program;n.updateUBOMapping(M,E);const I=e.render.frame;r[M.id]!==I&&(f(M),r[M.id]=I)}function h(M){const _=u();M.__bindingPointIndex=_;const v=s.createBuffer(),E=M.__size,I=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,E,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const _=i[M.id],v=M.uniforms,E=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let I=0,C=v.length;I<C;I++){const U=Array.isArray(v[I])?v[I]:[v[I]];for(let w=0,S=U.length;w<S;w++){const b=U[w];if(d(b,I,w,E)===!0){const F=b.__offset,P=Array.isArray(b.value)?b.value:[b.value];let L=0;for(let A=0;A<P.length;A++){const N=P[A],H=x(N);typeof N=="number"||typeof N=="boolean"?(b.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,F+L,b.__data)):N.isMatrix3?(b.__data[0]=N.elements[0],b.__data[1]=N.elements[1],b.__data[2]=N.elements[2],b.__data[3]=0,b.__data[4]=N.elements[3],b.__data[5]=N.elements[4],b.__data[6]=N.elements[5],b.__data[7]=0,b.__data[8]=N.elements[6],b.__data[9]=N.elements[7],b.__data[10]=N.elements[8],b.__data[11]=0):(N.toArray(b.__data,L),L+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,b.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,_,v,E){const I=M.value,C=_+"_"+v;if(E[C]===void 0)return typeof I=="number"||typeof I=="boolean"?E[C]=I:E[C]=I.clone(),!0;{const U=E[C];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return E[C]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function m(M){const _=M.uniforms;let v=0;const E=16;for(let C=0,U=_.length;C<U;C++){const w=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,b=w.length;S<b;S++){const F=w[S],P=Array.isArray(F.value)?F.value:[F.value];for(let L=0,A=P.length;L<A;L++){const N=P[L],H=x(N),G=v%E,O=G%H.boundary,q=G+O;v+=O,q!==0&&E-q<H.storage&&(v+=E-q),F.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=H.storage}}}const I=v%E;return I>0&&(v+=E-I),M.__size=v,M.__cache={},this}function x(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){const _=M.target;_.removeEventListener("dispose",g);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Vx{constructor(e={}){const{canvas:t=pf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const M=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=Pt;let I=0,C=0,U=null,w=-1,S=null;const b=new ht,F=new ht;let P=null;const L=new Ye(0);let A=0,N=t.width,H=t.height,G=1,O=null,q=null;const K=new ht(0,0,N,H),fe=new ht(0,0,N,H);let Se=!1;const ze=new Na;let Fe=!1,ae=!1;const he=new je,we=new z,De=new ht,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function oe(){return U===null?G:1}let T=n;function ee(D,J){return t.getContext(D,J)}try{const D={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r180"),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",me,!1),T===null){const J="webgl2";if(T=ee(J,D),T===null)throw ee(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Z,V,X,ie,ne,k,Y,$,R,y,W,j,se,te,xe,pe,_e,Te,ge,Ee,He,Oe,Ae,Ze;function B(){Z=new J0(T),Z.init(),Oe=new Nx(T,Z),V=new X0(T,Z,e,Oe),X=new Lx(T,Z),V.reversedDepthBuffer&&f&&X.buffers.depth.setReversed(!0),ie=new tg(T),ne=new vx,k=new Dx(T,Z,X,ne,V,Oe,ie),Y=new $0(v),$=new Z0(v),R=new ap(T),Ae=new H0(T,R),y=new Q0(T,R,ie,Ae),W=new ig(T,y,R,ie),ge=new ng(T,V,k),pe=new q0(ne),j=new _x(v,Y,$,Z,V,Ae,pe),se=new kx(v,ne),te=new Mx,xe=new Ax(Z),Te=new V0(v,Y,$,X,W,d,l),_e=new Px(v,W,V),Ze=new Gx(T,ie,V,X),Ee=new W0(T,Z,ie),He=new eg(T,Z,ie),ie.programs=j.programs,v.capabilities=V,v.extensions=Z,v.properties=ne,v.renderLists=te,v.shadowMap=_e,v.state=X,v.info=ie}B();const re=new Ox(v,T);this.xr=re,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const D=Z.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Z.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(D){D!==void 0&&(G=D,this.setSize(N,H,!1))},this.getSize=function(D){return D.set(N,H)},this.setSize=function(D,J,le=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=D,H=J,t.width=Math.floor(D*G),t.height=Math.floor(J*G),le===!0&&(t.style.width=D+"px",t.style.height=J+"px"),this.setViewport(0,0,D,J)},this.getDrawingBufferSize=function(D){return D.set(N*G,H*G).floor()},this.setDrawingBufferSize=function(D,J,le){N=D,H=J,G=le,t.width=Math.floor(D*le),t.height=Math.floor(J*le),this.setViewport(0,0,D,J)},this.getCurrentViewport=function(D){return D.copy(b)},this.getViewport=function(D){return D.copy(K)},this.setViewport=function(D,J,le,ce){D.isVector4?K.set(D.x,D.y,D.z,D.w):K.set(D,J,le,ce),X.viewport(b.copy(K).multiplyScalar(G).round())},this.getScissor=function(D){return D.copy(fe)},this.setScissor=function(D,J,le,ce){D.isVector4?fe.set(D.x,D.y,D.z,D.w):fe.set(D,J,le,ce),X.scissor(F.copy(fe).multiplyScalar(G).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(D){X.setScissorTest(Se=D)},this.setOpaqueSort=function(D){O=D},this.setTransparentSort=function(D){q=D},this.getClearColor=function(D){return D.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(D=!0,J=!0,le=!0){let ce=0;if(D){let Q=!1;if(U!==null){const ve=U.texture.format;Q=ve===1033||ve===1031||ve===1029}if(Q){const ve=U.texture.type,Ce=ve===1009||ve===1014||ve===1012||ve===1020||ve===1017||ve===1018,Be=Te.getClearColor(),Ne=Te.getClearAlpha(),qe=Be.r,$e=Be.g,Ge=Be.b;Ce?(m[0]=qe,m[1]=$e,m[2]=Ge,m[3]=Ne,T.clearBufferuiv(T.COLOR,0,m)):(x[0]=qe,x[1]=$e,x[2]=Ge,x[3]=Ne,T.clearBufferiv(T.COLOR,0,x))}else ce|=T.COLOR_BUFFER_BIT}J&&(ce|=T.DEPTH_BUFFER_BIT),le&&(ce|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Te.dispose(),te.dispose(),xe.dispose(),ne.dispose(),Y.dispose(),$.dispose(),W.dispose(),Ae.dispose(),Ze.dispose(),j.dispose(),re.dispose(),re.removeEventListener("sessionstart",zt),re.removeEventListener("sessionend",il),ui.stop()};function de(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const D=ie.autoReset,J=_e.enabled,le=_e.autoUpdate,ce=_e.needsUpdate,Q=_e.type;B(),ie.autoReset=D,_e.enabled=J,_e.autoUpdate=le,_e.needsUpdate=ce,_e.type=Q}function me(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ue(D){const J=D.target;J.removeEventListener("dispose",ue),Pe(J)}function Pe(D){ke(D),ne.remove(D)}function ke(D){const J=ne.get(D).programs;J!==void 0&&(J.forEach(function(le){j.releaseProgram(le)}),D.isShaderMaterial&&j.releaseShaderCache(D))}this.renderBufferDirect=function(D,J,le,ce,Q,ve){J===null&&(J=ye);const Ce=Q.isMesh&&Q.matrixWorld.determinant()<0,Be=Wu(D,J,le,ce,Q);X.setMaterial(ce,Ce);let Ne=le.index,qe=1;if(ce.wireframe===!0){if(Ne=y.getWireframeAttribute(le),Ne===void 0)return;qe=2}const $e=le.drawRange,Ge=le.attributes.position;let it=$e.start*qe,ut=($e.start+$e.count)*qe;ve!==null&&(it=Math.max(it,ve.start*qe),ut=Math.min(ut,(ve.start+ve.count)*qe)),Ne!==null?(it=Math.max(it,0),ut=Math.min(ut,Ne.count)):Ge!=null&&(it=Math.max(it,0),ut=Math.min(ut,Ge.count));const Mt=ut-it;if(Mt<0||Mt===1/0)return;Ae.setup(Q,ce,Be,le,Ne);let mt,dt=Ee;if(Ne!==null&&(mt=R.get(Ne),dt=He,dt.setIndex(mt)),Q.isMesh)ce.wireframe===!0?(X.setLineWidth(ce.wireframeLinewidth*oe()),dt.setMode(T.LINES)):dt.setMode(T.TRIANGLES);else if(Q.isLine){let We=ce.linewidth;We===void 0&&(We=1),X.setLineWidth(We*oe()),Q.isLineSegments?dt.setMode(T.LINES):Q.isLineLoop?dt.setMode(T.LINE_LOOP):dt.setMode(T.LINE_STRIP)}else Q.isPoints?dt.setMode(T.POINTS):Q.isSprite&&dt.setMode(T.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Ws("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))dt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const We=Q._multiDrawStarts,_t=Q._multiDrawCounts,ot=Q._multiDrawCount,jt=Ne?R.get(Ne).bytesPerElement:1,Di=ne.get(ce).currentProgram.getUniforms();for(let Kt=0;Kt<ot;Kt++)Di.setValue(T,"_gl_DrawID",Kt),dt.render(We[Kt]/jt,_t[Kt])}else if(Q.isInstancedMesh)dt.renderInstances(it,Mt,Q.count);else if(le.isInstancedBufferGeometry){const We=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,_t=Math.min(le.instanceCount,We);dt.renderInstances(it,Mt,_t)}else dt.render(it,Mt)};function Qe(D,J,le){D.transparent===!0&&D.side===2&&D.forceSinglePass===!1?(D.side=1,D.needsUpdate=!0,nr(D,J,le),D.side=0,D.needsUpdate=!0,nr(D,J,le),D.side=2):nr(D,J,le)}this.compile=function(D,J,le=null){le===null&&(le=D),p=xe.get(le),p.init(J),_.push(p),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),D!==le&&D.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),p.setupLights();const ce=new Set;return D.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const ve=Q.material;if(ve)if(Array.isArray(ve))for(let Ce=0;Ce<ve.length;Ce++){const Be=ve[Ce];Qe(Be,le,Q),ce.add(Be)}else Qe(ve,le,Q),ce.add(ve)}),p=_.pop(),ce},this.compileAsync=function(D,J,le=null){const ce=this.compile(D,J,le);return new Promise(Q=>{function ve(){if(ce.forEach(function(Ce){ne.get(Ce).currentProgram.isReady()&&ce.delete(Ce)}),ce.size===0){Q(D);return}setTimeout(ve,10)}Z.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let st=null;function Yt(D){st&&st(D)}function zt(){ui.stop()}function il(){ui.start()}const ui=new au;ui.setAnimationLoop(Yt),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(D){st=D,re.setAnimationLoop(D),D===null?ui.stop():ui.start()},re.addEventListener("sessionstart",zt),re.addEventListener("sessionend",il),this.render=function(D,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(J),J=re.getCamera()),D.isScene===!0&&D.onBeforeRender(v,D,J,U),p=xe.get(D,_.length),p.init(J),_.push(p),he.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),ze.setFromProjectionMatrix(he,2e3,J.reversedDepth),ae=this.localClippingEnabled,Fe=pe.init(this.clippingPlanes,ae),g=te.get(D,M.length),g.init(),M.push(g),re.enabled===!0&&re.isPresenting===!0){const ve=v.xr.getDepthSensingMesh();ve!==null&&uo(ve,J,-1/0,v.sortObjects)}uo(D,J,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(O,q),Ve=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ve&&Te.addToRenderList(g,D),this.info.render.frame++,Fe===!0&&pe.beginShadows();const le=p.state.shadowsArray;_e.render(le,D,J),Fe===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=g.opaque,Q=g.transmissive;if(p.setupLights(),J.isArrayCamera){const ve=J.cameras;if(Q.length>0)for(let Ce=0,Be=ve.length;Ce<Be;Ce++){const Ne=ve[Ce];rl(ce,Q,D,Ne)}Ve&&Te.render(D);for(let Ce=0,Be=ve.length;Ce<Be;Ce++){const Ne=ve[Ce];sl(g,D,Ne,Ne.viewport)}}else Q.length>0&&rl(ce,Q,D,J),Ve&&Te.render(D),sl(g,D,J);U!==null&&C===0&&(k.updateMultisampleRenderTarget(U),k.updateRenderTargetMipmap(U)),D.isScene===!0&&D.onAfterRender(v,D,J),Ae.resetDefaultState(),w=-1,S=null,_.pop(),_.length>0?(p=_[_.length-1],Fe===!0&&pe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function uo(D,J,le,ce){if(D.visible===!1)return;if(D.layers.test(J.layers)){if(D.isGroup)le=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(J);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ze.intersectsSprite(D)){ce&&De.setFromMatrixPosition(D.matrixWorld).applyMatrix4(he);const Ce=W.update(D),Be=D.material;Be.visible&&g.push(D,Ce,Be,le,De.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ze.intersectsObject(D))){const Ce=W.update(D),Be=D.material;if(ce&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),De.copy(D.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),De.copy(Ce.boundingSphere.center)),De.applyMatrix4(D.matrixWorld).applyMatrix4(he)),Array.isArray(Be)){const Ne=Ce.groups;for(let qe=0,$e=Ne.length;qe<$e;qe++){const Ge=Ne[qe],it=Be[Ge.materialIndex];it&&it.visible&&g.push(D,Ce,it,le,De.z,Ge)}}else Be.visible&&g.push(D,Ce,Be,le,De.z,null)}}const ve=D.children;for(let Ce=0,Be=ve.length;Ce<Be;Ce++)uo(ve[Ce],J,le,ce)}function sl(D,J,le,ce){const Q=D.opaque,ve=D.transmissive,Ce=D.transparent;p.setupLightsView(le),Fe===!0&&pe.setGlobalState(v.clippingPlanes,le),ce&&X.viewport(b.copy(ce)),Q.length>0&&tr(Q,J,le),ve.length>0&&tr(ve,J,le),Ce.length>0&&tr(Ce,J,le),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function rl(D,J,le,ce){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ce.id]===void 0&&(p.state.transmissionRenderTarget[ce.id]=new Ci(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const ve=p.state.transmissionRenderTarget[ce.id],Ce=ce.viewport||b;ve.setSize(Ce.z*v.transmissionResolutionScale,Ce.w*v.transmissionResolutionScale);const Be=v.getRenderTarget(),Ne=v.getActiveCubeFace(),qe=v.getActiveMipmapLevel();v.setRenderTarget(ve),v.getClearColor(L),A=v.getClearAlpha(),A<1&&v.setClearColor(16777215,.5),v.clear(),Ve&&Te.render(le);const $e=v.toneMapping;v.toneMapping=0;const Ge=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),p.setupLightsView(ce),Fe===!0&&pe.setGlobalState(v.clippingPlanes,ce),tr(D,le,ce),k.updateMultisampleRenderTarget(ve),k.updateRenderTargetMipmap(ve),Z.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let ut=0,Mt=J.length;ut<Mt;ut++){const mt=J[ut],dt=mt.object,We=mt.geometry,_t=mt.material,ot=mt.group;if(_t.side===2&&dt.layers.test(ce.layers)){const jt=_t.side;_t.side=1,_t.needsUpdate=!0,ol(dt,le,ce,We,_t,ot),_t.side=jt,_t.needsUpdate=!0,it=!0}}it===!0&&(k.updateMultisampleRenderTarget(ve),k.updateRenderTargetMipmap(ve))}v.setRenderTarget(Be,Ne,qe),v.setClearColor(L,A),Ge!==void 0&&(ce.viewport=Ge),v.toneMapping=$e}function tr(D,J,le){const ce=J.isScene===!0?J.overrideMaterial:null;for(let Q=0,ve=D.length;Q<ve;Q++){const Ce=D[Q],Be=Ce.object,Ne=Ce.geometry,qe=Ce.group;let $e=Ce.material;$e.allowOverride===!0&&ce!==null&&($e=ce),Be.layers.test(le.layers)&&ol(Be,J,le,Ne,$e,qe)}}function ol(D,J,le,ce,Q,ve){D.onBeforeRender(v,J,le,ce,Q,ve),D.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Q.onBeforeRender(v,J,le,ce,D,ve),Q.transparent===!0&&Q.side===2&&Q.forceSinglePass===!1?(Q.side=1,Q.needsUpdate=!0,v.renderBufferDirect(le,J,ce,Q,D,ve),Q.side=0,Q.needsUpdate=!0,v.renderBufferDirect(le,J,ce,Q,D,ve),Q.side=2):v.renderBufferDirect(le,J,ce,Q,D,ve),D.onAfterRender(v,J,le,ce,Q,ve)}function nr(D,J,le){J.isScene!==!0&&(J=ye);const ce=ne.get(D),Q=p.state.lights,ve=p.state.shadowsArray,Ce=Q.state.version,Be=j.getParameters(D,Q.state,ve,J,le),Ne=j.getProgramCacheKey(Be);let qe=ce.programs;ce.environment=D.isMeshStandardMaterial?J.environment:null,ce.fog=J.fog,ce.envMap=(D.isMeshStandardMaterial?$:Y).get(D.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&D.envMap===null?J.environmentRotation:D.envMapRotation,qe===void 0&&(D.addEventListener("dispose",ue),qe=new Map,ce.programs=qe);let $e=qe.get(Ne);if($e!==void 0){if(ce.currentProgram===$e&&ce.lightsStateVersion===Ce)return ll(D,Be),$e}else Be.uniforms=j.getUniforms(D),D.onBeforeCompile(Be,v),$e=j.acquireProgram(Be,Ne),qe.set(Ne,$e),ce.uniforms=Be.uniforms;const Ge=ce.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ge.clippingPlanes=pe.uniform),ll(D,Be),ce.needsLights=qu(D),ce.lightsStateVersion=Ce,ce.needsLights&&(Ge.ambientLightColor.value=Q.state.ambient,Ge.lightProbe.value=Q.state.probe,Ge.directionalLights.value=Q.state.directional,Ge.directionalLightShadows.value=Q.state.directionalShadow,Ge.spotLights.value=Q.state.spot,Ge.spotLightShadows.value=Q.state.spotShadow,Ge.rectAreaLights.value=Q.state.rectArea,Ge.ltc_1.value=Q.state.rectAreaLTC1,Ge.ltc_2.value=Q.state.rectAreaLTC2,Ge.pointLights.value=Q.state.point,Ge.pointLightShadows.value=Q.state.pointShadow,Ge.hemisphereLights.value=Q.state.hemi,Ge.directionalShadowMap.value=Q.state.directionalShadowMap,Ge.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ge.spotShadowMap.value=Q.state.spotShadowMap,Ge.spotLightMatrix.value=Q.state.spotLightMatrix,Ge.spotLightMap.value=Q.state.spotLightMap,Ge.pointShadowMap.value=Q.state.pointShadowMap,Ge.pointShadowMatrix.value=Q.state.pointShadowMatrix),ce.currentProgram=$e,ce.uniformsList=null,$e}function al(D){if(D.uniformsList===null){const J=D.currentProgram.getUniforms();D.uniformsList=Wr.seqWithValue(J.seq,D.uniforms)}return D.uniformsList}function ll(D,J){const le=ne.get(D);le.outputColorSpace=J.outputColorSpace,le.batching=J.batching,le.batchingColor=J.batchingColor,le.instancing=J.instancing,le.instancingColor=J.instancingColor,le.instancingMorph=J.instancingMorph,le.skinning=J.skinning,le.morphTargets=J.morphTargets,le.morphNormals=J.morphNormals,le.morphColors=J.morphColors,le.morphTargetsCount=J.morphTargetsCount,le.numClippingPlanes=J.numClippingPlanes,le.numIntersection=J.numClipIntersection,le.vertexAlphas=J.vertexAlphas,le.vertexTangents=J.vertexTangents,le.toneMapping=J.toneMapping}function Wu(D,J,le,ce,Q){J.isScene!==!0&&(J=ye),k.resetTextureUnits();const ve=J.fog,Ce=ce.isMeshStandardMaterial?J.environment:null,Be=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Xt,Ne=(ce.isMeshStandardMaterial?$:Y).get(ce.envMap||Ce),qe=ce.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,$e=!!le.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Ge=!!le.morphAttributes.position,it=!!le.morphAttributes.normal,ut=!!le.morphAttributes.color;let Mt=0;ce.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const mt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,dt=mt!==void 0?mt.length:0,We=ne.get(ce),_t=p.state.lights;if(Fe===!0&&(ae===!0||D!==S)){const kt=D===S&&ce.id===w;pe.setState(ce,D,kt)}let ot=!1;ce.version===We.__version?(We.needsLights&&We.lightsStateVersion!==_t.state.version||We.outputColorSpace!==Be||Q.isBatchedMesh&&We.batching===!1||!Q.isBatchedMesh&&We.batching===!0||Q.isBatchedMesh&&We.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&We.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&We.instancing===!1||!Q.isInstancedMesh&&We.instancing===!0||Q.isSkinnedMesh&&We.skinning===!1||!Q.isSkinnedMesh&&We.skinning===!0||Q.isInstancedMesh&&We.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&We.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&We.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&We.instancingMorph===!1&&Q.morphTexture!==null||We.envMap!==Ne||ce.fog===!0&&We.fog!==ve||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==pe.numPlanes||We.numIntersection!==pe.numIntersection)||We.vertexAlphas!==qe||We.vertexTangents!==$e||We.morphTargets!==Ge||We.morphNormals!==it||We.morphColors!==ut||We.toneMapping!==Mt||We.morphTargetsCount!==dt)&&(ot=!0):(ot=!0,We.__version=ce.version);let jt=We.currentProgram;ot===!0&&(jt=nr(ce,J,Q));let Di=!1,Kt=!1,vs=!1;const vt=jt.getUniforms(),nn=We.uniforms;if(X.useProgram(jt.program)&&(Di=!0,Kt=!0,vs=!0),ce.id!==w&&(w=ce.id,Kt=!0),Di||S!==D){X.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),vt.setValue(T,"projectionMatrix",D.projectionMatrix),vt.setValue(T,"viewMatrix",D.matrixWorldInverse);const $t=vt.map.cameraPosition;$t!==void 0&&$t.setValue(T,we.setFromMatrixPosition(D.matrixWorld)),V.logarithmicDepthBuffer&&vt.setValue(T,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&vt.setValue(T,"isOrthographic",D.isOrthographicCamera===!0),S!==D&&(S=D,Kt=!0,vs=!0)}if(Q.isSkinnedMesh){vt.setOptional(T,Q,"bindMatrix"),vt.setOptional(T,Q,"bindMatrixInverse");const kt=Q.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),vt.setValue(T,"boneTexture",kt.boneTexture,k))}Q.isBatchedMesh&&(vt.setOptional(T,Q,"batchingTexture"),vt.setValue(T,"batchingTexture",Q._matricesTexture,k),vt.setOptional(T,Q,"batchingIdTexture"),vt.setValue(T,"batchingIdTexture",Q._indirectTexture,k),vt.setOptional(T,Q,"batchingColorTexture"),Q._colorsTexture!==null&&vt.setValue(T,"batchingColorTexture",Q._colorsTexture,k));const sn=le.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&ge.update(Q,le,jt),(Kt||We.receiveShadow!==Q.receiveShadow)&&(We.receiveShadow=Q.receiveShadow,vt.setValue(T,"receiveShadow",Q.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(nn.envMap.value=Ne,nn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&J.environment!==null&&(nn.envMapIntensity.value=J.environmentIntensity),Kt&&(vt.setValue(T,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&Xu(nn,vs),ve&&ce.fog===!0&&se.refreshFogUniforms(nn,ve),se.refreshMaterialUniforms(nn,ce,G,H,p.state.transmissionRenderTarget[D.id]),Wr.upload(T,al(We),nn,k)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Wr.upload(T,al(We),nn,k),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&vt.setValue(T,"center",Q.center),vt.setValue(T,"modelViewMatrix",Q.modelViewMatrix),vt.setValue(T,"normalMatrix",Q.normalMatrix),vt.setValue(T,"modelMatrix",Q.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const kt=ce.uniformsGroups;for(let $t=0,fo=kt.length;$t<fo;$t++){const fi=kt[$t];Ze.update(fi,jt),Ze.bind(fi,jt)}}return jt}function Xu(D,J){D.ambientLightColor.needsUpdate=J,D.lightProbe.needsUpdate=J,D.directionalLights.needsUpdate=J,D.directionalLightShadows.needsUpdate=J,D.pointLights.needsUpdate=J,D.pointLightShadows.needsUpdate=J,D.spotLights.needsUpdate=J,D.spotLightShadows.needsUpdate=J,D.rectAreaLights.needsUpdate=J,D.hemisphereLights.needsUpdate=J}function qu(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(D,J,le){const ce=ne.get(D);ce.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),ne.get(D.texture).__webglTexture=J,ne.get(D.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:le,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,J){const le=ne.get(D);le.__webglFramebuffer=J,le.__useDefaultFramebuffer=J===void 0};const $u=T.createFramebuffer();this.setRenderTarget=function(D,J=0,le=0){U=D,I=J,C=le;let ce=!0,Q=null,ve=!1,Ce=!1;if(D){const Ne=ne.get(D);if(Ne.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(T.FRAMEBUFFER,null),ce=!1;else if(Ne.__webglFramebuffer===void 0)k.setupRenderTarget(D);else if(Ne.__hasExternalTextures)k.rebindTextures(D,ne.get(D.texture).__webglTexture,ne.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Ge=D.depthTexture;if(Ne.__boundDepthTexture!==Ge){if(Ge!==null&&ne.has(Ge)&&(D.width!==Ge.image.width||D.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(D)}}const qe=D.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ce=!0);const $e=ne.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray($e[J])?Q=$e[J][le]:Q=$e[J],ve=!0):D.samples>0&&k.useMultisampledRTT(D)===!1?Q=ne.get(D).__webglMultisampledFramebuffer:Array.isArray($e)?Q=$e[le]:Q=$e,b.copy(D.viewport),F.copy(D.scissor),P=D.scissorTest}else b.copy(K).multiplyScalar(G).floor(),F.copy(fe).multiplyScalar(G).floor(),P=Se;if(le!==0&&(Q=$u),X.bindFramebuffer(T.FRAMEBUFFER,Q)&&ce&&X.drawBuffers(D,Q),X.viewport(b),X.scissor(F),X.setScissorTest(P),ve){const Ne=ne.get(D.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne.__webglTexture,le)}else if(Ce){const Ne=J;for(let qe=0;qe<D.textures.length;qe++){const $e=ne.get(D.textures[qe]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+qe,$e.__webglTexture,le,Ne)}}else if(D!==null&&le!==0){const Ne=ne.get(D.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ne.__webglTexture,le)}w=-1},this.readRenderTargetPixels=function(D,J,le,ce,Q,ve,Ce,Be=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ne.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){X.bindFramebuffer(T.FRAMEBUFFER,Ne);try{const qe=D.textures[Be],$e=qe.format,Ge=qe.type;if(!V.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=D.width-ce&&le>=0&&le<=D.height-Q&&(D.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Be),T.readPixels(J,le,ce,Q,Oe.convert($e),Oe.convert(Ge),ve))}finally{const qe=U!==null?ne.get(U).__webglFramebuffer:null;X.bindFramebuffer(T.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(D,J,le,ce,Q,ve,Ce,Be=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=ne.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne)if(J>=0&&J<=D.width-ce&&le>=0&&le<=D.height-Q){X.bindFramebuffer(T.FRAMEBUFFER,Ne);const qe=D.textures[Be],$e=qe.format,Ge=qe.type;if(!V.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,it),T.bufferData(T.PIXEL_PACK_BUFFER,ve.byteLength,T.STREAM_READ),D.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Be),T.readPixels(J,le,ce,Q,Oe.convert($e),Oe.convert(Ge),0);const ut=U!==null?ne.get(U).__webglFramebuffer:null;X.bindFramebuffer(T.FRAMEBUFFER,ut);const Mt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await mf(T,Mt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,it),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ve),T.deleteBuffer(it),T.deleteSync(Mt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,J=null,le=0){const ce=Math.pow(2,-le),Q=Math.floor(D.image.width*ce),ve=Math.floor(D.image.height*ce),Ce=J!==null?J.x:0,Be=J!==null?J.y:0;k.setTexture2D(D,0),T.copyTexSubImage2D(T.TEXTURE_2D,le,0,0,Ce,Be,Q,ve),X.unbindTexture()};const Yu=T.createFramebuffer(),ju=T.createFramebuffer();this.copyTextureToTexture=function(D,J,le=null,ce=null,Q=0,ve=null){ve===null&&(Q!==0?(Ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=Q,Q=0):ve=0);let Ce,Be,Ne,qe,$e,Ge,it,ut,Mt;const mt=D.isCompressedTexture?D.mipmaps[ve]:D.image;if(le!==null)Ce=le.max.x-le.min.x,Be=le.max.y-le.min.y,Ne=le.isBox3?le.max.z-le.min.z:1,qe=le.min.x,$e=le.min.y,Ge=le.isBox3?le.min.z:0;else{const sn=Math.pow(2,-Q);Ce=Math.floor(mt.width*sn),Be=Math.floor(mt.height*sn),D.isDataArrayTexture?Ne=mt.depth:D.isData3DTexture?Ne=Math.floor(mt.depth*sn):Ne=1,qe=0,$e=0,Ge=0}ce!==null?(it=ce.x,ut=ce.y,Mt=ce.z):(it=0,ut=0,Mt=0);const dt=Oe.convert(J.format),We=Oe.convert(J.type);let _t;J.isData3DTexture?(k.setTexture3D(J,0),_t=T.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(k.setTexture2DArray(J,0),_t=T.TEXTURE_2D_ARRAY):(k.setTexture2D(J,0),_t=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,J.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,J.unpackAlignment);const ot=T.getParameter(T.UNPACK_ROW_LENGTH),jt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Di=T.getParameter(T.UNPACK_SKIP_PIXELS),Kt=T.getParameter(T.UNPACK_SKIP_ROWS),vs=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,mt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,mt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,qe),T.pixelStorei(T.UNPACK_SKIP_ROWS,$e),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ge);const vt=D.isDataArrayTexture||D.isData3DTexture,nn=J.isDataArrayTexture||J.isData3DTexture;if(D.isDepthTexture){const sn=ne.get(D),kt=ne.get(J),$t=ne.get(sn.__renderTarget),fo=ne.get(kt.__renderTarget);X.bindFramebuffer(T.READ_FRAMEBUFFER,$t.__webglFramebuffer),X.bindFramebuffer(T.DRAW_FRAMEBUFFER,fo.__webglFramebuffer);for(let fi=0;fi<Ne;fi++)vt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ne.get(D).__webglTexture,Q,Ge+fi),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ne.get(J).__webglTexture,ve,Mt+fi)),T.blitFramebuffer(qe,$e,Ce,Be,it,ut,Ce,Be,T.DEPTH_BUFFER_BIT,T.NEAREST);X.bindFramebuffer(T.READ_FRAMEBUFFER,null),X.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(Q!==0||D.isRenderTargetTexture||ne.has(D)){const sn=ne.get(D),kt=ne.get(J);X.bindFramebuffer(T.READ_FRAMEBUFFER,Yu),X.bindFramebuffer(T.DRAW_FRAMEBUFFER,ju);for(let $t=0;$t<Ne;$t++)vt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,sn.__webglTexture,Q,Ge+$t):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,sn.__webglTexture,Q),nn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,kt.__webglTexture,ve,Mt+$t):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,kt.__webglTexture,ve),Q!==0?T.blitFramebuffer(qe,$e,Ce,Be,it,ut,Ce,Be,T.COLOR_BUFFER_BIT,T.NEAREST):nn?T.copyTexSubImage3D(_t,ve,it,ut,Mt+$t,qe,$e,Ce,Be):T.copyTexSubImage2D(_t,ve,it,ut,qe,$e,Ce,Be);X.bindFramebuffer(T.READ_FRAMEBUFFER,null),X.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else nn?D.isDataTexture||D.isData3DTexture?T.texSubImage3D(_t,ve,it,ut,Mt,Ce,Be,Ne,dt,We,mt.data):J.isCompressedArrayTexture?T.compressedTexSubImage3D(_t,ve,it,ut,Mt,Ce,Be,Ne,dt,mt.data):T.texSubImage3D(_t,ve,it,ut,Mt,Ce,Be,Ne,dt,We,mt):D.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,ve,it,ut,Ce,Be,dt,We,mt.data):D.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,ve,it,ut,mt.width,mt.height,dt,mt.data):T.texSubImage2D(T.TEXTURE_2D,ve,it,ut,Ce,Be,dt,We,mt);T.pixelStorei(T.UNPACK_ROW_LENGTH,ot),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,jt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Di),T.pixelStorei(T.UNPACK_SKIP_ROWS,Kt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,vs),ve===0&&J.generateMipmaps&&T.generateMipmap(_t),X.unbindTexture()},this.initRenderTarget=function(D){ne.get(D).__webglFramebuffer===void 0&&k.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?k.setTextureCube(D,0):D.isData3DTexture?k.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?k.setTexture2DArray(D,0):k.setTexture2D(D,0),X.unbindTexture()},this.resetState=function(){I=0,C=0,U=null,X.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}function fs(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new pt;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Tc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);const m=Tc(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Tc(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Ot(o,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){const x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Hx(s,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count;let o=0;const a=Object.keys(s.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let M=0,_=a.length;M<_;M++){const v=a[M],E=s.attributes[v];l[v]=new E.constructor(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);const I=s.morphAttributes[v];I&&(c[v]||(c[v]=[]),I.forEach((C,U)=>{const w=new C.array.constructor(C.count*C.itemSize);c[v][U]=new C.constructor(w,C.itemSize,C.normalized)}))}const d=e*.5,m=Math.log10(1/e),x=Math.pow(10,m),g=d*x;for(let M=0;M<r;M++){const _=n?n.getX(M):M;let v="";for(let E=0,I=a.length;E<I;E++){const C=a[E],U=s.getAttribute(C),w=U.itemSize;for(let S=0;S<w;S++)v+=`${~~(U[u[S]](_)*x+g)},`}if(v in t)h.push(t[v]);else{for(let E=0,I=a.length;E<I;E++){const C=a[E],U=s.getAttribute(C),w=s.morphAttributes[C],S=U.itemSize,b=l[C],F=c[C];for(let P=0;P<S;P++){const L=u[P],A=f[P];if(b[A](o,U[L](_)),w)for(let N=0,H=w.length;N<H;N++)F[N][A](o,w[N][L](_))}}t[v]=o,h.push(o),o++}}const p=s.clone();for(const M in s.attributes){const _=l[M];if(p.setAttribute(M,new _.constructor(_.array.slice(0,o*_.itemSize),_.itemSize,_.normalized)),M in c)for(let v=0;v<c[M].length;v++){const E=c[M][v];p.morphAttributes[M][v]=new E.constructor(E.array.slice(0,o*E.itemSize),E.itemSize,E.normalized)}}return p.setIndex(h),p}function Ec(s,e){if(e===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===2||e===1){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===2)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Wx extends xs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jx(t)}),this.register(function(t){return new Kx(t)}),this.register(function(t){return new r_(t)}),this.register(function(t){return new o_(t)}),this.register(function(t){return new a_(t)}),this.register(function(t){return new Jx(t)}),this.register(function(t){return new Qx(t)}),this.register(function(t){return new e_(t)}),this.register(function(t){return new t_(t)}),this.register(function(t){return new Yx(t)}),this.register(function(t){return new n_(t)}),this.register(function(t){return new Zx(t)}),this.register(function(t){return new s_(t)}),this.register(function(t){return new i_(t)}),this.register(function(t){return new qx(t)}),this.register(function(t){return new l_(t)}),this.register(function(t){return new c_(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Gs.extractUrlBase(e);o=Gs.resolveURL(c,this.path)}else o=Gs.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ru(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===fu){try{o[nt.KHR_BINARY_GLTF]=new h_(e)}catch(u){i&&i(u);return}r=JSON.parse(o[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new b_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:o[u]=new $x;break;case nt.KHR_DRACO_MESH_COMPRESSION:o[u]=new u_(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:o[u]=new f_;break;case nt.KHR_MESH_QUANTIZATION:o[u]=new d_;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Xx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class qx{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ye(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Xt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ou(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new $d(h),c.distance=u;break;case"spot":c=new Xd(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Sn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class $x{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return _n}extendParams(e,t,n){const i=[];e.color=new Ye(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Xt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Pt))}return Promise.all(i)}}class Yx{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class jx{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(a,a)}return Promise.all(r)}}class Kx{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Zx{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Jx{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ye(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Xt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Pt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Qx{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class e_{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ye().setRGB(a[0],a[1],a[2],Xt),Promise.all(r)}}class t_{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class n_{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ye().setRGB(a[0],a[1],a[2],Xt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Pt)),Promise.all(r)}}class i_{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class s_{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class r_{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class o_{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class a_{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class l_{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class c_{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==an.TRIANGLES&&c.mode!==an.TRIANGLE_STRIP&&c.mode!==an.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const m of u){const x=new je,g=new z,p=new Yn,M=new z(1,1,1),_=new It(m.geometry,m.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&M.fromBufferAttribute(l.SCALE,v),_.setMatrixAt(v,x.compose(g,p,M));for(const v in l)if(v==="_COLOR_0"){const E=l[v];_.instanceColor=new fa(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,l[v]);xt.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),d.push(_)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const fu="glTF",Rs=12,Ac={JSON:1313821514,BIN:5130562};class h_{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Rs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Rs,r=new DataView(e,Rs);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Ac.JSON){const c=new Uint8Array(e,Rs+o,a);this.content=n.decode(c)}else if(l===Ac.BIN){const c=Rs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class u_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=va[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=va[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],d=ss[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const m in d.attributes){const x=d.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}u(d)},a,c,Xt,f)})})}}class f_{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class d_{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}}class du extends Js{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,m=e*c,x=m-c,g=-2*d+3*f,p=d-f,M=1-g,_=p-f+u;for(let v=0;v!==a;v++){const E=o[x+v+a],I=o[x+v+l]*h,C=o[m+v+a],U=o[m+v]*h;r[v]=M*E+_*I+g*C+p*U}return r}}const p_=new Yn;class m_ extends du{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return p_.fromArray(r).normalize().toArray(r),r}}const an={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rc={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},Cc={33071:1001,33648:1002,10497:1e3},Zo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},va={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},g_={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},Jo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function x_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Xe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),s.DefaultMaterial}function vi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Sn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function __(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function v_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function y_(s){let e;const t=s.extensions&&s.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Qo(t.attributes):e=s.indices+":"+Qo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Qo(s.targets[n]);return e}function Qo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ya(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function M_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const S_=new je;class b_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Xx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Vd(this.options.manager):this.textureLoader=new jd(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ru(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return vi(r,a,i),Sn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Gs.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Zo[i.type],a=ss[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ot(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Zo[i.type],c=ss[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let x,g;if(d&&d!==u){const p=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=t.cache.get(M);_||(x=new c(a,p*d,i.count*d/h),_=new zf(x,d/h),t.cache.add(M,_)),g=new kf(_,l,f%d/h,m)}else a===null?x=new c(i.count*l):x=new c(a,f,i.count*l),g=new Ot(x,l,m);if(i.sparse!==void 0){const p=Zo.SCALAR,M=ss[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,E=new M(o[1],_,i.sparse.count*p),I=new c(o[2],v,i.sparse.count*l);a!==null&&(g=new Ot(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,U=E.length;C<U;C++){const w=E[C];if(g.setX(w,I[C*l]),l>=2&&g.setY(w,I[C*l+1]),l>=3&&g.setZ(w,I[C*l+2]),l>=4&&g.setW(w,I[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Rc[f.magFilter]||1006,h.minFilter=Rc[f.minFilter]||1008,h.wrapS=Cc[f.wrapS]||1e3,h.wrapT=Cc[f.wrapT]||1e3,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==1003&&h.minFilter!==1006,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(x){const g=new qt(x);g.needsUpdate=!0,f(g)}),t.load(Gs.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Sn(u,o),u.userData.mimeType=o.mimeType||M_(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Wh,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Hh,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Xe}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[nt.KHR_MATERIALS_UNLIT]){const u=i[nt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Ye(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Xt),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Pt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=2);const h=r.alphaMode||Jo.OPAQUE;if(h===Jo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Jo.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==_n&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new be(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==_n&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==_n){const u=r.emissiveFactor;a.emissive=new Ye().setRGB(u[0],u[1],u[2],Xt)}return r.emissiveTexture!==void 0&&o!==_n&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Pt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Sn(u,r),t.associations.set(u,{materials:e}),r.extensions&&vi(i,u,r),u})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Pc(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=y_(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Pc(new pt,c,t),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?x_(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,m=h.length;d<m;d++){const x=h[d],g=o[d];let p;const M=c[d];if(g.mode===an.TRIANGLES||g.mode===an.TRIANGLE_STRIP||g.mode===an.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Gh(x,M):new Le(x,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===an.TRIANGLE_STRIP?p.geometry=Ec(p.geometry,1):g.mode===an.TRIANGLE_FAN&&(p.geometry=Ec(p.geometry,2));else if(g.mode===an.LINES)p=new $f(x,M);else if(g.mode===an.LINE_STRIP)p=new Fa(x,M);else if(g.mode===an.LINE_LOOP)p=new Yf(x,M);else if(g.mode===an.POINTS)p=new jf(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&v_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Sn(p,r),g.extensions&&vi(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&vi(i,u[0],r),u[0];const f=new wt;r.extensions&&vi(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(St.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ga(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Sn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const f=new je;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new io(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],m=i.samplers[d.sampler],x=d.target,g=x.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,M=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let _=0,v=f.length;_<v;_++){const E=f[_],I=d[_],C=m[_],U=x[_],w=g[_];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const S=n._createAnimationTracks(E,I,C,U,w);if(S)for(let b=0;b<S.length;b++)p.push(S[b])}const M=new Fd(r,void 0,p);return Sn(M,i),M})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,S_)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Da:c.length>1?h=new wt:c.length===1?h=c[0]:h=new xt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Sn(h,r),r.extensions&&vi(n,h,r),r.matrix!==void 0){const u=new je;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new wt;n.name&&(r.name=i.createUniqueName(n.name)),Sn(r,n),n.extensions&&vi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof An||f instanceof qt)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];si[r.path]===si.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(si[r.path]){case si.weights:c=cs;break;case si.rotation:c=hs;break;case si.translation:case si.scale:c=us;break;default:n.itemSize===1?c=cs:c=us;break}const h=i.interpolation!==void 0?g_[i.interpolation]:2301,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const m=new c(l[f]+"."+si[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ya(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof hs?m_:du;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function w_(s,e,t){const n=e.attributes,i=new jn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),a.normalized){const h=ya(ss[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new z,l=new z;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const x=ya(ss[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Rn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Pc(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=va[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return rt.workingColorSpace!==Xt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),Sn(s,e),w_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?__(s,e.targets,t):s})}function Ys(s=""){return`/focus-hiking/${s.replace(/^\/+/,"")}`}const yn={maxWidth:1920,maxHeight:1200,maxDpr:1.25,exposure:.94,fogNear:170,fogFar:760,assetUrl:Ys("assets/forest.glb"),manifestUrl:Ys("assets/forest.json")},T_={basis:"design",why:"保持同图边界和三条路线；细分到约1.5m并缓和溪岸陡壁，坡面叠加多尺度起伏。",grid:320,horizontalScale:3,creekHalfWidth:1.35,bankWidth:5.5,detailAmplitude:.32},E_={basis:"design",why:"以分枝树冠、交叉枝叶和林冠内部衬片替代规则枝条；按距离分级，减少集显填充。",seed:4419,treeCandidates:1100,leafAlphaTest:.45,nearDistance:45,farDistance:150,tileSize:72,windAmplitude:.055},A_={basis:"design",why:"晴朗初夏侧光，天空环境反射补充林下漫反射，薄雾只表达远景空气。",sunIntensity:2.5,hemisphereIntensity:1.55,exposure:.94,fogNear:170,fogFar:760,shadowSize:2048},R_={basis:"design",why:"四足步态与路程绑定；活动包含停留、低头和缓慢巡游，限定在干地且避开行走障碍。",count:6,speed:.35,stride:.8,surfaceHz:8},C_={basis:"design",why:"原画与现有渲染上限一致；高清／流畅仅减少昂贵的渲染细节，保持同一地图。",original:{},high:{maxWidth:1600,maxHeight:1e3,shadowSize:1536,nearDistance:35,farDistance:130},smooth:{maxWidth:1280,maxHeight:800,shadowSize:1024,nearDistance:24,farDistance:110}},P_={basis:"design",why:"保持项目60FPS目标，不以简化档替代原画验收；新增文件和绘制次数由检查脚本测量。",frameP95Ms:16.7,maxSceneBytes:3e7,maxMainDraws:220,maxMainTriangles:15e5},yi={terrain:T_,vegetation:E_,lighting:A_,animals:R_,quality:C_,budgets:P_};class oo extends Le{constructor(){const e=oo.SkyShader,t=new qn({name:e.name,uniforms:Bh.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:1,depthWrite:!1});super(new wn(1,1,1),t),this.isSky=!0}}oo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new z},up:{value:new z(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const En={buffer:[0,0],texture:[0,0]},Jr=[0,0],pu=new Map,Qr=new Map,eo=(s,e,t)=>{const n=(s.get(e)||0)+t;n?s.set(e,n):s.delete(e)},Dr=typeof FinalizationRegistry=="function"?new FinalizationRegistry(([s,e,t])=>{En[s][0]--,En[s][1]-=e,Jr[0]++,Jr[1]+=e,eo(pu,t,1),eo(Qr,t,-1)}):null;function I_(s){const e=s.size,t=e.width??e[0],n=e.height??e[1]??1,i=e.depthOrArrayLayers??e[2]??1;let r=4;try{r=qa(s.format).bytes}catch{}let o=0;for(let a=0;a<(s.mipLevelCount||1);a++){const l=s.dimension==="3d"?Math.max(1,i>>a):i;o+=Math.max(1,t>>a)*Math.max(1,n>>a)*l*r}return o*(s.sampleCount||1)}function Ic(s,e,t,n){En[e][0]++,En[e][1]+=t;const i={};n=n||"(no label)",eo(Qr,n,1),Dr&&Dr.register(s,[e,t,n],i);const r=s.destroy.bind(s);let o=!1;return s.destroy=()=>{o||(o=!0,En[e][0]--,En[e][1]-=t,eo(Qr,n,-1),Dr&&Dr.unregister(i)),r()},s}function L_(s){const e=s.createBuffer.bind(s),t=s.createTexture.bind(s);s.createBuffer=n=>Ic(e(n),"buffer",n.size,n.label),s.createTexture=n=>Ic(t(n),"texture",I_(n),n.label)}function D_(){return{buffers:En.buffer[0],bufferBytes:En.buffer[1],textures:En.texture[0],textureBytes:En.texture[1],collected:Jr[0],collectedBytes:Jr[1],collectedLabels:Object.fromEntries(pu),labels:Object.fromEntries(Qr)}}const Ue={device:null,queue:null,adapter:null,context:null,canvas:null,format:"bgra8unorm",features:new Set,limits:null,hasTimestamp:!1,hasFloat32Filterable:!1,encoder:null,frame:0,samplers:null,_submitHooks:[],memory:D_,async init({canvas:s=null,requiredLimits:e={},headless:t=!1}={}){if(!navigator.gpu)throw new Error("WebGPU is not available in this browser.");const n=()=>navigator.gpu.requestAdapter({powerPreference:"high-performance"}),i=await n()||await n();if(!i)throw new Error("No WebGPU adapter found.");this.adapter=i;const r=i.limits,o={maxSampledTexturesPerShaderStage:32,maxSamplersPerShaderStage:16,maxStorageBuffersPerShaderStage:10,maxStorageTexturesPerShaderStage:8,maxComputeWorkgroupStorageSize:32768,maxColorAttachmentBytesPerSample:64,maxStorageBuffersInVertexStage:4,maxStorageBuffersInFragmentStage:8,maxStorageTexturesInFragmentStage:4,maxBindingsPerBindGroup:1e3,maxBufferSize:1024*1024*1024,maxStorageBufferBindingSize:512*1024*1024,...e},a={};for(const u in o)r[u]!==void 0&&(a[u]=Math.min(o[u],r[u]));const c=["float32-filterable","timestamp-query","rg11b10ufloat-renderable","float32-blendable","shader-f16","clip-distances"].filter(u=>i.features.has(u));this.features=new Set(c),this.hasTimestamp=this.features.has("timestamp-query"),this.hasFloat32Filterable=this.features.has("float32-filterable");const h=await i.requestDevice({requiredFeatures:c,requiredLimits:a});return L_(h),this.device=h,this.queue=h.queue,this.limits=h.limits,h.lost.then(u=>console.error("WebGPU device lost:",u.message)),h.addEventListener&&h.addEventListener("uncapturederror",u=>console.error("WebGPU:",u.error.message.split(`
`).slice(0,6).join(`
`))),s&&!t&&(this.canvas=s,this.context=s.getContext("webgpu"),this.format=navigator.gpu.getPreferredCanvasFormat(),this.context.configure({device:h,format:this.format,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_DST})),this._createSamplers(),this},_createSamplers(){const s=this.device,e=n=>s.createSampler(n),t={magFilter:"linear",minFilter:"linear",mipmapFilter:"linear"};this.samplers={linearRepeat:e({...t,addressModeU:"repeat",addressModeV:"repeat",addressModeW:"repeat"}),linearClamp:e({...t,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),linearMirror:e({...t,addressModeU:"mirror-repeat",addressModeV:"mirror-repeat",addressModeW:"mirror-repeat"}),anisoRepeat:e({...t,addressModeU:"repeat",addressModeV:"repeat",addressModeW:"repeat",maxAnisotropy:8}),aniso4Repeat:e({...t,addressModeU:"repeat",addressModeV:"repeat",addressModeW:"repeat",maxAnisotropy:4}),anisoClamp:e({...t,addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",maxAnisotropy:8}),nearestClamp:e({magFilter:"nearest",minFilter:"nearest",mipmapFilter:"nearest",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),nearestRepeat:e({magFilter:"nearest",minFilter:"nearest",mipmapFilter:"nearest",addressModeU:"repeat",addressModeV:"repeat",addressModeW:"repeat"}),shadow:e({magFilter:"linear",minFilter:"linear",compare:"less",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"})}},beginFrame(){return this.frame++,this.getEncoder()},getEncoder(){return this.encoder||(this.encoder=this.device.createCommandEncoder()),this.encoder},submit(){if(!this.encoder)return;const s=this._submitHooks;this._submitHooks=[];for(const e of s)e.before&&e.before(this.encoder);this.queue.submit([this.encoder.finish()]),this.encoder=null;for(const e of s)e.after&&e.after()},onSubmit(s,e){this._submitHooks.push({before:s,after:e})},_pending:new Set,syncCompiles:[],renderPipeline(s){return this._async(s,"render")},computePipeline(s){return this._async(s,"compute")},_async(s,e){const t={pipeline:null,label:s.label,desc:s,kind:e,failed:!1},n=Promise.resolve().then(()=>t.pipeline?void 0:(e==="render"?this.device.createRenderPipelineAsync:this.device.createComputePipelineAsync).call(this.device,s).then(r=>{t.pipeline||(t.pipeline=r),t.desc=null},r=>{t.failed=!0,console.error(`WebGPU: pipeline "${s.label}" failed: ${r.message.split(`
`).slice(0,6).join(`
`)}`)})).finally(()=>this._pending.delete(n));return this._pending.add(n),t},ready(s){return s.pipeline||s.failed||(this.syncCompiles.push(s.label),s.pipeline=s.kind==="render"?this.device.createRenderPipeline(s.desc):this.device.createComputePipeline(s.desc)),s.pipeline},async pipelinesReady(){for(;this._pending.size;)await Promise.all([...this._pending])},computePass(s,e,t){const n=this.getEncoder().beginComputePass({label:s,timestampWrites:t});e(n),n.end()}},N_={r8unorm:{bytes:1,sample:"float"},rg8unorm:{bytes:2,sample:"float"},rgba8unorm:{bytes:4,sample:"float"},"rgba8unorm-srgb":{bytes:4,sample:"float"},bgra8unorm:{bytes:4,sample:"float"},r16float:{bytes:2,sample:"float"},rg16float:{bytes:4,sample:"float"},rgba16float:{bytes:8,sample:"float"},rg11b10ufloat:{bytes:4,sample:"float"},r32float:{bytes:4,sample:"unfilterable-float"},rg32float:{bytes:8,sample:"unfilterable-float"},rgba32float:{bytes:16,sample:"unfilterable-float"},r32uint:{bytes:4,sample:"uint"},rg32uint:{bytes:8,sample:"uint"},rgba32uint:{bytes:16,sample:"uint"},r32sint:{bytes:4,sample:"sint"},r8uint:{bytes:1,sample:"uint"},rgba8uint:{bytes:4,sample:"uint"},depth32float:{bytes:4,sample:"depth"},depth24plus:{bytes:4,sample:"depth"},"depth24plus-stencil8":{bytes:4,sample:"depth"}};function qa(s){const e=N_[s];if(!e)throw new Error("Unknown texture format "+s);return e}function F_(s){const e=qa(s).sample;return e==="unfilterable-float"&&Ue.hasFloat32Filterable?"float":e}const Lc={f32:{size:4,align:4,n:1},i32:{size:4,align:4,n:1,int:!0},u32:{size:4,align:4,n:1,uint:!0},vec2f:{size:8,align:8,n:2},vec3f:{size:12,align:16,n:3},vec4f:{size:16,align:16,n:4},vec2i:{size:8,align:8,n:2,int:!0},vec4i:{size:16,align:16,n:4,int:!0},vec2u:{size:8,align:8,n:2,uint:!0},vec4u:{size:16,align:16,n:4,uint:!0},mat3x3f:{size:48,align:16,n:12,mat3:!0},mat4x4f:{size:64,align:16,n:16}};function U_(s){const e=/^(\w+)(?:\[(\d+)\])?$/.exec(s);if(!e||!Lc[e[1]])throw new Error("Unsupported uniform type "+s);const t=Lc[e[1]],n=e[2]?Number(e[2]):0;if(n&&t.align<16)throw new Error(`uniform array ${s}: element must be 16-byte aligned (use vec4f)`);return{name:e[1],base:t,count:n}}function Dc(s,e,t,n,i,r){const{base:o}=i,a=o.int?t:o.uint?e:s;if(typeof r=="number"||typeof r=="boolean"){a[n]=Number(r);return}if(r!=null){if(r.isMatrix4||r.isMatrix3){const l=r.elements;if(o.mat3)if(l.length===9)for(let c=0;c<3;c++)for(let h=0;h<3;h++)s[n+c*4+h]=l[c*3+h];else for(let c=0;c<3;c++)for(let h=0;h<3;h++)s[n+c*4+h]=l[c*4+h];else for(let c=0;c<16;c++)s[n+c]=l[c];return}if(r.isColor){a[n]=r.r,a[n+1]=r.g,a[n+2]=r.b,o.n===4&&(a[n+3]=1);return}if(r.isVector2){a[n]=r.x,a[n+1]=r.y;return}if(r.isVector3){a[n]=r.x,a[n+1]=r.y,a[n+2]=r.z;return}if(r.isVector4||r.isQuaternion){a[n]=r.x,a[n+1]=r.y,a[n+2]=r.z,a[n+3]=r.w;return}if(ArrayBuffer.isView(r)||Array.isArray(r)){for(let l=0;l<Math.min(r.length,o.n);l++)a[n+l]=r[l];return}throw new Error("Cannot write uniform value "+r)}}let B_=0;const O_=new Set;class js{constructor(e,t,{label:n}={}){this.structName=e,this.label=n||e,this.id=B_++,globalThis.__viTrackResources&&O_.add(this),this.layout={},this.fields={},this.order=[];let i=0,r=16;for(const a in t){const l=t[a],c=Array.isArray(l)?l[0]:l,h=Array.isArray(l)?l[1]:void 0,u=U_(c),f=u.base.align;r=Math.max(r,f),i=Math.ceil(i/f)*f;const d=u.count?Math.ceil(u.base.size/16)*16:u.base.size,m=u.count?d*u.count:u.base.size;this.layout[a]={offset:i,type:u,typeStr:c,stride:d,size:m},this.order.push(a),this.fields[a]={value:h!==void 0?h:z_(u)},i+=m}this.byteLength=Math.max(16,Math.ceil(i/r)*r),this.data=new ArrayBuffer(this.byteLength),this.f32=new Float32Array(this.data),this.u32=new Uint32Array(this.data),this.i32=new Int32Array(this.data),this.buffer=null,this.version=0;const o=this;this.values=new Proxy({},{get:(a,l)=>o.fields[l]&&o.fields[l].value,set:(a,l,c)=>(o.set(l,c),!0)})}get wgsl(){let e=`struct ${this.structName} {
`;for(const t of this.order){const{type:n}=this.layout[t];e+=n.count?`	${t}: array<${n.name}, ${n.count}>,
`:`	${t}: ${n.name},
`}return e+`};
`}set(e,t){const n=this.fields[e];if(!n)throw new Error(`${this.structName}: no uniform ${e}`);n.value&&typeof n.value=="object"&&!Array.isArray(n.value)&&n.value.copy&&t&&t.constructor===n.value.constructor?n.value.copy(t):n.value=t}get(e){return this.fields[e].value}_pack(){this.onBeforePack&&this.onBeforePack(this);const{f32:e,u32:t,i32:n,fields:i}=this,r=this._plan||this._makePlan();for(let o=0;o<r.length;o++){const{name:a,o:l,type:c,stride:h,count:u,n:f}=r[o],d=i[a].value;if(typeof d=="number"){(c.base.int?n:c.base.uint?t:e)[l]=d;continue}if(u){if(!d)continue;if(typeof d[0]=="number"){const m=c.base.int?n:c.base.uint?t:e,x=Math.min(u,d.length/f);for(let g=0;g<x;g++){const p=l+g*h,M=g*f,_=Math.min(f,d.length-M);for(let v=0;v<_;v++)m[p+v]=d[M+v]}}else{const m=Math.min(u,d.length);for(let x=0;x<m;x++)Dc(e,t,n,l+x*h,c,d[x])}}else Dc(e,t,n,l,c,d)}}_makePlan(){return this._plan=this.order.map(e=>{const{offset:t,type:n,stride:i}=this.layout[e];return{name:e,o:t/4,type:n,stride:i/4,count:n.count,n:n.base.n}}),this._plan}destroy(){this.buffer&&this.buffer.destroy(),this.buffer=null}getBuffer(){return this.buffer||(this.buffer=Ue.device.createBuffer({label:this.label,size:this.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this._last=new Uint32Array(this.byteLength/4),this._last.fill(4294967295)),this.buffer}upload(e){if(e!==void 0&&e===this._token&&this.buffer)return this.buffer;this._token=e;const t=this.getBuffer();this._pack();const n=this.u32,i=this._last;let r=!1;for(let o=0;o<n.length;o++)if(n[o]!==i[o]){r=!0;break}return r&&(i.set(n),Ue.queue.writeBuffer(t,0,this.data)),t}}function z_(s){return s.count?null:s.base.n===1?0:new Array(s.base.n).fill(0)}const mu=[["smpLinearRepeat","linearRepeat","filtering"],["smpLinearClamp","linearClamp","filtering"],["smpLinearMirror","linearMirror","filtering"],["smpAnisoRepeat","anisoRepeat","filtering"],["smpAnisoClamp","anisoClamp","filtering"],["smpAniso4Repeat","aniso4Repeat","filtering"],["smpNearestClamp","nearestClamp","non-filtering"],["smpNearestRepeat","nearestRepeat","non-filtering"],["smpShadow","shadow","comparison"]];let k_=0;class er{constructor({name:e,deps:t=[],code:n="",bindings:i={},uniforms:r=null,uniformName:o=null}){this.id=k_++,this.name=e||"module"+this.id,this.deps=t.filter(Boolean),this.code=n,this.bindings={...i},r&&(this.bindings[o||G_(r.structName)]={uniform:r}),this.isShaderModule=!0}}function G_(s){return s[0].toLowerCase()+s.slice(1)}function Ma(s){const e=[],t=new Set,n=i=>{if(!(!i||t.has(i))){t.add(i);for(const r of i.deps)n(r);e.push(i)}};for(const i of s)n(i);return e}function Nc(s,e={}){const t=s.split(`
`),n=[],i=[],r=()=>i.length===0||i[i.length-1].active,o=a=>{a=a.trim();let l;if(l=/^!\s*(\w+)$/.exec(a))return!Fc(e[l[1]]);if(l=/^(\w+)\s*(==|!=|>=|<=|>|<)\s*([\w.'"-]+)$/.exec(a)){const c=e[l[1]];let h=l[3].replace(/^['"]|['"]$/g,"");switch(!isNaN(Number(h))&&typeof c=="number"&&(h=Number(h)),l[2]){case"==":return c==h;case"!=":return c!=h;case">=":return c>=h;case"<=":return c<=h;case">":return c>h;case"<":return c<h}}return/\|\|/.test(a)?a.split("||").some(c=>o(c)):/&&/.test(a)?a.split("&&").every(c=>o(c)):Fc(e[a])};for(const a of t){const l=a.trim();let c;if(c=/^#(if|ifdef|ifndef)\s+(.*)$/.exec(l)){const h=r();let u;c[1]==="ifdef"?u=e[c[2].trim()]!==void 0:c[1]==="ifndef"?u=e[c[2].trim()]===void 0:u=o(c[2]),i.push({active:h&&u,taken:u,parent:h});continue}if(c=/^#elif\s+(.*)$/.exec(l)){const h=i[i.length-1],u=!h.taken&&o(c[1]);h.active=h.parent&&u,h.taken=h.taken||u;continue}if(l==="#else"){const h=i[i.length-1];h.active=h.parent&&!h.taken,h.taken=!0;continue}if(l==="#endif"){i.pop();continue}r()&&n.push(a)}if(i.length)throw new Error("preprocess: unterminated #if");return n.join(`
`)}function Fc(s){return s!=null&&s!==!1&&s!==0&&s!=="0"}function xn(s){return typeof s=="function"?s():s}function V_(s,e,t){const n=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,i=t==="compute"?GPUShaderStage.COMPUTE:n;if(e.uniform){const r=e.uniform;return{layout:{visibility:i,buffer:{type:"uniform"}},decl:`var<uniform> ${s}: ${r.structName};`,struct:r}}if(e.uniformBuffer)return{layout:{visibility:i,buffer:{type:"uniform"}},decl:`var<uniform> ${s}: ${e.wgslType};`};if(e.storage){const r=xn(e.storage),o=e.access||"read",a=e.wgslType||`array<${e.type||r.type}>`;return{layout:{visibility:t==="compute"?i:o==="read"?n:GPUShaderStage.FRAGMENT,buffer:{type:o==="read"?"read-only-storage":"storage"}},decl:`var<storage, ${o==="read"?"read":"read_write"}> ${s}: ${a};`}}if(e.storageTexture){const r=xn(e.storageTexture),o=e.access||"write",a=e.viewDimension||e.view?.dimension||r.defaultViewDimension;return{layout:{visibility:t==="compute"?i:GPUShaderStage.FRAGMENT,storageTexture:{access:o==="write"?"write-only":o==="read"?"read-only":"read-write",format:r.format,viewDimension:a}},decl:`var ${s}: texture_storage_${a.replace("-","_")}<${r.format}, ${o}>;`}}if(e.texture){const r=xn(e.texture),o=e.viewDimension||e.view?.dimension||r.defaultViewDimension;let a=e.sampleType||r.sampleType,l=e.wgslType||r.wgslType(o);return e.sampleType==="unfilterable-float"&&r.isDepth&&(l=`texture_${o.replace("-","_")}<f32>`),{layout:{visibility:i,texture:{sampleType:a,viewDimension:o,multisampled:r.sampleCount>1}},decl:`var ${s}: ${l};`}}if(e.sampler)return{layout:{visibility:i,sampler:{type:e.samplerType||"filtering"}},decl:`var ${s}: ${e.samplerType==="comparison"?"sampler_comparison":"sampler"};`};throw new Error(`binding ${s}: unknown spec`)}function H_(s){if(s.uniform)return{buffer:s.uniform.getBuffer()};if(s.uniformBuffer)return{buffer:xn(s.uniformBuffer)};if(s.storage){const e=xn(s.storage),t=e.getGPU?e.getGPU():e;return s.offset!==void 0?{buffer:t,offset:s.offset,size:s.size}:{buffer:t}}if(s.storageTexture)return xn(s.storageTexture).view(s.view||{dimension:s.viewDimension||xn(s.storageTexture).defaultViewDimension,mipLevelCount:1,baseMipLevel:s.mip||0});if(s.texture){const e=xn(s.texture);return s.view||s.viewDimension?e.view({...s.view||{},dimension:s.viewDimension||s.view.dimension}):e.view()}if(s.sampler)return typeof s.sampler=="string"?Ue.samplers[s.sampler]:s.sampler;throw new Error("unknown binding")}const gu=0,xu=1,_u=2,vu=3,W_=4;function X_(s){return s.uniform?gu:s.uniformBuffer?xu:s.storage?_u:s.storageTexture||s.texture?vu:W_}const q_=4,Uc=new Map;function yu(s,e){const t=JSON.stringify(s);let n=Uc.get(t);return n||(n=Ue.device.createBindGroupLayout({label:e,entries:s}),Uc.set(t,n)),n}class $a{constructor(e,t,n="bindings",i=null,r=null){if(this.label=n,this.stage=t,this.names=Object.keys(e),this.specs=e,this.described=this.names.map(a=>V_(a,e[a],t)),i)for(let a=0;a<this.names.length;a++){const l=this.described[a].layout,c=i[this.names[a]];c==="fragment"&&l.visibility&GPUShaderStage.FRAGMENT&&(l.visibility=GPUShaderStage.FRAGMENT),c==="vertex"&&l.visibility&GPUShaderStage.VERTEX&&(l.visibility=GPUShaderStage.VERTEX)}if(r)for(let a=0;a<this.names.length;a++){const l=this.described[a];r.has(this.names[a])&&(l.layout.buffer={type:"read-only-storage"},l.decl=l.decl.replace(/^var<uniform>/,"var<storage, read>"))}this.layout=yu(this.described.map((a,l)=>({binding:l,...a.layout})),n),this.group=null;const o=this.names.length;this._specs=this.names.map(a=>e[a]),this._kinds=this._specs.map(X_),this._blocks=this._specs.filter(a=>a.uniform).map(a=>a.uniform),this._objs=new Array(o).fill(null),this._vers=new Array(o).fill(0),this._entry=null,this._cache=[],this._token=null}declarations(e){return this.described.map((t,n)=>`@group(${e}) @binding(${n}) ${t.decl}`).join(`
`)}structs(){const e=[];for(const t of this.described)t.struct&&!e.includes(t.struct)&&e.push(t.struct);return e}getBindGroup(e){if(e!==void 0&&e===this._token&&this.group)return this.group;this._token=e;const t=this._specs,n=this._kinds,i=this._objs,r=this._vers,o=t.length;for(let h=0;h<o;h++){const u=t[h];let f=null,d=0;switch(n[h]){case gu:f=u.uniform;break;case xu:f=xn(u.uniformBuffer);break;case _u:f=xn(u.storage),f.getGPU&&(f.getGPU(),d=f.version);break;case vu:f=xn(u.storageTexture||u.texture),f&&f.getGPU&&(f.getGPU(),d=f.version);break;default:f=u.sampler}i[h]=f,r[h]=d}const a=this._blocks;for(let h=0;h<a.length;h++)a[h].upload(e);if(this._entry&&this._matches(this._entry))return this.group;const l=this._cache;for(let h=0;h<l.length;h++){const u=l[h];if(!(u===this._entry||!this._matches(u)))return this._entry=u,this.group=u.group,this.group}const c=new Array(o);for(let h=0;h<o;h++)c[h]={binding:h,resource:H_(t[h])};return this.group=Ue.device.createBindGroup({label:this.label,layout:this.layout,entries:c}),this._entry={objs:i.slice(),vers:r.slice(),group:this.group},l.unshift(this._entry),l.length>q_&&l.pop(),this.group}_matches(e){const t=this._objs,n=this._vers,i=e.objs,r=e.vers;for(let o=0;o<t.length;o++)if(t[o]!==i[o]||n[o]!==r[o])return!1;return!0}}let Ya=null,es=null;function $_(s){Ya=s,es=null}function Mu(s){if(es||(es={}),!es[s]){const e={frame:{uniform:Ya}};for(const[t,n,i]of mu)e[t]={sampler:n,samplerType:i};es[s]=new $a(e,s,"group0-"+s)}return es[s]}const Bc=new WeakMap;function Su(s,e="render"){if(s===Ya)return Mu(e);let t=Bc.get(s);if(t||Bc.set(s,t={}),!t[e]){const n={frame:{uniform:s}};for(const[i,r,o]of mu)n[i]={sampler:r,samplerType:o};t[e]=new $a(n,e,"group0-"+s.label)}return t[e]}function bu({modules:s=[],bindings:e={},code:t="",defines:n={},stage:i="render",label:r="shader",header:o=""}){const a=Ma(s),l={};for(const x of a)for(const g in x.bindings){if(l[g]&&l[g]!==x.bindings[g]&&!Y_(l[g],x.bindings[g]))throw new Error(`${r}: binding ${g} declared twice (${x.name})`);l[g]=x.bindings[g]}for(const x in e)l[x]=e[x];let c=null,h=null;if(i==="render"&&/@vertex\s+fn\s+vs\b/.test(t)){let x="";for(const C of a)x+=C.code+`
`;const g=Nc(x+t,n),p=Oc(g,"vs"),M=/@fragment\s+fn\s+fs\b/.test(g)?Oc(g,"fs"):null;c={};for(const C in l)!p.has(C)&&(!M||M.has(C))?c[C]="fragment":M&&!M.has(C)&&p.has(C)&&(c[C]="vertex");h=new Set;const _=Ue.limits||{},v=(_.maxUniformBuffersPerShaderStage||12)-2,E={vertex:_.maxStorageBuffersInVertexStage??4,fragment:_.maxStorageBuffersInFragmentStage??_.maxStorageBuffersPerShaderStage??8},I=(C,U)=>!c[C]||c[C]===U;for(const C of["fragment","vertex"]){const U=Object.keys(l).filter(b=>l[b].uniform&&I(b,C)&&!h.has(b));let w=Object.keys(l).filter(b=>(l[b].storage||h.has(b))&&I(b,C)).length;U.sort((b,F)=>(c[b]===C?0:1)-(c[F]===C?0:1));let S=U.length;for(const b of U){if(S<=v||w>=E[C])break;h.add(b),w++,S--}}}const u=new $a(l,i,r+".g1",c,h),f=Mu(i),d=[...new Set([...f.structs(),...u.structs()])];let m="";Ue.features.has("shader-f16")&&n.F16&&(m+=`enable f16;
`),n.CLIP_DISTANCES&&(m+=`enable clip_distances;
`),/diagnostic\s*\(\s*off\s*,\s*derivative_uniformity/.test(o)||(m+=`diagnostic( off, derivative_uniformity );
`),m+=o,m+=d.map(x=>x.wgsl).join(`
`)+`
`,m+=f.declarations(0)+`
`,m+=u.declarations(1)+`
`;for(const x of a)m+=`// ---- ${x.name}
${x.code}
`;return m+=t,{code:Nc(m,n),bindings:u,group0:f,modules:a}}function Oc(s,e){const t=new Map,n=/\bfn\s+([A-Za-z_]\w*)\s*\(/g;let i;for(;i=n.exec(s);){const l=s.indexOf("{",i.index);if(l<0)break;let c=0,h=l;for(;h<s.length;h++){const f=s[h];if(f==="{")c++;else if(f==="}"&&--c===0)break}(!/@(vertex|fragment|compute)[^;{}]*$/.test(s.slice(Math.max(0,i.index-80),i.index))||i[1]===e)&&t.set(i[1],s.slice(i.index,h+1)),n.lastIndex=h+1}const r=new Set,o=[e],a=new Set;for(;o.length;){const l=o.pop();if(!(a.has(l)||!t.has(l))){a.add(l);for(const c of t.get(l).match(/[A-Za-z_]\w*/g)||[])r.add(c),t.has(c)&&!a.has(c)&&o.push(c)}}return r}function Y_(s,e){const t=Object.keys(s),n=Object.keys(e);return t.length===n.length&&t.every(i=>s[i]===e[i])}const zc=new Map,j_=new Map;function wu(s,e){let t=zc.get(s);return t||(t=Ue.device.createShaderModule({label:e,code:s}),zc.set(s,t),j_.set(s,e),t.getCompilationInfo&&t.getCompilationInfo().then(n=>{const i=n.messages.filter(o=>o.type==="error");if(!i.length)return;const r=s.split(`
`);for(const o of i){const a=Math.max(0,o.lineNum-4),l=Math.min(r.length,o.lineNum+2),c=r.slice(a,l).map((h,u)=>`${a+u+1}${a+u+1===o.lineNum?">":" "} ${h}`).join(`
`);console.error(`WGSL error in ${e} (${o.lineNum}:${o.linePos}): ${o.message}
${c}`)}}),t)}const Ai=new er({name:"common",code:`
const PI: f32 = 3.141592653589793;
const TWO_PI: f32 = 6.283185307179586;
const INV_PI: f32 = 0.3183098861837907;
const EPS: f32 = 1e-5;

fn sat( x: f32 ) -> f32 { return clamp( x, 0.0, 1.0 ); }
fn sat3( x: vec3f ) -> vec3f { return clamp( x, vec3f( 0.0 ), vec3f( 1.0 ) ); }
fn pow2( x: f32 ) -> f32 { return x * x; }
fn pow4( x: f32 ) -> f32 { let y = x * x; return y * y; }
fn pow5( x: f32 ) -> f32 { let y = x * x; return y * y * x; }
fn luminance( c: vec3f ) -> f32 { return dot( c, vec3f( 0.2126, 0.7152, 0.0722 ) ); }
fn remap( x: f32, a: f32, b: f32, c: f32, d: f32 ) -> f32 { return c + ( x - a ) * ( d - c ) / ( b - a ); }
fn remapClamp( x: f32, a: f32, b: f32, c: f32, d: f32 ) -> f32 { return mix( c, d, sat( ( x - a ) / ( b - a ) ) ); }
fn rotate2( v: vec2f, a: f32 ) -> vec2f { let c = cos( a ); let s = sin( a ); return vec2f( c * v.x - s * v.y, s * v.x + c * v.y ); }

// ---- depth (reversed-Z: 1 at the near plane, 0 at far / infinity)

// positive view-space distance along the view axis from a depth-buffer value
fn viewDepth( d: f32 ) -> f32 {
	let v = frame.invProj * vec4f( 0.0, 0.0, d, 1.0 );
	return - v.z / v.w;
}

// uv (0..1, y down) + depth -> world / view position
fn ndcFromUv( uv: vec2f, d: f32 ) -> vec4f { return vec4f( uv.x * 2.0 - 1.0, 1.0 - uv.y * 2.0, d, 1.0 ); }
fn worldFromDepth( uv: vec2f, d: f32 ) -> vec3f {
	let p = frame.invViewProj * ndcFromUv( uv, d );
	return p.xyz / p.w;
}
fn viewFromDepth( uv: vec2f, d: f32 ) -> vec3f {
	let p = frame.invProj * ndcFromUv( uv, d );
	return p.xyz / p.w;
}
// world direction of the camera ray through uv
fn viewRay( uv: vec2f ) -> vec3f {
	let p = frame.invViewProj * ndcFromUv( uv, 0.5 );
	return normalize( p.xyz / p.w - frame.cameraPos );
}
// world position -> uv (y down) and depth
fn projectToUv( P: vec3f ) -> vec3f {
	let c = frame.viewProjNoJitter * vec4f( P, 1.0 );
	let n = c.xyz / c.w;
	return vec3f( n.x * 0.5 + 0.5, 0.5 - n.y * 0.5, n.z );
}
fn isSky( d: f32 ) -> bool { return d <= 0.0; }

// ---- hashes

fn pcg( v: u32 ) -> u32 {
	let state = v * 747796405u + 2891336453u;
	let word = ( ( state >> ( ( state >> 28u ) + 4u ) ) ^ state ) * 277803737u;
	return ( word >> 22u ) ^ word;
}
fn pcg3( v0: vec3u ) -> vec3u {
	var v = v0 * 1664525u + 1013904223u;
	v.x += v.y * v.z; v.y += v.z * v.x; v.z += v.x * v.y;
	v ^= v >> vec3u( 16u );
	v.x += v.y * v.z; v.y += v.z * v.x; v.z += v.x * v.y;
	return v;
}
fn u32ToUnit( h: u32 ) -> f32 { return f32( h >> 8u ) * ( 1.0 / 16777216.0 ) + ( 0.5 / 16777216.0 ); }
// float hash in [0, 1) of a float seed (TSL hash())
fn hash11( p: f32 ) -> f32 { return u32ToUnit( pcg( bitcast<u32>( p ) ^ 0x9e3779b9u ) ); }
fn hash21( p: vec2f ) -> f32 { return u32ToUnit( pcg( bitcast<u32>( p.x ) ^ pcg( bitcast<u32>( p.y ) ) ) ); }
fn hash31( p: vec3f ) -> f32 { return u32ToUnit( pcg3( bitcast<vec3u>( p ) ).x ); }
fn hash22( p: vec2f ) -> vec2f {
	let h = pcg3( vec3u( bitcast<vec2u>( p ), 0x51ed270bu ) );
	return vec2f( u32ToUnit( h.x ), u32ToUnit( h.y ) );
}
fn hash33( p: vec3f ) -> vec3f {
	let h = pcg3( bitcast<vec3u>( p ) );
	return vec3f( u32ToUnit( h.x ), u32ToUnit( h.y ), u32ToUnit( h.z ) );
}
fn hashU( a: u32, b: u32 ) -> f32 { return u32ToUnit( pcg( a ^ pcg( b ) ) ); }
fn ihash3( p: vec3i ) -> vec3u { return pcg3( bitcast<vec3u>( p ) ); }

// Jimenez interleaved gradient noise at a pixel (0..1)
fn interleavedGradientNoise( px: vec2f ) -> f32 { return fract( 52.9829189 * fract( dot( px, vec2f( 0.06711056, 0.00583715 ) ) ) ); }

// i-th of n points of a Vogel disc (unit radius), rotated by phi
fn vogelDiskSample( i: i32, n: i32, phi: f32 ) -> vec2f {
	let r = sqrt( ( f32( i ) + 0.5 ) / f32( n ) );
	let theta = f32( i ) * 2.399963229728653 + phi;
	return vec2f( cos( theta ), sin( theta ) ) * r;
}

// ---- gradient noise: MaterialX (three's MaterialXNoise.js) bit for bit — the same Jenkins
// lookup3 hash, gradients, quintic fade and gradient scales (0.6616 in 2D, 0.982 in 3D), so the
// procedural patterns land where they did in the three.js version.

fn _mxRotl( x: u32, k: u32 ) -> u32 { return ( x << k ) | ( x >> ( 32u - k ) ); }
fn _mxFinal( a0: u32, b0: u32, c0: u32 ) -> u32 {
	var a = a0; var b = b0; var c = c0;
	c ^= b; c -= _mxRotl( b, 14u );
	a ^= c; a -= _mxRotl( c, 11u );
	b ^= a; b -= _mxRotl( a, 25u );
	c ^= b; c -= _mxRotl( b, 16u );
	a ^= c; a -= _mxRotl( c, 4u );
	b ^= a; b -= _mxRotl( a, 14u );
	c ^= b; c -= _mxRotl( b, 24u );
	return c;
}
fn mxHash2( x: i32, y: i32 ) -> u32 { let s = 0xdeadbeefu + ( 2u << 2u ) + 13u; return _mxFinal( s + u32( x ), s + u32( y ), s ); }
fn mxHash3( x: i32, y: i32, z: i32 ) -> u32 { let s = 0xdeadbeefu + ( 3u << 2u ) + 13u; return _mxFinal( s + u32( x ), s + u32( y ), s + u32( z ) ); }
fn _mxGrad2( hash: u32, x: f32, y: f32 ) -> f32 {
	let h = hash & 7u;
	let u = select( y, x, h < 4u );
	let v = 2.0 * select( x, y, h < 4u );
	return select( u, - u, ( h & 1u ) != 0u ) + select( v, - v, ( h & 2u ) != 0u );
}
fn _gradDot3( h: u32, p: vec3f ) -> f32 {
	let hh = h & 15u;
	let u = select( p.y, p.x, hh < 8u );
	let v = select( select( p.z, p.x, hh == 12u || hh == 14u ), p.y, hh < 4u );
	return select( u, - u, ( hh & 1u ) != 0u ) + select( v, - v, ( hh & 2u ) != 0u );
}
fn _fade3( t: vec3f ) -> vec3f { return t * t * t * ( t * ( t * 6.0 - 15.0 ) + 10.0 ); }
fn _h3( i: vec3i ) -> u32 { return mxHash3( i.x, i.y, i.z ); }

fn perlin3( p: vec3f ) -> f32 {
	let fl = floor( p );
	let i = vec3i( fl );
	let f = p - fl;
	let u = _fade3( f );
	let n000 = _gradDot3( _h3( i ), f );
	let n100 = _gradDot3( _h3( i + vec3i( 1, 0, 0 ) ), f - vec3f( 1.0, 0.0, 0.0 ) );
	let n010 = _gradDot3( _h3( i + vec3i( 0, 1, 0 ) ), f - vec3f( 0.0, 1.0, 0.0 ) );
	let n110 = _gradDot3( _h3( i + vec3i( 1, 1, 0 ) ), f - vec3f( 1.0, 1.0, 0.0 ) );
	let n001 = _gradDot3( _h3( i + vec3i( 0, 0, 1 ) ), f - vec3f( 0.0, 0.0, 1.0 ) );
	let n101 = _gradDot3( _h3( i + vec3i( 1, 0, 1 ) ), f - vec3f( 1.0, 0.0, 1.0 ) );
	let n011 = _gradDot3( _h3( i + vec3i( 0, 1, 1 ) ), f - vec3f( 0.0, 1.0, 1.0 ) );
	let n111 = _gradDot3( _h3( i + vec3i( 1, 1, 1 ) ), f - vec3f( 1.0, 1.0, 1.0 ) );
	let x0 = mix( mix( n000, n100, u.x ), mix( n010, n110, u.x ), u.y );
	let x1 = mix( mix( n001, n101, u.x ), mix( n011, n111, u.x ), u.y );
	return mix( x0, x1, u.z ) * 0.982;
}
fn perlin2( p: vec2f ) -> f32 {
	let fl = floor( p );
	let X = i32( fl.x ); let Y = i32( fl.y );
	let fx = p.x - fl.x; let fy = p.y - fl.y;
	let u = _fade3( vec3f( fx, fy, 0.0 ) );
	let v0 = _mxGrad2( mxHash2( X, Y ), fx, fy );
	let v1 = _mxGrad2( mxHash2( X + 1, Y ), fx - 1.0, fy );
	let v2 = _mxGrad2( mxHash2( X, Y + 1 ), fx, fy - 1.0 );
	let v3 = _mxGrad2( mxHash2( X + 1, Y + 1 ), fx - 1.0, fy - 1.0 );
	let s1 = 1.0 - u.x;
	return ( ( 1.0 - u.y ) * ( v0 * s1 + v1 * u.x ) + u.y * ( v2 * s1 + v3 * u.x ) ) * 0.6616;
}
fn mx_noise_float3( p: vec3f ) -> f32 { return perlin3( p ); }
fn mx_noise_float2( p: vec2f ) -> f32 { return perlin2( p ); }
// MaterialX vec3 noise: one hash per corner, its three low bytes pick the gradients
fn _mxGrad3v( h: u32, p: vec3f ) -> vec3f { return vec3f( _gradDot3( h & 0xffu, p ), _gradDot3( ( h >> 8u ) & 0xffu, p ), _gradDot3( ( h >> 16u ) & 0xffu, p ) ); }
fn mx_noise_vec3( p: vec3f ) -> vec3f {
	let fl = floor( p );
	let i = vec3i( fl );
	let f = p - fl;
	let u = _fade3( f );
	let n000 = _mxGrad3v( _h3( i ), f );
	let n100 = _mxGrad3v( _h3( i + vec3i( 1, 0, 0 ) ), f - vec3f( 1.0, 0.0, 0.0 ) );
	let n010 = _mxGrad3v( _h3( i + vec3i( 0, 1, 0 ) ), f - vec3f( 0.0, 1.0, 0.0 ) );
	let n110 = _mxGrad3v( _h3( i + vec3i( 1, 1, 0 ) ), f - vec3f( 1.0, 1.0, 0.0 ) );
	let n001 = _mxGrad3v( _h3( i + vec3i( 0, 0, 1 ) ), f - vec3f( 0.0, 0.0, 1.0 ) );
	let n101 = _mxGrad3v( _h3( i + vec3i( 1, 0, 1 ) ), f - vec3f( 1.0, 0.0, 1.0 ) );
	let n011 = _mxGrad3v( _h3( i + vec3i( 0, 1, 1 ) ), f - vec3f( 0.0, 1.0, 1.0 ) );
	let n111 = _mxGrad3v( _h3( i + vec3i( 1, 1, 1 ) ), f - vec3f( 1.0, 1.0, 1.0 ) );
	let x0 = mix( mix( n000, n100, u.x ), mix( n010, n110, u.x ), u.y );
	let x1 = mix( mix( n001, n101, u.x ), mix( n011, n111, u.x ), u.y );
	return mix( x0, x1, u.z ) * 0.982;
}
fn mx_fractal_noise_float3( p: vec3f, octaves: i32, lacunarity: f32, diminish: f32 ) -> f32 {
	var r = 0.0; var amp = 1.0; var q = p;
	for ( var i = 0; i < octaves; i++ ) { r += amp * perlin3( q ); amp *= diminish; q *= lacunarity; }
	return r;
}
fn mx_cell_noise_float3( p: vec3f ) -> f32 { let i = vec3i( floor( p ) ); return f32( mxHash3( i.x, i.y, i.z ) ) / f32( 0xffffffffu ); }
fn mx_cell_noise_float2( p: vec2f ) -> f32 { let i = vec2i( floor( p ) ); return f32( mxHash2( i.x, i.y ) ) / f32( 0xffffffffu ); }
// distances to the nearest two feature points (F1, F2), jitter 0..1
fn mx_worley_noise_vec2_3( p: vec3f, jitter: f32 ) -> vec2f {
	let i = vec3i( floor( p ) );
	let f = fract( p );
	var d1 = 1e9; var d2 = 1e9;
	for ( var z = -1; z <= 1; z++ ) { for ( var y = -1; y <= 1; y++ ) { for ( var x = -1; x <= 1; x++ ) {
		let c = vec3i( x, y, z );
		let h = ihash3( i + c );
		let o = vec3f( f32( c.x ), f32( c.y ), f32( c.z ) ) + ( vec3f( u32ToUnit( h.x ), u32ToUnit( h.y ), u32ToUnit( h.z ) ) - 0.5 ) * jitter + 0.5 - f;
		let d = dot( o, o );
		if ( d < d1 ) { d2 = d1; d1 = d; } else if ( d < d2 ) { d2 = d; }
	} } }
	return sqrt( vec2f( d1, d2 ) );
}
fn mx_worley_noise_vec2_2( p: vec2f, jitter: f32 ) -> vec2f {
	let i = vec2i( floor( p ) );
	let f = fract( p );
	var d1 = 1e9; var d2 = 1e9;
	for ( var y = -1; y <= 1; y++ ) { for ( var x = -1; x <= 1; x++ ) {
		let c = vec2i( x, y );
		let h = ihash3( vec3i( i + c, 0 ) );
		let o = vec2f( f32( c.x ), f32( c.y ) ) + ( vec2f( u32ToUnit( h.x ), u32ToUnit( h.y ) ) - 0.5 ) * jitter + 0.5 - f;
		let d = dot( o, o );
		if ( d < d1 ) { d2 = d1; d1 = d; } else if ( d < d2 ) { d2 = d; }
	} }
	return sqrt( vec2f( d1, d2 ) );
}

// ---- normals

// orthonormal basis around n (Frisvad / Duff et al.)
fn basis( n: vec3f ) -> mat3x3f {
	let s = select( -1.0, 1.0, n.z >= 0.0 );
	let a = -1.0 / ( s + n.z );
	let b = n.x * n.y * a;
	let t = vec3f( 1.0 + s * n.x * n.x * a, s * b, -s * n.x );
	let bt = vec3f( b, s + n.y * n.y * a, -n.y );
	return mat3x3f( t, bt, n );
}

// Perturb a world-space normal by a height field sampled with screen-space derivatives
// (Mikkelsen, "Bump Mapping Unparametrized Surfaces"; TSL perturbNormal equivalent).
// dhdx / dhdy: dpdx / dpdy of the height (in metres) at this pixel.
fn perturbNormalByHeight( P: vec3f, N: vec3f, dhdx: f32, dhdy: f32, strength: f32 ) -> vec3f {
	let dPdx = dpdx( P );
	let dPdy = dpdy( P );
	let r1 = cross( dPdy, N );
	let r2 = cross( N, dPdx );
	let det = dot( dPdx, r1 );
	let grad = sign( det ) * ( dhdx * r1 + dhdy * r2 ) * strength;
	return normalize( abs( det ) * N - grad );
}

// tangent-space normal map sample (xy in -1..1) applied with a derivative-based TBN
fn perturbNormalByMap( P: vec3f, N: vec3f, uv: vec2f, mapN: vec3f ) -> vec3f {
	let dp1 = dpdx( P ); let dp2 = dpdy( P );
	let duv1 = dpdx( uv ); let duv2 = dpdy( uv );
	let dp2perp = cross( dp2, N ); let dp1perp = cross( N, dp1 );
	let T = dp2perp * duv1.x + dp1perp * duv2.x;
	let B = dp2perp * duv1.y + dp1perp * duv2.y;
	let invmax = inverseSqrt( max( max( dot( T, T ), dot( B, B ) ), 1e-20 ) );
	return normalize( mat3x3f( T * invmax, B * invmax, N ) * mapN );
}

// ---- color

fn srgbToLinear( c: vec3f ) -> vec3f {
	return select( pow( ( c + 0.055 ) / 1.055, vec3f( 2.4 ) ), c / 12.92, c <= vec3f( 0.04045 ) );
}
fn linearToSrgb( c: vec3f ) -> vec3f {
	return select( 1.055 * pow( c, vec3f( 1.0 / 2.4 ) ) - 0.055, c * 12.92, c <= vec3f( 0.0031308 ) );
}
`}),ea=Math.PI/180,kc=180/Math.PI,Lt=[];for(let s=0;s<256;s++)Lt[s]=(s<16?"0":"")+s.toString(16);function ja(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[s&255]+Lt[s>>8&255]+Lt[s>>16&255]+Lt[s>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function K_(s,e){switch(e.constructor){case Float32Array:case Float64Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:return s}}function Z_(s,e){switch(e.constructor){case Float32Array:case Float64Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:return s}}class Tt{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){return e===0?this.x=t:this.y=t,this}getComponent(e){return e===0?this.x:this.y}clone(){return new Tt(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());return t===0?Math.PI/2:Math.acos(Math.max(-1,Math.min(1,this.dot(e)/t)))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}Tt.prototype.isVector2=!0;class hn{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback=J_}static slerpFlat(e,t,n,i,r,o,a){const l=new hn().fromArray(n,i),c=new hn().fromArray(r,o);l.slerp(c,a).toArray(e,t)}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new hn(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}identity(){return this.set(0,0,0,1)}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos(n/2),l=Math.cos(i/2),c=Math.cos(r/2),h=Math.sin(n/2),u=Math.sin(i/2),f=Math.sin(r/2);switch(o){case"XYZ":this._x=h*l*c+a*u*f,this._y=a*u*c-h*l*f,this._z=a*l*f+h*u*c,this._w=a*l*c-h*u*f;break;case"YXZ":this._x=h*l*c+a*u*f,this._y=a*u*c-h*l*f,this._z=a*l*f-h*u*c,this._w=a*l*c+h*u*f;break;case"ZXY":this._x=h*l*c-a*u*f,this._y=a*u*c+h*l*f,this._z=a*l*f+h*u*c,this._w=a*l*c-h*u*f;break;case"ZYX":this._x=h*l*c-a*u*f,this._y=a*u*c+h*l*f,this._z=a*l*f-h*u*c,this._w=a*l*c+h*u*f;break;case"YZX":this._x=h*l*c+a*u*f,this._y=a*u*c+h*l*f,this._z=a*l*f-h*u*c,this._w=a*l*c-h*u*f;break;case"XZY":this._x=h*l*c-a*u*f,this._y=a*u*c-h*l*f,this._z=a*l*f+h*u*c,this._w=a*l*c+h*u*f;break;default:throw new Error("Quaternion.setFromEuler: unknown order "+o)}return t&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.x*t.x+e.y*t.y+e.z*t.z+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Math.max(-1,Math.min(1,this.dot(e)))))}rotateTowards(e,t){const n=this.angleTo(e);return n===0?this:this.slerp(e,Math.min(1,t/n))}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this.lengthSq())}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z,l=e._x,c=e._y,h=e._z,u=e._w;if(a<0&&(l=-l,c=-c,h=-h,u=-u,a=-a),a>=1)return this;const f=1-a*a;if(f<=Number.EPSILON){const p=1-t;return this._w=p*o+t*u,this._x=p*n+t*l,this._y=p*i+t*c,this._z=p*r+t*h,this.normalize()}const d=Math.sqrt(f),m=Math.atan2(d,a),x=Math.sin((1-t)*m)/d,g=Math.sin(t*m)/d;return this._w=o*x+u*g,this._x=n*x+l*g,this._y=i*x+c*g,this._z=r*x+h*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this.set(e.getX(t),e.getY(t),e.getZ(t),e.getW(t))}_onChange(e){return this._onChangeCallback=e,this}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}function J_(){}hn.prototype.isQuaternion=!0;const Gc=new hn;class Ie{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){return e===0?this.x=t:e===1?this.y=t:this.z=t,this}getComponent(e){return e===0?this.x:e===1?this.y:this.z}clone(){return new Ie(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}applyEuler(e){return this.applyQuaternion(Gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){const t=this.dot(e)/(e.lengthSq()||1);return this.addScaledVector(e,-t)}reflect(e){return this.addScaledVector(e,-2*this.dot(e))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());return t===0?Math.PI/2:Math.acos(Math.max(-1,Math.min(1,this.dot(e)/t)))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.set(t,n,i)}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}Ie.prototype.isVector3=!0;class Ht{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){return this["xyzw"[e]]=t,this}getComponent(e){return this["xyzw"[e]]}clone(){return new Ht(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.dot(this)}length(){return Math.sqrt(this.dot(this))}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Ht.prototype.isVector4=!0;const Q_=2e3,wi=2001,ta=new Ie,ri=new Ie,Nr=new Ie,Qt=new Ie,ev=new hn,Vc=new Ie(1,1,1),Hc=new Ie;class at{constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,m,x,g)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)t[i]=n[i];return this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1)}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1)}extractRotation(e){const t=this.elements,n=e.elements,i=1/ta.setFromMatrixColumn(e,0).length(),r=1/ta.setFromMatrixColumn(e,1).length(),o=1/ta.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){return this.compose(Hc,ev.setFromEuler(e,!1),Vc)}makeRotationFromQuaternion(e){return this.compose(Hc,e,Vc)}lookAt(e,t,n){const i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ri.crossVectors(n,Qt),ri.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ri.crossVectors(n,Qt)),ri.normalize(),Nr.crossVectors(Qt,ri),i[0]=ri.x,i[4]=Nr.x,i[8]=Qt.x,i[1]=ri.y,i[5]=Nr.y,i[9]=Qt.y,i[2]=ri.z,i[6]=Nr.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],M=n[3],_=n[7],v=n[11],E=n[15],I=i[0],C=i[4],U=i[8],w=i[12],S=i[1],b=i[5],F=i[9],P=i[13],L=i[2],A=i[6],N=i[10],H=i[14],G=i[3],O=i[7],q=i[11],K=i[15];return r[0]=o*I+a*S+l*L+c*G,r[4]=o*C+a*b+l*A+c*O,r[8]=o*U+a*F+l*N+c*q,r[12]=o*w+a*P+l*H+c*K,r[1]=h*I+u*S+f*L+d*G,r[5]=h*C+u*b+f*A+d*O,r[9]=h*U+u*F+f*N+d*q,r[13]=h*w+u*P+f*H+d*K,r[2]=m*I+x*S+g*L+p*G,r[6]=m*C+x*b+g*A+p*O,r[10]=m*U+x*F+g*N+p*q,r[14]=m*w+x*P+g*H+p*K,r[3]=M*I+_*S+v*L+E*G,r[7]=M*C+_*b+v*A+E*O,r[11]=M*U+_*F+v*N+E*q,r[15]=M*w+_*P+v*H+E*K,this}multiplyScalar(e){const t=this.elements;for(let n=0;n<16;n++)t[n]*=e;return this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15],M=f*p-d*g,_=u*p-d*x,v=u*g-f*x,E=h*p-d*m,I=h*g-f*m,C=h*x-u*m;return t*(a*M-l*_+c*v)-n*(o*M-l*E+c*I)+i*(o*_-a*E+c*C)-r*(o*v-a*I+l*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],M=t*a-n*o,_=t*l-i*o,v=t*c-r*o,E=n*l-i*a,I=n*c-r*a,C=i*c-r*l,U=h*x-u*m,w=h*g-f*m,S=h*p-d*m,b=u*g-f*x,F=u*p-d*x,P=f*p-d*g,L=M*P-_*F+v*b+E*S-I*w+C*U;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/L;return e[0]=(a*P-l*F+c*b)*A,e[1]=(i*F-n*P-r*b)*A,e[2]=(x*C-g*I+p*E)*A,e[3]=(f*I-u*C-d*E)*A,e[4]=(l*S-o*P-c*w)*A,e[5]=(t*P-i*S+r*w)*A,e[6]=(g*v-m*C-p*_)*A,e[7]=(h*C-f*v+d*_)*A,e[8]=(o*F-a*S+c*U)*A,e[9]=(n*S-t*F-r*U)*A,e[10]=(m*I-x*v+p*M)*A,e[11]=(u*v-h*I-d*M)*A,e[12]=(a*w-o*b-l*U)*A,e[13]=(t*b-n*w+i*U)*A,e[14]=(x*_-m*E-g*M)*A,e[15]=(h*E-u*_+f*M)*A,this}scale(e){const t=this.elements;return t[0]*=e.x,t[4]*=e.y,t[8]*=e.z,t[1]*=e.x,t[5]*=e.y,t[9]*=e.z,t[2]*=e.x,t[6]*=e.y,t[10]*=e.z,t[3]*=e.x,t[7]*=e.y,t[11]*=e.z,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1)}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1)}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1)}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1)}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1)}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1)}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1)}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,x=o*h,g=o*u,p=a*u,M=l*c,_=l*h,v=l*u,E=n.x,I=n.y,C=n.z;return i[0]=(1-(x+p))*E,i[1]=(d+v)*E,i[2]=(m-_)*E,i[3]=0,i[4]=(d-v)*I,i[5]=(1-(f+p))*I,i[6]=(g+M)*I,i[7]=0,i[8]=(m+_)*C,i[9]=(g-M)*C,i[10]=(1-(f+x))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Math.hypot(i[0],i[1],i[2]);const o=Math.hypot(i[4],i[5],i[6]),a=Math.hypot(i[8],i[9],i[10]);this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14];const l=tv.copy(this),c=l.elements,h=1/r,u=1/o,f=1/a;return c[0]*=h,c[1]*=h,c[2]*=h,c[4]*=u,c[5]*=u,c[6]*=u,c[8]*=f,c[9]*=f,c[10]*=f,t.setFromRotationMatrix(l),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=wi,l=!0){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let m,x;const g=o===1/0;if(l){if(a!==wi)throw new Error("Matrix4.makePerspective: reversed depth requires WebGPU clip space");m=g?0:r/(o-r),x=g?r:o*r/(o-r)}else a===wi?(m=g?-1:-o/(o-r),x=g?-r:-o*r/(o-r)):(m=g?-1:-(o+r)/(o-r),x=g?-2*r:-2*o*r/(o-r));return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=wi,l=!0){const c=this.elements,h=1/(t-e),u=1/(n-i),f=1/(o-r),d=(t+e)*h,m=(n+i)*u;let x,g;return l?(x=o*f,g=f):a===wi?(x=-r*f,g=-f):(x=-(o+r)*f,g=-2*f),c[0]=2*h,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){for(let t=0;t<16;t++)if(this.elements[t]!==e.elements[t])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;for(let i=0;i<16;i++)e[t+i]=n[i];return e}}at.prototype.isMatrix4=!0;const tv=new at,Wc=new at,Xc=new hn,ji=s=>Math.max(-1,Math.min(1,s));class hi{constructor(e=0,t=0,n=0,i=hi.DEFAULT_ORDER){this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback=nv}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new hi(this._x,this._y,this._z,this._order)}copy(e){return this.set(e._x,e._y,e._z,e._order)}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10],m=.9999999;switch(t){case"XYZ":this._y=Math.asin(ji(a)),Math.abs(a)<m?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ji(h)),Math.abs(h)<m?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ji(f)),Math.abs(f)<m?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ji(u)),Math.abs(u)<m?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ji(l)),Math.abs(l)<m?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ji(o)),Math.abs(o)<m?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:throw new Error("Euler.setFromRotationMatrix: unknown order "+t)}return this._order=t,n&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}function nv(){}hi.DEFAULT_ORDER="XYZ";hi.prototype.isEuler=!0;class Li{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1)}copy(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)t[i]=n[i];return this}clone(){return new Li().fromArray(this.elements)}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10])}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=i[0],g=i[3],p=i[6],M=i[1],_=i[4],v=i[7],E=i[2],I=i[5],C=i[8];return r[0]=o*x+a*M+l*E,r[3]=o*g+a*_+l*I,r[6]=o*p+a*v+l*C,r[1]=c*x+h*M+u*E,r[4]=c*g+h*_+u*I,r[7]=c*p+h*v+u*C,r[2]=f*x+d*M+m*E,r[5]=f*g+d*_+m*I,r[8]=f*p+d*v+m*C,this}multiplyScalar(e){const t=this.elements;for(let n=0;n<9;n++)t[n]*=e;return this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=t*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}makeTranslation(e,t){return e.isVector2&&(t=e.y,e=e.x),this.set(1,0,e,0,1,t,0,0,1)}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1)}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1)}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1)}scale(e,t){return this.premultiply(na.makeScale(e,t))}rotate(e){return this.premultiply(na.makeRotation(-e))}translate(e,t){return this.premultiply(na.makeTranslation(e,t))}equals(e){for(let t=0;t<9;t++)if(this.elements[t]!==e.elements[t])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){for(let n=0;n<9;n++)e[t+n]=this.elements[n];return e}}Li.prototype.isMatrix3=!0;const na=new Li,Bn="srgb",Fr="srgb-linear",Ki=s=>s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4),on=s=>s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055,Cs=s=>Math.max(0,Math.min(1,s)),iv=(s,e)=>(s%e+e)%e;function ia(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}const Ur={h:0,s:0,l:0};class Xn{constructor(e,t,n){this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){if(e===void 0)return this;e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bn){return e=Math.floor(e),this.setRGB((e>>16&255)/255,(e>>8&255)/255,(e&255)/255,t)}setRGB(e,t,n,i=Fr){return i===Bn&&(e=Ki(e),t=Ki(t),n=Ki(n)),this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n,i=Fr){if(e=iv(e,1),t=Cs(t),n=Cs(n),t===0)return this.setRGB(n,n,n,i);const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;return this.setRGB(ia(o,r,e+1/3),ia(o,r,e),ia(o,r,e-1/3),i)}setStyle(e,t=Bn){let n;if(n=/^#([A-Fa-f\d]+)$/.exec(e)){const i=n[1];if(i.length===3)return this.setRGB(parseInt(i[0],16)/15,parseInt(i[1],16)/15,parseInt(i[2],16)/15,t);if(i.length===6)return this.setHex(parseInt(i,16),t)}else if(n=/^rgba?\(\s*([\d.]+)(%?)\s*,\s*([\d.]+)%?\s*,\s*([\d.]+)%?\s*(?:,\s*[\d.]+\s*)?\)$/.exec(e)){const i=n[2]==="%"?100:255;return this.setRGB(Math.min(1,n[1]/i),Math.min(1,n[3]/i),Math.min(1,n[4]/i),t)}else{if(n=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*(?:,\s*[\d.]+\s*)?\)$/.exec(e))return this.setHSL(n[1]/360,n[2]/100,n[3]/100,t);if(Sa[e.toLowerCase()]!==void 0)return this.setHex(Sa[e.toLowerCase()],t)}return console.warn("Color: unknown color "+e),this}clone(){return new Xn(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=on(e.r),this.g=on(e.g),this.b=on(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this)}convertLinearToSRGB(){return this.copyLinearToSRGB(this)}getHex(e=Bn){let t=this.r,n=this.g,i=this.b;return e===Bn&&(t=on(t),n=on(n),i=on(i)),Math.round(Cs(t)*255)*65536+Math.round(Cs(n)*255)*256+Math.round(Cs(i)*255)}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Fr){let n=this.r,i=this.g,r=this.b;t===Bn&&(n=on(n),i=on(i),r=on(r));const o=Math.max(n,i,r),a=Math.min(n,i,r);let l=0,c=0;const h=(a+o)/2;if(a!==o){const u=o-a;c=h<=.5?u/(o+a):u/(2-o-a),o===n?l=(i-r)/u+(i<r?6:0):o===i?l=(r-n)/u+2:l=(n-i)/u+4,l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Fr){return e.r=this.r,e.g=this.g,e.b=this.b,t===Bn&&(e.r=on(e.r),e.g=on(e.g),e.b=on(e.b)),e}getStyle(e=Bn){const t=this.getRGB({},e);return`rgb(${Math.round(t.r*255)},${Math.round(t.g*255)},${Math.round(t.b*255)})`}offsetHSL(e,t,n){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+t,Ur.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Xn.prototype.isColor=!0;const Sa={black:0,white:16777215,red:16711680,green:32768,lime:65280,blue:255,yellow:16776960,cyan:65535,magenta:16711935,gray:8421504,grey:8421504,orange:16753920};Xn.NAMES=Sa;const Mn=new Ie,On=Array.from({length:8},()=>new Ie);class Kn{constructor(e=new Ie(1/0,1/0,1/0),t=new Ie(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0;t<e.length;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0;t<e.count;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(const t of e)this.expandByPoint(t);return this}setFromCenterAndSize(e,t){return Mn.copy(t).multiplyScalar(.5),this.min.copy(e).sub(Mn),this.max.copy(e).add(Mn),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new Kn().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const i=n.getAttribute("position");if(t&&i!==void 0)for(let r=0;r<i.count;r++)this.expandByPoint(Mn.fromBufferAttribute(i,r).applyMatrix4(e.matrixWorld));else n.boundingBox===null&&n.computeBoundingBox(),qc.copy(n.boundingBox).applyMatrix4(e.matrixWorld),this.union(qc)}for(const i of e.children)this.expandByObject(i,t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;const i=e.normal;return i.x>0?(t=i.x*this.min.x,n=i.x*this.max.x):(t=i.x*this.max.x,n=i.x*this.min.x),i.y>0?(t+=i.y*this.min.y,n+=i.y*this.max.y):(t+=i.y*this.max.y,n+=i.y*this.min.y),i.z>0?(t+=i.z*this.min.z,n+=i.z*this.max.z):(t+=i.z*this.max.z,n+=i.z*this.min.z),t<=-e.constant&&n>=-e.constant}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?(e.makeEmpty(),e):(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5,e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;const t=this.min,n=this.max;return On[0].set(t.x,t.y,t.z).applyMatrix4(e),On[1].set(t.x,t.y,n.z).applyMatrix4(e),On[2].set(t.x,n.y,t.z).applyMatrix4(e),On[3].set(t.x,n.y,n.z).applyMatrix4(e),On[4].set(n.x,t.y,t.z).applyMatrix4(e),On[5].set(n.x,t.y,n.z).applyMatrix4(e),On[6].set(n.x,n.y,t.z).applyMatrix4(e),On[7].set(n.x,n.y,n.z).applyMatrix4(e),this.setFromPoints(On)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Kn.prototype.isBox3=!0;const qc=new Kn,sv=new Kn,sa=new Ie;class Zn{constructor(e=new Ie,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){t!==void 0?this.center.copy(t):sv.setFromPoints(e).getCenter(this.center);let n=0;for(const i of e)n=Math.max(n,this.center.distanceToSquared(i));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}clone(){return new Zn().copy(this)}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&t.sub(this.center).normalize().multiplyScalar(this.radius).add(this.center),t}getBoundingBox(e){return this.isEmpty()?e.makeEmpty():(e.set(this.center,this.center),e.expandByScalar(this.radius))}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const t=sa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(sa,i/n),this.radius+=i}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e);const t=this.center.distanceTo(e.center);if(t+e.radius<=this.radius)return this;if(t+this.radius<=e.radius)return this.copy(e);const n=(t+this.radius+e.radius)*.5;return this.center.lerp(e.center,(n-this.radius)/t),this.radius=n,this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}}Zn.prototype.isSphere=!0;const $c=new Ie,rv=new Ie,ov=new Li;class kn{constructor(e=new Ie(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(e),this}setFromCoplanarPoints(e,t,n){const i=$c.subVectors(n,t).cross(rv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e)}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}clone(){return new kn().copy(this)}normalize(){const e=this.normal.length();if(e===0)return this;const t=1/e;return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}applyMatrix4(e,t){const n=t||ov.getNormalMatrix(e),i=this.coplanarPoint($c).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}}kn.prototype.isPlane=!0;const Yc=new Zn,Br=new Ie;class ao{constructor(e=new kn,t=new kn,n=new kn,i=new kn,r=new kn,o=new kn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){for(let t=0;t<6;t++)this.planes[t].copy(e.planes[t]);return this}clone(){return new ao().copy(this)}setFromProjectionMatrix(e,t=wi,n=!0){const i=this.planes,r=e.elements,o=r[0],a=r[4],l=r[8],c=r[12],h=r[1],u=r[5],f=r[9],d=r[13],m=r[2],x=r[6],g=r[10],p=r[14],M=r[3],_=r[7],v=r[11],E=r[15];return i[0].setComponents(M+o,_+a,v+l,E+c).normalize(),i[1].setComponents(M-o,_-a,v-l,E-c).normalize(),i[2].setComponents(M+h,_+u,v+f,E+d).normalize(),i[3].setComponents(M-h,_-u,v-f,E-d).normalize(),n?(i[4].setComponents(M-m,_-x,v-g,E-p).normalize(),i[5].setComponents(m,x,g,p).normalize()):t===Q_?(i[4].setComponents(M+m,_+x,v+g,E+p).normalize(),i[5].setComponents(M-m,_-x,v-g,E-p).normalize()):(i[4].setComponents(m,x,g,p).normalize(),i[5].setComponents(M-m,_-x,v-g,E-p).normalize()),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Yc.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Yc)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n].normal;if(Br.x=i.x>0?e.max.x:e.min.x,Br.y=i.y>0?e.max.y:e.min.y,Br.z=i.z>0?e.max.z:e.min.z,t[n].distanceToPoint(Br)<0)return!1}return!0}containsPoint(e){for(let t=0;t<6;t++)if(this.planes[t].distanceToPoint(e)<0)return!1;return!0}}const av=new Float32Array(1);new Uint32Array(av.buffer);const Tu={hooks:{},version:0},Eu={directModulation:"fn hookDirectModulation( P: vec3f, N: vec3f ) -> vec3f { return vec3f( 1.0 ); }",ambientModulation:"fn hookAmbientModulation( P: vec3f, N: vec3f ) -> vec3f { return vec3f( 1.0 ); }",shadowPosition:"fn hookShadowPosition( P: vec3f, N: vec3f, pixel: vec2f ) -> vec3f { return P; }",bounce:"fn hookBounce( P: vec3f, N: vec3f ) -> vec3f { return vec3f( 0.0 ); }",localLights:"fn hookLocalLights( s: Surface, P: vec3f, N: vec3f, V: vec3f, acc: ptr<function, LightAccum> ) {}",envSpecular:"fn hookEnvSpecular( R: vec3f, roughness: f32 ) -> vec3f { let t = sat( R.y * 0.5 + 0.5 ); return mix( frame.horizonColor * 0.6, frame.skyIrradiance * PI, t ) * frame.envIntensity; }",envDiffuse:"fn hookEnvDiffuse( N: vec3f ) -> vec3f { return mix( frame.horizonColor * 0.25, frame.skyIrradiance, N.y * 0.5 + 0.5 ) * frame.envIntensity; }"};function lv(){const s=[];for(const e in Eu){const t=Tu.hooks[e];t?s.push(t):s.push(cv(e))}return s}const jc={};function cv(s){return jc[s]||(jc[s]=new er({name:"hook-"+s+"-default",deps:[Vs],code:Eu[s]}))}const ns=new js("SunShadow",{matrices:["mat4x4f[4]",[new at,new at,new at,new at]],cascades:["vec4f[4]",[new Ht,new Ht,new Ht,new Ht]],count:["u32",0],mapSize:["f32",2048],bias:["f32",2e-5],fade:["f32",1],pcssCascades:["u32",1],sunAngularDiameter:["f32",.00925],enabled:["f32",0],pad:["f32",0],blend:["vec4f[4]",[new Ht,new Ht,new Ht,new Ht]]});let Au=null;function Ru(s){Au=s}const Ka=new er({name:"sunShadow",deps:[Ai],uniforms:ns,uniformName:"shadowParams",bindings:{sunShadowMap:{texture:()=>Au,viewDimension:"2d-array"}},code:`
fn shadowCascadeOf( viewDist: f32 ) -> i32 {
	for ( var i = 0; i < i32( shadowParams.count ); i++ ) { if ( viewDist < shadowParams.cascades[ i ].x ) { return i; } }
	return -1;
}

fn _shadowTap( uv: vec2f, layer: i32, z: f32 ) -> f32 {
	return textureSampleCompareLevel( sunShadowMap, smpShadow, uv, layer, z );
}

// shadow map depth (0 near .. 1 far, standard Z) at uv
fn _shadowDepth( uv: vec2f, layer: i32 ) -> f32 {
	let dim = vec2f( textureDimensions( sunShadowMap ) );
	let px = vec2i( clamp( uv * dim, vec2f( 0.0 ), dim - 1.0 ) );
	return textureLoad( sunShadowMap, px, layer, 0 );
}

// Contact-hardening sun shadows (PCSS, the former SunShadowFilter) on the near cascades. The penumbra of a
// real sun shadow grows with the distance from the occluder to the receiver (the sun is a 0.53 deg disc):
// sharp where an object touches the ground, soft under a palm crown 10 m up. Per pixel:
//  1. blocker search: average depth of the occluders around the pixel (raw depth loads, no sampler)
//  2. penumbra width = occluder-receiver distance * sun diameter, converted to this cascade's texels
//  3. percentage-closer filtering over that width
// Both sample sets are Vogel disks rotated per pixel and per frame (interleaved gradient noise): the
// TAA resolves the noise into a smooth gradient. Farther cascades: three's PCFShadowFilter (5 Vogel taps
// of hardware comparisons over one texel, rotated per pixel).
const SHADOW_MAX_OCCLUDER_HEIGHT: f32 = 30.0; // m: search radius covers penumbrae of occluders up to this far above
const SHADOW_SEARCH_TAPS: i32 = 8;
const SHADOW_FILTER_TAPS: i32 = 12;

fn sunShadowCascade( P: vec3f, N: vec3f, c: i32, noise: f32, pcfNoise: f32 ) -> f32 {
	return _sunShadowCascade( P, N, c, noise, pcfNoise, true );
}

// pcss = false: the 5-tap PCF filter in every cascade (no blocker search)
fn _sunShadowCascade( P: vec3f, N: vec3f, c: i32, noise: f32, pcfNoise: f32, pcss: bool ) -> f32 {
	let info = shadowParams.cascades[ c ];
	let Pb = P + N * info.z;
	let sc = shadowParams.matrices[ c ] * vec4f( Pb, 1.0 );
	let uvz = vec3f( sc.x * 0.5 + 0.5, 0.5 - sc.y * 0.5, sc.z );
	if ( any( uvz.xy < vec2f( 0.0 ) ) || any( uvz.xy > vec2f( 1.0 ) ) || uvz.z > 1.0 ) { return 1.0; }
	let z = uvz.z - shadowParams.bias;
	let texel = 1.0 / shadowParams.mapSize;
	if ( pcss && u32( c ) < shadowParams.pcssCascades ) {
		// moved every frame (Jimenez 2014): a noise pattern fixed on screen would never average out
		let phi = noise * TWO_PI;
		let width = info.y * shadowParams.mapSize; // cascade width (m)
		let range = info.w; // depth range (m)
		let SD = shadowParams.sunAngularDiameter;
		// 1. blockers within the widest penumbra this cascade can show. The texel straight along the light
		// ray comes first: a thin occluder (a log, a rope, a rail) can fall between the disk taps, which
		// left lit dots inside its umbra.
		let searchUV = max( min( SHADOW_MAX_OCCLUDER_HEIGHT * SD / width, texel * 24.0 ), texel * 1.5 );
		let d0 = _shadowDepth( uvz.xy, c );
		var blockSum = select( 0.0, d0, d0 < z );
		var blockCount = select( 0.0, 1.0, d0 < z );
		for ( var i = 0; i < SHADOW_SEARCH_TAPS; i++ ) {
			let d = _shadowDepth( uvz.xy + vogelDiskSample( i, SHADOW_SEARCH_TAPS, phi ) * searchUV, c );
			// standard depth: an occluder is closer to the light = smaller depth
			if ( d < z ) { blockSum += d; blockCount += 1.0; }
		}
		if ( blockCount < 0.5 ) { return 1.0; }
		// 2. occluder-receiver distance (orthographic: depth is linear over the camera range)
		let dz = abs( blockSum / blockCount - z ) * range;
		let penumbraUV = clamp( dz * SD / width, texel * 1.2, texel * 32.0 );
		// 3. PCF over the penumbra
		var sum = 0.0;
		for ( var i = 0; i < SHADOW_FILTER_TAPS; i++ ) {
			let d = _shadowDepth( uvz.xy + vogelDiskSample( i, SHADOW_FILTER_TAPS, phi + 1.7 ) * penumbraUV, c );
			sum += select( 0.0, 1.0, z <= d );
		}
		return sum / f32( SHADOW_FILTER_TAPS );
	}
	// three's PCFShadowFilter: 5 samples on a Vogel disk of one texel, rotated per pixel
	let phiP = pcfNoise * TWO_PI;
	var sum = 0.0;
	for ( var i = 0; i < 5; i++ ) {
		sum += _shadowTap( uvz.xy + vogelDiskSample( i, 5, phiP ) * texel, c, z );
	}
	return sum / 5.0;
}

// visibility of the sun at P (1 = lit); pixel = fragment coordinate for the dither.
// Cascade seams blended over a band that grows with their distance (SoftCSMShadowNode: a quarter of it,
// 2.5 m at the 10 m seam, 15 m at 60 m, and the last cascade fades out over its final 100 m); each
// cascade's map is widened to cover its part of the overlap.
fn sunShadow( P: vec3f, N: vec3f, pixel: vec2f ) -> f32 {
	return _sunShadow( P, N, pixel, true );
}

// sunShadow with the plain 5-tap PCF filter everywhere (surfaces whose own detail hides penumbrae: water)
fn sunShadowPCF( P: vec3f, N: vec3f, pixel: vec2f ) -> f32 {
	return _sunShadow( P, N, pixel, false );
}

fn _sunShadow( P: vec3f, N: vec3f, pixel: vec2f, pcss: bool ) -> f32 {
	if ( shadowParams.enabled < 0.5 ) { return 1.0; }
	let dist = dot( P - frame.cameraPos, - vec3f( frame.view[ 0 ][ 2 ], frame.view[ 1 ][ 2 ], frame.view[ 2 ][ 2 ] ) );
	let noise = interleavedGradientNoise( pixel + f32( frame.frameIndex % 64u ) * 5.588238 );
	let pcfNoise = interleavedGradientNoise( pixel );
	if ( shadowParams.fade < 0.5 ) {
		let c = shadowCascadeOf( dist );
		if ( c < 0 ) { return 1.0; }
		return _sunShadowCascade( P, N, c, noise, pcfNoise, pcss );
	}
	var ret = 1.0;
	let last = i32( shadowParams.count ) - 1;
	for ( var i = 0; i <= last; i++ ) {
		let b = shadowParams.blend[ i ]; // x, y: cascade range, z / w: blend margin at its near / far seam
		let center = ( b.x + b.y ) * 0.5;
		let margin = max( select( b.w, b.z, dist < center ), 1e-5 );
		let csmX = b.x - margin * 0.5;
		let csmY = select( b.y + margin * 0.5, b.y, i == last );
		if ( dist >= csmX && dist <= csmY ) {
			var ratio = clamp( min( dist - csmX, csmY - dist ) / margin, 0.0, 1.0 );
			// no fade at the near edge of the first cascade
			if ( i == 0 && dist <= center ) { ratio = 1.0; }
			ret -= ( 1.0 - _sunShadowCascade( P, N, i, noise, pcfNoise, pcss ) ) * ratio;
		}
	}
	return max( ret, 0.0 );
}

// one depth comparison in cascade c (1 = lit; outside the map: lit). For volumetric marches (haze shafts,
// motes) where the jitter and the temporal resolve do the filtering.
fn sunShadowCascadeHard( P: vec3f, c: i32 ) -> f32 {
	let sc = shadowParams.matrices[ c ] * vec4f( P, 1.0 );
	let uv = vec2f( sc.x * 0.5 + 0.5, 0.5 - sc.y * 0.5 );
	if ( any( uv <= vec2f( 0.0 ) ) || any( uv >= vec2f( 1.0 ) ) || sc.z > 1.0 ) { return 1.0; }
	return select( 0.0, 1.0, sc.z - 2e-5 <= _shadowDepth( uv, c ) );
}
// same in the cascade covering P (by view distance), 1 beyond the last one or with shadows off
fn sunShadowHard( P: vec3f ) -> f32 {
	if ( shadowParams.enabled < 0.5 ) { return 1.0; }
	let dist = dot( P - frame.cameraPos, - vec3f( frame.view[ 0 ][ 2 ], frame.view[ 1 ][ 2 ], frame.view[ 2 ][ 2 ] ) );
	let c = shadowCascadeOf( dist );
	if ( c < 0 ) { return 1.0; }
	return sunShadowCascadeHard( P, c );
}
`}),Vs=new er({name:"surface",deps:[Ai],code:`
struct Surface {
	albedo: vec3f,
	alpha: f32,
	normal: vec3f,      // world space, shading normal
	roughness: f32,
	emissive: vec3f,
	metalness: f32,
	translucency: vec3f, // fraction of the direct light transmitted through thin foliage (x lightColor)
	ao: f32,
	sheenColor: vec3f,
	specularIntensity: f32,
	clearcoat: f32,
	clearcoatRoughness: f32,
	sheenRoughness: f32,
	ior: f32,
	clearcoatNormal: vec3f,
	envIntensity: f32,
};

fn defaultSurface( N: vec3f ) -> Surface {
	var s: Surface;
	s.albedo = vec3f( 1.0 ); s.alpha = 1.0; s.normal = N; s.roughness = 1.0; s.metalness = 0.0;
	s.emissive = vec3f( 0.0 ); s.translucency = vec3f( 0.0 ); s.ao = 1.0; s.sheenColor = vec3f( 0.0 );
	s.specularIntensity = 1.0; s.clearcoat = 0.0; s.clearcoatRoughness = 0.0; s.sheenRoughness = 1.0;
	s.ior = 1.5; s.clearcoatNormal = N; s.envIntensity = 1.0;
	return s;
}

// screen derivatives of the lit position, taken at the top of shadeSurface (every lane of the quad
// is live there; the sun hooks run in a branch, where derivatives are undefined)
var<private> lightDPdx: vec3f = vec3f( 0.0 );
var<private> lightDPdy: vec3f = vec3f( 0.0 );

struct LightAccum {
	directDiffuse: vec3f,
	directSpecular: vec3f,
	indirectDiffuse: vec3f,
	indirectSpecular: vec3f,
};

fn F_Schlick( f0: vec3f, f90: f32, dotVH: f32 ) -> vec3f {
	let fresnel = exp2( ( -5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + f90 * fresnel;
}
fn V_GGX_SmithCorrelated( alpha: f32, dotNL: f32, dotNV: f32 ) -> f32 {
	let a2 = alpha * alpha;
	let gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * dotNV * dotNV );
	let gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * dotNL * dotNL );
	return 0.5 / max( gv + gl, EPS );
}
fn D_GGX( alpha: f32, dotNH: f32 ) -> f32 {
	let a2 = alpha * alpha;
	let d = dotNH * dotNH * ( a2 - 1.0 ) + 1.0;
	return INV_PI * a2 / ( d * d );
}
fn BRDF_GGX( L: vec3f, V: vec3f, N: vec3f, f0: vec3f, f90: f32, roughness: f32 ) -> vec3f {
	let alpha = roughness * roughness;
	let H = normalize( L + V );
	let dotNL = sat( dot( N, L ) ); let dotNV = sat( dot( N, V ) );
	let dotNH = sat( dot( N, H ) ); let dotVH = sat( dot( V, H ) );
	return F_Schlick( f0, f90, dotVH ) * V_GGX_SmithCorrelated( alpha, dotNL, dotNV ) * D_GGX( alpha, dotNH );
}
// Charlie sheen (Estevez & Kulla)
fn D_Charlie( roughness: f32, dotNH: f32 ) -> f32 {
	let a = roughness * roughness;
	let invA = 1.0 / a;
	let cos2h = dotNH * dotNH;
	let sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invA ) * pow( sin2h, invA * 0.5 ) / ( 2.0 * PI );
}
fn V_Neubelt( dotNV: f32, dotNL: f32 ) -> f32 { return sat( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) ); }
fn BRDF_Sheen( L: vec3f, V: vec3f, N: vec3f, color: vec3f, roughness: f32 ) -> vec3f {
	let H = normalize( L + V );
	return color * D_Charlie( roughness, sat( dot( N, H ) ) ) * V_Neubelt( sat( dot( N, V ) ), sat( dot( N, L ) ) );
}
// analytical approximation of the split-sum DFG term (Karis)
fn DFGApprox( dotNV: f32, roughness: f32 ) -> vec2f {
	let c0 = vec4f( -1.0, -0.0275, -0.572, 0.022 );
	let c1 = vec4f( 1.0, 0.0425, 1.04, -0.04 );
	let r = roughness * c0 + c1;
	let a004 = min( r.x * r.x, exp2( -9.28 * dotNV ) ) * r.x + r.y;
	return vec2f( -1.04, 1.04 ) * a004 + r.zw;
}
// multi-scattering specular energy compensation (Fdez-Aguera), as three's computeMultiscattering
fn multiscatter( N: vec3f, V: vec3f, specColor: vec3f, specF90: f32, roughness: f32, single: ptr<function, vec3f>, multi: ptr<function, vec3f> ) {
	let fab = DFGApprox( sat( dot( N, V ) ), roughness );
	let Fr = specColor;
	let FssEss = Fr * fab.x + specF90 * fab.y;
	let Ess = fab.x + fab.y;
	let Ems = 1.0 - Ess;
	let Favg = Fr + ( 1.0 - Fr ) * 0.047619;
	let Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	*single += FssEss;
	*multi += Fms * Ems;
}
`}),ra=new er({name:"lighting",deps:[Ai,Vs,Ka],code:`
// STUDIO_LIGHTING (a pass define, e.g. the fish portraits of the catch card): the world hooks are
// skipped (no shadows, caustics, cloud / hill shadow, bounce, local lights, underwater tint) and the
// environment is a neutral photo studio: a grey sweep lit from above plus one large softbox whose
// azimuth is frame.debug.x (radians, animatable). The key light is frame.sunDir / frame.sunColor of
// the view's own frame block.
fn studioEnvSpecular( R: vec3f, roughness: f32 ) -> vec3f {
	let sweep = mix( vec3f( 0.035, 0.04, 0.045 ), vec3f( 0.55, 0.57, 0.6 ), smoothstep( -0.35, 0.85, R.y ) );
	let az = atan2( R.x, R.z ) - frame.debug.x;
	let w = 0.35 + roughness * 1.6;
	let box = exp( - az * az / ( w * w ) ) * smoothstep( -0.05, 0.3, R.y ) * smoothstep( 0.98, 0.55, R.y );
	return ( sweep + box * vec3f( 2.4, 2.35, 2.25 ) / ( 1.0 + roughness * 3.0 ) ) * frame.envIntensity;
}
fn studioEnvDiffuse( N: vec3f ) -> vec3f {
	return mix( vec3f( 0.05, 0.055, 0.06 ), vec3f( 0.3, 0.31, 0.33 ), N.y * 0.5 + 0.5 ) * frame.envIntensity;
}

fn shadeSurface( s: Surface, P: vec3f, V: vec3f, pixel: vec2f ) -> vec3f {
	let N = s.normal;
	let rough = clamp( s.roughness, 0.03, 1.0 );
	let diffuseColor = s.albedo * ( 1.0 - s.metalness );
	let specF0 = mix( vec3f( 0.04 ) * s.specularIntensity, s.albedo, s.metalness );
	let specF90 = mix( s.specularIntensity, 1.0, s.metalness );
	var acc: LightAccum;
	acc.directDiffuse = vec3f( 0.0 ); acc.directSpecular = vec3f( 0.0 );
	acc.indirectDiffuse = vec3f( 0.0 ); acc.indirectSpecular = vec3f( 0.0 );

	lightDPdx = dpdx( P );
	lightDPdy = dpdy( P );

	// ---- sun / moon
	let L = frame.sunDir;
	let dotNL = sat( dot( N, L ) );
#if STUDIO_LIGHTING
	let lightColor = frame.sunColor;
#else
	// Faces turned away from the sun with no transmission get nothing from it: the modulation hooks
	// (clouds, hill shadow, caustics) and the shadow filters only run for the rest, and the filters
	// only where the hooks left light (their derivatives are taken ahead: lightDPdx / lightDPdy)
	var lightColor = vec3f( 0.0 );
	if ( dotNL > 0.0 || any( s.translucency > vec3f( 0.0 ) ) ) {
		lightColor = frame.sunColor * hookDirectModulation( P, N );
#if MATERIAL_SUN_MODULATION
		// per-material key-light multiplier (the former TerrainLightingModel: heightfield hill shadow)
		lightColor *= materialSunModulation( P, N );
#endif
		let geomN = N;
		var shadow = 0.0;
		if ( any( lightColor > vec3f( 0.0 ) ) ) {
#if REFRACTION_CLIP
			// the water's refraction source (seen blurred through the water): one hard shadow tap
			shadow = sunShadowHard( hookShadowPosition( P, geomN, pixel ) );
#else
			shadow = sunShadow( hookShadowPosition( P, geomN, pixel ), geomN, pixel );
#endif
		}
		lightColor *= shadow;
	}
#endif
	let irradiance = dotNL * lightColor;
	acc.directDiffuse += irradiance * diffuseColor * INV_PI;
	acc.directSpecular += irradiance * BRDF_GGX( L, V, N, specF0, specF90, rough );
#if SHEEN
	acc.directSpecular += irradiance * BRDF_Sheen( L, V, N, s.sheenColor, max( s.sheenRoughness, 0.07 ) );
#endif
	// thin-surface transmission (foliage): lit from behind as well
	acc.directDiffuse += s.translucency * lightColor;
#if CLEARCOAT
	let ccN = s.clearcoatNormal;
	let ccNL = sat( dot( ccN, L ) );
	let ccSpec = ccNL * lightColor * BRDF_GGX( L, V, ccN, vec3f( 0.04 ), 1.0, clamp( s.clearcoatRoughness, 0.03, 1.0 ) );
#endif

	// ---- local lights (lanterns, windows, boat lights, flashlight)
#if !STUDIO_LIGHTING
	hookLocalLights( s, P, N, V, &acc );
#endif

	// ---- indirect: environment + ground bounce
	// (three's PhysicalLightingModel: env irradiance goes through the multiscatter-compensated
	// diffuse; the ground bounce is plain Lambert)
	let R = reflect( -V, N );
	let Rr = normalize( mix( R, N, rough * rough ) );
#if STUDIO_LIGHTING
	let envIrr = studioEnvDiffuse( N ) * PI * s.envIntensity;
	let radiance = studioEnvSpecular( Rr, rough ) * s.envIntensity;
#else
	let envIrr = hookEnvDiffuse( N ) * PI * s.envIntensity;
	let radiance = hookEnvSpecular( Rr, rough ) * s.envIntensity;
#endif
	var single = vec3f( 0.0 ); var multi = vec3f( 0.0 );
	multiscatter( N, V, specF0, specF90, rough, &single, &multi );
	let totalScatter = single + multi;
	let diffuseMS = diffuseColor * ( 1.0 - max( max( totalScatter.r, totalScatter.g ), totalScatter.b ) );
	acc.indirectSpecular += radiance * single + multi * envIrr * INV_PI;
#if STUDIO_LIGHTING
	acc.indirectDiffuse += diffuseMS * envIrr * INV_PI;
#else
	acc.indirectDiffuse += diffuseMS * envIrr * INV_PI + hookBounce( P, N ) * diffuseColor;
#endif

	// ambient occlusion (specular occlusion after Lagarde)
	let dotNV = sat( dot( N, V ) );
	let specAO = sat( pow( dotNV + s.ao, exp2( -16.0 * rough - 1.0 ) ) - 1.0 + s.ao );
	acc.indirectDiffuse *= s.ao;
	acc.indirectSpecular *= specAO;
#if STUDIO_LIGHTING
	let amb = vec3f( 1.0 );
#else
	let amb = hookAmbientModulation( P, N );
#endif
	acc.indirectDiffuse *= amb;
	acc.indirectSpecular *= amb;

	var color = acc.directDiffuse + acc.directSpecular + acc.indirectDiffuse + acc.indirectSpecular;
#if SHEEN
	color += s.sheenColor * envIrr * INV_PI * 0.5 * s.ao * amb;
#endif
#if CLEARCOAT
	let ccNV = sat( dot( ccN, V ) );
	let Fcc = F_Schlick( vec3f( 0.04 ), 1.0, ccNV ) * s.clearcoat;
#if STUDIO_LIGHTING
	let ccRad = studioEnvSpecular( reflect( -V, ccN ), clamp( s.clearcoatRoughness, 0.03, 1.0 ) ) * amb * specAO;
#else
	let ccRad = hookEnvSpecular( reflect( -V, ccN ), clamp( s.clearcoatRoughness, 0.03, 1.0 ) ) * amb * specAO;
#endif
	color = color * ( 1.0 - Fcc ) + ( ccSpec * s.clearcoat + ccRad * Fcc );
#endif
	return color + s.emissive;
}
`}),hv={position:"vec3f",normal:"vec3f",uv:"vec2f",color:"vec4f"},uv={normal:"vec3f( 0.0, 1.0, 0.0 )",uv:"vec2f( 0.0 )",color:"vec4f( 1.0 )"},fv=/^(u32|i32|vec[234][ui])$/;function dv(s){return s==="f32"?"0.0":s==="u32"?"0u":s==="i32"?"0i":`${s}()`}function pv(s,e,t){const n=t.kind,i=new Set(e.map(p=>p.name)),r=s.allDefines();r.PASS_MAIN=n==="main"?1:0,r.PASS_DEPTH=n==="depth"?1:0,r.PASS_COLOR=n==="color"?1:0,r.PASS_LATE=t.late?1:0,r.LIT=s.lit?1:0,r.INSTANCED=i.has("instanceMatrix0")?1:0,r.INSTANCE_COLOR=i.has("instanceColor")?1:0,Object.assign(r,t.defines||{}),r.CLIP_DISTANCES=r.REFRACTION_CLIP&&Ue.features.has("clip-distances")?1:0;let o=`struct VertexIn {
`;for(const p of e)o+=`	@location( ${p.location} ) ${p.name}: ${p.wgsl},
`;o+=`	@builtin( instance_index ) instance: u32,
	@builtin( vertex_index ) vertex: u32,
};
`;let a=`struct VertexData {
	position: vec3f,
	normal: vec3f,
	uv: vec2f,
	color: vec4f,
	model: mat4x4f,
	prevModel: mat4x4f,
	instance: u32,
	vertex: u32,
	worldOffset: vec3f,
	prevWorldOffset: vec3f,
	useWorld: bool,
	worldPos: vec3f,
	worldNormal: vec3f,
	prevWorldPos: vec3f,
`;for(const p in s.attributes)a+=`	${p}: ${s.attributes[p]},
`;a+=`};
`;const l=n==="main";let c=0,h=`struct VSOut {
	@builtin( position ) clip: vec4f,
`;h+=`	@location( ${c++} ) worldPos: vec3f,
`,h+=`	@location( ${c++} ) normal: vec3f,
`,h+=`	@location( ${c++} ) uv: vec2f,
`,h+=`	@location( ${c++} ) color: vec4f,
`,l&&(h+=`	@location( ${c++} ) curClip: vec4f,
`,h+=`	@location( ${c++} ) prevClip: vec4f,
`);for(const p in s.varyings){const M=s.varyings[p];h+=`	@location( ${c++} )${fv.test(M)?" @interpolate( flat )":""} ${p}: ${M},
`}if(h+=`};
`,r.CLIP_DISTANCES){const p=[...h.matchAll(/\s(\w+): [^,]+,\n/g)].map(M=>M[1]);h+=h.replace("struct VSOut {","struct VSOutClip {").replace(/};\n$/,`	@builtin( clip_distances ) clipDistances: array<f32, 1>,
};
`),h+=`fn vsClip( o: VSOut, d: f32 ) -> VSOutClip {
	var c: VSOutClip;
${p.map(M=>`	c.${M} = o.${M};
`).join("")}	c.clipDistances[ 0 ] = d;
	return c;
}
`}let u="";for(const p in hv)if(i.has(p)){const M=e.find(_=>_.name===p);p==="color"&&M.wgsl==="vec3f"?u+=`	v.color = vec4f( i.color, 1.0 );
`:u+=`	v.${p} = i.${p};
`}else p!=="position"&&(u+=`	v.${p} = ${uv[p]};
`);for(const p in s.attributes)u+=i.has(p)?`	v.${p} = i.${p};
`:`	v.${p} = ${dv(s.attributes[p])};
`;const f=`
struct Draw {
	model: mat4x4f,
	prevModel: mat4x4f,
	params: vec4f,  // x: object id, y: user, z: user, w: user
	params2: vec4f,
};
@group( 2 ) @binding( 0 ) var<uniform> draw: Draw;

${o}
${a}
${h}

struct FragInput {
	vs: VSOut,
	P: vec3f,
	N: vec3f,
	V: vec3f,
	uv: vec2f,
	color: vec4f,
	front: bool,
	pixel: vec2f,
};

struct FragResult {
	color: vec4f,
	velocity: vec4f,
	mask: vec4f,
};

fn cofactor3( m: mat4x4f ) -> mat3x3f {
	let a = m[ 0 ].xyz; let b = m[ 1 ].xyz; let c = m[ 2 ].xyz;
	return mat3x3f( cross( b, c ), cross( c, a ), cross( a, b ) );
}

fn materialVertex( v: ptr<function, VertexData>, o: ptr<function, VSOut> ) {
${s.vertex}
}

fn materialSurface( in: FragInput, s: ptr<function, Surface> ) {
${s.surface}
}

fn materialOutput( in: FragInput, s: Surface, r: ptr<function, FragResult> ) {
${s.output}
}

#if CLIP_DISTANCES
@vertex fn vs( i: VertexIn ) -> VSOutClip {
#else
@vertex fn vs( i: VertexIn ) -> VSOut {
#endif
	var v: VertexData;
${u}#if !HAS_POSITION
	v.position = vec3f( 0.0 );
#endif
	v.instance = i.instance;
	v.vertex = i.vertex;
#if INSTANCED
	let im = mat4x4f( i.instanceMatrix0, i.instanceMatrix1, i.instanceMatrix2, i.instanceMatrix3 );
	v.model = draw.model * im;
	v.prevModel = draw.prevModel * im;
#else
	v.model = draw.model;
	v.prevModel = draw.prevModel;
#endif
#if INSTANCE_COLOR
	v.color = vec4f( v.color.rgb * i.instanceColor, v.color.a );
#endif
	v.worldOffset = vec3f( 0.0 );
	v.prevWorldOffset = vec3f( 1e30 );
	v.useWorld = false;
	v.prevWorldPos = vec3f( 1e30 );
	var o: VSOut;
	materialVertex( &v, &o );
	var wp: vec3f;
	var wn: vec3f;
	var pwp: vec3f;
	if ( v.useWorld ) {
		wp = v.worldPos;
		wn = v.worldNormal;
		pwp = select( v.prevWorldPos, wp, v.prevWorldPos.x > 1e29 );
	} else {
		let lp = vec4f( v.position, 1.0 );
		wp = ( v.model * lp ).xyz + v.worldOffset;
		wn = cofactor3( v.model ) * v.normal;
		pwp = ( v.prevModel * lp ).xyz + select( v.prevWorldOffset, v.worldOffset, v.prevWorldOffset.x > 1e29 );
	}
	o.worldPos = wp;
	o.normal = wn;
	o.uv = v.uv;
	o.color = v.color;
	o.clip = frame.viewProj * vec4f( wp, 1.0 );
#if PASS_MAIN
	o.curClip = frame.viewProjNoJitter * vec4f( wp, 1.0 );
	o.prevClip = frame.prevViewProjNoJitter * vec4f( pwp, 1.0 );
#endif
#if CLIP_DISTANCES
	return vsClip( o, frame.seaLevel + REFRACTION_CLIP_MARGIN - wp.y );
#else
	return o;
#endif
}

#if PASS_MAIN && !PASS_LATE && LIT && !IS_WATER && !ALPHA_TEST && !STUDIO_LIGHTING
// Deep under the water, seen from above it: the water drawn over this pixel shows the refraction
// pass (ocean/RefractionPass.js) at its refracted end point, never this pixel's own colour. The end
// point is predicted as the water shader traces it (flat surface, the seabed at P's depth, a margin
// for the wave slopes); where it would leave the screen the water takes the refraction pass' edge.
const SUBMERGED_DEPTH: f32 = 2.5; // m below sea level: below the deepest wave troughs
fn submergedHidden( P: vec3f ) -> bool {
	let sea = frame.seaLevel;
	if ( P.y > sea - SUBMERGED_DEPTH || frame.cameraPos.y < sea + 1.0 ) { return false; }
	let V = normalize( P - frame.cameraPos );
	let pos = frame.cameraPos + V * ( ( frame.cameraPos.y - sea ) / max( - V.y, 1e-4 ) );
	let Tr = refract( V, vec3f( 0.0, 1.0, 0.0 ), 1.0 / 1.333 );
	let Tv = normalize( vec3f( Tr.x, min( Tr.y, -0.08 ), Tr.z ) );
	let L = ( sea - P.y ) / max( - Tv.y, 0.04 );
	let c = frame.viewProj * vec4f( pos + Tv * min( L, 80.0 ), 1.0 );
	let uv = c.xy / max( c.w, 1e-4 ) * vec2f( 0.5, -0.5 ) + 0.5;
	return all( uv > vec2f( 0.1 ) ) && all( uv < vec2f( 0.9 ) ) && c.w > 0.0;
}
#endif

fn fragInput( vs: VSOut, front: bool ) -> FragInput {
	var in: FragInput;
	in.vs = vs;
	in.P = vs.worldPos;
	var N = normalize( vs.normal );
#if DOUBLE_SIDED
	N = select( -N, N, front );
#endif
#if BACK_SIDE
	N = -N;
#endif
	in.N = N;
	in.V = normalize( frame.cameraPos - vs.worldPos );
	in.uv = vs.uv;
	in.color = vs.color;
	in.front = front;
	in.pixel = vs.clip.xy;
	return in;
}

fn surfaceOf( in: FragInput ) -> Surface {
	var s = defaultSurface( in.N );
	s.albedo = mat.color * in.color.rgb;
	s.alpha = mat.opacity * in.color.a;
	s.roughness = mat.roughness;
	s.metalness = mat.metalness;
	s.emissive = mat.emissive;
	materialSurface( in, &s );
	return s;
}

#if PASS_DEPTH
#if NEEDS_DEPTH_FRAGMENT
@fragment fn fs( vs: VSOut, @builtin( front_facing ) front: bool ) {
	let in = fragInput( vs, front );
#if HAS_SHADOW_HOOK
	if ( ! materialShadow( in ) ) { discard; }
#else
	let s = surfaceOf( in );
	if ( s.alpha < mat.alphaTest ) { discard; }
#endif
}
#endif
#else

#if PASS_MAIN
struct FragOut {
	@location( 0 ) color: vec4f,
	@location( 1 ) velocity: vec4f,
	@location( 2 ) mask: vec4f,
};
#else
struct FragOut {
	@location( 0 ) color: vec4f,
};
#endif

@fragment fn fs( vs: VSOut, @builtin( front_facing ) front: bool ) -> FragOut {
	let in = fragInput( vs, front );
#if REFRACTION_CLIP
#if !CLIP_DISTANCES
	// the water's refraction source only holds what is under the water (pass.defines)
	if ( in.P.y > frame.seaLevel + REFRACTION_CLIP_MARGIN ) { discard; }
#endif
#endif
#if PASS_MAIN && !PASS_LATE && LIT && !IS_WATER && !ALPHA_TEST && !STUDIO_LIGHTING
	// hidden under the water (see submergedHidden): an ambient colour, keeping depth and motion
	if ( submergedHidden( in.P ) ) {
		var so: FragOut;
		so.color = vec4f( mat.color * in.color.rgb * hookEnvDiffuse( in.N ) * hookAmbientModulation( in.P, in.N ), 1.0 );
		let cur0 = vs.curClip.xy / vs.curClip.w;
		let prev0 = vs.prevClip.xy / vs.prevClip.w;
		so.velocity = vec4f( ( cur0 - prev0 ) * vec2f( 0.5, -0.5 ), 0.0, 1.0 );
		so.mask = vec4f( 0.0 );
		return so;
	}
#endif
	var s = surfaceOf( in );
#if ALPHA_TEST
	if ( s.alpha < mat.alphaTest ) { discard; }
#endif
	s.normal = normalize( s.normal );
	s.clearcoatNormal = normalize( s.clearcoatNormal );
	var r: FragResult;
#if LIT
	r.color = vec4f( shadeSurface( s, in.P, in.V, in.pixel ), s.alpha );
#else
	r.color = vec4f( s.albedo + s.emissive, s.alpha );
#endif
#if PASS_MAIN
	let cur = vs.curClip.xy / vs.curClip.w;
	let prev = vs.prevClip.xy / vs.prevClip.w;
	r.velocity = vec4f( ( cur - prev ) * vec2f( 0.5, -0.5 ), 0.0, 1.0 );
#else
	r.velocity = vec4f( 0.0 );
#endif
	r.mask = vec4f( 0.0 );
	materialOutput( in, s, &r );
	var out: FragOut;
	out.color = r.color;
#if PASS_MAIN
#if PASS_LATE
	// premultiplied: opaque outputs overwrite, blended ones weight their motion by coverage
#if VELOCITY_OPAQUE
	// the fragment owns the motion of its pixel even when its colour is blended (AirMotes specks)
	let a = VELOCITY_WEIGHT;
#else
	let a = select( 1.0, r.color.a, TRANSPARENT_F ) * VELOCITY_WEIGHT;
#endif
	out.velocity = vec4f( r.velocity.xy * a, 0.0, a );
#else
	out.velocity = r.velocity;
#endif
	out.mask = r.mask;
#endif
	return out;
}
#endif
`,d=s.shadow?`fn materialShadow( in: FragInput ) -> bool {
${s.shadow}
}
`:"";r.HAS_SHADOW_HOOK=s.shadow?1:0,r.NEEDS_DEPTH_FRAGMENT=n==="depth"&&(s.alphaTest>0||s.shadow)?1:0,r.HAS_POSITION=i.has("position")?1:0;const m=f.replace("fn fragInput(",d+"fn fragInput(").replace(/\bTRANSPARENT_F\b/g,s.transparent?"true":"false").replace(/\bVELOCITY_WEIGHT\b/g,Kc(s.velocityWeight)).replace(/\bREFRACTION_CLIP_MARGIN\b/g,Kc((t.defines&&t.defines.REFRACTION_CLIP_MARGIN)??0));let x=[Ai,Vs,...s.modules];return(n!=="depth"||Ma(s.modules).includes(ra))&&(x=[Ai,Vs,...lv(),ra,...s.modules]),s.lightingHooks===!1&&!Ma(s.modules).includes(ra)&&(x=[Ai,Vs,Ka,...s.modules]),{code:m,modules:x,defines:r,bindings:{mat:{uniform:s.uniformBlock},...s.bindings},hasFragment:n!=="depth"||r.NEEDS_DEPTH_FRAGMENT===1}}function Kc(s){const e=String(s);return e.includes(".")||e.includes("e")?e:e+".0"}let mv=0;const Zc=()=>mv++,gv={color:["vec3f",null],opacity:["f32",1],emissive:["vec3f",null],roughness:["f32",1],metalness:["f32",0],alphaTest:["f32",0]};class Za{constructor(e={}){this.id=Zc(),this.isMaterial=!0,this.name=e.name||"material"+this.id,this.version=0,this.modules=e.modules||[],this.varyings=e.varyings||{},this.attributes=e.attributes||{},this.vertex=e.vertex||"",this.surface=e.surface||"",this.output=e.output||"",this.shadow=e.shadow||"",this.defines={...e.defines||{}},this.lit=e.lit!==!1,this.side=e.side||"front",this.transparent=!!e.transparent,this.blending=e.blending||(this.transparent?"normal":"none"),this.depthWrite=e.depthWrite??!this.transparent,this.depthTest=e.depthTest??!0,this.depthCompare=e.depthCompare||null,this.depthBias=e.depthBias||0,this.depthBiasSlopeScale=e.depthBiasSlopeScale||0,this.colorWrite=e.colorWrite??!0,this.topology=e.topology||"triangle-list",this.visible=e.visible??!0,this.vertexColors=!!e.vertexColors,this.velocityWeight=e.velocityWeight??1,this.underwaterLighting=e.underwaterLighting||"full",this.appliesHillShadow=!!e.appliesHillShadow,this.localLightsCheap=!!e.localLightsCheap,this.receiveShadows=e.receiveShadows??!0,this.userData=e.userData||{};const t={...gv};for(const i in e.uniforms||{})t[i]=e.uniforms[i];this.uniformBlock=new js("MaterialParams",t,{label:this.name}),this.uniforms=this.uniformBlock.fields;const n=this.uniforms;n.color.value=Or(e.color,new Xn(1,1,1)),n.emissive.value=Or(e.emissive,new Xn(0,0,0)),e.roughness!==void 0&&(n.roughness.value=e.roughness),e.metalness!==void 0&&(n.metalness.value=e.metalness),e.opacity!==void 0&&(n.opacity.value=e.opacity),e.alphaTest!==void 0&&(n.alphaTest.value=e.alphaTest),this.bindings={};for(const i in e.textures||{}){const r=e.textures[i];this.bindings[i]=r&&r.isTexture?{texture:r}:typeof r=="function"?{texture:r}:r}for(const i in e.storage||{}){const r=e.storage[i];this.bindings[i]=r&&r.isStorageBuffer?{storage:r,access:"read"}:r}Object.assign(this.bindings,e.bindings||{}),this._listeners=[]}get color(){return this.uniforms.color.value}set color(e){this.uniforms.color.value=Or(e,this.uniforms.color.value)}get emissive(){return this.uniforms.emissive.value}set emissive(e){this.uniforms.emissive.value=Or(e,this.uniforms.emissive.value)}get roughness(){return this.uniforms.roughness.value}set roughness(e){this.uniforms.roughness.value=e}get metalness(){return this.uniforms.metalness.value}set metalness(e){this.uniforms.metalness.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms.opacity.value=e}get alphaTest(){return this.uniforms.alphaTest.value}set alphaTest(e){e>0!=this.uniforms.alphaTest.value>0&&(this.needsUpdate=!0),this.uniforms.alphaTest.value=e}set(e,t){this.uniformBlock.set(e,t)}set needsUpdate(e){e&&this.version++}setDefine(e,t){this.defines[e]!==t&&(this.defines[e]=t,this.version++)}pipelineKey(){return`${this.id}.${this.version}.${this.side}.${this.transparent}.${typeof this.blending=="string"?this.blending:JSON.stringify(this.blending)}.${this.depthWrite}.${this.depthTest}.${this.depthCompare}.${this.colorWrite}.${this.topology}.${this.alphaTest>0}.${this.underwaterLighting}.${this.appliesHillShadow}.${this.localLightsCheap}.${this.receiveShadows}.${this.depthBias}.${this.depthBiasSlopeScale}.${this.vertexColors}`}allDefines(){return{...this.defines,UNDERWATER_LIGHTING:{none:0,lite:1,full:2}[this.underwaterLighting]??2,HILL_SHADOW_SELF:this.appliesHillShadow?1:0,LOCAL_LIGHTS_CHEAP:this.localLightsCheap?1:0,ALPHA_TEST:this.alphaTest>0?1:0,DOUBLE_SIDED:this.side==="double"?1:0,BACK_SIDE:this.side==="back"?1:0,TRANSPARENT:this.transparent?1:0,RECEIVE_SHADOWS:this.receiveShadows?1:0}}addEventListener(e,t){e==="dispose"&&this._listeners.push(t)}dispose(){for(const e of this._listeners)e({target:this});this.uniformBlock.destroy()}clone(){const e=Object.create(Object.getPrototypeOf(this));return Object.assign(e,this),e.id=Zc(),e.version=0,e.defines={...this.defines},e.bindings={...this.bindings},e.uniformBlock=new js("MaterialParams",Object.fromEntries(this.uniformBlock.order.map(t=>[t,[this.uniformBlock.layout[t].typeStr,Cu(this.uniforms[t].value)]])),{label:e.name}),e.uniforms=e.uniformBlock.fields,e._listeners=[],e}}function Cu(s){return s&&typeof s=="object"&&s.clone?s.clone():Array.isArray(s)?s.map(Cu):s}function Or(s,e){return s==null?e:s.isColor?e.copy?e.copy(s):s.clone():typeof s=="number"||typeof s=="string"?e.set(s):Array.isArray(s)?e.setRGB(s[0],s[1],s[2]):s.isVector3?e.setRGB(s.x,s.y,s.z):e}function Xr(s){if(!s||s==="none")return;if(typeof s=="object")return s;const e=(t,n,i="add")=>({srcFactor:t,dstFactor:n,operation:i});switch(s){case"normal":return{color:e("src-alpha","one-minus-src-alpha"),alpha:e("one","one-minus-src-alpha")};case"premultiplied":return{color:e("one","one-minus-src-alpha"),alpha:e("one","one-minus-src-alpha")};case"additive":return{color:e("src-alpha","one"),alpha:e("zero","one")};case"add":return{color:e("one","one"),alpha:e("one","one")};case"multiply":return{color:e("dst","zero"),alpha:e("zero","one")};case"min":return{color:e("one","one","min"),alpha:e("one","one","min")};case"max":return{color:e("one","one","max"),alpha:e("one","one","max")}}throw new Error("unknown blending "+s)}const Pu={view:"mat4x4f",proj:"mat4x4f",viewProj:"mat4x4f",invView:"mat4x4f",invProj:"mat4x4f",invViewProj:"mat4x4f",viewProjNoJitter:"mat4x4f",prevViewProjNoJitter:"mat4x4f",cameraPos:["vec3f",new Ie],near:["f32",.1],prevCameraPos:["vec3f",new Ie],far:["f32",6e4],resolution:["vec2f",new Tt(1,1)],invResolution:["vec2f",new Tt(1,1)],outputResolution:["vec2f",new Tt(1,1)],jitter:["vec2f",new Tt],prevJitter:["vec2f",new Tt],frameIndex:["u32",0],time:["f32",0],dt:["f32",1/60],seaLevel:["f32",0],sunDir:["vec3f",new Ie(.3,.6,-.7).normalize()],night:["f32",0],sunColor:["vec3f",new Xn(1,1,1)],exposure:["f32",1],skyIrradiance:["vec3f",new Xn(.3,.4,.6)],cameraUnderwater:["f32",0],horizonColor:["vec3f",new Xn(.6,.7,.8)],cameraWaterHeight:["f32",0],waterAbsorption:["vec3f",new Ie(.42,.075,.035)],windSpeed:["f32",7],waterScattering:["vec3f",new Ie(.012,.018,.024)],envIntensity:["f32",1],windDir:["vec2f",new Tt(.35,.94).normalize()],reversedDepth:["f32",1],pad0:["f32",0],debug:["vec4f",new Ht]},xv=["view","proj","viewProj","invView","invProj","invViewProj","viewProjNoJitter","prevViewProjNoJitter","cameraPos","near","prevCameraPos","far","resolution","invResolution","jitter","prevJitter","reversedDepth"],$n=new js("Frame",Pu,{label:"frame"});$_($n);function Iu(s){const e=new js("Frame",Pu,{label:s});return e.onBeforePack=()=>{for(const t of $n.order)xv.includes(t)||(e.fields[t].value=$n.fields[t].value)},e}const Ft=$n.fields;Ft.time,Ft.dt,Ft.seaLevel,Ft.sunDir,Ft.sunColor,Ft.skyIrradiance,Ft.horizonColor,Ft.waterAbsorption,Ft.waterScattering,Ft.cameraUnderwater,Ft.cameraWaterHeight,Ft.exposure,Ft.windDir,Ft.windSpeed,Ft.night,Ft.envIntensity;const Jc=new at;function ba(s,e,t,{jitterX:n=0,jitterY:i=0,prevViewProj:r=null,prevCameraPos:o=null,block:a=$n}={}){const l=a.fields;s.updateMatrixWorld(),s.matrixWorldInverse&&s.matrixWorldInverse.copy(s.matrixWorld).invert();const c=s.matrixWorldInverse,h=s.projectionMatrix;l.view.value=c.clone(),l.proj.value=h.clone();const u=new at().multiplyMatrices(h,c);l.viewProjNoJitter.value=u.clone();const f=2*n/e,d=2*i/t;Jc.makeTranslation(f,d,0);const m=new at().multiplyMatrices(Jc,u);l.viewProj.value=m,l.invView.value=s.matrixWorld.clone(),l.invProj.value=h.clone().invert(),l.invViewProj.value=m.clone().invert(),l.prevViewProjNoJitter.value=r?r.clone():u.clone(),l.cameraPos.value=new Ie().setFromMatrixPosition(s.matrixWorld),l.prevCameraPos.value=o?o.clone():l.cameraPos.value.clone(),l.near.value=s.near,l.far.value=s.far,l.resolution.value=new Tt(e,t),l.invResolution.value=new Tt(1/e,1/t),l.prevJitter.value=l.jitter.value?l.jitter.value.clone():new Tt,l.jitter.value=new Tt(f,d),l.reversedDepth.value=s.reversedDepth===!1?0:1}const Qc=new Zn,eh=new ao,th=new at,_v=new Ie,nh=new Ie,ih=new WeakMap,sh=new WeakMap;function vv(s,e){let t=sh.get(s);t||(sh.set(s,t=new Set),s.addEventListener&&s.addEventListener("dispose",()=>{for(const n of t)for(const i of[s.id,s.id+":1",s.id+":2"])n.delete(i);t.clear()})),t.add(e)}let yv=0;const Zi=256,rh=40;class Mv{constructor(){this.pipelines=new Map,this._materialKeys=new WeakMap,this.geometries=new WeakMap,this.capacity=8192,this.drawBuffer=null,this.drawData=null,this.drawCount=0,this.frame=-1,this.stats={draws:0,triangles:0,pipelines:0},this.drawLayout=null,this.drawBindGroup=null,this.syncPipelines=!0,this.passConfigs=new Map}dispose(){this.drawBuffer&&this.drawBuffer.destroy(),this.drawBuffer=null,this.drawData=null,this.drawBindGroup=null,this.pipelines.clear()}_ensureDrawBuffer(){this.drawBuffer&&this.drawData.byteLength>=this.capacity*Zi||(this.drawBuffer&&this.drawBuffer.destroy(),this.drawBuffer=Ue.device.createBuffer({label:"draws",size:this.capacity*Zi,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.drawData=new Float32Array(this.capacity*Zi/4),this.drawLayout=yu([{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform",hasDynamicOffset:!0,minBindingSize:rh*4}}],"draw"),this.drawBindGroup=Ue.device.createBindGroup({label:"draws",layout:this.drawLayout,entries:[{binding:0,resource:{buffer:this.drawBuffer,size:rh*4}}]}))}_beginFrame(){this.frame!==Ue.frame&&(this.frame=Ue.frame,this._ensureDrawBuffer(),this.drawCount>this.capacity*.75&&(this.capacity*=2,this._ensureDrawBuffer()),this.drawCount=0,Ue.onSubmit(()=>{this.drawCount&&Ue.queue.writeBuffer(this.drawBuffer,0,this.drawData.buffer,0,this.drawCount*Zi)}),this.stats.draws=0,this.stats.triangles=0)}_slot(e){let t=e.__draw;if(t||(t=e.__draw={frame:-1,slot:0,cur:new Float32Array(16),prev:new Float32Array(16),has:!1}),t.frame===Ue.frame)return t.slot;if(this.drawCount>=this.capacity)throw new Error("MeshRenderer: draw buffer full");t.frame=Ue.frame,t.slot=this.drawCount++;const n=e.matrixWorld.elements;t.has&&!e.resetVelocity?t.prev.set(t.cur):t.prev.set(n),t.cur.set(n),t.has=!0,e.resetVelocity=!1;const i=t.slot*Zi/4,r=this.drawData;r.set(t.cur,i),r.set(e.staticVelocity?t.cur:t.prev,i+16);const o=e.drawParams;if(r[i+32]=e.id??0,r[i+33]=o?o[0]:0,r[i+34]=o?o[1]:0,r[i+35]=o?o[2]:0,o&&o.length>3)for(let a=0;a<4;a++)r[i+36+a]=o[3+a]??0;return t.slot}_geometryGPU(e){let t=this.geometries.get(e);return t||(t={buffers:new Map,index:null,indexVersion:-1},this.geometries.set(e,t),e.addEventListener&&e.addEventListener("dispose",()=>{for(const n of t.buffers.values())n.buffer.destroy();t.index&&t.index.buffer.destroy(),this.geometries.delete(e)})),t}_attributeBuffer(e,t){const n=this._geometryGPU(e),i=t.isInterleavedBufferAttribute?t.data:t;if(i.gpuBuffer)return i.gpuBuffer.getGPU?i.gpuBuffer.getGPU():i.gpuBuffer;let r=n.buffers.get(i);const o=i.version??0;if(r&&r.version===o&&r.array===i.array)return r.buffer;const a=Sv(t);if((!r||r.size<a.byteLength)&&(r&&r.buffer.destroy(),r={buffer:Ue.device.createBuffer({label:t.name||"attribute",size:Math.max(16,qr(a.byteLength)),usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),size:a.byteLength,version:-1},n.buffers.set(i,r)),r.version!==o){const l=i.updateRanges&&i.updateRanges.length&&r.version>=0?i.updateRanges:null;if(l&&a.array===i.array){const c=i.array.BYTES_PER_ELEMENT;for(const h of l)Ue.queue.writeBuffer(r.buffer,h.start*c,i.array.buffer,i.array.byteOffset+h.start*c,qr(h.count*c));i.clearUpdateRanges?i.clearUpdateRanges():i.updateRanges.length=0}else oh(r.buffer,a);r.version=o}return r.array=i.array,r.buffer}_indexBuffer(e){const t=e.index;if(!t)return null;const n=this._geometryGPU(e);if(n.indexRef&&n.indexSrc===t.array&&n.indexVersion===(t.version??0))return n.indexRef;const i=t.array instanceof Uint16Array||t.array instanceof Uint32Array?t.array:new Uint32Array(t.array);return(!n.index||n.index.size<i.byteLength)&&(n.index&&n.index.buffer.destroy(),n.index={buffer:Ue.device.createBuffer({label:"index",size:Math.max(16,qr(i.byteLength)),usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),size:i.byteLength},n.indexVersion=-1),n.indexVersion!==(t.version??0)&&(oh(n.index.buffer,i),n.indexVersion=t.version??0),n.indexSrc=t.array,n.indexRef={buffer:n.index.buffer,format:i instanceof Uint16Array?"uint16":"uint32"},n.indexRef}_cachedLayout(e,t,n){let i=ih.get(t);i||ih.set(t,i=new Map);const r=e.isInstancedMesh?e.instanceColor?2:1:0,o=r?n.id+":"+r:n.id;let a=i.get(o);if(a&&a.version===n.version&&a.attrsVersion===t.attributesVersion&&(!r||a.instanceMatrix===e.instanceMatrix)){const h=a.refs,u=a.names,f=t.attributes;let d=!0;for(let m=0;m<u.length;m++)if(f[u[m]]!==h[m]){d=!1;break}if(d)return a.vl}const l=this._layout(e,t,n),c=l.layout.filter(h=>!h.name.startsWith("instance")).map(h=>h.name);return a={version:n.version,attrsVersion:t.attributesVersion,instanceMatrix:e.instanceMatrix,names:c,refs:c.map(h=>t.attributes[h]),vl:l},l.pipelines=new Map,i.set(o,a),vv(n,i),l}_layout(e,t,n){const i=[],r=["position","normal","uv","color",...Object.keys(n.attributes)];for(const u of r){const f=t.attributes[u];f&&!(u==="color"&&!n.vertexColors&&!n.attributes.color)&&i.push({name:u,attr:f})}if(e.isInstancedMesh){for(let u=0;u<4;u++)i.push({name:"instanceMatrix"+u,attr:e.instanceMatrix,column:u});e.instanceColor&&i.push({name:"instanceColor",attr:e.instanceColor})}const o=[],a=[],l=new Map;let c=0;for(const u of i){const f=u.attr,d=f.isInterleavedBufferAttribute?f.data:f,m=!!(f.isInstancedBufferAttribute||d.isInstancedInterleavedBuffer||f.meshPerAttribute||d.meshPerAttribute)||u.name.startsWith("instance"),x=Lu(f);let g=l.get(d);if(g===void 0){g=o.length,l.set(d,g);const v=f.isInterleavedBufferAttribute?f.data.stride*x.bytesPerComponent:f.itemSize*x.bytesPerComponent;o.push({src:d,attr:f,layout:{arrayStride:x.converted?x.itemSize*4:v,stepMode:m?"instance":"vertex",attributes:[]}})}let p=f.isInterleavedBufferAttribute?f.offset*x.bytesPerComponent:0,M=x.format,_=x.wgsl;u.column!==void 0&&(p=u.column*16,M="float32x4",_="vec4f"),o[g].layout.attributes.push({shaderLocation:c,offset:p,format:M}),(u.name==="position"||u.name==="normal")&&(_="vec3f"),u.name==="uv"&&(_="vec2f"),u.name==="color"&&(_=f.itemSize===4?"vec4f":"vec3f"),u.name==="instanceColor"&&(_="vec3f"),n.attributes[u.name]&&(_=n.attributes[u.name]),a.push({name:u.name,wgsl:_,location:c,instanced:m}),c++}return{key:a.map(u=>`${u.name}:${u.wgsl}`).join(",")+"|"+o.map(u=>`${u.layout.arrayStride}/${u.layout.stepMode}/${u.layout.attributes.map(f=>f.format+"@"+f.offset).join(";")}`).join(","),layout:a,buffers:o}}_pipeline(e,t,n){e.__pkFrame!==Ue.frame&&(e.__pk=e.pipelineKey()+"|"+Tu.version,e.__pkFrame=Ue.frame);const i=n.passKey;let r=t.pipelines&&t.pipelines.get(i);if(r&&r.materialKey===e.__pk)return r.p;const o=`${e.__pk}|${t.key}|${i}`;let a=this.pipelines.get(o);return a||(a=this._createPipeline(e,t,n,o),this._track(e,o)),t.pipelines&&t.pipelines.set(i,{materialKey:e.__pk,p:a}),a}_track(e,t){let n=this._materialKeys.get(e);n||(this._materialKeys.set(e,n=new Set),e.addEventListener&&e.addEventListener("dispose",()=>{for(const i of n)this.pipelines.delete(i);n.clear()})),n.add(t)}_createPipeline(e,t,n,i){const r=pv(e,t.layout,n),o=bu({modules:r.modules,bindings:r.bindings,code:r.code,defines:r.defines,stage:"render",label:e.name}),a=wu(o.code,e.name);this._ensureDrawBuffer();const l=Ue.device.createPipelineLayout({bindGroupLayouts:[o.group0.layout,o.bindings.layout,this.drawLayout]}),c=Xr(e.blending);let h=[];n.kind==="main"?h=[{format:n.colorFormats[0],blend:e.transparent||n.late?c:void 0,writeMask:e.colorWrite?GPUColorWrite.ALL:0},{format:n.colorFormats[1],blend:n.late?Xr("premultiplied"):void 0,writeMask:e.colorWrite?GPUColorWrite.ALL:0},{format:n.colorFormats[2],blend:Xr("normal"),writeMask:e.colorWrite?GPUColorWrite.ALL:0}]:n.kind==="color"&&(h=n.colorFormats.map(g=>({format:g,blend:c,writeMask:e.colorWrite?GPUColorWrite.ALL:0})));const u=e.side,f=n.cullOverride||(u==="double"?"none":u==="back"?"front":"back"),d=e.depthTest?e.depthCompare||n.depthCompare:"always",m={label:e.name+" "+n.kind,layout:l,vertex:{module:a,entryPoint:"vs",buffers:t.buffers.map(g=>g.layout)},primitive:{topology:e.topology,cullMode:f,frontFace:"ccw"}};r.hasFragment&&(m.fragment={module:a,entryPoint:"fs",targets:h}),n.depthFormat&&(m.depthStencil={format:n.depthFormat,depthWriteEnabled:e.depthWrite,depthCompare:d,depthBias:n.kind==="depth"?n.depthBias||0:e.depthBias,depthBiasSlopeScale:n.kind==="depth"?n.depthBiasSlopeScale||0:e.depthBiasSlopeScale});const x={handle:Ue.renderPipeline(m),bindings:o.bindings,label:m.label};return this.pipelines.set(i,x),this.stats.pipelines=this.pipelines.size,x}prepare(e){const t=this.precompiling;this.precompiling=!0;let n=0;try{for(const i of this.passConfigs.values()){const r=this.collect(e,{camera:null,layerMask:i.layerMask,filter:i.filter,kind:i.kind,cull:!1,hooks:!1});for(const o of[...r.opaque,...r.transparent]){const a=o.geometry;if(!(!a.attributes.position&&!a.vertexCount&&!a.indirect))try{this._pipeline(o.material,this._cachedLayout(o.object,a,o.material),i),n++}catch{}}}}finally{this.precompiling=t}return n}collect(e,{camera:t,layerMask:n=4294967295,filter:i=null,kind:r="main",cull:o=!0,hooks:a=!0}){const l=[],c=[];t&&(t.updateMatrixWorld(),th.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse.copy(t.matrixWorld).invert()),eh.setFromProjectionMatrix(th,t.reversedDepth!==!1),nh.setFromMatrixPosition(t.matrixWorld));const h=this.precompiling,u=f=>{if(!(!f.visible&&!h)){f.isMesh&&f.material&&f.geometry&&(f.layers.mask&n)!==0&&(!i||i(f))&&(r!=="depth"||f.castShadow)&&(h||!o||!t||f.frustumCulled===!1||this._inFrustum(f))&&(a&&f.onBeforeRender&&f.onBeforeRender(null,null,t,f.geometry,f.material,null),(f.visible||h)&&this._addItems(f,l,c));for(const d of f.children)u(d)}};return e.updateMatrixWorld(),u(e),l.sort((f,d)=>f.renderOrder-d.renderOrder||f.pipeKey-d.pipeKey||f.z-d.z),c.sort((f,d)=>f.renderOrder-d.renderOrder||d.z-f.z),{opaque:l,transparent:c}}_inFrustum(e){let t=null;return e.isInstancedMesh?(!e.boundingSphere&&e.computeBoundingSphere&&e.computeBoundingSphere(),t=e.boundingSphere):(e.geometry.boundingSphere||e.geometry.computeBoundingSphere(),t=e.geometry.boundingSphere),!t||t.radius<0||!Number.isFinite(t.radius)?!0:(Qc.copy(t).applyMatrix4(e.matrixWorld),eh.intersectsSphere(Qc))}_addItems(e,t,n){const i=e.geometry,r=Array.isArray(e.material)?e.material:null,o=_v.setFromMatrixPosition(e.matrixWorld).distanceToSquared(nh),a=(c,h,u)=>{if(!c||!c.visible&&!this.precompiling)return;const f={object:e,geometry:i,material:c,start:h,count:u,z:o,renderOrder:e.renderOrder||0,pipeKey:c.id};(c.transparent?n:t).push(f)},l=i.drawRange||{start:0,count:1/0};if(r&&i.groups&&i.groups.length)for(const c of i.groups){const h=Math.max(c.start,l.start),u=Math.min(c.start+c.count,l.start+l.count);u>h&&a(r[c.materialIndex],h,u-h)}else a(r?r[0]:e.material,l.start,l.count)}render(e,t){this._beginFrame(),t={kind:"main",late:!1,colorFormats:[],depthFormat:null,depthCompare:"greater-equal",frameBlock:$n,layerMask:4294967295,...t},t.passKey=`${t.kind}.${t.late?1:0}.${t.colorFormats.join(",")}.${t.depthFormat}.${t.depthCompare}.${t.cullOverride||""}.${t.defines?JSON.stringify(t.defines):""}`,this.passConfigs.has(t.passKey)||this.passConfigs.set(t.passKey,{kind:t.kind,late:t.late,colorFormats:t.colorFormats,depthFormat:t.depthFormat,depthCompare:t.depthCompare,cullOverride:t.cullOverride,depthBias:t.depthBias,depthBiasSlopeScale:t.depthBiasSlopeScale,defines:t.defines,layerMask:t.layerMask,filter:t.filter||null,passKey:t.passKey});const n=t.items||this.collect(e,t),i=Ue.getEncoder(),r=(t.colorViews||[]).map((l,c)=>{const h=t.clearColors?t.clearColors[c]:null;return{view:l,loadOp:h?"clear":"load",storeOp:"store",clearValue:h||[0,0,0,0]}}),o={label:t.label||t.kind,colorAttachments:r};t.depthView&&(o.depthStencilAttachment={view:t.depthView,depthLoadOp:t.clearDepth===null||t.clearDepth===void 0?"load":"clear",depthStoreOp:"store",depthClearValue:t.clearDepth??0}),t.timestampWrites&&(o.timestampWrites=t.timestampWrites);const a=i.beginRenderPass(o);t.viewport&&a.setViewport(...t.viewport),a.setBindGroup(0,Su(t.frameBlock,"render").getBindGroup()),this.drawItems(a,n.opaque,t),t.betweenLists&&t.betweenLists(a),this.drawItems(a,n.transparent,t),t.after&&t.after(a),a.end()}drawItems(e,t,n){let i=null,r=null;const o=++yv;for(const a of t){const{object:l,geometry:c,material:h}=a;if(!c.attributes.position&&!c.vertexCount&&!c.indirect)continue;let u,f;if(this.precompiling){try{u=this._cachedLayout(l,c,h),f=this._pipeline(h,u,n)}catch{continue}continue}u=this._cachedLayout(l,c,h),f=this._pipeline(h,u,n);const d=f.handle.pipeline||(this.syncPipelines?Ue.ready(f.handle):null);if(!d)continue;f!==i&&(e.setPipeline(d),i=f);const m=f.bindings.getBindGroup(o);m!==r&&(e.setBindGroup(1,m),r=m),e.setBindGroup(2,this.drawBindGroup,[this._slot(l)*Zi]);for(let p=0;p<u.buffers.length;p++)e.setVertexBuffer(p,this._attributeBuffer(c,u.buffers[p].attr));const x=l.isInstancedMesh?l.count:c.instanceCount??1;if(x===0)continue;const g=this._indexBuffer(c);if(c.indirect){const p=c.indirect.buffer.getGPU?c.indirect.buffer.getGPU():c.indirect.buffer,M=c.indirect.offsets||[c.indirect.offset||0];g&&e.setIndexBuffer(g.buffer,g.format);for(const _ of M)g?e.drawIndexedIndirect(p,_):e.drawIndirect(p,_),this.stats.draws++;continue}if(g){const p=Math.min(a.count,c.index.count-a.start);if(p<=0)continue;e.setIndexBuffer(g.buffer,g.format),e.drawIndexed(p,x===1/0?1:x,a.start,0,0),this.stats.triangles+=p/3*x}else{const p=c.attributes.position?c.attributes.position.count:c.vertexCount,M=Math.min(a.count,p-a.start);if(M<=0)continue;e.draw(M,x,a.start,0),this.stats.triangles+=M/3*x}this.stats.draws++}}}function qr(s){return Math.ceil(s/4)*4}function oh(s,e){if(e.byteLength%4===0){Ue.queue.writeBuffer(s,0,e.buffer,e.byteOffset,e.byteLength);return}const t=new Uint8Array(qr(e.byteLength));t.set(new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),Ue.queue.writeBuffer(s,0,t)}const ah=new WeakMap;function Sv(s){const e=s.isInterleavedBufferAttribute?s.data:s;if(!Lu(s).converted)return e.array;let n=ah.get(e);if(n&&n.version===e.version)return n.array;const i=s.count,r=s.itemSize,o=new Float32Array(i*r),a=s.normalized?bv(e.array):1;for(let l=0;l<i*r;l++)o[l]=e.array[l]/a;return ah.set(e,{version:e.version,array:o}),o}function bv(s){return s instanceof Uint8Array?255:s instanceof Int8Array?127:s instanceof Uint16Array?65535:s instanceof Int16Array?32767:1}function Lu(s){const t=(s.isInterleavedBufferAttribute?s.data:s).array,n=s.itemSize,i=s.normalized,r=a=>n===1?a:`vec${n}${a==="f32"?"f":a==="u32"?"u":"i"}`;if(t instanceof Float32Array)return{format:n===1?"float32":`float32x${n}`,wgsl:r("f32"),bytesPerComponent:4,itemSize:n};if(t instanceof Uint32Array)return{format:n===1?"uint32":`uint32x${n}`,wgsl:r("u32"),bytesPerComponent:4,itemSize:n};if(t instanceof Int32Array)return{format:n===1?"sint32":`sint32x${n}`,wgsl:r("i32"),bytesPerComponent:4,itemSize:n};const o={Uint8Array:["uint8","unorm8",1],Int8Array:["sint8","snorm8",1],Uint16Array:["uint16","unorm16",2],Int16Array:["sint16","snorm16",2]}[t.constructor.name];if(o&&(n===2||n===4)&&!s.isInterleavedBufferAttribute){const a=(i?o[1]:o[0])+"x"+n,l=r(i?"f32":t instanceof Uint8Array||t instanceof Uint16Array?"u32":"i32");return{format:a,wgsl:l,bytesPerComponent:o[2],itemSize:n}}return{format:n===1?"float32":`float32x${n}`,wgsl:r("f32"),bytesPerComponent:4,itemSize:n,converted:!0}}let wv=0;const Tv=new Set,Ev=new Set;class Ks{constructor(e={}){this.id=wv++,this.label=e.label||e.name||"texture"+this.id,globalThis.__viTrackResources&&Tv.add(this),this.width=Math.max(1,e.width||1),this.height=Math.max(1,e.height||1),this.depth=Math.max(1,e.depth||(e.dimension==="cube"?6:1)),this.dimension=e.dimension||"2d",this.format=e.format||"rgba8unorm",this.mipsOption=e.mips??!1,this.sampleCount=e.sampleCount||1;const t=e.usage||["sample","copyDst"];this.usageList=t,this.sampler=e.sampler||"linearClamp",this.gpu=null,this.version=0,this._views=new Map,this.isTexture=!0,e.data&&(this.pendingData=e.data)}get mipLevelCount(){return this.mipsOption===!0?Math.floor(Math.log2(Math.max(this.width,this.height,this.dimension==="3d"?this.depth:1)))+1:typeof this.mipsOption=="number"?this.mipsOption:1}get usage(){let e=0;for(const t of this.usageList)e|={sample:GPUTextureUsage.TEXTURE_BINDING,render:GPUTextureUsage.RENDER_ATTACHMENT,storage:GPUTextureUsage.STORAGE_BINDING,copySrc:GPUTextureUsage.COPY_SRC,copyDst:GPUTextureUsage.COPY_DST}[t];return this.mipLevelCount>1&&(e|=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING),globalThis.__viTrackResources&&this.sampleCount===1&&(e|=GPUTextureUsage.COPY_SRC),e}get isDepth(){return this.format.startsWith("depth")}get sampleType(){return F_(this.format)}wgslType(e=this.defaultViewDimension){const t=this.sampleType;if(t==="depth")return{"2d":"texture_depth_2d","2d-array":"texture_depth_2d_array",cube:"texture_depth_cube"}[e];const n=t==="uint"?"u32":t==="sint"?"i32":"f32";return`texture_${e.replace("-","_")}<${n}>`}get defaultViewDimension(){return this.dimension}getGPU(){return this.gpu||this._create(),this.gpu}_create(){const e=this.dimension==="3d"?"3d":"2d";if(this.gpu=Ue.device.createTexture({label:this.label,size:{width:this.width,height:this.height,depthOrArrayLayers:this.depth},dimension:e,format:this.format,mipLevelCount:this.mipLevelCount,sampleCount:this.sampleCount,usage:this.usage}),this._views.clear(),this.version++,this.pendingData){const t=this.pendingData;this.pendingData=null,this.upload(t)}}view(e=null){const t=this.getGPU(),n=e?JSON.stringify(e):"";let i=this._views.get(n);return i||(i=t.createView({label:this.label+n,dimension:e?.dimension||this.defaultViewDimension,...e||{}}),this._views.set(n,i)),i}resize(e,t,n=this.depth){if(e=Math.max(1,Math.floor(e)),t=Math.max(1,Math.floor(t)),e===this.width&&t===this.height&&n===this.depth&&this.gpu)return!1;if(this.width=e,this.height=t,this.depth=n,this.gpu){const i=this.gpu;Ue.onSubmit(null,()=>i.destroy()),this.gpu=null}return this._create(),!0}upload(e,{mip:t=0,layer:n=0,layers:i=null,width:r=null,height:o=null,x:a=0,y:l=0}={}){if(!this.gpu){if(t===0&&n===0&&!r){this.pendingData=e,this.getGPU();return}this.getGPU()}const c=qa(this.format).bytes,h=r||Math.max(1,this.width>>t),u=o||Math.max(1,this.height>>t),f=i||(this.dimension==="3d"?Math.max(1,this.depth>>t):this.depth-n),d=e instanceof ArrayBuffer?e:e.buffer,m=e instanceof ArrayBuffer?0:e.byteOffset;Ue.queue.writeTexture({texture:this.gpu,mipLevel:t,origin:{x:a,y:l,z:n}},d,{offset:m,bytesPerRow:h*c,rowsPerImage:u},{width:h,height:u,depthOrArrayLayers:f})}destroy(){this.gpu&&this.gpu.destroy(),this.gpu=null,this.version++}}class Fs{constructor(e,t,{colors:n=["rgba16float"],depth:i=null,label:r="rt",mips:o=!1,usage:a=["sample","render","copySrc","copyDst"],depthUsage:l=["sample","render","copySrc","copyDst"],scale:c=1}={}){this.label=r,this.width=Math.max(1,e|0),this.height=Math.max(1,t|0),this.scale=c,this.textures=n.map((h,u)=>{const f=typeof h=="string"?{format:h}:h;return new Ks({label:`${r}.${f.name||u}`,width:this.width,height:this.height,format:f.format,mips:f.mips??o,usage:f.usage||a})}),this.depthTexture=i?new Ks({label:r+".depth",width:this.width,height:this.height,format:i,usage:l}):null}get texture(){return this.textures[0]}get formats(){return this.textures.map(e=>e.format)}setSize(e,t){if(e=Math.max(1,e|0),t=Math.max(1,t|0),e===this.width&&t===this.height)return!1;this.width=e,this.height=t;for(const n of this.textures)n.resize(e,t);return this.depthTexture&&this.depthTexture.resize(e,t),!0}}let Av=0;class Rv{constructor({label:e,count:t,type:n="vec4f",stride:i=null,data:r=null,usage:o=[]}){if(this.id=Av++,this.label=e||"buffer"+this.id,globalThis.__viTrackResources&&Ev.add(this),this.count=t,this.type=n,this.stride=i||{f32:4,u32:4,i32:4,"atomic<u32>":4,"atomic<i32>":4,vec2f:8,vec2u:8,vec3f:16,vec4f:16,vec4u:16,vec4i:16,mat4x4f:64}[n],!this.stride)throw new Error(`StorageBuffer ${this.label}: pass a stride for ${n}`);this.byteLength=Math.max(16,t*this.stride),this.extraUsage=o,this.gpu=null,this.version=0,this.pendingData=r,this.isStorageBuffer=!0}getGPU(){if(!this.gpu){let e=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC;for(const t of this.extraUsage)e|={vertex:GPUBufferUsage.VERTEX,index:GPUBufferUsage.INDEX,indirect:GPUBufferUsage.INDIRECT,uniform:GPUBufferUsage.UNIFORM}[t];if(this.gpu=Ue.device.createBuffer({label:this.label,size:Math.ceil(this.byteLength/4)*4,usage:e}),this.version++,this.pendingData){const t=this.pendingData;this.pendingData=null,this.write(t)}}return this.gpu}write(e,t=0){if(!this.gpu){if(t===0){this.pendingData=e,this.getGPU();return}this.getGPU()}Ue.queue.writeBuffer(this.gpu,t,e.buffer||e,e.byteOffset||0,e.byteLength??void 0)}destroy(){this.gpu&&this.gpu.destroy(),this.gpu=null}}const Cv=`
struct FSIn { @builtin( position ) pos: vec4f, @location( 0 ) uv: vec2f };
@vertex fn vs( @builtin( vertex_index ) i: u32 ) -> FSIn {
	let p = vec2f( f32( ( i << 1u ) & 2u ), f32( i & 2u ) );
	var o: FSIn;
	o.pos = vec4f( p * 2.0 - 1.0, FS_DEPTH, 1.0 );
	o.uv = vec2f( p.x, 1.0 - p.y );
	return o;
}
`;class wa{constructor({label:e="fullscreen",modules:t=[],bindings:n={},code:i,colorFormats:r=["rgba16float"],blend:o="none",defines:a={},depthFormat:l=null,depthCompare:c="always",depthWrite:h=!1,depth:u=0,writeMasks:f=null,blends:d=null}){this.label=e,this.colorFormats=r;const m=i.includes("@fragment")?i:`${i}
@fragment fn fs( in: FSIn ) -> @location( 0 ) vec4f { return fragment( in ); }
`,x=bu({modules:[Ai,...t],bindings:n,code:Cv.replace("FS_DEPTH",u.toFixed(6))+m,defines:a,stage:"render",label:e});this.source=x.code,this.bindings=x.bindings;const g=wu(x.code,e),p={label:e,layout:Ue.device.createPipelineLayout({bindGroupLayouts:[x.group0.layout,x.bindings.layout]}),vertex:{module:g,entryPoint:"vs"},fragment:{module:g,entryPoint:"fs",targets:r.map((M,_)=>({format:M,blend:Xr(d?d[_]:_===0?o:"none"),writeMask:f?f[_]:GPUColorWrite.ALL}))},primitive:{topology:"triangle-list"}};l&&(p.depthStencil={format:l,depthCompare:c,depthWriteEnabled:h}),this.handle=Ue.renderPipeline(p),this.timestampWrites=null}get pipeline(){return Ue.ready(this.handle)}draw(e,t=$n){e.setPipeline(Ue.ready(this.handle)),e.setBindGroup(0,Su(t,"render").getBindGroup()),e.setBindGroup(1,this.bindings.getBindGroup()),e.draw(3)}render({colorViews:e,clear:t=null,viewport:n=null,frameBlock:i=$n,depthView:r=null,encoder:o=Ue.getEncoder()}={}){const a=e.map(h=>h.isTexture?h.view({dimension:"2d",mipLevelCount:1}):h),l={label:this.label,colorAttachments:a.map(h=>({view:h,loadOp:t?"clear":"load",storeOp:"store",clearValue:t||[0,0,0,0]}))};r&&(l.depthStencilAttachment={view:r,depthLoadOp:"load",depthStoreOp:"store"}),this.timestampWrites&&(l.timestampWrites=this.timestampWrites);const c=o.beginRenderPass(l);n&&c.setViewport(...n),this.draw(c,i),c.end()}}class lo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].includes(t)}removeEventListener(e,t){const n=this._listeners&&this._listeners[e];if(n===void 0)return;const i=n.indexOf(t);i!==-1&&n.splice(i,1)}dispatchEvent(e){const t=this._listeners&&this._listeners[e.type];if(t!==void 0){e.target=this;for(const n of t.slice())n.call(this,e);e.target=null}}}class Pv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Iv=0;const lh=new Ie,Ji=new hn,zn=new at,zr=new Ie,Ps=new Ie,Lv=new Ie,Dv=new hn,ch=new Ie(1,0,0),hh=new Ie(0,1,0),uh=new Ie(0,0,1),fh={type:"added"},Nv={type:"removed"},oa={type:"childadded",child:null},aa={type:"childremoved",child:null};class tn extends lo{constructor(){super(),Object.defineProperty(this,"id",{value:Iv++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new Ie,t=new hi,n=new hn,i=new Ie(1,1,1);t._onChange(()=>n.setFromEuler(t,!1)),n._onChange(()=>t.setFromQuaternion(n,void 0,!1)),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new Li}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}onBeforeRender(){}onAfterRender(){}onBeforeShadow(){}onAfterShadow(){}dispose(){this.dispatchEvent({type:"dispose"})}applyMatrix4(e){return this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(ch,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ch,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zr.copy(e):zr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ps,zr,this.up):zn.lookAt(zr,Ps,this.up),this.quaternion.setFromRotationMatrix(zn),i&&(zn.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(zn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?this:(e&&e.isObject3D&&(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fh),oa.child=e,this.dispatchEvent(oa),oa.child=null),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nv),aa.child=e,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){return this.parent!==null&&this.parent.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fh),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(const n of this.children){const i=n.getObjectByProperty(e,t);if(i!==void 0)return i}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);for(const i of this.children)i.getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,Lv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Dv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(n===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(n.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].matrixWorldAutoUpdate===!0&&i[r].updateWorldMatrix(!1,!0)}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,e.onBeforeRender!==tn.prototype.onBeforeRender&&(this.onBeforeRender=e.onBeforeRender),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(const n of e.children)this.add(n.clone());return this}}tn.DEFAULT_UP=new Ie(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;tn.prototype.isObject3D=!0;const Du=35044,Ut=new Ie,la=new Tt,Nu={getComponent(s,e){const t=this.array[this._idx(s,e)];return this.normalized?K_(t,this.array):t},setComponent(s,e,t){return this.array[this._idx(s,e)]=this.normalized?Z_(t,this.array):t,this},getX(s){return this.getComponent(s,0)},getY(s){return this.getComponent(s,1)},getZ(s){return this.getComponent(s,2)},getW(s){return this.getComponent(s,3)},setX(s,e){return this.setComponent(s,0,e)},setY(s,e){return this.setComponent(s,1,e)},setZ(s,e){return this.setComponent(s,2,e)},setW(s,e){return this.setComponent(s,3,e)},setXY(s,e,t){return this.setComponent(s,0,e),this.setComponent(s,1,t)},setXYZ(s,e,t,n){return this.setComponent(s,0,e),this.setComponent(s,1,t),this.setComponent(s,2,n)},setXYZW(s,e,t,n,i){return this.setComponent(s,0,e),this.setComponent(s,1,t),this.setComponent(s,2,n),this.setComponent(s,3,i)},applyMatrix3(s){if(this.itemSize===2)for(let e=0;e<this.count;e++)la.fromBufferAttribute(this,e).applyMatrix3(s),this.setXY(e,la.x,la.y);else if(this.itemSize===3)for(let e=0;e<this.count;e++)Ut.fromBufferAttribute(this,e).applyMatrix3(s),this.setXYZ(e,Ut.x,Ut.y,Ut.z);return this},applyMatrix4(s){for(let e=0;e<this.count;e++)Ut.fromBufferAttribute(this,e).applyMatrix4(s),this.setXYZ(e,Ut.x,Ut.y,Ut.z);return this},applyNormalMatrix(s){for(let e=0;e<this.count;e++)Ut.fromBufferAttribute(this,e).applyNormalMatrix(s),this.setXYZ(e,Ut.x,Ut.y,Ut.z);return this},transformDirection(s){for(let e=0;e<this.count;e++)Ut.fromBufferAttribute(this,e).transformDirection(s),this.setXYZ(e,Ut.x,Ut.y,Ut.z);return this}};class un extends lo{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Du,this.updateRanges=[],this.gpuType=1015,this.version=0,this.onUploadCallback=Fu}set needsUpdate(e){e===!0&&this.version++}_idx(e,t){return e*this.itemSize+t}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}onUpload(e){return this.onUploadCallback=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){const i=this.itemSize;e*=i,n*=t.itemSize;for(let r=0;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}set(e,t=0){return this.array.set(e,t),this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}dispose(){this.dispatchEvent({type:"dispose"})}}Object.assign(un.prototype,Nu);un.prototype.isBufferAttribute=!0;function Fu(){}class Fv extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uv extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bv extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}}class ds extends un{constructor(e,t,n,i=1){super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(){return new ds(this.array,this.itemSize).copy(this)}}ds.prototype.isInstancedBufferAttribute=!0;class Uu extends lo{constructor(e,t){super(),this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Du,this.updateRanges=[],this.version=0,this.uuid=ja(),this.onUploadCallback=Fu}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}set(e,t=0){return this.array.set(e,t),this}onUpload(e){return this.onUploadCallback=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0;i<this.stride;i++)this.array[e+i]=t.array[n+i];return this}clone(){return new this.constructor(new this.array.constructor(this.array),this.stride).copy(this)}dispose(){this.dispatchEvent({type:"dispose"})}}Uu.prototype.isInterleavedBuffer=!0;class Ja extends Uu{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(){return new Ja(new this.array.constructor(this.array),this.stride,this.meshPerAttribute)}}Ja.prototype.isInstancedInterleavedBuffer=!0;class Bu{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}_idx(e,t){return e*this.data.stride+this.offset+t}clone(){const e=new this.array.constructor(this.count*this.itemSize);for(let t=0;t<this.count;t++)for(let n=0;n<this.itemSize;n++)e[t*this.itemSize+n]=this.array[this._idx(t,n)];return new un(e,this.itemSize,this.normalized)}}Object.assign(Bu.prototype,Nu);Bu.prototype.isInterleavedBufferAttribute=!0;let Ov=0;const oi=new at,zv=new Li,dh=new hn,kv=new Kn,Qi=new Ie,kr=new Ie;function Gv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}class Ii extends lo{constructor(){super(),Object.defineProperty(this,"id",{value:Ov++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gv(e)?Uv:Fv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this.attributesVersion=(this.attributesVersion||0)+1,this}deleteAttribute(e){return delete this.attributes[e],this.attributesVersion=(this.attributesVersion||0)+1,this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;n!==void 0&&(n.applyNormalMatrix(zv.getNormalMatrix(e)),n.needsUpdate=!0);const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return this.applyMatrix4(oi.makeRotationFromQuaternion(e))}rotateX(e){return this.applyMatrix4(oi.makeRotationX(e))}rotateY(e){return this.applyMatrix4(oi.makeRotationY(e))}rotateZ(e){return this.applyMatrix4(oi.makeRotationZ(e))}translate(e,t,n){return this.applyMatrix4(oi.makeTranslation(e,t,n))}scale(e,t,n){return this.applyMatrix4(oi.makeScale(e,t,n))}lookAt(e){return oi.lookAt(e,Qi.set(0,0,0),new Ie(0,1,0)),dh.setFromRotationMatrix(oi),this.applyQuaternion(dh)}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z)}setFromPoints(e){const t=[];for(const n of e)t.push(n.x,n.y,n.z||0);return this.setAttribute("position",new Bv(t,3))}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);const e=this.attributes.position;if(e===void 0){this.boundingBox.makeEmpty();return}this.boundingBox.setFromBufferAttribute(e)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);const e=this.attributes.position;if(e===void 0){this.boundingSphere.makeEmpty();return}const t=this.boundingSphere.center;kv.setFromBufferAttribute(e).getCenter(t);let n=0;for(let i=0;i<e.count;i++)n=Math.max(n,t.distanceToSquared(Qi.fromBufferAttribute(e,i)));this.boundingSphere.radius=Math.sqrt(n)}computeTangents(){const e=this.index,t=this.attributes.position,n=this.attributes.normal,i=this.attributes.uv;if(e===null||t===void 0||n===void 0||i===void 0){console.error("BufferGeometry.computeTangents(): missing required attributes (index, position, normal or uv)");return}const r=t.count;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*r),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<r;U++)a[U]=new Ie,l[U]=new Ie;const c=new Ie,h=new Ie,u=new Ie,f=new Tt,d=new Tt,m=new Tt,x=new Ie,g=new Ie,p=(U,w,S)=>{c.fromBufferAttribute(t,U),h.fromBufferAttribute(t,w),u.fromBufferAttribute(t,S),f.fromBufferAttribute(i,U),d.fromBufferAttribute(i,w),m.fromBufferAttribute(i,S),h.sub(c),u.sub(c),d.sub(f),m.sub(f);const b=1/(d.x*m.y-m.x*d.y);isFinite(b)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(b),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(b),a[U].add(x),a[w].add(x),a[S].add(x),l[U].add(g),l[w].add(g),l[S].add(g))},M=this.groups.length?this.groups:[{start:0,count:e.count}];for(const U of M)for(let w=U.start;w<U.start+U.count;w+=3)p(e.getX(w),e.getX(w+1),e.getX(w+2));const _=new Ie,v=new Ie,E=new Ie,I=new Ie,C=U=>{v.fromBufferAttribute(n,U),E.copy(v);const w=a[U];_.copy(w).sub(v.multiplyScalar(v.dot(w))).normalize(),I.crossVectors(E,w);const S=I.dot(l[U])<0?-1:1;o.setXYZW(U,_.x,_.y,_.z,S)};for(const U of M)for(let w=U.start;w<U.start+U.count;w++)C(e.getX(w))}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t===void 0)return;let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0;f<n.count;f++)n.setXYZ(f,0,0,0);const i=new Ie,r=new Ie,o=new Ie,a=new Ie,l=new Ie,c=new Ie,h=new Ie,u=new Ie;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f),x=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),a.subVectors(o,r),l.subVectors(i,r),a.cross(l),c.fromBufferAttribute(n,m),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,g),c.add(a),h.add(a),u.add(a),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(x,h.x,h.y,h.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),a.subVectors(o,r),l.subVectors(i,r),a.cross(l),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(f+1,a.x,a.y,a.z),n.setXYZ(f+2,a.x,a.y,a.z);this.normalizeNormals(),n.needsUpdate=!0}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qi.fromBufferAttribute(e,t).normalize(),e.setXYZ(t,Qi.x,Qi.y,Qi.z)}toNonIndexed(){if(this.index===null)return console.warn("BufferGeometry.toNonIndexed(): geometry is already non-indexed."),this;const e=new Ii,t=this.index,n=i=>{const r=i.itemSize,o=new i.array.constructor(t.count*r);for(let a=0;a<t.count;a++){const l=t.getX(a);for(let c=0;c<r;c++)o[a*r+c]=i.array[i._idx(l,c)]}return new un(o,r,i.normalized)};for(const i in this.attributes)e.setAttribute(i,n(this.attributes[i]));for(const i in this.morphAttributes)e.morphAttributes[i]=this.morphAttributes[i].map(n);e.morphTargetsRelative=this.morphTargetsRelative;for(const i of this.groups)e.addGroup(i.start,i.count,i.materialIndex);return e}clone(){return new Ii().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.name=e.name,e.index!==null&&this.setIndex(e.index.clone());for(const t in e.attributes)this.setAttribute(t,e.attributes[t].clone());for(const t in e.morphAttributes)this.morphAttributes[t]=e.morphAttributes[t].map(n=>n.clone());this.morphTargetsRelative=e.morphTargetsRelative;for(const t of e.groups)this.addGroup(t.start,t.count,t.materialIndex);return e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}Ii.prototype.isBufferGeometry=!0;class Qa extends Ii{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new Qa().copy(this)}}Qa.prototype.isInstancedBufferGeometry=!0;class co extends tn{constructor(e=new Ii,t=null){super(),this.type="Mesh",this.geometry=e,this.material=t,this.count=1}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this.count=e.count,this}}co.prototype.isMesh=!0;const Is=new at,ph=new Kn,mh=new Zn;class ho extends co{constructor(e,t,n){super(e,t),this.type="InstancedMesh",this.instanceMatrix=new ds(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Is.identity())}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}getColorAt(e,t){return t.fromArray(this.instanceColor.array,e*3)}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ds(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let t=0;t<this.count;t++)this.getMatrixAt(t,Is),ph.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(ph)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let t=0;t<this.count;t++)this.getMatrixAt(t,Is),mh.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(mh)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}clone(e){return new ho(this.geometry,this.material,this.count).copy(this,e)}dispose(){this.dispatchEvent({type:"dispose"})}}ho.prototype.isInstancedMesh=!0;class el extends tn{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null}copy(e,t){return super.copy(e,t),this.background=e.background,this.environment=e.environment,this.fog=e.fog,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),this.environmentIntensity=e.environmentIntensity,this.overrideMaterial=e.overrideMaterial,this.matrixAutoUpdate=e.matrixAutoUpdate,this}}el.prototype.isScene=!0;const gh=new Ie,Vv=new Zn,xh=new ao,Hv=new at,Wv=new at,rs={OPAQUE:0,WATER:1,TRANSPARENT:2},ca=["rgba16float","rgba16float","rgba8unorm"],li="depth32float";class Xv{constructor(e,t,n){this.meshRenderer=e,this.scene=t,this.camera=n,this.scale=1,this.width=1,this.height=1,this.sceneRT=new Fs(1,1,{colors:[{format:"rgba16float",name:"color"},{format:"rgba16float",name:"velocity"},{format:"rgba8unorm",name:"waterMask"}],depth:li,label:"scene"}),this.velocityTexture=this.sceneRT.textures[1],this.waterMaskTexture=this.sceneRT.textures[2],this.opaqueCopy=new Fs(1,1,{colors:["rgba16float"],depth:li,label:"opaqueCopy"}),this.opaqueDepthHalf=new Fs(1,1,{colors:["r16float"],label:"opaqueDepthHalf"}),this._depthHalfPass=null,this.hullMaskRT=new Fs(1,1,{colors:["r16float"],depth:li,label:"hullMask"}),this.hullMaskScene=new el,this.hullMaskMaterial=new Za({name:"hullMask",lit:!1,side:"double",surface:"s.albedo = vec3f( length( in.P - frame.cameraPos ), 0.0, 0.0 ); s.emissive = vec3f( 0.0 );"}),this.hullMasks=[],this.hullMaskActive={value:0},this.background=null,this.clearColor=[0,0,0,1],this.onBeforeWater=null}setSize(e,t){this.width=e,this.height=t,this.sceneRT.setSize(e,t),this.opaqueCopy.setSize(e,t),this.opaqueDepthHalf.setSize(e,t),this.hullMaskRT.setSize(e,t)}addHullMask(e,t){e.computeBoundingBox(),e.computeBoundingSphere();const n=new co(e,this.hullMaskMaterial);return n.matrixAutoUpdate=!1,n.frustumCulled=!1,this.hullMaskScene.add(n),this.hullMasks.push({mesh:n,object:t,box:e.boundingBox.clone().expandByScalar(.05),sphere:e.boundingSphere}),n}_renderHullMasks(e){let t=0;xh.setFromProjectionMatrix(Hv.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse));for(const i of this.hullMasks){i.object.updateWorldMatrix(!0,!1),i.mesh.matrix.copy(i.object.matrixWorld),i.mesh.matrixWorld.copy(i.object.matrixWorld),gh.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Wv.copy(i.object.matrixWorld).invert());const r=!i.box.containsPoint(gh)&&xh.intersectsSphere(Vv.copy(i.sphere).applyMatrix4(i.object.matrixWorld));i.mesh.visible=r,r&&t++}if(this.hullMaskActive.value=t>0?1:0,!t)return;const n=this.hullMaskRT;this.meshRenderer.render(this.hullMaskScene,{label:"hull mask",kind:"color",camera:e,colorViews:[n.texture.view()],colorFormats:n.formats,clearColors:[[0,0,0,0]],depthView:n.depthTexture.view(),depthFormat:li,clearDepth:0,cull:!1})}render(){const{scene:e,camera:t,meshRenderer:n}=this,i=this.sceneRT,r=i.textures.map(c=>c.view()),o={camera:t,colorViews:r,colorFormats:i.formats,depthView:i.depthTexture.view(),depthFormat:li,kind:"main"};n.render(e,{...o,label:"opaque",layerMask:1<<rs.OPAQUE,clearColors:[this.clearColor,[0,0,0,0],[0,0,0,0]],clearDepth:0,after:this.background?c=>this.background.draw(c):null});const a=Ue.getEncoder(),l={width:i.width,height:i.height};a.copyTextureToTexture({texture:i.texture.getGPU()},{texture:this.opaqueCopy.texture.getGPU()},l),a.copyTextureToTexture({texture:i.depthTexture.getGPU()},{texture:this.opaqueCopy.depthTexture.getGPU()},l),this._depthHalfPass||(this._depthHalfPass=new wa({label:"opaque depth half",colorFormats:["r16float"],bindings:{srcDepth:{texture:()=>this.opaqueCopy.depthTexture}},code:"fn fragment( in: FSIn ) -> vec4f { return vec4f( textureLoad( srcDepth, vec2i( in.pos.xy ), 0 ), 0.0, 0.0, 1.0 ); }"})),this._depthHalfPass.render({colorViews:[this.opaqueDepthHalf.texture],clear:[0,0,0,0]}),this.hullMasks.length>0&&this._renderHullMasks(t),this.onBeforeWater&&this.onBeforeWater(),n.render(e,{...o,label:"water + transparent",late:!0,layerMask:1<<rs.WATER|1<<rs.TRANSPARENT})}}const Ta=[];for(let s=0;s<8;s++)Ta.push(new Ie);const Ls=new Ie,qv=new Ie(0,1,0),_h=new at,$v=new Ie,Yv=new Ht;class jv{constructor({size:e=2048,splits:t=[10,60,400],lightMargin:n=200,normalBias:i=[.015,.06,.3],bias:r=2e-5,pcssCascades:o=1}={}){this.size=e,this.splits=t,this.count=t.length,this.lightMargin=n,this.normalBias=i,this.periods=t.map((l,c)=>c===0?1:c===1?2:4),this.texture=new Ks({label:"sunShadowMap",width:e,height:e,depth:this.count,dimension:"2d-array",format:"depth32float",usage:["sample","render"]}),Ru(this.texture),this.cascades=t.map((l,c)=>({camera:{matrixWorld:new at,matrixWorldInverse:new at,projectionMatrix:new at,near:0,far:1,reversedDepth:!1,updateMatrixWorld(){},isCamera:!0,isShadowCamera:!0},block:Iu("shadowView"+c),viewProj:new at,radius:0,dirty:!0})),this.enabled=!0,this.layerMask=4294967295,this.frame=0,this.lastSun=new Ie(0,-2,0);const a=ns.fields;a.count.value=this.count,a.mapSize.value=e,a.bias.value=r,a.pcssCascades.value=o,a.enabled.value=1}_margin(e){const t=this.splits[this.count-1],n=e/t;return Math.max(.25*n*n,.25*n)*t}_fit(e,t,n){const i=this.cascades[e],r=e===0?0:this.splits[e-1],o=this.splits[e],a=this._margin(r),l=this._margin(o),c=Math.max(t.near,r-a*.5),h=e===this.count-1?o:o+l*.5;ns.fields.blend.value[e]=new Ht(r,o,a,l);const u=Math.tan(t.fov*Math.PI/360),f=u*t.aspect;let d=0;for(const S of[c,h])for(const b of[-1,1])for(const F of[-1,1])Ta[d++].set(b*f*S,F*u*S,-S).applyMatrix4(t.matrixWorld);const m=Math.min(h,(c+h)/2*(1+f*f+u*u));Ls.set(0,0,-m).applyMatrix4(t.matrixWorld);let x=0;for(const S of Ta)x=Math.max(x,S.distanceTo(Ls));x=Math.ceil(x*16)/16,i.radius=x;const g=i.camera,p=n,M=Math.abs(p.y)>.99?$v.set(1,0,0):qv;g.matrixWorld.lookAt(p,new Ie(0,0,0),M),_h.copy(g.matrixWorld).invert();const _=2*x/this.size,v=Yv.set(Ls.x,Ls.y,Ls.z,1).applyMatrix4(_h);v.x=Math.round(v.x/_)*_,v.y=Math.round(v.y/_)*_;const E=x+this.lightMargin,I=new Ie(v.x,v.y,v.z+E).applyMatrix4(g.matrixWorld);g.matrixWorld.setPosition(I),g.matrixWorldInverse.copy(g.matrixWorld).invert();const C=.1,U=E+x;g.near=C,g.far=U,Kv(g.projectionMatrix,-x,x,x,-x,C,U),i.viewProj.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse);const w=ns.fields;w.matrices.value[e]=i.viewProj.clone(),w.cascades.value[e]=new Ht(h,_,this.normalBias[e]??.05,U-C)}restartFrames(){this.frame=0,this.lastSun.set(0,-2,0);for(const e of this.cascades)e.dirty=!0,e.camera.matrixWorld.identity(),e.camera.matrixWorldInverse.identity()}update(e,t){if(this.frame++,ns.fields.enabled.value=this.enabled&&t.y>-.05?1:0,!this.enabled)return[];e.updateMatrixWorld();const n=this.lastSun.angleTo(t)>1e-4;this.lastSun.copy(t);const i=[];for(let r=0;r<this.count;r++)(n||this.cascades[r].dirty||(this.frame+r)%this.periods[r]===0)&&(this._fit(r,e,t),this.cascades[r].dirty=!1,i.push(r));return i}render(e,t,n){for(const i of n){const r=this.cascades[i];ba(r.camera,this.size,this.size,{block:r.block}),t.render(e,{label:"shadow cascade "+i,kind:"depth",camera:r.camera,frameBlock:r.block,depthView:this.texture.view({dimension:"2d",baseArrayLayer:i,arrayLayerCount:1}),depthFormat:"depth32float",clearDepth:1,depthCompare:"less-equal",layerMask:this.layerMask,depthBias:2,depthBiasSlopeScale:1.5})}}}function Kv(s,e,t,n,i,r,o){const a=1/(t-e),l=1/(n-i),c=1/(o-r);return s.set(2*a,0,0,-(t+e)*a,0,2*l,0,-(n+i)*l,0,0,-c,-r*c,0,0,0,1),s}class Zv extends tn{constructor(){super(),this.type="Group"}}Zv.prototype.isGroup=!0;const vh=new Map;let Gr=null;function Jv(s){let e=vh.get(s);return e||(Gr||(Gr=Ue.device.createShaderModule({label:"mipmap",code:`
		struct VSOut { @builtin( position ) pos: vec4f, @location( 0 ) uv: vec2f };
		@vertex fn vs( @builtin( vertex_index ) i: u32 ) -> VSOut {
			let p = vec2f( f32( ( i << 1u ) & 2u ), f32( i & 2u ) );
			var o: VSOut;
			o.pos = vec4f( p * 2.0 - 1.0, 0.0, 1.0 );
			o.uv = vec2f( p.x, 1.0 - p.y );
			return o;
		}
		@group( 0 ) @binding( 0 ) var src: texture_2d<f32>;
		@group( 0 ) @binding( 1 ) var smp: sampler;
		@fragment fn fs( in: VSOut ) -> @location( 0 ) vec4f {
			return textureSampleLevel( src, smp, in.uv, 0.0 );
		}
	`})),e=Ue.device.createRenderPipeline({label:"mipmap "+s,layout:"auto",vertex:{module:Gr,entryPoint:"vs"},fragment:{module:Gr,entryPoint:"fs",targets:[{format:s}]},primitive:{topology:"triangle-list"}}),vh.set(s,e),e)}const yh=new WeakMap;function Qv(s,e,t){let n=yh.get(s);if(n&&n.gpu===e)return n;const i=s.mipLevelCount,r=s.dimension==="3d"?1:s.depth,o=[],a=t.getBindGroupLayout(0);for(let l=0;l<r;l++)for(let c=1;c<i;c++){const h=e.createView({dimension:"2d",baseMipLevel:c-1,mipLevelCount:1,baseArrayLayer:l,arrayLayerCount:1}),u=e.createView({dimension:"2d",baseMipLevel:c,mipLevelCount:1,baseArrayLayer:l,arrayLayerCount:1}),f=Ue.device.createBindGroup({label:"mipmap "+s.label,layout:a,entries:[{binding:0,resource:h},{binding:1,resource:Ue.samplers.linearClamp}]});o.push({bg:f,desc:{label:"mipmap",colorAttachments:[{view:u,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}]}})}return n={gpu:e,pipeline:t,steps:o},yh.set(s,n),n}function ey(s,e=Ue.getEncoder()){if(s.mipLevelCount<2)return;const t=s.getGPU(),n=Jv(s.format),{steps:i}=Qv(s,t,n);for(let r=0;r<i.length;r++){const o=e.beginRenderPass(i[r].desc);o.setPipeline(n),o.setBindGroup(0,i[r].bg),o.draw(3),o.end()}}const ty=s=>`
	let sj = v.skinIndex;
	let sw = v.skinWeight;
	let sk = skinJoints[ sj.x ] * sw.x + skinJoints[ sj.y ] * sw.y + skinJoints[ sj.z ] * sw.z + skinJoints[ sj.w ] * sw.w;
	let skp = skinJoints[ sj.x + ${s}u ] * sw.x + skinJoints[ sj.y + ${s}u ] * sw.y + skinJoints[ sj.z + ${s}u ] * sw.z + skinJoints[ sj.w + ${s}u ] * sw.w;
	let lp = vec4f( v.position, 1.0 );
	let lm = v.model * sk;
	v.useWorld = true;
	v.worldPos = ( lm * lp ).xyz;
	v.worldNormal = cofactor3( lm ) * v.normal;
	v.prevWorldPos = ( v.prevModel * skp * lp ).xyz;
`;function ny({name:s,joints:e,jointBuffer:t,textures:n={},alphaMode:i="OPAQUE",alphaCutoff:r=.5,doubleSided:o=!1,surface:a="",uniforms:l={},color:c=null,roughness:h=1,metalness:u=1,defines:f={},modules:d=[]}){const m={};n.albedo&&(m.chAlbedo=n.albedo),n.normal&&(m.chNormal=n.normal),n.orm&&(m.chOrm=n.orm);const x=`
#if HAS_ALBEDO
	let ca = textureSample( chAlbedo, smpAnisoRepeat, in.uv );
	s.albedo *= ca.rgb;
	s.alpha *= ca.a;
#endif
#if HAS_ORM
	let orm = textureSample( chOrm, smpAnisoRepeat, in.uv );
	s.roughness *= orm.g;
	s.metalness *= orm.b;
#endif
#if HAS_NORMAL
	let nm = textureSample( chNormal, smpAnisoRepeat, in.uv ).xyz * 2.0 - 1.0;
	s.normal = perturbNormalByMap( in.P, in.N, in.uv, nm );
#endif
${a}
`;return new Za({name:s,modules:d,attributes:{skinIndex:"vec4u",skinWeight:"vec4f"},storage:{skinJoints:{storage:t,access:"read"}},textures:m,uniforms:l,color:c||void 0,roughness:h,metalness:u,vertex:ty(e),surface:x,side:o?"double":"front",alphaTest:i==="MASK"||i==="BLEND"?r:0,defines:{HAS_ALBEDO:m.chAlbedo?1:0,HAS_ORM:m.chOrm?1:0,HAS_NORMAL:m.chNormal?1:0,...f}})}const ai=new Ie,Mh=new Tt,Sh=new Tt;class tl extends tn{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=wi,this.reversedDepth=!0}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this.reversedDepth=e.reversedDepth,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}tl.prototype.isCamera=!0;function Ou(s,e,t,n,i,r,o){s.view===null&&(s.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1});const a=s.view;a.enabled=!0,a.fullWidth=e,a.fullHeight=t,a.offsetX=n,a.offsetY=i,a.width=r,a.height=o,s.updateProjectionMatrix()}class Ea extends tl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.infiniteFar=!1,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.infiniteFar=e.infiniteFar,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){return .5*this.getFilmHeight()/Math.tan(ea*.5*this.fov)}getEffectiveFOV(){return kc*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,Mh,Sh),t.subVectors(Sh,Mh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,Ou(this,e,t,n,i,r,o)}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ea*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(o!==null&&o.enabled){const c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/h,i*=o.width/c,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth());const l=this.infiniteFar?1/0:this.far;this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,l,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}}Ea.prototype.isPerspectiveCamera=!0;class iy extends tl{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){Ou(this,e,t,n,i,r,o)}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;const c=this.view;if(c!==null&&c.enabled){const h=(this.right-this.left)/c.fullWidth/this.zoom,u=(this.top-this.bottom)/c.fullHeight/this.zoom;r+=h*c.offsetX,o=r+h*c.width,a-=u*c.offsetY,l=a-u*c.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}}iy.prototype.isOrthographicCamera=!0;let bh=!1;async function sy(s,e,t){const n=document.createElement("canvas");s.append(n);try{if(bh)throw new Error("图形设备已中断，请刷新页面，或使用 WebGL 兼容模式");Ue.device?(Ue.canvas=n,Ue.context=n.getContext("webgpu"),Ue.context.configure({device:Ue.device,format:Ue.format,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC})):(await Ue.init({canvas:n}),Ue.device.lost.then(()=>{bh=!0}))}catch(A){throw n.remove(),A}const i=new el,r=new Ea(56,1,.08,1e3),o=new Mv;o.syncPipelines=!0;const a=new Xv(o,i,r),l=new Ea(56,1,.08,1e3),c=Iu("creek reflection"),h=new at,u=new Fs(1,1,{colors:ca,depth:li,label:"creek reflection"});let f=0;const d=new Ie(1e6,1e6,1e6);let m=-1/0;const x=new jv({size:2048,splits:[16,65,190],lightMargin:90}),g=new Map,p=new Map,M=new Map,_=[],v=[],E=$n.fields;E.sunDir.value.set(-.38,.82,.43).normalize(),E.sunColor.value.setRGB(3.1,2.45,1.7),E.skyIrradiance.value.setRGB(.22,.29,.36),E.horizonColor.value.setRGB(.58,.64,.68),E.exposure.value=.94;const I=new wa({label:"autumn sky",colorFormats:ca,writeMasks:[15,0,0],depthFormat:li,depthCompare:"equal",code:`
    fn fragment(in: FSIn) -> vec4f {
      let farP = frame.invViewProj * vec4f(in.uv.x*2.0-1.0,1.0-in.uv.y*2.0,0.00001,1.0);
      let dir = normalize(farP.xyz/farP.w-frame.cameraPos);
      let h = max(dir.y,0.0);
      var sky = mix(vec3f(.67,.72,.74),vec3f(.18,.36,.61),sqrt(h));
      let cumulus=smoothstep(.3,.57,mx_fractal_noise_float3(dir*9.0+vec3f(frame.time*.002,0.0,0.0),3,2.0,.5))*smoothstep(.15,.3,h)*(1.0-smoothstep(.6,.85,h));
      sky=mix(sky,vec3f(.87,.89,.91),cumulus*.72*(1.0-smoothstep(.97,.995,dot(dir,frame.sunDir))));
      let highCloudMask=smoothstep(.15,.38,mx_fractal_noise_float3(dir*3.1,2,2.0,.5))*smoothstep(.5,.8,h);
      let cirrus=pow(max(0.0,sin(dir.x*95.0+dir.z*30.0+sin(dir.z*7.0)*8.0)),10.0)*highCloudMask*.12;
      let altocumulus=smoothstep(.29,.55,mx_fractal_noise_float3(dir*35.0,2,2.0,.5))*highCloudMask*.15;
      let cirrocumulus=smoothstep(.35,.6,mx_fractal_noise_float3(dir*90.0,2,2.0,.5))*highCloudMask*.075;
      sky=mix(sky,vec3f(.87,.9,.95),max(cirrus,max(altocumulus,cirrocumulus))*(1.0-smoothstep(.96,.995,dot(dir,frame.sunDir))));
      let clouds=mx_fractal_noise_float3(dir*5.0+vec3f(frame.time*.012,0.0,0.0),4,2.0,.5);
      let stormSky=mix(vec3f(.12,.16,.19),vec3f(.29,.34,.38),clamp(clouds*.55+.5,0.0,1.0));
      sky=mix(sky,stormSky,frame.debug.x);
      let sun = max(dot(dir,frame.sunDir),0.0);
      sky += vec3f(1.0,.71,.36)*(pow(sun,180.0)*.14+pow(sun,18000.0)*12.0)*(1.0-frame.debug.x);
      return vec4f(sky,1.0);
    }`});a.background=I;const C=new wa({label:"forest exposure and air",modules:[Ka],colorFormats:[Ue.format],bindings:{hdr:{texture:()=>a.sceneRT.texture},depth:{texture:()=>a.sceneRT.depthTexture}},code:`
    fn fragment(in: FSIn) -> vec4f {
      var c = textureSampleLevel(hdr,smpLinearClamp,in.uv,0.0).rgb;
      let d = textureLoad(depth,vec2i(in.pos.xy),0);
      let P = worldFromDepth(in.uv,d);
      let distance = select(length(P-frame.cameraPos),1000.0,d<0.00001);
      let haze = select(1.0-exp(-max(distance-mix(50.0,15.0,frame.debug.x),0.0)*mix(.0015,.009,frame.debug.x)),0.0,d<0.00001);
      let view = normalize(P-frame.cameraPos);
      var scatter = 0.0;
      for(var i=0;i<8;i++) {
        let t=(f32(i)+.5)/8.0*min(distance,65.0);
        scatter += sunShadowHard(frame.cameraPos+view*t);
      }
      c += vec3f(.055,.038,.016)*(scatter/8.0)*pow(max(dot(view,frame.sunDir),0.0),6.0)*min(distance/35.0,1.0)*(1.0-frame.debug.x);
      c = mix(c,frame.horizonColor,haze)*frame.exposure;
      c = clamp((c*(2.51*c+.03))/(c*(2.43*c+.59)+.14),vec3f(0.0),vec3f(1.0));
      return vec4f(linearToSrgb(c),1.0);
    }`});function U(A){if(M.has(A))return M.get(A);const N=A.image,H=new Ks({label:A.name||"forest texture",width:N.width,height:N.height,format:A.colorSpace==="srgb"?"rgba8unorm-srgb":"rgba8unorm",mips:!0,usage:["sample","copyDst","render"]});return Ue.queue.copyExternalImageToTexture({source:N,flipY:A.flipY},{texture:H.getGPU()},{width:N.width,height:N.height}),ey(H),M.set(A,H),H}function w(A){if(g.has(A))return g.get(A);const N=new Ii;for(const[H,G]of Object.entries(A.attributes)){const O=H==="skinIndex"?new Uint32Array(G.count*G.itemSize):new Float32Array(G.count*G.itemSize);for(let q=0;q<G.count;q++)for(let K=0;K<G.itemSize;K++)O[q*G.itemSize+K]=G.getComponent(q,K);N.setAttribute(H,new un(O,G.itemSize))}A.index&&N.setIndex(new un(A.index.array,1));for(const H of A.groups)N.addGroup(H.start,H.count,H.materialIndex);return N.computeBoundingSphere(),g.set(A,N),A.addEventListener("dispose",()=>{N.dispose(),g.delete(A)}),N}function S(A,N=null){if(p.has(A))return p.get(A);const H={},G={},O=[];O.push(`#if REFLECTION_PASS
if(in.P.y<-.29){discard;}
#endif`);for(const[Fe,ae]of Object.entries({albedo:A.map,normalMap:A.normalMap,roughMap:A.roughnessMap,aoMap:A.aoMap}))ae&&(H[Fe]=U(ae),ae.updateMatrix(),G[Fe+"Uv"]=["mat3x3f",ae.matrix],O.push(`let ${Fe}UV=(mat.${Fe}Uv*vec3f(in.uv,1.0)).xy;`));A.map&&O.push("let colorTex=textureSample(albedo,smpAnisoRepeat,albedoUV); s.albedo*=colorTex.rgb; s.alpha*=colorTex.a;"),A.map&&!A.normalMap&&/Bark|Wood|Granite/.test(A.name)&&O.push("let relief=dot(colorTex.rgb,vec3f(.2126,.7152,.0722)); s.normal=perturbNormalByHeight(in.P,in.N,dpdx(relief),dpdy(relief),.035);"),A.normalMap&&O.push("s.normal=perturbNormalByMap(in.P,in.N,normalMapUV,textureSample(normalMap,smpAnisoRepeat,normalMapUV).xyz*2.0-1.0);"),A.roughnessMap&&O.push("s.roughness*=textureSample(roughMap,smpAnisoRepeat,roughMapUV).g;"),A.aoMap&&O.push("s.ao=textureSample(aoMap,smpAnisoRepeat,aoMapUV).r;");const q=/Foliage|fern|Ecology_Grass|Ecology_Rhododendron|Creek_Weeds/.test(A.name);A.name.includes("Foliage")&&!A.name.includes("Evergreen")&&O.push("let leafLuma=dot(s.albedo,vec3f(.2126,.7152,.0722)); s.albedo=mix(vec3f(.13,.045,.012),vec3f(.65,.36,.065),clamp(leafLuma*2.5,0.0,1.0)); s.translucency=s.albedo*.55; s.roughness=.86;"),/Fur/.test(A.name)&&O.push("let hair=sin(in.P.x*650.0+sin(in.P.y*43.0)*4.0)*sin(in.P.z*420.0); s.albedo*=.92+.08*hair; s.roughness=.96;"),A.name==="Forest_Floor"&&O.push("let mossNoise=mx_fractal_noise_float3(in.P*1.7,3,2.0,.5); let moss=smoothstep(.0,.25,mossNoise)*smoothstep(.65,.9,in.N.y); s.albedo=mix(s.albedo,vec3f(.055,.085,.036),moss*.75); s.roughness=.98;"),/Creek_Submerged/.test(A.name)&&O.push("let caustic=pow(max(0.0,sin(in.P.x*18.0+frame.time*.3)*sin(in.P.z*15.0-frame.time*.2)),9.0); s.albedo*=1.0+caustic*.25*(1.0-frame.debug.x);"),/Cabin_Weathered|Cabin_Timber/.test(A.name)&&O.push("let grain=sin(in.P.y*650.0+sin(in.P.x*38.0+in.P.z*38.0)*.35); s.albedo*=.96+.04*grain; s.normal=perturbNormalByHeight(in.P,in.N,dpdx(grain),dpdy(grain),.0001);"),/Storm_|Water/.test(A.name)||O.push("s.albedo*=mix(1.0,.77,frame.debug.y); s.roughness=mix(s.roughness,max(.12,s.roughness*.35),frame.debug.y);"),A.name==="Cabin_Window_Glass"&&O.push("let drops=sin(in.P.x*150.0+in.P.z*135.0)*sin(in.P.y*85.0+frame.time*3.0); s.normal=perturbNormalByHeight(in.P,in.N,dpdx(drops),dpdy(drops),frame.debug.x*.0005);");const K=/fern|Ecology_Grass|Ecology_Rhododendron|Creek_Weeds/.test(A.name);let fe=q?`v.position.x+=sin(frame.time*mix(1.4,2.4,frame.debug.x)+v.position.y*.7+v.position.x+f32(v.instance)*2.399)*smoothstep(${K?".02,.6":"2.0,8.0"},v.position.y)*mix(${K?".012,.055":".055,.17"},frame.debug.x);`:"";const Se=A.name==="Water";Se&&(H.refracted=a.opaqueCopy.texture,H.riverDepth=a.opaqueCopy.depthTexture,H.forestReflection={texture:()=>u.texture},G.reflectionVP=["mat4x4f",h],O.push(`
        let wave=vec2f(sin(in.P.x*3.1+in.P.z*1.7-frame.time*.3),cos(in.P.z*4.6+in.P.x*.8-frame.time*.2))*mix(.008,.035,frame.debug.x);
        s.normal=normalize(in.N+vec3f(wave.x,0.0,wave.y));
        let uv=clamp(in.pixel/frame.resolution+wave*.012,vec2f(.001),vec2f(.999));
        let opaque=textureSampleLevel(refracted,smpLinearClamp,uv,0.0).rgb;
        let depth=textureLoad(riverDepth,vec2i(uv*frame.resolution),0);
        let bed=worldFromDepth(uv,depth); let thickness=clamp(length(bed-in.P),0.0,6.0);
        let transmission=exp(-vec3f(.25,.1,.055)*thickness);
        let fresnel=.02+.98*pow(1.0-max(dot(s.normal,in.V),0.0),5.0);
        let reflectedClip=mat.reflectionVP*vec4f(in.P,1.0);
        let reflectionUV=clamp(vec2f(reflectedClip.x/reflectedClip.w*.5+.5,.5-reflectedClip.y/reflectedClip.w*.5)+wave*.01,vec2f(.001),vec2f(.999));
        let reflection=textureSampleLevel(forestReflection,smpLinearClamp,reflectionUV,0.0).rgb;
        s.albedo=mix(opaque*transmission+vec3f(.08,.14,.13)*(1.0-transmission),reflection,fresnel);
        s.roughness=.09; s.metalness=0.0;
        let foam=(1.0-smoothstep(.03,.3,thickness))*(.5+.5*sin(in.P.x*15.0-frame.time*2.0));
        s.albedo=mix(s.albedo,vec3f(.65,.7,.68),foam*.2);
      `));const ze=N?ny({name:A.name,joints:N.joints,jointBuffer:N.buffer,color:A.color,roughness:A.roughness??1,metalness:A.metalness??0,doubleSided:!0,surface:O.join(`
`)}):new Za({name:A.name,color:A.color,roughness:A.roughness??1,metalness:A.metalness??0,alphaTest:A.alphaTest||0,side:A.side===2?"double":"front",vertexColors:A.vertexColors,opacity:A.opacity??1,transparent:!!A.transparent,depthWrite:A.depthWrite,uniforms:G,textures:H,surface:O.join(`
`),vertex:fe,lit:!Se&&!A.isMeshBasicMaterial,receiveShadows:!Se});return p.set(A,ze),ze}e.updateMatrixWorld(!0),e.traverse(A=>{if(!A.isMesh||A.name==="Sky")return;let N=null;if(A.isSkinnedMesh){const O=A.skeleton.bones.length,q=new Float32Array(O*32);N={source:A,joints:O,data:q,buffer:new Rv({label:A.name+" joints",count:O*2,type:"mat4x4f",data:q}),inverse:A.matrixWorld.clone(),matrix:A.matrixWorld.clone(),first:!0},v.push(N)}const H=Array.isArray(A.material)?A.material.map(O=>S(O,N)):S(A.material,N),G=A.isInstancedMesh?new ho(w(A.geometry),H,A.count):new co(w(A.geometry),H);A.isInstancedMesh&&G.instanceMatrix.array.set(A.instanceMatrix.array),A.instanceColor&&(G.instanceColor=new ds(A.instanceColor.array,3)),G.userData.sourceInstanceVersion=A.instanceMatrix?.version,G.name=A.name,G.matrixAutoUpdate=!1,(Array.isArray(A.material)?A.material:[A.material]).some(O=>O.name==="Water")?G.layers.set(rs.WATER):(Array.isArray(A.material)?A.material:[A.material]).some(O=>O.transparent)&&G.layers.set(rs.TRANSPARENT),i.add(G),_.push([A,G])}),Ue.submit(),await Ue.pipelinesReady(),t.domElement.hidden=!0;let b=0;const F=Ue.adapter.info;let P=!1;const L={backend:"v-island-webgpu",gpuDescription:JSON.stringify(F?{vendor:F.vendor,architecture:F.architecture,device:F.device,description:F.description}:{}),domElement:n,info:{render:{calls:0,triangles:0}},setPixelRatio(A){L.ratio=A},ratio:1,setSize(A,N){n.width=Math.max(1,Math.floor(A*L.ratio)),n.height=Math.max(1,Math.floor(N*L.ratio)),n.style.width=A+"px",n.style.height=N+"px",a.setSize(n.width,n.height),u.setSize(Math.max(1,n.width>>1),Math.max(1,n.height>>1))},setQuality(A){x.size!==A&&(x.texture.destroy(),x.texture=new Ks({label:"sunShadowMap",width:A,height:A,depth:3,dimension:"2d-array",format:"depth32float",usage:["sample","render"]}),x.size=A,x.lightMargin=A<=512?40:90,Ru(x.texture),ns.fields.mapSize.value=A,x.cascades.forEach(N=>N.dirty=!0))},render(A,N){if(P)return;A.updateMatrixWorld(!0),r.position.copy(N.position),r.quaternion.copy(N.quaternion);for(const G of v){const{source:O,joints:q,data:K}=G;K.copyWithin(q*16,0,q*16),G.inverse.copy(O.matrixWorld).invert();for(let fe=0;fe<q;fe++)G.matrix.copy(G.inverse).multiply(O.skeleton.bones[fe].matrixWorld).multiply(O.skeleton.boneInverses[fe]),G.matrix.toArray(K,fe*16);G.first&&(K.copyWithin(q*16,0,q*16),G.first=!1),G.buffer.write(K)}r.aspect=N.aspect,r.fov=N.fov,r.updateProjectionMatrix(),E.debug.value.x=Number(A.userData.weatherIntensity)||0,E.debug.value.y=Number(A.userData.rainIntensity)||0,E.sunColor.value.setRGB(...E.debug.value.x?[.12,.15,.18]:[3.1,2.45,1.7]),E.skyIrradiance.value.setRGB(...E.debug.value.x?[.18,.22,.26]:[.22,.29,.36]),E.horizonColor.value.setRGB(...E.debug.value.x?[.25,.3,.35]:[.58,.64,.68]);for(const[G,O]of _){let q=G.visible;for(let K=G.parent;K;K=K.parent)q=q&&K.visible;O.visible=q,O.castShadow=G.castShadow,O.matrix.copy(G.matrixWorld),O.geometry=w(G.geometry),G.isInstancedMesh&&O.userData.sourceInstanceVersion!==G.instanceMatrix.version&&(O.instanceMatrix.array.set(G.instanceMatrix.array),O.instanceMatrix.needsUpdate=!0,O.userData.sourceInstanceVersion=G.instanceMatrix.version)}b=performance.now()/1e3,E.time.value=b,Ue.beginFrame(),ba(r,n.width,n.height);const H=x.size<=512;if((b-m>(H?.9:.12)||r.position.distanceTo(d)>(H?1.2:.7))&&(x.render(i,o,x.update(r,E.sunDir.value)),d.copy(r.position),m=b),(f++%2===0||f===1)&&Math.abs(r.position.z+108)<85){l.position.copy(r.position),l.position.y=-.62-r.position.y;const G=r.getWorldDirection(new Ie);G.y=-G.y,l.lookAt(l.position.clone().add(G)),l.aspect=r.aspect,l.fov=r.fov,l.updateProjectionMatrix(),ba(l,u.width,u.height,{block:c}),h.copy(c.fields.viewProj.value),o.render(i,{label:"forest reflected in creek",kind:"main",camera:l,frameBlock:c,layerMask:1<<rs.OPAQUE,colorViews:u.textures.map(O=>O.view()),colorFormats:ca,depthView:u.depthTexture.view(),depthFormat:li,clearDepth:0,clearColors:[[0,0,0,1],[0,0,0,0],[0,0,0,0]],defines:{REFLECTION_PASS:1},after:O=>I.draw(O,c)})}a.render(),C.render({colorViews:[Ue.context.getCurrentTexture().createView()],clear:[0,0,0,1]}),Ue.submit(),L.info.render.calls=o.stats.draws,L.info.render.triangles=o.stats.triangles},dispose(){if(!P){P=!0,v.forEach(A=>A.buffer.destroy()),g.forEach(A=>A.dispose()),p.forEach(A=>A.dispose()),M.forEach(A=>A.destroy()),x.texture.destroy();for(const A of[u,a.sceneRT,a.opaqueCopy,a.opaqueDepthHalf,a.hullMaskRT])A.textures.forEach(N=>N.destroy()),A.depthTexture?.destroy();o.drawBuffer?.destroy(),a.hullMaskMaterial.dispose(),c.destroy(),x.cascades.forEach(A=>A.block.destroy()),n.remove(),Ue.context.unconfigure()}}};return L}function ry(s,e){const t=new Wa,n=(oe,T)=>(t.set(new z(oe,100,T),new z(0,-1,0)),t.intersectObjects(e,!1)[0]?.point.y??0),i=new Xe({name:"Moose_Fur",color:"#40352c",roughness:.98}),r=new Xe({name:"Moose_Antler",color:"#a89676",roughness:.9}),o=new Xe({name:"Moose_Hoof_Eye",color:"#151410",roughness:.5}),a=new Xe({name:"Mallard_Feather",color:"#817f73",roughness:.88}),l=new Xe({name:"Mallard_Chest",color:"#5a3023",roughness:.88}),c=new Xe({name:"Mallard_Head",color:"#173e32",roughness:.32,metalness:.18}),h=new Xe({name:"Mallard_Neck_Ring",color:"#d8d6c5",roughness:.8}),u=new Xe({name:"Mallard_Feet",color:"#9e4f1b",roughness:.8}),f=new Xe({name:"Mallard_Bill",color:"#b99b35",roughness:.8}),d=new Bt(1,24,16);function m(oe,T,ee,Z,V=0){const X=new Le(d,T);return X.position.set(ee[0],ee[1],ee[2]),X.scale.set(Z[0],Z[1],Z[2]),X.rotation.x=V,oe.add(X),X}function x(oe,T,ee,Z,V,X){const ie=new z(...ee),ne=new z(...Z),k=ne.clone().sub(ie),Y=new Le(new Tn(X,V,k.length(),12,2),T);Y.position.copy(ie.add(ne).multiplyScalar(.5)),Y.quaternion.setFromUnitVectors(new z(0,1,0),k.normalize()),oe.add(Y)}function g(oe,T=24){const ee=[],Z=[];for(const[X,ie,ne,k]of oe)for(let Y=0;Y<=T;Y++){const $=Y/T*Math.PI*2;ee.push(Math.cos($)*ne,ie+Math.sin($)*k,X)}for(let X=0;X<oe.length-1;X++)for(let ie=0;ie<T;ie++){const ne=X*(T+1)+ie,k=ne+T+1;Z.push(ne,k,ne+1,ne+1,k,k+1)}const V=new pt;return V.setAttribute("position",new Ke(ee,3)),V.setIndex(Z),V.computeVertexNormals(),V}function p(){const oe=new wt;oe.name="Wildlife_Moose",oe.add(new Le(g([[-1.35,1.55,.02,.04],[-1.15,1.63,.32,.42],[-.6,1.62,.45,.58],[0,1.68,.47,.62],[.5,1.87,.4,.62],[.85,1.86,.28,.42],[1.03,1.85,.12,.16]]),i));const T=new wt;T.position.set(0,1.88,.62),oe.add(T),T.add(new Le(g([[0,.05,.18,.28],[.24,.18,.24,.32],[.49,.38,.2,.29],[.7,.4,.19,.25],[.91,.28,.19,.22],[1.14,.13,.22,.2],[1.4,.1,.2,.13],[1.47,.1,.02,.06]]),i)),m(T,o,[0,.12,1.43],[.15,.07,.04]),m(T,i,[0,-.19,.76],[.09,.24,.08],-.2);for(const Z of[-1,1]){const V=m(T,i,[Z*.3,.64,.51],[.09,.045,.23]);V.rotation.z=Z*-.5,m(T,o,[Z*.202,.47,.85],[.027,.025,.025]),m(T,o,[Z*.12,.16,1.43],[.034,.018,.011]),x(T,r,[Z*.13,.66,.63],[Z*.42,.85,.59],.035,.048);const X=new Zr;X.moveTo(0,0),X.lineTo(.22,-.08),X.lineTo(.56,.02),X.lineTo(.65,.22),X.lineTo(.53,.36),X.lineTo(.26,.29),X.lineTo(.04,.17),X.closePath();const ie=new Le(new Oa(X,{depth:.035,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.012,bevelThickness:.012}),r);ie.position.set(Z*.4,.86,.59),ie.scale.x=Z,ie.rotation.x=-.35,T.add(ie);for(let ne=0;ne<6;ne++){const k=.48+ne*.1,Y=.91+Math.sin(ne*.47)*.22,$=.61;x(T,r,[Z*k,Y,$],[Z*(k+.025),Y+.17+ne%3*.05,$+.02],.025,.003)}}const ee=[];for(const Z of[-1,1])for(const V of[!1,!0]){const X=V?.61:-.92,ie=new wt;ie.position.set(Z*.27,1.52,X),oe.add(ie),ee.push(ie),x(ie,i,[0,0,0],[Z*.035,-.68,V?.03:-.17],.12,.055),x(ie,i,[Z*.035,-.68,V?.03:-.17],[Z*.045,-1.32,.05],.052,.032);for(const ne of[-1,1])m(ie,o,[Z*.045+ne*.035,-1.43,.09],[.033,.08,.1])}return m(oe,i,[0,1.7,-1.3],[.06,.09,.13]),{group:oe,legs:ee,neck:T}}const M=[p(),p()];M.forEach((oe,T)=>{oe.group.position.set(-32+T*4,n(-32+T*4,24-T*2),24-T*2),oe.group.rotation.y=-Math.PI/2,s.add(oe.group)});const _=M.map(oe=>oe.group.position.clone()),v=M.map((oe,T)=>new z(oe.group.position.x-2,n(oe.group.position.x-2,20-T*2),20-T*2));function E(){const oe=new wt;oe.name="Wildlife_Mallard",m(oe,a,[0,0,0],[.1,.105,.24]),m(oe,l,[0,.03,.16],[.095,.11,.12]),m(oe,c,[0,.14,.25],[.065,.1,.065],-.2),m(oe,h,[0,.09,.2],[.066,.012,.062]),m(oe,c,[0,.21,.28],[.067,.063,.082]),m(oe,f,[0,.2,.377],[.037,.012,.052]);for(const ee of[-1,1])m(oe,o,[ee*.063,.224,.301],[.008,.008,.008]),m(oe,u,[ee*.052,-.105,-.13],[.024,.014,.065]);const T=[];for(const ee of[-1,1]){const Z=new wt;Z.position.set(ee*.07,.035,.04),oe.add(Z),T.push(Z),m(Z,a,[ee*.17,0,-.035],[.2,.02,.105]);for(let V=0;V<10;V++){const X=m(Z,a,[ee*(.28+V*.009),-.006,-.09-V*.016],[.1-V*.003,.007,.019]);X.rotation.y=ee*(-.16-V*.045)}}return m(oe,a,[0,0,-.27],[.064,.014,.09]),{group:oe,wings:T}}const I=Array.from({length:4},E),C=[];s.traverse(oe=>{oe instanceof Le&&(Array.isArray(oe.material)?oe.material:[oe.material]).some(T=>T.name==="Water")&&C.push(oe)}),s.updateMatrixWorld(!0),t.set(new z(-12,100,-108.5),new z(0,-1,0));const U=(t.intersectObjects(C,!1)[0]?.point.y??.52)+.08;I.forEach((oe,T)=>{oe.group.position.set(T===0?-8.2:-5+T*3,T===0?1.6:2+T*.2,T===0?-102.5:-107-T*3),oe.group.rotation.y=Math.PI/2,oe.wings[0].rotation.z=.8-T*.2,oe.wings[1].rotation.z=-.35+T*.1,s.add(oe.group)});for(const oe of[...M.map(T=>T.group),...I.map(T=>T.group)]){const T=[];oe.traverse(ee=>{ee instanceof wt&&T.push(ee)});for(const ee of T){const Z=new Map;for(const V of ee.children)if(V instanceof Le&&!Array.isArray(V.material)){const X=Z.get(V.material)??[];X.push(V),Z.set(V.material,X)}for(const[V,X]of Z){const ie=X.map(k=>{k.updateMatrix();const Y=k.geometry.index?k.geometry.toNonIndexed():k.geometry.clone();return Y.applyMatrix4(k.matrix),Y.deleteAttribute("uv"),Y}),ne=fs(ie);ie.forEach(k=>k.dispose()),ne&&(X.forEach(k=>{k.removeFromParent(),k.geometry!==d&&k.geometry.dispose()}),ee.add(new Le(ne,V)))}}}d.dispose();const w=new wt;w.name="Autumn_Cabin";const S=25,b=78,F=n(S,b);w.position.set(S,F,b),s.add(w);const P=new Xe({name:"Cabin_Weathered_Red",color:"#692b24",roughness:.94}),L=new Xe({name:"Cabin_Timber",color:"#382d23",roughness:.98}),A=new Xe({name:"Cabin_Roof",color:"#565047",roughness:.96}),N=new Xe({name:"Cabin_Foundation",color:"#83837a",roughness:1}),H=new Xe({name:"Cabin_Window_Frame",color:"#cccac0",roughness:.9}),G=new Xe({name:"Cabin_Window_Glass",color:"#263b42",roughness:.18,metalness:.35});function O(oe,T,ee){const Z=new Le(new wn(ee[0],ee[1],ee[2]),oe);return Z.position.set(T[0],T[1],T[2]),w.add(Z),Z}O(N,[0,.2,0],[6.2,.4,8.2]),O(P,[0,1.65,0],[6,2.9,8]);for(let oe=0;oe<31;oe++)O(L,[-3+oe*.2,1.65,4.015],[.018,2.9,.025]),O(L,[-3+oe*.2,1.65,-4.015],[.018,2.9,.025]);for(let oe=0;oe<41;oe++)O(L,[3.015,1.65,-4+oe*.2],[.025,2.9,.018]),O(L,[-3.015,1.65,-4+oe*.2],[.025,2.9,.018]);for(const oe of[-1,1]){const T=O(A,[oe*1.6,3.64,0],[3.6,.16,8.6]);T.rotation.z=oe*-.36}for(const oe of[-4,4]){const T=new pt;T.setAttribute("position",new Ke([-3,3.1,oe,3,3.1,oe,0,4.25,oe],3)),T.setIndex(oe>0?[0,1,2]:[2,1,0]),T.computeVertexNormals(),w.add(new Le(T,P))}function q(oe,T=!1){const ee=new wt;ee.position.set(oe[0],oe[1],oe[2]),T&&(ee.rotation.y=Math.PI/2),w.add(ee);const Z=new Le(new wn(1,.95,.045),G);ee.add(Z);for(const V of[-.53,0,.53]){const X=new Le(new wn(.055,1.06,.07),H);X.position.x=V,ee.add(X)}for(const V of[-.5,0,.5]){const X=new Le(new wn(1.1,.045,.07),H);X.position.y=V,ee.add(X)}}q([-1.5,1.85,4.06]),q([1.5,1.85,4.06]);for(const oe of[-2.6,0,2.6])q([3.06,1.85,oe],!0);for(const oe of[-3,3])for(const T of[-4,4])O(L,[oe,1.65,T],[.13,3,.13]);for(let oe=0;oe<3;oe++){const T=new Xe({name:"Camp_Barrel",color:oe===2?"#773d2d":"#355465",roughness:.82,metalness:.35}),ee=new Le(new Tn(.29,.29,oe===2?.42:.82,32),T);ee.position.set(-1.6+oe*.75,oe===2?.41:.61,4.85),w.add(ee)}O(N,[2.73,1.35,4.12],[.36,.5,.13]);const K=new Zr;K.moveTo(0,-.055),K.quadraticCurveTo(.065,0,0,.09),K.quadraticCurveTo(-.055,0,0,-.055);const fe=new za(K,4);fe.rotateX(-Math.PI/2);const Se=new Xe({name:"Autumn_Fallen_Leaves",color:"#a77538",roughness:1,side:2}),ze=new It(fe,Se,420);ze.name="Autumn_Leaf_Litter";let Fe=7093;const ae=()=>(Fe=Math.imul(Fe,1664525)+1013904223>>>0,Fe/4294967296),he=new xt;for(let oe=0;oe<420;oe++){const T=-34+ae()*20,ee=17+ae()*18;he.position.set(T,n(T,ee)+.008,ee),he.rotation.set((ae()-.5)*.12,ae()*Math.PI*2,(ae()-.5)*.12),he.scale.setScalar(.6+ae()*.8),he.updateMatrix(),ze.setMatrixAt(oe,he.matrix),ze.setColorAt(oe,new Ye().setHSL(.065+ae()*.045,.35+ae()*.2,.3+ae()*.12))}ze.receiveShadow=!0,s.add(ze),w.updateMatrixWorld(!0);const we=new Map;w.traverse(oe=>{if(oe instanceof Le&&!Array.isArray(oe.material)){const T=we.get(oe.material)??[];T.push(oe),we.set(oe.material,T)}});const De=new je().copy(w.matrixWorld).invert();for(const[oe,T]of we){const ee=T.map(V=>{const X=V.geometry.index?V.geometry.toNonIndexed():V.geometry.clone();return X.applyMatrix4(new je().multiplyMatrices(De,V.matrixWorld)),X.deleteAttribute("uv"),X}),Z=fs(ee);ee.forEach(V=>V.dispose()),Z&&(T.forEach(V=>{V.removeFromParent(),V.geometry.dispose()}),w.add(new Le(Z,oe)))}s.updateMatrixWorld(!0);for(const oe of[...M.map(T=>T.group),...I.map(T=>T.group),w])oe.traverse(T=>{T instanceof Le&&(T.castShadow=!0,T.receiveShadow=!0)});let ye=0,Ve=0;return{moose:M.map(oe=>oe.group),ducks:I.map(oe=>oe.group),cabin:w,update(oe,T=!1){const ee=Math.max(0,Math.min(.1,oe-Ve));Ve=oe,ye=St.clamp(ye+(T?ee:-ee)*.055,0,1),M.forEach((Z,V)=>{Z.group.position.copy(_[V]).lerp(v[V],ye),Z.neck.rotation.x=Math.sin(oe*.25+V)*.045+ye*.12,Z.legs.forEach((X,ie)=>X.rotation.x=ye>0&&ye<1?Math.sin(oe*2.2+ie*Math.PI)*.16:Math.sin(oe*.4+V+ie)*.006)}),I.forEach((Z,V)=>{const X=(V===0?-8.2:-5+V*3)+Math.sin(oe*.08+V)*7;Z.group.position.x=St.lerp(X,-12+V*.8,ye),Z.group.position.z=St.lerp(V===0?-102.5:-107-V*3,-108.5+V*.1,ye),Z.group.position.y=St.lerp((V===0?1.6:2+V*.2)+Math.sin(oe*.9+V)*.12,U,ye),Z.group.rotation.y=Math.PI/2,Z.wings.forEach((ie,ne)=>{ie.rotation.z=(ne===0?1:-1)*Math.sin(oe*5.5+V)*.65*(1-ye),ie.rotation.y=(ne===0?1:-1)*ye*1.25})})},views:{moose:{position:[-33,n(-33,31)+1.7,31],lookAt:[-30,M[0].group.position.y+1.6,23]},wetland:{position:[-9,1.1,-101],lookAt:[-1,3,-111]},cabin:{position:[S-10,F+1.7,b+14],lookAt:[S,F+2,b]},canopy:{position:[-33,n(-33,18)+1.7,18],lookAt:[-48,n(-33,18)+11,32]}},solids:[{minX:S-3.3,maxX:S+3.3,minZ:b-4.3,maxZ:b+4.3}]}}let en=null,Ri=null,to=0,Aa=0,no=.8;function zu(){if(!en||en.state==="closed"){en=new AudioContext,Ri=en.createGain(),Ri.gain.value=no;const s=en.createDynamicsCompressor();s.threshold.value=-6,s.knee.value=6,s.ratio.value=8,s.attack.value=.005,s.release.value=.2,Ri.connect(s).connect(en.destination)}return en}async function oy(){await zu().resume()}async function ku(s){let e;try{if(await Promise.race([s.resume(),new Promise((t,n)=>{e=setTimeout(()=>n(new Error("请点击开启环境声音")),2500)})]),s.state!=="running")throw new Error("请点击开启环境声音")}finally{clearTimeout(e)}}function Gu(){const s=zu();return to++,{context:s,output:Ri}}function Vu(){if(!to&&!Aa&&en){const s=en;en=null,Ri=null,s.close()}}function Ra(s){s===en&&(to=Math.max(0,to-1),Vu())}function Vy(){Aa++;let s=!1;return()=>{s||(s=!0,Aa--,Vu())}}function ay(s){no=Math.max(0,Math.min(1,s)),en&&Ri&&Ri.gain.setTargetAtTime(no,en.currentTime,.08)}function ha(){return no}class ly{context=null;master=null;loops=[];transient=new Set;muted=!1;rain=!1;cloudy=!1;noise(e){const t=this.context,n=t.createBuffer(1,Math.ceil(t.sampleRate*e),t.sampleRate),i=n.getChannelData(0);let r=2193509;for(let o=0;o<i.length;o++)r=Math.imul(r,1664525)+1013904223>>>0,i[o]=r/4294967296*2-1;return n}async arm(){if(!this.context){const e=Gu();this.context=e.context,this.master=this.context.createGain(),this.master.gain.value=0,this.master.connect(e.output);const t=this.noise(9);for(const[l,c,h,u]of[[2800,.24,-8,-5],[1800,.22,9,-8],[480,.28,-15,2],[6e3,.08,2,5]]){const f=this.context.createBufferSource();f.buffer=t,f.loop=!0;const d=this.context.createBiquadFilter();d.type="bandpass",d.frequency.value=l,d.Q.value=.65;const m=this.context.createGain();m.gain.value=c;const x=this.context.createPanner();x.panningModel="HRTF",x.distanceModel="inverse",x.refDistance=8,x.positionX.value=h,x.positionZ.value=u,f.connect(d).connect(m).connect(x).connect(this.master),f.start(0,Math.random()*8),this.loops.push({source:f,gain:m,volume:c,pan:x,offset:new z(h,0,u)})}const n=this.context.createBuffer(1,this.context.sampleRate*7,this.context.sampleRate),i=n.getChannelData(0);for(let l=0;l<7;l+=.028+Math.random()*.12){const c=Math.floor(l*this.context.sampleRate);for(let h=0;h<600&&c+h<i.length;h++)i[c+h]+=(Math.random()*2-1)*Math.exp(-h/95)*.22}const r=this.context.createBufferSource();r.buffer=n,r.loop=!0;const o=this.context.createGain();o.gain.value=.24;const a=this.context.createStereoPanner();a.pan.value=.6,r.connect(o).connect(a).connect(this.master),r.start(),this.loops.push({source:r,gain:o,volume:.24})}await ku(this.context),this.apply()}apply(){this.context&&this.master&&(this.master.gain.setTargetAtTime(this.rain&&!this.muted?.95:0,this.context.currentTime,.35),this.loops.forEach((e,t)=>e.gain.gain.setTargetAtTime(this.cloudy?t===2?.12:0:e.volume,this.context.currentTime,.2)))}setRain(e,t=!1){if(this.rain=e||t,this.cloudy=t,this.apply(),!this.rain){for(const n of this.transient)try{n.stop()}catch{}this.transient.clear()}}setMuted(e){this.muted=e,this.apply()}thunder(e){const t=this.context;if(!t||t.state!=="running"||!this.rain)return;const n=t.currentTime;for(const[i,r,o,a,l]of[[2.4,7,95,.28,75],[4.5,5,150,.34,36],[7.8,2.8,260,.4,9]]){const c=t.createBufferSource();c.buffer=this.noise(r);const h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=o;const u=t.createGain();u.gain.setValueAtTime(0,n+i),u.gain.linearRampToValueAtTime(a,n+i+.07),u.gain.exponentialRampToValueAtTime(1e-4,n+i+r);const f=t.createPanner();f.panningModel="HRTF",f.refDistance=25,f.positionX.value=e.x+l*.6,f.positionY.value=e.y+15,f.positionZ.value=e.z-l,c.connect(h).connect(u).connect(f).connect(this.master),c.onended=()=>{this.transient.delete(c),c.disconnect(),h.disconnect(),u.disconnect(),f.disconnect()},c.start(n+i),c.stop(n+i+r),this.transient.add(c)}}listener(e){if(!this.context)return;const t=this.context.listener,n=new z(0,0,-1).applyQuaternion(e.quaternion),i=new z(0,1,0).applyQuaternion(e.quaternion);t.positionX.value=e.position.x,t.positionY.value=e.position.y,t.positionZ.value=e.position.z,t.forwardX.value=n.x,t.forwardY.value=n.y,t.forwardZ.value=n.z,t.upX.value=i.x,t.upY.value=i.y,t.upZ.value=i.z;for(const r of this.loops)if(r.pan&&r.offset){const o=r.offset.clone().applyQuaternion(e.quaternion).add(e.position);r.pan.positionX.value=o.x,r.pan.positionY.value=o.y,r.pan.positionZ.value=o.z}}dispose(){this.loops.forEach(e=>e.source.stop()),this.transient.forEach(e=>{try{e.stop()}catch{}}),this.master?.disconnect(),this.context&&Ra(this.context),this.context=null}}function cy(s,e,t,n){let i="clear",r=0,o=8,a=0,l=-1;const c=matchMedia("(prefers-reduced-motion: reduce)").matches,h=new ly,u=new wt;u.name="Storm_Precipitation",u.visible=!1,s.add(u);const f=new _n({name:"Storm_Rain",color:"#aebfc9",transparent:!0,opacity:.28,depthWrite:!1,side:2}),d=new It(new Wn(.012,.32),f,1400);d.frustumCulled=!1,u.add(d);const m=[];let x=9813;const g=()=>(x=Math.imul(x,1664525)+1013904223>>>0,x/4294967296),p=new xt;for(let P=0;P<d.count;P++){const L=new z((g()-.5)*24,g()*18,(g()-.5)*24);m.push(L),p.position.copy(L),p.rotation.set(0,0,-.27),p.updateMatrix(),d.setMatrixAt(P,p.matrix)}const M=new _n({name:"Storm_Ripple",color:"#aabac0",transparent:!0,opacity:.2,side:2,depthWrite:!1}),_=new It(new so(.075,.083,20),M,70);_.frustumCulled=!1,u.add(_);const v=new It(new Wn(.012,.055),M,140);v.frustumCulled=!1,u.add(v);let E=new pt;E.setAttribute("position",new Ke([],3)),E.setAttribute("normal",new Ke([],3));const I=new Le(E,new _n({name:"Storm_Lightning",color:"#ddeaf6",side:2}));I.name="Storm_Lightning",I.visible=!1,I.frustumCulled=!1,s.add(I);const C=new Wa,U=[],w=n?[]:[...t];s.traverse(P=>{if(!(P instanceof Le))return;let L=!1;for(let A=P.parent;A;A=A.parent)A.name==="Autumn_Cabin"&&(L=!0);(L||P.name.startsWith("Water"))&&w.push(P)});const S=new Map;s.traverse(P=>{if(P instanceof Le)for(const L of Array.isArray(P.material)?P.material:[P.material])L instanceof Xe&&S.set(L,{color:L.color.clone(),roughness:L.roughness,metalness:L.metalness})});function b(P){if(!(i===P&&s.userData.weatherIntensity!==void 0)){i=P,u.visible=P==="rain",s.userData.weatherIntensity=P==="rain"?1:P==="cloudy"?.6:0,s.userData.rainIntensity=P==="rain"?1:0,h.setRain(P==="rain",P==="cloudy"),I.visible=!1;for(const[L,A]of S)L.color.copy(A.color),L.roughness=A.roughness,L.metalness=A.metalness,P==="rain"&&!/Fur|Feather|Foliage|fern/.test(L.name)&&(L.color.multiplyScalar(.8),L.roughness=Math.min(L.roughness,.29));r=0,o=P==="cloudy"?.1:8,l=-1}}function F(){const P=new z(.35,.1,-1).applyQuaternion(e.quaternion);P.y=0,P.normalize();const L=e.position.clone().addScaledVector(P,170);L.y=e.position.y+55;const A=[],N=11;let H=L.clone();for(let G=1;G<=N;G++){const O=L.clone().add(new z((g()-.5)*9,-G*3.8,(g()-.5)*3)),q=.12;A.push(H.x-q,H.y,H.z,H.x+q,H.y,H.z,O.x-q,O.y,O.z,O.x-q,O.y,O.z,H.x+q,H.y,H.z,O.x+q,O.y,O.z),H=O}E.dispose(),E=new pt,I.geometry=E,E.setAttribute("position",new Ke(A,3)),E.computeVertexNormals(),E.computeBoundingSphere(),I.visible=!c,a=.2,h.thunder(e.position)}return{setMode:b,mode:()=>i,armAudio:()=>{const P=h.arm();return h.listener(e),P},mute:P=>h.setMuted(P),update(P){if(h.listener(e),i!=="clear"&&(r+=P,a-=P,a<=0&&(I.visible=!1),r>=o&&(F(),o=r+30+g()*20),i!=="cloudy")){u.position.copy(e.position),u.position.y=e.position.y-8;for(let L=0;L<d.count;L++){const A=m[L],N=18-(r*16+A.y)%18;p.position.set(A.x-N*.27,N,A.z),p.rotation.set(0,0,-.27),p.scale.setScalar(1),p.updateMatrix(),d.setMatrixAt(L,p.matrix)}if(d.instanceMatrix.needsUpdate=!0,r-l>1){l=r,U.length=0,s.updateMatrixWorld(!0);for(let L=0;L<_.count;L++){const A=e.position.x+(g()-.5)*20,N=e.position.z+(g()-.5)*20;C.set(new z(A,e.position.y+15,N),new z(0,-1,0));const H=C.intersectObjects(w,!0)[0],G=n?.(A,N),O=H&&(!G||H.point.y>G.point.y)?H.point:G?.point;U.push(O?O.clone():new z(A,-100,N))}}for(let L=0;L<_.count;L++){const A=(r*1.8+L*.618)%1;p.position.copy(U[L]??new z(0,-100,0)).sub(u.position),p.position.y+=.012,p.rotation.set(-Math.PI/2,0,0),p.scale.setScalar(.3+A*3.4),p.updateMatrix(),_.setMatrixAt(L,p.matrix)}_.instanceMatrix.needsUpdate=!0;for(let L=0;L<v.count;L++){const A=(r*2.6+L*.618)%1,N=L*2.4;p.position.copy(U[Math.floor(L/2)]??new z(0,-100,0)).sub(u.position),p.position.add(new z(Math.cos(N)*A*.15,Math.sin(A*Math.PI)*.15+.025,Math.sin(N)*A*.15)),p.rotation.set(0,N,Math.sin(N)*.6),p.scale.setScalar(1-A),p.updateMatrix(),v.setMatrixAt(L,p.matrix)}v.instanceMatrix.needsUpdate=!0}},dispose(){h.dispose(),d.geometry.dispose(),f.dispose(),_.geometry.dispose(),v.geometry.dispose(),M.dispose(),E.dispose(),I.material.dispose(),u.removeFromParent(),I.removeFromParent()}}}function Hu(s,e){if(s.length<2||!e.every(Number.isFinite))return null;let t=null;for(let n=1;n<s.length;n++){const i=s[n-1],r=s[n];if(![...i,...r].every(Number.isFinite))continue;const o=r[0]-i[0],a=r[2]-i[2],l=Math.max(0,Math.min(1,((e[0]-i[0])*o+(e[2]-i[2])*a)/(o*o+a*a||1))),c=i.map((u,f)=>u+(r[f]-u)*l),h=Math.hypot(e[0]-c[0],e[2]-c[2]);(!t||h<t.distance)&&(t={point:c,distance:h,segment:n-1})}return t}function wh(s,e,t){const n=[],i=[],r=d=>{let m=n.findIndex(x=>Math.hypot(x[0]-d[0],x[2]-d[2])<.1);return m<0&&(m=n.length,n.push(d),i.push(new Map)),m};for(const d of s)for(let m=1;m<d.points.length;m++){const x=r(d.points[m-1]),g=r(d.points[m]),p=Math.hypot(...n[x].map((M,_)=>M-n[g][_]));i[x].set(g,p),i[g].set(x,p)}const o=d=>{let m=1/0,x=[0,0],g=n[0];i.forEach((M,_)=>M.forEach((v,E)=>{const I=n[E][0]-n[_][0],C=n[E][2]-n[_][2],U=Math.max(0,Math.min(1,((d[0]-n[_][0])*I+(d[2]-n[_][2])*C)/(I*I+C*C||1))),w=n[_].map((b,F)=>b+(n[E][F]-b)*U),S=Math.hypot(w[0]-d[0],w[2]-d[2]);S<m&&(m=S,x=[_,E],g=w)}));const p=r(g);for(const M of x)if(M!==p){const _=Math.hypot(...g.map((v,E)=>v-n[M][E]));i[p].set(M,_),i[M].set(p,_)}return p};if(!n.length)return[];const a=o(e),l=o(t),c=n.map(()=>1/0),h=n.map(()=>-1),u=new Set(n.map((d,m)=>m));for(c[a]=0;u.size;){const d=[...u].reduce((m,x)=>c[x]<c[m]?x:m);if(!Number.isFinite(c[d]))return[];if(u.delete(d),d===l)break;i[d].forEach((m,x)=>{c[d]+m<c[x]&&(c[x]=c[d]+m,h[x]=d)})}const f=[];for(let d=l;d!==-1&&(f.unshift(n[d]),d!==a);d=h[d]);return f}class hy{position;distance=0;path=[];constructor(e){this.position=[...e]}get moving(){return this.path.length>0}go(e){this.path=e.map(t=>[...t])}stop(){this.path=[]}update(e){let t=Math.max(0,Math.min(e,.1))*1.45;for(;t>0&&this.path.length;){const n=this.path[0],i=n.map((o,a)=>o-this.position[a]),r=Math.hypot(...i);r<=t?(this.position=[...n],this.path.shift(),t-=r,this.distance+=r):(this.position=this.position.map((o,a)=>o+i[a]*t/r),this.distance+=t,t=0)}}}function nl(s){const e=new Map,t=4;for(const n of s)if(n instanceof Le){n.updateWorldMatrix(!0,!1);const i=n.geometry.getAttribute("position"),r=n.geometry.index,o=r?.count??i.count,a=Array.from({length:i.count},(l,c)=>new z().fromBufferAttribute(i,c).applyMatrix4(n.matrixWorld));for(let l=0;l<o;l+=3){const c=a[r?r.getX(l):l],h=a[r?r.getX(l+1):l+1],u=a[r?r.getX(l+2):l+2],f=(h.z-u.z)*(c.x-u.x)+(u.x-h.x)*(c.z-u.z);if(Math.abs(f)<1e-10)continue;const d=h.clone().sub(c).cross(u.clone().sub(c)).normalize();d.y<0&&d.negate();const m={a:c,b:h,c:u,normal:d,den:f};for(let x=Math.floor(Math.min(c.x,h.x,u.x)/t);x<=Math.floor(Math.max(c.x,h.x,u.x)/t);x++)for(let g=Math.floor(Math.min(c.z,h.z,u.z)/t);g<=Math.floor(Math.max(c.z,h.z,u.z)/t);g++){const p=x+","+g,M=e.get(p)??[];M.push(m),e.set(p,M)}}}return(n,i)=>{let r=-1/0,o=null;for(const a of e.get(Math.floor(n/t)+","+Math.floor(i/t))??[]){const{a:l,b:c,c:h,den:u}=a,f=((c.z-h.z)*(n-h.x)+(h.x-c.x)*(i-h.z))/u,d=((h.z-l.z)*(n-h.x)+(l.x-h.x)*(i-h.z))/u,m=1-f-d;if(f<-1e-5||d<-1e-5||m<-1e-5)continue;const x=f*l.y+d*c.y+m*h.y;x>r&&(r=x,o=a.normal)}return o?{point:new z(n,r,i),normal:o.clone()}:null}}function uy(s,e,t){const n=nl(e);let i=71645;const r=()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296),o=[[-32,24],[-69,-21],[25,78],[0,-101],[81,-165]],a=new z(0,1,0),l=new xt,c=[],h=(V,X,ie=.25)=>(t.solids??[]).some(ne=>V>ne.minX-ie&&V<ne.maxX+ie&&X>ne.minZ-ie&&X<ne.maxZ+ie)||t.tent&&Math.hypot(V-t.tent.center[0],X-t.tent.center[2])<4.5?!1:!(t.trails??[]).some(ne=>(Hu(ne.points,[V,0,X])?.distance??1/0)<1.4+ie),u=new Xe({name:"Ecology_Grass",color:"#626747",roughness:.98,side:2}),f=new Xe({name:"fern_Ecology",color:"#36503a",roughness:.96,side:2}),d=new Xe({name:"Ecology_Rhododendron",color:"#354530",roughness:.92,side:2}),m=new Xe({name:"Ancient_Bark",color:"#5b5446",roughness:.98});s.traverse(V=>{if(V instanceof Le)for(const X of Array.isArray(V.material)?V.material:[V.material])X instanceof Xe&&X.name==="Baked_Bark"&&(m.map=X.map,m.normalMap=X.normalMap)});function x(V){const X=[],ie=[],ne=V==="grass"?9:V==="fern"?8:15;function k($,R,y,W){const j=X.length/3;X.push(...$,...R,...y),ie.push(j,j+1,j+2)}for(let $=0;$<ne;$++){const R=$*2.399,y=Math.cos(R),W=Math.sin(R),j=V==="grass"?.3+r()*.5:V==="fern"?.25+r()*.4:.45+r()*.6;if(V==="grass"){const se=.018+r()*.023;k([y*.05,0,W*.05],[y*.05+se,0,W*.05],[y*.24,j,W*.24])}else{const se=V==="fern"?7:4;for(let te=1;te<=se;te++){const xe=te/se,pe=[y*xe*.5,j*(xe-.32*xe*xe),W*xe*.5],_e=(1-xe*.72)*(V==="fern"?.13:.1),Te=V==="fern"?.055:.09;for(const ge of[-1,1]){const Ee=[pe[0]-W*_e*ge,pe[1]+.025,pe[2]+y*_e*ge];k(pe,[pe[0]+y*Te,pe[1]+.01,pe[2]+W*Te],Ee)}}}}const Y=new pt;return Y.setAttribute("position",new Ke(X,3)),Y.setIndex(ie),Y.computeVertexNormals(),Y}const g=[];function p(V,X,ie,ne,k,Y){const $=new It(X,ie,ne);$.name="Ecology_"+V;let R=0;for(let y=0;y<ne*3&&R<ne;y++){const W=o[y%o.length],j=r()*Math.PI*2,se=Math.sqrt(r())*(y%3===0?12:32),te=W[0]+Math.cos(j)*se,xe=W[1]+Math.sin(j)*se,pe=.5+.5*Math.sin(te*.11+Math.sin(xe*.07)*3);if(r()>.32+.65*pe||!h(te,xe))continue;const _e=n(te,xe);if(!_e||_e.point.y<-.3||_e.normal.y<.65)continue;l.position.copy(_e.point),l.quaternion.setFromUnitVectors(a,_e.normal),l.rotateY(r()*Math.PI*2);const Te=k+r()*(Y-k);l.scale.setScalar(Te),l.updateMatrix(),$.setMatrixAt(R++,l.matrix),V==="Sapling_Trunks"&&g.push(l.matrix.clone()),R<40&&c.push({kind:V,position:_e.point.toArray(),normal:_e.normal.toArray()})}if($.count=R,$.receiveShadow=!0,$.castShadow=V==="Shrubs",R>1e3){const y=new Map,W=new je;for(let j=0;j<R;j++){$.getMatrixAt(j,W);const se=new z().setFromMatrixPosition(W),te=Math.floor(se.x/32)+","+Math.floor(se.z/32),xe=y.get(te)??[];xe.push(W.clone()),y.set(te,xe)}for(const[j,se]of y){const te=new It(X,ie,se.length);te.name=$.name+"_"+j,se.forEach((xe,pe)=>te.setMatrixAt(pe,xe)),te.receiveShadow=!0,te.castShadow=$.castShadow,te.computeBoundingSphere(),s.add(te)}}else $.computeBoundingSphere(),s.add($);return R}const M={pebbles:0,grass:p("Sedges_Grasses",x("grass"),u,24e3,.6,1.45),ferns:p("Fern_Colonies",x("fern"),f,6e3,.55,1.3),shrubs:p("Shrubs",x("shrub"),d,1100,.5,1.5)},_=[],v=[],E=[];for(let V=0;V<=16;V++)for(let X=0;X<=32;X++){const ie=V/16,ne=X/32*Math.PI*2,k=(.58*(1-ie*.8)+.45*Math.exp(-ie*24))*(1+.085*Math.sin(X*4.1+V*.55));_.push(Math.cos(ne)*k,ie*18,Math.sin(ne)*k),v.push(X/32*3,ie*12)}for(let V=0;V<16;V++)for(let X=0;X<32;X++){const ie=V*33+X,ne=ie+33;E.push(ie,ne,ie+1,ie+1,ne,ne+1)}const I=new pt;I.setAttribute("position",new Ke(_,3)),I.setAttribute("uv",new Ke(v,2)),I.setIndex(E),I.computeVertexNormals();const C=new It(I,m,20);C.name="Ancient_Trees",C.castShadow=!0,C.receiveShadow=!0;let U;s.traverse(V=>{!U&&V instanceof It&&(Array.isArray(V.material)?V.material:[V.material]).some(X=>X.name.includes("Foliage"))&&(U=V)});const w=[],S=[];let b=0;for(let V=0;V<100&&b<20;V++){const X=o[V%o.length],ie=X[0]+(r()-.5)*35,ne=X[1]+(r()-.5)*35;if(!h(ie,ne,2))continue;const k=n(ie,ne);if(!k||k.point.y<0||k.normal.y<.88)continue;const Y=.65+r()*.6,$=.85+r()*.35;if(l.position.copy(k.point),l.rotation.set((r()-.5)*.07,r()*Math.PI*2,(r()-.5)*.06),l.scale.set(Y,$,Y),l.updateMatrix(),C.setMatrixAt(b,l.matrix),w.push(k.point.clone()),S.push(l.matrix.clone()),t.obstacles??=[],t.obstacles.push({x:ie,z:ne,radius:Y*1.1}),U){const R=(Array.isArray(U.material)?U.material[0]:U.material).clone();R.name=b%4<2?"Foliage_Evergreen_Ancient":"Foliage_Ancient";const y=new Le(U.geometry,R);y.name="Ancient_Crown",y.position.copy(k.point),y.scale.set(Y*2.1,$,Y*2.1),y.rotation.y=r()*Math.PI*2,y.castShadow=!0,s.add(y)}b++}C.count=b,C.computeBoundingSphere(),s.add(C);const F=new Xe({name:"Ecology_Decaying_Wood",color:"#4a4537",roughness:1}),P=new Xe({name:"Ecology_Moss",color:"#293b28",roughness:1}),L=new wt;L.name="Ecology_Debris",s.add(L);for(let V=0;V<55;V++){const X=o[V%o.length],ie=X[0]+(r()-.5)*42,ne=X[1]+(r()-.5)*42,k=.9+r()*3.7,Y=r()*6.28,$=ie+Math.cos(Y)*k,R=ne+Math.sin(Y)*k;if(!h(ie,ne,.8)||!h($,R,.8))continue;const y=n(ie,ne),W=n($,R);if(!y||!W||Math.abs(y.point.y-W.point.y)>1)continue;const j=.07+r()*.18,se=y.point.clone().addScaledVector(a,j),te=W.point.clone().addScaledVector(a,j),xe=te.clone().sub(se),pe=new Le(new Tn(j*.8,j,xe.length(),16,4),F);pe.position.copy(se.add(te).multiplyScalar(.5)),pe.quaternion.setFromUnitVectors(a,xe.normalize()),pe.castShadow=!0,pe.receiveShadow=!0,L.add(pe);const _e=new Le(new Bt(1,12,8),P);_e.scale.set(k*.38,.03,j*.9),_e.position.copy(pe.position),_e.position.y+=j*.82,_e.rotation.y=-Y,L.add(_e)}const A=new Xe({name:"Ecology_Pebbles",color:"#747364",roughness:.96}),N=new Bt(1,10,6);N.translate(0,1,0),M.pebbles=p("Pebbles",N,A,700,.03,.16);const H=new Xe({name:"Ecology_Mushrooms",color:"#7b6550",roughness:.8}),G=new wt;G.name="Ecology_Mushrooms",s.add(G);for(const V of w.slice(0,12))for(let X=0;X<4;X++){const ie=V.x+.4+r()*.65,ne=V.z+(r()-.5)*.7,k=n(ie,ne);if(!k)continue;const Y=.03+r()*.07,$=new Le(new Tn(.008,.014,Y,8),H);$.position.copy(k.point).add(new z(0,Y/2,0)),G.add($);const R=new Le(new Bt(.04+r()*.025,12,8,0,Math.PI*2,0,Math.PI/2),H);R.position.copy(k.point).add(new z(0,Y,0)),R.scale.y=.45,G.add(R)}const O=new Xe({name:"Ecology_Leaf_Litter",color:"#785036",roughness:1,side:2}),q=new pt;q.setAttribute("position",new Ke([-.06,.003,0,0,.009,-.09,.065,.003,0,0,.009,.1],3)),q.setIndex([0,2,1,0,3,2]),q.computeVertexNormals();const K=p("Leaf_Litter",q,O,12e3,.4,1.6),fe=new Bt(1,8,4,0,Math.PI*2,0,Math.PI/2);fe.scale(.35,.015,.26),fe.translate(0,.006,0);const Se=p("Moss_Lichen",fe,P,3500,.5,2),ze=new Tn(.012,.035,1.1,8);ze.translate(0,.55,0);const Fe=p("Sapling_Trunks",ze,m,240,.35,2),ae=x("shrub");ae.translate(0,.45,0);const he=new It(ae,d,Fe);he.name="Ecology_Sapling_Crowns",g.forEach((V,X)=>he.setMatrixAt(X,V)),he.receiveShadow=!0,s.add(he);for(const[V,X]of w.entries()){for(let k=0;k<5;k++){const Y=k*1.256+r()*.3,$=.7+r()*1.2,R=n(X.x+Math.cos(Y)*$,X.z+Math.sin(Y)*$);if(!R)continue;const y=X.clone().add(new z(Math.cos(Y)*.3,.14,Math.sin(Y)*.3)),W=R.point.clone().add(new z(0,.025,0)),j=W.clone().sub(y),se=new Le(new Tn(.025,.13,j.length(),10),m);se.position.copy(y.add(W).multiplyScalar(.5)),se.quaternion.setFromUnitVectors(a,j.normalize()),L.add(se)}const ie=Array.from({length:18},(k,Y)=>{const $=Y*.2,R=Y*.45,y=$/18,W=R/(Math.PI*2)*32,j=(.58*(1-y*.8)+.45*Math.exp(-y*24))*(1+.085*Math.sin(W*4.1+y*16*.55))+.014;return new z(Math.cos(R)*j,$,Math.sin(R)*j).applyMatrix4(S[V])}),ne=new Le(new Ei(new Ti(ie),35,.012,5,!1),P);L.add(ne);for(let k=0;k<6;k++){const Y=k*2.399,$=6+k*1.2,R=[new z(0,$,0),new z(Math.cos(Y)*2,$+.5,Math.sin(Y)*2),new z(Math.cos(Y)*(3+k*.25),$+1.6,Math.sin(Y)*(3+k*.25))].map(W=>W.applyMatrix4(S[V])),y=new Le(new Ei(new Ti(R),14,.07,8,!1),m);L.add(y)}}const we=new Xe({name:"Ecology_Acorn_Cones",color:"#5f4830",roughness:.96}),De=new Xe({name:"Ecology_Beetle",color:"#262a20",roughness:.32}),ye=new Xe({name:"Ecology_Worm",color:"#694938",roughness:.5});let Ve=0,oe=0,T=0,ee=0,Z=0;for(let V=0;V<150;V++){const X=o[V%o.length],ie=X[0]+(r()-.5)*12,ne=X[1]+(r()-.5)*12,k=n(ie,ne);if(!k||k.point.y<-.31||!h(ie,ne))continue;const Y=V%3===0,$=Y?.025:.009,R=Y?.075:.017,y=new Le(new Bt(1,10,7),we);y.position.copy(k.point).addScaledVector(k.normal,$*.6),y.quaternion.setFromUnitVectors(a,k.normal),y.rotateZ(.8),y.scale.set($,$,R),L.add(y),Y?oe++:Ve++;const W=new Le(new Bt(1,8,6,0,Math.PI*2,0,Math.PI/2),F);if(W.position.copy(y.position).add(new z(0,.003,-R*.4)),W.scale.set($*1.15,$*.7,$*1.1),L.add(W),V%7===0){const j=new Le(new Bt(1,12,8),De);j.position.copy(k.point).addScaledVector(k.normal,.007),j.scale.set(.007,.005,.012),L.add(j),T++}if(V%11===0){const j=Array.from({length:14},(te,xe)=>{const pe=ie+xe*.008,_e=ne+Math.sin(xe*.5)*.016;return(n(pe,_e)?.point??k.point).clone().add(new z(0,.006,0))}),se=new Le(new Ei(new Ti(j),20,.004,6,!1),ye);L.add(se),ee++}if(V%5===0)for(const j of[-1,1]){const se=new Le(new Bt(1,8,5),F);se.position.copy(k.point).add(new z(j*.018,8e-4,.08)),se.quaternion.setFromUnitVectors(a,k.normal),se.scale.set(.015,.001,.025),L.add(se),Z++}}for(const V of[L,G]){V.updateMatrixWorld(!0);const X=new Map;V.traverse(ie=>{if(ie instanceof Le&&!Array.isArray(ie.material)){const ne=X.get(ie.material)??[];ne.push(ie),X.set(ie.material,ne)}});for(const[ie,ne]of X){const k=ne.map(R=>{const y=R.geometry.clone().applyMatrix4(R.matrixWorld);return y.deleteAttribute("uv"),y.index?y.toNonIndexed():y}),Y=fs(k);if(k.forEach(R=>R.dispose()),!Y)continue;ne.forEach(R=>{R.geometry.dispose(),R.removeFromParent()});const $=new Le(Y,ie);$.receiveShadow=!0,$.castShadow=!0,s.add($)}}return Object.assign(M,{litter:K,mossPatches:Se,saplings:Fe,acorns:Ve,cones:oe,beetles:T,worms:ee,footprints:Z}),{counts:M,ancientTrees:b,contacts:c,sample:n}}const gt=s=>-108+Math.sin(s*.035)*1.2+Math.sin(s*.063)*.45,ln=s=>1.55+.42*Math.sin(s*.049)+.2*Math.cos(s*.13),Ct=-.31;function fy(s,e){const t=[];s.traverse(O=>{O instanceof Le&&(Array.isArray(O.material)?O.material:[O.material]).some(q=>q.name==="Water")&&t.push(O)}),t.forEach(O=>O.removeFromParent());const n=nl(e),i=[];for(let O=0;O<=280;O++){const q=-210+O*1.5;i.push(n(q,gt(q)-5)?.point.y??0,n(q,gt(q)+5)?.point.y??0)}const r=new z,o=new je;for(const O of e)if(O instanceof Le&&!O.name.includes("Bridge")){O.updateMatrixWorld(!0),o.copy(O.matrixWorld).invert();const q=O.geometry.getAttribute("position");for(let K=0;K<q.count;K++){r.fromBufferAttribute(q,K).applyMatrix4(O.matrixWorld);const fe=Math.abs(r.z-gt(r.x));if(fe<12&&r.y<2){const Se=St.smoothstep(fe,5,12);r.y=St.lerp(Ct-.17,r.y,Se),r.applyMatrix4(o),q.setXYZ(K,r.x,r.y,r.z)}}q.needsUpdate=!0,O.geometry.computeVertexNormals(),O.geometry.computeBoundingSphere()}const a=[],l=[],c=[];for(let O=0;O<=280;O++)for(const q of[-1,1]){const K=-210+O*1.5;if(a.push(K,Ct,gt(K)+q*ln(K)*.5),l.push(K*.2,q===-1?0:1),O<280&&q===-1){const fe=O*2;c.push(fe,fe+1,fe+2,fe+1,fe+3,fe+2)}}const h=new pt;h.setAttribute("position",new Ke(a,3)),h.setAttribute("uv",new Ke(l,2)),h.setIndex(c),h.computeVertexNormals();const u=new Xe({name:"Water",color:"#476660",roughness:.055,metalness:.04}),f=new Le(h,u);f.name="Water_Shallow_Meander",f.receiveShadow=!0,s.add(f);const d=[],m=[],x=[];for(let O=0;O<=280;O++){const q=-210+O*1.5,K=ln(q)*.5,fe=[-5,-2,-K-.12,-K,0,K,K+.12,2,5];for(let Se=0;Se<9;Se++){const ze=Math.abs(fe[Se]),Fe=i[O*2+(Se<4?0:1)],ae=ze<=K?Ct-.15:St.lerp(Ct-.025,Math.max(Ct+.04,Fe),St.smoothstep(ze,K,5));if(d.push(q,ae,gt(q)+fe[Se]),m.push(q*.4,fe[Se]*.4),O<280&&Se<8){const he=O*9+Se;x.push(he,he+1,he+9,he+1,he+10,he+9)}}}const g=new pt;g.setAttribute("position",new Ke(d,3)),g.setAttribute("uv",new Ke(m,2)),g.setIndex(x),g.computeVertexNormals();const p=new Le(g,new Xe({name:"Creek_Submerged_Bed",color:"#6d6c50",roughness:.96}));p.name="Ground_Creek_Bed",p.receiveShadow=!0,s.add(p),p.updateMatrixWorld(!0),e.push(p);const M=new It(new Bt(1,12,8),new Xe({name:"Creek_Submerged_Stone",color:"#797b65",roughness:.93}),460);M.name="Creek_Rounded_Pebbles";const _=new xt;let v=2146;const E=()=>(v=Math.imul(v,1664525)+1013904223>>>0,v/4294967296);for(let O=0;O<M.count;O++){const q=-120+E()*240,K=gt(q)+(E()-.5)*ln(q)*.82,fe=.025+E()*.055;_.position.set(q,Ct-.145+fe*.45,K),_.rotation.set(E(),E()*6.28,E()),_.scale.set(fe,fe*.6,fe*.8),_.updateMatrix(),M.setMatrixAt(O,_.matrix)}M.receiveShadow=!0,s.add(M);const I=new It(new Wn(.025,.13,1,4),new Xe({name:"Creek_Weeds",color:"#3b5940",roughness:.85,side:2}),160);for(let O=0;O<I.count;O++){const q=-80+E()*160;_.position.set(q,Ct-.08,gt(q)+(E()-.5)*ln(q)*.7),_.rotation.set(0,E()*6.28,.2),_.scale.setScalar(.7+E()*.5),_.updateMatrix(),I.setMatrixAt(O,_.matrix)}s.add(I);const C=new It(new Wn(.08,.12),new Xe({name:"Creek_Drifting_Leaf",color:"#856035",roughness:.9,side:2}),24);C.name="Creek_Drifting_Leaves",s.add(C);const U=new It(new so(.92,1,32),new _n({name:"Creek_Contact_Ripple",color:"#849c99",transparent:!0,opacity:.16,depthWrite:!1,side:2}),32);U.name="Creek_Contact_Ripples",U.frustumCulled=!1,s.add(U);const w=Array.from({length:32},()=>({x:0,z:0,age:10}));let S=0,b=0;const F=new It(new Bt(1,10,7),new Xe({name:"Creek_Tadpole",color:"#3e4230",roughness:.4}),28),P=new It(new Wn(.004,.026,1,3),new Xe({name:"Creek_Tadpole_Tail",color:"#454c35",roughness:.5,side:2}),28);s.add(F,P);const L=new wt;L.name="Creek_Water_Striders",s.add(L);const A=new Xe({name:"Creek_Strider",color:"#242c24",roughness:.5}),N=[];for(let O=0;O<4;O++){const q=new wt;N.push(q),L.add(q);const K=new Le(new Bt(1,10,6),A);K.scale.set(.002,.002,.009),K.position.y=.004,q.add(K);for(const fe of[-1,1])for(let Se=0;Se<3;Se++){const ze=new z(fe*.002,.003,.006-Se*.005),Fe=new z(fe*(Se===0?.012:.02),0,.017-Se*.014),ae=Fe.clone().sub(ze),he=new Le(new Tn(3e-4,3e-4,ae.length(),5),A);he.position.copy(ze.add(Fe).multiplyScalar(.5)),he.quaternion.setFromUnitVectors(new z(0,1,0),ae.normalize()),q.add(he)}}function H(O,q){w[S++%32]={x:O,z:q,age:0}}function G(O,q){b+=O;for(let K=0;K<F.count;K++){const fe=-7+K%7*.025+Math.sin(b*.5+K)*.05,Se=gt(fe)+Math.floor(K/7)*.035;_.position.set(fe,Ct-.07,Se),_.rotation.set(0,Math.sin(b*.7+K)*.5,0),_.scale.set(.003,.003,.005),_.updateMatrix(),F.setMatrixAt(K,_.matrix),_.position.z-=.015,_.rotation.x=0,_.rotation.y+=Math.sin(b*6+K)*.15,_.scale.setScalar(1),_.updateMatrix(),P.setMatrixAt(K,_.matrix)}F.instanceMatrix.needsUpdate=!0,P.instanceMatrix.needsUpdate=!0,N.forEach((K,fe)=>{const Se=-6+fe*.22+Math.sin(b*.2+fe)*.1;K.position.set(Se,Ct+.002,gt(Se)+Math.cos(b*.15+fe)*.3),K.rotation.y=b*.12+fe});for(let K=0;K<C.count;K++){const fe=-19+K*1.8+b*.016%1.8;_.position.set(fe,Ct+.004,gt(fe)+Math.sin(K*2.399)*ln(fe)*.3),_.rotation.set(-Math.PI/2,0,K*2.399+b*.025),_.scale.setScalar(.5+K%4*.2),_.updateMatrix(),C.setMatrixAt(K,_.matrix)}if(C.instanceMatrix.needsUpdate=!0,!q&&Math.floor(b*2)!==Math.floor((b-O)*2)&&Math.floor(b*2)%9===0){const K=-12+Math.sin(b)*4;H(K,gt(K))}for(let K=0;K<U.count;K++){const fe=w[K];fe.age+=O,_.position.set(fe.x,fe.age<1.4?Ct+.006:-100,fe.z),_.rotation.set(-Math.PI/2,0,0),_.scale.setScalar(.025+fe.age*.28),_.updateMatrix(),U.setMatrixAt(K,_.matrix)}U.instanceMatrix.needsUpdate=!0}return{water:f,level:Ct,center:gt,width:ln,splash:H,update:G,dispose:()=>t.forEach(O=>{O.geometry.dispose();for(const q of Array.isArray(O.material)?O.material:[O.material])q.dispose()})}}class dy{context=null;master=null;buffers=new Map;sources=new Set;stream=null;rustle=null;muted=!1;raining=!1;nextBird=5;elapsed=0;lastEvent=new Map;camera=new z;pending=null;disposed=!1;birdTimer=null;async arm(e){if(this.disposed)return;e&&this.camera.copy(e.position),this.pending||(this.pending=this.initialize().catch(n=>{throw this.master?.disconnect(),this.context&&Ra(this.context),this.context=null,this.pending=null,n}));const t=ku(this.context);await Promise.all([this.pending,t]),!this.disposed&&(e&&this.update(e,0),this.apply())}async initialize(){const e=Gu(),t=this.context=e.context;this.master=t.createGain(),this.master.gain.value=0;const n=t.createDynamicsCompressor();n.threshold.value=-18,n.ratio.value=4,n.attack.value=.03,n.release.value=.3,this.master.connect(n).connect(e.output);const i=["great-tit","sparrows","leaf-rustle","quiet-stream","frog","peck","fox","eagle"];if(await Promise.all(i.map(async d=>{const m=await fetch(Ys("audio/forest/"+d+".mp3"));if(!m.ok)throw Error("声景资源加载失败: "+d);const x=await t.decodeAudioData(await m.arrayBuffer());let g=0,p=0,M=0;for(let E=0;E<x.numberOfChannels;E++){const I=x.getChannelData(E);for(const C of I)g=Math.max(g,Math.abs(C)),p+=C*C,M++}const _=Math.sqrt(p/Math.max(1,M)),v=Math.min(8,.85/(g||1),.14/(_||1));for(let E=0;E<x.numberOfChannels;E++){const I=x.getChannelData(E);for(let C=0;C<I.length;C++)I[C]*=v}this.disposed||this.buffers.set(d,x)})),this.disposed)return;this.stream=this.loop("quiet-stream",.24,new z(0,-.28,-108),14),this.rustle=this.loop("leaf-rustle",.32,this.camera.clone().add(new z(-5,2,-7)),12);const r=t.createBuffer(1,t.sampleRate*12,t.sampleRate),o=r.getChannelData(0);let a=5310578,l=0;for(let d=0;d<o.length;d++){a=Math.imul(a,1664525)+1013904223>>>0,l=(l+.025*(a/4294967296*2-1))/1.025;const m=Math.min(1,d/(t.sampleRate*.04),(o.length-1-d)/(t.sampleRate*.04));o[d]=l*3.5*m}const c=t.createBufferSource();c.buffer=r,c.loop=!0;const h=t.createBiquadFilter();h.type="highpass",h.frequency.value=100;const u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=1500;const f=t.createGain();f.gain.value=.22,c.connect(h).connect(u).connect(f).connect(this.master),c.start(),this.sources.add(c),this.nextBird=t.currentTime+2,this.birdTimer=setInterval(()=>this.bird(),500)}panner(e,t=5){const n=this.context.createPanner();return n.panningModel="HRTF",n.distanceModel="inverse",n.refDistance=t,n.rolloffFactor=1.2,n.positionX.value=e.x,n.positionY.value=e.y,n.positionZ.value=e.z,n}loop(e,t,n,i){const r=this.context,o=r.createBufferSource();o.buffer=this.buffers.get(e),o.loop=!0;const a=r.createGain();a.gain.value=t;const l=this.panner(n,i);return o.connect(a).connect(l).connect(this.master),o.start(),this.sources.add(o),{pan:l,gain:a}}apply(){this.master&&this.context&&this.master.gain.setTargetAtTime(this.muted?0:this.raining?.2:.85,this.context.currentTime,.6)}setRain(e){this.raining=e,this.apply()}mute(e){this.muted=e,this.apply()}recordedBird(e,t){const n=this.context,i=n.createBufferSource();i.buffer=this.buffers.get(e);const r=n.createGain(),o=Math.min(e==="great-tit"?i.buffer.duration:2.2,i.buffer.duration),a=n.currentTime;r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(.3,a+.08),r.gain.setValueAtTime(.3,a+o-.12),r.gain.linearRampToValueAtTime(0,a+o);const l=this.panner(t,12);i.connect(r).connect(l).connect(this.master),this.sources.add(i),i.onended=()=>{this.sources.delete(i),i.disconnect(),r.disconnect(),l.disconnect()},i.start(a,e==="sparrows"?Math.random()*Math.max(0,i.buffer.duration-o):0,o)}bird(){const e=this.context;if(!e||e.state!=="running"||this.raining||this.muted||this.buffers.size!==8||e.currentTime<this.nextBird)return;const t=Math.random()*Math.PI*2,n=12+Math.random()*15;this.recordedBird(Math.random()<.5?"great-tit":"sparrows",this.camera.clone().add(new z(Math.cos(t)*n,5,Math.sin(t)*n))),this.nextBird=e.currentTime+5+Math.random()*7}event(e,t){const n=this.context;if(!n||n.state!=="running"||this.muted||t.distanceTo(this.camera)>65||(this.lastEvent.get(e)??-1/0)+1.8>this.elapsed)return;if(this.lastEvent.set(e,this.elapsed),this.buffers.has(e)){this.recordedBird(e,t);return}const i=n.currentTime,r=this.panner(t,2),o=n.createGain();o.gain.value=0,o.connect(r).connect(this.master);const a=["frog","eagle","kingfisher","fox"].includes(e);let l;if(a){const h=n.createOscillator();l=h,h.type=e==="frog"?"sine":"triangle";const u={frog:220,eagle:1400,kingfisher:2900,fox:150}[e];h.frequency.setValueAtTime(u,i),h.frequency.exponentialRampToValueAtTime(u*(e==="eagle"?.45:1.12),i+.3),h.connect(o)}else{const h=n.createBuffer(1,n.sampleRate*.35,n.sampleRate),u=h.getChannelData(0);for(let m=0;m<u.length;m++)u[m]=(Math.random()*2-1)*Math.exp(-m/(n.sampleRate*.1));const f=n.createBufferSource();l=f,f.buffer=h;const d=n.createBiquadFilter();d.type="bandpass",d.frequency.value=e==="peck"?1800:e==="splash"?650:3500,d.Q.value=.5,f.connect(d).connect(o)}const c=a?.38:.24;o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(e==="splash"?.15:.07,i+.02),o.gain.exponentialRampToValueAtTime(1e-4,i+c),this.sources.add(l),l.onended=()=>{this.sources.delete(l),l.disconnect(),o.disconnect(),r.disconnect()},l.start(i),l.stop(i+c)}update(e,t){this.elapsed+=t,this.camera.copy(e.position);const n=this.context;if(!n||n.state!=="running")return;const i=n.listener,r=new z(0,0,-1).applyQuaternion(e.quaternion),o=new z(0,1,0).applyQuaternion(e.quaternion);if(i.positionX.value=e.position.x,i.positionY.value=e.position.y,i.positionZ.value=e.position.z,i.forwardX.value=r.x,i.forwardY.value=r.y,i.forwardZ.value=r.z,i.upX.value=o.x,i.upY.value=o.y,i.upZ.value=o.z,this.stream&&(this.stream.pan.positionX.value=e.position.x,this.stream.gain.gain.setTargetAtTime(.24,n.currentTime,.8)),this.rustle){const a=this.camera.clone().add(new z(-5,2,-7));this.rustle.pan.positionX.value=a.x,this.rustle.pan.positionY.value=a.y,this.rustle.pan.positionZ.value=a.z,this.rustle.gain.gain.setTargetAtTime(.28+.06*(.5+.5*Math.sin(this.elapsed*.13)),n.currentTime,1)}}dispose(){this.disposed=!0,this.birdTimer&&clearInterval(this.birdTimer),this.sources.forEach(e=>{try{e.stop()}catch{}}),this.sources.clear(),this.master?.disconnect(),this.context&&Ra(this.context),this.context=null}}function py(s,e="adult",t=!1){const n=[],i=[],r=[];function o(b,F,P){const L=new Da;return L.name=b,L.position.set(F[0],F[1],F[2]),P?.add(L),n.push(L),L}const a=o("root",[0,0,0]),l=o("head",[0,0,0],a),c=o("tail",[0,0,0],a),h=[];function u(b,F,P=.85,L=0){const A=new Xe({name:"Wildlife_"+b,color:F,roughness:P,metalness:L,side:2});return r.push(A),r.length-1}const f=u(s==="carp"?"Scales":s==="frog"?"Wet_Skin":s==="turtle"?"Shell":s==="dragonfly"?"Chitin":s==="eagle"||s==="woodpecker"||s==="kingfisher"?"Feathers":"Fur",{carp:"#797951",frog:"#607447",turtle:"#3f4936",eagle:"#4a3a2d",woodpecker:"#242825",kingfisher:"#237b83",dragonfly:"#386b64",deer:"#8d542f",hare:"#776b56",squirrel:"#72503a",fox:"#a4562f"}[s],s==="frog"?.28:.88,s==="carp"?.23:0),d=u("Pale_Underside","#c8bc91"),m=u("Eye_Hoof","#151812",.13),x=u("Accent",s==="woodpecker"?"#a43a2b":s==="kingfisher"?"#b26931":"#a29150",.65);function g(b,F,P=a){if(b.index){const H=b;b=b.toNonIndexed(),H.dispose()}b.deleteAttribute("uv");const L=b.getAttribute("position").count,A=new Uint16Array(L*4),N=new Float32Array(L*4);for(let H=0;H<L;H++)A[H*4]=n.indexOf(P),N[H*4]=1;b.setAttribute("skinIndex",new La(A,4)),b.setAttribute("skinWeight",new Ke(N,4)),b.userData.material=F,i.push(b)}function p(b,F,P=f,L=a){const A=s==="carp"&&F[0]<.002,N=new Bt(1,A?10:20,A?6:12);N.scale(F[0],F[1],F[2]),N.translate(b[0],b[1],b[2]),g(N,P,L)}function M(b,F,P,L=f,A=a,N=P*.65){const H=new z(...b),G=new z(...F),O=G.clone().sub(H),q=new Tn(N,P,O.length(),10,3);q.applyQuaternion(new Yn().setFromUnitVectors(new z(0,1,0),O.normalize())),q.translate(...H.add(G).multiplyScalar(.5).toArray()),g(q,L,A)}function _(b,F,P){const L=new pt,A=[];for(let N=1;N<b.length-1;N++)A.push(...b[0],...b[N],...b[N+1]);L.setAttribute("position",new Ke(A,3)),L.computeVertexNormals(),g(L,F,P)}function v(b,F=f,P=a){const L=[],A=[];for(const[H,G,O,q]of b)for(let K=0;K<=24;K++){const fe=K/24*Math.PI*2;L.push(Math.cos(fe)*O,G+Math.sin(fe)*q,H)}for(let H=0;H<b.length-1;H++)for(let G=0;G<24;G++){const O=H*25+G,q=O+25;A.push(O,q,O+1,O+1,q,q+1)}const N=new pt;if(N.setAttribute("position",new Ke(L,3)),N.setIndex(A),N.computeVertexNormals(),g(N,F,P),["deer","hare","squirrel","fox"].includes(s)){const H=[],G=s==="deer"?.009:s==="fox"?.015:.007;for(let q=0;q<b.length-1;q++)for(let K=0;K<80;K++){const fe=K*.618%1,Se=K*2.399,ze=b[q],Fe=b[q+1],ae=St.lerp(ze[0],Fe[0],fe),he=St.lerp(ze[1],Fe[1],fe),we=St.lerp(ze[2],Fe[2],fe),De=St.lerp(ze[3],Fe[3],fe),ye=Math.cos(Se)*we,Ve=he+Math.sin(Se)*De;H.push(ye-7e-4,Ve,ae,ye+7e-4,Ve,ae,ye+Math.cos(Se)*G,Ve+Math.sin(Se)*G,ae-G*.6)}const O=new pt;O.setAttribute("position",new Ke(H,3)),O.computeVertexNormals(),g(O,F,P)}}const E=["eagle","woodpecker","kingfisher"].includes(s);if(s==="carp"){v([[-.14,0,.008,.018],[-.1,0,.019,.036],[-.04,0,.028,.055],[.045,0,.029,.052],[.09,0,.024,.039],[.13,-.005,.006,.015]]),c.position.z=-.105,_([[0,0,-.105],[0,.06,-.19],[0,.026,-.163],[0,0,-.146],[0,-.026,-.163],[0,-.06,-.19]],x,c),_([[0,.039,-.08],[0,.09,-.06],[0,.074,.035],[0,.042,.055]],x,a),_([[0,-.03,-.095],[0,-.071,-.12],[0,-.046,-.04]],x,a);for(const b of[-1,1]){const F=o("pectoral_"+b,[b*.023,-.01,.06],a);h.push(F),_([[b*.02,-.005,.07],[b*.075,-.03,.025],[b*.055,-.018,.08]],x,F),_([[b*.012,-.04,-.015],[b*.044,-.064,-.05],[b*.02,-.04,-.06]],x,a),p([b*.023,.02,.085],[.004,.004,.004],m,l),M([b*.006,-.012,.125],[b*.012,-.025,.14],.001,d,l)}if(p([0,-.014,.112],[.016,.015,.025],d,l),e!=="juvenile")for(const b of[-1,1])for(let F=0;F<5;F++)for(let P=0;P<15;P++){const L=-.085+P*.011+F%2*.005,A=(F-2)*.3;p([b*Math.cos(A)*.028,Math.sin(A)*.044,L],[.001,.006,.007],F===2?x:f)}}else if(s==="frog"||s==="turtle"){const b=s==="turtle",F=b?2.3:1;p([0,.015*F,0],[.026*F,.018*F,.031*F]),p([0,.018*F,.027*F],[.023*F,.014*F,.014*F],b?f:x,l);for(const P of[-1,1]){p([P*.016*F,.032*F,.032*F],[.007*F,.007*F,.007*F],x,l),p([P*.017*F,.034*F,.036*F],[.003*F,.003*F,.003*F],m,l);for(const L of[!1,!0]){const A=o((L?"hind":"fore")+"_"+P,[P*.02*F,.013*F,L?-.02*F:.023*F],a);h.push(A);const N=[P*.02*F,.014*F,L?-.02*F:.021*F],H=[P*(L?.045:.036)*F,.009*F,L?-.036*F:.025*F],G=[P*.031*F,.002*F,L?-.012*F:.044*F];M(N,H,(L?.009:.004)*F,f,A),M(H,G,.004*F,f,A);for(let O=0;O<4;O++)M(G,[G[0]+(O-1.5)*.004*F,.001*F,G[2]+.012*F],.001*F,d,A);b||_([G,[G[0]-.007*F,.001*F,G[2]+.011*F],[G[0]+.007*F,.001*F,G[2]+.011*F]],x,A)}}if(b){p([0,.01,0],[.057,.009,.068],d);for(let P=0;P<3;P++)for(let L=0;L<7;L++){const A=L/7*6.28,N=P*.017;p([Math.cos(A)*N,.055-P*.009,Math.sin(A)*N*1.3],[.012,.003,.015],x)}}else for(let P=0;P<18;P++)p([Math.sin(P*2.399)*.019,.031,Math.cos(P*2.399)*.023],[.003,.001,.004],m)}else if(E||s==="dragonfly"){const b=s==="eagle",F=s==="dragonfly",P=F?.065:s==="kingfisher"?.17:s==="woodpecker"?.23:.58,L=F?.085:b?1.5:P*1.7;if(v([[-P*.42,0,.001,.001],[-P*.28,0,P*.12,P*.13],[0,0,P*.13,P*.15],[P*.21,P*.025,P*.09,P*.09],[P*.36,P*.04,P*.025,P*.04]]),l.position.set(0,P*.06,P*.23),p([0,P*.075,P*.25],[P*.09,P*.095,P*.12],f,l),F)for(const N of[-1,1]){p([N*.007,.004,.022],[.005,.006,.005],x,l);for(let H=0;H<3;H++)M([N*.003,-.002,.007-H*.005],[N*.012,-.012,.009-H*.007],35e-5,m)}else{M([0,P*.06,P*.34],[0,P*.04,P*(b?.45:.58)],P*.025,b?x:m,l,.001);for(const N of[-1,1])p([N*P*.079,P*.11,P*.28],[P*.011,P*.013,P*.011],m,l);p([0,-P*.047,P*.06],[P*.12,P*.08,P*.22],s==="kingfisher"?x:d)}const A=F?u("Transparent_Wing","#a8b6b1",.2):f;F&&(r[A].transparent=!0,r[A].opacity=.42);for(const N of[-1,1])for(let H=0;H<(F?2:1);H++){const G=o("wing_"+N+"_"+H,[N*P*.08,0,-H*P*.16],a);if(h.push(G),F){_([[N*.004,0,-H*.013],[N*.043,0,.006-H*.012],[N*.04,0,-.004-H*.012],[N*.005,0,-.01-H*.012]],A,G);for(let O=1;O<7;O++)M([N*.006,0,-H*.013],[N*.04,0,.006-O*.0016-H*.012],15e-5,m,G)}else{_([[N*P*.07,0,P*.09],[N*L*.26,0,P*.15],[N*L*.48,0,-P*.12],[N*L*.35,0,-P*.26],[N*P*.08,0,-P*.25]],f,G);for(let O=0;O<11;O++)p([N*(L*.28+O*L*.017),0,-P*(.1+O*.014)],[L*.09,.003+P*.012,P*.038],O%3===0?d:f,G)}}if(!F){for(let N=0;N<7;N++)p([(N-3)*P*.014,0,-P*.43],[P*.026,P*.009,P*.15],f,c);for(const N of[-1,1]){M([N*P*.045,-P*.08,-P*.07],[N*P*.045,-P*.2,-P*.06],P*.007,x);for(let H=-1;H<2;H++)M([N*P*.045,-P*.2,-P*.06],[N*P*.045+H*P*.025,-P*.2,P*.015],P*.002,m)}s==="woodpecker"&&p([0,P*.15,P*.22],[P*.06,.008,P*.05],x,l)}}else{const b=s==="deer",F=s==="hare",P=s==="squirrel",L=b?1.15:F?.43:P?.22:.72,A=b?.72:F?.17:P?.105:.32,N=L*.14;v([[-L*.49,A,.001,.001],[-L*.39,A,N*.7,L*.13],[-L*.2,A,N,L*.16],[L*.12,A,N*.9,L*.16],[L*.3,A,N*.6,L*.12],[L*.38,A,.005,.02]]),l.position.set(0,A,L*.27),M([0,A,L*.25],[0,A+(b?.29:.08),L*.38],N*.6,f,l,N*.43),p([0,A+(b?.35:.07),L*.44],[N*.53,N*.6,L*.12],f,l),M([0,A+(b?.32:.065),L*.49],[0,A+(b?.29:.05),L*.62],N*.37,f,l,N*.19),p([0,A+(b?.29:.05),L*.625],[N*.22,N*.17,.012],m,l);for(const H of[-1,1]){p([H*N*.49,A+(b?.39:.1),L*.45],[L*.012,L*.014,L*.012],m,l),p([H*N*.65,A+(b?.49:F?.2:.13),L*.39],[N*.3,F?.12:L*.055,L*.018],f,l);for(const G of[!1,!0]){const O=G?L*.23:-L*.32,q=o((G?"fore":"hind")+"_"+H,[H*N*.65,A,O],a);h.push(q);const K=[H*N*.7,A*.48,O+(G?0:-L*.07)],fe=[H*N*.74,.027,O+L*.035];M([H*N*.65,A,O],K,N*(G?.23:.4),f,q),M(K,fe,N*.14,f,q),p([fe[0],.018,fe[2]+.018],[N*.2,.02,L*.055],b?m:f,q)}}if(c.position.set(0,A,-L*.4),M([0,A,-L*.4],[0,A+(P?.12:-.08),-L*(P?1.12:F?.6:.96)],N*(P?.55:.34),f,c,P?N*.8:N*.06),p([0,A-.06,-L*.94],[N*.19,N*.19,L*.05],d,c),b){for(const H of[-1,1])for(let G=0;G<35;G++){const O=-.38+G%9*.09,q=A+.02+Math.floor(G/9)*.044;p([H*N*.92,q,O],[.007,.013,.016],d)}if(t)for(const H of[-1,1]){const G=A+.9;M([H*.07,A+.44,L*.39],[H*.17,G,L*.22],.024,x,l,.006);for(let O=0;O<3;O++)M([H*(.09+O*.025),A+.54+O*.1,L*.34-O*.04],[H*(.19+O*.04),A+.65+O*.14,L*.4-O*.055],.012,x,l,.002)}}}a.updateMatrixWorld(!0);const I=new io(n);I.calculateInverses(),i.sort((b,F)=>b.userData.material-F.userData.material);let C=fs(i,!0);C.groups.forEach((b,F)=>b.materialIndex=i[F].userData.material);const U=C.groups.slice();C.clearGroups();for(const b of U){const F=C.groups.at(-1);F&&F.materialIndex===b.materialIndex?F.count+=b.count:C.addGroup(b.start,b.count,b.materialIndex)}i.forEach(b=>b.dispose());const w=Hx(C,1e-5);C.dispose(),C=w;const S=new Gh(C,r);return S.name="Wildlife_"+s+"_"+e,S.add(a),S.bind(I),S.castShadow=!0,S.receiveShadow=!0,S.frustumCulled=!1,e==="juvenile"?S.scale.setScalar(s==="deer"?.52:.18):e==="subadult"&&S.scale.setScalar(.78),S.userData={species:s,age:e,sex:t?"male":"unspecified",modelStatus:"original anatomical study",bones:n.length},{mesh:S,bones:n,head:l,tail:c,limbs:h,species:s,age:e}}function my(s,e,t,n,i){const r=nl(e),o=[];function a(_,v,E,I="adult",C=!1){const U=py(_,I,C),w=r(v,E);U.mesh.position.set(v,w?.point.y??0,E),s.add(U.mesh),o.push({rig:U,origin:U.mesh.position.clone(),phase:o.length*2.399,state:"idle",last:0})}for(let _=0;_<3;_++)a("carp",-9+_*.75,gt(-9+_*.75));for(let _=0;_<16;_++)a("carp",-7+_*.04,gt(-7),"juvenile");a("frog",-7,gt(-7)+ln(-7)*.5+.12),a("turtle",-4,gt(-4)+ln(-4)*.5+.18),a("eagle",0,-105),a("kingfisher",-5,-107),a("dragonfly",-8,-108),a("dragonfly",-9,-108);const l=(t.obstacles??[]).find(_=>Math.abs(_.z+105)<25)??{x:-17,z:-95,radius:.4};a("woodpecker",l.x+l.radius,l.z),a("deer",-14,gt(-14)+ln(-14)*.5+.2,"adult",!0),a("deer",-12,gt(-12)+ln(-12)*.5+.2),a("deer",-11,gt(-11)+1.2,"juvenile"),a("deer",-17,-99,"subadult"),a("hare",-17,-94),a("squirrel",l.x+l.radius+.1,l.z+.2),a("fox",-24,-99);const h=o.find(_=>_.rig.species==="kingfisher").origin,u=r(h.x+.6,h.z+.6)?.point??h,f=new Le(new Ei(new Ti([u,u.clone().add(new z(-.1,.8,-.1)),new z(h.x,h.y+1.466,h.z)]),18,.022,10,!1),new Xe({name:"Wildlife_Perch_Wood",color:"#554b3c",roughness:.97}));f.castShadow=!0,s.add(f);const d=s.getObjectByName("Ancient_Trees"),m=new je;let x=new z(l.x+1.3,(r(l.x,l.z)?.point.y??0)+12.116,l.z);if(d instanceof It&&d.count){d.getMatrixAt(0,m);const _=new z().setFromMatrixPosition(m);x=_.clone().add(new z(1.3,12.116,0));const v=new Le(new Ei(new Ti([_.clone().add(new z(.2,11.8,0)),x.clone().add(new z(0,-.116,0))]),12,.075,12,!1),f.material);v.castShadow=!0,s.add(v)}for(const _ of o)if(_.rig.species==="frog"||_.rig.species==="turtle"){const v=new Le(new Bt(.1,16,10),new Xe({name:"Wildlife_Basking_Stone",color:"#67705a",roughness:.96}));v.scale.set(1,.45,.8),v.position.copy(_.origin).add(new z(0,.02,0)),v.receiveShadow=!0,s.add(v),_.origin.y+=.065}let g=0;function p(_,v,E){g-_.last>E&&(n.event(v,_.rig.mesh.position),v==="splash"&&i?.(_.rig.mesh.position.x,_.rig.mesh.position.z),_.last=g)}function M(_,v,E){g+=_;for(const I of o){const{rig:C,origin:U,phase:w}=I,S=C.mesh,b=g+w,F=S.position.distanceTo(v.position)<(C.species==="deer"?8:3);I.state=E?"shelter":F?"alert":"forage",C.head.rotation.y=Math.sin(b*.37)*.1,C.tail.rotation.y=Math.sin(b*(C.species==="carp"?2:.7))*.14;let P=U.x,L=U.z,A=U.y;if(C.species==="carp"){P+=Math.sin(b*.12)*.8,L=gt(P)+Math.sin(b*.19+w)*ln(P)*.22,A=Ct-.09,S.rotation.y=Math.cos(b*.12)>0?Math.PI/2:-Math.PI/2;const N=b%47,H=C.age==="adult"&&!E&&N<.4?Math.max(0,1.962*N-4.905*N*N):0;A+=H,H>.01&&p(I,"splash",4)}else if(C.species==="eagle")if(E){const N=1-Math.exp(-_*.9);P=St.lerp(S.position.x,x.x,N),L=St.lerp(S.position.z,x.z,N),A=St.lerp(S.position.y,x.y,N),C.limbs.forEach((H,G)=>{H.rotation.z=0,H.rotation.y=(G?1:-1)*1.25})}else P=U.x+Math.cos(b*.055)*22,L=U.z+Math.sin(b*.055)*22,A=48,S.rotation.y=-b*.055,C.limbs.forEach((N,H)=>{N.rotation.y=0,N.rotation.z=(H%2?1:-1)*(Math.floor(b)%12<2?Math.sin(b*2.6)*.22:.07)}),p(I,"eagle",45);else if(C.species==="dragonfly")E?(L=gt(P)+ln(P)*.5+.25,A=(r(P,L)?.point.y??Ct)+.012,C.limbs.forEach(N=>N.rotation.z=0)):(P+=Math.sin(b*1.8)*.4,L=gt(P)+Math.sin(b)*.2,A=Ct+.15+.13*Math.sin(b*.8),C.limbs.forEach((N,H)=>N.rotation.z=Math.sin(b*75+H)*.22));else if(C.species==="kingfisher"){const N=b%28;if(!E&&N>20&&N<23){const G=(N-20)/3;P+=Math.sin(G*Math.PI)*.4,L=gt(P),A=Ct+Math.abs(G-.5)*3.2,S.rotation.x=G<.5?1:-.6,C.limbs.forEach((O,q)=>O.rotation.z=Math.sin(b*12)*(q?1:-1)*.55),Math.abs(G-.5)<.05&&p(I,"splash",5)}else A=U.y+1.5,S.rotation.x=0,C.limbs.forEach((G,O)=>G.rotation.y=(O?1:-1)*1.3),p(I,"kingfisher",33)}else if(C.species==="woodpecker")A=U.y+3+(E?0:Math.floor(b/10)%3*.09),S.rotation.x=-Math.PI/2,C.limbs.forEach((N,H)=>N.rotation.y=(H?1:-1)*1.35),C.head.rotation.x=Math.floor(b)%12<2&&!E?Math.sin(b*14)*.15:0,!E&&Math.floor(b)%12<2&&p(I,"peck",2);else if(C.species==="frog"||C.species==="turtle")F||E?(L=St.lerp(S.position.z,gt(P),1-Math.exp(-_*2)),A=St.lerp(S.position.y,Ct-.06,1-Math.exp(-_*3)),I.state!==S.userData.behavior&&p(I,"splash",5)):(C.species==="frog"&&(C.head.scale.y=1+Math.sin(b*3)*.035,p(I,"frog",22)),A=U.y);else{const N=C.species==="hare"?.8:C.species==="squirrel"?.65:.1,H=F||C.species==="fox"||C.species==="squirrel";let G=U.x+(H?Math.sin(b*N)*(F?1.6:.65):0),O=U.z+(H?Math.cos(b*N)*.6:0)+(E?1:0);if(C.species==="deer"&&C.age==="juvenile"){const K=o.find(fe=>fe.rig.species==="deer"&&fe.rig.age==="adult"&&fe.rig.mesh.userData.sex!=="male");G=St.lerp(S.position.x,K.rig.mesh.position.x+.65,1-Math.exp(-_*1.3)),O=St.lerp(S.position.z,K.rig.mesh.position.z+.9,1-Math.exp(-_*1.3)),I.state="follow"}(t.obstacles??[]).some(K=>Math.hypot(G-K.x,O-K.z)<K.radius+.25)||(P=G,L=O);const q=r(P,L);if(q&&q.normal.y>.7&&q.point.y>Ct){A=q.point.y;const K=H&&(C.species==="hare"||C.species==="squirrel"),fe=Math.sqrt(8*.15/9.81),Se=b%fe;A+=K?Math.max(0,9.81*fe*.5*Se-4.905*Se*Se):0,S.rotation.y=Math.atan2(Math.cos(b*N),-Math.sin(b*N))}C.limbs.forEach((K,fe)=>K.rotation.x=H?Math.sin(b*4+fe*Math.PI)*.17:0),C.head.rotation.x=F?-.12:C.species==="deer"?.32:C.species==="fox"?.2:0,C.species==="deer"&&C.age==="adult"&&!F&&!E&&(S.rotation.y=Math.PI,C.head.rotation.x=1.1,I.state="drink"),H&&p(I,C.species==="squirrel"?"claws":"leaves",7),C.species==="fox"&&p(I,"fox",55)}S.position.set(P,A,L),S.userData.behavior=I.state}}return s.userData.wildlife=o.map(_=>({species:_.rig.species,age:_.rig.age,joints:_.rig.bones.length})),{actors:o,update:M}}async function gy(s){const e=new Vx({antialias:!0,powerPreference:"high-performance"}),t=new URLSearchParams(location.search).get("quality"),n=m=>m==="adaptive-min"?{maxWidth:800,maxHeight:500,shadowSize:512,nearDistance:12,farDistance:65}:m==="adaptive-low"||m==="auto"?{maxWidth:960,maxHeight:600,shadowSize:512,nearDistance:18,farDistance:90}:m==="smooth"?yi.quality.smooth:m==="high"?yi.quality.high:{maxWidth:yn.maxWidth,maxHeight:yn.maxHeight,shadowSize:2048,nearDistance:yi.vegetation.nearDistance,farDistance:yi.vegetation.farDistance};let i=n(t);e.outputColorSpace=Pt,e.toneMapping=4,e.toneMappingExposure=yn.exposure,e.shadowMap.enabled=!0,e.shadowMap.type=2;const r=new Cl;r.background=new Ye("#adbdc0"),r.fog=new Os("#adbdc0",yn.fogNear,yn.fogFar);const o=new Wt(56,1,.08,1e3);s.append(e.domElement);const a=new oo;a.name="Sky",a.scale.setScalar(1e4);const l=a.material.uniforms;l.turbidity.value=3,l.rayleigh.value=1.4,l.mieCoefficient.value=.004,l.mieDirectionalG.value=.8,l.sunPosition.value.set(-.55,.38,.45),r.add(a);const c=new xa(e),h=new Cl;h.add(a.clone());const u=c.fromScene(h,.03,.1,15e3);r.environment=u.texture,r.environmentIntensity=.28,c.dispose();const f=new ou("#fff5df",yi.lighting.sunIntensity);f.position.set(-35,45,10),f.target.position.set(0,0,-20),f.castShadow=!0,f.shadow.mapSize.set(i.shadowSize,i.shadowSize),Object.assign(f.shadow.camera,{left:-45,right:45,top:70,bottom:-70,near:1,far:130}),f.shadow.normalBias=.035,f.shadow.bias=-1e-4,r.add(f,f.target,new Hd("#d3e5ef","#3c4a2d",1.6));const d=new Set;try{const m=await fetch(yn.manifestUrl);if(!m.ok)throw new Error(`场景清单加载失败 (${m.status})`);const x=await m.json(),g=await new Wx().loadAsync(yn.assetUrl);r.add(g.scene);let p=Number(new URLSearchParams(location.search).get("seed"))||crypto.getRandomValues(new Uint32Array(1))[0];const M=p,_=()=>(p=Math.imul(p,1664525)+1013904223>>>0,p/4294967296),v=new Map,E={value:0},I=[];g.scene.traverse(k=>{if(!/^Animal_Deer_\d+$/.test(k.name))return;const Y=[];let $;k.traverse(R=>{R.name.startsWith("Deer_Leg_")&&Y.push(R),R.name.startsWith("Deer_Neck_")&&!(R instanceof Le)&&($=R)}),I.push({mesh:k,origin:k.position.clone(),phase:_()*Math.PI*2,legs:Y,neck:$})});for(const k of I)for(const Y of[k.mesh,...k.legs,...k.neck?[k.neck]:[]]){const $=new Map;for(const R of Y.children)if(R instanceof Le&&!Array.isArray(R.material)){const y=$.get(R.material)??[];y.push(R),$.set(R.material,y)}for(const[R,y]of $){if(y.length<2)continue;const W=y.map(te=>(te.updateMatrix(),te.geometry.clone().applyMatrix4(te.matrix))),j=fs(W);if(W.forEach(te=>te.dispose()),!j)continue;const se=new Le(j,R);se.name="Deer_Articulated_Part",Y.add(se),y.forEach(te=>{d.add(te.geometry),te.removeFromParent()})}}g.scene.traverse(k=>{if(k instanceof Le){if(k.name.startsWith("Tree_")){const Y=k.name.match(/^Tree_\d+/)?.[0]??k.name,$=v.get(Y)??{angle:_()*Math.PI*2,scale:.88+_()*.24};v.set(Y,$),k.rotation.y+=$.angle,k.scale.multiplyScalar($.scale),/^Tree_(Shrub|Fern)_/.test(k.name)&&(k.position.x+=(_()-.5)*1.2,k.position.z+=(_()-.5)*1.2)}(k.name.startsWith("Rock_")||k.name.startsWith("Fallen_Log_"))&&(k.rotation.y+=_()*Math.PI*2);for(const Y of Array.isArray(k.material)?k.material:[k.material])if(Y instanceof Xe&&Y.map&&/Granite|Wood|Bark/.test(Y.name)&&(Y.bumpMap=Y.map,Y.bumpScale=.035),Y instanceof Xe&&Y.name==="Water"&&(Y.roughness=.16,Y.metalness=.35,Y.color.set("#587b73"),Y.onBeforeCompile=$=>{$.uniforms.streamTime=E,$.vertexShader=`varying vec3 streamPosition;
`+$.vertexShader,$.vertexShader=$.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 streamPosition=position;`),$.fragmentShader=`uniform float streamTime; varying vec3 streamPosition;
`+$.fragmentShader,$.fragmentShader=$.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
 normal=normalize(normal+vec3(sin(streamPosition.x*18.0+streamTime*1.7)*.12,0.0,cos(streamPosition.z*22.0-streamTime)*.12));`)},Y.customProgramCacheKey=()=>"stream-ripples-v1"),Y instanceof Xe&&Y.name==="Forest_Floor"&&(Y.onBeforeCompile=$=>{$.vertexShader=`varying vec3 forestPosition;
`+$.vertexShader,$.vertexShader=$.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 forestPosition=position;`),$.fragmentShader=`varying vec3 forestPosition;
`+$.fragmentShader,$.fragmentShader=$.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 float moss=0.5+0.25*sin(forestPosition.x*.12+sin(forestPosition.z*.08)*2.0)+0.25*sin(forestPosition.z*.27+forestPosition.x*.04); diffuseColor.rgb*=mix(vec3(.62,.79,.41),vec3(.96,.90,.77),smoothstep(.22,.85,moss));`)},Y.customProgramCacheKey=()=>"forest-floor-patches-v1"),Y instanceof Xe&&Y.name.includes("Foliage")){const $=["#c4a04e","#af753d","#c49c57","#9b642f"];Y.color.set($[Math.abs([...Y.name].reduce((R,y)=>R+y.charCodeAt(0),0))%$.length]),Y.onBeforeCompile=R=>{R.uniforms.animalMotion=E,R.vertexShader=`uniform float animalMotion;
`+R.vertexShader,R.vertexShader=R.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.x += sin(animalMotion*1.4 + position.y*.7 + position.x)*smoothstep(2.0,8.0,position.y)*0.055;`)},Y.customProgramCacheKey=()=>"foliage-wind-v1"}}}),g.scene.updateMatrixWorld(!0);const C=new Map;g.scene.traverse(k=>{if(!(k instanceof Le))return;for(const $ of Array.isArray(k.material)?k.material:[k.material])($.name.includes("Foliage")||$.name.includes("fern"))&&($.transparent=!1,$.alphaTest=.45,$.side=2,$.depthWrite=!0);if(k.receiveShadow=!0,k.castShadow=!k.name.startsWith("Ground")&&!k.name.startsWith("Water"),k.name==="Groundcover_Grass"){k.castShadow=!1;for(const $ of Array.isArray(k.material)?k.material:[k.material])$.side=2}let Y=k.name.startsWith("Tree_");for(let $=k.parent;$;$=$.parent)$.name.startsWith("Tree_")&&(Y=!0);if(Y){const $=k.material,R=new z().setFromMatrixPosition(k.matrixWorld),y=yi.vegetation.tileSize,W=`${k.geometry.uuid}/${Array.isArray($)?$.map(se=>se.uuid).join(","):$.uuid}/${Math.floor(R.x/y)},${Math.floor(R.z/y)}`,j=C.get(W)??[];j.push(k),C.set(W,j)}});const U=[];for(const k of C.values()){const Y=k[0],$=new It(Y.geometry,Y.material,k.length);$.castShadow=!0,$.receiveShadow=!0,k.forEach((y,W)=>{$.setMatrixAt(W,y.matrixWorld),y.removeFromParent()}),$.computeBoundingSphere(),r.add($);const R=Array.isArray(Y.material)?Y.material:[Y.material];if(R.some(y=>/Foliage|fern/.test(y.name))&&Y.geometry.index){const y=R.find(se=>se instanceof Xe&&/Foliage|fern/.test(se.name)),W=new nu({depthPacking:3201,map:y.map,alphaTest:yi.vegetation.leafAlphaTest,side:2});W.onBeforeCompile=y.onBeforeCompile,W.customProgramCacheKey=()=>"foliage-wind-depth-v1",$.customDepthMaterial=W;const j=[Y.geometry];for(const se of[2,4]){const te=Y.geometry.clone(),xe=Y.geometry.index.array,pe=[];for(let _e=0;_e<xe.length;_e+=6*se)for(let Te=0;Te<6&&_e+Te<xe.length;Te++)pe.push(xe[_e+Te]);te.setIndex(pe),j.push(te),d.add(te)}U.push({mesh:$,geometries:j,center:$.boundingSphere.center.clone(),level:0})}else{const y=[Y.geometry];if(Y.geometry.index&&R.some(W=>W.name.includes("Bark"))){const W=Y.geometry.index.array,j=Y.geometry.getAttribute("position"),se=new z,te=new z,xe=new z;for(const pe of[.012,.035]){const _e=[];for(let ge=0;ge<W.length;ge+=3)se.fromBufferAttribute(j,W[ge]),te.fromBufferAttribute(j,W[ge+1]).sub(se),xe.fromBufferAttribute(j,W[ge+2]).sub(se),te.cross(xe).length()*.5>pe&&_e.push(W[ge],W[ge+1],W[ge+2]);const Te=Y.geometry.clone();Te.setIndex(_e),y.push(Te),d.add(Te)}}U.push({mesh:$,geometries:y,center:$.boundingSphere.center.clone(),level:0})}}const w=new Map;g.scene.traverse(k=>{if(!(k instanceof Le)||Array.isArray(k.material)||k.name.startsWith("Ground")||k.name.startsWith("Water")||k.name.startsWith("Animal_"))return;for(let R=k.parent;R;R=R.parent)if(R.name.startsWith("Animal_"))return;const Y=`${k.material.uuid}/${Object.keys(k.geometry.attributes).sort().join(",")}/${!!k.geometry.index}`,$=w.get(Y)??[];$.push(k),w.set(Y,$)});for(const k of w.values()){if(k.length<2)continue;const Y=k.map(y=>y.geometry.clone().applyMatrix4(y.matrixWorld)),$=fs(Y);if(Y.forEach(y=>y.dispose()),!$)continue;const R=new Le($,k[0].material);R.castShadow=!0,R.receiveShadow=!0,k.forEach(y=>{d.add(y.geometry),y.removeFromParent()}),r.add(R)}const S=new Ti(x.route.map(k=>new z(...k)),!1,"centripetal"),b=[];g.scene.traverse(k=>{k instanceof Le&&k.name.startsWith("Ground")&&b.push(k)});for(const k of w.values())for(const Y of k)Y.name.startsWith("Bridge_Plank")&&b.push(Y);const F=fy(r,b),P=ry(r,b),L=uy(r,b,x),A=new dy,N=my(r,b,x,A,F.splash);r.userData.ecology={counts:L.counts,ancientTrees:L.ancientTrees},I.forEach(k=>k.mesh.removeFromParent()),x.solids=[...x.solids??[],...P.solids];for(const[k,Y]of Object.entries(P.views))x.viewpoints.push({id:k,label:{moose:"驼鹿林地",wetland:"秋季湿地",cabin:"红木屋",canopy:"秋色树冠"}[k],position:Y.position,lookAt:Y.lookAt});const H=cy(r,o,b,L.sample),G=k=>{H.setMode(k);const Y=k!=="clear";A.setRain(Y),l.turbidity.value=Y?14:3,l.rayleigh.value=Y?.3:1.4,f.intensity=Y?.15:2.5,r.fog=Y?new Os("#66737e",30,210):new Os("#adbdc0",yn.fogNear,yn.fogFar)},O=new Wa,q=new z;let K=0,fe=0,Se=0;const ze=matchMedia("(prefers-reduced-motion: reduce)").matches;let Fe=0,ae=0,he=0;const we=()=>{o.rotation.set(ae,he+Fe,0,"YXZ")},De=(k,Y)=>{Fe-=k*.003,ae=St.clamp(ae-Y*.003,-1.2,1.2),we()},ye=()=>{Fe=0,ae=0,we()},Ve=k=>{const Y=k[0]-q.x,$=k[2]-q.z;if(K+=Math.hypot(Y,$),Math.hypot(Y,$)>.001){const R=Math.atan2(-Y,-$),y=Math.atan2(Math.sin(R-he),Math.cos(R-he));he+=y*.08}q.set(...k),we()},oe=(k,Y)=>{const $=he+Fe,R=q.x+k*Math.cos($)+Y*Math.sin($),y=q.z-k*Math.sin($)+Y*Math.cos($),W=x.bounds??{minX:-65,maxX:65,minZ:-85,maxZ:42};if(R<W.minX||R>W.maxX||y<W.minZ||y>W.maxZ||(x.obstacles??[]).some(se=>Math.hypot(R-se.x,y-se.z)<se.radius+.3)||(x.solids??[]).some(se=>R>se.minX-.25&&R<se.maxX+.25&&y>se.minZ-.25&&y<se.maxZ+.25))return;const j=L.sample(R,y);j&&Math.abs(j.point.y+1.7-q.y)<.5&&(K+=Math.hypot(R-q.x,y-q.z),q.set(R,j.point.y+1.7,y))},T=(k,Y)=>{O.setFromCamera(new be(k*2-1,1-Y*2),o);const $=O.intersectObjects(b,!1)[0];return $?[$.point.x,$.point.y+1.7,$.point.z]:null};let ee=e;const Z=()=>{const{width:k,height:Y}=s.getBoundingClientRect(),$=Math.min(devicePixelRatio||1,yn.maxDpr,i.maxWidth/Math.max(k,1),i.maxHeight/Math.max(Y,1));e.setPixelRatio($),e.setSize(k,Y),ee!==e&&(ee.setPixelRatio($),ee.setSize(k,Y)),o.aspect=k/Math.max(Y,1),o.updateProjectionMatrix()},V=k=>{i=n(k),f.shadow.map?.dispose(),f.shadow.map=null,f.shadow.mapSize.set(i.shadowSize,i.shadowSize),f.shadow.needsUpdate=!0,Z(),"backend"in ee&&ee.setQuality(i.shadowSize)},X=k=>{const Y=Math.min(1,Math.max(0,k)),$=q.clone();q.copy(S.getPointAt(Y)),Y>0&&(K+=Math.hypot(q.x-$.x,q.z-$.z));const R=L.sample(q.x,q.z);R&&(q.y=R.point.y+1.7);const y=S.getPointAt(Math.min(1,Y+.025));Y>.975&&y.add(S.getTangentAt(Y).multiplyScalar(4)),he=Math.atan2(q.x-y.x,q.z-y.z),Y===0&&(o.position.copy(q),Se=0),we()},ie=k=>{if(k==="animals"&&(k="moose"),k==="tent"&&x.tent){o.position.set(...x.tent.interiorCamera),o.lookAt(new z(...x.tent.interiorLookAt)),q.copy(o.position);return}if(k==="tent-outside"&&x.tent){const[$,R,y]=x.tent.center;o.position.set($+4,R+2,y+6.5),o.lookAt($,R+1,y),q.copy(o.position);return}const Y=x.viewpoints.find($=>$.id===k);Y&&(o.position.set(...Y.position),o.lookAt(new z(...Y.lookAt)),q.copy(o.position))},ne=(k,Y)=>{const $=Math.min(Math.max(k,0),.1);fe+=$,P.update(fe,H.mode()!=="clear"),H.update($),A.update(o,$),N.update($,o,H.mode()!=="clear"),F.update($,H.mode()==="rain"),E.value=fe;for(const R of U){const y=o.position.distanceTo(R.center),W=i.nearDistance+(R.level===0?5:-5),j=i.farDistance+(R.level<2?10:-10),se=y<W?0:y<j?1:2;R.level=se,R.mesh.geometry=R.geometries[Math.min(se,R.geometries.length-1)],R.mesh.castShadow=y<85}if($>0){const R=Y&&!ze?Math.sin(K*Math.PI*2/1.5)*.018:0;Se+=(R-Se)*(1-Math.exp(-12*$)),o.position.x=q.x,o.position.z=q.z,o.position.y+=(q.y+Se-o.position.y)*(1-Math.exp(-18*$))}};return new URLSearchParams(location.search).get("engine")!=="webgl"&&(ee=await sy(s,r,e)),Z(),X(0),G(new URLSearchParams(location.search).get("weather")==="rain"?"rain":"clear"),{renderer:ee,scene:r,camera:o,manifest:x,position:()=>q.toArray(),scenery:()=>({seed:M,animals:[...P.moose,...P.ducks].map(k=>k.position.toArray()),variants:v.size}),update:ne,resize:Z,setQuality:V,setWeather:G,armAudio:async()=>{await Promise.all([H.armAudio(),A.arm(o)])},mute:k=>{H.mute(k),A.mute(k)},place:X,viewpoint:ie,walk:Ve,look:De,resetLook:ye,move:oe,pick:T,dispose:()=>{A.dispose(),F.dispose(),H.dispose(),ee!==e&&ee.dispose(),u.dispose(),d.forEach(k=>k.dispose()),Th(r,e)}}}catch(m){throw u.dispose(),d.forEach(x=>x.dispose()),Th(r,e),m}}function Th(s,e){const t=new Set,n=new Set,i=new Set;s.traverse(r=>{r instanceof Le&&(r.customDepthMaterial&&n.add(r.customDepthMaterial),t.add(r.geometry),(Array.isArray(r.material)?r.material:[r.material]).forEach(o=>{n.add(o),Object.values(o).forEach(a=>{a instanceof qt&&i.add(a)})})),r instanceof Qs&&r.shadow?.dispose()}),i.forEach(r=>{const o=r.source.data;typeof ImageBitmap<"u"&&o instanceof ImageBitmap&&o.close(),r.dispose()}),n.forEach(r=>r.dispose()),t.forEach(r=>r.dispose()),e.dispose(),e.domElement.remove()}class xy{constructor(e=12e4){this.durationMs=e}durationMs;state="ready";elapsedMs=0;get progress(){return Math.min(1,this.elapsedMs/this.durationMs)}start(){(this.state==="ready"||this.state==="paused")&&(this.state="running")}pause(){this.state==="running"&&(this.state="paused")}restart(){this.elapsedMs=0,this.state="ready"}advance(e){this.state!=="running"||!Number.isFinite(e)||e<0||(this.elapsedMs=Math.min(this.durationMs,this.elapsedMs+e),this.elapsedMs===this.durationMs&&(this.state="completed"))}}function _y(s,e,t={}){s.innerHTML=`
    <div class="scene-host" aria-label="森林登山三维场景"></div>
    <header class="topbar"><a class="brand" href="${Ys()}">此刻山间 <span>· Here in the Mountains</span></a><span class="version">场景2.0 · 山林探索 / 画质未验收</span></header>
    <section class="intro"><p class="eyebrow">FOREST WALK · 林间漫步</p><h1>走进林间，<br>留一点时间给自己。</h1><p class="intro-copy">穿过溪谷、白桦林与山坡。<br>自由漫步，或规划一段登顶路线。</p><button class="primary" id="start" disabled>正在准备森林…</button><p class="hint">自由探索 · 路线规划 · 可随时暂停</p></section>
    <aside class="explore" hidden><h2>林地探索</h2><p>拖动画面转头 · WASD 行走<br>同一片山林，选择自己的走法</p><button id="mode">路线规划</button><button id="center">视角归正</button><svg id="explorer-map" viewBox="-195 -255 390 381" role="img" aria-label="探索地图：三条连通小径与当前位置" style="width:100%;height:180px;background:#24332b;border:1px solid #ffffff35"></svg><div class="destinations" hidden><button data-destination="camp">营地</button><button data-destination="trail">苔岩环线</button><button data-destination="creek">溪谷木桥</button><button data-destination="ridge">山顶俯瞰</button></div><button id="depart" hidden disabled>确认路线并出发</button><p id="navigation-status" aria-live="polite">自由探索 · 地图显示当前位置</p><small>真实眼动尚未接入；当前目的地用鼠标选择。</small></aside>
    <aside class="error" role="alert" hidden><h2>暂时无法进入森林</h2><p></p><button id="retry">重新加载</button></aside>
    <section class="controls" hidden><div class="journey"><span id="stage">营地出发</span><span id="time">00:00 / 02:00</span></div><progress max="1" value="0" aria-label="游览进度"></progress><div class="buttons"><button id="pause">暂停</button><button id="restart">回到起点</button><button id="report">下载运行记录</button></div></section>
    <footer class="footer"><span>混合林 · 溪谷 · 山坡 <label style="margin-left:12px">画质 <select id="quality" aria-label="场景画质"><option value="original">原画</option><option value="high">高清</option><option value="smooth">流畅</option></select></label> <label>天气 <select id="weather" aria-label="天气模式"><option value="clear">晴天</option><option value="rain">阴雨雷暴</option></select></label> <button id="storm-sound" aria-pressed="false">开启环境声音</button></span><span id="metrics">加载中</span><a href="${Ys("audio/forest/CREDITS.md")}" target="_blank" rel="noopener" style="color:inherit">声音来源</a></footer>
    <div class="end" hidden><p class="eyebrow">END OF THE TRAIL</p><h2>这一段，走完了。</h2><p>你可以再走一遍，也可以停留片刻。</p><button class="primary" id="again">再走一遍</button><button id="end-report">下载运行记录</button></div>`;const n=B=>s.querySelector(B),i=n("#quality");t.hike&&i.insertAdjacentHTML("afterbegin",'<option value="auto">自动</option>'),i.value=new URLSearchParams(location.search).get("quality")||(t.hike?"auto":"original"),i.addEventListener("change",()=>{T?.setQuality(i.value);const B=new URL(location.href);B.searchParams.set("quality",i.value),history.replaceState(null,"",B)});const r=n("#weather");r.value=new URLSearchParams(location.search).get("weather")==="rain"?"rain":"clear",t.hike&&r.insertAdjacentHTML("beforeend",'<option value="cloudy">阴天 · 雷声</option>');const o=n("#storm-sound");let a=!1,l=!1,c=null;o.insertAdjacentHTML("afterend",` <label>音量 <input id="sound-volume" type="range" min="0" max="100" step="5" value="${Math.round(ha()*100)}" aria-label="环境声音音量" style="width:90px;vertical-align:middle"><output id="sound-volume-value">${Math.round(ha()*100)}%</output></label>`);const h=()=>{if(!T)return Promise.resolve();if(l=!0,c)return c;const B=T;return o.textContent="正在开启声音…",c=(async()=>{try{if(await B.armAudio(),V||B!==T||!l)return;B.mute(!1),a=!0,o.textContent="静音",o.setAttribute("aria-pressed","true"),o.title="环境声音已开启"}catch{if(V||B!==T||!l)return;B.mute(!0),a=!1,o.textContent="点击开启环境声音",o.setAttribute("aria-pressed","false"),o.title="声音未启动，请点击重试；也请检查系统音量"}finally{c=null}})(),c};r.addEventListener("change",()=>{T?.setWeather(r.value==="rain"?"rain":"clear");const B=new URL(location.href);B.searchParams.set("weather",r.value),history.replaceState(null,"",B),l&&h()}),o.onclick=()=>{a?(l=!1,T?.mute(!0),a=!1,o.textContent="开启环境声音",o.setAttribute("aria-pressed","false")):h()},n("#sound-volume").oninput=B=>{const re=Number(B.target.value);ay(re/100),n("#sound-volume-value").textContent=`${re}%`};const u=B=>{!B.isTrusted||!l||a||B.target===o||(oy().catch(()=>{}),h())};s.addEventListener("pointerdown",u,!0),s.addEventListener("keydown",u,!0);const f=n(".scene-host"),d=n("#start"),m=n(".controls"),x=n("#pause"),g=n(".error"),p=n(".intro"),M=n(".end"),_=new xy;let v=!!t.hike,E=null,I=!1,C=!1,U=null;const w=n("#explorer-map"),S=n("#depart");let b=[],F=!0;const P=document.createElement("p");P.id="track-status",P.setAttribute("aria-live","polite"),w.after(P);const L=document.createElement("button");L.textContent="查看全图",L.id="map-follow",P.after(L),L.onclick=()=>{F=!F,L.textContent=F?"查看全图":"跟随当前位置",F||w.setAttribute("viewBox","-195 -255 390 381")};const A=(B=[])=>{if(!T)return;b=B;const re=["#b9c9a2","#aaa491","#d7bd81"];w.innerHTML=(T.manifest.trails??[]).map((de,Me)=>`<polyline fill="none" stroke="${re[Me%3]}" stroke-width="2.5" points="${de.points.map(me=>`${me[0]},${me[2]}`).join(" ")}"/>`).join("")+`<polyline fill="none" stroke="#eae7ca" stroke-width="5" points="${B.map(de=>`${de[0]},${de[2]}`).join(" ")}"/>`+T.manifest.viewpoints.map(de=>`<circle cx="${de.position[0]}" cy="${de.position[2]}" r="2" fill="#d7bd81"><title>${de.label}</title></circle>`).join("")+'<line id="track-offset" stroke="#e4a179" stroke-width=".65" stroke-dasharray="2 1"/><circle id="map-position" r="1.7" fill="#f2f3ed" stroke="#121916" stroke-width=".4"/><path id="map-heading" d="M 0 -4 L -1 -2 L 1 -2 Z" fill="#f2f3ed"/>'};let N="manual";const H=new Set;let G=null;const O=n(".explore"),q=n("#navigation-status"),K=()=>{!T||y||(_.pause(),v=!0,I=!1,E=new hy(T.position()),M.hidden=!0,m.hidden=!1,O.hidden=!1,n("#mode").textContent=C?"自由探索":"路线规划",x.textContent="暂停",q.textContent="自由探索 · 选择目的地或 WASD 行走")},fe=(B,re="manual")=>{if(!T)return;v||K(),E.position=T.position();const de=wh(T.manifest.trails??[{id:"main",label:"主路",points:T.manifest.route}],E.position,B);if(!de.length){q.textContent="这里没有连通的小径，请选择路标。";return}E.go(de),I=!1,x.textContent="暂停",N=re,q.textContent="沿小径前往目的地 · 可暂停或重新选择",oe({type:"movementStarted",timestampMs:performance.now()})},Se=B=>{if(!T||!C)return;const re=wh(T.manifest.trails??[],T.position(),B);if(re.length&&Math.hypot(re[0][0]-T.position()[0],re[0][2]-T.position()[2])>3){U=null,S.disabled=!0,q.textContent="请先在自由探索中走近地图上的小径，再规划路线";return}U=re.length?B:null,S.disabled=!U,A(re);const de=re.slice(1).reduce((Me,me,ue)=>Me+Math.hypot(...me.map((Pe,ke)=>Pe-re[ue][ke])),0);q.textContent=re.length?`规划约 ${Math.round(de)} m · ${Math.ceil(de/1.45/60)} 分钟 · 确认后出发`:"未找到连通路线"},ze=()=>{const B=f.getBoundingClientRect();return[...s.querySelectorAll("[data-destination]")].map(re=>{const de=re.getBoundingClientRect();return{id:`explore-${re.dataset.destination}`,x:(de.left-B.left)/B.width,y:(de.top-B.top)/B.height,width:de.width/B.width,height:de.height/B.height,enabled:!O.hidden&&!document.hidden&&!E?.moving&&!I}})};let Fe=-1/0,ae="";const he=e?.subscribeSamples(B=>{Fe=B.source==="camera"&&B.valid?B.timestampMs:-1/0}),we=B=>{const re=performance.now()-Fe;if(B.type!=="targetConfirmed"||!B.targetId||re<0||re>250)return;const de=ze().find(me=>me.id===B.targetId&&me.enabled),Me=de&&T?.manifest.viewpoints.find(me=>`explore-${me.id}`===de.id);Me&&C&&fe(Me.position,"camera")},De=e?.subscribeEvents(we),ye=new Set,Ve=new Set,oe=B=>ye.forEach(re=>re(B));let T=null,ee=0,Z=0,V=!1,X=0,ie=0,ne=0,k=0,Y="不可获取";const $=[],y=new URLSearchParams(location.search).get("view"),W=B=>{if(V||!T)return;const re=Z?B-Z:0;if(Z=B,!document.hidden){const Me=t.onFrame?.(T,B,re)??!1;if(v||_.advance(Math.min(re,100)),!v&&(_.state==="running"||_.state==="completed"))for(const[ue,Pe]of[["camp",0],["trail",.2],["creek",.6],["ridge",.85]])_.progress>=Pe&&!Ve.has(ue)&&(Ve.add(ue),oe({type:"nodeArrived",nodeId:ue,timestampMs:B}));if(!y){if(!v)T.place(_.progress);else if(!I&&E){const ue=E.moving;E.update(re/1e3),ue&&T.walk(E.position),ue&&!E.moving&&(q.textContent="已到达 · 可以转头、继续探索或返回营地",oe({type:"movementEnded",timestampMs:B}));const Pe=Number(H.has("d"))-Number(H.has("a")),ke=Number(H.has("s"))-Number(H.has("w"));if(Pe||ke){E.stop(),U=null,S.disabled=!0,N="manual";const Qe=Math.min(re,100)*.00145/Math.hypot(Pe,ke);T.move(Pe*Qe,ke*Qe),E.position=T.position()}}}t.hike?T.update(Math.min(re,100)/1e3,Me):y?T.update(Math.min(re,100)/1e3,!1):T.update(v?I?0:re/1e3:_.state==="running"?re/1e3:0,v?!!E?.moving||H.size>0:_.state==="running");const me=w.querySelector("#map-position");if(me){const ue=T.position();me.setAttribute("cx",String(ue[0])),me.setAttribute("cy",String(ue[2])),F&&w.setAttribute("viewBox",`${ue[0]-45} ${ue[2]-45} 90 90`),w.querySelector("#map-heading")?.setAttribute("transform",`translate(${ue[0]} ${ue[2]}) rotate(${-T.camera.rotation.y*180/Math.PI})`);const ke=(b.length>1?[{label:"所选路线",points:b}]:T.manifest.trails??[]).map(Qe=>({label:Qe.label,hit:Hu(Qe.points,ue)})).filter(Qe=>Qe.hit).sort((Qe,st)=>Qe.hit.distance-st.hit.distance)[0];if(ke?.hit){const{point:Qe,distance:st}=ke.hit,Yt=st>2.5;P.textContent=`${Yt?"已偏离":"位于"}${ke.label} · 距路线 ${st.toFixed(1)} m`,P.dataset.offRoute=String(Yt),me.setAttribute("fill",Yt?"#e4a179":"#f2f3ed");const zt=w.querySelector("#track-offset");zt?.setAttribute("x1",String(ue[0])),zt?.setAttribute("y1",String(ue[2])),zt?.setAttribute("x2",String(Qe[0])),zt?.setAttribute("y2",String(Qe[2]))}}T.renderer.render(T.scene,T.camera),re>0&&re<1e3&&($.push(re),$.length>3600&&$.shift())}n("progress").value=_.progress;const de=Math.floor(_.elapsedMs/1e3);if(n("#time").textContent=`${String(Math.floor(de/60)).padStart(2,"0")}:${String(de%60).padStart(2,"0")} / 02:00`,n("#stage").textContent=_.progress<.2?"营地出发":_.progress<.6?"林间小径":_.progress<.85?"溪流木桥":"山脊远景",!v&&_.state==="completed"&&M.hidden&&(M.hidden=!1,m.hidden=!0,oe({type:"movementEnded",nodeId:"ridge",timestampMs:B})),v&&T&&(n("#stage").textContent=C?"路线规划":"自由探索",n("#time").textContent=`海拔差 ${(T.position()[1]-T.manifest.viewpoints[0].position[1]).toFixed(1)} m`),e){const Me=ze(),me=JSON.stringify(Me);me!==ae&&(e.setTargets(Me),ae=me)}if(B>k){const Me=$.slice(-120),me=Me.length?1e3*Me.length/Me.reduce((ue,Pe)=>ue+Pe,0):0;n("#metrics").textContent=t.hike?`${Math.round(me)} FPS`:`${Math.round(me)} FPS · ${T.renderer.info.render.calls} draws · ${N}`,k=B+1e3}ee=requestAnimationFrame(W)},j=async()=>{const B=++X;cancelAnimationFrame(ee),T?.dispose(),T=null,g.hidden=!0,d.disabled=!0,d.textContent="正在准备森林…",ie=performance.now();try{const re=await gy(f);if(V||B!==X){re.dispose();return}if(T=re,ne=performance.now()-ie,"backend"in re.renderer)Y=`${re.renderer.backend} ${re.renderer.gpuDescription}`;else{const de=re.renderer.getContext(),Me=de.getExtension("WEBGL_debug_renderer_info");Me&&(Y=String(de.getParameter(Me.UNMASKED_RENDERER_WEBGL)))}if(y&&(re.viewpoint(y),p.hidden=!0),t.hike){p.hidden=!0,O.hidden=!1,n(".version").textContent="眼动徒步 · 秋季森林",O.querySelector("h2").textContent="当前位置",O.querySelector("p").textContent="地图跟随位置；路线旁显示偏离距离。";for(const de of["#mode","#center",".destinations","#depart","#navigation-status",".explore small"])n(de).hidden=!0;r.disabled=!0,T.setQuality(i.value)}A(),d.disabled=!1,d.textContent="开始探索",Z=0,t.onReady?.(T),ee=requestAnimationFrame(W)}catch(re){if(V||B!==X)return;g.hidden=!1,d.textContent="加载未完成",g.querySelector("p").textContent=`${re instanceof Error?re.message:"加载失败"}。请使用支持 WebGPU 的 Edge / Chrome；兼容模式可在地址后添加 ?engine=webgl。`,t.onError?.(g.querySelector("p").textContent)}},se=()=>{p.hidden=!0,K(),h()};d.onclick=se,x.onclick=()=>{v?(I=!I,H.clear(),x.textContent=I?"继续":"暂停"):_.state==="running"?(_.pause(),x.textContent="继续"):(_.start(),x.textContent="暂停")};const te=()=>{(_.state==="running"||E?.moving)&&oe({type:"movementEnded",timestampMs:performance.now()}),_.restart(),Ve.clear(),v=!1,C=!1,U=null,E=null,S.hidden=!0,S.disabled=!0,n(".destinations").hidden=!0,H.clear(),T?.resetLook(),T?.place(0),A(),M.hidden=!0,m.hidden=!0,O.hidden=!0,p.hidden=!1,n("#mode").textContent="路线规划"};n("#mode").onclick=()=>{C=!C,E?.stop(),U=null,S.disabled=!0,S.hidden=!C,n(".destinations").hidden=!C,n("#mode").textContent=C?"自由探索":"路线规划",q.textContent=C?"路线规划 · 在地图或列表选择目的地":"自由探索 · WASD 行走，地图显示当前位置",A()},S.onclick=()=>{U&&(fe(U),S.disabled=!0)},w.onclick=B=>{if(!C)return;const re=w.createSVGPoint();re.x=B.clientX,re.y=B.clientY;const de=w.getScreenCTM();if(de){const Me=re.matrixTransform(de.inverse());Se([Me.x,0,Me.y])}},n("#center").onclick=()=>T?.resetLook(),s.querySelectorAll("[data-destination]").forEach(B=>{B.onclick=()=>{const re=T?.manifest.viewpoints.find(de=>de.id===B.dataset.destination);re&&Se(re.position)}});const xe=B=>{t.hike||!p.hidden||y||(G={x:B.clientX,y:B.clientY,moved:!1},f.setPointerCapture(B.pointerId))},pe=B=>{if(!G)return;const re=B.clientX-G.x,de=B.clientY-G.y;Math.abs(re)+Math.abs(de)>2&&(G.moved=!0),T?.look(re,de),G.x=B.clientX,G.y=B.clientY},_e=B=>{if(G&&!G.moved&&v&&C&&T){const re=f.getBoundingClientRect(),de=T.pick((B.clientX-re.left)/re.width,(B.clientY-re.top)/re.height);de&&Se(de)}G=null},Te=B=>{if(t.hike||B.target instanceof HTMLInputElement||B.target instanceof HTMLTextAreaElement||!p.hidden||y)return;const re=B.key.toLowerCase();"wasd".includes(re)&&re.length===1&&(B.preventDefault(),v||K(),H.add(re))},ge=B=>H.delete(B.key.toLowerCase()),Ee=()=>{H.clear(),G=null};f.addEventListener("pointerdown",xe),f.addEventListener("pointermove",pe),f.addEventListener("pointerup",_e),f.addEventListener("pointercancel",Ee),window.addEventListener("keydown",Te),window.addEventListener("keyup",ge),window.addEventListener("blur",Ee),n("#restart").onclick=te,n("#again").onclick=()=>{te(),se()},n("#retry").onclick=()=>{te(),j()},n("#report").onclick=()=>{const B={version:"场景2.0",source:t.hike?T?.scene.userData.hikeSource:v?N:"simulated",visualAcceptance:"not-reviewed",cameraImplemented:t.hike&&T?.scene.userData.hikeSource==="camera",cameraInputConnected:!!e||t.hike&&T?.scene.userData.hikeSource==="camera",weather:r.value,audioEnabled:a,audioVolume:ha(),audioSource:"local credited forest recordings + original Web Audio weather / HRTF",scenery:T?.scenery(),bodyPosition:T?.position(),mode:C?"route":"free",sceneRevision:"forest-weather-ecology-rig-1",ecology:T?.scene.userData.ecology,wildlife:T?.scene.userData.wildlife,trackStatus:P.textContent,mapFollow:F,exploration:v,cameraPosition:T?.camera.position.toArray(),cameraRotation:T?.camera.rotation.toArray(),walkingDistance:E?.distance??0,browser:navigator.userAgent,gpu:Y,loadedMs:ne,cssViewport:[f.clientWidth,f.clientHeight],drawingBuffer:T?[T.renderer.domElement.width,T.renderer.domElement.height]:null,frameTimesMs:$,renderInfo:T?.renderer.info.render,assets:T?.manifest,recordedAt:new Date().toISOString()},re=URL.createObjectURL(new Blob([JSON.stringify(B,null,2)],{type:"application/json"})),de=document.createElement("a");de.href=re,de.download="focus-hiking-run.json",de.click(),URL.revokeObjectURL(re)},n("#end-report").onclick=()=>n("#report").click();const He=()=>T?.resize(),Oe=()=>{Z=0,document.hidden&&(_.pause(),I=!0,H.clear(),x.textContent="继续")},Ae=B=>{B.preventDefault(),cancelAnimationFrame(ee),_.pause(),g.hidden=!1,g.querySelector("p").textContent="图形上下文已丢失，请重新加载。"};return window.addEventListener("resize",He),document.addEventListener("visibilitychange",Oe),f.addEventListener("webglcontextlost",Ae,!0),j(),{...{subscribeEvents(B){return ye.add(B),()=>{ye.delete(B)}},handleCommand(){throw new Error("M1 自动游览尚不支持训练命令；请在 M4 契约审查后接入。")}},dispose(){V=!0,X++,he?.(),De?.(),e?.setTargets([]),cancelAnimationFrame(ee),T?.dispose(),ye.clear(),s.removeEventListener("pointerdown",u,!0),s.removeEventListener("keydown",u,!0),window.removeEventListener("resize",He),window.removeEventListener("keydown",Te),window.removeEventListener("keyup",ge),window.removeEventListener("blur",Ee),document.removeEventListener("visibilitychange",Oe),f.removeEventListener("pointerdown",xe),f.removeEventListener("pointermove",pe),f.removeEventListener("pointerup",_e),f.removeEventListener("pointercancel",Ee),f.removeEventListener("webglcontextlost",Ae,!0),s.replaceChildren()}}}const Hy=Object.freeze(Object.defineProperty({__proto__:null,mountGame:_y},Symbol.toStringTag,{value:"Module"}));export{Hy as a,_y as m,Vy as r,Ys as s,oy as u};
