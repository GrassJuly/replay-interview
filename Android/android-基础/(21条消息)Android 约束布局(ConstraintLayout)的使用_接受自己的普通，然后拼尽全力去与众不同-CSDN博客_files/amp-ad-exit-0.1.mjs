(self.AMP=self.AMP||[]).push({n:"amp-ad-exit",v:"2009010507000",f:function(AMP,_){function g(a,b=""){try{return decodeURIComponent(a)}catch(c){return b}}let l=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function m(a){let b=Object.create(null);if(!a)return b;let c;for(;c=l.exec(a);){let a=g(c[1],c[1]),e=c[2]?g(c[2].replace(/\+/g," "),c[2]):"";b[a]=e}return b}let n="";function p(){let a=self;if(a.__AMP_MODE)var b=a.__AMP_MODE;else{{b=m(a.location.originalHash||a.location.hash);let c=m(a.location.search);n||(n=a.AMP_CONFIG&&a.AMP_CONFIG.v?a.AMP_CONFIG.v:"012009010507000");b={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(b.development)||a.AMP_DEV_MODE),examiner:"2"==b.development,esm:!0,geoOverride:b["amp-geo"],minified:!0,lite:void 0!=c.amp_lite,test:!1,log:b.log,version:"2009010507000",rtvVersion:n}}b=a.__AMP_MODE=b}return b}let q=Object.prototype.toString;let r=self.AMP_CONFIG||{},t=("string"==typeof r.cdnProxyRegex?new RegExp(r.cdnProxyRegex):r.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function u(a){if(self.document&&self.document.head&&(!self.location||!t.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}r.cdnUrl||u("runtime-host");r.geoApiUrl||u("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let v=self.__AMP_LOG;function w(){if(!v.user)throw Error("failed to call initLogConstructor");return v.user}function x(){if(v.dev)return v.dev;throw Error("failed to call initLogConstructor")}function y(a,b,c,d){w().assert(a,b,c,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}class z{constructor(a,b){this.name=a;this.type=b}filter(){}onLayoutMeasure(){}}class A{constructor(){let a,b;this.promise=new Promise((c,d)=>{a=c;b=d});this.resolve=a;this.reject=b}}class B{constructor(a){this.L=a;this.B=this.F=0;this.l=Object.create(null)}has(a){return!!this.l[a]}get(a){let b=this.l[a];if(b)return b.access=++this.B,b.payload}put(a,b){this.has(a)||this.F++;this.l[a]={payload:b,access:this.B};if(!(this.F<=this.L)){a=this.l;var c=this.B+1;for(let b in a){let{access:e}=a[b];if(e<c){c=e;var d=b}}void 0!==d&&(delete a[d],this.F--)}}}(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0});let C,D;function E(a){C||(C=self.document.createElement("a"),D=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new B(100)));var b=D,c=C;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a}function F(a){let b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(d){}let c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(let b=0;b<c.length;b++)0!=c[b].length&&("-"==c[b][0]?a[c[b].substr(1)]=!1:a[c[b]]=!0);return a}function G(a){let b=a.ownerDocument.defaultView;var c=H(b);let d=b!=c;if(c.__AMP__EXPERIMENT_TOGGLES)var e=c.__AMP__EXPERIMENT_TOGGLES;else{c.__AMP__EXPERIMENT_TOGGLES=Object.create(null);e=c.__AMP__EXPERIMENT_TOGGLES;if(c.AMP_CONFIG)for(var f in c.AMP_CONFIG){var h=c.AMP_CONFIG[f];"number"===typeof h&&0<=h&&1>=h&&(e[f]=Math.random()<h)}if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-doc-opt-in"])&&0<c.AMP_CONFIG["allow-doc-opt-in"].length&&(f=c.AMP_CONFIG["allow-doc-opt-in"],h=c.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){h=h.getAttribute("content").split(",");for(var k=0;k<h.length;k++)-1!=f.indexOf(h[k])&&(e[h[k]]=!0)}Object.assign(e,F(c));if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-url-opt-in"])&&0<c.AMP_CONFIG["allow-url-opt-in"].length)for(f=c.AMP_CONFIG["allow-url-opt-in"],c=m(c.location.originalHash||c.location.hash),h=0;h<f.length;h++)k=c[`e-${f[h]}`],"1"==k&&(e[f[h]]=!0),"0"==k&&(e[f[h]]=!1)}let W=!!e["ampdoc-fie"];d&&!W?a=I(b,"url-replace")?J(b,"url-replace"):null:(a=K(a),a=L(a),a=I(a,"url-replace")?J(a,"url-replace"):null);return a}function H(a){return a.__AMP_TOP||(a.__AMP_TOP=a)}function K(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=H(b);a=J(b,"ampdoc").getAmpDoc(a)}return a}function L(a){a=K(a);return a.isSingleDoc()?a.win:a}function J(a,b){I(a,b);a=M(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function N(a){var b;(b=M(a)["host-exit"])?b.promise?b=b.promise:(J(a,"host-exit"),b=b.promise=Promise.resolve(b.obj)):b=null;let c=b;if(c)return c;a=M(a);a["host-exit"]=O();return a["host-exit"].promise}function M(a){let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function I(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}function O(){let a=new A,b=a.promise,c=a.resolve,d=a.reject;b.catch(()=>{});return{obj:null,promise:b,resolve:c,reject:d,context:null,ctor:null}}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function P(a,b,c){let d;try{d=a.open(b,c,void 0)}catch(f){x().error("DOM","Failed to open url on target: ",c,f)}if(!(c=d||"_top"==c)){var e;"number"!==typeof e&&(e=0);c=0<e+8?!1:-1!=="".indexOf("noopener",e)}c||a.open(b,"_top")}function Q(a){return"SCRIPT"==a.tagName&&a.hasAttribute("type")&&"APPLICATION/JSON"==a.getAttribute("type").toUpperCase()}let R;function aa(a,b){let e,c=a,d=b;e=a=>{try{return d(a)}catch(k){throw self.__AMP_REPORT_ERROR(k),k}};let f=ba();c.addEventListener("message",e,f?void 0:!1);return()=>{c&&c.removeEventListener("message",e,f?void 0:!1);e=c=d=null}}function ba(){if(void 0!==R)return R;R=!1;try{let a={get capture(){R=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(a){}return R}function ca(a,b){return aa(a,b)}function S(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter((function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})));c.push.apply(c,d)}return c}function T(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?S(Object(c),!0).forEach((function(b){var d=c[b];b in a?Object.defineProperty(a,b,{value:d,enumerable:!0,configurable:!0,writable:!0}):a[b]=d})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):S(Object(c)).forEach((function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))}))}return a}let U={bg:"https://tpc.googlesyndication.com/b4a/b4a-runner.html",moat:"https://z.moatads.com/ampanalytics093284/iframe.html"};T(T({},U),{},{bg:"https://tpc.googlesyndication.com/b4a/experimental/b4a-runner.html"});function da(a){y("object"==typeof a);if(a.filters){var b=a.filters;let c=["clickDelay","clickLocation","inactiveElement"];for(let a in b)y("object"==typeof b[a],"Filter specification '%s' is malformed",a),y(-1!=c.indexOf(b[a].type),"Supported filters: "+c.join(", "))}else a.filters={};if(a.transport){b=a.transport;for(var c in b)y("beacon"==c||"image"==c,`Unknown transport option: '${c}'`),y("boolean"==typeof b[c])}else a.transport={};c=a.targets;y("object"==typeof c,"'targets' must be an object");for(let b in c)ea(b,c[b],a);return a}function ea(a,b,c){y("string"==typeof b.finalUrl,"finalUrl of target '%s' must be a string",a);b.filters&&b.filters.forEach(a=>{y(c.filters[a],"filter '%s' not defined",a)});if(b.vars){a=/^_[a-zA-Z0-9_-]+$/;for(let c in b.vars)y(a.test(c),"'%s' must match the pattern '%s'",c,a)}}function V(a){return w().assertString(U[a],`Unknown or invalid vendor ${a}, note that vendor must use transport: iframe`)}class fa extends z{constructor(a,b,c){super(a,b.type);y("clickDelay"==b.type&&"number"==typeof b.delay&&0<b.delay,"Invalid ClickDelay spec");this.spec=b;this.intervalStart=Date.now();b.startTimingEvent&&c.performance&&c.performance.timing&&void 0!=c.performance.timing[b.startTimingEvent]&&(this.intervalStart=c.performance.timing[b.startTimingEvent])}filter(){return Date.now()-this.intervalStart>=this.spec.delay}}class ha extends z{constructor(a,b,c){super(a,b.type);y("clickLocation"==b.type&&("undefined"===typeof b.left||"number"===typeof b.left)&&("undefined"===typeof b.right||"number"===typeof b.right)&&("undefined"===typeof b.top||"number"===typeof b.top)&&("undefined"===typeof b.bottom||"number"===typeof b.bottom)&&("undefined"===typeof b.relativeTo||"string"===typeof b.relativeTo),"Invaid ClickLocation spec");this.M=b.left||0;this.N=b.right||0;this.P=b.top||0;this.K=b.bottom||0;this.D=b.relativeTo;this.H=c;this.h={top:0,right:0,bottom:0,left:0}}filter(a){return a.clientX>=this.h.left&&a.clientX<=this.h.right&&a.clientY>=this.h.top&&a.clientY<=this.h.bottom?!0:!1}onLayoutMeasure(){this.H.getVsync().measure(()=>{let a=this.H.win;if(this.D){let b=a.document.querySelector(this.D);y(b,`relativeTo element ${this.D} not found.`);let c=b.getBoundingClientRect();this.h.left=c.left;this.h.top=c.top;this.h.bottom=c.bottom;this.h.right=c.right}else this.h.left=0,this.h.top=0,this.h.bottom=a.innerHeight,this.h.right=a.innerWidth;this.h.left+=this.M;this.h.top+=this.P;this.h.right-=this.N;this.h.bottom-=this.K})}}class ia extends z{constructor(a,b){super(a,b.type);y("inactiveElement"==b.type&&"string"==typeof b.selector,"Invalid InactiveElementspec");this.O=b.selector}filter(a){{a=a.target;let b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;a=b?b.call(a,this.O):!1}return!a}}function X(a,b,c){switch(b.type){case"clickDelay":return new fa(a,b,c.win);case"clickLocation":return new ha(a,b,c);case"inactiveElement":return new ia(a,b)}}function ja(a,b){try{a:{let d=(a.ownerDocument||a).defaultView,f=b||H(d);if(d&&d!=f&&H(d)==f)try{var c=d.frameElement;break a}catch(h){}c=null}let d=c.parentElement;if("AMP-AD"==d.nodeName)return String(d.getResourceId())}catch(d){}return null}function Y(a,b){return a.every(a=>a.filter(b))}function ka(a,b,c,d){let e={CLICK_X:()=>c.clientX,CLICK_Y:()=>c.clientY},f=G(a.element),h={RANDOM:!0,CLICK_X:!0,CLICK_Y:!0};if(d.vars)for(let c in d.vars){if("_"!=c[0])continue;let k=d.vars[c];k&&(e[c]=()=>{if(k.iframeTransportSignal){let b=f.expandStringSync(k.iframeTransportSignal,{IFRAME_TRANSPORT_SIGNAL:(b,c)=>{if(!b||!c)return"";let d=a.J[b];if(d&&c in d)return d[c]}});if(k.iframeTransportSignal==`IFRAME_TRANSPORT_SIGNAL${b}`)x().error("amp-ad-exit","Invalid IFRAME_TRANSPORT_SIGNAL format:"+b+" (perhaps there is a space after a comma?)");else if(""!=b)return b}return c in b?b[c]:k.defaultValue},h[c]=!0)}return a=>f.expandUrlSync(a,e,h)}function Z(a){"inabox"!=p().runtime&&(a.j=a.j||ja(a.element,H(a.win)),a.j&&(a.w=ca(a.getAmpDoc().win,b=>{if(a.C[b.origin]){var c=b.data;if("string"==typeof c&&0==c.indexOf("amp-")&&-1!=c.indexOf("{")){var d=c.indexOf("{");try{var e=JSON.parse(c.substr(d))}catch(f){x().error("MESSAGING","Failed to parse message: "+c,f),e=null}}else e=null;e&&"iframe-transport-response"==e.type&&(c=e,b=b.origin,y(c.message,"Received empty response from 3p analytics frame"),y(c.creativeId,"Received malformed message from 3p analytics frame: creativeId missing"),y(c.vendor,"Received malformed message from 3p analytics frame: vendor missing"),d=E(V(c.vendor)),y(d&&d.origin==b,`Invalid origin for vendor ${c.vendor}: ${b}`),e.creativeId==a.j&&(a.J[e.vendor]=e.message))}})))}class la extends AMP.BaseElement{constructor(a){super(a);this.G={};this.I={};this.m=[];this.o={beacon:!0,image:!0};this.A={};this.registerAction("exit",this.exit.bind(this));this.registerAction("setVariable",this.setVariable.bind(this),1);this.J={};this.j=this.w=null;this.C={}}exit(a){let b=a.args;let{event:c}=a;y("variable"in b!="target"in b,"One and only one of 'target' and 'variable' must be specified");let d;"variable"in b?((d=this.I[b.variable])||(d=b["default"]),y(d,`Variable target not found, variable:'${b.variable}', default:'${b["default"]}'`),delete b["default"]):d=b.target;let e=this.G[d];y(e,`Exit target not found: '${d}'`);y(c,"Unexpected null event");c.preventDefault();if(Y(this.m,c)&&Y(e.filters,c)){var f=ka(this,b,c,e);e.trackingUrls&&e.trackingUrls.map(f).forEach(a=>{this.o.beacon&&this.win.navigator.sendBeacon&&this.win.navigator.sendBeacon(a,"")||!this.o.image||(this.win.document.createElement("img").src=a)});var h=f(e.finalUrl);K(this.getAmpDoc()).getHeadNode().querySelector("script[host-service]")?N(L(this.getAmpDoc())).then(a=>a.openUrl(h)).catch(a=>{a.fallback&&P(this.win,h,"_blank")}):P(this.win,h,e.behaviors&&e.behaviors.clickTarget&&"_top"==e.behaviors.clickTarget?"_top":"_blank")}}setVariable(a){a=a.args;y(this.G[a.target],`Exit target not found: '${a.target}'`);this.I[a.name]=a.target}buildCallback(){this.element.setAttribute("aria-hidden","true");this.m.push(X("minDelay",{type:"clickDelay",delay:1e3,startTimingEvent:void 0},this));this.m.push(X("carouselBtns",{type:"inactiveElement",selector:".amp-carousel-button"},this));var a=this.element.children;y(1==a.length,"The tag should contain exactly one <script> child.");a=a[0];y(Q(a),'The amp-ad-exit config should be inside a <script> tag with type="application/json"');try{let b=da(JSON.parse(a.textContent));let c;"[object Object]"===q.call(b.options)&&"string"===typeof b.options.startTimingEvent&&(c=b.options.startTimingEvent,this.m.splice(0,1,X("minDelay",{type:"clickDelay",delay:1e3,startTimingEvent:b.options.startTimingEvent},this)));for(let a in b.filters){let d=b.filters[a];"clickDelay"==d.type&&(d.startTimingEvent=d.startTimingEvent||c);this.A[a]=X(a,d,this)}for(let a in b.targets){let c=b.targets[a];this.G[a]={finalUrl:c.finalUrl,trackingUrls:c.trackingUrls||[],vars:c.vars||{},filters:(c.filters||[]).map(a=>this.A[a]).filter(a=>a),behaviors:c.behaviors||{}};for(let a in c.vars){if(!c.vars[a].iframeTransportSignal)continue;let b=c.vars[a].iframeTransportSignal.match(/IFRAME_TRANSPORT_SIGNAL\(([^,]+)/);if(!b||2>b.length)continue;let d=b[1],{origin:e}=E(V(d));this.C[e]=this.C[e]||d}}this.o.beacon=!1!==b.transport.beacon;this.o.image=!1!==b.transport.image}catch(b){throw this.user().error("amp-ad-exit","Invalid JSON config",b),b}Z(this)}resumeCallback(){Z(this)}unlayoutCallback(){this.w&&(this.w(),this.w=null);return super.unlayoutCallback()}isLayoutSupported(){return!0}onLayoutMeasure(){for(let a in this.A)this.A[a].onLayoutMeasure()}}(a=>{a.registerElement("amp-ad-exit",la)})(self.AMP)}});