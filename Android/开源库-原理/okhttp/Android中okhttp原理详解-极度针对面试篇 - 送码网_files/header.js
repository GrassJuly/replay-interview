//��¼��֤
var xmlHttpses = false;
try {
  xmlHttpses = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
  try {
    xmlHttpses = new ActiveXObject("Microsoft.XMLHTTP");
  } catch (e2) {
    xmlHttpses = false;
  }
}
if (!xmlHttpses && typeof XMLHttpRequest != 'undefined') {
  xmlHttpses = new XMLHttpRequest();
}
function userCheckses(){
    url ="/tem/sesCheck.php";
    xmlHttpses.open("get", url, true);
    xmlHttpses.onreadystatechange = updatePageses;
    xmlHttpses.send(null);
	}
function updatePageses() {
  if (xmlHttpses.readyState == 4) {
   response = xmlHttpses.responseText;
   response=response.replace(/[\r\n]/g,'');
   if(response=="0"){document.getElementById("notlogin").style.display="";document.getElementById("yeslogin").style.display="none";return false;}
   else{
   r=response.split(" ");
   document.getElementById("yeslogin").style.display="";
   document.getElementById("notlogin").style.display="none";
   document.getElementById("yesuid").innerHTML=r[0];
    document.getElementById("messageSystem").style.display="";
   if(r[1]=="yes"){document.getElementById("dontqd").style.display="";document.getElementById("needqd").style.display="none";}
   else{document.getElementById("dontqd").style.display="none";document.getElementById("needqd").style.display="";}
   return false;
   }
  }
}


$(function(){
	userCheckses();
	
	$(".fenlei").on("click", function(e) {
		$('#leftmenu').css('z-index',0);
		e.stopPropagation(), $(".search-result").hide(), $(this).siblings(".search-classify").show();
	});
	$('#search-text').focus(function(){
		$('#leftmenu').css('z-index',0);
		$('.search-result').show();
		$('#leftmenu').css('z-index',0);
	});
	 $('#search-text').bind('keyup', function(event) {
        if (event.keyCode == "13") {
            //�س�ִ�в�ѯ
            $('#search_btn').click();
        }
    });
	$('#search-text').blur(function(){
		//$('.search-result').hide();
		$('#leftmenu').css('z-index',60);
	});
	$(".fenlei1").on("click", function(e) {
		$('#leftmenu').css('z-index',0);
		e.stopPropagation(), $(".search-classify").hide(), $(this).siblings(".search-type").show();
	});
	$(".fenlei2").on("click", function(e) {
		$('#leftmenu').css('z-index',0);
		e.stopPropagation(), $(".search-classify").hide(), $(this).siblings(".search-type1").show();
	});
	$(".search-type dd").click(function(){
		$('#w_show').text($(this).text());
		$('#w_search').val($(this).attr('data-id'));
		$(".search-type").hide();
		
		$('#w_a').text($(this).text());
		$('#w_search').val($(this).attr('data-id'));
		$(".search-type1").hide();
	});
	$(".search-type1 dd").click(function(){
		$('#w_show').text($(this).text());
		$('#w_search').val($(this).attr('data-id'));
		$(".search-type").hide();
		
		$('#w_a').text($(this).text());
		$('#w_search').val($(this).attr('data-id'));
		$(".search-type1").hide();
	});
	$('#search_btn').click(function(){
		var s = $('#w_search').val();
		if($('#search-text').val().replace("/\s/","")==""){alert("�����������ؼ���");return false;}else{$('#w_text').val($('#search-text').val());}
		$('#w_submit').attr('action',"/search/index_dz.php?admin="+s);
		$('#w_submit').submit();
	});
	$('#search_btn2').click(function(){
		var s = $('#w_search').val();
		if($('#search-text1').val().replace("/\s/","")==""){alert("�����������ؼ���");return false;}else{$('#w_text').val($('#search-text1').val());}
		$('#w_submit').attr('action',"/search/index_dz.php?admin="+s);
		$('#w_submit').submit();
	});
	$('#search-text1').focus(function(){
		$('#leftmenu').css('z-index',0);
		$(this).parent().parent().siblings('.search-result').show();
		$('#leftmenu').css('z-index',0);
		$('.header-sm-container').addClass('on');
	});
	 $('#search-text1').bind('keyup', function(event) {
        if (event.keyCode == "13") {
            //�س�ִ�в�ѯ
            $('#search_btn2').click();
        }
    });
	$('#search-text1').blur(function(){
		//$(this).parent().parent().siblings('.search-result').hide();
		//$('.header-sm-container').removeClass('on');
		$('#leftmenu').css('z-index',60);
	});
	$('.result-all a').each(function(e){
		$(this).click(function(e){
			e.stopPropagation();
			console.log($(this));
			//return false;
		});
	});
	
	 $("body").click(function(){
		$('.search-classify').hide();
		
		if( !$('#search-text').is(':focus') ){
			$('#search-text').parent().parent().siblings(".search-result").hide();
			$('#leftmenu').css('z-index',60);
		}else{
			$('#search-text').parent().parent().siblings(".search-result").show();
			$('#leftmenu').css('z-index',0);
		}
		if( $('#search-text1').is(':focus') ){
			$('#search-text1').parent().parent().siblings('.search-result').show();
			$('#leftmenu').css('z-index',0);
			$('.header-sm-container').addClass('on');
		}else{
			$('#search-text1').parent().parent().siblings('.search-result').hide();
			$('.header-sm-container').removeClass('on');
			$('#leftmenu').css('z-index',60);
		}
		
	 });
	$(window).scroll($(".header-sm-container").hasClass("header-sm-fixed") ?
function() {
	$(this).scrollTop() >= 200 && ($(".search-classify").hasClass("active") || $(".search-classify").hide())
} : function() {
	$(this).scrollTop() < 200 ? $(".header-sm-container").removeClass("header-sm-fixed") : ($(".search-classify").hasClass("active") || $(".search-classify").hide(), $(".header-sm-container").addClass("header-sm-fixed"))
}), $(".search-classify").hover(function() {
	$(this).addClass("active")
}, function() {
	$(this).removeClass("active")
}) 
});


