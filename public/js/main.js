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


// RETOUR HOME
$('.toHome').click(function(e){
// $('#frame-one').hide();
		// TweenLite.set('#home');
		console.log('returnHome');
		TweenMax.to('#frame-one, #frame-two, #frame-three, #frame-four, #frame-five', 1, 
			{'margin-top': '100%', ease: Power1.easeIn,
 				onComplete: function(e){$("#frame-one, #frame-two, #frame-three, #frame-four, #frame-five").hide(),
 							$('#home').show()
 				}
 			}
 		)

 		TweenLite.fromTo('#home', 1.5, 
								{'margin-top': '-100%', ease: Power1.easeIn},
								{'margin-top': '0%', ease: Power1.easeIn}
		)

	});

// FRAME 1
$('#frame1').click(function(e){
// $('#frame-one').hide();
		// console.log("lol");
		TweenLite.set('#home');
		TweenMax.to('#home', 1, 
			{'margin-top': '-100%', ease: Power1.easeIn,
 				onComplete: function(e){$("#home").hide(),
 							$('#frame-one').show()
 				}
 			}
 		)

 		TweenLite.fromTo('#frame-one', 1.5, 
								{'margin-top': '90%', ease: Power1.easeIn},
								{'margin-top': '0%', ease: Power1.easeIn}
		)

	});

// POUR REVENIR AU TABLEAU PRECEDENT 5
$('#toTab5from1').click(function(e){
// $('#frame-five').hide();
		TweenLite.to('#frame-one', 1, 
			{left: '100%', ease: Power1.easeIn,
 				onComplete: function(e){$("#frame-one").hide()
 				}
 			}
 		);
$('#frame-five').show()
 		TweenLite.fromTo('#frame-five', 1.5,
			{left: '-110%', ease: Power1.easeIn},
			{left: '0%', ease: Power1.easeIn}
		);
});


// POUR PASSER AU TABLEAU SUIVANT
$('#toTab2').click(function(e){
		TweenLite.to('#frame-one', 1, 
			{'margin-right': '100%', ease: Power1.easeIn,
 				onComplete: function(e){$("#frame-one").hide()
 				}
 			}
 		)
 $('#frame-two').show();
 		TweenLite.fromTo('#frame-two', 1.5, 
				{'margin-left': '100%', ease: Power1.easeIn},
				{'margin-left': '0%', ease: Power1.easeIn}
		)

	});
// FRAME 1 - FIN


// FRAME 2
$('#frame2').click(function(e){
// $('#frame-two').hide();
		// console.log("lol");
		TweenLite.set('#home');
		TweenMax.to('#home', 1, 
			{'margin-top': '-100%', ease: Power1.easeIn,
 				onComplete: function(e){$("#home").hide(),
 							$('#frame-two').show()
 				}
 			}
 		)

 		TweenLite.fromTo('#frame-two', 1.3, 
								{'margin-top': '90%', ease: Power1.easeIn},
								{'margin-top': '0%', ease: Power1.easeIn}
		)

	});

// POUR REVENIR AU TABLEAU PRECEDENT 1
$('#toTab1').click(function(e){
// $('#frame-one').hide();
		TweenLite.to('#frame-two', 1, 
			{left: '100%', ease: Power1.easeIn,
 				onComplete: function(e){$("#frame-two").hide()
 				}
 			}
 		);

$('#frame-one').show();
 		TweenLite.fromTo('#frame-one', 1.5,
			{left: '-110%', ease: Power1.easeIn},
			{left: '0%', ease: Power1.easeIn}
		);
});

// POUR PASSER AU TABLEAU SUIVANT
$('#toTab3').click(function(e){
$('#frame-three').hide();
		// console.log("lolTab2");
		TweenLite.to('#frame-two', 1, 
			{'margin-right': '100%', ease: Power1.easeIn,
 				onComplete: function(e){$("#frame-two").hide()
 				}
 			}
 		)
 $('#frame-three').show();
 		TweenLite.fromTo('#frame-three', 1.5, 
				{'margin-left': '100%', ease: Power1.easeIn},
				{'margin-left': '0%', ease: Power1.easeIn}
		)

	});
// FRAME 2 - FIN

// FRAME 3
$('#frame3').click(function(e){
$('#frame-three').hide();
		// console.log("lol");
		TweenLite.set('#home');
		TweenMax.to('#home', 1, 
			{'margin-top': '-100%', ease: Power1.easeIn,
 				onComplete: function(e){$("#home").hide(),
 							$('#frame-three').show()
 				}
 			}
 		)

 		TweenLite.fromTo('#frame-three', 1.3, 
								{'margin-top': '90%', ease: Power1.easeIn},
								{'margin-top': '0%', ease: Power1.easeIn}
		)

	});

