var g=window,k=document,m=function(b){return(b||"")+(new Date).getTime()+Math.round(1E5*Math.random())},n=function(b,a){return b+(-1==b.indexOf("?")?"?":"&")+a},r=function(b,a,c){if(2<arguments.length)"style"==a&&(b.style.cssText=c),b.setAttribute(a,c);else if("object"==typeof a)for(var e in a)q(a,e)&&r(b,e,a[e])},x=function(b,a){return b.replace(/%%BSW_EXT%%/g,a[s]).replace(/%%BSW_EXT_ENC%%/g,t(a[s])).replace(/%%BSW_WIDTH%%/g,a[u]).replace(/%%BSW_HEIGHT%%/g,a[v]).replace(/%%BSW_HOST%%/g,a[w]).replace(/%%BSW_PRICE_ENC%%/g,
a[aa])},A=function(b,a){return b.replace(/\{\$([_\w]+)\}/g,function(b,e){return a[e]||""})},fa=function(){var b=B,a='<iframe id="{$'+C+'}IF" src="{$'+E+'}" width="{$_wp}" height="{$_hp}" scrolling="no" border="0" frameborder="0" style="border:none;" marginheight="0" marginwidth="0" allowtransparency="true"></iframe>';switch(Math.abs(b[F])){case ba:return G({swf:b[E],width:b[u],height:b[v]});case ca:return G({swf:b[H],flashvars:"video="+t(b[E])+"&amp;clickTAG="+t(b[I]),scale:"noscale",width:b[u],height:b[v]})}switch(Math.abs(b[F])){case da:return'<img src="{$'+
E+'}" width="{$_wp}" height="{$_hp}" border="0"/>';case ea:return b[E]+="#"+b[I],a;case J:return b[E]="about:blank",a}},G=function(b){var a={quality:"high",align:"middle",menu:"false",wmode:"transparent"},c;for(c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);var e='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" type="application/x-shockwave-flash" ',f='<embed src="'+a.swf+'" type="application/x-shockwave-flash" ',d='<param name="movie" value="'+a.swf+'">';a.swf=void 0;for(c in a)void 0!==a[c]&&
(b=c+'="'+a[c]+'" ',0>",width,height,hspace,vspace,align,class,id,name,style,".indexOf(","+c+",")?d+='<param name="'+c+'" value="'+a[c]+'">':e+=b,f+=b);return e+">"+d+f+"></embed></object>"},P=function(){try{var b=k.documentElement,a=k.body,c=[!!a,!!b,g.devicePixelRatio,k.compatMode,g.innerWidth,g.innerHeight,b[K],b[L],b.offsetWidth,b.offsetHeight,b.scrollWidth,b.scrollHeight],e=g.screen;e&&c.push("screen",e.width,e.height,e.availWidth,e.availHeight);a&&c.push("body",a[K],a[L],a.offsetWidth,a.offsetHeight,
a.scrollWidth,a.scrollHeight);return c.join("|")}catch(f){return"error:"+f}},Q=function(b){var a=0,c=arguments,e,f;for(e=1;e<c.length;e++)if((f=c[e])&&("number"==typeof f||(f=f[b]))&&0<f)a=a&&f>a?a:f;return a},T=function(){try{for(;R<S.length;R++)if(!1===S[R](T)){R++;break}}catch(b){U(R,b,B[s])}},C="id",F="ct",E="url",w="CH",I="click",s="bsw_ext",u="width",v="height",K="clientWidth",L="clientHeight",ba=1,ca=2,da=3,ea=4,J=5,H="PLAYER_URL",aa="bsw_price_enc",q=function(b,a){return Object.prototype.hasOwnProperty.call(b,
a)},t=encodeURIComponent,V;V=function(b){try{var a=m("_trlog_"),c=g[a]=new Image;c.onload=c.onerror=function(){g[a]=void 0};c.src=b}catch(e){try{k.createElement("img").src=b}catch(f){}}};
var W=function(b,a){if(a)for("string"==typeof a&&(a=[a]);a.length;)V(x(a.shift(),b))},U=function(b,a,c){V("http://test.masky.biddingx.com/e1.gif?p=TXE"+b+"&n="+t(a.name)+"&m="+t(a.message)+"&s="+t(String(a.stack||"").slice(0,200))+"&ext="+t(String(c||"").slice(0,500)))},X=g.BSW_VENDOR||{},Y,$=function(b,a){try{delete g[a]}catch(c){g[a]=void 0}try{b.onerror=null,Z.removeChild(b)}catch(e){}},Z=k.getElementsByTagName("head")[0];
Y=function(b,a,c,e){for(;!c||q(g,c);)c=m("_jsonp_");b={type:"text/javascript",src:n(b,"callback="+c)};var f=k.createElement("script");b&&r(f,b);e=f;e.async=!0;g[c]=function(b){setTimeout(function(){a(b)},0);$(e,c)};e.onerror=function(){setTimeout(a,0);$(e,c)};Z.appendChild(e)};var ga,ha=0,B=g.BSW;
if(B){var S=[function(b){if(!k.body)return ha=1,setTimeout(b,30),!1},function(b){var a=B;W(a,a.track);if(B.auction){var c=B;c.auction||b();ga=setTimeout(function(){b();U(900,{name:"prepare_auction_timeout"},c[s])},2E3);a=c.acurl||"http://ac.bidex.cn/bidex/auction?AUCTION";a=a.replace("AUCTION",c.auction);Y(a,function(a){clearTimeout(ga);if(a&&a.ok){a=a.data;for(var f in a)q(a,f)&&(c[f]=a[f])}b()});return!1}},function(){for(var b=B,a;!a||k.getElementById(a);)b[C]=a=m("BSW");if(b.adm&&(a=b.adm.match(/\/\*\s*BSW_TAG\s+([\S\s]+)\*\//m))){a:{try{a=
(new Function("return "+a[1]))();break a}catch(c){}a=null}a:{var e=a,f,d=b[u],l=b[v];f=e.strict;if(d&&l){var h=k.body;if(!h||"CSS1Compat"===k.compatMode)h=k.documentElement;B.container&&k.getElementById(B.container)&&h.style&&(h.style.cssText+="margin:0px;padding:0px;");h=k.body;if(!h||"CSS1Compat"===k.compatMode)h=k.documentElement;var p=Q(K,h,g.innerWidth),h=Q(L,h,g.innerHeight),D=Math.abs(p*l/h/d-1);if(e.tr_shape&&(!p||!h||0.05<Math.abs(D))){var y="ct="+d+"*"+l+"&sc="+p+"*"+h;V(n(e.tr_shape,y+
"&env="+P()));if(!g.innerWidth||!g.innerHeight)var y=y+("&st="+(new Date).getTime()),ia=setInterval(function(){g.innerHeight&&g.innerWidth&&(clearInterval(ia),y+="&et="+(new Date).getTime(),V(n(e.tr_shape,y+"&env="+P())))},1E3)}if(p&&h&&-6!=b[F]){switch(f){case 1:b[u]=p;b[v]=h;break;case 4:f=e.ratios;var p=h/p,D=0.05,M=0,N;if(f)for(var O=f.length;0<O--;)N=Math.abs(f[O]*p-1),N<D&&(D=N,M=f[O]);M&&(b[u]=Math.round(h*M),b[v]=h);break;case 2:b[v]=Math.round(h*d/p);break;case 3:b[u]=Math.round(p*l/h);break;
default:break a}b.OW=d;b.OH=l}}}"logo"in a&&(b.logo=a.logo)}a=b.base;d=b.ssl;a?(a=a.split("/",3),a=(d?"https":"http")+"://"+a[2]):a=d?"https://cdn.masky.biddingx.com":"http://cdn.scdng.com";d=[1,0,3,2][b.logo];l=q(X,"t")?X.t:0;b.logo=void 0===d||(l?!l[d]:1==b.ut)?-1:d;b._lh=18;b._lw=24;b._lwh=130;b.LS="t";b[H]=a+"/ui/player.swf";b[w]=a;b.base=a+(q(X,"v")?X.v:"/data/v/res")+"/";b.link=q(X,"l")?X.l:"http://www.biddingx.com";b.about=q(X,"t")?X.t:"Biddingx.com\u63d0\u4f9b\u7684\u5e7f\u544a";a=Math.abs(b[u]);
d=0==a;b._wpx=d?"100%":a+"px";b._wp=d?"100%":a;a=Math.abs(b[v]);d=0==a;b._hpx=d?"auto":a+"px";b._hp=d?"":a;b[F]=b[F]||1;b.CP=b.CP||"absolute";b.mark=b.mark||1;var b=fa(),j=B;a=["","{position:{$CP};top:0;left:0;width:{$_wpx};height:{$_hpx};overflow:hidden;}","C {z-index:10;position:absolute;top:0;left:0;width:{$_wpx};height:{$_hpx};display:block;filter:alpha(opacity=0);opacity:0;background:#FFF;}","VP {z-index:1;position:relative;padding:0;margin:0;width:{$_wpx};height:{$_hpx};}"];d=j.logo;-1!=d&&
(a.push("L {z-index:20;display:block;position:absolute;{$_lp};width:{$_lw}px;height:{$_lh}px;text-indent:90em;overflow:hidden;outline:0;blr:expression(this.onFocus=this.blur());"+'background:url("{u}") no-repeat;_background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="{u}");}'.replace(/\{u\}/g,"{$$_sl}"),"L:hover {width:{$_lwh}px;cursor:pointer;"+'background:url("{u}") no-repeat;_background:none;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="{u}");}'.replace(/\{u\}/g,
"{$$_bl}")),j._lp=["left:0;top:0","top:0;right:0","right:0;bottom:0","bottom:0;left:0"][d],d=j.base+j.LS+d,j._sl=d+"s.png",j._bl=d+"b.png");a=a.join("#{$"+C+"}");d="";j.container&&k.getElementById(j.container)&&k.body?(a=A(a,j),l=k.createElement("style"),l.type="text/css",l.styleSheet?l.styleSheet.cssText=a:l.innerHTML=a,k.body.appendChild(l)):d="<style>"+a+"</style>";a=d+('<div id="{$'+C+'}">');0<j[F]&&(a+='<a id="{$'+C+'}C" target="_blank" href="{$'+I+'}" onclick="{$'+C+'}CT()"></a>',g[j[C]+"CT"]=
function(){var a=j.click_track,b=[];if(a){"string"==typeof a&&(a=[a]);for(var c=a.length;0<c--;)b.push(a[c]);W(j,b)}});-1!=j.logo&&(a+='<a href="{$link}" target="_blank" id="{$'+C+'}L" title="{$about}">{$about}</a>');-1!=j.mark&&(d="http://cdn.scdng.com/bidex/v/res/m{mark_index}.png".replace("{mark_index}",j.mark),a+='<img src="'+d+'" style="position:absolute!important;left:0!important;bottom:0!important;top:auto!important;right:auto!important;z-index:2!important;width:auto!important;height:auto!important;"/>');
1>5*Math.random()&&(a+='<div style="position:absolute;top:-1000px;">'+G({swf:"{$"+w+"}/ui/fc.swf",width:1,height:1})+"</div>");a+='<div id="{$'+C+'}VP">'+b+"</div>";a+="</div>";a=x(A(a,j),j);(b=j.container&&k.getElementById(j.container))?b.innerHTML+=a:k.write(a);ha&&k.close();b=B;if(Math.abs(b[F])==J)if(a=k.getElementById(b[C]+"IF")){var z,d=x(b.adm,b);try{z=a.contentDocument,z.write(d),z.close()}catch(ka){try{z=a.contentWindow.document,z.write(d),z.close()}catch(ja){U(49,ja,b[s])}}}else U(997,{name:"iframe_not_found"},
b[s])}],R=0;T()};
