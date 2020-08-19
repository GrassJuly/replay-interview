!function(e){"use strict";function t(e){var t=e.target||e.srcElement,n=document.documentElement.scrollTop;if(t.className.indexOf(d)>-1){e.preventDefault();var r=document.getElementById("hljs-copy-el");r||(r=document.createElement("textarea"),r.style.position="absolute",r.style.left="-9999px",r.style.top=n+"px",r.id="hljs-copy-el",document.body.appendChild(r)),r.textContent=e.currentTarget.innerText,o("#hljs-copy-el");try{var i=document.execCommand("copy");t.dataset.title=i?p:u,i&&setTimeout(function(){t.dataset.title=c},1e3)}catch(a){t.dataset.title=u}}}function n(e){var t=e.target||e.srcElement,n=document.documentElement.scrollTop;if(t.className.indexOf(d)>-1){e.preventDefault();var r=document.getElementById("hljs-copy-el");r||(r=document.createElement("textarea"),r.style.position="absolute",r.style.left="-9999px",r.style.top=n+"px",r.id="hljs-copy-el",document.body.appendChild(r)),r.textContent=e.currentTarget.parentNode.innerText,o("#hljs-copy-el"),window.csdn.report&&"function"==typeof window.csdn.report.reportClick&&window.csdn.report.reportClick({spm:"1001.2101.3001.4259"});try{var i=document.execCommand("copy");t.dataset.title=i?p:u,i&&setTimeout(function(){t.dataset.title=c},1e3)}catch(a){t.dataset.title=u}}}function o(e){if(e="string"==typeof e?document.querySelector(e):e,navigator.userAgent.match(/ipad|ipod|iphone/i)){var t=e.contentEditable,n=e.readOnly;e.contentEditable=!0,e.readOnly=!0;var o=document.createRange();o.selectNodeContents(e);var r=window.getSelection();r.removeAllRanges(),r.addRange(o),e.setSelectionRange(0,999999),e.contentEditable=t,e.readOnly=n}else e.select()}function r(){var e=document.createElement("style");e.type="text/css",e.innerHTML=["pre{position: relative}","pre:hover .{0}{display: block}",".{0}{","display: none;","position: absolute;","right: 4px;","top: 4px;","font-size: 12px;","color: #4d4d4d;","background-color: white;","padding: 2px 8px;","margin: 8px;","border-radius: 4px;","cursor: pointer;"," box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05);","}",".{0}:after{","content: attr(data-title)","}","code .{0}{","margin: 2px 8px;","}"].join("").format(d),document.getElementsByTagName("head")[0].appendChild(e)}function i(){"complete"===document.readyState?a():e.addEventListener("DOMContentLoaded",a)}function a(){try{var e;if("ckeditor"==h){e=document.querySelectorAll("code.hljs");for(var t in e)e.hasOwnProperty(t)&&s(e[t].parentNode)}else{e=j;for(var t in e)e.hasOwnProperty(t)&&s(e[t])}}catch(n){console.error("CopyButton error: ",n)}}function l(e){var t=e.target||e.srcElement;t.className.indexOf(d)>-1&&(navigator.userAgent.match(/AppleWebKit.*Mobile.*/)?window.location.href="https://passport.csdn.net/account/login?ref=codecopy":getCookie("UserName")||window.csdn.loginBox.show())}function s(e){if("object"==typeof e&&null!==e){var t=".signin(event)",n="hljs",o=".copyCode(event)";"mdeditor"===h&&(n="mdcp"),o=n+o,w&&(o=n+t),e.innerHTML=e.innerHTML+'<div class="{0} {2}" data-title="{1}"></div>'.format(d,c,m),"hljs"===n?e.querySelector(".hljs-button").setAttribute("onclick",o):(e.setAttribute("onclick",o),e.style.position="unset")}}if(window.ActiveXObject||"ActiveXObject"in window)return!1;for(var d="hljs-button",c="复制",u="复制失败",p="复制成功",h=void 0,m="",f=navigator.userAgent.toLowerCase(),g=["android","iphone","symbianos","windows phone","ipad","ipod"],y=!1,v=0;v<g.length;v++)if(f.indexOf(g[v])>=0){y=!0;break}var w=!y&&("string"==typeof currentUserName&&0===currentUserName.length);w&&(c="登录后复制",m="signin"),String.prototype.format=String.prototype.f=function(){var e=arguments;return!!this&&this.replace(/\{(\d+)\}/g,function(t,n){return e[n]?e[n]:t})};var j=document.querySelectorAll("pre code");document.querySelectorAll("div.htmledit_views").length>0?(e.hljs.initCopyButtonOnLoad=i,e.hljs.addCopyButton=s,e.hljs.copyCode=n,e.hljs.signin=l,r(),h="ckeditor"):j.length>0&&(window.mdcp?window.mdcp:window.mdcp={},window.mdcp.copyCode=t,window.mdcp.signin=l,i(),r(),h="mdeditor")}(window),function(e,t){"use strict";function n(){var e=t.createElement("style");e.type="text/css",e.innerHTML=p(".{0}{border-collapse:collapse}            .{0} td{padding:0}            .{1}{text-align: right;padding-right: 8px;}            .{1}:before{content:attr({2})}",[m,v,w]),t.getElementsByTagName("head")[0].appendChild(e)}function o(n){"complete"===t.readyState?r(n):e.addEventListener("DOMContentLoaded",function(){r(n)})}function r(n){try{var o=t.querySelectorAll("code.hljs");for(var r in o)o.hasOwnProperty(r)&&i(o[r],n)}catch(a){e.console.error("LineNumbers error: ",a)}}function i(e,t){if("object"==typeof e){t=t||{singleLine:!1};var n=t.singleLine?0:1;u(function(){l(e),e.innerHTML=a(e.innerHTML,n),Array.apply(null,e.childNodes).forEach(h)})}}function a(e,t){var n=d(e);if(""===n[n.length-1].trim()&&n.pop(),n.length>t){for(var o="",r=0,i=n.length;r<i;r++)o+=p('<li><div class="{0}"><div class="{1} {2}" {3}="{5}"></div></div><div class="{4}"><div class="{1}">{6}</div></div></li>',[y,f,v,w,g,r+1,n[r].length>0?n[r]:" "]);return p('<ol class="{0}">{1}</ol>',[m,o])}return e}function l(e){var t=e.childNodes;for(var n in t)if(t.hasOwnProperty(n)){var o=t[n];c(o.textContent)>0&&(o.childNodes.length>0?l(o):s(o.parentNode))}}function s(e){var t=e.className;if(/hljs-/.test(t)){for(var n=d(e.innerHTML),o=0,r="";o<n.length;o++)r+=p('<span class="{0}">{1}</span>\n',[t,n[o]]);e.innerHTML=r.trim()}}function d(e){return 0===e.length?[]:e.split(j)}function c(e){return(e.trim().match(j)||[]).length}function u(t){e.setTimeout(t,0)}function p(e,t){return e.replace(/\{(\d+)\}/g,function(e,n){return t[n]?t[n]:""})}function h(e,t,n){var o,r={id:0,length:0},i=Array.apply(null,e.childNodes),a={hundred:100,thousand:1e3};i.forEach(function(e,t,n){if(1==e.nodeType&&e.getElementsByClassName("hljs-ln-code").length){var i=e.getElementsByClassName("hljs-ln-code")[0].offsetWidth;switch(t){case a.hundred:o="hundred";break;case a.thousand:o="thousand"}i>r.length&&(r.length=i,r.id=t)}});var l=e.parentNode.offsetWidth,s=i[r.id];if(void 0!=s&&1==s.nodeType&&(void 0!=o&&(e.className=e.className+" "+o),s.getElementsByClassName("hljs-ln-numbers").length)){var d=s.getElementsByClassName("hljs-ln-numbers")[0].offsetWidth,c=s.getElementsByClassName("hljs-ln-code")[0].offsetWidth;l<d+c+b&&e.setAttribute("style","width:"+(d+c+b)+"px")}}var m="hljs-ln",f="hljs-ln-line",g="hljs-ln-code",y="hljs-ln-numbers",v="hljs-ln-n",w="data-line-number",j=/\r\n|\r|\n/g,b=50;e.hljs?(e.hljs.initLineNumbersOnLoad=o,e.hljs.lineNumbersBlock=i,e.hljs.getLines=d,n()):e.console.error("highlight.js not detected!")}(window,document),$(function(){function e(){hljs.initHighlighting(),"ie"!==i&&hljs.initCopyButtonOnLoad(),hljs.initLineNumbersOnLoad(),$("pre .language-plain").length>0&&$("pre .language-plain").each(function(e,t){var n=hljs.highlightAuto(r(t.innerHTML));t.innerHTML=n.value,t.className="language-"+n.language})}var t=/&(lt|gt|amp|quot|nbsp|shy|#\d{1,5});/g,n={lt:"<",gt:">",amp:"&",quot:'"',nbsp:" ",shy:"­"},o=function(e,t){return n[t]},r=function(e){return e.replace(t,o)},i=function(){var e=window.navigator.userAgent,t=function(t){return e.indexOf(t)>=0},n=function(){return"ActiveXObject"in window}();return t("MSIE")||n?"ie":t("Firefox")&&!n?"Firefox":t("Chrome")&&!n?e.indexOf("Edge")>-1?"Edge":"Chrome":t("Opera")&&!n?"Opera":t("Safari")&&!n?"Safari":void 0}();$("#content_views").hasClass("htmledit_views")&&($("#content_views pre").find("code").addClass("hljs"),e())});