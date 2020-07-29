var curShowItem = 1;
var windowH = $(window).height();
var windowW = $(window).width();
var siteHeader = $("#site-header");
var bgFade  = $("#fade");
var content = $("#content");
var leftCon = $(".leftCon");

var deviceIphone = "iphone";
var deviceIpod = "ipod";
var carousel;

//Initialize our user agent string to lower case.
var uagent = navigator.userAgent.toLowerCase();
	
function positionElements(){
	windowH = $(window).height();
	windowW = $(window).width();
	carousel.reload();
	carousel.gotoPage(curShowItem);
	$(".paginationList li").eq(curShowItem-1).addClass("rcPaginationHot");
	
	if(windowW<600 && $(".rcWrapper > ul > li").length>12){
		$("#content").attr("style","margin:105px 0 0 !important");
	}
	if(windowW<700){
		$(".rcWrapper > ul").css("width",($(".rcWrapper > ul > li").length+10)*$("body").width()+'px');
		$(".portfolio-item").css("width",$("body").width()+'px');
		$(".leftCon").css("margin-top","0px");
	}
	else{
		$(".portfolio-item").width(600);
	}
	
	if(windowW>700){
		var GalleryPaginationList = $(".paginationList");
		$("#content").css("height", $("#content").find(".rcWrapper").height()+'px');
		$("#content").css("margin-top",((windowH- $("#content").find(".rcWrapper").height())/2)+"px");
		
		$(".rcL").css("top",(((windowH-86)/2)-(windowH- $("#content").find(".rcWrapper").height())/2)+"px");
		$(".rcR").css("top",(((windowH-86)/2)-(windowH- $("#content").find(".rcWrapper").height())/2)+"px");
		$("#site-header").css("height",windowH+'px');
		$("#fade").css("height",windowH+'px');
		$("#fade").css("width",windowW-800+'px');
		GalleryPaginationList.css("margin",(-10-GalleryPaginationList.height())+"px 0 0 "+(((450-GalleryPaginationList.width())/2)+275)+"px");
		$(".leftCon").css("margin-top",(windowH-$(".leftCon").height())/2+"px");
	}
}

function DetectIpod()
{
   if (uagent.search(deviceIpod) > -1) {
	   $(".keySupport").css("display","none");
	  return true;
   }
}

$( document ).ready(function() {
	$("body").css({"overflow-y":"auto","opacity":"0"});
	$("body").animate({opacity:1},1000);
	windowH = $(window).height();
	windowW = $(window).width();
	
	if(windowW>700) {
		$(".rcWrapper > ul").width($(".rcWrapper > ul > li").length*600);
		carousel = $("#content").responsiveCarousel({
			direction: "horizontal",
			transitionSpeed: 500,
			keyControl: true,
			arrows: true,
			pagination: true,
			paginationEl: "paginationList",
			tapToReturn: true
		});	
		positionElements();
	}
	else {
		carousel = $("#content").responsiveCarousel({
			direction: "horizontal",
			transitionSpeed: 500,
			keyControl: true,
			arrows: true,
			pagination: true,
			paginationEl: "paginationList",
			tapToReturn: true
		});
		
		if(windowW<600 && $(".rcWrapper > ul > li").length>12){
			$("#content").attr("style","margin:105px 0 0 !important");
		}
		
		$(".rcWrapper > ul").width(($(".rcWrapper > ul > li").length+10)*$("body").width());
		$(".portfolio-item").width($("body").width());
	}
	
	$(".paginationList li").eq(0).addClass("rcPaginationHot")
});

$(".menuNav").click(function(){
	if($("header nav").css("display")!="block"){
		$("header nav").slideDown(350);
	}
	else{
		$("header nav").slideUp(350);
	}
});
		
$(window).resize(function() {
	if(this.resizeTO) clearTimeout(this.resizeTO);
	this.resizeTO = setInterval(function() {
		$(this).trigger('resizeEnd');
		clearTimeout(this.resizeTO)
	}, 500);
});

$(window).bind('resizeEnd', function() {
	positionElements();
});
