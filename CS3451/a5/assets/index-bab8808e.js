var jl=Object.defineProperty;var Jl=(s,e,t)=>e in s?jl(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ve=(s,e,t)=>(Jl(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uo="131",Ql=0,pa=1,$l=2,ko=1,Kl=2,yi=3,Ci=0,Ze=1,$n=2,Ho=1,sn=0,bi=1,ma=2,ga=3,_a=4,ec=5,Wn=100,tc=101,nc=102,va=103,xa=104,ic=200,rc=201,sc=202,ac=203,Go=204,Vo=205,oc=206,lc=207,cc=208,uc=209,hc=210,dc=0,fc=1,pc=2,Ts=3,mc=4,gc=5,_c=6,vc=7,Lr=0,xc=1,yc=2,_n=0,Mc=1,wc=2,bc=3,Sc=4,Tc=5,Wo=300,Cr=301,Rr=302,Es=303,As=304,Pr=306,zs=307,Ls=1e3,gt=1001,Cs=1002,$e=1003,ya=1004,Ma=1005,vt=1006,Ec=1007,Ir=1008,Kn=1009,Ac=1010,Lc=1011,yr=1012,Cc=1013,xr=1014,gn=1015,Zn=1016,Rc=1017,Pc=1018,Ic=1019,Si=1020,Dc=1021,vn=1022,Tt=1023,Fc=1024,Nc=1025,Bc=Tt,jn=1026,Ri=1027,zc=1028,Oc=1029,Uc=1030,kc=1031,Hc=1032,Gc=1033,wa=33776,ba=33777,Sa=33778,Ta=33779,Ea=35840,Aa=35841,La=35842,Ca=35843,Vc=36196,Ra=37492,Pa=37496,Wc=37808,Xc=37809,qc=37810,Yc=37811,Zc=37812,jc=37813,Jc=37814,Qc=37815,$c=37816,Kc=37817,eu=37818,tu=37819,nu=37820,iu=37821,ru=36492,su=37840,au=37841,ou=37842,lu=37843,cu=37844,uu=37845,hu=37846,du=37847,fu=37848,pu=37849,mu=37850,gu=37851,_u=37852,vu=37853,xu=2200,yu=2201,Mu=2202,Mr=2300,wr=2301,Vr=2302,Xn=2400,qn=2401,br=2402,Os=2500,Xo=2501,wu=0,ft=3e3,Dr=3001,Us=3007,ks=3002,bu=3003,qo=3004,Yo=3005,Zo=3006,Su=3200,Tu=3201,ni=0,Eu=1,Wr=7680,Au=519,Pi=35044,Sr=35048,Ia="300 es";class yn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const et=[];for(let s=0;s<256;s++)et[s]=(s<16?"0":"")+s.toString(16);let Hi=1234567;const Ti=Math.PI/180,Ii=180/Math.PI;function Et(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(et[s&255]+et[s>>8&255]+et[s>>16&255]+et[s>>24&255]+"-"+et[e&255]+et[e>>8&255]+"-"+et[e>>16&15|64]+et[e>>24&255]+"-"+et[t&63|128]+et[t>>8&255]+"-"+et[t>>16&255]+et[t>>24&255]+et[n&255]+et[n>>8&255]+et[n>>16&255]+et[n>>24&255]).toUpperCase()}function ht(s,e,t){return Math.max(e,Math.min(t,s))}function Hs(s,e){return(s%e+e)%e}function Lu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Cu(s,e,t){return s!==e?(t-s)/(e-s):0}function Ei(s,e,t){return(1-t)*s+t*e}function Ru(s,e,t,n){return Ei(s,e,1-Math.exp(-t*n))}function Pu(s,e=1){return e-Math.abs(Hs(s,e*2)-e)}function Iu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Du(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Fu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Nu(s,e){return s+Math.random()*(e-s)}function Bu(s){return s*(.5-Math.random())}function zu(s){return s!==void 0&&(Hi=s%2147483647),Hi=Hi*16807%2147483647,(Hi-1)/2147483646}function Ou(s){return s*Ti}function Uu(s){return s*Ii}function Rs(s){return(s&s-1)===0&&s!==0}function ku(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function jo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Hu(s,e,t,n,i){const r=Math.cos,a=Math.sin,l=r(t/2),u=a(t/2),h=r((e+n)/2),f=a((e+n)/2),o=r((e-n)/2),c=a((e-n)/2),d=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(l*f,u*o,u*c,l*h);break;case"YZY":s.set(u*c,l*f,u*o,l*h);break;case"ZXZ":s.set(u*o,u*c,l*f,l*h);break;case"XZX":s.set(l*f,u*p,u*d,l*h);break;case"YXY":s.set(u*d,l*f,u*p,l*h);break;case"ZYZ":s.set(u*p,u*d,l*f,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}var Da=Object.freeze({__proto__:null,DEG2RAD:Ti,RAD2DEG:Ii,generateUUID:Et,clamp:ht,euclideanModulo:Hs,mapLinear:Lu,inverseLerp:Cu,lerp:Ei,damp:Ru,pingpong:Pu,smoothstep:Iu,smootherstep:Du,randInt:Fu,randFloat:Nu,randFloatSpread:Bu,seededRandom:zu,degToRad:Ou,radToDeg:Uu,isPowerOfTwo:Rs,ceilPowerOfTwo:ku,floorPowerOfTwo:jo,setQuaternionFromProperEuler:Hu});class Z{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}Z.prototype.isVector2=!0;class tt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,l,u,h){const f=this.elements;return f[0]=e,f[1]=i,f[2]=l,f[3]=t,f[4]=r,f[5]=u,f[6]=n,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],l=n[3],u=n[6],h=n[1],f=n[4],o=n[7],c=n[2],d=n[5],p=n[8],_=i[0],v=i[3],m=i[6],g=i[1],x=i[4],w=i[7],E=i[2],A=i[5],b=i[8];return r[0]=a*_+l*g+u*E,r[3]=a*v+l*x+u*A,r[6]=a*m+l*w+u*b,r[1]=h*_+f*g+o*E,r[4]=h*v+f*x+o*A,r[7]=h*m+f*w+o*b,r[2]=c*_+d*g+p*E,r[5]=c*v+d*x+p*A,r[8]=c*m+d*w+p*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],l=e[5],u=e[6],h=e[7],f=e[8];return t*a*f-t*l*h-n*r*f+n*l*u+i*r*h-i*a*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],l=e[5],u=e[6],h=e[7],f=e[8],o=f*a-l*h,c=l*u-f*r,d=h*r-a*u,p=t*o+n*c+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=o*_,e[1]=(i*h-f*n)*_,e[2]=(l*n-i*a)*_,e[3]=c*_,e[4]=(f*t-i*u)*_,e[5]=(i*r-l*t)*_,e[6]=d*_,e[7]=(n*u-h*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,l){const u=Math.cos(r),h=Math.sin(r);return this.set(n*u,n*h,-n*(u*a+h*l)+a+e,-i*h,i*u,-i*(-h*a+u*l)+l+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],l=i[6],u=i[1],h=i[4],f=i[7];return i[0]=t*r+n*u,i[3]=t*a+n*h,i[6]=t*l+n*f,i[1]=-n*r+t*u,i[4]=-n*a+t*h,i[7]=-n*l+t*f,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}tt.prototype.isMatrix3=!0;let Sn;class Mn{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Sn===void 0&&(Sn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Sn.width=e.width,Sn.height=e.height;const n=Sn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Sn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let Gu=0;class it extends yn{constructor(e=it.DEFAULT_IMAGE,t=it.DEFAULT_MAPPING,n=gt,i=gt,r=vt,a=Ir,l=Tt,u=Kn,h=1,f=ft){super(),Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Et(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Et()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let a=0,l=i.length;a<l;a++)i[a].isDataTexture?r.push(Xr(i[a].image)):r.push(Xr(i[a]))}else r=Xr(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ls:e.x=e.x-Math.floor(e.x);break;case gt:e.x=e.x<0?0:1;break;case Cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ls:e.y=e.y-Math.floor(e.y);break;case gt:e.y=e.y<0?0:1;break;case Cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}it.DEFAULT_IMAGE=void 0;it.DEFAULT_MAPPING=Wo;it.prototype.isTexture=!0;function Xr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Mn.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Be{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const u=e.elements,h=u[0],f=u[4],o=u[8],c=u[1],d=u[5],p=u[9],_=u[2],v=u[6],m=u[10];if(Math.abs(f-c)<.01&&Math.abs(o-_)<.01&&Math.abs(p-v)<.01){if(Math.abs(f+c)<.1&&Math.abs(o+_)<.1&&Math.abs(p+v)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(h+1)/2,w=(d+1)/2,E=(m+1)/2,A=(f+c)/4,b=(o+_)/4,O=(p+v)/4;return x>w&&x>E?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=b/n):w>E?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=A/i,r=O/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=b/r,i=O/r),this.set(n,i,r,t),this}let g=Math.sqrt((v-p)*(v-p)+(o-_)*(o-_)+(c-f)*(c-f));return Math.abs(g)<.001&&(g=1),this.x=(v-p)/g,this.y=(o-_)/g,this.z=(c-f)/g,this.w=Math.acos((h+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}Be.prototype.isVector4=!0;class It extends yn{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Be(0,0,e,t),this.scissorTest=!1,this.viewport=new Be(0,0,e,t),this.texture=new it(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}It.prototype.isWebGLRenderTarget=!0;class Vu extends It{constructor(e,t,n){super(e,t);const i=this.texture;this.texture=[];for(let r=0;r<n;r++)this.texture[r]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}Vu.prototype.isWebGLMultipleRenderTargets=!0;class Jo extends It{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}Jo.prototype.isWebGLMultisampleRenderTarget=!0;class dt{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,a,l){let u=n[i+0],h=n[i+1],f=n[i+2],o=n[i+3];const c=r[a+0],d=r[a+1],p=r[a+2],_=r[a+3];if(l===0){e[t+0]=u,e[t+1]=h,e[t+2]=f,e[t+3]=o;return}if(l===1){e[t+0]=c,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(o!==_||u!==c||h!==d||f!==p){let v=1-l;const m=u*c+h*d+f*p+o*_,g=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const E=Math.sqrt(x),A=Math.atan2(E,m*g);v=Math.sin(v*A)/E,l=Math.sin(l*A)/E}const w=l*g;if(u=u*v+c*w,h=h*v+d*w,f=f*v+p*w,o=o*v+_*w,v===1-l){const E=1/Math.sqrt(u*u+h*h+f*f+o*o);u*=E,h*=E,f*=E,o*=E}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=o}static multiplyQuaternionsFlat(e,t,n,i,r,a){const l=n[i],u=n[i+1],h=n[i+2],f=n[i+3],o=r[a],c=r[a+1],d=r[a+2],p=r[a+3];return e[t]=l*p+f*o+u*d-h*c,e[t+1]=u*p+f*c+h*o-l*d,e[t+2]=h*p+f*d+l*c-u*o,e[t+3]=f*p-l*o-u*c-h*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,a=e._order,l=Math.cos,u=Math.sin,h=l(n/2),f=l(i/2),o=l(r/2),c=u(n/2),d=u(i/2),p=u(r/2);switch(a){case"XYZ":this._x=c*f*o+h*d*p,this._y=h*d*o-c*f*p,this._z=h*f*p+c*d*o,this._w=h*f*o-c*d*p;break;case"YXZ":this._x=c*f*o+h*d*p,this._y=h*d*o-c*f*p,this._z=h*f*p-c*d*o,this._w=h*f*o+c*d*p;break;case"ZXY":this._x=c*f*o-h*d*p,this._y=h*d*o+c*f*p,this._z=h*f*p+c*d*o,this._w=h*f*o-c*d*p;break;case"ZYX":this._x=c*f*o-h*d*p,this._y=h*d*o+c*f*p,this._z=h*f*p-c*d*o,this._w=h*f*o+c*d*p;break;case"YZX":this._x=c*f*o+h*d*p,this._y=h*d*o+c*f*p,this._z=h*f*p-c*d*o,this._w=h*f*o-c*d*p;break;case"XZY":this._x=c*f*o-h*d*p,this._y=h*d*o-c*f*p,this._z=h*f*p+c*d*o,this._w=h*f*o+c*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],l=t[5],u=t[9],h=t[2],f=t[6],o=t[10],c=n+l+o;if(c>0){const d=.5/Math.sqrt(c+1);this._w=.25/d,this._x=(f-u)*d,this._y=(r-h)*d,this._z=(a-i)*d}else if(n>l&&n>o){const d=2*Math.sqrt(1+n-l-o);this._w=(f-u)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+h)/d}else if(l>o){const d=2*Math.sqrt(1+l-n-o);this._w=(r-h)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(u+f)/d}else{const d=2*Math.sqrt(1+o-n-l);this._w=(a-i)/d,this._x=(r+h)/d,this._y=(u+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,l=t._x,u=t._y,h=t._z,f=t._w;return this._x=n*f+a*l+i*h-r*u,this._y=i*f+a*u+r*l-n*h,this._z=r*f+a*h+n*u-i*l,this._w=a*f-n*l-i*u-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let l=a*e._w+n*e._x+i*e._y+r*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const u=1-l*l;if(u<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(u),f=Math.atan2(h,l),o=Math.sin((1-t)*f)/h,c=Math.sin(t*f)/h;return this._w=a*o+this._w*c,this._x=n*o+this._x*c,this._y=i*o+this._y*c,this._z=r*o+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}dt.prototype.isQuaternion=!0;class T{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Fa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,l=e.z,u=e.w,h=u*t+a*i-l*n,f=u*n+l*t-r*i,o=u*i+r*n-a*t,c=-r*t-a*n-l*i;return this.x=h*u+c*-r+f*-l-o*-a,this.y=f*u+c*-a+o*-r-h*-l,this.z=o*u+c*-l+h*-a-f*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,l=t.y,u=t.z;return this.x=i*u-r*l,this.y=r*a-n*u,this.z=n*l-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qr.copy(this).projectOnVector(e),this.sub(qr)}reflect(e){return this.sub(qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}T.prototype.isVector3=!0;const qr=new T,Fa=new dt;class At{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,l=-1/0;for(let u=0,h=e.length;u<h;u+=3){const f=e[u],o=e[u+1],c=e[u+2];f<t&&(t=f),o<n&&(n=o),c<i&&(i=c),f>r&&(r=f),o>a&&(a=o),c>l&&(l=c)}return this.min.set(t,n,i),this.max.set(r,a,l),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,l=-1/0;for(let u=0,h=e.count;u<h;u++){const f=e.getX(u),o=e.getY(u),c=e.getZ(u);f<t&&(t=f),o<n&&(n=o),c<i&&(i=c),f>r&&(r=f),o>a&&(a=o),c>l&&(l=c)}return this.min.set(t,n,i),this.max.set(r,a,l),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox),Yr.applyMatrix4(e.matrixWorld),this.union(Yr));const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ui),Gi.subVectors(this.max,ui),Tn.subVectors(e.a,ui),En.subVectors(e.b,ui),An.subVectors(e.c,ui),jt.subVectors(En,Tn),Jt.subVectors(An,En),dn.subVectors(Tn,An);let t=[0,-jt.z,jt.y,0,-Jt.z,Jt.y,0,-dn.z,dn.y,jt.z,0,-jt.x,Jt.z,0,-Jt.x,dn.z,0,-dn.x,-jt.y,jt.x,0,-Jt.y,Jt.x,0,-dn.y,dn.x,0];return!Zr(t,Tn,En,An,Gi)||(t=[1,0,0,0,1,0,0,0,1],!Zr(t,Tn,En,An,Gi))?!1:(Vi.crossVectors(jt,Jt),t=[Vi.x,Vi.y,Vi.z],Zr(t,Tn,En,An,Gi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ci.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ot[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ot[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ot[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ot[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ot[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ot[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ot[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ot[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ot),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}At.prototype.isBox3=!0;const Ot=[new T,new T,new T,new T,new T,new T,new T,new T],ci=new T,Yr=new At,Tn=new T,En=new T,An=new T,jt=new T,Jt=new T,dn=new T,ui=new T,Gi=new T,Vi=new T,fn=new T;function Zr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){fn.fromArray(s,r);const l=i.x*Math.abs(fn.x)+i.y*Math.abs(fn.y)+i.z*Math.abs(fn.z),u=e.dot(fn),h=t.dot(fn),f=n.dot(fn);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>l)return!1}return!0}const Wu=new At,Na=new T,jr=new T,Jr=new T;class ii{constructor(e=new T,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Jr.subVectors(e,this.center);const t=Jr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Jr.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return jr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Na.copy(e.center).add(jr)),this.expandByPoint(Na.copy(e.center).sub(jr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ut=new T,Qr=new T,Wi=new T,Qt=new T,$r=new T,Xi=new T,Kr=new T;class wn{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ut)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ut.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ut.copy(this.direction).multiplyScalar(t).add(this.origin),Ut.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qr.copy(e).add(t).multiplyScalar(.5),Wi.copy(t).sub(e).normalize(),Qt.copy(this.origin).sub(Qr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Wi),l=Qt.dot(this.direction),u=-Qt.dot(Wi),h=Qt.lengthSq(),f=Math.abs(1-a*a);let o,c,d,p;if(f>0)if(o=a*u-l,c=a*l-u,p=r*f,o>=0)if(c>=-p)if(c<=p){const _=1/f;o*=_,c*=_,d=o*(o+a*c+2*l)+c*(a*o+c+2*u)+h}else c=r,o=Math.max(0,-(a*c+l)),d=-o*o+c*(c+2*u)+h;else c=-r,o=Math.max(0,-(a*c+l)),d=-o*o+c*(c+2*u)+h;else c<=-p?(o=Math.max(0,-(-a*r+l)),c=o>0?-r:Math.min(Math.max(-r,-u),r),d=-o*o+c*(c+2*u)+h):c<=p?(o=0,c=Math.min(Math.max(-r,-u),r),d=c*(c+2*u)+h):(o=Math.max(0,-(a*r+l)),c=o>0?r:Math.min(Math.max(-r,-u),r),d=-o*o+c*(c+2*u)+h);else c=a>0?-r:r,o=Math.max(0,-(a*c+l)),d=-o*o+c*(c+2*u)+h;return n&&n.copy(this.direction).multiplyScalar(o).add(this.origin),i&&i.copy(Wi).multiplyScalar(c).add(Qr),d}intersectSphere(e,t){Ut.subVectors(e.center,this.origin);const n=Ut.dot(this.direction),i=Ut.dot(Ut)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),l=n-a,u=n+a;return l<0&&u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,l,u;const h=1/this.direction.x,f=1/this.direction.y,o=1/this.direction.z,c=this.origin;return h>=0?(n=(e.min.x-c.x)*h,i=(e.max.x-c.x)*h):(n=(e.max.x-c.x)*h,i=(e.min.x-c.x)*h),f>=0?(r=(e.min.y-c.y)*f,a=(e.max.y-c.y)*f):(r=(e.max.y-c.y)*f,a=(e.min.y-c.y)*f),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),o>=0?(l=(e.min.z-c.z)*o,u=(e.max.z-c.z)*o):(l=(e.max.z-c.z)*o,u=(e.min.z-c.z)*o),n>u||l>i)||((l>n||n!==n)&&(n=l),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ut)!==null}intersectTriangle(e,t,n,i,r){$r.subVectors(t,e),Xi.subVectors(n,e),Kr.crossVectors($r,Xi);let a=this.direction.dot(Kr),l;if(a>0){if(i)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Qt.subVectors(this.origin,e);const u=l*this.direction.dot(Xi.crossVectors(Qt,Xi));if(u<0)return null;const h=l*this.direction.dot($r.cross(Qt));if(h<0||u+h>a)return null;const f=-l*Qt.dot(Kr);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,l,u,h,f,o,c,d,p,_,v){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=l,m[13]=u,m[2]=h,m[6]=f,m[10]=o,m[14]=c,m[3]=d,m[7]=p,m[11]=_,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ln.setFromMatrixColumn(e,0).length(),r=1/Ln.setFromMatrixColumn(e,1).length(),a=1/Ln.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),l=Math.sin(n),u=Math.cos(i),h=Math.sin(i),f=Math.cos(r),o=Math.sin(r);if(e.order==="XYZ"){const c=a*f,d=a*o,p=l*f,_=l*o;t[0]=u*f,t[4]=-u*o,t[8]=h,t[1]=d+p*h,t[5]=c-_*h,t[9]=-l*u,t[2]=_-c*h,t[6]=p+d*h,t[10]=a*u}else if(e.order==="YXZ"){const c=u*f,d=u*o,p=h*f,_=h*o;t[0]=c+_*l,t[4]=p*l-d,t[8]=a*h,t[1]=a*o,t[5]=a*f,t[9]=-l,t[2]=d*l-p,t[6]=_+c*l,t[10]=a*u}else if(e.order==="ZXY"){const c=u*f,d=u*o,p=h*f,_=h*o;t[0]=c-_*l,t[4]=-a*o,t[8]=p+d*l,t[1]=d+p*l,t[5]=a*f,t[9]=_-c*l,t[2]=-a*h,t[6]=l,t[10]=a*u}else if(e.order==="ZYX"){const c=a*f,d=a*o,p=l*f,_=l*o;t[0]=u*f,t[4]=p*h-d,t[8]=c*h+_,t[1]=u*o,t[5]=_*h+c,t[9]=d*h-p,t[2]=-h,t[6]=l*u,t[10]=a*u}else if(e.order==="YZX"){const c=a*u,d=a*h,p=l*u,_=l*h;t[0]=u*f,t[4]=_-c*o,t[8]=p*o+d,t[1]=o,t[5]=a*f,t[9]=-l*f,t[2]=-h*f,t[6]=d*o+p,t[10]=c-_*o}else if(e.order==="XZY"){const c=a*u,d=a*h,p=l*u,_=l*h;t[0]=u*f,t[4]=-o,t[8]=h*f,t[1]=c*o+_,t[5]=a*f,t[9]=d*o-p,t[2]=p*o-d,t[6]=l*f,t[10]=_*o+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xu,e,qu)}lookAt(e,t,n){const i=this.elements;return pt.subVectors(e,t),pt.lengthSq()===0&&(pt.z=1),pt.normalize(),$t.crossVectors(n,pt),$t.lengthSq()===0&&(Math.abs(n.z)===1?pt.x+=1e-4:pt.z+=1e-4,pt.normalize(),$t.crossVectors(n,pt)),$t.normalize(),qi.crossVectors(pt,$t),i[0]=$t.x,i[4]=qi.x,i[8]=pt.x,i[1]=$t.y,i[5]=qi.y,i[9]=pt.y,i[2]=$t.z,i[6]=qi.z,i[10]=pt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],l=n[4],u=n[8],h=n[12],f=n[1],o=n[5],c=n[9],d=n[13],p=n[2],_=n[6],v=n[10],m=n[14],g=n[3],x=n[7],w=n[11],E=n[15],A=i[0],b=i[4],O=i[8],I=i[12],H=i[1],N=i[5],re=i[9],U=i[13],R=i[2],B=i[6],L=i[10],D=i[14],j=i[3],J=i[7],Q=i[11],K=i[15];return r[0]=a*A+l*H+u*R+h*j,r[4]=a*b+l*N+u*B+h*J,r[8]=a*O+l*re+u*L+h*Q,r[12]=a*I+l*U+u*D+h*K,r[1]=f*A+o*H+c*R+d*j,r[5]=f*b+o*N+c*B+d*J,r[9]=f*O+o*re+c*L+d*Q,r[13]=f*I+o*U+c*D+d*K,r[2]=p*A+_*H+v*R+m*j,r[6]=p*b+_*N+v*B+m*J,r[10]=p*O+_*re+v*L+m*Q,r[14]=p*I+_*U+v*D+m*K,r[3]=g*A+x*H+w*R+E*j,r[7]=g*b+x*N+w*B+E*J,r[11]=g*O+x*re+w*L+E*Q,r[15]=g*I+x*U+w*D+E*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],l=e[5],u=e[9],h=e[13],f=e[2],o=e[6],c=e[10],d=e[14],p=e[3],_=e[7],v=e[11],m=e[15];return p*(+r*u*o-i*h*o-r*l*c+n*h*c+i*l*d-n*u*d)+_*(+t*u*d-t*h*c+r*a*c-i*a*d+i*h*f-r*u*f)+v*(+t*h*o-t*l*d-r*a*o+n*a*d+r*l*f-n*h*f)+m*(-i*l*f-t*u*o+t*l*c+i*a*o-n*a*c+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],l=e[5],u=e[6],h=e[7],f=e[8],o=e[9],c=e[10],d=e[11],p=e[12],_=e[13],v=e[14],m=e[15],g=o*v*h-_*c*h+_*u*d-l*v*d-o*u*m+l*c*m,x=p*c*h-f*v*h-p*u*d+a*v*d+f*u*m-a*c*m,w=f*_*h-p*o*h+p*l*d-a*_*d-f*l*m+a*o*m,E=p*o*u-f*_*u-p*l*c+a*_*c+f*l*v-a*o*v,A=t*g+n*x+i*w+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=g*b,e[1]=(_*c*r-o*v*r-_*i*d+n*v*d+o*i*m-n*c*m)*b,e[2]=(l*v*r-_*u*r+_*i*h-n*v*h-l*i*m+n*u*m)*b,e[3]=(o*u*r-l*c*r-o*i*h+n*c*h+l*i*d-n*u*d)*b,e[4]=x*b,e[5]=(f*v*r-p*c*r+p*i*d-t*v*d-f*i*m+t*c*m)*b,e[6]=(p*u*r-a*v*r-p*i*h+t*v*h+a*i*m-t*u*m)*b,e[7]=(a*c*r-f*u*r+f*i*h-t*c*h-a*i*d+t*u*d)*b,e[8]=w*b,e[9]=(p*o*r-f*_*r-p*n*d+t*_*d+f*n*m-t*o*m)*b,e[10]=(a*_*r-p*l*r+p*n*h-t*_*h-a*n*m+t*l*m)*b,e[11]=(f*l*r-a*o*r-f*n*h+t*o*h+a*n*d-t*l*d)*b,e[12]=E*b,e[13]=(f*_*i-p*o*i+p*n*c-t*_*c-f*n*v+t*o*v)*b,e[14]=(p*l*i-a*_*i-p*n*u+t*_*u+a*n*v-t*l*v)*b,e[15]=(a*o*i-f*l*i+f*n*u-t*o*u-a*n*c+t*l*c)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,l=e.y,u=e.z,h=r*a,f=r*l;return this.set(h*a+n,h*l-i*u,h*u+i*l,0,h*l+i*u,f*l+n,f*u-i*a,0,h*u-i*l,f*u+i*a,r*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,l=t._z,u=t._w,h=r+r,f=a+a,o=l+l,c=r*h,d=r*f,p=r*o,_=a*f,v=a*o,m=l*o,g=u*h,x=u*f,w=u*o,E=n.x,A=n.y,b=n.z;return i[0]=(1-(_+m))*E,i[1]=(d+w)*E,i[2]=(p-x)*E,i[3]=0,i[4]=(d-w)*A,i[5]=(1-(c+m))*A,i[6]=(v+g)*A,i[7]=0,i[8]=(p+x)*b,i[9]=(v-g)*b,i[10]=(1-(c+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ln.set(i[0],i[1],i[2]).length();const a=Ln.set(i[4],i[5],i[6]).length(),l=Ln.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Mt.copy(this);const h=1/r,f=1/a,o=1/l;return Mt.elements[0]*=h,Mt.elements[1]*=h,Mt.elements[2]*=h,Mt.elements[4]*=f,Mt.elements[5]*=f,Mt.elements[6]*=f,Mt.elements[8]*=o,Mt.elements[9]*=o,Mt.elements[10]*=o,t.setFromRotationMatrix(Mt),n.x=r,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const l=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),o=(n+i)/(n-i),c=-(a+r)/(a-r),d=-2*a*r/(a-r);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=o,l[13]=0,l[2]=0,l[6]=0,l[10]=c,l[14]=d,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a){const l=this.elements,u=1/(t-e),h=1/(n-i),f=1/(a-r),o=(t+e)*u,c=(n+i)*h,d=(a+r)*f;return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-o,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-c,l[2]=0,l[6]=0,l[10]=-2*f,l[14]=-d,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}me.prototype.isMatrix4=!0;const Ln=new T,Mt=new me,Xu=new T(0,0,0),qu=new T(1,1,1),$t=new T,qi=new T,pt=new T,Ba=new me,za=new dt;class ri{constructor(e=0,t=0,n=0,i=ri.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],l=i[8],u=i[1],h=i[5],f=i[9],o=i[2],c=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-o,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-o,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,d),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-o,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ba.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ba,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return za.setFromEuler(this),this.setFromQuaternion(za,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new T(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}ri.prototype.isEuler=!0;ri.DefaultOrder="XYZ";ri.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Qo{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let Yu=0;const Oa=new T,Cn=new dt,kt=new me,Yi=new T,hi=new T,Zu=new T,ju=new dt,Ua=new T(1,0,0),ka=new T(0,1,0),Ha=new T(0,0,1),Ju={type:"added"},Ga={type:"removed"};class De extends yn{constructor(){super(),Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Et(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DefaultUp.clone();const e=new T,t=new ri,n=new dt,i=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new tt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=De.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cn.setFromAxisAngle(e,t),this.quaternion.multiply(Cn),this}rotateOnWorldAxis(e,t){return Cn.setFromAxisAngle(e,t),this.quaternion.premultiply(Cn),this}rotateX(e){return this.rotateOnAxis(Ua,e)}rotateY(e){return this.rotateOnAxis(ka,e)}rotateZ(e){return this.rotateOnAxis(Ha,e)}translateOnAxis(e,t){return Oa.copy(e).applyQuaternion(this.quaternion),this.position.add(Oa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ua,e)}translateY(e){return this.translateOnAxis(ka,e)}translateZ(e){return this.translateOnAxis(Ha,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yi.copy(e):Yi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kt.lookAt(hi,Yi,this.up):kt.lookAt(Yi,hi,this.up),this.quaternion.setFromRotationMatrix(kt),i&&(kt.extractRotation(i.matrixWorld),Cn.setFromRotationMatrix(kt),this.quaternion.premultiply(Cn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ju)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ga)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ga)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,e,Zu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,ju,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const o=u[h];r(e.shapes,o)}else r(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,h=this.material.length;u<h;u++)l.push(r(e.materials,this.material[u]));i.material=l}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];i.animations.push(r(e.animations,u))}}if(t){const l=a(e.geometries),u=a(e.materials),h=a(e.textures),f=a(e.images),o=a(e.shapes),c=a(e.skeletons),d=a(e.animations);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),o.length>0&&(n.shapes=o),c.length>0&&(n.skeletons=c),d.length>0&&(n.animations=d)}return n.object=i,n;function a(l){const u=[];for(const h in l){const f=l[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}De.DefaultUp=new T(0,1,0);De.DefaultMatrixAutoUpdate=!0;De.prototype.isObject3D=!0;const wt=new T,Ht=new T,es=new T,Gt=new T,Rn=new T,Pn=new T,Va=new T,ts=new T,ns=new T,is=new T;class je{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wt.subVectors(e,t),i.cross(wt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){wt.subVectors(i,t),Ht.subVectors(n,t),es.subVectors(e,t);const a=wt.dot(wt),l=wt.dot(Ht),u=wt.dot(es),h=Ht.dot(Ht),f=Ht.dot(es),o=a*h-l*l;if(o===0)return r.set(-2,-1,-1);const c=1/o,d=(h*u-l*f)*c,p=(a*f-l*u)*c;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gt),Gt.x>=0&&Gt.y>=0&&Gt.x+Gt.y<=1}static getUV(e,t,n,i,r,a,l,u){return this.getBarycoord(e,t,n,i,Gt),u.set(0,0),u.addScaledVector(r,Gt.x),u.addScaledVector(a,Gt.y),u.addScaledVector(l,Gt.z),u}static isFrontFacing(e,t,n,i){return wt.subVectors(n,t),Ht.subVectors(e,t),wt.cross(Ht).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wt.subVectors(this.c,this.b),Ht.subVectors(this.a,this.b),wt.cross(Ht).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return je.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return je.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return je.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return je.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return je.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,l;Rn.subVectors(i,n),Pn.subVectors(r,n),ts.subVectors(e,n);const u=Rn.dot(ts),h=Pn.dot(ts);if(u<=0&&h<=0)return t.copy(n);ns.subVectors(e,i);const f=Rn.dot(ns),o=Pn.dot(ns);if(f>=0&&o<=f)return t.copy(i);const c=u*o-f*h;if(c<=0&&u>=0&&f<=0)return a=u/(u-f),t.copy(n).addScaledVector(Rn,a);is.subVectors(e,r);const d=Rn.dot(is),p=Pn.dot(is);if(p>=0&&d<=p)return t.copy(r);const _=d*h-u*p;if(_<=0&&h>=0&&p<=0)return l=h/(h-p),t.copy(n).addScaledVector(Pn,l);const v=f*p-d*o;if(v<=0&&o-f>=0&&d-p>=0)return Va.subVectors(r,i),l=(o-f)/(o-f+(d-p)),t.copy(i).addScaledVector(Va,l);const m=1/(v+_+c);return a=_*m,l=c*m,t.copy(n).addScaledVector(Rn,a).addScaledVector(Pn,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Qu=0;class lt extends yn{constructor(){super(),Object.defineProperty(this,"id",{value:Qu++}),this.uuid=Et(),this.name="",this.type="Material",this.fog=!0,this.blending=bi,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Go,this.blendDst=Vo,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}onBuild(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Ho;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularTint&&this.specularTint.isColor&&(n.specularTint=this.specularTint.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularTintMap&&this.specularTintMap.isTexture&&(n.specularTintMap=this.specularTintMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationTint!==void 0&&(n.attenuationTint=this.attenuationTint.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const l in r){const u=r[l];delete u.metadata,a.push(u)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}lt.prototype.isMaterial=!0;const $o={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bt={h:0,s:0,l:0},Zi={h:0,s:0,l:0};function rs(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function ss(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function as(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}class ce{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Hs(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=rs(r,i,e+1/3),this.g=rs(r,i,e),this.b=rs(r,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(i[1])/360,u=parseInt(i[2],10)/100,h=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(l,u,h)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=$o[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),a=Math.min(t,n,i);let l,u;const h=(a+r)/2;if(a===r)l=0,u=0;else{const f=r-a;switch(u=h<=.5?f/(r+a):f/(2-r-a),r){case t:l=(n-i)/f+(n<i?6:0);break;case n:l=(i-t)/f+2;break;case i:l=(t-n)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(bt),bt.h+=e,bt.s+=t,bt.l+=n,this.setHSL(bt.h,bt.s,bt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bt),e.getHSL(Zi);const n=Ei(bt.h,Zi.h,t),i=Ei(bt.s,Zi.s,t),r=Ei(bt.l,Zi.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ce.NAMES=$o;ce.prototype.isColor=!0;ce.prototype.r=1;ce.prototype.g=1;ce.prototype.b=1;class Fr extends lt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Fr.prototype.isMeshBasicMaterial=!0;const Oe=new T,ji=new Z;class qe{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Pi,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new ce),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new Z),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new T),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Be),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ji.fromBufferAttribute(this,t),ji.applyMatrix3(e),this.setXY(t,ji.x,ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Oe.fromBufferAttribute(this,t),Oe.applyMatrix3(e),this.setXYZ(t,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Oe.x=this.getX(t),Oe.y=this.getY(t),Oe.z=this.getZ(t),Oe.applyMatrix4(e),this.setXYZ(t,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Oe.x=this.getX(t),Oe.y=this.getY(t),Oe.z=this.getZ(t),Oe.applyNormalMatrix(e),this.setXYZ(t,Oe.x,Oe.y,Oe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Oe.x=this.getX(t),Oe.y=this.getY(t),Oe.z=this.getZ(t),Oe.transformDirection(e),this.setXYZ(t,Oe.x,Oe.y,Oe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pi&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}qe.prototype.isBufferAttribute=!0;class Ko extends qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class el extends qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $u extends qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}}$u.prototype.isFloat16BufferAttribute=!0;class Ye extends qe{constructor(e,t,n){super(new Float32Array(e),t,n)}}function tl(s){if(s.length===0)return-1/0;let e=s[0];for(let t=1,n=s.length;t<n;++t)s[t]>e&&(e=s[t]);return e}let Ku=0;const _t=new me,os=new De,In=new T,mt=new At,di=new At,Qe=new T;class ze extends yn{constructor(){super(),Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Et(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tl(e)>65535?el:Ko)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _t.makeRotationFromQuaternion(e),this.applyMatrix4(_t),this}rotateX(e){return _t.makeRotationX(e),this.applyMatrix4(_t),this}rotateY(e){return _t.makeRotationY(e),this.applyMatrix4(_t),this}rotateZ(e){return _t.makeRotationZ(e),this.applyMatrix4(_t),this}translate(e,t,n){return _t.makeTranslation(e,t,n),this.applyMatrix4(_t),this}scale(e,t,n){return _t.makeScale(e,t,n),this.applyMatrix4(_t),this}lookAt(e){return os.lookAt(e),os.updateMatrix(),this.applyMatrix4(os.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(In).negate(),this.translate(In.x,In.y,In.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ye(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new At);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];mt.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,mt.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,mt.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(mt.min),this.boundingBox.expandByPoint(mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(mt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];di.setFromBufferAttribute(l),this.morphTargetsRelative?(Qe.addVectors(mt.min,di.min),mt.expandByPoint(Qe),Qe.addVectors(mt.max,di.max),mt.expandByPoint(Qe)):(mt.expandByPoint(di.min),mt.expandByPoint(di.max))}mt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Qe.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Qe));if(t)for(let r=0,a=t.length;r<a;r++){const l=t[r],u=this.morphTargetsRelative;for(let h=0,f=l.count;h<f;h++)Qe.fromBufferAttribute(l,h),u&&(In.fromBufferAttribute(e,h),Qe.add(In)),i=Math.max(i,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,l=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new qe(new Float32Array(4*l),4));const u=t.tangent.array,h=[],f=[];for(let H=0;H<l;H++)h[H]=new T,f[H]=new T;const o=new T,c=new T,d=new T,p=new Z,_=new Z,v=new Z,m=new T,g=new T;function x(H,N,re){o.fromArray(i,H*3),c.fromArray(i,N*3),d.fromArray(i,re*3),p.fromArray(a,H*2),_.fromArray(a,N*2),v.fromArray(a,re*2),c.sub(o),d.sub(o),_.sub(p),v.sub(p);const U=1/(_.x*v.y-v.x*_.y);isFinite(U)&&(m.copy(c).multiplyScalar(v.y).addScaledVector(d,-_.y).multiplyScalar(U),g.copy(d).multiplyScalar(_.x).addScaledVector(c,-v.x).multiplyScalar(U),h[H].add(m),h[N].add(m),h[re].add(m),f[H].add(g),f[N].add(g),f[re].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let H=0,N=w.length;H<N;++H){const re=w[H],U=re.start,R=re.count;for(let B=U,L=U+R;B<L;B+=3)x(n[B+0],n[B+1],n[B+2])}const E=new T,A=new T,b=new T,O=new T;function I(H){b.fromArray(r,H*3),O.copy(b);const N=h[H];E.copy(N),E.sub(b.multiplyScalar(b.dot(N))).normalize(),A.crossVectors(O,N);const U=A.dot(f[H])<0?-1:1;u[H*4]=E.x,u[H*4+1]=E.y,u[H*4+2]=E.z,u[H*4+3]=U}for(let H=0,N=w.length;H<N;++H){const re=w[H],U=re.start,R=re.count;for(let B=U,L=U+R;B<L;B+=3)I(n[B+0]),I(n[B+1]),I(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let c=0,d=n.count;c<d;c++)n.setXYZ(c,0,0,0);const i=new T,r=new T,a=new T,l=new T,u=new T,h=new T,f=new T,o=new T;if(e)for(let c=0,d=e.count;c<d;c+=3){const p=e.getX(c+0),_=e.getX(c+1),v=e.getX(c+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,v),f.subVectors(a,r),o.subVectors(i,r),f.cross(o),l.fromBufferAttribute(n,p),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,v),l.add(f),u.add(f),h.add(f),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(_,u.x,u.y,u.z),n.setXYZ(v,h.x,h.y,h.z)}else for(let c=0,d=t.count;c<d;c+=3)i.fromBufferAttribute(t,c+0),r.fromBufferAttribute(t,c+1),a.fromBufferAttribute(t,c+2),f.subVectors(a,r),o.subVectors(i,r),f.cross(o),n.setXYZ(c+0,f.x,f.y,f.z),n.setXYZ(c+1,f.x,f.y,f.z),n.setXYZ(c+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,l=e.attributes[i],u=l.array,h=l.itemSize*t,f=Math.min(u.length,a.length-h);for(let o=0,c=h;o<f;o++,c++)a[c]=u[o]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qe.fromBufferAttribute(e,t),Qe.normalize(),e.setXYZ(t,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function e(l,u){const h=l.array,f=l.itemSize,o=l.normalized,c=new h.constructor(u.length*f);let d=0,p=0;for(let _=0,v=u.length;_<v;_++){l.isInterleavedBufferAttribute?d=u[_]*l.data.stride+l.offset:d=u[_]*f;for(let m=0;m<f;m++)c[p++]=h[d++]}return new qe(c,f,o)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ze,n=this.index.array,i=this.attributes;for(const l in i){const u=i[l],h=e(u,n);t.setAttribute(l,h)}const r=this.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,o=h.length;f<o;f++){const c=h[f],d=e(c,n);u.push(d)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let r=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let o=0,c=h.length;o<c;o++){const d=h[o];f.push(d.toJSON(e.data))}f.length>0&&(i[u]=f,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new ze().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const f=i[h];this.setAttribute(h,f.clone(t))}const r=e.morphAttributes;for(const h in r){const f=[],o=r[h];for(let c=0,d=o.length;c<d;c++)f.push(o[c].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,f=a.length;h<f;h++){const o=a[h];this.addGroup(o.start,o.count,o.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}ze.prototype.isBufferGeometry=!0;const Wa=new me,Dn=new wn,ls=new ii,Kt=new T,en=new T,tn=new T,cs=new T,us=new T,hs=new T,Ji=new T,Qi=new T,$i=new T,Ki=new Z,er=new Z,tr=new Z,ds=new T,nr=new T;class nt extends De{constructor(e=new ze,t=new Fr){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(r),e.ray.intersectsSphere(ls)===!1)||(Wa.copy(r).invert(),Dn.copy(e.ray).applyMatrix4(Wa),n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const l=n.index,u=n.attributes.position,h=n.morphAttributes.position,f=n.morphTargetsRelative,o=n.attributes.uv,c=n.attributes.uv2,d=n.groups,p=n.drawRange;if(l!==null)if(Array.isArray(i))for(let _=0,v=d.length;_<v;_++){const m=d[_],g=i[m.materialIndex],x=Math.max(m.start,p.start),w=Math.min(m.start+m.count,p.start+p.count);for(let E=x,A=w;E<A;E+=3){const b=l.getX(E),O=l.getX(E+1),I=l.getX(E+2);a=ir(this,g,e,Dn,u,h,f,o,c,b,O,I),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,g=v;m<g;m+=3){const x=l.getX(m),w=l.getX(m+1),E=l.getX(m+2);a=ir(this,i,e,Dn,u,h,f,o,c,x,w,E),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(u!==void 0)if(Array.isArray(i))for(let _=0,v=d.length;_<v;_++){const m=d[_],g=i[m.materialIndex],x=Math.max(m.start,p.start),w=Math.min(m.start+m.count,p.start+p.count);for(let E=x,A=w;E<A;E+=3){const b=E,O=E+1,I=E+2;a=ir(this,g,e,Dn,u,h,f,o,c,b,O,I),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const _=Math.max(0,p.start),v=Math.min(u.count,p.start+p.count);for(let m=_,g=v;m<g;m+=3){const x=m,w=m+1,E=m+2;a=ir(this,i,e,Dn,u,h,f,o,c,x,w,E),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}nt.prototype.isMesh=!0;function eh(s,e,t,n,i,r,a,l){let u;if(e.side===Ze?u=n.intersectTriangle(a,r,i,!0,l):u=n.intersectTriangle(i,r,a,e.side!==$n,l),u===null)return null;nr.copy(l),nr.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(nr);return h<t.near||h>t.far?null:{distance:h,point:nr.clone(),object:s}}function ir(s,e,t,n,i,r,a,l,u,h,f,o){Kt.fromBufferAttribute(i,h),en.fromBufferAttribute(i,f),tn.fromBufferAttribute(i,o);const c=s.morphTargetInfluences;if(r&&c){Ji.set(0,0,0),Qi.set(0,0,0),$i.set(0,0,0);for(let p=0,_=r.length;p<_;p++){const v=c[p],m=r[p];v!==0&&(cs.fromBufferAttribute(m,h),us.fromBufferAttribute(m,f),hs.fromBufferAttribute(m,o),a?(Ji.addScaledVector(cs,v),Qi.addScaledVector(us,v),$i.addScaledVector(hs,v)):(Ji.addScaledVector(cs.sub(Kt),v),Qi.addScaledVector(us.sub(en),v),$i.addScaledVector(hs.sub(tn),v)))}Kt.add(Ji),en.add(Qi),tn.add($i)}s.isSkinnedMesh&&(s.boneTransform(h,Kt),s.boneTransform(f,en),s.boneTransform(o,tn));const d=eh(s,e,t,n,Kt,en,tn,ds);if(d){l&&(Ki.fromBufferAttribute(l,h),er.fromBufferAttribute(l,f),tr.fromBufferAttribute(l,o),d.uv=je.getUV(ds,Kt,en,tn,Ki,er,tr,new Z)),u&&(Ki.fromBufferAttribute(u,h),er.fromBufferAttribute(u,f),tr.fromBufferAttribute(u,o),d.uv2=je.getUV(ds,Kt,en,tn,Ki,er,tr,new Z));const p={a:h,b:f,c:o,normal:new T,materialIndex:0};je.getNormal(Kt,en,tn,p.normal),d.face=p}return d}class si extends ze{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const l=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const u=[],h=[],f=[],o=[];let c=0,d=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(u),this.setAttribute("position",new Ye(h,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(o,2));function p(_,v,m,g,x,w,E,A,b,O,I){const H=w/b,N=E/O,re=w/2,U=E/2,R=A/2,B=b+1,L=O+1;let D=0,j=0;const J=new T;for(let Q=0;Q<L;Q++){const K=Q*N-U;for(let ve=0;ve<B;ve++){const pe=ve*H-re;J[_]=pe*g,J[v]=K*x,J[m]=R,h.push(J.x,J.y,J.z),J[_]=0,J[v]=0,J[m]=A>0?1:-1,f.push(J.x,J.y,J.z),o.push(ve/b),o.push(1-Q/O),D+=1}}for(let Q=0;Q<O;Q++)for(let K=0;K<b;K++){const ve=c+K+B*Q,pe=c+K+B*(Q+1),Ee=c+(K+1)+B*(Q+1),Se=c+(K+1)+B*Q;u.push(ve,pe,Se),u.push(pe,Ee,Se),j+=6}l.addGroup(d,j,I),d+=j,c+=D}}static fromJSON(e){return new si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ei(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function at(s){const e={};for(let t=0;t<s.length;t++){const n=ei(s[t]);for(const i in n)e[i]=n[i]}return e}const th={clone:ei,merge:at};var nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends lt{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=nh,this.fragmentShader=ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ei(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}xn.prototype.isShaderMaterial=!0;class Gs extends De{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Gs.prototype.isCamera=!0;class ct extends Gs{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ii*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ti*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ii*2*Math.atan(Math.tan(Ti*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ti*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/u,t-=a.offsetY*n/h,i*=a.width/u,n*=a.height/h}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}ct.prototype.isPerspectiveCamera=!0;const Fn=90,Nn=1;class Vs extends De{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new ct(Fn,Nn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new T(1,0,0)),this.add(i);const r=new ct(Fn,Nn,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new T(-1,0,0)),this.add(r);const a=new ct(Fn,Nn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new T(0,1,0)),this.add(a);const l=new ct(Fn,Nn,e,t);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(new T(0,-1,0)),this.add(l);const u=new ct(Fn,Nn,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new T(0,0,1)),this.add(u);const h=new ct(Fn,Nn,e,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new T(0,0,-1)),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,l,u,h]=this.children,f=e.xr.enabled,o=e.getRenderTarget();e.xr.enabled=!1;const c=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,l),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=c,e.setRenderTarget(n,5),e.render(t,h),e.setRenderTarget(o),e.xr.enabled=f}}class Nr extends it{constructor(e,t,n,i,r,a,l,u,h,f){e=e!==void 0?e:[],t=t!==void 0?t:Cr,l=l!==void 0?l:vn,super(e,t,n,i,r,a,l,u,h,f),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Nr.prototype.isCubeTexture=!0;class nl extends It{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new Nr(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Tt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new si(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:sn});r.uniforms.tEquirect.value=t;const a=new nt(i,r),l=t.minFilter;return t.minFilter===Ir&&(t.minFilter=vt),new Vs(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}nl.prototype.isWebGLCubeRenderTarget=!0;const fs=new T,rh=new T,sh=new tt;class Vt{constructor(e=new T(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=fs.subVectors(n,t).cross(rh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(fs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sh.getNormalMatrix(e),i=this.coplanarPoint(fs).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Vt.prototype.isPlane=!0;const Bn=new ii,rr=new T;class Br{constructor(e=new Vt,t=new Vt,n=new Vt,i=new Vt,r=new Vt,a=new Vt){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(r),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],l=n[3],u=n[4],h=n[5],f=n[6],o=n[7],c=n[8],d=n[9],p=n[10],_=n[11],v=n[12],m=n[13],g=n[14],x=n[15];return t[0].setComponents(l-i,o-u,_-c,x-v).normalize(),t[1].setComponents(l+i,o+u,_+c,x+v).normalize(),t[2].setComponents(l+r,o+h,_+d,x+m).normalize(),t[3].setComponents(l-r,o-h,_-d,x-m).normalize(),t[4].setComponents(l-a,o-f,_-p,x-g).normalize(),t[5].setComponents(l+a,o+f,_+p,x+g).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSprite(e){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(rr.x=i.normal.x>0?e.max.x:e.min.x,rr.y=i.normal.y>0?e.max.y:e.min.y,rr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function il(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ah(s,e){const t=e.isWebGL2,n=new WeakMap;function i(h,f){const o=h.array,c=h.usage,d=s.createBuffer();s.bindBuffer(f,d),s.bufferData(f,o,c),h.onUploadCallback();let p=5126;return o instanceof Float32Array?p=5126:o instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):o instanceof Uint16Array?h.isFloat16BufferAttribute?t?p=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):p=5123:o instanceof Int16Array?p=5122:o instanceof Uint32Array?p=5125:o instanceof Int32Array?p=5124:o instanceof Int8Array?p=5120:(o instanceof Uint8Array||o instanceof Uint8ClampedArray)&&(p=5121),{buffer:d,type:p,bytesPerElement:o.BYTES_PER_ELEMENT,version:h.version}}function r(h,f,o){const c=f.array,d=f.updateRange;s.bindBuffer(o,h),d.count===-1?s.bufferSubData(o,0,c):(t?s.bufferSubData(o,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count):s.bufferSubData(o,d.offset*c.BYTES_PER_ELEMENT,c.subarray(d.offset,d.offset+d.count)),d.count=-1)}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=n.get(h);f&&(s.deleteBuffer(f.buffer),n.delete(h))}function u(h,f){if(h.isGLBufferAttribute){const c=n.get(h);(!c||c.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const o=n.get(h);o===void 0?n.set(h,i(h,f)):o.version<h.version&&(r(o.buffer,h,f),o.version=h.version)}return{get:a,remove:l,update:u}}class Ws extends ze{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,l=Math.floor(n),u=Math.floor(i),h=l+1,f=u+1,o=e/l,c=t/u,d=[],p=[],_=[],v=[];for(let m=0;m<f;m++){const g=m*c-a;for(let x=0;x<h;x++){const w=x*o-r;p.push(w,-g,0),_.push(0,0,1),v.push(x/l),v.push(1-m/u)}}for(let m=0;m<u;m++)for(let g=0;g<l;g++){const x=g+h*m,w=g+h*(m+1),E=g+1+h*(m+1),A=g+1+h*m;d.push(x,w,A),d.push(w,E,A)}this.setIndex(d),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(v,2))}static fromJSON(e){return new Ws(e.width,e.height,e.widthSegments,e.heightSegments)}}var oh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,lh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ch=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,uh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dh="vec3 transformed = vec3( position );",fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ph=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in vec3 f90, const in float dotVH ) {
	float fresnel = exp2( ( -5.55473 * dotVH - 6.98316 ) * dotVH );
	return ( f90 - f0 ) * fresnel + f0;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in vec3 f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, vec3( 1.0 ), dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,mh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Th=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,Eh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ch=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ih=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Dh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zh=`#ifdef USE_ENVMAP
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
#endif`,Oh=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Uh=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Vh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xh=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,qh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,Yh=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,Zh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jh=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qh=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,$h=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	#ifdef SPECULAR
		vec3 specularIntensityFactor = vec3( specularIntensity );
		vec3 specularTintFactor = specularTint;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARTINTMAP
			specularTintFactor *= specularTintMapTexelToLinear( texture2D( specularTintMap, vUv ) ).rgb;
		#endif
		material.specularColorF90 = mix( specularIntensityFactor, vec3( 1.0 ), metalnessFactor );
	#else
		vec3 specularIntensityFactor = vec3( 1.0 );
		vec3 specularTintFactor = vec3( 1.0 );
		material.specularColorF90 = vec3( 1.0 );
	#endif
	material.specularColor = mix( min( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ) * specularTintFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
	material.specularColorF90 = vec3( 1.0 );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,Kh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
	vec3 specularColorF90;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), vec3( 1.0 ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularColorF90, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ed=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,td=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,id=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ad=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,od=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,pd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,md=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,_d=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,xd=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,wd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ed=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Rd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Id=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Nd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bd=`#ifdef USE_SKINNING
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
#endif`,zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Od=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ud=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hd=`#ifdef USE_TRANSMISSION
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition.xyz / vWorldPosition.w;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	float ior = ( 1.0 + 0.4 * reflectivity ) / ( 1.0 - 0.4 * reflectivity );
	vec3 transmission = transmissionFactor * getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationTint, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission, transmissionFactor );
#endif`,Gd=`#ifdef USE_TRANSMISSION
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
	varying vec4 vWorldPosition;
	vec3 getVolumeTransmissionRay(vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix) {
		vec3 refractionVector = refract(-v, normalize(n), 1.0 / ior);
		vec3 modelScale;
		modelScale.x = length(vec3(modelMatrix[0].xyz));
		modelScale.y = length(vec3(modelMatrix[1].xyz));
		modelScale.z = length(vec3(modelMatrix[2].xyz));
		return normalize(refractionVector) * thickness * modelScale;
	}
	float applyIorToRoughness(float roughness, float ior) {
		return roughness * clamp(ior * 2.0 - 2.0, 0.0, 1.0);
	}
	vec3 getTransmissionSample(vec2 fragCoord, float roughness, float ior) {
		float framebufferLod = log2(transmissionSamplerSize.x) * applyIorToRoughness(roughness, ior);
		return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod).rgb;
	}
	vec3 applyVolumeAttenuation(vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance) {
		if (attenuationDistance == 0.0) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log(attenuationColor) / attenuationDistance;
			vec3 transmittance = exp(-attenuationCoefficient * transmissionDistance);			return transmittance * radiance;
		}
	}
	vec3 getIBLVolumeRefraction(vec3 n, vec3 v, float perceptualRoughness, vec3 baseColor, vec3 specularColor,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance) {
		vec3 transmissionRay = getVolumeTransmissionRay(n, v, thickness, ior, modelMatrix);
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4(refractedRayExit, 1.0);
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec3 transmittedLight = getTransmissionSample(refractionCoords, perceptualRoughness, ior);
		vec3 attenuatedColor = applyVolumeAttenuation(transmittedLight, length(transmissionRay), attenuationColor, attenuationDistance);
		return (1.0 - specularColor) * attenuatedColor * baseColor;
	}
#endif`,Vd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Wd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Xd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,qd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Yd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Zd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jd=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$d=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ef=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,nf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,sf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,of=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,hf=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ff=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
		#ifdef USE_TANGENT
			vTangent = normalize( transformedTangent );
			vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#endif
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,_f=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,xf=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationTint;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularTint;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARTINTMAP
		uniform sampler2D specularTintMap;
	#endif
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <transmission_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yf=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#ifdef USE_TRANSMISSION
	varying vec4 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
	vWorldPosition = worldPosition;
#endif
}`,Mf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,wf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Tf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ef=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Lf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`;const Le={alphamap_fragment:oh,alphamap_pars_fragment:lh,alphatest_fragment:ch,aomap_fragment:uh,aomap_pars_fragment:hh,begin_vertex:dh,beginnormal_vertex:fh,bsdfs:ph,bumpmap_pars_fragment:mh,clipping_planes_fragment:gh,clipping_planes_pars_fragment:_h,clipping_planes_pars_vertex:vh,clipping_planes_vertex:xh,color_fragment:yh,color_pars_fragment:Mh,color_pars_vertex:wh,color_vertex:bh,common:Sh,cube_uv_reflection_fragment:Th,defaultnormal_vertex:Eh,displacementmap_pars_vertex:Ah,displacementmap_vertex:Lh,emissivemap_fragment:Ch,emissivemap_pars_fragment:Rh,encodings_fragment:Ph,encodings_pars_fragment:Ih,envmap_fragment:Dh,envmap_common_pars_fragment:Fh,envmap_pars_fragment:Nh,envmap_pars_vertex:Bh,envmap_physical_pars_fragment:Yh,envmap_vertex:zh,fog_vertex:Oh,fog_pars_vertex:Uh,fog_fragment:kh,fog_pars_fragment:Hh,gradientmap_pars_fragment:Gh,lightmap_fragment:Vh,lightmap_pars_fragment:Wh,lights_lambert_vertex:Xh,lights_pars_begin:qh,lights_toon_fragment:Zh,lights_toon_pars_fragment:jh,lights_phong_fragment:Jh,lights_phong_pars_fragment:Qh,lights_physical_fragment:$h,lights_physical_pars_fragment:Kh,lights_fragment_begin:ed,lights_fragment_maps:td,lights_fragment_end:nd,logdepthbuf_fragment:id,logdepthbuf_pars_fragment:rd,logdepthbuf_pars_vertex:sd,logdepthbuf_vertex:ad,map_fragment:od,map_pars_fragment:ld,map_particle_fragment:cd,map_particle_pars_fragment:ud,metalnessmap_fragment:hd,metalnessmap_pars_fragment:dd,morphnormal_vertex:fd,morphtarget_pars_vertex:pd,morphtarget_vertex:md,normal_fragment_begin:gd,normal_fragment_maps:_d,normalmap_pars_fragment:vd,clearcoat_normal_fragment_begin:xd,clearcoat_normal_fragment_maps:yd,clearcoat_pars_fragment:Md,packing:wd,premultiplied_alpha_fragment:bd,project_vertex:Sd,dithering_fragment:Td,dithering_pars_fragment:Ed,roughnessmap_fragment:Ad,roughnessmap_pars_fragment:Ld,shadowmap_pars_fragment:Cd,shadowmap_pars_vertex:Rd,shadowmap_vertex:Pd,shadowmask_pars_fragment:Id,skinbase_vertex:Dd,skinning_pars_vertex:Fd,skinning_vertex:Nd,skinnormal_vertex:Bd,specularmap_fragment:zd,specularmap_pars_fragment:Od,tonemapping_fragment:Ud,tonemapping_pars_fragment:kd,transmission_fragment:Hd,transmission_pars_fragment:Gd,uv_pars_fragment:Vd,uv_pars_vertex:Wd,uv_vertex:Xd,uv2_pars_fragment:qd,uv2_pars_vertex:Yd,uv2_vertex:Zd,worldpos_vertex:jd,background_frag:Jd,background_vert:Qd,cube_frag:$d,cube_vert:Kd,depth_frag:ef,depth_vert:tf,distanceRGBA_frag:nf,distanceRGBA_vert:rf,equirect_frag:sf,equirect_vert:af,linedashed_frag:of,linedashed_vert:lf,meshbasic_frag:cf,meshbasic_vert:uf,meshlambert_frag:hf,meshlambert_vert:df,meshmatcap_frag:ff,meshmatcap_vert:pf,meshtoon_frag:mf,meshtoon_vert:gf,meshphong_frag:_f,meshphong_vert:vf,meshphysical_frag:xf,meshphysical_vert:yf,normal_frag:Mf,normal_vert:wf,points_frag:bf,points_vert:Sf,shadow_frag:Tf,shadow_vert:Ef,sprite_frag:Af,sprite_vert:Lf},ee={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new tt},uv2Transform:{value:new tt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new tt}}},Rt={basic:{uniforms:at([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:at([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.fog,ee.lights,{emissive:{value:new ce(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:at([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:at([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:at([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new ce(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:at([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:at([ee.points,ee.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:at([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:at([ee.common,ee.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:at([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Le.normal_vert,fragmentShader:Le.normal_frag},sprite:{uniforms:at([ee.sprite,ee.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},cube:{uniforms:at([ee.envmap,{opacity:{value:1}}]),vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:at([ee.common,ee.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:at([ee.lights,ee.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Rt.physical={uniforms:at([Rt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Z(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new ce(0)},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationTint:{value:new ce(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularTint:{value:new ce(1,1,1)},specularTintMap:{value:null}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};function Cf(s,e,t,n,i){const r=new ce(0);let a=0,l,u,h=null,f=0,o=null;function c(p,_){let v=!1,m=_.isScene===!0?_.background:null;m&&m.isTexture&&(m=e.get(m));const g=s.xr,x=g.getSession&&g.getSession();x&&x.environmentBlendMode==="additive"&&(m=null),m===null?d(r,a):m&&m.isColor&&(d(m,1),v=!0),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),m&&(m.isCubeTexture||m.mapping===Pr)?(u===void 0&&(u=new nt(new si(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:ei(Rt.cube.uniforms),vertexShader:Rt.cube.vertexShader,fragmentShader:Rt.cube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=m,u.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,(h!==m||f!==m.version||o!==s.toneMapping)&&(u.material.needsUpdate=!0,h=m,f=m.version,o=s.toneMapping),p.unshift(u,u.geometry,u.material,0,0,null)):m&&m.isTexture&&(l===void 0&&(l=new nt(new Ws(2,2),new xn({name:"BackgroundMaterial",uniforms:ei(Rt.background.uniforms),vertexShader:Rt.background.vertexShader,fragmentShader:Rt.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),l.material.uniforms.uvTransform.value.copy(m.matrix),(h!==m||f!==m.version||o!==s.toneMapping)&&(l.material.needsUpdate=!0,h=m,f=m.version,o=s.toneMapping),p.unshift(l,l.geometry,l.material,0,0,null))}function d(p,_){t.buffers.color.setClear(p.r,p.g,p.b,_,i)}return{getClearColor:function(){return r},setClearColor:function(p,_=1){r.set(p),a=_,d(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,d(r,a)},render:c}}function Rf(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,l={},u=_(null);let h=u;function f(U,R,B,L,D){let j=!1;if(a){const J=p(L,B,R);h!==J&&(h=J,c(h.object)),j=v(L,D),j&&m(L,D)}else{const J=R.wireframe===!0;(h.geometry!==L.id||h.program!==B.id||h.wireframe!==J)&&(h.geometry=L.id,h.program=B.id,h.wireframe=J,j=!0)}U.isInstancedMesh===!0&&(j=!0),D!==null&&t.update(D,34963),j&&(b(U,R,B,L),D!==null&&s.bindBuffer(34963,t.get(D).buffer))}function o(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function c(U){return n.isWebGL2?s.bindVertexArray(U):r.bindVertexArrayOES(U)}function d(U){return n.isWebGL2?s.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function p(U,R,B){const L=B.wireframe===!0;let D=l[U.id];D===void 0&&(D={},l[U.id]=D);let j=D[R.id];j===void 0&&(j={},D[R.id]=j);let J=j[L];return J===void 0&&(J=_(o()),j[L]=J),J}function _(U){const R=[],B=[],L=[];for(let D=0;D<i;D++)R[D]=0,B[D]=0,L[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:L,object:U,attributes:{},index:null}}function v(U,R){const B=h.attributes,L=U.attributes;let D=0;for(const j in L){const J=B[j],Q=L[j];if(J===void 0||J.attribute!==Q||J.data!==Q.data)return!0;D++}return h.attributesNum!==D||h.index!==R}function m(U,R){const B={},L=U.attributes;let D=0;for(const j in L){const J=L[j],Q={};Q.attribute=J,J.data&&(Q.data=J.data),B[j]=Q,D++}h.attributes=B,h.attributesNum=D,h.index=R}function g(){const U=h.newAttributes;for(let R=0,B=U.length;R<B;R++)U[R]=0}function x(U){w(U,0)}function w(U,R){const B=h.newAttributes,L=h.enabledAttributes,D=h.attributeDivisors;B[U]=1,L[U]===0&&(s.enableVertexAttribArray(U),L[U]=1),D[U]!==R&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,R),D[U]=R)}function E(){const U=h.newAttributes,R=h.enabledAttributes;for(let B=0,L=R.length;B<L;B++)R[B]!==U[B]&&(s.disableVertexAttribArray(B),R[B]=0)}function A(U,R,B,L,D,j){n.isWebGL2===!0&&(B===5124||B===5125)?s.vertexAttribIPointer(U,R,B,D,j):s.vertexAttribPointer(U,R,B,L,D,j)}function b(U,R,B,L){if(n.isWebGL2===!1&&(U.isInstancedMesh||L.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const D=L.attributes,j=B.getAttributes(),J=R.defaultAttributeValues;for(const Q in j){const K=j[Q];if(K>=0){const ve=D[Q];if(ve!==void 0){const pe=ve.normalized,Ee=ve.itemSize,Se=t.get(ve);if(Se===void 0)continue;const G=Se.buffer,He=Se.type,Pe=Se.bytesPerElement;if(ve.isInterleavedBufferAttribute){const we=ve.data,de=we.stride,Ae=ve.offset;we&&we.isInstancedInterleavedBuffer?(w(K,we.meshPerAttribute),L._maxInstanceCount===void 0&&(L._maxInstanceCount=we.meshPerAttribute*we.count)):x(K),s.bindBuffer(34962,G),A(K,Ee,He,pe,de*Pe,Ae*Pe)}else ve.isInstancedBufferAttribute?(w(K,ve.meshPerAttribute),L._maxInstanceCount===void 0&&(L._maxInstanceCount=ve.meshPerAttribute*ve.count)):x(K),s.bindBuffer(34962,G),A(K,Ee,He,pe,0,0)}else if(Q==="instanceMatrix"){const pe=t.get(U.instanceMatrix);if(pe===void 0)continue;const Ee=pe.buffer,Se=pe.type;w(K+0,1),w(K+1,1),w(K+2,1),w(K+3,1),s.bindBuffer(34962,Ee),s.vertexAttribPointer(K+0,4,Se,!1,64,0),s.vertexAttribPointer(K+1,4,Se,!1,64,16),s.vertexAttribPointer(K+2,4,Se,!1,64,32),s.vertexAttribPointer(K+3,4,Se,!1,64,48)}else if(Q==="instanceColor"){const pe=t.get(U.instanceColor);if(pe===void 0)continue;const Ee=pe.buffer,Se=pe.type;w(K,1),s.bindBuffer(34962,Ee),s.vertexAttribPointer(K,3,Se,!1,12,0)}else if(J!==void 0){const pe=J[Q];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv(K,pe);break;case 3:s.vertexAttrib3fv(K,pe);break;case 4:s.vertexAttrib4fv(K,pe);break;default:s.vertexAttrib1fv(K,pe)}}}}E()}function O(){N();for(const U in l){const R=l[U];for(const B in R){const L=R[B];for(const D in L)d(L[D].object),delete L[D];delete R[B]}delete l[U]}}function I(U){if(l[U.id]===void 0)return;const R=l[U.id];for(const B in R){const L=R[B];for(const D in L)d(L[D].object),delete L[D];delete R[B]}delete l[U.id]}function H(U){for(const R in l){const B=l[R];if(B[U.id]===void 0)continue;const L=B[U.id];for(const D in L)d(L[D].object),delete L[D];delete B[U.id]}}function N(){re(),h!==u&&(h=u,c(h.object))}function re(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:f,reset:N,resetDefaultState:re,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:H,initAttributes:g,enableAttribute:x,disableUnusedAttributes:E}}function Pf(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}function l(h,f){s.drawArrays(r,h,f),t.update(f,r,1)}function u(h,f,o){if(o===0)return;let c,d;if(i)c=s,d="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",c===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[d](r,h,f,o),t.update(f,r,o)}this.setMode=a,this.render=l,this.renderInstances=u}function If(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let l=t.precision!==void 0?t.precision:"highp";const u=r(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=a||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,o=s.getParameter(34930),c=s.getParameter(35660),d=s.getParameter(3379),p=s.getParameter(34076),_=s.getParameter(34921),v=s.getParameter(36347),m=s.getParameter(36348),g=s.getParameter(36349),x=c>0,w=a||e.has("OES_texture_float"),E=x&&w,A=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:r,precision:l,logarithmicDepthBuffer:f,maxTextures:o,maxVertexTextures:c,maxTextureSize:d,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:v,maxVaryings:m,maxFragmentUniforms:g,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:E,maxSamples:A}}function Df(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Vt,l=new tt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(o,c,d){const p=o.length!==0||c||n!==0||i;return i=c,t=f(o,d,0),n=o.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1,h()},this.setState=function(o,c,d){const p=o.clippingPlanes,_=o.clipIntersection,v=o.clipShadows,m=s.get(o);if(!i||p===null||p.length===0||r&&!v)r?f(null):h();else{const g=r?0:n,x=g*4;let w=m.clippingState||null;u.value=w,w=f(p,c,x,d);for(let E=0;E!==x;++E)w[E]=t[E];m.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(o,c,d,p){const _=o!==null?o.length:0;let v=null;if(_!==0){if(v=u.value,p!==!0||v===null){const m=d+_*4,g=c.matrixWorldInverse;l.getNormalMatrix(g),(v===null||v.length<m)&&(v=new Float32Array(m));for(let x=0,w=d;x!==_;++x,w+=4)a.copy(o[x]).applyMatrix4(g,l),a.normal.toArray(v,w),v[w+3]=a.constant}u.value=v,u.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}function Ff(s){let e=new WeakMap;function t(a,l){return l===Es?a.mapping=Cr:l===As&&(a.mapping=Rr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const l=a.mapping;if(l===Es||l===As)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const h=s.getRenderTarget(),f=new nl(u.height/2);return f.fromEquirectangularTexture(s,a),e.set(a,f),s.setRenderTarget(h),a.addEventListener("dispose",i),t(f.texture,a.mapping)}else return null}}return a}function i(a){const l=a.target;l.removeEventListener("dispose",i);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Xs extends Gs{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,l=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=f*this.view.offsetY,u=l-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Xs.prototype.isOrthographicCamera=!0;class zr extends xn{constructor(e){super(e),this.type="RawShaderMaterial"}}zr.prototype.isRawShaderMaterial=!0;const Jn=4,an=8,Ct=Math.pow(2,an),rl=[.125,.215,.35,.446,.526,.582],sl=an-Jn+1+rl.length,zn=20,Pt={[ft]:0,[Dr]:1,[ks]:2,[qo]:3,[Yo]:4,[Zo]:5,[Us]:6},pn=new Fr({side:Ze,depthWrite:!1,depthTest:!1}),Nf=new nt(new si,pn),ps=new Xs,{_lodPlanes:fi,_sizeLods:Xa,_sigmas:sr}=Of(),qa=new ce;let ms=null;const mn=(1+Math.sqrt(5))/2,On=1/mn,Ya=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,mn,On),new T(0,mn,-On),new T(On,0,mn),new T(-On,0,mn),new T(mn,On,0),new T(-mn,On,0)];function Za(s){const e=Math.max(s.r,s.g,s.b),t=Math.min(Math.max(Math.ceil(Math.log2(e)),-128),127);return s.multiplyScalar(Math.pow(2,-t)),(t+128)/255}class Bf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Uf(zn),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ms=this._renderer.getRenderTarget();const r=this._allocateTargets();return this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Qa(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Ja(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<fi.length;e++)fi[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(ms),e.scissorTest=!1,ar(e,0,0,e.width,e.height)}_fromTexture(e){ms=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Kn,format:Bc,encoding:zf(e)?e.encoding:ks,depthBuffer:!1},n=ja(t);return n.depthBuffer=!e,this._pingPongRenderTarget=ja(t),n}_compileMaterial(e){const t=new nt(fi[0],e);this._renderer.compile(t,ps)}_sceneToCubeUV(e,t,n,i){const l=new ct(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,o=f.autoClear,c=f.outputEncoding,d=f.toneMapping;f.getClearColor(qa),f.toneMapping=_n,f.outputEncoding=ft,f.autoClear=!1;let p=!1;const _=e.background;if(_){if(_.isColor){pn.color.copy(_).convertSRGBToLinear(),e.background=null;const v=Za(pn.color);pn.opacity=v,p=!0}}else{pn.color.copy(qa).convertSRGBToLinear();const v=Za(pn.color);pn.opacity=v,p=!0}for(let v=0;v<6;v++){const m=v%3;m==0?(l.up.set(0,u[v],0),l.lookAt(h[v],0,0)):m==1?(l.up.set(0,0,u[v]),l.lookAt(0,h[v],0)):(l.up.set(0,u[v],0),l.lookAt(0,0,h[v])),ar(i,m*Ct,v>2?Ct:0,Ct,Ct),f.setRenderTarget(i),p&&f.render(Nf,l),f.render(e,l)}f.toneMapping=d,f.outputEncoding=c,f.autoClear=o}_textureToCubeUV(e,t){const n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=Qa()):this._equirectShader==null&&(this._equirectShader=Ja());const i=e.isCubeTexture?this._cubemapShader:this._equirectShader,r=new nt(fi[0],i),a=i.uniforms;a.envMap.value=e,e.isCubeTexture||a.texelSize.value.set(1/e.image.width,1/e.image.height),a.inputEncoding.value=Pt[e.encoding],a.outputEncoding.value=Pt[t.texture.encoding],ar(t,0,0,3*Ct,2*Ct),n.setRenderTarget(t),n.render(r,ps)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<sl;i++){const r=Math.sqrt(sr[i]*sr[i]-sr[i-1]*sr[i-1]),a=Ya[(i-1)%Ya.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,l){const u=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,o=new nt(fi[i],h),c=h.uniforms,d=Xa[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*zn-1),_=r/p,v=isFinite(r)?1+Math.floor(f*_):zn;v>zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${zn}`);const m=[];let g=0;for(let A=0;A<zn;++A){const b=A/_,O=Math.exp(-b*b/2);m.push(O),A==0?g+=O:A<v&&(g+=2*O)}for(let A=0;A<m.length;A++)m[A]=m[A]/g;c.envMap.value=e.texture,c.samples.value=v,c.weights.value=m,c.latitudinal.value=a==="latitudinal",l&&(c.poleAxis.value=l),c.dTheta.value=p,c.mipInt.value=an-n,c.inputEncoding.value=Pt[e.texture.encoding],c.outputEncoding.value=Pt[e.texture.encoding];const x=Xa[i],w=3*Math.max(0,Ct-2*x),E=(i===0?0:2*Ct)+2*x*(i>an-Jn?i-an+Jn:0);ar(t,w,E,3*x,2*x),u.setRenderTarget(t),u.render(o,ps)}}function zf(s){return s===void 0||s.type!==Kn?!1:s.encoding===ft||s.encoding===Dr||s.encoding===Us}function Of(){const s=[],e=[],t=[];let n=an;for(let i=0;i<sl;i++){const r=Math.pow(2,n);e.push(r);let a=1/r;i>an-Jn?a=rl[i-an+Jn-1]:i==0&&(a=0),t.push(a);const l=1/(r-1),u=-l/2,h=1+l/2,f=[u,u,h,u,h,h,u,u,h,h,u,h],o=6,c=6,d=3,p=2,_=1,v=new Float32Array(d*c*o),m=new Float32Array(p*c*o),g=new Float32Array(_*c*o);for(let w=0;w<o;w++){const E=w%3*2/3-1,A=w>2?0:-1,b=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];v.set(b,d*c*w),m.set(f,p*c*w);const O=[w,w,w,w,w,w];g.set(O,_*c*w)}const x=new ze;x.setAttribute("position",new qe(v,d)),x.setAttribute("uv",new qe(m,p)),x.setAttribute("faceIndex",new qe(g,_)),s.push(x),n>Jn&&n--}return{_lodPlanes:s,_sizeLods:e,_sigmas:t}}function ja(s){const e=new It(3*Ct,3*Ct,s);return e.texture.mapping=Pr,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function ar(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Uf(s){const e=new Float32Array(s),t=new T(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:s},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:Pt[ft]},outputEncoding:{value:Pt[ft]}},vertexShader:qs(),fragmentShader:`

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

			${Ys()}

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

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Ja(){const s=new Z(1,1);return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:s},inputEncoding:{value:Pt[ft]},outputEncoding:{value:Pt[ft]}},vertexShader:qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Ys()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Qa(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Pt[ft]},outputEncoding:{value:Pt[ft]}},vertexShader:qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Ys()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function qs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
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
	`}function Ys(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function kf(s){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const u=l.mapping,h=u===Es||u===As,f=u===Cr||u===Rr;if(h||f){if(e.has(l))return e.get(l).texture;{const o=l.image;if(h&&o&&o.height>0||f&&o&&i(o)){const c=s.getRenderTarget();t===null&&(t=new Bf(s));const d=h?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,d),s.setRenderTarget(c),l.addEventListener("dispose",r),d.texture}else return null}}}return l}function i(l){let u=0;const h=6;for(let f=0;f<h;f++)l[f]!==void 0&&u++;return u===h}function r(l){const u=l.target;u.removeEventListener("dispose",r);const h=e.get(u);h!==void 0&&(h.delete(u),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Hf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gf(s,e,t,n){const i={},r=new WeakMap;function a(o){const c=o.target;c.index!==null&&e.remove(c.index);for(const p in c.attributes)e.remove(c.attributes[p]);c.removeEventListener("dispose",a),delete i[c.id];const d=r.get(c);d&&(e.remove(d),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function l(o,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c}function u(o){const c=o.attributes;for(const p in c)e.update(c[p],34962);const d=o.morphAttributes;for(const p in d){const _=d[p];for(let v=0,m=_.length;v<m;v++)e.update(_[v],34962)}}function h(o){const c=[],d=o.index,p=o.attributes.position;let _=0;if(d!==null){const g=d.array;_=d.version;for(let x=0,w=g.length;x<w;x+=3){const E=g[x+0],A=g[x+1],b=g[x+2];c.push(E,A,A,b,b,E)}}else{const g=p.array;_=p.version;for(let x=0,w=g.length/3-1;x<w;x+=3){const E=x+0,A=x+1,b=x+2;c.push(E,A,A,b,b,E)}}const v=new(tl(c)>65535?el:Ko)(c,1);v.version=_;const m=r.get(o);m&&e.remove(m),r.set(o,v)}function f(o){const c=r.get(o);if(c){const d=o.index;d!==null&&c.version<d.version&&h(o)}else h(o);return r.get(o)}return{get:l,update:u,getWireframeAttribute:f}}function Vf(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}let l,u;function h(c){l=c.type,u=c.bytesPerElement}function f(c,d){s.drawElements(r,d,l,c*u),t.update(d,r,1)}function o(c,d,p){if(p===0)return;let _,v;if(i)_=s,v="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[v](r,d,l,c*u,p),t.update(d,r,p)}this.setMode=a,this.setIndex=h,this.render=f,this.renderInstances=o}function Wf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(t.calls++,a){case 4:t.triangles+=l*(r/3);break;case 1:t.lines+=l*(r/2);break;case 3:t.lines+=l*(r-1);break;case 2:t.lines+=l*r;break;case 0:t.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Xf(s,e){return s[0]-e[0]}function qf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Yf(s){const e={},t=new Float32Array(8),n=[];for(let r=0;r<8;r++)n[r]=[r,0];function i(r,a,l,u){const h=r.morphTargetInfluences,f=h===void 0?0:h.length;let o=e[a.id];if(o===void 0||o.length!==f){o=[];for(let v=0;v<f;v++)o[v]=[v,0];e[a.id]=o}for(let v=0;v<f;v++){const m=o[v];m[0]=v,m[1]=h[v]}o.sort(qf);for(let v=0;v<8;v++)v<f&&o[v][1]?(n[v][0]=o[v][0],n[v][1]=o[v][1]):(n[v][0]=Number.MAX_SAFE_INTEGER,n[v][1]=0);n.sort(Xf);const c=a.morphAttributes.position,d=a.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const m=n[v],g=m[0],x=m[1];g!==Number.MAX_SAFE_INTEGER&&x?(c&&a.getAttribute("morphTarget"+v)!==c[g]&&a.setAttribute("morphTarget"+v,c[g]),d&&a.getAttribute("morphNormal"+v)!==d[g]&&a.setAttribute("morphNormal"+v,d[g]),t[v]=x,p+=x):(c&&a.hasAttribute("morphTarget"+v)===!0&&a.deleteAttribute("morphTarget"+v),d&&a.hasAttribute("morphNormal"+v)===!0&&a.deleteAttribute("morphNormal"+v),t[v]=0)}const _=a.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",_),u.getUniforms().setValue(s,"morphTargetInfluences",t)}return{update:i}}function Zf(s,e,t,n){let i=new WeakMap;function r(u){const h=n.render.frame,f=u.geometry,o=e.get(u,f);return i.get(o)!==h&&(e.update(o),i.set(o,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),t.update(u.instanceMatrix,34962),u.instanceColor!==null&&t.update(u.instanceColor,34962)),o}function a(){i=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}class al extends it{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}al.prototype.isDataTexture2DArray=!0;class ol extends it{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}ol.prototype.isDataTexture3D=!0;const ll=new it,jf=new al,Jf=new ol,cl=new Nr,$a=[],Ka=[],eo=new Float32Array(16),to=new Float32Array(9),no=new Float32Array(4);function ai(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=$a[i];if(r===void 0&&(r=new Float32Array(i),$a[i]=r),e!==0){n.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,s[a].toArray(r,l)}return r}function ut(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ot(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ul(s,e){let t=Ka[e];t===void 0&&(t=new Int32Array(e),Ka[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Qf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $f(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;s.uniform2fv(this.addr,e),ot(t,e)}}function Kf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;s.uniform3fv(this.addr,e),ot(t,e)}}function ep(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;s.uniform4fv(this.addr,e),ot(t,e)}}function tp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ot(t,e)}else{if(ut(t,n))return;no.set(n),s.uniformMatrix2fv(this.addr,!1,no),ot(t,n)}}function np(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ot(t,e)}else{if(ut(t,n))return;to.set(n),s.uniformMatrix3fv(this.addr,!1,to),ot(t,n)}}function ip(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ot(t,e)}else{if(ut(t,n))return;eo.set(n),s.uniformMatrix4fv(this.addr,!1,eo),ot(t,n)}}function rp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function sp(s,e){const t=this.cache;ut(t,e)||(s.uniform2iv(this.addr,e),ot(t,e))}function ap(s,e){const t=this.cache;ut(t,e)||(s.uniform3iv(this.addr,e),ot(t,e))}function op(s,e){const t=this.cache;ut(t,e)||(s.uniform4iv(this.addr,e),ot(t,e))}function lp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function cp(s,e){const t=this.cache;ut(t,e)||(s.uniform2uiv(this.addr,e),ot(t,e))}function up(s,e){const t=this.cache;ut(t,e)||(s.uniform3uiv(this.addr,e),ot(t,e))}function hp(s,e){const t=this.cache;ut(t,e)||(s.uniform4uiv(this.addr,e),ot(t,e))}function dp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||ll,i)}function fp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jf,i)}function pp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||cl,i)}function mp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||jf,i)}function gp(s){switch(s){case 5126:return Qf;case 35664:return $f;case 35665:return Kf;case 35666:return ep;case 35674:return tp;case 35675:return np;case 35676:return ip;case 5124:case 35670:return rp;case 35667:case 35671:return sp;case 35668:case 35672:return ap;case 35669:case 35673:return op;case 5125:return lp;case 36294:return cp;case 36295:return up;case 36296:return hp;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}function _p(s,e){s.uniform1fv(this.addr,e)}function vp(s,e){const t=ai(e,this.size,2);s.uniform2fv(this.addr,t)}function xp(s,e){const t=ai(e,this.size,3);s.uniform3fv(this.addr,t)}function yp(s,e){const t=ai(e,this.size,4);s.uniform4fv(this.addr,t)}function Mp(s,e){const t=ai(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function wp(s,e){const t=ai(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function bp(s,e){const t=ai(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Sp(s,e){s.uniform1iv(this.addr,e)}function Tp(s,e){s.uniform2iv(this.addr,e)}function Ep(s,e){s.uniform3iv(this.addr,e)}function Ap(s,e){s.uniform4iv(this.addr,e)}function Lp(s,e){s.uniform1uiv(this.addr,e)}function Cp(s,e){s.uniform2uiv(this.addr,e)}function Rp(s,e){s.uniform3uiv(this.addr,e)}function Pp(s,e){s.uniform4uiv(this.addr,e)}function Ip(s,e,t){const n=e.length,i=ul(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTexture2D(e[r]||ll,i[r])}function Dp(s,e,t){const n=e.length,i=ul(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTextureCube(e[r]||cl,i[r])}function Fp(s){switch(s){case 5126:return _p;case 35664:return vp;case 35665:return xp;case 35666:return yp;case 35674:return Mp;case 35675:return wp;case 35676:return bp;case 5124:case 35670:return Sp;case 35667:case 35671:return Tp;case 35668:case 35672:return Ep;case 35669:case 35673:return Ap;case 5125:return Lp;case 36294:return Cp;case 36295:return Rp;case 36296:return Pp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35680:case 36300:case 36308:case 36293:return Dp}}function Np(s,e,t){this.id=s,this.addr=t,this.cache=[],this.setValue=gp(e.type)}function hl(s,e,t){this.id=s,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Fp(e.type)}hl.prototype.updateCache=function(s){const e=this.cache;s instanceof Float32Array&&e.length!==s.length&&(this.cache=new Float32Array(s.length)),ot(e,s)};function dl(s){this.id=s,this.seq=[],this.map={}}dl.prototype.setValue=function(s,e,t){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const a=n[i];a.setValue(s,e[a.id],t)}};const gs=/(\w+)(\])?(\[|\.)?/g;function io(s,e){s.seq.push(e),s.map[e.id]=e}function Bp(s,e,t){const n=s.name,i=n.length;for(gs.lastIndex=0;;){const r=gs.exec(n),a=gs.lastIndex;let l=r[1];const u=r[2]==="]",h=r[3];if(u&&(l=l|0),h===void 0||h==="["&&a+2===i){io(t,h===void 0?new Np(l,s,e):new hl(l,s,e));break}else{let o=t.map[l];o===void 0&&(o=new dl(l),io(t,o)),t=o}}}function on(s,e){this.seq=[],this.map={};const t=s.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=s.getActiveUniform(e,n),r=s.getUniformLocation(e,i.name);Bp(i,r,this)}}on.prototype.setValue=function(s,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(s,t,n)};on.prototype.setOptional=function(s,e,t){const n=e[t];n!==void 0&&this.setValue(s,t,n)};on.upload=function(s,e,t,n){for(let i=0,r=e.length;i!==r;++i){const a=e[i],l=t[a.id];l.needsUpdate!==!1&&a.setValue(s,l.value,n)}};on.seqWithValue=function(s,e){const t=[];for(let n=0,i=s.length;n!==i;++n){const r=s[n];r.id in e&&t.push(r)}return t};function ro(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let zp=0;function Op(s){const e=s.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function fl(s){switch(s){case ft:return["Linear","( value )"];case Dr:return["sRGB","( value )"];case ks:return["RGBE","( value )"];case qo:return["RGBM","( value, 7.0 )"];case Yo:return["RGBM","( value, 16.0 )"];case Zo:return["RGBD","( value, 256.0 )"];case Us:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case bu:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function so(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=s.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+i+Op(r)}function Un(s,e){const t=fl(e);return"vec4 "+s+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Up(s,e){const t=fl(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function kp(s,e){let t;switch(e){case Mc:t="Linear";break;case wc:t="Reinhard";break;case bc:t="OptimizedCineon";break;case Sc:t="ACESFilmic";break;case Tc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hp(s){return[s.extensionDerivatives||s.envMapCubeUV||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission>0)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mi).join(`
`)}function Gp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vp(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const a=s.getActiveAttrib(e,i).name;t[a]=s.getAttribLocation(e,a)}return t}function Mi(s){return s!==""}function ao(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ps(s){return s.replace(Wp,Xp)}function Xp(s,e){const t=Le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ps(t)}const qp=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lo(s){return s.replace(Yp,pl).replace(qp,Zp)}function Zp(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),pl(s,e,t,n)}function pl(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function co(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ko?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Kl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function Jp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Cr:case Rr:e="ENVMAP_TYPE_CUBE";break;case Pr:case zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Rr:case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function $p(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Lr:e="ENVMAP_BLENDING_MULTIPLY";break;case xc:e="ENVMAP_BLENDING_MIX";break;case yc:e="ENVMAP_BLENDING_ADD";break}return e}function Kp(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,l=t.fragmentShader;const u=jp(t),h=Jp(t),f=Qp(t),o=$p(t),c=s.gammaFactor>0?s.gammaFactor:1,d=t.isWebGL2?"":Hp(t),p=Gp(r),_=i.createProgram();let v,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[p].filter(Mi).join(`
`),v.length>0&&(v+=`
`),m=[d,p].filter(Mi).join(`
`),m.length>0&&(m+=`
`)):(v=[co(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+c,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mi).join(`
`),m=[d,co(t),"#define SHADER_NAME "+t.shaderName,p,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+c,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+o:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Le.tonemapping_pars_fragment:"",t.toneMapping!==_n?kp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",Le.encodings_pars_fragment,t.map?Un("mapTexelToLinear",t.mapEncoding):"",t.matcap?Un("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Un("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Un("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularTintMap?Un("specularTintMapTexelToLinear",t.specularTintMapEncoding):"",t.lightMap?Un("lightMapTexelToLinear",t.lightMapEncoding):"",Up("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mi).join(`
`)),a=Ps(a),a=ao(a,t),a=oo(a,t),l=Ps(l),l=ao(l,t),l=oo(l,t),a=lo(a),l=lo(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Ia?"":"out highp vec4 pc_fragColor;",t.glslVersion===Ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=g+v+a,w=g+m+l,E=ro(i,35633,x),A=ro(i,35632,w);if(i.attachShader(_,E),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const I=i.getProgramInfoLog(_).trim(),H=i.getShaderInfoLog(E).trim(),N=i.getShaderInfoLog(A).trim();let re=!0,U=!0;if(i.getProgramParameter(_,35714)===!1){re=!1;const R=so(i,E,"vertex"),B=so(i,A,"fragment");console.error("THREE.WebGLProgram: shader error: ",i.getError(),"35715",i.getProgramParameter(_,35715),"gl.getProgramInfoLog",I,R,B)}else I!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",I):(H===""||N==="")&&(U=!1);U&&(this.diagnostics={runnable:re,programLog:I,vertexShader:{log:H,prefix:v},fragmentShader:{log:N,prefix:m}})}i.deleteShader(E),i.deleteShader(A);let b;this.getUniforms=function(){return b===void 0&&(b=new on(i,_)),b};let O;return this.getAttributes=function(){return O===void 0&&(O=Vp(i,_)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=zp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}function em(s,e,t,n,i,r,a){const l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.floatVertexTextures,o=i.maxVertexUniforms,c=i.vertexTextures;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},_=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","specularIntensityMap","specularTintMap","specularTintMapEncoding","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmission","transmissionMap","thicknessMap"];function v(b){const I=b.skeleton.bones;if(f)return 1024;{const N=Math.floor((o-20)/4),re=Math.min(N,I.length);return re<I.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+I.length+" bones. This GPU supports "+re+"."),0):re}}function m(b){let O;return b&&b.isTexture?O=b.encoding:b&&b.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),O=b.texture.encoding):O=ft,O}function g(b,O,I,H,N){const re=H.fog,U=b.isMeshStandardMaterial?H.environment:null,R=(b.isMeshStandardMaterial?t:e).get(b.envMap||U),B=p[b.type],L=N.isSkinnedMesh?v(N):0;b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let D,j;if(B){const K=Rt[B];D=K.vertexShader,j=K.fragmentShader}else D=b.vertexShader,j=b.fragmentShader;const J=s.getRenderTarget();return{isWebGL2:u,shaderID:B,shaderName:b.type,vertexShader:D,fragmentShader:j,defines:b.defines,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,instancing:N.isInstancedMesh===!0,instancingColor:N.isInstancedMesh===!0&&N.instanceColor!==null,supportsVertexTextures:c,outputEncoding:J!==null?m(J.texture):s.outputEncoding,map:!!b.map,mapEncoding:m(b.map),matcap:!!b.matcap,matcapEncoding:m(b.matcap),envMap:!!R,envMapMode:R&&R.mapping,envMapEncoding:m(R),envMapCubeUV:!!R&&(R.mapping===Pr||R.mapping===zs),lightMap:!!b.lightMap,lightMapEncoding:m(b.lightMap),aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,emissiveMapEncoding:m(b.emissiveMap),bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Eu,tangentSpaceNormalMap:b.normalMapType===ni,clearcoatMap:!!b.clearcoatMap,clearcoatRoughnessMap:!!b.clearcoatRoughnessMap,clearcoatNormalMap:!!b.clearcoatNormalMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularTintMap:!!b.specularTintMap,specularTintMapEncoding:m(b.specularTintMap),alphaMap:!!b.alphaMap,gradientMap:!!b.gradientMap,sheen:!!b.sheen,transmission:!!b.transmission,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!N.geometry&&!!N.geometry.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.geometry&&!!N.geometry.attributes.color&&N.geometry.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularTintMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.transmission||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularTintMap)&&!!b.displacementMap,fog:!!re,useFog:b.fog,fogExp2:re&&re.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0&&L>0,maxBones:L,useVertexTexture:f,morphTargets:!!N.geometry&&!!N.geometry.morphAttributes.position,morphNormals:!!N.geometry&&!!N.geometry.morphAttributes.normal,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:b.toneMapped?s.toneMapping:_n,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,alphaTest:b.alphaTest,doubleSided:b.side===$n,flipSided:b.side===Ze,depthPacking:b.depthPacking!==void 0?b.depthPacking:!1,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function x(b){const O=[];if(b.shaderID?O.push(b.shaderID):(O.push(b.fragmentShader),O.push(b.vertexShader)),b.defines!==void 0)for(const I in b.defines)O.push(I),O.push(b.defines[I]);if(b.isRawShaderMaterial===!1){for(let I=0;I<_.length;I++)O.push(b[_[I]]);O.push(s.outputEncoding),O.push(s.gammaFactor)}return O.push(b.customProgramCacheKey),O.join()}function w(b){const O=p[b.type];let I;if(O){const H=Rt[O];I=th.clone(H.uniforms)}else I=b.uniforms;return I}function E(b,O){let I;for(let H=0,N=l.length;H<N;H++){const re=l[H];if(re.cacheKey===O){I=re,++I.usedTimes;break}}return I===void 0&&(I=new Kp(s,O,b,r),l.push(I)),I}function A(b){if(--b.usedTimes===0){const O=l.indexOf(b);l[O]=l[l.length-1],l.pop(),b.destroy()}}return{getParameters:g,getProgramCacheKey:x,getUniforms:w,acquireProgram:E,releaseProgram:A,programs:l}}function tm(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,l){s.get(r)[a]=l}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function nm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.program!==e.program?s.program.id-e.program.id:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function uo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ho(s){const e=[];let t=0;const n=[],i=[],r=[],a={id:-1};function l(){t=0,n.length=0,i.length=0,r.length=0}function u(d,p,_,v,m,g){let x=e[t];const w=s.get(_);return x===void 0?(x={id:d.id,object:d,geometry:p,material:_,program:w.program||a,groupOrder:v,renderOrder:d.renderOrder,z:m,group:g},e[t]=x):(x.id=d.id,x.object=d,x.geometry=p,x.material=_,x.program=w.program||a,x.groupOrder=v,x.renderOrder=d.renderOrder,x.z=m,x.group=g),t++,x}function h(d,p,_,v,m,g){const x=u(d,p,_,v,m,g);_.transmission>0?i.push(x):_.transparent===!0?r.push(x):n.push(x)}function f(d,p,_,v,m,g){const x=u(d,p,_,v,m,g);_.transmission>0?i.unshift(x):_.transparent===!0?r.unshift(x):n.unshift(x)}function o(d,p){n.length>1&&n.sort(d||nm),i.length>1&&i.sort(p||uo),r.length>1&&r.sort(p||uo)}function c(){for(let d=t,p=e.length;d<p;d++){const _=e[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.program=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:l,push:h,unshift:f,finish:c,sort:o}}function im(s){let e=new WeakMap;function t(i,r){let a;return e.has(i)===!1?(a=new ho(s),e.set(i,[a])):r>=e.get(i).length?(a=new ho(s),e.get(i).push(a)):a=e.get(i)[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function rm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new ce};break;case"SpotLight":t={position:new T,direction:new T,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":t={color:new ce,position:new T,halfWidth:new T,halfHeight:new T};break}return s[e.id]=t,t}}}function sm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let am=0;function om(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function lm(s,e){const t=new rm,n=sm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let f=0;f<9;f++)i.probe.push(new T);const r=new T,a=new me,l=new me;function u(f){let o=0,c=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,_=0,v=0,m=0,g=0,x=0,w=0,E=0;f.sort(om);for(let b=0,O=f.length;b<O;b++){const I=f[b],H=I.color,N=I.intensity,re=I.distance,U=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)o+=H.r*N,c+=H.g*N,d+=H.b*N;else if(I.isLightProbe)for(let R=0;R<9;R++)i.probe[R].addScaledVector(I.sh.coefficients[R],N);else if(I.isDirectionalLight){const R=t.get(I);if(R.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const B=I.shadow,L=n.get(I);L.shadowBias=B.bias,L.shadowNormalBias=B.normalBias,L.shadowRadius=B.radius,L.shadowMapSize=B.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=U,i.directionalShadowMatrix[p]=I.shadow.matrix,x++}i.directional[p]=R,p++}else if(I.isSpotLight){const R=t.get(I);if(R.position.setFromMatrixPosition(I.matrixWorld),R.color.copy(H).multiplyScalar(N),R.distance=re,R.coneCos=Math.cos(I.angle),R.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),R.decay=I.decay,I.castShadow){const B=I.shadow,L=n.get(I);L.shadowBias=B.bias,L.shadowNormalBias=B.normalBias,L.shadowRadius=B.radius,L.shadowMapSize=B.mapSize,i.spotShadow[v]=L,i.spotShadowMap[v]=U,i.spotShadowMatrix[v]=I.shadow.matrix,E++}i.spot[v]=R,v++}else if(I.isRectAreaLight){const R=t.get(I);R.color.copy(H).multiplyScalar(N),R.halfWidth.set(I.width*.5,0,0),R.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=R,m++}else if(I.isPointLight){const R=t.get(I);if(R.color.copy(I.color).multiplyScalar(I.intensity),R.distance=I.distance,R.decay=I.decay,I.castShadow){const B=I.shadow,L=n.get(I);L.shadowBias=B.bias,L.shadowNormalBias=B.normalBias,L.shadowRadius=B.radius,L.shadowMapSize=B.mapSize,L.shadowCameraNear=B.camera.near,L.shadowCameraFar=B.camera.far,i.pointShadow[_]=L,i.pointShadowMap[_]=U,i.pointShadowMatrix[_]=I.shadow.matrix,w++}i.point[_]=R,_++}else if(I.isHemisphereLight){const R=t.get(I);R.skyColor.copy(I.color).multiplyScalar(N),R.groundColor.copy(I.groundColor).multiplyScalar(N),i.hemi[g]=R,g++}}m>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_FLOAT_1,i.rectAreaLTC2=ee.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_HALF_1,i.rectAreaLTC2=ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=o,i.ambient[1]=c,i.ambient[2]=d;const A=i.hash;(A.directionalLength!==p||A.pointLength!==_||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==g||A.numDirectionalShadows!==x||A.numPointShadows!==w||A.numSpotShadows!==E)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=g,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=w,i.spotShadowMatrix.length=E,A.directionalLength=p,A.pointLength=_,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=g,A.numDirectionalShadows=x,A.numPointShadows=w,A.numSpotShadows=E,i.version=am++)}function h(f,o){let c=0,d=0,p=0,_=0,v=0;const m=o.matrixWorldInverse;for(let g=0,x=f.length;g<x;g++){const w=f[g];if(w.isDirectionalLight){const E=i.directional[c];E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),c++}else if(w.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),l.identity(),a.copy(w.matrixWorld),a.premultiply(m),l.extractRotation(a),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(l),E.halfHeight.applyMatrix4(l),_++}else if(w.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(m),E.direction.normalize(),v++}}}return{setup:u,setupView:h,state:i}}function fo(s,e){const t=new lm(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(o){n.push(o)}function l(o){i.push(o)}function u(){t.setup(n)}function h(o){t.setupView(n,o)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:u,setupLightsView:h,pushLight:a,pushShadow:l}}function cm(s,e){let t=new WeakMap;function n(r,a=0){let l;return t.has(r)===!1?(l=new fo(s,e),t.set(r,[l])):a>=t.get(r).length?(l=new fo(s,e),t.get(r).push(l)):l=t.get(r)[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ml extends lt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}ml.prototype.isMeshDepthMaterial=!0;class gl extends lt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new T,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}gl.prototype.isMeshDistanceMaterial=!0;var um=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function _l(s,e,t){let n=new Br;const i=new Z,r=new Z,a=new Be,l=new ml({depthPacking:Tu}),u=new gl,h={},f=t.maxTextureSize,o={0:Ze,1:Ci,2:$n},c=new xn({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:hm,fragmentShader:um}),d=c.clone();d.defines.HORIZONTAL_PASS=1;const p=new ze;p.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nt(p,c),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ko,this.render=function(w,E,A){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;const b=s.getRenderTarget(),O=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),H=s.state;H.setBlending(sn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);for(let N=0,re=w.length;N<re;N++){const U=w[N],R=U.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const B=R.getFrameExtents();if(i.multiply(B),r.copy(R.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(r.x=Math.floor(f/B.x),i.x=r.x*B.x,R.mapSize.x=r.x),i.y>f&&(r.y=Math.floor(f/B.y),i.y=r.y*B.y,R.mapSize.y=r.y)),R.map===null&&!R.isPointLightShadow&&this.type===yi){const D={minFilter:vt,magFilter:vt,format:Tt};R.map=new It(i.x,i.y,D),R.map.texture.name=U.name+".shadowMap",R.mapPass=new It(i.x,i.y,D),R.camera.updateProjectionMatrix()}if(R.map===null){const D={minFilter:$e,magFilter:$e,format:Tt};R.map=new It(i.x,i.y,D),R.map.texture.name=U.name+".shadowMap",R.camera.updateProjectionMatrix()}s.setRenderTarget(R.map),s.clear();const L=R.getViewportCount();for(let D=0;D<L;D++){const j=R.getViewport(D);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),H.viewport(a),R.updateMatrices(U,D),n=R.getFrustum(),x(E,A,R.camera,U,this.type)}!R.isPointLightShadow&&this.type===yi&&m(R,A),R.needsUpdate=!1}v.needsUpdate=!1,s.setRenderTarget(b,O,I)};function m(w,E){const A=e.update(_);c.uniforms.shadow_pass.value=w.map.texture,c.uniforms.resolution.value=w.mapSize,c.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(E,null,A,c,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(E,null,A,d,_,null)}function g(w,E,A,b,O,I,H){let N=null;const re=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(re!==void 0?N=re:N=b.isPointLight===!0?u:l,s.localClippingEnabled&&A.clipShadows===!0&&A.clippingPlanes.length!==0){const U=N.uuid,R=A.uuid;let B=h[U];B===void 0&&(B={},h[U]=B);let L=B[R];L===void 0&&(L=N.clone(),B[R]=L),N=L}return N.visible=A.visible,N.wireframe=A.wireframe,H===yi?N.side=A.shadowSide!==null?A.shadowSide:A.side:N.side=A.shadowSide!==null?A.shadowSide:o[A.side],N.clipShadows=A.clipShadows,N.clippingPlanes=A.clippingPlanes,N.clipIntersection=A.clipIntersection,N.wireframeLinewidth=A.wireframeLinewidth,N.linewidth=A.linewidth,b.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(b.matrixWorld),N.nearDistance=O,N.farDistance=I),N}function x(w,E,A,b,O){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===yi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const N=e.update(w),re=w.material;if(Array.isArray(re)){const U=N.groups;for(let R=0,B=U.length;R<B;R++){const L=U[R],D=re[L.materialIndex];if(D&&D.visible){const j=g(w,N,D,b,A.near,A.far,O);s.renderBufferDirect(A,null,N,j,w,L)}}}else if(re.visible){const U=g(w,N,re,b,A.near,A.far,O);s.renderBufferDirect(A,null,N,U,w,null)}}const H=w.children;for(let N=0,re=H.length;N<re;N++)x(H[N],E,A,b,O)}}function dm(s,e,t){const n=t.isWebGL2;function i(){let C=!1;const ne=new Be;let V=null;const se=new Be(0,0,0,0);return{setMask:function(oe){V!==oe&&!C&&(s.colorMask(oe,oe,oe,oe),V=oe)},setLocked:function(oe){C=oe},setClear:function(oe,Ce,rt,st,qt){qt===!0&&(oe*=st,Ce*=st,rt*=st),ne.set(oe,Ce,rt,st),se.equals(ne)===!1&&(s.clearColor(oe,Ce,rt,st),se.copy(ne))},reset:function(){C=!1,V=null,se.set(-1,0,0,0)}}}function r(){let C=!1,ne=null,V=null,se=null;return{setTest:function(oe){oe?Ee(2929):Se(2929)},setMask:function(oe){ne!==oe&&!C&&(s.depthMask(oe),ne=oe)},setFunc:function(oe){if(V!==oe){if(oe)switch(oe){case dc:s.depthFunc(512);break;case fc:s.depthFunc(519);break;case pc:s.depthFunc(513);break;case Ts:s.depthFunc(515);break;case mc:s.depthFunc(514);break;case gc:s.depthFunc(518);break;case _c:s.depthFunc(516);break;case vc:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);V=oe}},setLocked:function(oe){C=oe},setClear:function(oe){se!==oe&&(s.clearDepth(oe),se=oe)},reset:function(){C=!1,ne=null,V=null,se=null}}}function a(){let C=!1,ne=null,V=null,se=null,oe=null,Ce=null,rt=null,st=null,qt=null;return{setTest:function(We){C||(We?Ee(2960):Se(2960))},setMask:function(We){ne!==We&&!C&&(s.stencilMask(We),ne=We)},setFunc:function(We,Nt,Bt){(V!==We||se!==Nt||oe!==Bt)&&(s.stencilFunc(We,Nt,Bt),V=We,se=Nt,oe=Bt)},setOp:function(We,Nt,Bt){(Ce!==We||rt!==Nt||st!==Bt)&&(s.stencilOp(We,Nt,Bt),Ce=We,rt=Nt,st=Bt)},setLocked:function(We){C=We},setClear:function(We){qt!==We&&(s.clearStencil(We),qt=We)},reset:function(){C=!1,ne=null,V=null,se=null,oe=null,Ce=null,rt=null,st=null,qt=null}}}const l=new i,u=new r,h=new a;let f={},o=null,c={},d=null,p=!1,_=null,v=null,m=null,g=null,x=null,w=null,E=null,A=!1,b=null,O=null,I=null,H=null,N=null;const re=s.getParameter(35661);let U=!1,R=0;const B=s.getParameter(7938);B.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(B)[1]),U=R>=1):B.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),U=R>=2);let L=null,D={};const j=s.getParameter(3088),J=s.getParameter(2978),Q=new Be().fromArray(j),K=new Be().fromArray(J);function ve(C,ne,V){const se=new Uint8Array(4),oe=s.createTexture();s.bindTexture(C,oe),s.texParameteri(C,10241,9728),s.texParameteri(C,10240,9728);for(let Ce=0;Ce<V;Ce++)s.texImage2D(ne+Ce,0,6408,1,1,0,6408,5121,se);return oe}const pe={};pe[3553]=ve(3553,3553,1),pe[34067]=ve(34067,34069,6),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Ee(2929),u.setFunc(Ts),q(!1),$(pa),Ee(2884),Ae(sn);function Ee(C){f[C]!==!0&&(s.enable(C),f[C]=!0)}function Se(C){f[C]!==!1&&(s.disable(C),f[C]=!1)}function G(C){C!==o&&(s.bindFramebuffer(36160,C),o=C)}function He(C,ne){return ne===null&&o!==null&&(ne=o),c[C]!==ne?(s.bindFramebuffer(C,ne),c[C]=ne,n&&(C===36009&&(c[36160]=ne),C===36160&&(c[36009]=ne)),!0):!1}function Pe(C){return d!==C?(s.useProgram(C),d=C,!0):!1}const we={[Wn]:32774,[tc]:32778,[nc]:32779};if(n)we[va]=32775,we[xa]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(we[va]=C.MIN_EXT,we[xa]=C.MAX_EXT)}const de={[ic]:0,[rc]:1,[sc]:768,[Go]:770,[hc]:776,[cc]:774,[oc]:772,[ac]:769,[Vo]:771,[uc]:775,[lc]:773};function Ae(C,ne,V,se,oe,Ce,rt,st){if(C===sn){p===!0&&(Se(3042),p=!1);return}if(p===!1&&(Ee(3042),p=!0),C!==ec){if(C!==_||st!==A){if((v!==Wn||x!==Wn)&&(s.blendEquation(32774),v=Wn,x=Wn),st)switch(C){case bi:s.blendFuncSeparate(1,771,1,771);break;case ma:s.blendFunc(1,1);break;case ga:s.blendFuncSeparate(0,0,769,771);break;case _a:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case bi:s.blendFuncSeparate(770,771,1,771);break;case ma:s.blendFunc(770,1);break;case ga:s.blendFunc(0,769);break;case _a:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}m=null,g=null,w=null,E=null,_=C,A=st}return}oe=oe||ne,Ce=Ce||V,rt=rt||se,(ne!==v||oe!==x)&&(s.blendEquationSeparate(we[ne],we[oe]),v=ne,x=oe),(V!==m||se!==g||Ce!==w||rt!==E)&&(s.blendFuncSeparate(de[V],de[se],de[Ce],de[rt]),m=V,g=se,w=Ce,E=rt),_=C,A=null}function W(C,ne){C.side===$n?Se(2884):Ee(2884);let V=C.side===Ze;ne&&(V=!V),q(V),C.blending===bi&&C.transparent===!1?Ae(sn):Ae(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),u.setFunc(C.depthFunc),u.setTest(C.depthTest),u.setMask(C.depthWrite),l.setMask(C.colorWrite);const se=C.stencilWrite;h.setTest(se),se&&(h.setMask(C.stencilWriteMask),h.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),h.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),te(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ee(32926):Se(32926)}function q(C){b!==C&&(C?s.frontFace(2304):s.frontFace(2305),b=C)}function $(C){C!==Ql?(Ee(2884),C!==O&&(C===pa?s.cullFace(1029):C===$l?s.cullFace(1028):s.cullFace(1032))):Se(2884),O=C}function ue(C){C!==I&&(U&&s.lineWidth(C),I=C)}function te(C,ne,V){C?(Ee(32823),(H!==ne||N!==V)&&(s.polygonOffset(ne,V),H=ne,N=V)):Se(32823)}function S(C){C?Ee(3089):Se(3089)}function M(C){C===void 0&&(C=33984+re-1),L!==C&&(s.activeTexture(C),L=C)}function k(C,ne){L===null&&M();let V=D[L];V===void 0&&(V={type:void 0,texture:void 0},D[L]=V),(V.type!==C||V.texture!==ne)&&(s.bindTexture(C,ne||pe[C]),V.type=C,V.texture=ne)}function X(){const C=D[L];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ie(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(C){Q.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),Q.copy(C))}function xe(C){K.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),K.copy(C))}function le(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},L=null,D={},o=null,c={},d=null,p=!1,_=null,v=null,m=null,g=null,x=null,w=null,E=null,A=!1,b=null,O=null,I=null,H=null,N=null,Q.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:Ee,disable:Se,bindFramebuffer:He,bindXRFramebuffer:G,useProgram:Pe,setBlending:Ae,setMaterial:W,setFlipSided:q,setCullFace:$,setLineWidth:ue,setPolygonOffset:te,setScissorTest:S,activeTexture:M,bindTexture:k,unbindTexture:X,compressedTexImage2D:ie,texImage2D:ae,texImage3D:_e,scissor:fe,viewport:xe,reset:le}}function fm(s,e,t,n,i,r,a){const l=i.isWebGL2,u=i.maxTextures,h=i.maxCubemapSize,f=i.maxTextureSize,o=i.maxSamples,c=new WeakMap;let d,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,M){return p?new OffscreenCanvas(S,M):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function v(S,M,k,X){let ie=1;if((S.width>X||S.height>X)&&(ie=X/Math.max(S.width,S.height)),ie<1||M===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ae=M?jo:Math.floor,_e=ae(ie*S.width),fe=ae(ie*S.height);d===void 0&&(d=_(_e,fe));const xe=k?_(_e,fe):d;return xe.width=_e,xe.height=fe,xe.getContext("2d").drawImage(S,0,0,_e,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+_e+"x"+fe+")."),xe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return Rs(S.width)&&Rs(S.height)}function g(S){return l?!1:S.wrapS!==gt||S.wrapT!==gt||S.minFilter!==$e&&S.minFilter!==vt}function x(S,M){return S.generateMipmaps&&M&&S.minFilter!==$e&&S.minFilter!==vt}function w(S,M,k,X,ie=1){s.generateMipmap(S);const ae=n.get(M);ae.__maxMipLevel=Math.log2(Math.max(k,X,ie))}function E(S,M,k){if(l===!1)return M;if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let X=M;return M===6403&&(k===5126&&(X=33326),k===5131&&(X=33325),k===5121&&(X=33321)),M===6407&&(k===5126&&(X=34837),k===5131&&(X=34843),k===5121&&(X=32849)),M===6408&&(k===5126&&(X=34836),k===5131&&(X=34842),k===5121&&(X=32856)),(X===33325||X===33326||X===34842||X===34836)&&e.get("EXT_color_buffer_float"),X}function A(S){return S===$e||S===ya||S===Ma?9728:9729}function b(S){const M=S.target;M.removeEventListener("dispose",b),I(M),M.isVideoTexture&&c.delete(M),a.memory.textures--}function O(S){const M=S.target;M.removeEventListener("dispose",O),H(M)}function I(S){const M=n.get(S);M.__webglInit!==void 0&&(s.deleteTexture(M.__webglTexture),n.remove(S))}function H(S){const M=S.texture,k=n.get(S),X=n.get(M);if(S){if(X.__webglTexture!==void 0&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)s.deleteFramebuffer(k.__webglFramebuffer[ie]),k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[ie]);else s.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer&&s.deleteRenderbuffer(k.__webglColorRenderbuffer),k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer);if(S.isWebGLMultipleRenderTargets)for(let ie=0,ae=M.length;ie<ae;ie++){const _e=n.get(M[ie]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(M[ie])}n.remove(M),n.remove(S)}}let N=0;function re(){N=0}function U(){const S=N;return S>=u&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+u),N+=1,S}function R(S,M){const k=n.get(S);if(S.isVideoTexture&&W(S),S.version>0&&k.__version!==S.version){const X=S.image;if(X===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(k,S,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,k.__webglTexture)}function B(S,M){const k=n.get(S);if(S.version>0&&k.__version!==S.version){ve(k,S,M);return}t.activeTexture(33984+M),t.bindTexture(35866,k.__webglTexture)}function L(S,M){const k=n.get(S);if(S.version>0&&k.__version!==S.version){ve(k,S,M);return}t.activeTexture(33984+M),t.bindTexture(32879,k.__webglTexture)}function D(S,M){const k=n.get(S);if(S.version>0&&k.__version!==S.version){pe(k,S,M);return}t.activeTexture(33984+M),t.bindTexture(34067,k.__webglTexture)}const j={[Ls]:10497,[gt]:33071,[Cs]:33648},J={[$e]:9728,[ya]:9984,[Ma]:9986,[vt]:9729,[Ec]:9985,[Ir]:9987};function Q(S,M,k){if(k?(s.texParameteri(S,10242,j[M.wrapS]),s.texParameteri(S,10243,j[M.wrapT]),(S===32879||S===35866)&&s.texParameteri(S,32882,j[M.wrapR]),s.texParameteri(S,10240,J[M.magFilter]),s.texParameteri(S,10241,J[M.minFilter])):(s.texParameteri(S,10242,33071),s.texParameteri(S,10243,33071),(S===32879||S===35866)&&s.texParameteri(S,32882,33071),(M.wrapS!==gt||M.wrapT!==gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(S,10240,A(M.magFilter)),s.texParameteri(S,10241,A(M.minFilter)),M.minFilter!==$e&&M.minFilter!==vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const X=e.get("EXT_texture_filter_anisotropic");if(M.type===gn&&e.has("OES_texture_float_linear")===!1||l===!1&&M.type===Zn&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(S,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function K(S,M){S.__webglInit===void 0&&(S.__webglInit=!0,M.addEventListener("dispose",b),S.__webglTexture=s.createTexture(),a.memory.textures++)}function ve(S,M,k){let X=3553;M.isDataTexture2DArray&&(X=35866),M.isDataTexture3D&&(X=32879),K(S,M),t.activeTexture(33984+k),t.bindTexture(X,S.__webglTexture),s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);const ie=g(M)&&m(M.image)===!1,ae=v(M.image,ie,!1,f),_e=m(ae)||l,fe=r.convert(M.format);let xe=r.convert(M.type),le=E(M.internalFormat,fe,xe);Q(X,M,_e);let C;const ne=M.mipmaps;if(M.isDepthTexture)le=6402,l?M.type===gn?le=36012:M.type===xr?le=33190:M.type===Si?le=35056:le=33189:M.type===gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===jn&&le===6402&&M.type!==yr&&M.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=yr,xe=r.convert(M.type)),M.format===Ri&&le===6402&&(le=34041,M.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Si,xe=r.convert(M.type))),t.texImage2D(3553,0,le,ae.width,ae.height,0,fe,xe,null);else if(M.isDataTexture)if(ne.length>0&&_e){for(let V=0,se=ne.length;V<se;V++)C=ne[V],t.texImage2D(3553,V,le,C.width,C.height,0,fe,xe,C.data);M.generateMipmaps=!1,S.__maxMipLevel=ne.length-1}else t.texImage2D(3553,0,le,ae.width,ae.height,0,fe,xe,ae.data),S.__maxMipLevel=0;else if(M.isCompressedTexture){for(let V=0,se=ne.length;V<se;V++)C=ne[V],M.format!==Tt&&M.format!==vn?fe!==null?t.compressedTexImage2D(3553,V,le,C.width,C.height,0,C.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,V,le,C.width,C.height,0,fe,xe,C.data);S.__maxMipLevel=ne.length-1}else if(M.isDataTexture2DArray)t.texImage3D(35866,0,le,ae.width,ae.height,ae.depth,0,fe,xe,ae.data),S.__maxMipLevel=0;else if(M.isDataTexture3D)t.texImage3D(32879,0,le,ae.width,ae.height,ae.depth,0,fe,xe,ae.data),S.__maxMipLevel=0;else if(ne.length>0&&_e){for(let V=0,se=ne.length;V<se;V++)C=ne[V],t.texImage2D(3553,V,le,fe,xe,C);M.generateMipmaps=!1,S.__maxMipLevel=ne.length-1}else t.texImage2D(3553,0,le,fe,xe,ae),S.__maxMipLevel=0;x(M,_e)&&w(X,M,ae.width,ae.height),S.__version=M.version,M.onUpdate&&M.onUpdate(M)}function pe(S,M,k){if(M.image.length!==6)return;K(S,M),t.activeTexture(33984+k),t.bindTexture(34067,S.__webglTexture),s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);const X=M&&(M.isCompressedTexture||M.image[0].isCompressedTexture),ie=M.image[0]&&M.image[0].isDataTexture,ae=[];for(let V=0;V<6;V++)!X&&!ie?ae[V]=v(M.image[V],!1,!0,h):ae[V]=ie?M.image[V].image:M.image[V];const _e=ae[0],fe=m(_e)||l,xe=r.convert(M.format),le=r.convert(M.type),C=E(M.internalFormat,xe,le);Q(34067,M,fe);let ne;if(X){for(let V=0;V<6;V++){ne=ae[V].mipmaps;for(let se=0;se<ne.length;se++){const oe=ne[se];M.format!==Tt&&M.format!==vn?xe!==null?t.compressedTexImage2D(34069+V,se,C,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+V,se,C,oe.width,oe.height,0,xe,le,oe.data)}}S.__maxMipLevel=ne.length-1}else{ne=M.mipmaps;for(let V=0;V<6;V++)if(ie){t.texImage2D(34069+V,0,C,ae[V].width,ae[V].height,0,xe,le,ae[V].data);for(let se=0;se<ne.length;se++){const Ce=ne[se].image[V].image;t.texImage2D(34069+V,se+1,C,Ce.width,Ce.height,0,xe,le,Ce.data)}}else{t.texImage2D(34069+V,0,C,xe,le,ae[V]);for(let se=0;se<ne.length;se++){const oe=ne[se];t.texImage2D(34069+V,se+1,C,xe,le,oe.image[V])}}S.__maxMipLevel=ne.length}x(M,fe)&&w(34067,M,_e.width,_e.height),S.__version=M.version,M.onUpdate&&M.onUpdate(M)}function Ee(S,M,k,X,ie){const ae=r.convert(k.format),_e=r.convert(k.type),fe=E(k.internalFormat,ae,_e);ie===32879||ie===35866?t.texImage3D(ie,0,fe,M.width,M.height,M.depth,0,ae,_e,null):t.texImage2D(ie,0,fe,M.width,M.height,0,ae,_e,null),t.bindFramebuffer(36160,S),s.framebufferTexture2D(36160,X,ie,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function Se(S,M,k){if(s.bindRenderbuffer(36161,S),M.depthBuffer&&!M.stencilBuffer){let X=33189;if(k){const ie=M.depthTexture;ie&&ie.isDepthTexture&&(ie.type===gn?X=36012:ie.type===xr&&(X=33190));const ae=Ae(M);s.renderbufferStorageMultisample(36161,ae,X,M.width,M.height)}else s.renderbufferStorage(36161,X,M.width,M.height);s.framebufferRenderbuffer(36160,36096,36161,S)}else if(M.depthBuffer&&M.stencilBuffer){if(k){const X=Ae(M);s.renderbufferStorageMultisample(36161,X,35056,M.width,M.height)}else s.renderbufferStorage(36161,34041,M.width,M.height);s.framebufferRenderbuffer(36160,33306,36161,S)}else{const X=M.isWebGLMultipleRenderTargets===!0?M.texture[0]:M.texture,ie=r.convert(X.format),ae=r.convert(X.type),_e=E(X.internalFormat,ie,ae);if(k){const fe=Ae(M);s.renderbufferStorageMultisample(36161,fe,_e,M.width,M.height)}else s.renderbufferStorage(36161,_e,M.width,M.height)}s.bindRenderbuffer(36161,null)}function G(S,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),R(M.depthTexture,0);const X=n.get(M.depthTexture).__webglTexture;if(M.depthTexture.format===jn)s.framebufferTexture2D(36160,36096,3553,X,0);else if(M.depthTexture.format===Ri)s.framebufferTexture2D(36160,33306,3553,X,0);else throw new Error("Unknown depthTexture format")}function He(S){const M=n.get(S),k=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture){if(k)throw new Error("target.depthTexture not supported in Cube render targets");G(M.__webglFramebuffer,S)}else if(k){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(36160,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]=s.createRenderbuffer(),Se(M.__webglDepthbuffer[X],S,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),Se(M.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function Pe(S){const M=S.texture,k=n.get(S),X=n.get(M);S.addEventListener("dispose",O),S.isWebGLMultipleRenderTargets!==!0&&(X.__webglTexture=s.createTexture(),X.__version=M.version,a.memory.textures++);const ie=S.isWebGLCubeRenderTarget===!0,ae=S.isWebGLMultipleRenderTargets===!0,_e=S.isWebGLMultisampleRenderTarget===!0,fe=M.isDataTexture3D||M.isDataTexture2DArray,xe=m(S)||l;if(l&&M.format===vn&&(M.type===gn||M.type===Zn)&&(M.format=Tt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),ie){k.__webglFramebuffer=[];for(let le=0;le<6;le++)k.__webglFramebuffer[le]=s.createFramebuffer()}else if(k.__webglFramebuffer=s.createFramebuffer(),ae)if(i.drawBuffers){const le=S.texture;for(let C=0,ne=le.length;C<ne;C++){const V=n.get(le[C]);V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(_e)if(l){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,k.__webglColorRenderbuffer);const le=r.convert(M.format),C=r.convert(M.type),ne=E(M.internalFormat,le,C),V=Ae(S);s.renderbufferStorageMultisample(36161,V,ne,S.width,S.height),t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,k.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),S.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Se(k.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(ie){t.bindTexture(34067,X.__webglTexture),Q(34067,M,xe);for(let le=0;le<6;le++)Ee(k.__webglFramebuffer[le],S,M,36064,34069+le);x(M,xe)&&w(34067,M,S.width,S.height),t.bindTexture(34067,null)}else if(ae){const le=S.texture;for(let C=0,ne=le.length;C<ne;C++){const V=le[C],se=n.get(V);t.bindTexture(3553,se.__webglTexture),Q(3553,V,xe),Ee(k.__webglFramebuffer,S,V,36064+C,3553),x(V,xe)&&w(3553,V,S.width,S.height)}t.bindTexture(3553,null)}else{let le=3553;fe&&(l?le=M.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(le,X.__webglTexture),Q(le,M,xe),Ee(k.__webglFramebuffer,S,M,36064,le),x(M,xe)&&w(le,M,S.width,S.height,S.depth),t.bindTexture(le,null)}S.depthBuffer&&He(S)}function we(S){const M=m(S)||l,k=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let X=0,ie=k.length;X<ie;X++){const ae=k[X];if(x(ae,M)){const _e=S.isWebGLCubeRenderTarget?34067:3553,fe=n.get(ae).__webglTexture;t.bindTexture(_e,fe),w(_e,ae,S.width,S.height),t.bindTexture(_e,null)}}}function de(S){if(S.isWebGLMultisampleRenderTarget)if(l){const M=S.width,k=S.height;let X=16384;S.depthBuffer&&(X|=256),S.stencilBuffer&&(X|=1024);const ie=n.get(S);t.bindFramebuffer(36008,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ie.__webglFramebuffer),s.blitFramebuffer(0,0,M,k,0,0,M,k,X,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,ie.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Ae(S){return l&&S.isWebGLMultisampleRenderTarget?Math.min(o,S.samples):0}function W(S){const M=a.render.frame;c.get(S)!==M&&(c.set(S,M),S.update())}let q=!1,$=!1;function ue(S,M){S&&S.isWebGLRenderTarget&&(q===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),q=!0),S=S.texture),R(S,M)}function te(S,M){S&&S.isWebGLCubeRenderTarget&&($===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),$=!0),S=S.texture),D(S,M)}this.allocateTextureUnit=U,this.resetTextureUnits=re,this.setTexture2D=R,this.setTexture2DArray=B,this.setTexture3D=L,this.setTextureCube=D,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=de,this.safeSetTexture2D=ue,this.safeSetTextureCube=te}function pm(s,e,t){const n=t.isWebGL2;function i(r){let a;if(r===Kn)return 5121;if(r===Rc)return 32819;if(r===Pc)return 32820;if(r===Ic)return 33635;if(r===Ac)return 5120;if(r===Lc)return 5122;if(r===yr)return 5123;if(r===Cc)return 5124;if(r===xr)return 5125;if(r===gn)return 5126;if(r===Zn)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Dc)return 6406;if(r===vn)return 6407;if(r===Tt)return 6408;if(r===Fc)return 6409;if(r===Nc)return 6410;if(r===jn)return 6402;if(r===Ri)return 34041;if(r===zc)return 6403;if(r===Oc)return 36244;if(r===Uc)return 33319;if(r===kc)return 33320;if(r===Hc)return 36248;if(r===Gc)return 36249;if(r===wa||r===ba||r===Sa||r===Ta)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===wa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ba)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ta)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ea||r===Aa||r===La||r===Ca)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ea)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Aa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===La)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ca)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===Ra||r===Pa)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(r===Ra)return a.COMPRESSED_RGB8_ETC2;if(r===Pa)return a.COMPRESSED_RGBA8_ETC2_EAC}if(r===Wc||r===Xc||r===qc||r===Yc||r===Zc||r===jc||r===Jc||r===Qc||r===$c||r===Kc||r===eu||r===tu||r===nu||r===iu||r===su||r===au||r===ou||r===lu||r===cu||r===uu||r===hu||r===du||r===fu||r===pu||r===mu||r===gu||r===_u||r===vu)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?r:null;if(r===ru)return a=e.get("EXT_texture_compression_bptc"),a!==null?r:null;if(r===Si)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class vl extends ct{constructor(e=[]){super(),this.cameras=e}}vl.prototype.isArrayCamera=!0;class wi extends De{constructor(){super(),this.type="Group"}}wi.prototype.isGroup=!0;const mm={type:"move"};class _s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const l=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(l!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(mm))),h&&e.hand){a=!0;for(const _ of e.hand.values()){const v=t.getJointPose(_,n);if(h.joints[_.jointName]===void 0){const g=new wi;g.matrixAutoUpdate=!1,g.visible=!1,h.joints[_.jointName]=g,h.add(g)}const m=h.joints[_.jointName];v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=v.radius),m.visible=v!==null}const f=h.joints["index-finger-tip"],o=h.joints["thumb-tip"],c=f.position.distanceTo(o.position),d=.02,p=.005;h.inputState.pinching&&c>d+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&c<=d-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1));return l!==null&&(l.visible=i!==null),u!==null&&(u.visible=r!==null),h!==null&&(h.visible=a!==null),this}}class gm extends yn{constructor(e,t){super();const n=this,i=e.state;let r=null,a=1,l=null,u="local-floor",h=null,f=null,o=null,c=null,d=null;const p=[],_=new Map,v=new ct;v.layers.enable(1),v.viewport=new Be;const m=new ct;m.layers.enable(2),m.viewport=new Be;const g=[v,m],x=new vl;x.layers.enable(1),x.layers.enable(2);let w=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let D=p[L];return D===void 0&&(D=new _s,p[L]=D),D.getTargetRaySpace()},this.getControllerGrip=function(L){let D=p[L];return D===void 0&&(D=new _s,p[L]=D),D.getGripSpace()},this.getHand=function(L){let D=p[L];return D===void 0&&(D=new _s,p[L]=D),D.getHandSpace()};function A(L){const D=_.get(L.inputSource);D&&D.dispatchEvent({type:L.type,data:L.inputSource})}function b(){_.forEach(function(L,D){L.disconnect(D)}),_.clear(),w=null,E=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),B.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){u=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",b),r.addEventListener("inputsourceschange",O);const D=t.getContextAttributes();if(D.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0){const j={antialias:D.antialias,alpha:D.alpha,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:d})}else{let j=0;if(D.antialias){const J={antialias:!0,alpha:D.alpha,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,J),r.updateRenderState({layers:[d]})}else{D.depth&&(j=D.stencil?34041:6402);const J={colorFormat:D.alpha?6408:6407,depthFormat:j,scaleFactor:a};f=new XRWebGLBinding(r,t),c=f.createProjectionLayer(J),o=t.createFramebuffer(),r.updateRenderState({layers:[c]})}}l=await r.requestReferenceSpace(u),B.setContext(r),B.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(L){const D=r.inputSources;for(let j=0;j<p.length;j++)_.set(D[j],p[j]);for(let j=0;j<L.removed.length;j++){const J=L.removed[j],Q=_.get(J);Q&&(Q.dispatchEvent({type:"disconnected",data:J}),_.delete(J))}for(let j=0;j<L.added.length;j++){const J=L.added[j],Q=_.get(J);Q&&Q.dispatchEvent({type:"connected",data:J})}}const I=new T,H=new T;function N(L,D,j){I.setFromMatrixPosition(D.matrixWorld),H.setFromMatrixPosition(j.matrixWorld);const J=I.distanceTo(H),Q=D.projectionMatrix.elements,K=j.projectionMatrix.elements,ve=Q[14]/(Q[10]-1),pe=Q[14]/(Q[10]+1),Ee=(Q[9]+1)/Q[5],Se=(Q[9]-1)/Q[5],G=(Q[8]-1)/Q[0],He=(K[8]+1)/K[0],Pe=ve*G,we=ve*He,de=J/(-G+He),Ae=de*-G;D.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Ae),L.translateZ(de),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const W=ve+de,q=pe+de,$=Pe-Ae,ue=we+(J-Ae),te=Ee*pe/q*W,S=Se*pe/q*W;L.projectionMatrix.makePerspective($,ue,te,S,W,q)}function re(L,D){D===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(D.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;x.near=m.near=v.near=L.near,x.far=m.far=v.far=L.far,(w!==x.near||E!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,E=x.far);const D=L.parent,j=x.cameras;re(x,D);for(let Q=0;Q<j.length;Q++)re(j[Q],D);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),L.position.copy(x.position),L.quaternion.copy(x.quaternion),L.scale.copy(x.scale),L.matrix.copy(x.matrix),L.matrixWorld.copy(x.matrixWorld);const J=L.children;for(let Q=0,K=J.length;Q<K;Q++)J[Q].updateMatrixWorld(!0);j.length===2?N(x,v,m):x.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(c!==null)return c.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(L){c!==null&&(c.fixedFoveation=L),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=L)};let U=null;function R(L,D){if(h=D.getViewerPose(l),h!==null){const J=h.views;d!==null&&i.bindXRFramebuffer(d.framebuffer);let Q=!1;J.length!==x.cameras.length&&(x.cameras.length=0,Q=!0);for(let K=0;K<J.length;K++){const ve=J[K];let pe=null;if(d!==null)pe=d.getViewport(ve);else{const Se=f.getViewSubImage(c,ve);i.bindXRFramebuffer(o),Se.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,36096,3553,Se.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,Se.colorTexture,0),pe=Se.viewport}const Ee=g[K];Ee.matrix.fromArray(ve.transform.matrix),Ee.projectionMatrix.fromArray(ve.projectionMatrix),Ee.viewport.set(pe.x,pe.y,pe.width,pe.height),K===0&&x.matrix.copy(Ee.matrix),Q===!0&&x.cameras.push(Ee)}}const j=r.inputSources;for(let J=0;J<p.length;J++){const Q=p[J],K=j[J];Q.update(K,D,l)}U&&U(L,D)}const B=new il;B.setAnimationLoop(R),this.setAnimationLoop=function(L){U=L},this.dispose=function(){}}}function _m(s){function e(m,g){m.fogColor.value.copy(g.color),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function t(m,g,x,w,E){g.isMeshBasicMaterial?n(m,g):g.isMeshLambertMaterial?(n(m,g),u(m,g)):g.isMeshToonMaterial?(n(m,g),f(m,g)):g.isMeshPhongMaterial?(n(m,g),h(m,g)):g.isMeshStandardMaterial?(n(m,g),g.isMeshPhysicalMaterial?c(m,g,E):o(m,g)):g.isMeshMatcapMaterial?(n(m,g),d(m,g)):g.isMeshDepthMaterial?(n(m,g),p(m,g)):g.isMeshDistanceMaterial?(n(m,g),_(m,g)):g.isMeshNormalMaterial?(n(m,g),v(m,g)):g.isLineBasicMaterial?(i(m,g),g.isLineDashedMaterial&&r(m,g)):g.isPointsMaterial?a(m,g,x,w):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function n(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap),g.specularMap&&(m.specularMap.value=g.specularMap);const x=s.get(g).envMap;if(x){m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.refractionRatio.value=g.refractionRatio;const A=s.get(x).__maxMipLevel;A!==void 0&&(m.maxMipLevel.value=A)}g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity);let w;g.map?w=g.map:g.specularMap?w=g.specularMap:g.displacementMap?w=g.displacementMap:g.normalMap?w=g.normalMap:g.bumpMap?w=g.bumpMap:g.roughnessMap?w=g.roughnessMap:g.metalnessMap?w=g.metalnessMap:g.alphaMap?w=g.alphaMap:g.emissiveMap?w=g.emissiveMap:g.clearcoatMap?w=g.clearcoatMap:g.clearcoatNormalMap?w=g.clearcoatNormalMap:g.clearcoatRoughnessMap?w=g.clearcoatRoughnessMap:g.specularIntensityMap?w=g.specularIntensityMap:g.specularTintMap&&(w=g.specularTintMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix));let E;g.aoMap?E=g.aoMap:g.lightMap&&(E=g.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uv2Transform.value.copy(E.matrix))}function i(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity}function r(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function a(m,g,x,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=w*.5,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap);let E;g.map?E=g.map:g.alphaMap&&(E=g.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uvTransform.value.copy(E.matrix))}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap);let x;g.map?x=g.map:g.alphaMap&&(x=g.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function u(m,g){g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===Ze&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===Ze&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===Ze&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===Ze&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function o(m,g){m.roughness.value=g.roughness,m.metalness.value=g.metalness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===Ze&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===Ze&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),s.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function c(m,g,x){o(m,g),m.reflectivity.value=g.reflectivity,m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.sheen&&m.sheen.value.copy(g.sheen),g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),m.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===Ze&&m.clearcoatNormalScale.value.negate()),m.transmission.value=g.transmission,g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap),g.transmission>0&&(m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap),m.attenuationDistance.value=g.attenuationDistance,m.attenuationTint.value.copy(g.attenuationTint),m.specularIntensity.value=g.specularIntensity,m.specularTint.value.copy(g.specularTint),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap),g.specularTintMap&&(m.specularTintMap.value=g.specularTintMap)}function d(m,g){g.matcap&&(m.matcap.value=g.matcap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===Ze&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===Ze&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function p(m,g){g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function _(m,g){g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),m.referencePosition.value.copy(g.referencePosition),m.nearDistance.value=g.nearDistance,m.farDistance.value=g.farDistance}function v(m,g){g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===Ze&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===Ze&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function vm(){const s=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return s.style.display="block",s}function Ne(s={}){const e=s.canvas!==void 0?s.canvas:vm(),t=s.context!==void 0?s.context:null,n=s.alpha!==void 0?s.alpha:!1,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,a=s.antialias!==void 0?s.antialias:!1,l=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,u=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,h=s.powerPreference!==void 0?s.powerPreference:"default",f=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let o=null,c=null;const d=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=ft,this.physicallyCorrectLights=!1,this.toneMapping=_n,this.toneMappingExposure=1;const _=this;let v=!1,m=0,g=0,x=null,w=-1,E=null;const A=new Be,b=new Be;let O=null,I=e.width,H=e.height,N=1,re=null,U=null;const R=new Be(0,0,I,H),B=new Be(0,0,I,H);let L=!1;const D=[],j=new Br;let J=!1,Q=!1,K=null;const ve=new me,pe=new T,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return x===null?N:1}let G=t;function He(y,F){for(let P=0;P<y.length;P++){const z=y[P],Y=e.getContext(z,F);if(Y!==null)return Y}return null}try{const y={alpha:n,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if(e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",st,!1),G===null){const F=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&F.shift(),G=He(F,y),G===null)throw He(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Pe,we,de,Ae,W,q,$,ue,te,S,M,k,X,ie,ae,_e,fe,xe,le,C,ne,V,se;function oe(){Pe=new Hf(G),we=new If(G,Pe,s),Pe.init(we),V=new pm(G,Pe,we),de=new dm(G,Pe,we),D[0]=1029,Ae=new Wf,W=new tm,q=new fm(G,Pe,de,W,we,V,Ae),$=new Ff(_),ue=new kf(_),te=new ah(G,we),se=new Rf(G,Pe,te,we),S=new Gf(G,te,Ae,se),M=new Zf(G,S,te,Ae),le=new Yf(G),_e=new Df(W),k=new em(_,$,ue,Pe,we,se,_e),X=new _m(W),ie=new im(W),ae=new cm(Pe,we),xe=new Cf(_,$,de,M,l),fe=new _l(_,M,we),C=new Pf(G,Pe,Ae,we),ne=new Vf(G,Pe,Ae,we),Ae.programs=k.programs,_.capabilities=we,_.extensions=Pe,_.properties=W,_.renderLists=ie,_.shadowMap=fe,_.state=de,_.info=Ae}oe();const Ce=new gm(_,G);this.xr=Ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const y=Pe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Pe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(y){y!==void 0&&(N=y,this.setSize(I,H,!1))},this.getSize=function(y){return y.set(I,H)},this.setSize=function(y,F,P){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=y,H=F,e.width=Math.floor(y*N),e.height=Math.floor(F*N),P!==!1&&(e.style.width=y+"px",e.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(I*N,H*N).floor()},this.setDrawingBufferSize=function(y,F,P){I=y,H=F,N=P,e.width=Math.floor(y*P),e.height=Math.floor(F*P),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(A)},this.getViewport=function(y){return y.copy(R)},this.setViewport=function(y,F,P,z){y.isVector4?R.set(y.x,y.y,y.z,y.w):R.set(y,F,P,z),de.viewport(A.copy(R).multiplyScalar(N).floor())},this.getScissor=function(y){return y.copy(B)},this.setScissor=function(y,F,P,z){y.isVector4?B.set(y.x,y.y,y.z,y.w):B.set(y,F,P,z),de.scissor(b.copy(B).multiplyScalar(N).floor())},this.getScissorTest=function(){return L},this.setScissorTest=function(y){de.setScissorTest(L=y)},this.setOpaqueSort=function(y){re=y},this.setTransparentSort=function(y){U=y},this.getClearColor=function(y){return y.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(y,F,P){let z=0;(y===void 0||y)&&(z|=16384),(F===void 0||F)&&(z|=256),(P===void 0||P)&&(z|=1024),G.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",st,!1),ie.dispose(),ae.dispose(),W.dispose(),$.dispose(),ue.dispose(),M.dispose(),se.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",la),Ce.removeEventListener("sessionend",ca),K&&(K.dispose(),K=null),un.stop()};function rt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const y=Ae.autoReset,F=fe.enabled,P=fe.autoUpdate,z=fe.needsUpdate,Y=fe.type;oe(),Ae.autoReset=y,fe.enabled=F,fe.autoUpdate=P,fe.needsUpdate=z,fe.type=Y}function qt(y){const F=y.target;F.removeEventListener("dispose",qt),We(F)}function We(y){Nt(y),W.remove(y)}function Nt(y){const F=W.get(y).programs;F!==void 0&&F.forEach(function(P){k.releaseProgram(P)})}function Bt(y,F){y.render(function(P){_.renderBufferImmediate(P,F)})}this.renderBufferImmediate=function(y,F){se.initAttributes();const P=W.get(y);y.hasPositions&&!P.position&&(P.position=G.createBuffer()),y.hasNormals&&!P.normal&&(P.normal=G.createBuffer()),y.hasUvs&&!P.uv&&(P.uv=G.createBuffer()),y.hasColors&&!P.color&&(P.color=G.createBuffer());const z=F.getAttributes();y.hasPositions&&(G.bindBuffer(34962,P.position),G.bufferData(34962,y.positionArray,35048),se.enableAttribute(z.position),G.vertexAttribPointer(z.position,3,5126,!1,0,0)),y.hasNormals&&(G.bindBuffer(34962,P.normal),G.bufferData(34962,y.normalArray,35048),se.enableAttribute(z.normal),G.vertexAttribPointer(z.normal,3,5126,!1,0,0)),y.hasUvs&&(G.bindBuffer(34962,P.uv),G.bufferData(34962,y.uvArray,35048),se.enableAttribute(z.uv),G.vertexAttribPointer(z.uv,2,5126,!1,0,0)),y.hasColors&&(G.bindBuffer(34962,P.color),G.bufferData(34962,y.colorArray,35048),se.enableAttribute(z.color),G.vertexAttribPointer(z.color,3,5126,!1,0,0)),se.disableUnusedAttributes(),G.drawArrays(4,0,y.count),y.count=0},this.renderBufferDirect=function(y,F,P,z,Y,Me){F===null&&(F=Ee);const ye=Y.isMesh&&Y.matrixWorld.determinant()<0,he=fa(y,F,z,Y);de.setMaterial(z,ye);let be=P.index;const Ie=P.attributes.position;if(be===null){if(Ie===void 0||Ie.count===0)return}else if(be.count===0)return;let Te=1;z.wireframe===!0&&(be=S.getWireframeAttribute(P),Te=2),(P.morphAttributes.position!==void 0||P.morphAttributes.normal!==void 0)&&le.update(Y,P,z,he),se.setup(Y,z,he,P,be);let Re,ge=C;be!==null&&(Re=te.get(be),ge=ne,ge.setIndex(Re));const zt=be!==null?be.count:Ie.count,Ge=P.drawRange.start*Te,Yt=P.drawRange.count*Te,yt=Me!==null?Me.start*Te:0,hn=Me!==null?Me.count*Te:1/0,Zt=Math.max(Ge,yt),Je=Math.min(zt,Ge+Yt,yt+hn)-1,Lt=Math.max(0,Je-Zt+1);if(Lt!==0){if(Y.isMesh)z.wireframe===!0?(de.setLineWidth(z.wireframeLinewidth*Se()),ge.setMode(1)):ge.setMode(4);else if(Y.isLine){let Ke=z.linewidth;Ke===void 0&&(Ke=1),de.setLineWidth(Ke*Se()),Y.isLineSegments?ge.setMode(1):Y.isLineLoop?ge.setMode(2):ge.setMode(3)}else Y.isPoints?ge.setMode(0):Y.isSprite&&ge.setMode(4);if(Y.isInstancedMesh)ge.renderInstances(Zt,Lt,Y.count);else if(P.isInstancedBufferGeometry){const Ke=Math.min(P.instanceCount,P._maxInstanceCount);ge.renderInstances(Zt,Lt,Ke)}else ge.render(Zt,Lt)}},this.compile=function(y,F){c=ae.get(y),c.init(),p.push(c),y.traverseVisible(function(P){P.isLight&&P.layers.test(F.layers)&&(c.pushLight(P),P.castShadow&&c.pushShadow(P))}),c.setupLights(),y.traverse(function(P){const z=P.material;if(z)if(Array.isArray(z))for(let Y=0;Y<z.length;Y++){const Me=z[Y];Gr(Me,y,P)}else Gr(z,y,P)}),p.pop(),c=null};let Hr=null;function Xl(y){Hr&&Hr(y)}function la(){un.stop()}function ca(){un.start()}const un=new il;un.setAnimationLoop(Xl),typeof window<"u"&&un.setContext(window),this.setAnimationLoop=function(y){Hr=y,Ce.setAnimationLoop(y),y===null?un.stop():un.start()},Ce.addEventListener("sessionstart",la),Ce.addEventListener("sessionend",ca),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;y.autoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(F),F=Ce.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,F,x),c=ae.get(y,p.length),c.init(),p.push(c),ve.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(ve),Q=this.localClippingEnabled,J=_e.init(this.clippingPlanes,Q,F),o=ie.get(y,d.length),o.init(),d.push(o),ua(y,F,0,_.sortObjects),o.finish(),_.sortObjects===!0&&o.sort(re,U),J===!0&&_e.beginShadows();const P=c.state.shadowsArray;fe.render(P,y,F),c.setupLights(),c.setupLightsView(F),J===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),xe.render(o,y);const z=o.opaque,Y=o.transmissive,Me=o.transparent;z.length>0&&ki(z,y,F),Y.length>0&&ql(z,Y,y,F),Me.length>0&&ki(Me,y,F),x!==null&&(q.updateMultisampleRenderTarget(x),q.updateRenderTargetMipmap(x)),y.isScene===!0&&y.onAfterRender(_,y,F),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1),se.resetDefaultState(),w=-1,E=null,p.pop(),p.length>0?c=p[p.length-1]:c=null,d.pop(),d.length>0?o=d[d.length-1]:o=null};function ua(y,F,P,z){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)P=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)c.pushLight(y),y.castShadow&&c.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||j.intersectsSprite(y)){z&&pe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ve);const ye=M.update(y),he=y.material;he.visible&&o.push(y,ye,he,P,pe.z,null)}}else if(y.isImmediateRenderObject)z&&pe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ve),o.push(y,null,y.material,P,pe.z,null);else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==Ae.render.frame&&(y.skeleton.update(),y.skeleton.frame=Ae.render.frame),!y.frustumCulled||j.intersectsObject(y))){z&&pe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ve);const ye=M.update(y),he=y.material;if(Array.isArray(he)){const be=ye.groups;for(let Ie=0,Te=be.length;Ie<Te;Ie++){const Re=be[Ie],ge=he[Re.materialIndex];ge&&ge.visible&&o.push(y,ye,ge,P,pe.z,Re)}}else he.visible&&o.push(y,ye,he,P,pe.z,null)}}const Me=y.children;for(let ye=0,he=Me.length;ye<he;ye++)ua(Me[ye],F,P,z)}function ql(y,F,P,z){if(K===null){const he=a===!0&&we.isWebGL2===!0?Jo:It;K=new he(1024,1024,{generateMipmaps:!0,type:V.convert(Zn)!==null?Zn:Kn,minFilter:Ir,magFilter:$e,wrapS:gt,wrapT:gt})}const Y=_.getRenderTarget();_.setRenderTarget(K),_.clear();const Me=_.toneMapping;_.toneMapping=_n,ki(y,P,z),_.toneMapping=Me,q.updateMultisampleRenderTarget(K),q.updateRenderTargetMipmap(K),_.setRenderTarget(Y),ki(F,P,z)}function ki(y,F,P){const z=F.isScene===!0?F.overrideMaterial:null;if(P.isArrayCamera){const Y=P.cameras;for(let Me=0,ye=Y.length;Me<ye;Me++){const he=Y[Me];de.viewport(A.copy(he.viewport)),c.setupLightsView(he);for(let be=0,Ie=y.length;be<Ie;be++){const Te=y[be],Re=Te.object,ge=Te.geometry,zt=z===null?Te.material:z,Ge=Te.group;Re.layers.test(he.layers)&&ha(Re,F,he,ge,zt,Ge)}}}else for(let Y=0,Me=y.length;Y<Me;Y++){const ye=y[Y],he=ye.object,be=ye.geometry,Ie=z===null?ye.material:z,Te=ye.group;ha(he,F,P,be,Ie,Te)}}function ha(y,F,P,z,Y,Me){if(y.onBeforeRender(_,F,P,z,Y,Me),y.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),y.isImmediateRenderObject){const ye=fa(P,F,Y,y);de.setMaterial(Y),se.reset(),Bt(y,ye)}else Y.transparent===!0&&Y.side===$n?(Y.side=Ze,Y.needsUpdate=!0,_.renderBufferDirect(P,F,z,Y,y,Me),Y.side=Ci,Y.needsUpdate=!0,_.renderBufferDirect(P,F,z,Y,y,Me),Y.side=$n):_.renderBufferDirect(P,F,z,Y,y,Me);y.onAfterRender(_,F,P,z,Y,Me)}function Gr(y,F,P){F.isScene!==!0&&(F=Ee);const z=W.get(y),Y=c.state.lights,Me=c.state.shadowsArray,ye=Y.state.version,he=k.getParameters(y,Y.state,Me,F,P),be=k.getProgramCacheKey(he);let Ie=z.programs;z.environment=y.isMeshStandardMaterial?F.environment:null,z.fog=F.fog,z.envMap=(y.isMeshStandardMaterial?ue:$).get(y.envMap||z.environment),Ie===void 0&&(y.addEventListener("dispose",qt),Ie=new Map,z.programs=Ie);let Te=Ie.get(be);if(Te!==void 0){if(z.currentProgram===Te&&z.lightsStateVersion===ye)return da(y,he),Te}else he.uniforms=k.getUniforms(y),y.onBuild(he,_),y.onBeforeCompile(he,_),Te=k.acquireProgram(he,be),Ie.set(be,Te),z.uniforms=he.uniforms;const Re=z.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Re.clippingPlanes=_e.uniform),da(y,he),z.needsLights=Zl(y),z.lightsStateVersion=ye,z.needsLights&&(Re.ambientLightColor.value=Y.state.ambient,Re.lightProbe.value=Y.state.probe,Re.directionalLights.value=Y.state.directional,Re.directionalLightShadows.value=Y.state.directionalShadow,Re.spotLights.value=Y.state.spot,Re.spotLightShadows.value=Y.state.spotShadow,Re.rectAreaLights.value=Y.state.rectArea,Re.ltc_1.value=Y.state.rectAreaLTC1,Re.ltc_2.value=Y.state.rectAreaLTC2,Re.pointLights.value=Y.state.point,Re.pointLightShadows.value=Y.state.pointShadow,Re.hemisphereLights.value=Y.state.hemi,Re.directionalShadowMap.value=Y.state.directionalShadowMap,Re.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Re.spotShadowMap.value=Y.state.spotShadowMap,Re.spotShadowMatrix.value=Y.state.spotShadowMatrix,Re.pointShadowMap.value=Y.state.pointShadowMap,Re.pointShadowMatrix.value=Y.state.pointShadowMatrix);const ge=Te.getUniforms(),zt=on.seqWithValue(ge.seq,Re);return z.currentProgram=Te,z.uniformsList=zt,Te}function da(y,F){const P=W.get(y);P.outputEncoding=F.outputEncoding,P.instancing=F.instancing,P.skinning=F.skinning,P.morphTargets=F.morphTargets,P.morphNormals=F.morphNormals,P.numClippingPlanes=F.numClippingPlanes,P.numIntersection=F.numClipIntersection,P.vertexAlphas=F.vertexAlphas,P.vertexTangents=F.vertexTangents}function fa(y,F,P,z){F.isScene!==!0&&(F=Ee),q.resetTextureUnits();const Y=F.fog,Me=P.isMeshStandardMaterial?F.environment:null,ye=x===null?_.outputEncoding:x.texture.encoding,he=(P.isMeshStandardMaterial?ue:$).get(P.envMap||Me),be=P.vertexColors===!0&&!!z.geometry&&!!z.geometry.attributes.color&&z.geometry.attributes.color.itemSize===4,Ie=!!z.geometry&&!!z.geometry.attributes.tangent,Te=!!z.geometry&&!!z.geometry.morphAttributes.position,Re=!!z.geometry&&!!z.geometry.morphAttributes.normal,ge=W.get(P),zt=c.state.lights;if(J===!0&&(Q===!0||y!==E)){const Ke=y===E&&P.id===w;_e.setState(P,y,Ke)}let Ge=!1;P.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==zt.state.version||ge.outputEncoding!==ye||z.isInstancedMesh&&ge.instancing===!1||!z.isInstancedMesh&&ge.instancing===!0||z.isSkinnedMesh&&ge.skinning===!1||!z.isSkinnedMesh&&ge.skinning===!0||ge.envMap!==he||P.fog&&ge.fog!==Y||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==_e.numPlanes||ge.numIntersection!==_e.numIntersection)||ge.vertexAlphas!==be||ge.vertexTangents!==Ie||ge.morphTargets!==Te||ge.morphNormals!==Re)&&(Ge=!0):(Ge=!0,ge.__version=P.version);let Yt=ge.currentProgram;Ge===!0&&(Yt=Gr(P,F,z));let yt=!1,hn=!1,Zt=!1;const Je=Yt.getUniforms(),Lt=ge.uniforms;if(de.useProgram(Yt.program)&&(yt=!0,hn=!0,Zt=!0),P.id!==w&&(w=P.id,hn=!0),yt||E!==y){if(Je.setValue(G,"projectionMatrix",y.projectionMatrix),we.logarithmicDepthBuffer&&Je.setValue(G,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),E!==y&&(E=y,hn=!0,Zt=!0),P.isShaderMaterial||P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshStandardMaterial||P.envMap){const Ke=Je.map.cameraPosition;Ke!==void 0&&Ke.setValue(G,pe.setFromMatrixPosition(y.matrixWorld))}(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&Je.setValue(G,"isOrthographic",y.isOrthographicCamera===!0),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial||P.isShadowMaterial||z.isSkinnedMesh)&&Je.setValue(G,"viewMatrix",y.matrixWorldInverse)}if(z.isSkinnedMesh){Je.setOptional(G,z,"bindMatrix"),Je.setOptional(G,z,"bindMatrixInverse");const Ke=z.skeleton;Ke&&(we.floatVertexTextures?(Ke.boneTexture===null&&Ke.computeBoneTexture(),Je.setValue(G,"boneTexture",Ke.boneTexture,q),Je.setValue(G,"boneTextureSize",Ke.boneTextureSize)):Je.setOptional(G,Ke,"boneMatrices"))}return(hn||ge.receiveShadow!==z.receiveShadow)&&(ge.receiveShadow=z.receiveShadow,Je.setValue(G,"receiveShadow",z.receiveShadow)),hn&&(Je.setValue(G,"toneMappingExposure",_.toneMappingExposure),ge.needsLights&&Yl(Lt,Zt),Y&&P.fog&&X.refreshFogUniforms(Lt,Y),X.refreshMaterialUniforms(Lt,P,N,H,K),on.upload(G,ge.uniformsList,Lt,q)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(on.upload(G,ge.uniformsList,Lt,q),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&Je.setValue(G,"center",z.center),Je.setValue(G,"modelViewMatrix",z.modelViewMatrix),Je.setValue(G,"normalMatrix",z.normalMatrix),Je.setValue(G,"modelMatrix",z.matrixWorld),Yt}function Yl(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Zl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return x},this.setRenderTarget=function(y,F=0,P=0){x=y,m=F,g=P,y&&W.get(y).__webglFramebuffer===void 0&&q.setupRenderTarget(y);let z=null,Y=!1,Me=!1;if(y){const he=y.texture;(he.isDataTexture3D||he.isDataTexture2DArray)&&(Me=!0);const be=W.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(z=be[F],Y=!0):y.isWebGLMultisampleRenderTarget?z=W.get(y).__webglMultisampledFramebuffer:z=be,A.copy(y.viewport),b.copy(y.scissor),O=y.scissorTest}else A.copy(R).multiplyScalar(N).floor(),b.copy(B).multiplyScalar(N).floor(),O=L;if(de.bindFramebuffer(36160,z)&&we.drawBuffers){let he=!1;if(y)if(y.isWebGLMultipleRenderTargets){const be=y.texture;if(D.length!==be.length||D[0]!==36064){for(let Ie=0,Te=be.length;Ie<Te;Ie++)D[Ie]=36064+Ie;D.length=be.length,he=!0}}else(D.length!==1||D[0]!==36064)&&(D[0]=36064,D.length=1,he=!0);else(D.length!==1||D[0]!==1029)&&(D[0]=1029,D.length=1,he=!0);he&&(we.isWebGL2?G.drawBuffers(D):Pe.get("WEBGL_draw_buffers").drawBuffersWEBGL(D))}if(de.viewport(A),de.scissor(b),de.setScissorTest(O),Y){const he=W.get(y.texture);G.framebufferTexture2D(36160,36064,34069+F,he.__webglTexture,P)}else if(Me){const he=W.get(y.texture),be=F||0;G.framebufferTextureLayer(36160,36064,he.__webglTexture,P||0,be)}},this.readRenderTargetPixels=function(y,F,P,z,Y,Me,ye){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ye!==void 0&&(he=he[ye]),he){de.bindFramebuffer(36160,he);try{const be=y.texture,Ie=be.format,Te=be.type;if(Ie!==Tt&&V.convert(Ie)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Te===Zn&&(Pe.has("EXT_color_buffer_half_float")||we.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(Te!==Kn&&V.convert(Te)!==G.getParameter(35738)&&!(Te===gn&&(we.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G.checkFramebufferStatus(36160)===36053?F>=0&&F<=y.width-z&&P>=0&&P<=y.height-Y&&G.readPixels(F,P,z,Y,V.convert(Ie),V.convert(Te),Me):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const be=x!==null?W.get(x).__webglFramebuffer:null;de.bindFramebuffer(36160,be)}}},this.copyFramebufferToTexture=function(y,F,P=0){const z=Math.pow(2,-P),Y=Math.floor(F.image.width*z),Me=Math.floor(F.image.height*z);let ye=V.convert(F.format);we.isWebGL2&&(ye===6407&&(ye=32849),ye===6408&&(ye=32856)),q.setTexture2D(F,0),G.copyTexImage2D(3553,P,ye,y.x,y.y,Y,Me,0),de.unbindTexture()},this.copyTextureToTexture=function(y,F,P,z=0){const Y=F.image.width,Me=F.image.height,ye=V.convert(P.format),he=V.convert(P.type);q.setTexture2D(P,0),G.pixelStorei(37440,P.flipY),G.pixelStorei(37441,P.premultiplyAlpha),G.pixelStorei(3317,P.unpackAlignment),F.isDataTexture?G.texSubImage2D(3553,z,y.x,y.y,Y,Me,ye,he,F.image.data):F.isCompressedTexture?G.compressedTexSubImage2D(3553,z,y.x,y.y,F.mipmaps[0].width,F.mipmaps[0].height,ye,F.mipmaps[0].data):G.texSubImage2D(3553,z,y.x,y.y,ye,he,F.image),z===0&&P.generateMipmaps&&G.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(y,F,P,z,Y=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=y.max.x-y.min.x+1,ye=y.max.y-y.min.y+1,he=y.max.z-y.min.z+1,be=V.convert(z.format),Ie=V.convert(z.type);let Te;if(z.isDataTexture3D)q.setTexture3D(z,0),Te=32879;else if(z.isDataTexture2DArray)q.setTexture2DArray(z,0),Te=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,z.flipY),G.pixelStorei(37441,z.premultiplyAlpha),G.pixelStorei(3317,z.unpackAlignment);const Re=G.getParameter(3314),ge=G.getParameter(32878),zt=G.getParameter(3316),Ge=G.getParameter(3315),Yt=G.getParameter(32877),yt=P.isCompressedTexture?P.mipmaps[0]:P.image;G.pixelStorei(3314,yt.width),G.pixelStorei(32878,yt.height),G.pixelStorei(3316,y.min.x),G.pixelStorei(3315,y.min.y),G.pixelStorei(32877,y.min.z),P.isDataTexture||P.isDataTexture3D?G.texSubImage3D(Te,Y,F.x,F.y,F.z,Me,ye,he,be,Ie,yt.data):P.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Te,Y,F.x,F.y,F.z,Me,ye,he,be,yt.data)):G.texSubImage3D(Te,Y,F.x,F.y,F.z,Me,ye,he,be,Ie,yt),G.pixelStorei(3314,Re),G.pixelStorei(32878,ge),G.pixelStorei(3316,zt),G.pixelStorei(3315,Ge),G.pixelStorei(32877,Yt),Y===0&&z.generateMipmaps&&G.generateMipmap(Te),de.unbindTexture()},this.initTexture=function(y){q.setTexture2D(y,0),de.unbindTexture()},this.resetState=function(){m=0,g=0,x=null,de.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class xm extends Ne{}xm.prototype.isWebGL1Renderer=!0;class Zs extends De{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Zs.prototype.isScene=!0;class zi{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pi,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Et()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Et()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Et()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}zi.prototype.isInterleavedBuffer=!0;const Xe=new T;class Di{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xe.x=this.getX(t),Xe.y=this.getY(t),Xe.z=this.getZ(t),Xe.applyMatrix4(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xe.x=this.getX(t),Xe.y=this.getY(t),Xe.z=this.getZ(t),Xe.applyNormalMatrix(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xe.x=this.getX(t),Xe.y=this.getY(t),Xe.z=this.getZ(t),Xe.transformDirection(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new qe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Di(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Di.prototype.isInterleavedBufferAttribute=!0;class xl extends lt{constructor(e){super(),this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}xl.prototype.isSpriteMaterial=!0;let kn;const pi=new T,Hn=new T,Gn=new T,Vn=new Z,mi=new Z,yl=new me,or=new T,gi=new T,lr=new T,po=new Z,vs=new Z,mo=new Z;class ym extends De{constructor(e){if(super(),this.type="Sprite",kn===void 0){kn=new ze;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zi(t,5);kn.setIndex([0,1,2,0,2,3]),kn.setAttribute("position",new Di(n,3,0,!1)),kn.setAttribute("uv",new Di(n,2,3,!1))}this.geometry=kn,this.material=e!==void 0?e:new xl,this.center=new Z(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hn.setFromMatrixScale(this.matrixWorld),yl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hn.multiplyScalar(-Gn.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;cr(or.set(-.5,-.5,0),Gn,a,Hn,i,r),cr(gi.set(.5,-.5,0),Gn,a,Hn,i,r),cr(lr.set(.5,.5,0),Gn,a,Hn,i,r),po.set(0,0),vs.set(1,0),mo.set(1,1);let l=e.ray.intersectTriangle(or,gi,lr,!1,pi);if(l===null&&(cr(gi.set(-.5,.5,0),Gn,a,Hn,i,r),vs.set(0,1),l=e.ray.intersectTriangle(or,lr,gi,!1,pi),l===null))return;const u=e.ray.origin.distanceTo(pi);u<e.near||u>e.far||t.push({distance:u,point:pi.clone(),uv:je.getUV(pi,or,gi,lr,po,vs,mo,new Z),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}ym.prototype.isSprite=!0;function cr(s,e,t,n,i,r){Vn.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(mi.x=r*Vn.x-i*Vn.y,mi.y=i*Vn.x+r*Vn.y):mi.copy(Vn),s.copy(e),s.x+=mi.x,s.y+=mi.y,s.applyMatrix4(yl)}const go=new T,_o=new Be,vo=new Be,Mm=new T,xo=new me;class Ml extends nt{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new me,this.bindMatrixInverse=new me}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Be,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;_o.fromBufferAttribute(i.attributes.skinIndex,e),vo.fromBufferAttribute(i.attributes.skinWeight,e),go.fromBufferAttribute(i.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=vo.getComponent(r);if(a!==0){const l=_o.getComponent(r);xo.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(Mm.copy(go).applyMatrix4(xo),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}Ml.prototype.isSkinnedMesh=!0;class wm extends De{constructor(){super(),this.type="Bone"}}wm.prototype.isBone=!0;class bm extends it{constructor(e=null,t=1,n=1,i,r,a,l,u,h=$e,f=$e,o,c){super(null,a,l,u,h,f,i,r,o,c),this.image={data:e,width:t,height:n},this.magFilter=h,this.minFilter=f,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}bm.prototype.isDataTexture=!0;const yo=new me,Mo=new me,ur=[],_i=new nt;class Sm extends nt{constructor(e,t,n){super(e,t),this.instanceMatrix=new qe(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(_i.geometry=this.geometry,_i.material=this.material,_i.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,yo),Mo.multiplyMatrices(n,yo),_i.matrixWorld=Mo,_i.raycast(e,ur);for(let a=0,l=ur.length;a<l;a++){const u=ur[a];u.instanceId=r,u.object=this,t.push(u)}ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qe(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Sm.prototype.isInstancedMesh=!0;class Oi extends lt{constructor(e){super(),this.type="LineBasicMaterial",this.color=new ce(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Oi.prototype.isLineBasicMaterial=!0;const wo=new T,bo=new T,So=new me,xs=new wn,hr=new ii;class js extends De{constructor(e=new ze,t=new Oi){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)wo.fromBufferAttribute(t,i-1),bo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=wo.distanceTo(bo);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(i),hr.radius+=r,e.ray.intersectsSphere(hr)===!1)return;So.copy(i).invert(),xs.copy(e.ray).applyMatrix4(So);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=new T,f=new T,o=new T,c=new T,d=this.isLineSegments?2:1;if(n.isBufferGeometry){const p=n.index,v=n.attributes.position;if(p!==null){const m=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let x=m,w=g-1;x<w;x+=d){const E=p.getX(x),A=p.getX(x+1);if(h.fromBufferAttribute(v,E),f.fromBufferAttribute(v,A),xs.distanceSqToSegment(h,f,c,o)>u)continue;c.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(c);O<e.near||O>e.far||t.push({distance:O,point:o.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),g=Math.min(v.count,a.start+a.count);for(let x=m,w=g-1;x<w;x+=d){if(h.fromBufferAttribute(v,x),f.fromBufferAttribute(v,x+1),xs.distanceSqToSegment(h,f,c,o)>u)continue;c.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(c);A<e.near||A>e.far||t.push({distance:A,point:o.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}js.prototype.isLine=!0;const To=new T,Eo=new T;class Js extends js{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)To.fromBufferAttribute(t,i),Eo.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+To.distanceTo(Eo);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Js.prototype.isLineSegments=!0;class Tm extends js{constructor(e,t){super(e,t),this.type="LineLoop"}}Tm.prototype.isLineLoop=!0;class wl extends lt{constructor(e){super(),this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}wl.prototype.isPointsMaterial=!0;const Ao=new me,Is=new wn,dr=new ii,fr=new T;class Em extends De{constructor(e=new ze,t=new wl){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(i),dr.radius+=r,e.ray.intersectsSphere(dr)===!1)return;Ao.copy(i).invert(),Is.copy(e.ray).applyMatrix4(Ao);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l;if(n.isBufferGeometry){const h=n.index,o=n.attributes.position;if(h!==null){const c=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let p=c,_=d;p<_;p++){const v=h.getX(p);fr.fromBufferAttribute(o,v),Lo(fr,v,u,i,e,t,this)}}else{const c=Math.max(0,a.start),d=Math.min(o.count,a.start+a.count);for(let p=c,_=d;p<_;p++)fr.fromBufferAttribute(o,p),Lo(fr,p,u,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Em.prototype.isPoints=!0;function Lo(s,e,t,n,i,r,a){const l=Is.distanceSqToPoint(s);if(l<t){const u=new T;Is.closestPointToPoint(s,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(l),point:u,index:e,face:null,object:a})}}class Am extends it{constructor(e,t,n,i,r,a,l,u,h){super(e,t,n,i,r,a,l,u,h),this.format=l!==void 0?l:vn,this.minFilter=a!==void 0?a:vt,this.magFilter=r!==void 0?r:vt,this.generateMipmaps=!1;const f=this;function o(){f.needsUpdate=!0,e.requestVideoFrameCallback(o)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(o)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Am.prototype.isVideoTexture=!0;class Lm extends it{constructor(e,t,n,i,r,a,l,u,h,f,o,c){super(null,a,l,u,h,f,i,r,o,c),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Lm.prototype.isCompressedTexture=!0;class Cm extends it{constructor(e,t,n,i,r,a,l,u,h){super(e,t,n,i,r,a,l,u,h),this.needsUpdate=!0}}Cm.prototype.isCanvasTexture=!0;class Rm extends it{constructor(e,t,n,i,r,a,l,u,h,f){if(f=f!==void 0?f:jn,f!==jn&&f!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===jn&&(n=yr),n===void 0&&f===Ri&&(n=Si),super(null,i,r,a,l,u,f,n,h),this.image={width:e,height:t},this.magFilter=l!==void 0?l:$e,this.minFilter=u!==void 0?u:$e,this.flipY=!1,this.generateMipmaps=!1}}Rm.prototype.isDepthTexture=!0;class Qs extends ze{constructor(e=1,t=8,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],l=[],u=[],h=new T,f=new Z;a.push(0,0,0),l.push(0,0,1),u.push(.5,.5);for(let o=0,c=3;o<=t;o++,c+=3){const d=n+o/t*i;h.x=e*Math.cos(d),h.y=e*Math.sin(d),a.push(h.x,h.y,h.z),l.push(0,0,1),f.x=(a[c]/e+1)/2,f.y=(a[c+1]/e+1)/2,u.push(f.x,f.y)}for(let o=1;o<=t;o++)r.push(o,o+1,0);this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(u,2))}static fromJSON(e){return new Qs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class xt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let l=0,u=r-1,h;for(;l<=u;)if(i=Math.floor(l+(u-l)/2),h=n[i]-a,h<0)l=i+1;else if(h>0)u=i-1;else{u=i;break}if(i=u,n[i]===a)return i/(r-1);const f=n[i],c=n[i+1]-f,d=(a-f)/c;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),l=this.getPoint(r),u=t||(a.isVector2?new Z:new T);return u.copy(l).sub(a).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new T,i=[],r=[],a=[],l=new T,u=new me;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new T),i[d].normalize()}r[0]=new T,a[0]=new T;let h=Number.MAX_VALUE;const f=Math.abs(i[0].x),o=Math.abs(i[0].y),c=Math.abs(i[0].z);f<=h&&(h=f,n.set(1,0,0)),o<=h&&(h=o,n.set(0,1,0)),c<=h&&n.set(0,0,1),l.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],l),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),l.crossVectors(i[d-1],i[d]),l.length()>Number.EPSILON){l.normalize();const p=Math.acos(ht(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(u.makeRotationAxis(l,p))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(ht(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(l.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(u.makeRotationAxis(i[p],d*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Or extends xt{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,l=!1,u=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=u}getPoint(e,t){const n=t||new Z,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const l=this.aStartAngle+e*r;let u=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const f=Math.cos(this.aRotation),o=Math.sin(this.aRotation),c=u-this.aX,d=h-this.aY;u=c*f-d*o+this.aX,h=c*o+d*f+this.aY}return n.set(u,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Or.prototype.isEllipseCurve=!0;class bl extends Or{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.type="ArcCurve"}}bl.prototype.isArcCurve=!0;function $s(){let s=0,e=0,t=0,n=0;function i(r,a,l,u){s=r,e=l,t=-3*r+3*a-2*l-u,n=2*r-2*a+l+u}return{initCatmullRom:function(r,a,l,u,h){i(a,l,h*(l-r),h*(u-a))},initNonuniformCatmullRom:function(r,a,l,u,h,f,o){let c=(a-r)/h-(l-r)/(h+f)+(l-a)/f,d=(l-a)/f-(u-a)/(f+o)+(u-l)/o;c*=f,d*=f,i(a,l,c,d)},calc:function(r){const a=r*r,l=a*r;return s+e*r+t*a+n*l}}}const pr=new T,ys=new $s,Ms=new $s,ws=new $s;class Sl extends xt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let l=Math.floor(a),u=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:u===0&&l===r-1&&(l=r-2,u=1);let h,f;this.closed||l>0?h=i[(l-1)%r]:(pr.subVectors(i[0],i[1]).add(i[0]),h=pr);const o=i[l%r],c=i[(l+1)%r];if(this.closed||l+2<r?f=i[(l+2)%r]:(pr.subVectors(i[r-1],i[r-2]).add(i[r-1]),f=pr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(h.distanceToSquared(o),d),_=Math.pow(o.distanceToSquared(c),d),v=Math.pow(c.distanceToSquared(f),d);_<1e-4&&(_=1),p<1e-4&&(p=_),v<1e-4&&(v=_),ys.initNonuniformCatmullRom(h.x,o.x,c.x,f.x,p,_,v),Ms.initNonuniformCatmullRom(h.y,o.y,c.y,f.y,p,_,v),ws.initNonuniformCatmullRom(h.z,o.z,c.z,f.z,p,_,v)}else this.curveType==="catmullrom"&&(ys.initCatmullRom(h.x,o.x,c.x,f.x,this.tension),Ms.initCatmullRom(h.y,o.y,c.y,f.y,this.tension),ws.initCatmullRom(h.z,o.z,c.z,f.z,this.tension));return n.set(ys.calc(u),Ms.calc(u),ws.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Sl.prototype.isCatmullRomCurve3=!0;function Co(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,l=s*s,u=s*l;return(2*t-2*n+r+a)*u+(-3*t+3*n-2*r-a)*l+r*s+t}function Pm(s,e){const t=1-s;return t*t*e}function Im(s,e){return 2*(1-s)*s*e}function Dm(s,e){return s*s*e}function Ai(s,e,t,n){return Pm(s,e)+Im(s,t)+Dm(s,n)}function Fm(s,e){const t=1-s;return t*t*t*e}function Nm(s,e){const t=1-s;return 3*t*t*s*e}function Bm(s,e){return 3*(1-s)*s*s*e}function zm(s,e){return s*s*s*e}function Li(s,e,t,n,i){return Fm(s,e)+Nm(s,t)+Bm(s,n)+zm(s,i)}class Ks extends xt{constructor(e=new Z,t=new Z,n=new Z,i=new Z){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Z){const n=t,i=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(Li(e,i.x,r.x,a.x,l.x),Li(e,i.y,r.y,a.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Ks.prototype.isCubicBezierCurve=!0;class Tl extends xt{constructor(e=new T,t=new T,n=new T,i=new T){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new T){const n=t,i=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(Li(e,i.x,r.x,a.x,l.x),Li(e,i.y,r.y,a.y,l.y),Li(e,i.z,r.z,a.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Tl.prototype.isCubicBezierCurve3=!0;class Ur extends xt{constructor(e=new Z,t=new Z){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new Z;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Ur.prototype.isLineCurve=!0;class Om extends xt{constructor(e=new T,t=new T){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new T){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ea extends xt{constructor(e=new Z,t=new Z,n=new Z){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ai(e,i.x,r.x,a.x),Ai(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ea.prototype.isQuadraticBezierCurve=!0;class El extends xt{constructor(e=new T,t=new T,n=new T){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ai(e,i.x,r.x,a.x),Ai(e,i.y,r.y,a.y),Ai(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}El.prototype.isQuadraticBezierCurve3=!0;class ta extends xt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),l=r-a,u=i[a===0?a:a-1],h=i[a],f=i[a>i.length-2?i.length-1:a+1],o=i[a>i.length-3?i.length-1:a+2];return n.set(Co(l,u.x,h.x,f.x,o.x),Co(l,u.y,h.y,f.y,o.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Z().fromArray(i))}return this}}ta.prototype.isSplineCurve=!0;var Al=Object.freeze({__proto__:null,ArcCurve:bl,CatmullRomCurve3:Sl,CubicBezierCurve:Ks,CubicBezierCurve3:Tl,EllipseCurve:Or,LineCurve:Ur,LineCurve3:Om,QuadraticBezierCurve:ea,QuadraticBezierCurve3:El,SplineCurve:ta});const Um={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Ll(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let l,u,h,f,o,c,d;if(n&&(r=Wm(s,e,r,t)),s.length>80*t){l=h=s[0],u=f=s[1];for(let p=t;p<i;p+=t)o=s[p],c=s[p+1],o<l&&(l=o),c<u&&(u=c),o>h&&(h=o),c>f&&(f=c);d=Math.max(h-l,f-u),d=d!==0?1/d:0}return Fi(r,a,t,l,u,d),a}};function Ll(s,e,t,n,i){let r,a;if(i===tg(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Ro(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Ro(r,s[r],s[r+1],a);return a&&kr(a,a.next)&&(Bi(a),a=a.next),a}function ln(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(kr(t,t.next)||ke(t.prev,t,t.next)===0)){if(Bi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fi(s,e,t,n,i,r,a){if(!s)return;!a&&r&&jm(s,n,i,r);let l=s,u,h;for(;s.prev!==s.next;){if(u=s.prev,h=s.next,r?Hm(s,n,i,r):km(s)){e.push(u.i/t),e.push(s.i/t),e.push(h.i/t),Bi(s),s=h.next,l=h.next;continue}if(s=h,s===l){a?a===1?(s=Gm(ln(s),e,t),Fi(s,e,t,n,i,r,2)):a===2&&Vm(s,e,t,n,i,r):Fi(ln(s),e,t,n,i,r,1);break}}}function km(s){const e=s.prev,t=s,n=s.next;if(ke(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(Yn(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&ke(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Hm(s,e,t,n){const i=s.prev,r=s,a=s.next;if(ke(i,r,a)>=0)return!1;const l=i.x<r.x?i.x<a.x?i.x:a.x:r.x<a.x?r.x:a.x,u=i.y<r.y?i.y<a.y?i.y:a.y:r.y<a.y?r.y:a.y,h=i.x>r.x?i.x>a.x?i.x:a.x:r.x>a.x?r.x:a.x,f=i.y>r.y?i.y>a.y?i.y:a.y:r.y>a.y?r.y:a.y,o=Ds(l,u,e,t,n),c=Ds(h,f,e,t,n);let d=s.prevZ,p=s.nextZ;for(;d&&d.z>=o&&p&&p.z<=c;){if(d!==s.prev&&d!==s.next&&Yn(i.x,i.y,r.x,r.y,a.x,a.y,d.x,d.y)&&ke(d.prev,d,d.next)>=0||(d=d.prevZ,p!==s.prev&&p!==s.next&&Yn(i.x,i.y,r.x,r.y,a.x,a.y,p.x,p.y)&&ke(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;d&&d.z>=o;){if(d!==s.prev&&d!==s.next&&Yn(i.x,i.y,r.x,r.y,a.x,a.y,d.x,d.y)&&ke(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;p&&p.z<=c;){if(p!==s.prev&&p!==s.next&&Yn(i.x,i.y,r.x,r.y,a.x,a.y,p.x,p.y)&&ke(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function Gm(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!kr(i,r)&&Cl(i,n,n.next,r)&&Ni(i,r)&&Ni(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),Bi(n),Bi(n.next),n=s=r),n=n.next}while(n!==s);return ln(n)}function Vm(s,e,t,n,i,r){let a=s;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&$m(a,l)){let u=Rl(a,l);a=ln(a,a.next),u=ln(u,u.next),Fi(a,e,t,n,i,r),Fi(u,e,t,n,i,r);return}l=l.next}a=a.next}while(a!==s)}function Wm(s,e,t,n){const i=[];let r,a,l,u,h;for(r=0,a=e.length;r<a;r++)l=e[r]*n,u=r<a-1?e[r+1]*n:s.length,h=Ll(s,l,u,n,!1),h===h.next&&(h.steiner=!0),i.push(Qm(h));for(i.sort(Xm),r=0;r<i.length;r++)qm(i[r],t),t=ln(t,t.next);return t}function Xm(s,e){return s.x-e.x}function qm(s,e){if(e=Ym(s,e),e){const t=Rl(e,s);ln(e,e.next),ln(t,t.next)}}function Ym(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const c=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(c<=n&&c>r){if(r=c,c===n){if(i===t.y)return t;if(i===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(n===r)return a;const l=a,u=a.x,h=a.y;let f=1/0,o;t=a;do n>=t.x&&t.x>=u&&n!==t.x&&Yn(i<h?n:r,i,u,h,i<h?r:n,i,t.x,t.y)&&(o=Math.abs(i-t.y)/(n-t.x),Ni(t,s)&&(o<f||o===f&&(t.x>a.x||t.x===a.x&&Zm(a,t)))&&(a=t,f=o)),t=t.next;while(t!==l);return a}function Zm(s,e){return ke(s.prev,s,e.prev)<0&&ke(e.next,s,s.next)<0}function jm(s,e,t,n){let i=s;do i.z===null&&(i.z=Ds(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Jm(i)}function Jm(s){let e,t,n,i,r,a,l,u,h=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,l=0,e=0;e<h&&(l++,n=n.nextZ,!!n);e++);for(u=h;l>0||u>0&&n;)l!==0&&(u===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,l--):(i=n,n=n.nextZ,u--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,h*=2}while(a>1);return s}function Ds(s,e,t,n,i){return s=32767*(s-t)*i,e=32767*(e-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Qm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Yn(s,e,t,n,i,r,a,l){return(i-a)*(e-l)-(s-a)*(r-l)>=0&&(s-a)*(n-l)-(t-a)*(e-l)>=0&&(t-a)*(r-l)-(i-a)*(n-l)>=0}function $m(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Km(s,e)&&(Ni(s,e)&&Ni(e,s)&&eg(s,e)&&(ke(s.prev,s,e.prev)||ke(s,e.prev,e))||kr(s,e)&&ke(s.prev,s,s.next)>0&&ke(e.prev,e,e.next)>0)}function ke(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function kr(s,e){return s.x===e.x&&s.y===e.y}function Cl(s,e,t,n){const i=gr(ke(s,e,t)),r=gr(ke(s,e,n)),a=gr(ke(t,n,s)),l=gr(ke(t,n,e));return!!(i!==r&&a!==l||i===0&&mr(s,t,e)||r===0&&mr(s,n,e)||a===0&&mr(t,s,n)||l===0&&mr(t,e,n))}function mr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function gr(s){return s>0?1:s<0?-1:0}function Km(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Cl(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ni(s,e){return ke(s.prev,s,s.next)<0?ke(s,e,s.next)>=0&&ke(s,s.prev,e)>=0:ke(s,e,s.prev)<0||ke(s,s.next,e)<0}function eg(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Rl(s,e){const t=new Fs(s.i,s.x,s.y),n=new Fs(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ro(s,e,t,n){const i=new Fs(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Bi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Fs(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function tg(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Wt{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Wt.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Po(e),Io(n,e);let a=e.length;t.forEach(Po);for(let u=0;u<t.length;u++)i.push(a),a+=t[u].length,Io(n,t[u]);const l=Um.triangulate(n,i);for(let u=0;u<l.length;u+=3)r.push(l.slice(u,u+3));return r}}function Po(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Io(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class bn extends ze{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];a(h)}this.setAttribute("position",new Ye(i,3)),this.setAttribute("uv",new Ye(r,2)),this.computeVertexNormals();function a(l){const u=[],h=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1;let o=t.depth!==void 0?t.depth:100,c=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:6,p=t.bevelSize!==void 0?t.bevelSize:d-2,_=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:ng;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),o=t.amount);let x,w=!1,E,A,b,O;m&&(x=m.getSpacedPoints(f),w=!0,c=!1,E=m.computeFrenetFrames(f,!1),A=new T,b=new T,O=new T),c||(v=0,d=0,p=0,_=0);const I=l.extractPoints(h);let H=I.shape;const N=I.holes;if(!Wt.isClockWise(H)){H=H.reverse();for(let W=0,q=N.length;W<q;W++){const $=N[W];Wt.isClockWise($)&&(N[W]=$.reverse())}}const U=Wt.triangulateShape(H,N),R=H;for(let W=0,q=N.length;W<q;W++){const $=N[W];H=H.concat($)}function B(W,q,$){return q||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().multiplyScalar($).add(W)}const L=H.length,D=U.length;function j(W,q,$){let ue,te,S;const M=W.x-q.x,k=W.y-q.y,X=$.x-W.x,ie=$.y-W.y,ae=M*M+k*k,_e=M*ie-k*X;if(Math.abs(_e)>Number.EPSILON){const fe=Math.sqrt(ae),xe=Math.sqrt(X*X+ie*ie),le=q.x-k/fe,C=q.y+M/fe,ne=$.x-ie/xe,V=$.y+X/xe,se=((ne-le)*ie-(V-C)*X)/(M*ie-k*X);ue=le+M*se-W.x,te=C+k*se-W.y;const oe=ue*ue+te*te;if(oe<=2)return new Z(ue,te);S=Math.sqrt(oe/2)}else{let fe=!1;M>Number.EPSILON?X>Number.EPSILON&&(fe=!0):M<-Number.EPSILON?X<-Number.EPSILON&&(fe=!0):Math.sign(k)===Math.sign(ie)&&(fe=!0),fe?(ue=-k,te=M,S=Math.sqrt(ae)):(ue=M,te=k,S=Math.sqrt(ae/2))}return new Z(ue/S,te/S)}const J=[];for(let W=0,q=R.length,$=q-1,ue=W+1;W<q;W++,$++,ue++)$===q&&($=0),ue===q&&(ue=0),J[W]=j(R[W],R[$],R[ue]);const Q=[];let K,ve=J.concat();for(let W=0,q=N.length;W<q;W++){const $=N[W];K=[];for(let ue=0,te=$.length,S=te-1,M=ue+1;ue<te;ue++,S++,M++)S===te&&(S=0),M===te&&(M=0),K[ue]=j($[ue],$[S],$[M]);Q.push(K),ve=ve.concat(K)}for(let W=0;W<v;W++){const q=W/v,$=d*Math.cos(q*Math.PI/2),ue=p*Math.sin(q*Math.PI/2)+_;for(let te=0,S=R.length;te<S;te++){const M=B(R[te],J[te],ue);He(M.x,M.y,-$)}for(let te=0,S=N.length;te<S;te++){const M=N[te];K=Q[te];for(let k=0,X=M.length;k<X;k++){const ie=B(M[k],K[k],ue);He(ie.x,ie.y,-$)}}}const pe=p+_;for(let W=0;W<L;W++){const q=c?B(H[W],ve[W],pe):H[W];w?(b.copy(E.normals[0]).multiplyScalar(q.x),A.copy(E.binormals[0]).multiplyScalar(q.y),O.copy(x[0]).add(b).add(A),He(O.x,O.y,O.z)):He(q.x,q.y,0)}for(let W=1;W<=f;W++)for(let q=0;q<L;q++){const $=c?B(H[q],ve[q],pe):H[q];w?(b.copy(E.normals[W]).multiplyScalar($.x),A.copy(E.binormals[W]).multiplyScalar($.y),O.copy(x[W]).add(b).add(A),He(O.x,O.y,O.z)):He($.x,$.y,o/f*W)}for(let W=v-1;W>=0;W--){const q=W/v,$=d*Math.cos(q*Math.PI/2),ue=p*Math.sin(q*Math.PI/2)+_;for(let te=0,S=R.length;te<S;te++){const M=B(R[te],J[te],ue);He(M.x,M.y,o+$)}for(let te=0,S=N.length;te<S;te++){const M=N[te];K=Q[te];for(let k=0,X=M.length;k<X;k++){const ie=B(M[k],K[k],ue);w?He(ie.x,ie.y+x[f-1].y,x[f-1].x+$):He(ie.x,ie.y,o+$)}}}Ee(),Se();function Ee(){const W=i.length/3;if(c){let q=0,$=L*q;for(let ue=0;ue<D;ue++){const te=U[ue];Pe(te[2]+$,te[1]+$,te[0]+$)}q=f+v*2,$=L*q;for(let ue=0;ue<D;ue++){const te=U[ue];Pe(te[0]+$,te[1]+$,te[2]+$)}}else{for(let q=0;q<D;q++){const $=U[q];Pe($[2],$[1],$[0])}for(let q=0;q<D;q++){const $=U[q];Pe($[0]+L*f,$[1]+L*f,$[2]+L*f)}}n.addGroup(W,i.length/3-W,0)}function Se(){const W=i.length/3;let q=0;G(R,q),q+=R.length;for(let $=0,ue=N.length;$<ue;$++){const te=N[$];G(te,q),q+=te.length}n.addGroup(W,i.length/3-W,1)}function G(W,q){let $=W.length;for(;--$>=0;){const ue=$;let te=$-1;te<0&&(te=W.length-1);for(let S=0,M=f+v*2;S<M;S++){const k=L*S,X=L*(S+1),ie=q+ue+k,ae=q+te+k,_e=q+te+X,fe=q+ue+X;we(ie,ae,_e,fe)}}}function He(W,q,$){u.push(W),u.push(q),u.push($)}function Pe(W,q,$){de(W),de(q),de($);const ue=i.length/3,te=g.generateTopUV(n,i,ue-3,ue-2,ue-1);Ae(te[0]),Ae(te[1]),Ae(te[2])}function we(W,q,$,ue){de(W),de(q),de(ue),de(q),de($),de(ue);const te=i.length/3,S=g.generateSideWallUV(n,i,te-6,te-3,te-2,te-1);Ae(S[0]),Ae(S[1]),Ae(S[3]),Ae(S[1]),Ae(S[2]),Ae(S[3])}function de(W){i.push(u[W*3+0]),i.push(u[W*3+1]),i.push(u[W*3+2])}function Ae(W){r.push(W.x),r.push(W.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ig(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const l=t[e.shapes[r]];n.push(l)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Al[i.type]().fromJSON(i)),new bn(n,e.options)}}const ng={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],l=e[n*3],u=e[n*3+1],h=e[i*3],f=e[i*3+1];return[new Z(r,a),new Z(l,u),new Z(h,f)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],l=e[t*3+1],u=e[t*3+2],h=e[n*3],f=e[n*3+1],o=e[n*3+2],c=e[i*3],d=e[i*3+1],p=e[i*3+2],_=e[r*3],v=e[r*3+1],m=e[r*3+2];return Math.abs(l-f)<Math.abs(a-h)?[new Z(a,1-u),new Z(h,1-o),new Z(c,1-p),new Z(_,1-m)]:[new Z(l,1-u),new Z(f,1-o),new Z(d,1-p),new Z(v,1-m)]}};function ig(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class na extends ze{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let l=0,u=0;if(Array.isArray(e)===!1)h(e);else for(let f=0;f<e.length;f++)h(e[f]),this.addGroup(l,u,f),l+=u,u=0;this.setIndex(n),this.setAttribute("position",new Ye(i,3)),this.setAttribute("normal",new Ye(r,3)),this.setAttribute("uv",new Ye(a,2));function h(f){const o=i.length/3,c=f.extractPoints(t);let d=c.shape;const p=c.holes;Wt.isClockWise(d)===!1&&(d=d.reverse());for(let v=0,m=p.length;v<m;v++){const g=p[v];Wt.isClockWise(g)===!0&&(p[v]=g.reverse())}const _=Wt.triangulateShape(d,p);for(let v=0,m=p.length;v<m;v++){const g=p[v];d=d.concat(g)}for(let v=0,m=d.length;v<m;v++){const g=d[v];i.push(g.x,g.y,0),r.push(0,0,1),a.push(g.x,g.y)}for(let v=0,m=_.length;v<m;v++){const g=_[v],x=g[0]+o,w=g[1]+o,E=g[2]+o;n.push(x,w,E),u+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return rg(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new na(n,e.curveSegments)}}function rg(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class sg extends bn{constructor(e,t={}){const n=t.font;if(!(n&&n.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new ze;const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t),this.type="TextGeometry"}}class ag extends lt{constructor(e){super(),this.type="ShadowMaterial",this.color=new ce(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}ag.prototype.isShadowMaterial=!0;class Pl extends lt{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ni,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Pl.prototype.isMeshStandardMaterial=!0;class og extends Pl{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=ht(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationTint=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularTint=new ce(1,1,1),this.specularTintMap=null,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new ce).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationTint.copy(e.attenuationTint),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularTint.copy(e.specularTint),this.specularTintMap=e.specularTintMap,this}}og.prototype.isMeshPhysicalMaterial=!0;class Ns extends lt{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new ce(16777215),this.specular=new ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ni,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Ns.prototype.isMeshPhongMaterial=!0;class lg extends lt{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ce(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ni,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}lg.prototype.isMeshToonMaterial=!0;class cg extends lt{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ni,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}cg.prototype.isMeshNormalMaterial=!0;class ug extends lt{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}ug.prototype.isMeshLambertMaterial=!0;class hg extends lt{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ce(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ni,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}hg.prototype.isMeshMatcapMaterial=!0;class dg extends Oi{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}dg.prototype.isLineDashedMaterial=!0;const Ue={arraySlice:function(s,e,t){return Ue.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)},convertArray:function(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const l=t[r]*e;for(let u=0;u!==e;++u)i[a++]=s[l+u]}return i},flattenJSON:function(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)},subclip:function(s,e,t,n,i=30){const r=s.clone();r.name=e;const a=[];for(let u=0;u<r.tracks.length;++u){const h=r.tracks[u],f=h.getValueSize(),o=[],c=[];for(let d=0;d<h.times.length;++d){const p=h.times[d]*i;if(!(p<t||p>=n)){o.push(h.times[d]);for(let _=0;_<f;++_)c.push(h.values[d*f+_])}}o.length!==0&&(h.times=Ue.convertArray(o,h.times.constructor),h.values=Ue.convertArray(c,h.values.constructor),a.push(h))}r.tracks=a;let l=1/0;for(let u=0;u<r.tracks.length;++u)l>r.tracks[u].times[0]&&(l=r.tracks[u].times[0]);for(let u=0;u<r.tracks.length;++u)r.tracks[u].shift(-1*l);return r.resetDuration(),r},makeClipAdditive:function(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){const l=t.tracks[a],u=l.ValueTypeName;if(u==="bool"||u==="string")continue;const h=s.tracks.find(function(m){return m.name===l.name&&m.ValueTypeName===u});if(h===void 0)continue;let f=0;const o=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=o/3);let c=0;const d=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(c=d/3);const p=l.times.length-1;let _;if(r<=l.times[0]){const m=f,g=o-f;_=Ue.arraySlice(l.values,m,g)}else if(r>=l.times[p]){const m=p*o+f,g=m+o-f;_=Ue.arraySlice(l.values,m,g)}else{const m=l.createInterpolant(),g=f,x=o-f;m.evaluate(r),_=Ue.arraySlice(m.resultBuffer,g,x)}u==="quaternion"&&new dt().fromArray(_).normalize().conjugate().toArray(_);const v=h.times.length;for(let m=0;m<v;++m){const g=m*d+c;if(u==="quaternion")dt.multiplyQuaternionsFlat(h.values,g,_,0,h.values,g);else{const x=d-c*2;for(let w=0;w<x;++w)h.values[g+w]-=_[w]}}}return s.blendMode=Xo,s}};class cn{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===l)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const l=t[1];e<l&&(n=2,r=l);for(let u=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===u)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const l=n+a>>>1;e<t[l]?a=l:n=l+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}cn.prototype.beforeStart_=cn.prototype.copySampleValue_;cn.prototype.afterEnd_=cn.prototype.copySampleValue_;class fg extends cn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xn,endingEnd:Xn}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,l=i[r],u=i[a];if(l===void 0)switch(this.getSettings_().endingStart){case qn:r=e,l=2*t-n;break;case br:r=i.length-2,l=t+i[r]-i[r+1];break;default:r=e,l=n}if(u===void 0)switch(this.getSettings_().endingEnd){case qn:a=e,u=2*n-t;break;case br:a=1,u=n+i[1]-i[0];break;default:a=e-1,u=t}const h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-l),this._weightNext=h/(u-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,f=this._offsetPrev,o=this._offsetNext,c=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,v=_*p,m=-c*v+2*c*_-c*p,g=(1+c)*v+(-1.5-2*c)*_+(-.5+c)*p+1,x=(-1-d)*v+(1.5+d)*_+.5*p,w=d*v-d*_;for(let E=0;E!==l;++E)r[E]=m*a[f+E]+g*a[h+E]+x*a[u+E]+w*a[o+E];return r}}class Il extends cn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,f=(n-t)/(i-t),o=1-f;for(let c=0;c!==l;++c)r[c]=a[h+c]*o+a[u+c]*f;return r}}class pg extends cn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ft{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ue.convertArray(t,this.TimeBufferType),this.values=Ue.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ue.convertArray(e.times,Array),values:Ue.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case wr:t=this.InterpolantFactoryMethodLinear;break;case Vr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return wr;case this.InterpolantFactoryMethodSmooth:return Vr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const l=this.getValueSize();this.times=Ue.arraySlice(n,r,a),this.values=Ue.arraySlice(this.values,r*l,a*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==r;l++){const u=n[l];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,u),e=!1;break}if(a!==null&&a>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,u,a),e=!1;break}a=u}if(i!==void 0&&Ue.isTypedArray(i))for(let l=0,u=i.length;l!==u;++l){const h=i[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),e=!1;break}}return e}optimize(){const e=Ue.arraySlice(this.times),t=Ue.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Vr,r=e.length-1;let a=1;for(let l=1;l<r;++l){let u=!1;const h=e[l],f=e[l+1];if(h!==f&&(l!==1||h!==e[0]))if(i)u=!0;else{const o=l*n,c=o-n,d=o+n;for(let p=0;p!==n;++p){const _=t[o+p];if(_!==t[c+p]||_!==t[d+p]){u=!0;break}}}if(u){if(l!==a){e[a]=e[l];const o=l*n,c=a*n;for(let d=0;d!==n;++d)t[c+d]=t[o+d]}++a}}if(r>0){e[a]=e[r];for(let l=r*n,u=a*n,h=0;h!==n;++h)t[u+h]=t[l+h];++a}return a!==e.length?(this.times=Ue.arraySlice(e,0,a),this.values=Ue.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Ue.arraySlice(this.times,0),t=Ue.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ft.prototype.TimeBufferType=Float32Array;Ft.prototype.ValueBufferType=Float32Array;Ft.prototype.DefaultInterpolation=wr;class oi extends Ft{}oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=Mr;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;class Dl extends Ft{}Dl.prototype.ValueTypeName="color";class Tr extends Ft{}Tr.prototype.ValueTypeName="number";class mg extends cn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=(n-t)/(i-t);let h=e*l;for(let f=h+l;h!==f;h+=4)dt.slerpFlat(r,0,a,h-l,a,h,u);return r}}class Ui extends Ft{InterpolantFactoryMethodLinear(e){return new mg(this.times,this.values,this.getValueSize(),e)}}Ui.prototype.ValueTypeName="quaternion";Ui.prototype.DefaultInterpolation=wr;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;class li extends Ft{}li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Mr;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;class Er extends Ft{}Er.prototype.ValueTypeName="vector";class Do{constructor(e,t=-1,n,i=Os){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Et(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,l=n.length;a!==l;++a)t.push(_g(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Ft.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let l=0;l<r;l++){let u=[],h=[];u.push((l+r-1)%r,l,(l+1)%r),h.push(0,1,0);const f=Ue.getKeyframeOrder(u);u=Ue.sortedArray(u,1,f),h=Ue.sortedArray(h,1,f),!i&&u[0]===0&&(u.push(r),h.push(h[0])),a.push(new Tr(".morphTargetInfluences["+t[l].name+"]",u,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,u=e.length;l<u;l++){const h=e[l],f=h.name.match(r);if(f&&f.length>1){const o=f[1];let c=i[o];c||(i[o]=c=[]),c.push(h)}}const a=[];for(const l in i)a.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(o,c,d,p,_){if(d.length!==0){const v=[],m=[];Ue.flattenJSON(d,v,m,p),v.length!==0&&_.push(new o(c,v,m))}},i=[],r=e.name||"default",a=e.fps||30,l=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let o=0;o<h.length;o++){const c=h[o].keys;if(!(!c||c.length===0))if(c[0].morphTargets){const d={};let p;for(p=0;p<c.length;p++)if(c[p].morphTargets)for(let _=0;_<c[p].morphTargets.length;_++)d[c[p].morphTargets[_]]=-1;for(const _ in d){const v=[],m=[];for(let g=0;g!==c[p].morphTargets.length;++g){const x=c[p];v.push(x.time),m.push(x.morphTarget===_?1:0)}i.push(new Tr(".morphTargetInfluence["+_+"]",v,m))}u=d.length*(a||1)}else{const d=".bones["+t[o].name+"]";n(Er,d+".position",c,"pos",i),n(Ui,d+".quaternion",c,"rot",i),n(Er,d+".scale",c,"scl",i)}}return i.length===0?null:new this(r,u,i,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function gg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Tr;case"vector":case"vector2":case"vector3":case"vector4":return Er;case"color":return Dl;case"quaternion":return Ui;case"bool":case"boolean":return oi;case"string":return li}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function _g(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=gg(s.type);if(s.times===void 0){const t=[],n=[];Ue.flattenJSON(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ti={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class vg{constructor(e,t,n){const i=this;let r=!1,a=0,l=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){l++,r===!1&&i.onStart!==void 0&&i.onStart(f,a,l),r=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,l),a===l&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,o){return h.push(f,o),this},this.removeHandler=function(f){const o=h.indexOf(f);return o!==-1&&h.splice(o,2),this},this.getHandler=function(f){for(let o=0,c=h.length;o<c;o+=2){const d=h[o],p=h[o+1];if(d.global&&(d.lastIndex=0),d.test(f))return p}return null}}}const xg=new vg;class Xt{constructor(e){this.manager=e!==void 0?e:xg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const St={};class Fl extends Xt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ti.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;if(St[e]!==void 0){St[e].push({onLoad:t,onProgress:n,onError:i});return}const l=/^data:(.*?)(;base64)?,(.*)$/,u=e.match(l);let h;if(u){const f=u[1],o=!!u[2];let c=u[3];c=decodeURIComponent(c),o&&(c=atob(c));try{let d;const p=(this.responseType||"").toLowerCase();switch(p){case"arraybuffer":case"blob":const _=new Uint8Array(c.length);for(let m=0;m<c.length;m++)_[m]=c.charCodeAt(m);p==="blob"?d=new Blob([_.buffer],{type:f}):d=_.buffer;break;case"document":d=new DOMParser().parseFromString(c,f);break;case"json":d=JSON.parse(c);break;default:d=c;break}setTimeout(function(){t&&t(d),r.manager.itemEnd(e)},0)}catch(d){setTimeout(function(){i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{St[e]=[],St[e].push({onLoad:t,onProgress:n,onError:i}),h=new XMLHttpRequest,h.open("GET",e,!0),h.addEventListener("load",function(f){const o=this.response,c=St[e];if(delete St[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),ti.add(e,o);for(let d=0,p=c.length;d<p;d++){const _=c[d];_.onLoad&&_.onLoad(o)}r.manager.itemEnd(e)}else{for(let d=0,p=c.length;d<p;d++){const _=c[d];_.onError&&_.onError(f)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),h.addEventListener("progress",function(f){const o=St[e];for(let c=0,d=o.length;c<d;c++){const p=o[c];p.onProgress&&p.onProgress(f)}},!1),h.addEventListener("error",function(f){const o=St[e];delete St[e];for(let c=0,d=o.length;c<d;c++){const p=o[c];p.onError&&p.onError(f)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),h.addEventListener("abort",function(f){const o=St[e];delete St[e];for(let c=0,d=o.length;c<d;c++){const p=o[c];p.onError&&p.onError(f)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(h.responseType=this.responseType),this.withCredentials!==void 0&&(h.withCredentials=this.withCredentials),h.overrideMimeType&&h.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const f in this.requestHeader)h.setRequestHeader(f,this.requestHeader[f]);h.send(null)}return r.manager.itemStart(e),h}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Nl extends Xt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ti.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const l=document.createElementNS("http://www.w3.org/1999/xhtml","img");function u(){l.removeEventListener("load",u,!1),l.removeEventListener("error",h,!1),ti.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(f){l.removeEventListener("load",u,!1),l.removeEventListener("error",h,!1),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}return l.addEventListener("load",u,!1),l.addEventListener("error",h,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),r.manager.itemStart(e),l.src=e,l}}class yg extends Xt{constructor(e){super(e)}load(e,t,n,i){const r=new Nr,a=new Nl(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let l=0;function u(h){a.load(e[h],function(f){r.images[h]=f,l++,l===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let h=0;h<e.length;++h)u(h);return r}}class Bl extends Xt{constructor(e){super(e)}load(e,t,n,i){const r=new it,a=new Nl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){r.image=l;const u=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;r.format=u?vn:Tt,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Mg extends xt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ur(t,e))}getPoint(e){const t=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=t){const r=n[i]-t,a=this.curves[i],l=a.getLength(),u=l===0?0:1-r/l;return a.getPointAt(u)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],l=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,u=a.getPoints(l);for(let h=0;h<u.length;h++){const f=u[h];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Al[i.type]().fromJSON(i))}return this}}class Ar extends Mg{constructor(e){super(),this.type="Path",this.currentPoint=new Z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ur(this.currentPoint.clone(),new Z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new ea(this.currentPoint.clone(),new Z(e,t),new Z(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const l=new Ks(this.currentPoint.clone(),new Z(e,t),new Z(n,i),new Z(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ta(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+l,t+u,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,l,u){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+h,t+f,n,i,r,a,l,u),this}absellipse(e,t,n,i,r,a,l,u){const h=new Or(e,t,n,i,r,a,l,u);if(this.curves.length>0){const o=h.getPoint(0);o.equals(this.currentPoint)||this.lineTo(o.x,o.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Qn extends Ar{constructor(e){super(e),this.uuid=Et(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ar().fromJSON(i))}return this}}class Dt extends De{constructor(e,t=1){super(),this.type="Light",this.color=new ce(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Dt.prototype.isLight=!0;class zl extends Dt{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(De.DefaultUp),this.updateMatrix(),this.groundColor=new ce(t)}copy(e){return Dt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}zl.prototype.isHemisphereLight=!0;const Fo=new me,No=new T,Bo=new T;class ia{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;No.setFromMatrixPosition(e.matrixWorld),t.position.copy(No),Bo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bo),t.updateMatrixWorld(),Fo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ol extends ia{constructor(){super(new ct(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=Ii*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Ol.prototype.isSpotLightShadow=!0;class wg extends Dt{constructor(e,t,n=0,i=Math.PI/3,r=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(De.DefaultUp),this.updateMatrix(),this.target=new De,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.shadow=new Ol}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}wg.prototype.isSpotLight=!0;const zo=new me,vi=new T,bs=new T;class Ul extends ia{constructor(){super(new ct(90,1,.5,500)),this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new Be(2,1,1,1),new Be(0,1,1,1),new Be(3,1,1,1),new Be(1,1,1,1),new Be(3,0,1,1),new Be(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vi.setFromMatrixPosition(e.matrixWorld),n.position.copy(vi),bs.copy(n.position),bs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(bs),n.updateMatrixWorld(),i.makeTranslation(-vi.x,-vi.y,-vi.z),zo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo)}}Ul.prototype.isPointLightShadow=!0;class bg extends Dt{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ul}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}bg.prototype.isPointLight=!0;class kl extends ia{constructor(){super(new Xs(-5,5,5,-5,.5,500))}}kl.prototype.isDirectionalLightShadow=!0;class Sg extends Dt{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(De.DefaultUp),this.updateMatrix(),this.target=new De,this.shadow=new kl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Sg.prototype.isDirectionalLight=!0;class ra extends Dt{constructor(e,t){super(e,t),this.type="AmbientLight"}}ra.prototype.isAmbientLight=!0;class Tg extends Dt{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}Tg.prototype.isRectAreaLight=!0;class Hl{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new T)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}Hl.prototype.isSphericalHarmonics3=!0;class sa extends Dt{constructor(e=new Hl,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}sa.prototype.isLightProbe=!0;class Eg{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}class Ag extends ze{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}Ag.prototype.isInstancedBufferGeometry=!0;class Lg extends qe{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Lg.prototype.isInstancedBufferAttribute=!0;class Cg extends Xt{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ti.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,fetch(e,l).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){ti.add(e,u),t&&t(u),r.manager.itemEnd(e)}).catch(function(u){i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}Cg.prototype.isImageBitmapLoader=!0;class Rg{constructor(){this.type="ShapePath",this.color=new ce,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ar,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function n(g){const x=[];for(let w=0,E=g.length;w<E;w++){const A=g[w],b=new Qn;b.curves=A.curves,x.push(b)}return x}function i(g,x){const w=x.length;let E=!1;for(let A=w-1,b=0;b<w;A=b++){let O=x[A],I=x[b],H=I.x-O.x,N=I.y-O.y;if(Math.abs(N)>Number.EPSILON){if(N<0&&(O=x[b],H=-H,I=x[A],N=-N),g.y<O.y||g.y>I.y)continue;if(g.y===O.y){if(g.x===O.x)return!0}else{const re=N*(g.x-O.x)-H*(g.y-O.y);if(re===0)return!0;if(re<0)continue;E=!E}}else{if(g.y!==O.y)continue;if(I.x<=g.x&&g.x<=O.x||O.x<=g.x&&g.x<=I.x)return!0}}return E}const r=Wt.isClockWise,a=this.subPaths;if(a.length===0)return[];if(t===!0)return n(a);let l,u,h;const f=[];if(a.length===1)return u=a[0],h=new Qn,h.curves=u.curves,f.push(h),f;let o=!r(a[0].getPoints());o=e?!o:o;const c=[],d=[];let p=[],_=0,v;d[_]=void 0,p[_]=[];for(let g=0,x=a.length;g<x;g++)u=a[g],v=u.getPoints(),l=r(v),l=e?!l:l,l?(!o&&d[_]&&_++,d[_]={s:new Qn,p:v},d[_].s.curves=u.curves,o&&_++,p[_]=[]):p[_].push({h:u,p:v[0]});if(!d[0])return n(a);if(d.length>1){let g=!1;const x=[];for(let w=0,E=d.length;w<E;w++)c[w]=[];for(let w=0,E=d.length;w<E;w++){const A=p[w];for(let b=0;b<A.length;b++){const O=A[b];let I=!0;for(let H=0;H<d.length;H++)i(O.p,d[H].p)&&(w!==H&&x.push({froms:w,tos:H,hole:b}),I?(I=!1,c[H].push(O)):g=!0);I&&c[w].push(O)}}x.length>0&&(g||(p=c))}let m;for(let g=0,x=d.length;g<x;g++){h=d[g].s,f.push(h),m=p[g];for(let w=0,E=m.length;w<E;w++)h.holes.push(m[w].h)}return f}}class Gl{constructor(e){this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=Pg(e,t,this.data);for(let r=0,a=i.length;r<a;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}}function Pg(s,e,t){const n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,a=[];let l=0,u=0;for(let h=0;h<n.length;h++){const f=n[h];if(f===`
`)l=0,u-=r;else{const o=Ig(f,i,l,u,t);l+=o.offsetX,a.push(o.path)}}return a}function Ig(s,e,t,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const a=new Rg;let l,u,h,f,o,c,d,p;if(r.o){const _=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let v=0,m=_.length;v<m;)switch(_[v++]){case"m":l=_[v++]*e+t,u=_[v++]*e+n,a.moveTo(l,u);break;case"l":l=_[v++]*e+t,u=_[v++]*e+n,a.lineTo(l,u);break;case"q":h=_[v++]*e+t,f=_[v++]*e+n,o=_[v++]*e+t,c=_[v++]*e+n,a.quadraticCurveTo(o,c,h,f);break;case"b":h=_[v++]*e+t,f=_[v++]*e+n,o=_[v++]*e+t,c=_[v++]*e+n,d=_[v++]*e+t,p=_[v++]*e+n,a.bezierCurveTo(o,c,d,p,h,f);break}}return{offsetX:r.ha*e,path:a}}Gl.prototype.isFont=!0;class Dg extends Xt{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Fl(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let u;try{u=JSON.parse(l)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),u=JSON.parse(l.substring(65,l.length-2))}const h=r.parse(u);t&&t(h)},n,i)}parse(e){return new Gl(e)}}let _r;const Fg={getContext:function(){return _r===void 0&&(_r=new(window.AudioContext||window.webkitAudioContext)),_r},setContext:function(s){_r=s}};class Ng extends Xt{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Fl(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const u=l.slice(0);Fg.getContext().decodeAudioData(u,function(f){t(f)})}catch(u){i?i(u):console.error(u),r.manager.itemError(e)}},n,i)}}class Bg extends sa{constructor(e,t,n=1){super(void 0,n);const i=new ce().set(e),r=new ce().set(t),a=new T(i.r,i.g,i.b),l=new T(r.r,r.g,r.b),u=Math.sqrt(Math.PI),h=u*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(l).multiplyScalar(u),this.sh.coefficients[1].copy(a).sub(l).multiplyScalar(h)}}Bg.prototype.isHemisphereLightProbe=!0;class zg extends sa{constructor(e,t=1){super(void 0,t);const n=new ce().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}zg.prototype.isAmbientLightProbe=!0;let Og=class extends De{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};class Ug{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let l=0;l!==i;++l)n[r+l]=n[l];a=t}else{a+=t;const l=t/a;this._mixBufferRegion(n,r,0,l,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,l=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const u=t*this._origIndex;this._mixBufferRegion(n,i,u,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let u=t,h=t+t;u!==h;++u)if(n[u]!==n[u+t]){l.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){dt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;dt.multiplyQuaternionsFlat(e,a,e,t,e,n),dt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let l=0;l!==r;++l){const u=t+l;e[u]=e[u]*a+e[n+l]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]+e[n+a]*i}}}const aa="\\[\\]\\.:\\/",kg=new RegExp("["+aa+"]","g"),oa="[^"+aa+"]",Hg="[^"+aa.replace("\\.","")+"]",Gg=/((?:WC+[\/:])*)/.source.replace("WC",oa),Vg=/(WCOD+)?/.source.replace("WCOD",Hg),Wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oa),Xg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oa),qg=new RegExp("^"+Gg+Vg+Wg+Xg+"$"),Yg=["material","materials","bones"];class Zg{constructor(e,t,n){const i=n||Fe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Fe{constructor(e,t,n){this.path=t,this.parsedPath=n||Fe.parseTrackName(t),this.node=Fe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Fe.Composite(e,t,n):new Fe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kg,"")}static parseTrackName(e){const t=qg.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Yg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const l=r[a];if(l.name===t||l.uuid===t)return l;const u=n(l.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Fe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}u=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(u=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Fe.Composite=Zg;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class jg{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,l=new Array(a),u={endingStart:Xn,endingEnd:Xn};for(let h=0;h!==a;++h){const f=r[h].createInterpolant(null);l[h]=f,f.settings=u}this._interpolantSettings=u,this._interpolants=l,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=yu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,l=i/r;e.warp(1,a,t),this.warp(l,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let l=this._timeScaleInterpolant;l===null&&(l=i._lendControlInterpolant(),this._timeScaleInterpolant=l);const u=l.parameterPositions,h=l.sampleValues;return u[0]=r,u[1]=r+n,h[0]=e/a,h[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const u=(e-r)*n;if(u<0||n===0)return;this._startTime=null,t=n*u}t*=this._updateTimeScale(e);const a=this._updateTime(t),l=this._updateWeight(e);if(l>0){const u=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case Xo:for(let f=0,o=u.length;f!==o;++f)u[f].evaluate(a),h[f].accumulateAdditive(l);break;case Os:default:for(let f=0,o=u.length;f!==o;++f)u[f].evaluate(a),h[f].accumulate(i,l)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===Mu;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===xu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const l=Math.floor(i/t);i-=t*l,r+=Math.abs(l);const u=this.repetitions-r;if(u<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(u===1){const h=e<0;this._setEndings(h,!h,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:l})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=qn,i.endingEnd=qn):(e?i.endingStart=this.zeroSlopeAtStart?qn:Xn:i.endingStart=br,t?i.endingEnd=this.zeroSlopeAtEnd?qn:Xn:i.endingEnd=br)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const l=a.parameterPositions,u=a.sampleValues;return l[0]=r,u[0]=t,l[1]=r+e,u[1]=n,this}}class Jg extends yn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,l=e._interpolants,u=n.uuid,h=this._bindingsByRootAndName;let f=h[u];f===void 0&&(f={},h[u]=f);for(let o=0;o!==r;++o){const c=i[o],d=c.name;let p=f[d];if(p!==void 0)a[o]=p;else{if(p=a[o],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,u,d));continue}const _=t&&t._propertyBindings[o].binding.parsedPath;p=new Ug(Fe.create(n,d,_),c.ValueTypeName,c.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,u,d),a[o]=p}l[o].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const l=a.knownActions;e._byClipCacheIndex=l.length,l.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,l=a[r],u=l.knownActions,h=u[u.length-1],f=e._byClipCacheIndex;h._byClipCacheIndex=f,u[f]=h,u.pop(),e._byClipCacheIndex=null;const o=l.actionByRoot,c=(e._localRoot||this._root).uuid;delete o[c],u.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,l=a[i],u=t[t.length-1],h=e._cacheIndex;u._cacheIndex=h,t[h]=u,t.pop(),delete l[r],Object.keys(l).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Il(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Do.findByName(i,e):e;const l=a!==null?a.uuid:e,u=this._actionsByClip[l];let h=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Os),u!==void 0){const o=u.actionByRoot[r];if(o!==void 0&&o.blendMode===n)return o;h=u.knownActions[0],a===null&&(a=h._clip)}if(a===null)return null;const f=new jg(this,a,t,n);return this._bindAction(f,h),this._addInactiveAction(f,l,r),f}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Do.findByName(n,e):e,a=r?r.uuid:e,l=this._actionsByClip[a];return l!==void 0&&l.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,r,a);const l=this._bindings,u=this._nActiveBindings;for(let h=0;h!==u;++h)l[h].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let l=0,u=a.length;l!==u;++l){const h=a[l];this._deactivateAction(h);const f=h._cacheIndex,o=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,o._cacheIndex=f,t[f]=o,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const l=n[a].actionByRoot,u=l[t];u!==void 0&&(this._deactivateAction(u),this._removeInactiveAction(u))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const l=r[a];l.restoreOriginalState(),this._removeInactiveBinding(l)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}Jg.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class Qg extends zi{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}Qg.prototype.isInstancedInterleavedBuffer=!0;class $g{constructor(e,t,n=0,i=1/0){this.ray=new wn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!1,n=[]){return Bs(e,this,n,t),n.sort(Oo),n}intersectObjects(e,t=!1,n=[]){for(let i=0,r=e.length;i<r;i++)Bs(e[i],this,n,t);return n.sort(Oo),n}}function Oo(s,e){return s.distance-e.distance}function Bs(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Bs(i[r],e,t,!0)}}class Kg extends De{constructor(e){super(),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}Kg.prototype.isImmediateRenderObject=!0;const nn=new T,vr=new me,Ss=new me;class e_ extends Js{constructor(e){const t=Vl(e),n=new ze,i=[],r=[],a=new ce(0,0,1),l=new ce(0,1,0);for(let h=0;h<t.length;h++){const f=t[h];f.parent&&f.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(l.r,l.g,l.b))}n.setAttribute("position",new Ye(i,3)),n.setAttribute("color",new Ye(r,3));const u=new Oi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,u),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ss.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const l=t[r];l.parent&&l.parent.isBone&&(vr.multiplyMatrices(Ss,l.matrixWorld),nn.setFromMatrixPosition(vr),i.setXYZ(a,nn.x,nn.y,nn.z),vr.multiplyMatrices(Ss,l.parent.matrixWorld),nn.setFromMatrixPosition(vr),i.setXYZ(a+1,nn.x,nn.y,nn.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Vl(s){const e=[];s&&s.isBone&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,Vl(s.children[t]));return e}class t_ extends Js{constructor(e=10,t=10,n=4473924,i=8947848){n=new ce(n),i=new ce(i);const r=t/2,a=e/t,l=e/2,u=[],h=[];for(let c=0,d=0,p=-l;c<=t;c++,p+=a){u.push(-l,0,p,l,0,p),u.push(p,0,-l,p,0,l);const _=c===r?n:i;_.toArray(h,d),d+=3,_.toArray(h,d),d+=3,_.toArray(h,d),d+=3,_.toArray(h,d),d+=3}const f=new ze;f.setAttribute("position",new Ye(u,3)),f.setAttribute("color",new Ye(h,3));const o=new Oi({vertexColors:!0,toneMapped:!1});super(f,o),this.type="GridHelper"}}const n_=new Float32Array(1);new Int32Array(n_.buffer);xt.create=function(s,e){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(xt.prototype),s.prototype.constructor=s,s.prototype.getPoint=e,s};Ar.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};t_.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};e_.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Xt.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Eg.extractUrlBase(s)};Xt.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};At.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)};At.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};At.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};At.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};At.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)};ii.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Br.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)};tt.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};tt.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};tt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};tt.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};tt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};tt.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};me.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)};me.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};me.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new T().setFromMatrixColumn(this,3)};me.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)};me.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};me.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};me.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};me.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};me.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)};me.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};me.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};me.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};me.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};me.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};me.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};me.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};me.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};me.prototype.makeFrustum=function(s,e,t,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,e,n,t,i,r)};me.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};Vt.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)};dt.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)};dt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};wn.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};wn.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)};wn.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};je.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};je.prototype.barycoordFromPoint=function(s,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,e)};je.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)};je.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)};je.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)};je.barycoordFromPoint=function(s,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),je.getBarycoord(s,e,t,n,i)};je.normal=function(s,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),je.getNormal(s,e,t,n)};Qn.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)};Qn.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new bn(this,s)};Qn.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new na(this,s)};Z.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};Z.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};Z.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};T.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};T.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};T.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)};T.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)};T.prototype.getColumnFromMatrix=function(s,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,s)};T.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)};T.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};T.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};T.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Be.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};Be.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};De.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)};De.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};De.prototype.translate=function(s,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,s)};De.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};De.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(De.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});nt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(nt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),wu},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Ml.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};ct.prototype.setLens=function(s,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(s)};Object.defineProperties(Dt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}});Object.defineProperties(qe.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Sr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Sr)}}});qe.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Sr:Pi),this};qe.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},qe.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};ze.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)};ze.prototype.addAttribute=function(s,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new qe(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(s,e)};ze.prototype.addDrawCall=function(s,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,e)};ze.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};ze.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};ze.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)};ze.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(ze.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});zi.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Sr:Pi),this};zi.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};bn.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};bn.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};bn.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Zs.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(lt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ce}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===Ho}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(xn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}});Ne.prototype.clearTarget=function(s,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(e,t,n)};Ne.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)};Ne.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Ne.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Ne.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Ne.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Ne.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Ne.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Ne.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Ne.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Ne.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Ne.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Ne.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Ne.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Ne.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)};Ne.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Ne.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Ne.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Ne.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Ne.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Ne.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Ne.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Ne.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Ne.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Ne.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Ne.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?Dr:ft}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(_l.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(It.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}});Og.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new Ng().load(s,function(n){e.setBuffer(n)}),this};Vs.prototype.updateCubeMap=function(s,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,e)};Vs.prototype.clear=function(s,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,e,t,n)};Mn.crossOrigin=void 0;Mn.loadTexture=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Bl;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};Mn.loadTextureCube=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new yg;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};Mn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Mn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uo);class i_{constructor(e){Ve(this,"el");Ve(this,"_boundHandleFrame");Ve(this,"startTime",-1);Ve(this,"glCanvas",document.createElement("canvas"));Ve(this,"glContext");Ve(this,"scene",new Zs);Ve(this,"camera",new ct(60,window.innerWidth/window.innerHeight,1,1e3));Ve(this,"renderer");this.el=e,this._boundHandleFrame=this._handleFrame.bind(this),e.appendChild(this.glCanvas),this.glCanvas.id="threecanvas",this.scene.background=new ce(13421772),this.camera.position.set(0,1,-5),this.scene.add(this.camera);let t=this.glCanvas.getContext("webgl");if(!t)throw new Error("Cannot create WebGL render context in common.ts");this.glContext=t,this.renderer=new Ne({canvas:this.glCanvas,context:this.glContext,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=this.glCanvas.offsetWidth/this.glCanvas.offsetHeight,this.camera.updateProjectionMatrix();const n=new ra(2236962);this.scene.add(n),this.initializeScene(),window.addEventListener("resize",i=>{this.camera.aspect=this.el.offsetWidth/this.el.offsetHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.el.offsetWidth,this.el.offsetHeight)}),window.requestAnimationFrame(this._boundHandleFrame)}static offset(e){e=e||window.event;var t=e.target||e.srcElement,n=t.getBoundingClientRect(),i=e.clientX-n.left,r=e.clientY-n.top;return{x:i,y:r}}initializeScene(){}updateScene(e){}_handleFrame(e){window.requestAnimationFrame(this._boundHandleFrame),this.startTime==-1&&(this.startTime=e),this.updateScene(e),this.doRender()}doRender(){this.renderer.render(this.scene,this.camera)}}var xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Wl={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(s){(function(){var e=function(){this.init()};e.prototype={init:function(){var o=this||t;return o._counter=1e3,o._html5AudioPool=[],o.html5PoolSize=10,o._codecs={},o._howls=[],o._muted=!1,o._volume=1,o._canPlayEvent="canplaythrough",o._navigator=typeof window<"u"&&window.navigator?window.navigator:null,o.masterGain=null,o.noAudio=!1,o.usingWebAudio=!0,o.autoSuspend=!0,o.ctx=null,o.autoUnlock=!0,o._setup(),o},volume:function(o){var c=this||t;if(o=parseFloat(o),c.ctx||f(),typeof o<"u"&&o>=0&&o<=1){if(c._volume=o,c._muted)return c;c.usingWebAudio&&c.masterGain.gain.setValueAtTime(o,t.ctx.currentTime);for(var d=0;d<c._howls.length;d++)if(!c._howls[d]._webAudio)for(var p=c._howls[d]._getSoundIds(),_=0;_<p.length;_++){var v=c._howls[d]._soundById(p[_]);v&&v._node&&(v._node.volume=v._volume*o)}return c}return c._volume},mute:function(o){var c=this||t;c.ctx||f(),c._muted=o,c.usingWebAudio&&c.masterGain.gain.setValueAtTime(o?0:c._volume,t.ctx.currentTime);for(var d=0;d<c._howls.length;d++)if(!c._howls[d]._webAudio)for(var p=c._howls[d]._getSoundIds(),_=0;_<p.length;_++){var v=c._howls[d]._soundById(p[_]);v&&v._node&&(v._node.muted=o?!0:v._muted)}return c},stop:function(){for(var o=this||t,c=0;c<o._howls.length;c++)o._howls[c].stop();return o},unload:function(){for(var o=this||t,c=o._howls.length-1;c>=0;c--)o._howls[c].unload();return o.usingWebAudio&&o.ctx&&typeof o.ctx.close<"u"&&(o.ctx.close(),o.ctx=null,f()),o},codecs:function(o){return(this||t)._codecs[o.replace(/^x-/,"")]},_setup:function(){var o=this||t;if(o.state=o.ctx&&o.ctx.state||"suspended",o._autoSuspend(),!o.usingWebAudio)if(typeof Audio<"u")try{var c=new Audio;typeof c.oncanplaythrough>"u"&&(o._canPlayEvent="canplay")}catch{o.noAudio=!0}else o.noAudio=!0;try{var c=new Audio;c.muted&&(o.noAudio=!0)}catch{}return o.noAudio||o._setupCodecs(),o},_setupCodecs:function(){var o=this||t,c=null;try{c=typeof Audio<"u"?new Audio:null}catch{return o}if(!c||typeof c.canPlayType!="function")return o;var d=c.canPlayType("audio/mpeg;").replace(/^no$/,""),p=o._navigator?o._navigator.userAgent:"",_=p.match(/OPR\/(\d+)/g),v=_&&parseInt(_[0].split("/")[1],10)<33,m=p.indexOf("Safari")!==-1&&p.indexOf("Chrome")===-1,g=p.match(/Version\/(.*?) /),x=m&&g&&parseInt(g[1],10)<15;return o._codecs={mp3:!!(!v&&(d||c.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(c.canPlayType('audio/wav; codecs="1"')||c.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!c.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!c.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(c.canPlayType("audio/x-m4a;")||c.canPlayType("audio/m4a;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(c.canPlayType("audio/x-m4b;")||c.canPlayType("audio/m4b;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(c.canPlayType("audio/x-mp4;")||c.canPlayType("audio/mp4;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!x&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!x&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!c.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(c.canPlayType("audio/x-flac;")||c.canPlayType("audio/flac;")).replace(/^no$/,"")},o},_unlockAudio:function(){var o=this||t;if(!(o._audioUnlocked||!o.ctx)){o._audioUnlocked=!1,o.autoUnlock=!1,!o._mobileUnloaded&&o.ctx.sampleRate!==44100&&(o._mobileUnloaded=!0,o.unload()),o._scratchBuffer=o.ctx.createBuffer(1,1,22050);var c=function(d){for(;o._html5AudioPool.length<o.html5PoolSize;)try{var p=new Audio;p._unlocked=!0,o._releaseHtml5Audio(p)}catch{o.noAudio=!0;break}for(var _=0;_<o._howls.length;_++)if(!o._howls[_]._webAudio)for(var v=o._howls[_]._getSoundIds(),m=0;m<v.length;m++){var g=o._howls[_]._soundById(v[m]);g&&g._node&&!g._node._unlocked&&(g._node._unlocked=!0,g._node.load())}o._autoResume();var x=o.ctx.createBufferSource();x.buffer=o._scratchBuffer,x.connect(o.ctx.destination),typeof x.start>"u"?x.noteOn(0):x.start(0),typeof o.ctx.resume=="function"&&o.ctx.resume(),x.onended=function(){x.disconnect(0),o._audioUnlocked=!0,document.removeEventListener("touchstart",c,!0),document.removeEventListener("touchend",c,!0),document.removeEventListener("click",c,!0),document.removeEventListener("keydown",c,!0);for(var w=0;w<o._howls.length;w++)o._howls[w]._emit("unlock")}};return document.addEventListener("touchstart",c,!0),document.addEventListener("touchend",c,!0),document.addEventListener("click",c,!0),document.addEventListener("keydown",c,!0),o}},_obtainHtml5Audio:function(){var o=this||t;if(o._html5AudioPool.length)return o._html5AudioPool.pop();var c=new Audio().play();return c&&typeof Promise<"u"&&(c instanceof Promise||typeof c.then=="function")&&c.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(o){var c=this||t;return o._unlocked&&c._html5AudioPool.push(o),c},_autoSuspend:function(){var o=this;if(!(!o.autoSuspend||!o.ctx||typeof o.ctx.suspend>"u"||!t.usingWebAudio)){for(var c=0;c<o._howls.length;c++)if(o._howls[c]._webAudio){for(var d=0;d<o._howls[c]._sounds.length;d++)if(!o._howls[c]._sounds[d]._paused)return o}return o._suspendTimer&&clearTimeout(o._suspendTimer),o._suspendTimer=setTimeout(function(){if(o.autoSuspend){o._suspendTimer=null,o.state="suspending";var p=function(){o.state="suspended",o._resumeAfterSuspend&&(delete o._resumeAfterSuspend,o._autoResume())};o.ctx.suspend().then(p,p)}},3e4),o}},_autoResume:function(){var o=this;if(!(!o.ctx||typeof o.ctx.resume>"u"||!t.usingWebAudio))return o.state==="running"&&o.ctx.state!=="interrupted"&&o._suspendTimer?(clearTimeout(o._suspendTimer),o._suspendTimer=null):o.state==="suspended"||o.state==="running"&&o.ctx.state==="interrupted"?(o.ctx.resume().then(function(){o.state="running";for(var c=0;c<o._howls.length;c++)o._howls[c]._emit("resume")}),o._suspendTimer&&(clearTimeout(o._suspendTimer),o._suspendTimer=null)):o.state==="suspending"&&(o._resumeAfterSuspend=!0),o}};var t=new e,n=function(o){var c=this;if(!o.src||o.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}c.init(o)};n.prototype={init:function(o){var c=this;return t.ctx||f(),c._autoplay=o.autoplay||!1,c._format=typeof o.format!="string"?o.format:[o.format],c._html5=o.html5||!1,c._muted=o.mute||!1,c._loop=o.loop||!1,c._pool=o.pool||5,c._preload=typeof o.preload=="boolean"||o.preload==="metadata"?o.preload:!0,c._rate=o.rate||1,c._sprite=o.sprite||{},c._src=typeof o.src!="string"?o.src:[o.src],c._volume=o.volume!==void 0?o.volume:1,c._xhr={method:o.xhr&&o.xhr.method?o.xhr.method:"GET",headers:o.xhr&&o.xhr.headers?o.xhr.headers:null,withCredentials:o.xhr&&o.xhr.withCredentials?o.xhr.withCredentials:!1},c._duration=0,c._state="unloaded",c._sounds=[],c._endTimers={},c._queue=[],c._playLock=!1,c._onend=o.onend?[{fn:o.onend}]:[],c._onfade=o.onfade?[{fn:o.onfade}]:[],c._onload=o.onload?[{fn:o.onload}]:[],c._onloaderror=o.onloaderror?[{fn:o.onloaderror}]:[],c._onplayerror=o.onplayerror?[{fn:o.onplayerror}]:[],c._onpause=o.onpause?[{fn:o.onpause}]:[],c._onplay=o.onplay?[{fn:o.onplay}]:[],c._onstop=o.onstop?[{fn:o.onstop}]:[],c._onmute=o.onmute?[{fn:o.onmute}]:[],c._onvolume=o.onvolume?[{fn:o.onvolume}]:[],c._onrate=o.onrate?[{fn:o.onrate}]:[],c._onseek=o.onseek?[{fn:o.onseek}]:[],c._onunlock=o.onunlock?[{fn:o.onunlock}]:[],c._onresume=[],c._webAudio=t.usingWebAudio&&!c._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(c),c._autoplay&&c._queue.push({event:"play",action:function(){c.play()}}),c._preload&&c._preload!=="none"&&c.load(),c},load:function(){var o=this,c=null;if(t.noAudio){o._emit("loaderror",null,"No audio support.");return}typeof o._src=="string"&&(o._src=[o._src]);for(var d=0;d<o._src.length;d++){var p,_;if(o._format&&o._format[d])p=o._format[d];else{if(_=o._src[d],typeof _!="string"){o._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}p=/^data:audio\/([^;,]+);/i.exec(_),p||(p=/\.([^.]+)$/.exec(_.split("?",1)[0])),p&&(p=p[1].toLowerCase())}if(p||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),p&&t.codecs(p)){c=o._src[d];break}}if(!c){o._emit("loaderror",null,"No codec support for selected audio sources.");return}return o._src=c,o._state="loading",window.location.protocol==="https:"&&c.slice(0,5)==="http:"&&(o._html5=!0,o._webAudio=!1),new i(o),o._webAudio&&a(o),o},play:function(o,c){var d=this,p=null;if(typeof o=="number")p=o,o=null;else{if(typeof o=="string"&&d._state==="loaded"&&!d._sprite[o])return null;if(typeof o>"u"&&(o="__default",!d._playLock)){for(var _=0,v=0;v<d._sounds.length;v++)d._sounds[v]._paused&&!d._sounds[v]._ended&&(_++,p=d._sounds[v]._id);_===1?o=null:p=null}}var m=p?d._soundById(p):d._inactiveSound();if(!m)return null;if(p&&!o&&(o=m._sprite||"__default"),d._state!=="loaded"){m._sprite=o,m._ended=!1;var g=m._id;return d._queue.push({event:"play",action:function(){d.play(g)}}),g}if(p&&!m._paused)return c||d._loadQueue("play"),m._id;d._webAudio&&t._autoResume();var x=Math.max(0,m._seek>0?m._seek:d._sprite[o][0]/1e3),w=Math.max(0,(d._sprite[o][0]+d._sprite[o][1])/1e3-x),E=w*1e3/Math.abs(m._rate),A=d._sprite[o][0]/1e3,b=(d._sprite[o][0]+d._sprite[o][1])/1e3;m._sprite=o,m._ended=!1;var O=function(){m._paused=!1,m._seek=x,m._start=A,m._stop=b,m._loop=!!(m._loop||d._sprite[o][2])};if(x>=b){d._ended(m);return}var I=m._node;if(d._webAudio){var H=function(){d._playLock=!1,O(),d._refreshBuffer(m);var R=m._muted||d._muted?0:m._volume;I.gain.setValueAtTime(R,t.ctx.currentTime),m._playStart=t.ctx.currentTime,typeof I.bufferSource.start>"u"?m._loop?I.bufferSource.noteGrainOn(0,x,86400):I.bufferSource.noteGrainOn(0,x,w):m._loop?I.bufferSource.start(0,x,86400):I.bufferSource.start(0,x,w),E!==1/0&&(d._endTimers[m._id]=setTimeout(d._ended.bind(d,m),E)),c||setTimeout(function(){d._emit("play",m._id),d._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?H():(d._playLock=!0,d.once("resume",H),d._clearTimer(m._id))}else{var N=function(){I.currentTime=x,I.muted=m._muted||d._muted||t._muted||I.muted,I.volume=m._volume*t.volume(),I.playbackRate=m._rate;try{var R=I.play();if(R&&typeof Promise<"u"&&(R instanceof Promise||typeof R.then=="function")?(d._playLock=!0,O(),R.then(function(){d._playLock=!1,I._unlocked=!0,c?d._loadQueue():d._emit("play",m._id)}).catch(function(){d._playLock=!1,d._emit("playerror",m._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),m._ended=!0,m._paused=!0})):c||(d._playLock=!1,O(),d._emit("play",m._id)),I.playbackRate=m._rate,I.paused){d._emit("playerror",m._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}o!=="__default"||m._loop?d._endTimers[m._id]=setTimeout(d._ended.bind(d,m),E):(d._endTimers[m._id]=function(){d._ended(m),I.removeEventListener("ended",d._endTimers[m._id],!1)},I.addEventListener("ended",d._endTimers[m._id],!1))}catch(B){d._emit("playerror",m._id,B)}};I.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(I.src=d._src,I.load());var re=window&&window.ejecta||!I.readyState&&t._navigator.isCocoonJS;if(I.readyState>=3||re)N();else{d._playLock=!0,d._state="loading";var U=function(){d._state="loaded",N(),I.removeEventListener(t._canPlayEvent,U,!1)};I.addEventListener(t._canPlayEvent,U,!1),d._clearTimer(m._id)}}return m._id},pause:function(o){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"pause",action:function(){c.pause(o)}}),c;for(var d=c._getSoundIds(o),p=0;p<d.length;p++){c._clearTimer(d[p]);var _=c._soundById(d[p]);if(_&&!_._paused&&(_._seek=c.seek(d[p]),_._rateSeek=0,_._paused=!0,c._stopFade(d[p]),_._node))if(c._webAudio){if(!_._node.bufferSource)continue;typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),c._cleanBuffer(_._node)}else(!isNaN(_._node.duration)||_._node.duration===1/0)&&_._node.pause();arguments[1]||c._emit("pause",_?_._id:null)}return c},stop:function(o,c){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(o)}}),d;for(var p=d._getSoundIds(o),_=0;_<p.length;_++){d._clearTimer(p[_]);var v=d._soundById(p[_]);v&&(v._seek=v._start||0,v._rateSeek=0,v._paused=!0,v._ended=!0,d._stopFade(p[_]),v._node&&(d._webAudio?v._node.bufferSource&&(typeof v._node.bufferSource.stop>"u"?v._node.bufferSource.noteOff(0):v._node.bufferSource.stop(0),d._cleanBuffer(v._node)):(!isNaN(v._node.duration)||v._node.duration===1/0)&&(v._node.currentTime=v._start||0,v._node.pause(),v._node.duration===1/0&&d._clearSound(v._node))),c||d._emit("stop",v._id))}return d},mute:function(o,c){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(o,c)}}),d;if(typeof c>"u")if(typeof o=="boolean")d._muted=o;else return d._muted;for(var p=d._getSoundIds(c),_=0;_<p.length;_++){var v=d._soundById(p[_]);v&&(v._muted=o,v._interval&&d._stopFade(v._id),d._webAudio&&v._node?v._node.gain.setValueAtTime(o?0:v._volume,t.ctx.currentTime):v._node&&(v._node.muted=t._muted?!0:o),d._emit("mute",v._id))}return d},volume:function(){var o=this,c=arguments,d,p;if(c.length===0)return o._volume;if(c.length===1||c.length===2&&typeof c[1]>"u"){var _=o._getSoundIds(),v=_.indexOf(c[0]);v>=0?p=parseInt(c[0],10):d=parseFloat(c[0])}else c.length>=2&&(d=parseFloat(c[0]),p=parseInt(c[1],10));var m;if(typeof d<"u"&&d>=0&&d<=1){if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"volume",action:function(){o.volume.apply(o,c)}}),o;typeof p>"u"&&(o._volume=d),p=o._getSoundIds(p);for(var g=0;g<p.length;g++)m=o._soundById(p[g]),m&&(m._volume=d,c[2]||o._stopFade(p[g]),o._webAudio&&m._node&&!m._muted?m._node.gain.setValueAtTime(d,t.ctx.currentTime):m._node&&!m._muted&&(m._node.volume=d*t.volume()),o._emit("volume",m._id))}else return m=p?o._soundById(p):o._sounds[0],m?m._volume:0;return o},fade:function(o,c,d,p){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"fade",action:function(){_.fade(o,c,d,p)}}),_;o=Math.min(Math.max(0,parseFloat(o)),1),c=Math.min(Math.max(0,parseFloat(c)),1),d=parseFloat(d),_.volume(o,p);for(var v=_._getSoundIds(p),m=0;m<v.length;m++){var g=_._soundById(v[m]);if(g){if(p||_._stopFade(v[m]),_._webAudio&&!g._muted){var x=t.ctx.currentTime,w=x+d/1e3;g._volume=o,g._node.gain.setValueAtTime(o,x),g._node.gain.linearRampToValueAtTime(c,w)}_._startFadeInterval(g,o,c,d,v[m],typeof p>"u")}}return _},_startFadeInterval:function(o,c,d,p,_,v){var m=this,g=c,x=d-c,w=Math.abs(x/.01),E=Math.max(4,w>0?p/w:p),A=Date.now();o._fadeTo=d,o._interval=setInterval(function(){var b=(Date.now()-A)/p;A=Date.now(),g+=x*b,g=Math.round(g*100)/100,x<0?g=Math.max(d,g):g=Math.min(d,g),m._webAudio?o._volume=g:m.volume(g,o._id,!0),v&&(m._volume=g),(d<c&&g<=d||d>c&&g>=d)&&(clearInterval(o._interval),o._interval=null,o._fadeTo=null,m.volume(d,o._id),m._emit("fade",o._id))},E)},_stopFade:function(o){var c=this,d=c._soundById(o);return d&&d._interval&&(c._webAudio&&d._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(d._interval),d._interval=null,c.volume(d._fadeTo,o),d._fadeTo=null,c._emit("fade",o)),c},loop:function(){var o=this,c=arguments,d,p,_;if(c.length===0)return o._loop;if(c.length===1)if(typeof c[0]=="boolean")d=c[0],o._loop=d;else return _=o._soundById(parseInt(c[0],10)),_?_._loop:!1;else c.length===2&&(d=c[0],p=parseInt(c[1],10));for(var v=o._getSoundIds(p),m=0;m<v.length;m++)_=o._soundById(v[m]),_&&(_._loop=d,o._webAudio&&_._node&&_._node.bufferSource&&(_._node.bufferSource.loop=d,d&&(_._node.bufferSource.loopStart=_._start||0,_._node.bufferSource.loopEnd=_._stop,o.playing(v[m])&&(o.pause(v[m],!0),o.play(v[m],!0)))));return o},rate:function(){var o=this,c=arguments,d,p;if(c.length===0)p=o._sounds[0]._id;else if(c.length===1){var _=o._getSoundIds(),v=_.indexOf(c[0]);v>=0?p=parseInt(c[0],10):d=parseFloat(c[0])}else c.length===2&&(d=parseFloat(c[0]),p=parseInt(c[1],10));var m;if(typeof d=="number"){if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"rate",action:function(){o.rate.apply(o,c)}}),o;typeof p>"u"&&(o._rate=d),p=o._getSoundIds(p);for(var g=0;g<p.length;g++)if(m=o._soundById(p[g]),m){o.playing(p[g])&&(m._rateSeek=o.seek(p[g]),m._playStart=o._webAudio?t.ctx.currentTime:m._playStart),m._rate=d,o._webAudio&&m._node&&m._node.bufferSource?m._node.bufferSource.playbackRate.setValueAtTime(d,t.ctx.currentTime):m._node&&(m._node.playbackRate=d);var x=o.seek(p[g]),w=(o._sprite[m._sprite][0]+o._sprite[m._sprite][1])/1e3-x,E=w*1e3/Math.abs(m._rate);(o._endTimers[p[g]]||!m._paused)&&(o._clearTimer(p[g]),o._endTimers[p[g]]=setTimeout(o._ended.bind(o,m),E)),o._emit("rate",m._id)}}else return m=o._soundById(p),m?m._rate:o._rate;return o},seek:function(){var o=this,c=arguments,d,p;if(c.length===0)o._sounds.length&&(p=o._sounds[0]._id);else if(c.length===1){var _=o._getSoundIds(),v=_.indexOf(c[0]);v>=0?p=parseInt(c[0],10):o._sounds.length&&(p=o._sounds[0]._id,d=parseFloat(c[0]))}else c.length===2&&(d=parseFloat(c[0]),p=parseInt(c[1],10));if(typeof p>"u")return 0;if(typeof d=="number"&&(o._state!=="loaded"||o._playLock))return o._queue.push({event:"seek",action:function(){o.seek.apply(o,c)}}),o;var m=o._soundById(p);if(m)if(typeof d=="number"&&d>=0){var g=o.playing(p);g&&o.pause(p,!0),m._seek=d,m._ended=!1,o._clearTimer(p),!o._webAudio&&m._node&&!isNaN(m._node.duration)&&(m._node.currentTime=d);var x=function(){g&&o.play(p,!0),o._emit("seek",p)};if(g&&!o._webAudio){var w=function(){o._playLock?setTimeout(w,0):x()};setTimeout(w,0)}else x()}else if(o._webAudio){var E=o.playing(p)?t.ctx.currentTime-m._playStart:0,A=m._rateSeek?m._rateSeek-m._seek:0;return m._seek+(A+E*Math.abs(m._rate))}else return m._node.currentTime;return o},playing:function(o){var c=this;if(typeof o=="number"){var d=c._soundById(o);return d?!d._paused:!1}for(var p=0;p<c._sounds.length;p++)if(!c._sounds[p]._paused)return!0;return!1},duration:function(o){var c=this,d=c._duration,p=c._soundById(o);return p&&(d=c._sprite[p._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var o=this,c=o._sounds,d=0;d<c.length;d++)c[d]._paused||o.stop(c[d]._id),o._webAudio||(o._clearSound(c[d]._node),c[d]._node.removeEventListener("error",c[d]._errorFn,!1),c[d]._node.removeEventListener(t._canPlayEvent,c[d]._loadFn,!1),c[d]._node.removeEventListener("ended",c[d]._endFn,!1),t._releaseHtml5Audio(c[d]._node)),delete c[d]._node,o._clearTimer(c[d]._id);var p=t._howls.indexOf(o);p>=0&&t._howls.splice(p,1);var _=!0;for(d=0;d<t._howls.length;d++)if(t._howls[d]._src===o._src||o._src.indexOf(t._howls[d]._src)>=0){_=!1;break}return r&&_&&delete r[o._src],t.noAudio=!1,o._state="unloaded",o._sounds=[],o=null,null},on:function(o,c,d,p){var _=this,v=_["_on"+o];return typeof c=="function"&&v.push(p?{id:d,fn:c,once:p}:{id:d,fn:c}),_},off:function(o,c,d){var p=this,_=p["_on"+o],v=0;if(typeof c=="number"&&(d=c,c=null),c||d)for(v=0;v<_.length;v++){var m=d===_[v].id;if(c===_[v].fn&&m||!c&&m){_.splice(v,1);break}}else if(o)p["_on"+o]=[];else{var g=Object.keys(p);for(v=0;v<g.length;v++)g[v].indexOf("_on")===0&&Array.isArray(p[g[v]])&&(p[g[v]]=[])}return p},once:function(o,c,d){var p=this;return p.on(o,c,d,1),p},_emit:function(o,c,d){for(var p=this,_=p["_on"+o],v=_.length-1;v>=0;v--)(!_[v].id||_[v].id===c||o==="load")&&(setTimeout((function(m){m.call(this,c,d)}).bind(p,_[v].fn),0),_[v].once&&p.off(o,_[v].fn,_[v].id));return p._loadQueue(o),p},_loadQueue:function(o){var c=this;if(c._queue.length>0){var d=c._queue[0];d.event===o&&(c._queue.shift(),c._loadQueue()),o||d.action()}return c},_ended:function(o){var c=this,d=o._sprite;if(!c._webAudio&&o._node&&!o._node.paused&&!o._node.ended&&o._node.currentTime<o._stop)return setTimeout(c._ended.bind(c,o),100),c;var p=!!(o._loop||c._sprite[d][2]);if(c._emit("end",o._id),!c._webAudio&&p&&c.stop(o._id,!0).play(o._id),c._webAudio&&p){c._emit("play",o._id),o._seek=o._start||0,o._rateSeek=0,o._playStart=t.ctx.currentTime;var _=(o._stop-o._start)*1e3/Math.abs(o._rate);c._endTimers[o._id]=setTimeout(c._ended.bind(c,o),_)}return c._webAudio&&!p&&(o._paused=!0,o._ended=!0,o._seek=o._start||0,o._rateSeek=0,c._clearTimer(o._id),c._cleanBuffer(o._node),t._autoSuspend()),!c._webAudio&&!p&&c.stop(o._id,!0),c},_clearTimer:function(o){var c=this;if(c._endTimers[o]){if(typeof c._endTimers[o]!="function")clearTimeout(c._endTimers[o]);else{var d=c._soundById(o);d&&d._node&&d._node.removeEventListener("ended",c._endTimers[o],!1)}delete c._endTimers[o]}return c},_soundById:function(o){for(var c=this,d=0;d<c._sounds.length;d++)if(o===c._sounds[d]._id)return c._sounds[d];return null},_inactiveSound:function(){var o=this;o._drain();for(var c=0;c<o._sounds.length;c++)if(o._sounds[c]._ended)return o._sounds[c].reset();return new i(o)},_drain:function(){var o=this,c=o._pool,d=0,p=0;if(!(o._sounds.length<c)){for(p=0;p<o._sounds.length;p++)o._sounds[p]._ended&&d++;for(p=o._sounds.length-1;p>=0;p--){if(d<=c)return;o._sounds[p]._ended&&(o._webAudio&&o._sounds[p]._node&&o._sounds[p]._node.disconnect(0),o._sounds.splice(p,1),d--)}}},_getSoundIds:function(o){var c=this;if(typeof o>"u"){for(var d=[],p=0;p<c._sounds.length;p++)d.push(c._sounds[p]._id);return d}else return[o]},_refreshBuffer:function(o){var c=this;return o._node.bufferSource=t.ctx.createBufferSource(),o._node.bufferSource.buffer=r[c._src],o._panner?o._node.bufferSource.connect(o._panner):o._node.bufferSource.connect(o._node),o._node.bufferSource.loop=o._loop,o._loop&&(o._node.bufferSource.loopStart=o._start||0,o._node.bufferSource.loopEnd=o._stop||0),o._node.bufferSource.playbackRate.setValueAtTime(o._rate,t.ctx.currentTime),c},_cleanBuffer:function(o){var c=this,d=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!o.bufferSource)return c;if(t._scratchBuffer&&o.bufferSource&&(o.bufferSource.onended=null,o.bufferSource.disconnect(0),d))try{o.bufferSource.buffer=t._scratchBuffer}catch{}return o.bufferSource=null,c},_clearSound:function(o){var c=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);c||(o.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(o){this._parent=o,this.init()};i.prototype={init:function(){var o=this,c=o._parent;return o._muted=c._muted,o._loop=c._loop,o._volume=c._volume,o._rate=c._rate,o._seek=0,o._paused=!0,o._ended=!0,o._sprite="__default",o._id=++t._counter,c._sounds.push(o),o.create(),o},create:function(){var o=this,c=o._parent,d=t._muted||o._muted||o._parent._muted?0:o._volume;return c._webAudio?(o._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),o._node.gain.setValueAtTime(d,t.ctx.currentTime),o._node.paused=!0,o._node.connect(t.masterGain)):t.noAudio||(o._node=t._obtainHtml5Audio(),o._errorFn=o._errorListener.bind(o),o._node.addEventListener("error",o._errorFn,!1),o._loadFn=o._loadListener.bind(o),o._node.addEventListener(t._canPlayEvent,o._loadFn,!1),o._endFn=o._endListener.bind(o),o._node.addEventListener("ended",o._endFn,!1),o._node.src=c._src,o._node.preload=c._preload===!0?"auto":c._preload,o._node.volume=d*t.volume(),o._node.load()),o},reset:function(){var o=this,c=o._parent;return o._muted=c._muted,o._loop=c._loop,o._volume=c._volume,o._rate=c._rate,o._seek=0,o._rateSeek=0,o._paused=!0,o._ended=!0,o._sprite="__default",o._id=++t._counter,o},_errorListener:function(){var o=this;o._parent._emit("loaderror",o._id,o._node.error?o._node.error.code:0),o._node.removeEventListener("error",o._errorFn,!1)},_loadListener:function(){var o=this,c=o._parent;c._duration=Math.ceil(o._node.duration*10)/10,Object.keys(c._sprite).length===0&&(c._sprite={__default:[0,c._duration*1e3]}),c._state!=="loaded"&&(c._state="loaded",c._emit("load"),c._loadQueue()),o._node.removeEventListener(t._canPlayEvent,o._loadFn,!1)},_endListener:function(){var o=this,c=o._parent;c._duration===1/0&&(c._duration=Math.ceil(o._node.duration*10)/10,c._sprite.__default[1]===1/0&&(c._sprite.__default[1]=c._duration*1e3),c._ended(o)),o._node.removeEventListener("ended",o._endFn,!1)}};var r={},a=function(o){var c=o._src;if(r[c]){o._duration=r[c].duration,h(o);return}if(/^data:[^;]+;base64,/.test(c)){for(var d=atob(c.split(",")[1]),p=new Uint8Array(d.length),_=0;_<d.length;++_)p[_]=d.charCodeAt(_);u(p.buffer,o)}else{var v=new XMLHttpRequest;v.open(o._xhr.method,c,!0),v.withCredentials=o._xhr.withCredentials,v.responseType="arraybuffer",o._xhr.headers&&Object.keys(o._xhr.headers).forEach(function(m){v.setRequestHeader(m,o._xhr.headers[m])}),v.onload=function(){var m=(v.status+"")[0];if(m!=="0"&&m!=="2"&&m!=="3"){o._emit("loaderror",null,"Failed loading audio file with status: "+v.status+".");return}u(v.response,o)},v.onerror=function(){o._webAudio&&(o._html5=!0,o._webAudio=!1,o._sounds=[],delete r[c],o.load())},l(v)}},l=function(o){try{o.send()}catch{o.onerror()}},u=function(o,c){var d=function(){c._emit("loaderror",null,"Decoding audio data failed.")},p=function(_){_&&c._sounds.length>0?(r[c._src]=_,h(c,_)):d()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(o).then(p).catch(d):t.ctx.decodeAudioData(o,p,d)},h=function(o,c){c&&!o._duration&&(o._duration=c.duration),Object.keys(o._sprite).length===0&&(o._sprite={__default:[0,o._duration*1e3]}),o._state!=="loaded"&&(o._state="loaded",o._emit("load"),o._loadQueue())},f=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var o=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),c=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=c?parseInt(c[1],10):null;if(o&&d&&d<9){var p=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!p&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};s.Howler=t,s.Howl=n,typeof xi<"u"?(xi.HowlerGlobal=e,xi.Howler=t,xi.Howl=n,xi.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var i=n._howls.length-1;i>=0;i--)n._howls[i].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,i){var r=this;if(!r.ctx||!r.ctx.listener)return r;if(n=typeof n!="number"?r._pos[1]:n,i=typeof i!="number"?r._pos[2]:i,typeof t=="number")r._pos=[t,n,i],typeof r.ctx.listener.positionX<"u"?(r.ctx.listener.positionX.setTargetAtTime(r._pos[0],Howler.ctx.currentTime,.1),r.ctx.listener.positionY.setTargetAtTime(r._pos[1],Howler.ctx.currentTime,.1),r.ctx.listener.positionZ.setTargetAtTime(r._pos[2],Howler.ctx.currentTime,.1)):r.ctx.listener.setPosition(r._pos[0],r._pos[1],r._pos[2]);else return r._pos;return r},HowlerGlobal.prototype.orientation=function(t,n,i,r,a,l){var u=this;if(!u.ctx||!u.ctx.listener)return u;var h=u._orientation;if(n=typeof n!="number"?h[1]:n,i=typeof i!="number"?h[2]:i,r=typeof r!="number"?h[3]:r,a=typeof a!="number"?h[4]:a,l=typeof l!="number"?h[5]:l,typeof t=="number")u._orientation=[t,n,i,r,a,l],typeof u.ctx.listener.forwardX<"u"?(u.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),u.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),u.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),u.ctx.listener.upX.setTargetAtTime(r,Howler.ctx.currentTime,.1),u.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),u.ctx.listener.upZ.setTargetAtTime(l,Howler.ctx.currentTime,.1)):u.ctx.listener.setOrientation(t,n,i,r,a,l);else return h;return u},Howl.prototype.init=function(t){return function(n){var i=this;return i._orientation=n.orientation||[1,0,0],i._stereo=n.stereo||null,i._pos=n.pos||null,i._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},i._onstereo=n.onstereo?[{fn:n.onstereo}]:[],i._onpos=n.onpos?[{fn:n.onpos}]:[],i._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(t,n)}}),i;var r=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")i._stereo=t,i._pos=[t,0,0];else return i._stereo;for(var a=i._getSoundIds(n),l=0;l<a.length;l++){var u=i._soundById(a[l]);if(u)if(typeof t=="number")u._stereo=t,u._pos=[t,0,0],u._node&&(u._pannerAttr.panningModel="equalpower",(!u._panner||!u._panner.pan)&&e(u,r),r==="spatial"?typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):u._panner.setPosition(t,0,0):u._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),i._emit("stereo",u._id);else return u._stereo}return i},Howl.prototype.pos=function(t,n,i,r){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(t,n,i,r)}}),a;if(n=typeof n!="number"?0:n,i=typeof i!="number"?-.5:i,typeof r>"u")if(typeof t=="number")a._pos=[t,n,i];else return a._pos;for(var l=a._getSoundIds(r),u=0;u<l.length;u++){var h=a._soundById(l[u]);if(h)if(typeof t=="number")h._pos=[t,n,i],h._node&&((!h._panner||h._panner.pan)&&e(h,"spatial"),typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setPosition(t,n,i)),a._emit("pos",h._id);else return h._pos}return a},Howl.prototype.orientation=function(t,n,i,r){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(t,n,i,r)}}),a;if(n=typeof n!="number"?a._orientation[1]:n,i=typeof i!="number"?a._orientation[2]:i,typeof r>"u")if(typeof t=="number")a._orientation=[t,n,i];else return a._orientation;for(var l=a._getSoundIds(r),u=0;u<l.length;u++){var h=a._soundById(l[u]);if(h)if(typeof t=="number")h._orientation=[t,n,i],h._node&&(h._panner||(h._pos||(h._pos=a._pos||[0,0,-.5]),e(h,"spatial")),typeof h._panner.orientationX<"u"?(h._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setOrientation(t,n,i)),a._emit("orientation",h._id);else return h._orientation}return a},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,i,r,a;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")i=n[0],typeof r>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),t._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:t._panningModel});else return a=t._soundById(parseInt(n[0],10)),a?a._pannerAttr:t._pannerAttr;else n.length===2&&(i=n[0],r=parseInt(n[1],10));for(var l=t._getSoundIds(r),u=0;u<l.length;u++)if(a=t._soundById(l[u]),a){var h=a._pannerAttr;h={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:h.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:h.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:h.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:h.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:h.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:h.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:h.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:h.panningModel};var f=a._panner;f||(a._pos||(a._pos=t._pos||[0,0,-.5]),e(a,"spatial"),f=a._panner),f.coneInnerAngle=h.coneInnerAngle,f.coneOuterAngle=h.coneOuterAngle,f.coneOuterGain=h.coneOuterGain,f.distanceModel=h.distanceModel,f.maxDistance=h.maxDistance,f.refDistance=h.refDistance,f.rolloffFactor=h.rolloffFactor,f.panningModel=h.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,i=n._parent;n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,t.call(this),n._stereo?i.stereo(n._stereo):n._pos&&i.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,i=n._parent;return n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,n._stereo?i.stereo(n._stereo):n._pos?i.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,i._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(Wl);const r_=4.9,s_=2;function rn(s,e){return Math.random()*(e-s)+s}class a_{constructor(e){Ve(this,"snowFlakeMesh");Ve(this,"velocity");const t=new Qs(rn(0,2));let n=new Fr({color:16777215});this.velocity=new Z(rn(-1,1),rn(-1,1)),this.snowFlakeMesh=new nt(t,n),this.snowFlakeMesh.position.x=rn(-window.innerWidth*2,window.innerWidth*2),this.snowFlakeMesh.position.y=rn(-window.innerHeight*2,window.innerHeight*2),this.snowFlakeMesh.position.z=rn(-100,-50)}}class o_ extends i_{constructor(t){super(t);Ve(this,"letterMeshes");Ve(this,"snows");Ve(this,"christmasBackground");Ve(this,"snowFlakeVelocity",new Z(rn(.1,1),rn(.1,1)));Ve(this,"sound",new Wl.Howl({src:["./assets/bell.mp3"]}));Ve(this,"animLengthTime",1e3*Math.abs(2*r_)/s_);Ve(this,"spinningStartTime",0);Ve(this,"spinningEndTime",0);Ve(this,"canvas",this.renderer.domElement);Ve(this,"sizes",{width:window.innerWidth,height:window.innerHeight});Ve(this,"letterPotingTime",0);this.letterMeshes=[],this.snows=[]}initializeScene(){window.addEventListener("resize",()=>{this.sizes.width=window.innerWidth,this.sizes.height=window.innerHeight,this.camera.aspect=this.sizes.width/this.sizes.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}),this.camera.translateZ(18),this.addLights(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.addChristmasBackground();let t=this.getMessageFromUrl();this.addLettersToScene(t),this.addSnowFlakes();const n=new Z,i=new $g;window.addEventListener("click",r=>{const a=this.conver2DPositionTO3DPosition(r.clientX-15,r.clientY);i.setFromCamera(n,this.camera),i.intersectObjects(this.letterMeshes.map(l=>l.textMesh)),n.x=r.clientX/window.innerWidth*2-1,n.y=-(r.clientY/window.innerHeight)*2+1;for(let l=0;l<this.letterMeshes.length;l++){const u=this.letterMeshes[l].textMesh;if(u.geometry.boundingSphere==null){console.log("boundingSphere is undefined");return}if(u.position.x+.3<a.x&&u.position.x+1>a.x-.3&&u.position.y<a.y&&u.position.y>a.y-.5){if(this.letterMeshes[l].isSpin)continue;this.letterMeshes[l].finalAngle=Math.PI*2*3,this.letterMeshes[l].isSpin=!0,this.letterMeshes[l].startTime=null,this.letterMeshes[l].spinningCount=this.clickedPositionRatio(a.x,u,this.letterMeshes[l]),this.letterMeshes[l].spinningSpeed=this.clickedPositionRatio(a.x,u,this.letterMeshes[l])*1.5,this.sound.play()}}}),console.log("scene: ",this.scene)}clickedPositionRatio(t,n,i){let r=new T;n.getWorldPosition(r);let a=Math.abs(r.x-t);i.isSpingRight=a-.8>0,a=Math.abs(a-.8);let l=0;return a<.1?l=1:.1<a&&a<.2?l=2:l=3,l}conver2DPositionTO3DPosition(t,n){let i=new T,r=new T;i.set(t/this.canvas.clientWidth*2-1,-(n/this.canvas.clientHeight)*2+1,.5),i.unproject(this.camera),i.sub(this.camera.position).normalize();let a=-this.camera.position.z/i.z;return r.copy(this.camera.position).add(i.multiplyScalar(a)),r}addSnowFlakes(){new Bl().load("./assets/snowFlake.jpg",n=>{let i=3e3;for(let r=0;r<i;r++){const a=new a_(n);this.snows.push(a),this.scene.add(a.snowFlakeMesh)}})}addLettersToScene(t){(t==null||t=="")&&(t="Merry Christmas");const n=this.camera.position.x-t.length*.6;let i=n;const r=-8.5;for(let a=0;a<t.length;a++){let l=Da.randFloat(-.5,.5);const u=t.charAt(a);if(a==20&&(i=n),a>=20&&(l=Da.randFloat(-2.5,-1.5)),u==" ")continue;let h=i;new Dg().load("./assets/helvetiker_bold.typeface.json",o=>{const c=new sg(u,{font:o,size:1,height:.1,bevelEnabled:!1,bevelThickness:0,bevelSize:0,bevelOffset:0,bevelSegments:0});c.computeBoundingBox();const d=new Ns({color:"blue"}),p=new nt(c,d);p.name=u,p.position.x=h,p.position.y=r,this.addHanger(p),this.scene.add(p),this.letterMeshes.push({textMesh:p,startTime:this.spinningStartTime,endTime:this.spinningEndTime,finalAngle:0,isSpin:!1,spinningCount:1,spinningSpeed:1,yPopingStartPostion:-3,yPopingEndPosition:l,isSpingRight:!0})}),i+=1.3}}getMessageFromUrl(){const t=window.location.search;return new URLSearchParams(t).get("message")}addHanger(t){let n=t.position.y-100;const i=new si(.02,n,.02),r=new Ns({color:16777215}),a=new nt(i,r);a.translateY(-n/2);let l=.5;t.geometry.boundingSphere!=null&&(l=t.geometry.boundingSphere.radius),a.translateX(l),a.translateY(l/.9),a.translateZ(l/10),a.name=t.name+"'s Hanger",t.add(a)}addChristmasBackground(){const t=Mn.loadTexture("./assets/background.jpg");this.scene.background=t}addLights(){const i=new ra(16777088,1);this.scene.add(i);const r=6682527,a=16743168,l=1,u=new zl(r,a,l);u.translateX(-100),u.translateY(100),u.translateZ(100),this.scene.add(u)}updateScene(t){for(let l=0;l<this.snows.length;l++){const u=this.snows[l];u.snowFlakeMesh.position.x+=this.snowFlakeVelocity.x,u.snowFlakeMesh.position.y-=this.snowFlakeVelocity.y,u.snowFlakeMesh.position.y<-100&&(u.snowFlakeMesh.position.y+=200),u.snowFlakeMesh.position.x>600?u.snowFlakeMesh.position.x-=1200:u.snowFlakeMesh.position.x<-600&&(u.snowFlakeMesh.position.x+=1200)}for(let l=0;l<this.letterMeshes.length;l++){const u=this.letterMeshes[l],h=.1;if(u.textMesh.position.y<u.yPopingEndPosition&&(u.textMesh.position.y+=h),!u.isSpin)continue;let o=u.startTime;o==null&&(u.startTime=t,o=u.startTime),o==null&&(u.startTime=t),o+this.animLengthTime;var n=u.spinningSpeed,i=u.spinningCount,r=(t-o)/this.animLengthTime*n;r<0&&(r=0),r>i&&(u.isSpin=!1);let c=Math.PI;console.log("currLetterMesh.isSpiningRight: ",u.isSpingRight),u.isSpingRight&&(c=-Math.PI);var a=r*2*c;u.textMesh.rotation.y=a}}}function l_(){var s=document.getElementById("drawing");if(!s){console.warn("Your HTML page needs a DIV with id='drawing'");return}new o_(s)}l_();