// POUR REVENIR AU TABLEAU PRECEDENT 2
$('#toTab2from3').click(function(e){
// $('#frame-two').hide();
		TweenLite.to('#frame-three', 1, 
			{left: '100%', ease: Power1.easeIn,
 				onComplete: function(e){$("#frame-three").hide()
 				}
 			}
 		);

$('#frame-two').show();
 		TweenLite.fromTo('#frame-two', 1.5,
			{left: '-110%', ease: Power1.easeIn},
			{left: '0%', ease: Power1.easeIn}
		);
});

// POUR PASSER AU TABLEAU SUIVANT
$('#toTab4').click(function(e){
$('#frame-four').hide();
		// console.log("lolTab2");
		TweenLite.to('#frame-three', 1, 
			{'margin-right': '100%', ease: Power1.easeIn,
 				onComplete: function(e){$("#frame-three").hide()
 				}
 			}
 		)

 $('#frame-four').show();
 		TweenLite.fromTo('#frame-four', 1.5, 
				{'margin-left': '100%', ease: Power1.easeIn},
				{'margin-left': '0%', ease: Power1.easeIn}
		)

	});
// FRAME 3 - FIN

// FRAME 4
$('#frame4').click(function(e){
// $('#frame-four').hide();
		TweenLite.set('#home');
		TweenMax.to('#home', 1, 
			{'margin-top': '-100%', ease: Power1.easeIn,
 				onComplete: function(e){$("#home").hide(),
 							$('#frame-four').show()
 				}
 			}
 		)

 		TweenLite.fromTo('#frame-four', 1.3, 
								{'margin-top': '90%', ease: Power1.easeIn},
								{'margin-top': '0%', ease: Power1.easeIn}
		)

	});

// POUR REVENIR AU TABLEAU PRECEDENT 3
$('#toTab3from4').click(function(e){
// $('#frame-three').hide();
		TweenLite.to('#frame-four', 1, 
			{left: '100%', ease: Power1.easeIn,
 				onComplete: function(e){$("#frame-four").hide()
 				}
 			}
 		);

$('#frame-three').show();
 		TweenLite.fromTo('#frame-three', 1.5,
			{left: '-110%', ease: Power1.easeIn},
			{left: '0%', ease: Power1.easeIn}
		);
});

// POUR PASSER AU TABLEAU SUIVANT
$('#toTab5').click(function(e){
// $('#frame-five').hide();
	console.log('toTab5');
		TweenLite.to('#frame-four', 1, 
			{'margin-right': '100%', ease: Power1.easeIn,
 				onComplete: function(e){$("#frame-four").hide()
 				}
 			}
 		);
 $('#frame-five').show();
 		TweenLite.fromTo('#frame-five', 1.5, 
				{'margin-left': '100%', ease: Power1.easeIn},
				{'margin-left': '0%', ease: Power1.easeIn}
		);

	});
// FRAME 4 - FIN

// FRAME 5
	$('#frame5').click(function(e){
// $('#frame-five').hide();
		TweenLite.set('#home');
		TweenMax.to('#home', 1, 
			{'margin-top': '-100%', ease: Power1.easeIn,
 				onComplete: function(e){$("#home").hide(),
 							$('#frame-five').show()
 				}
 			}
 		)

 		TweenLite.fromTo('#frame-five', 1.3, 
								{'margin-top': '90%', ease: Power1.easeIn},
								{'margin-top': '0%', ease: Power1.easeIn}
		)

	});

// POUR REVENIR AU TABLEAU PRECEDENT 4
$('#toTab4from5').click(function(e){
	// $('#frame-four').hide();
		TweenLite.to('#frame-five', 1, 
			{left: '100%', ease: Power1.easeIn,
 				onComplete: function(e){$("#frame-five").hide()
 				}
 			}
 		);

$('#frame-four').show();
 		TweenLite.fromTo('#frame-four', 1.5,
			{left: '-110%', ease: Power1.easeIn},
			{left: '0%', ease: Power1.easeIn}
		);
});

// POUR PASSER AU TABLEAU SUIVANT
$('#toTab1from5').click(function(e){
	// $('#frame-one').hide();
		TweenLite.to('#frame-five', 1, 
			{'margin-right': '100%', ease: Power1.easeIn,
 				onComplete: function(e){$("#frame-five").hide()
 				}
 			}
 		);
 $('#frame-one').show();
 		TweenLite.fromTo('#frame-one', 1.5, 
				{'margin-left': '100%', ease: Power1.easeIn},
				{'margin-left': '0%', ease: Power1.easeIn}
		);

	});
// FRAME 5 - FIN


});