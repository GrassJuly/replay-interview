
//手机版判断
function is_mobile() {
    var regex_match = /(nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i;
  var u = navigator.userAgent;
  if (null == u) {
   return true;
  }
  var result = regex_match.exec(u);

  if (null == result) {
   return false
  } else {
   return true
  }
 }
 
function gourl(x){location.href=x;}

//顶部搜索
var nsi=1;
function topover(){
document.getElementById("topdiv").style.display="";
}
function topout(){
document.getElementById("topdiv").style.display="none";
}
function topjconc(x,y){

}
function topsety(x){
nsi=x;
}
function toptdown(){
 t=document.getElementById("search-text").value;
 
}
function toptdown(){
 //document.getElementById("result-all").style.display="none";
 $("#result-all").html("");
 t=document.getElementById("search-text").value;
    $.post("/tem/topsearch.php",{tv:t,admin:nsi},function(result){
     $("#result-all").html(result);
	 if(result!=""){
	 document.getElementById("result-all").style.display="";
	 }
    });
}
$('#search-text').bind('input propertychange', function(){
 toptdown();
});

function topsetya(x){
nsi=x;
}
function toptdowna(){
 t=document.getElementById("search-text1").value;
 
}
function toptdowna(){
 //document.getElementById("result-all").style.display="none";
 $("#result-alla").html("");
 t=document.getElementById("search-text1").value;
    $.post("/tem/topsearch.php",{tv:t,admin:nsi},function(result){
     $("#result-alla").html(result);
	 if(result!=""){
	 document.getElementById("result-alla").style.display="";
	 }
    });
}
$('#search-text1').bind('input propertychange', function(){
 toptdowna();
});


//等待
function tjwait(){
document.getElementById("tjbtn").style.display="none";
document.getElementById("tjing").style.display="";	
}

//下拉菜单
function yhifdis(x){
if(x==0){dis="none";}else{dis="";}
if(document.getElementById("typeallnum")){
 for(i=5;i<=document.getElementById("typeallnum").innerHTML;i++){
  document.getElementById("yhmenu"+i).style.display=dis;	 
 }
}	
}
function leftmenuover(){
 document.getElementById("leftmenu").style.display="";
 if(document.getElementById("leftnone")){yhifdis(1);}
}

function leftmenuout(){
 if(!document.getElementById("leftnone")){
  document.getElementById("leftmenu").style.display="none";	
 }else{
  yhifdis(0);	 
 }
}

function yhmenuover(x){
document.getElementById("yhmenu"+x).className="menu1 menu2";	
document.getElementById("rmenu"+x).style.display="";	
}

function yhmenuout(x){
document.getElementById("yhmenu"+x).className="menu1";	
document.getElementById("rmenu"+x).style.display="none";	
}

//弹窗
function tangc(x){
if(1==x){document.getElementById("bghui").style.display="";document.getElementById("openw").style.display="";}
else if(0==x){document.getElementById("bghui").style.display="none";document.getElementById("openw").style.display="none";}
document.getElementById("bghui").style.width="100%";
st=Math.max(document.documentElement.scrollTop,document.body.scrollTop);
if(!+[1,]){
document.getElementById("bghui").style.height=document.body.clientHeight;
document.getElementById("openw").style.left=document.body.clientWidth/2-151;
document.getElementById("openw").style.top=st+200;
}else{
document.getElementById("bghui").style.height=document.documentElement.clientHeight;
document.getElementById("openw").style.left=document.documentElement.clientWidth/2-151;
document.getElementById("openw").style.top=window.document.body.offsetHeight/2-170+st;
}
}

function objdis(x,y){
 if(0==x){document.getElementById(y).style.display="none";}	
 else if(1==x){document.getElementById(y).style.display="";}	
}

