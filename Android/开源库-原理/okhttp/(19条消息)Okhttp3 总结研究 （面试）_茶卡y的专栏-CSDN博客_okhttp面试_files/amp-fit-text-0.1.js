(self.AMP=self.AMP||[]).push({n:"amp-fit-text",v:"2008102328000",f:(function(AMP,_){
var f="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function k(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}k(this);"function"===typeof Symbol&&Symbol("x");var l;
if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var n={a:!0},p={};try{p.__proto__=n;m=p.a;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var r=l;var t=self.AMP_CONFIG||{},u=("string"==typeof t.cdnProxyRegex?new RegExp(t.cdnProxyRegex):t.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function v(a){if(self.document&&self.document.head&&(!self.location||!u.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}t.cdnUrl||v("runtime-host");t.geoApiUrl||v("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w,x="Webkit webkit Moz moz ms O o".split(" ");function y(a,b,c){var d=a.style;if(2>b.length||0!=b.lastIndexOf("--",0)){w||(w=Object.create(null));var e=w[b];if(!e){e=b;if(void 0===d[b]){var g=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var h=0;h<x.length;h++){var q=x[h]+g;if(void 0!==d[q]){g=q;break b}}g=""}void 0!==d[g]&&(e=g)}w[b]=e}b=e}b&&((2>b.length?0:0==b.lastIndexOf("--",0))?a.style.setProperty(b,c):a.style[b]=c)}function z(a,b){for(var c in b)y(a,c,b[c])};function A(a){var b=parseFloat(a);return"number"===typeof b&&isFinite(b)?b:void 0};function B(a){a=AMP.BaseElement.call(this,a)||this;a.h=null;a.c=null;a.j=null;a.m=-1;a.l=-1;a.o="";return a}var C=AMP.BaseElement;B.prototype=f(C.prototype);B.prototype.constructor=B;if(r)r(B,C);else for(var D in C)if("prototype"!=D)if(Object.defineProperties){var E=Object.getOwnPropertyDescriptor(C,D);E&&Object.defineProperty(B,D,E)}else B[D]=C[D];B.w=C.prototype;
B.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
B.prototype.buildCallback=function(){var a=this;this.h=this.element.ownerDocument.createElement("div");this.applyFillContent(this.h);this.h.classList.add("i-amphtml-fit-text-content");z(this.h,{zIndex:2});this.c=this.element.ownerDocument.createElement("div");z(this.c,{lineHeight:"1.15em"});this.h.appendChild(this.c);this.j=this.element.ownerDocument.createElement("div");z(this.j,{position:"absolute",top:0,left:0,zIndex:1,visibility:"hidden",lineHeight:"1.15em"});this.getRealChildNodes().forEach(function(b){a.c.appendChild(b)});
this.j.innerHTML=this.c.innerHTML;this.element.appendChild(this.h);this.element.appendChild(this.j);this.m=A(this.element.getAttribute("min-font-size"))||6;this.l=A(this.element.getAttribute("max-font-size"))||72;Object.defineProperty(this.element,"textContent",{set:function(b){a.o=b;a.mutateElement(function(){a.c.textContent=b;a.j.innerHTML=a.c.innerHTML;F(a)})},get:function(){return a.o||a.c.textContent}})};B.prototype.prerenderAllowed=function(){return!0};B.prototype.isRelayoutNeeded=function(){return!0};
B.prototype.layoutCallback=function(){var a=this;return this.mutateElement(function(){F(a)})};
function F(a){var b=a.h.offsetHeight,c=a.j;var d=a.h.offsetWidth;var e=a.m,g=a.l;for(g++;1<g-e;){var h=Math.floor((e+g)/2);y(c,"fontSize",h+"px");var q=c.offsetWidth;c.offsetHeight>b||q>d?g=h:e=h}d=e;y(a.c,"fontSize",d+"px");c=a.c;a=a.j;y(a,"fontSize",d+"px");a=a.offsetHeight>b;d*=1.15;e=Math.floor(b/d);c.classList.toggle("i-amphtml-fit-text-content-overflown",a);z(c,{lineClamp:a?e:"",maxHeight:a?d*e+"px":""})}(function(a){a.registerElement("amp-fit-text",B,".i-amphtml-fit-text-content,.i-amphtml-fit-text-content.i-amphtml-fill-content{display:block;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:center;justify-content:center}.i-amphtml-fit-text-content-overflown{display:block;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}\n/*# sourceURL=/extensions/amp-fit-text/0.1/amp-fit-text.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-fit-text-0.1.js.map
