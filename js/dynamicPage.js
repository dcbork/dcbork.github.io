//Original Code by Payod Panda payodpanda.com  5-14-2021
//Modified by David Conner Borkowski 5-14-2021

var iDo = ["make", "research", "build", "design", "test", "print", "study", "explore"];
var iContact= ["Reach", "Talk to", "Work with", "Debate"]
iD = 0;
iC = 0;
var date = new Date();

function dynamicSkills() {
   var title = iDo[iD];
   $("#dynamicSkills").text(title);
   iD = (iD+1) % iDo.length;
}
dynamicSkills();

function dynamicContact() {
   var contact = iContact[iC];
   $("#dynamicContact").text(contact);
   iC = (iC+1) % iContact.length;
}
dynamicContact();

function dynamicCopywrite() {
   var currentYear = date.getFullYear();
   $("#dynamicCopywrite").text(currentYear);
}

setInterval(dynamicSkills, 1013);
setInterval(dynamicContact, 1913);
window.onload = function() {
  dynamicCopywrite();
};


/////////////////////////////////////////////////////////////

// This is to make sure that the images move with the mouse, so animation starts from the mouse
$("body").mousemove(
	function(event){
		setCoordinates(event.pageX, event.pageY);
	}
);

setCoordinates($(window).width()/2, $(".container").height()/2);

function setCoordinates(mouseX, mouseY){
	//compare pageX vs clientX
	if(mobile) {
		mouseX = $(window).width()/2;
		mouseY = $(".container").height()/2;
	}
	$(".tileContentReset").not(".tileContentShow").css("left", mouseX+2).css("top", mouseY+2);	//move the tiles around with the mouse. Size is zero so it won't be perceptible
}

// boolean to store if website is at least 992px wide. 992 is Bootstrap cutoff for medium-width
var mobile = false;			// check screen resolution
var mobileDevice = false;	// check actual device (user-agent)
var isHover = false; 		// check if mouse is over highlightable link

if($(window).width() < 992) {
	mobile = true;
}
// new test recommended by MozDN
if (/Mobi/.test(navigator.userAgent)) {
    mobileDevice = true;
}
/*
$(".container").not(".highlight").click(
	function(event){
		if(mobile){
			$(".tileContentReset").removeClass("tileContentShow").addClass("tileContentOutside");

			$(".tileContentReset").last().on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
				function(e) {
					$(".tileContentReset").removeClass("tileContentOutside");
				});

			$(".container").removeClass("expandDimmed");
			$(".highlight").removeClass("highlightHover");
		}
	}
);
*/
$(window).click(
	function(event){
		if(!isHover){
			$("*").removeClass("highlightHover");

			$(".tileContentReset").removeClass("tileContentShow").addClass("tileContentOutside");

			$(".tileContentReset").last().on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
				function(e) {
					$(".tileContentReset").removeClass("tileContentOutside");
				});

			$(".container").removeClass("expandDimmed");
			$(".highlight").removeClass("highlightHover");
		}
	}
);
$( ".row .highlight" ).hover(
	function(event){				// on mouse enter do this
		isHover = true;

		//highlight is the class for stuff that can be highlighted
		//highlightHover is the class for stuff currently highlighted by hovering
		$(".highlight").not(this).removeClass("highlightHover");
		$(this).addClass("highlightHover");

		var topMargin, scrollAmount;

		//if desktop
		if(!mobile){
			topMargin = parseInt($("header").css('height')) + parseInt($(".letter").css('margin-top'));
			scrollAmount = parseInt($("header").css('height')) + parseInt($(document).scrollTop());
			topMargin = Math.max(topMargin, scrollAmount);
		} else {
			var sy, d = document, r = d.documentElement, b = d.body;
			sy = r.scrollTop || b.scrollTop || 0;
			topMargin = sy + 40;
			$(".container").addClass("expandDimmed");
		}

		var top = 0;	// this is the distance from top for this element

		var delay = 0;		// initialize delay variable for multiple matched elements

		//add some delay to each subsequent item in list
		$("."+this.id+"").removeClass("tileContentOutside").addClass("tileContentShow").each(
			function(index){

				top = top + $(this).find("img").attr("height");
				if(!mobile){ // position elements if not mobile
					$(this).css("left", $(".container").offset().left + (960*0.66) + "px");
				} else {
					$(this).css("left", $(".container").offset().left + $(".container").width()/2 - 160 + "px");
				}
				$(this).css("top", (topMargin) + (index*210)+"px");

				$(this).css({transitionDelay: delay+'s'})
				delay += 0.04;
			}
		);

		$(".tileContentReset").not("."+this.id+"").removeClass("tileContentShow").addClass("tileContentOutside");

		$(".tileContentReset").not("."+this.id+"").last().on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
			function(e) {
				$(".tileContentReset").removeClass("tileContentOutside");
			});

	},
	function(){			// on mouse exit do this
		isHover = false;
		if(mobileDevice){
			$(".tileContentReset").removeClass("tileContentShow").addClass("tileContentOutside");

			$(".tileContentReset").last().on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
				function(e) {
					$(".tileContentReset").removeClass("tileContentOutside");
				});

			$(".container").removeClass("expandDimmed");
			$(".highlight").removeClass("highlightHover");
		}
	}
);

