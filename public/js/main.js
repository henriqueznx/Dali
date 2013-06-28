$(document).ready(function(){

/* AUDIO */
var audio = document.getElementById('background_audio');

document.getElementById('mute').addEventListener('click', function (e)
{
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, false);
/* FIN AUDIO */

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
	
	$(".slide").on("click", function(){
		if(($('#description').css("display")) == "none") {
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
	
	$("#description").on("click", function(){
		if(($('#description').css("display")) == "none") {
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
	$('#frame-one').css('height', $(window).height());
	$('#frame-two').css('height', $(window).height());
	$('#frame-three').css('height', $(window).height());
	$('#frame-four').css('height', $(window).height());
	$('#frame-five').css('height', $(window).height());
	
	
	/* HOVER  */

	$('.flex li').bind('mouseenter', function(el){
		$('.flex li').css('width', '17.5%');
		$(this).css('width', '30%');
	});
	$('.flex li').bind('mouseleave', function(el){
		$('.flex li').css('width', '20%');
	});
	
$('#frame-one').hide();
$('#frame-two').hide();
$('#frame-three').hide();
$('#frame-four').hide();
$('#frame-five').hide();



					/* HOME TO */
/* FRAME 1 */

$("#frame1").click(function() {
 $("#home").hide("slow");
  $("#frame-one").slideToggle("slow");
});

/* FRAME 2 */

$("#frame2").click(function() {
 $("#home").hide("slow");
  $("#frame-two").slideToggle("slow");
});

/* FRAME 3 */

$("#frame3").click(function() {
 $("#home").hide("slow");
  $("#frame-three").slideToggle("slow");
});

/* FRAME 4 */

$("#frame4").click(function() {
 $("#home").hide("slow");
  $("#frame-four").slideToggle("slow");
});

/* FRAME 5 */

$("#frame5").click(function() {
 $("#home").hide("slow");
  $("#frame-five").slideToggle("slow");
});


					/* PREC SUIV */

/* FRAME 1 */

$("#toTab5from1").click(function() {
 $("#frame-one").hide("slow");
  $("#frame-five").slideToggle("slow");
});

$("#toTab2").click(function() {
 $("#frame-one").hide("slow");
  $("#frame-two").slideToggle("slow");
});

/* FRAME 2 */

$("#toTab1").click(function() {
 $("#frame-two").hide("slow");
  $("#frame-one").slideToggle("slow");
});

$("#toTab3").click(function() {
 $("#frame-two").hide("slow");
  $("#frame-three").slideToggle("slow");
});

/* FRAME 3 */

$("#toTab2from3").click(function() {
 $("#frame-three").hide("slow");
  $("#frame-two").slideToggle("slow");
});

$("#toTab4").click(function() {
 $("#frame-three").hide("slow");
  $("#frame-four").slideToggle("slow");
});

/* FRAME 4 */

$("#toTab3from4").click(function() {
 $("#frame-four").hide("slow");
  $("#frame-three").slideToggle("slow");
});

$("#toTab5").click(function() {
 $("#frame-four").hide("slow");
  $("#frame-five").slideToggle("slow");
});

/* FRAME 5 */

$("#toTab4from5").click(function() {
 $("#frame-five").hide("slow");
  $("#frame-four").slideToggle("slow");
});

$("#toTab1from5").click(function() {
 $("#frame-five").hide("slow");
  $("#frame-one").slideToggle("slow");
});


/* TO HOME */


/* FRAME 1 */

$(".toHome").click(function() {
   $("#frame-one, #frame-two, #frame-three, #frame-four, #frame-five").hide("slow");
   $("#home").slideToggle("slow");
});


});