function topgetc(){
$.get("https://www.songma.com/user/getcar.php",{},function(result){
    carstr=result.split("yjcodeA");
     document.getElementById("topcar").innerHTML=carstr[0];
     document.getElementById("topcarnum").innerHTML=carstr[1];
    });
}
topgetc();
function topdelcar(){
if(!confirm("ȷ��Ҫ��չ��ﳵ��")){return false;}
$.get("https://www.songma.com/user/delcar.php?id=0",{},function(result){
     topgetc();
    });
}
function topdelone(x){
$.get("https://www.songma.com/user/delcar.php?id="+x,{},function(result){
     topgetc();
    });
}
$.get("https://www.songma.com/user/gettopinf.php",{},function(result){
     tstr=result.split("yjcode");
	 document.getElementById("topmoney").innerHTML=tstr[0];
	 document.getElementById("topjf").innerHTML=tstr[1];
	 document.getElementById("topudj").innerHTML=tstr[2];
	 document.getElementById("topuimg").src=tstr[3];
	 document.getElementById("topurz").innerHTML=tstr[4];
	 dj=parseInt(tstr[5]);
	 for(i=0;i<=dj;i++){
	 if(document.getElementById("tdjxh"+i)){
		 if(i==dj){document.getElementById("tdjxh"+i).innerHTML="�ѿ�ͨ";
		 }else{document.getElementById("tdjxh"+i).style.display="none";}
		 }
	 }
    });

	$(function(){
    $("#returnTop").click(function () {
        var speed = 200;
        $('body,html').animate({
            scrollTop: 0
        }, speed);
        return false;
    });

    });
	
//������¼����
function toptclogin(){
layer.open({
  type: 2,
  area: ['650px', '415px'],
  title:["��ݵ�¼","text-align:left"],
  skin: 'layui-layer-rim', //���ϱ߿�
  content:['/tem/openw.php', 'no'] 
});
}
