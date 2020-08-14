$(document).ready(function(){

	var animate = false;
	var oldStyle = '';

	// $("nav a").click(function(){
	// 	$("nav a").removeClass("active");
	// 	movePages($(this).attr("id"));
	// 	$(this).addClass("active");
	// 	$('.responsiveNav').removeClass('active');
	// 	$('aside').removeClass('active');
	// 	return false;
	// });

	$(".yourWork").click(function(){
		$("nav a").removeClass("active");
		movePages('contact');
		$('#contact').addClass("active");
		$('.responsiveNav').removeClass('active');
		$('aside').removeClass('active');
		return false;
	});


	$('.responsiveNav').click(function(){
		$(this).toggleClass('active');
		$('aside').toggleClass('active');
	});
	
	var workArray = [];
	$('.work a').each(function(index){
		workArray.push($(this));
	});
	var forLength = workArray.length;
	var searchTimer;

	$("#search").on('change keyup',function(){
		clearTimeout(searchTimer);
		var searchString = $(this).val().trim();
		searchTimer = setTimeout(function(){
			if(searchString === ""){
				$('.work').removeClass('hide');
			}else{
				for (var i = 0; i < forLength; i++) {
					var newElement = $(workArray[i]);
					var logNumber = newElement[0].children[0].textContent.toLowerCase().indexOf(searchString);
					if(logNumber >= 0){
						newElement[0].offsetParent.classList.remove('hide');
					} else {
						newElement[0].offsetParent.classList.add('hide');
					}	
				}
			}
		},500);
			
	})

	
	function movePages(id){
		if(!animate){
			animate = true;

			var screenName = id;

			var newScreen = $(".screen[data-page='"+screenName+"']");
			var newTransform = (newScreen.index() * 100);


			var screen  = $(".screen");

			screen.removeClass("active");

			if(screen.attr("style")){

				screen.css('transform',oldStyle);
			
				var timer = setTimeout(function(){
					oldStyle = "scale(0.9) translate(0,-"+ (newTransform * 1.1)  +"%)";
					screen.css("transform", "scale(0.9) translate(0,-"+ (newTransform * 1.1)  +"%)");
					
					var timer2 = setTimeout(function(){
						screen.css("transform", "scale(1) translate(0,-"+newTransform+"%)");
						animate = false;
					}, 750);
				},1000);

			} else {

				var timer = setTimeout(function(){
					oldStyle = "scale(0.9) translate(0,-"+ (newTransform * 1.1)  +"%)";
					screen.css("transform", "scale(0.9) translate(0,-"+ (newTransform * 1.1)  +"%)");
					var timer2 = setTimeout(function(){
						screen.css("transform", "scale(1) translate(0,-"+newTransform+"%)");
						animate = false;
					},750);
				},1000);
			}


		}
	
		return false;
	}
	
	$('.work .project').click(function(event){
		$("#popup").html("");
	  $('#myModal, #cover').fadeTo(200,1);
        var main_text = $(this).find('.projectContent').html();
		var header_text = $(this).find('.projectContent').attr('title');
        $("#popup").html(main_text);
		$(".modal-title").html(header_text);
	});

	$('.close, #cover').click(function(){
	  $('#cover, #myModal').fadeTo(200,0).hide();
	});
	
	
	/*$('#myModal').on('show.bs.modal', function (event) {
        var element = $(event.relatedTarget); 
        var dynamic_text = element.find('.text').text();
   
        var modal = $(this);
        $("#popup").html('the users post says: ' + dynamic_text);
    });*/
})

