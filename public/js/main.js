$(document).ready(function(){
// LOADER ///////////////////
	initHome();
	$("#maincontent").hide();

	function initHome() {
		var homeImgs = 
		[
		"public/uploads/apparition_visage_compotier_sur_plage.png",
		"public/uploads/image_disappears.jpg",
		"public/uploads/lion_cheval_dormeuse_invisibles.jpg",
		"public/uploads/mae_west.jpg"
		]
	
		var	count = 0, width = 0, imgsLenght = homeImgs.length, step;
		step = 4 / imgsLenght;
	
		$.each(homeImgs, function(i, img){
			var loader = new Image();
			loader.src = img.toString();
			$(loader).on("load", function(){
	
				width += step;
				if(width == imgsLenght) {
					$("#stache-left").css("cursor", "pointer");
					$("#stache-right").css("cursor", "pointer");
						// OVERTURE DES VOLETS
							$(".stache-move").click(function(e) {
								$("#maincontent").show();
								TweenLite.set('.load-left, .load-right');

								TweenLite.to('.load-right', 1, 
									{right: '-100%', ease: Power1.easeIn,
									onComplete: function(e){$("#loader").remove()}
									}
								);

								TweenLite.to('.load-left', 1, 
									{left: '-100%', ease: Power1.easeIn,
									// onComplete: function(e){$(".load-left").remove()}
									}
								);

							});
						// OVERTURE DES VOLETS FIN
				}
				$("#background_left").css("opacity", width);
				$("#background_right").css("opacity", width);
			});
		});
	}

// SHOW TETE DE DALI
	$("body").bind("keydown", function(e) {
		var key_code = (e.keyCode ? e.keyCode : e.which);
		if(key_code == 32){
			$(".tete_dali").fadeIn();
			$("#background_left").css("opacity", 0.5);
			$("#background_right").css("opacity", 0.5);
		}
	});
	$("body").bind("keyup", function(e) {
		var key_code = (e.keyCode ? e.keyCode : e.which);
		if(key_code == 32){
			$(".tete_dali").fadeOut();
			$("#background_left").css("opacity", 1);
			$("#background_right").css("opacity", 1);

		}
	});
// SHOW TETE DE DALI - FIN

// LOADER - FIN ///////////////////

	/* SLIDE  */
	
	var expand = false;
	$(".slide").on("click", function(){
		if(($('#description').css("display")) == "none") {
			TweenLite.set('.slide');
			$(".slide").animate({
					marginBottom:"240"
			},"slow");
		} else if (($('#description').css("display")) == "block") {
			$(".slide").animate({
					marginBottom:"0"
			},"slow");
		}

		$('#description').slideToggle('slow');
		
	});

	/* FULLSCREEN  */
	 
	$('.flex li').css('height', $(window).height());
	$('body').css('height', $(window).height());
	
	/* HOVER  */

	$('.flex li').bind('mouseenter', function(el){
		$('.flex li').css('width', '17.5%');
		$(this).css('width', '30%');
	});
	$('.flex li').bind('mouseleave', function(el){
		$('.flex li').css('width', '20%');
	});
	
	// $('.flex li img').bind('mouseenter', function(el){
	// 	$(this).fadeTo(100, 0.5);
	// 	$('.fade').fadeto(50, 1);		
	// });

	// $('.flex li img').bind('mouseleave', function(el){
	// 	$(this).fadeTo(100, 1);
	// 	$('.fade').fadeTo(50, 0.5); 
	// });

});