$(window).on('resize', function(){

	if($(window).width() < 992) {
		mobile = true;
		if($("*").hasClass("tileContentShow")){
			$(".container").addClass("expandDimmed");
		}
	} else {
		mobile = false;
		$(".container").removeClass("expandDimmed");
		$(".highlight").removeClass("highlightHover");
	}


	//if desktop
	if(mobile){
		if($(".container").hasClass("expandDimmed")){
			$(".container").addClass("expandDimmed");
		}
	}

	var delay = 0;		// initialize delay variable for multiple matched elements

	//add some delay to each subsequent item in list
	$(".tileContentShow").each(
		function(index){
			if(!mobile){ // position elements if not mobile
				$(this).css("left", $(".container").offset().left + (960*0.66) + "px");
			} else {
				$(this).css("left", $(".container").offset().left + $(".container").width()/2 - 160 + "px");
			}

			$(this).css({transitionDelay: delay+'s'})
			delay += 0.04;
		}
	);
});


//////////////////////////////////////////////////////////
// Here start functions to assign images to thumbnails //
//////////////////////////////////////////////////////////

function assignImages() {
	$(".tileContentReset").each(function(){
		var imgURL = $(this).find('div').attr('class');
		$(this).find('div').css('background-image', 'url(./img/thumb/' + imgURL + '_thumb.jpg)');
	});
}

assignImages();

var backgroundColors = ["cyan", "magenta", "yellow", "black"];

$(".selectable").hover(
	function(event){

		var parent = $(this).parent();
		//create .ink element if it doesn't exist
		if(parent.find(".ink").length == 0)
			parent.prepend("<span class='ink'></span>");

		var ink = parent.find(".ink");
		//incase of quick double clicks stop the previous animation
		ink.removeClass("animate");

		//use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
		var d = Math.max(parent.outerWidth(), parent.outerHeight());
		ink.css({height: d, width: d});

		//get click coordinates
		var x = event.pageX - parent.offset().left - ink.width()/2;
		var y = event.pageY - parent.offset().top - ink.height()/2;

		//set the position and add class .animate
		ink.css({top: y+'px', left: x+'px'}).addClass("animate");
		ink.css('background', 'linear-gradient(to top left, rgba(0,255,255,0.95),rgba(255,0,255,0.95))');
		var imgURL = $(this).parent().attr('class');
		$(this).parent().css('transition', 'all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1), top 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)');
		$(this).parent().css('background', 'url(./img/thumb/' + imgURL + '_thumb.jpg)');
		$(this).parent().css('background-size','cover');
		$(this).parent().css('background-position','center');
		var checkClass = $(this).parent().parent().attr('class').replace(/ /g, " .");
		$(this).css('background-image', 'none');
		if($(this).parent().parent().hasClass("tileContentShow")) {
			$("*").hasClass(checkClass).each(
				function(i){
					//alert(i);
					$(".highlightImage").css('background', backgroundColors[i]);
				}
			);
		}
	},
	function(){
		var imgURL = $(this).parent().attr('class');
		$(this).parent().css('background-image', 'url(./img/thumb/' + imgURL + '_thumb.jpg)');
		$(this).parent().css('background-size','cover');
		$(this).parent().css('background-position','center');
		$('.ink').removeClass('animate');
	}
);
