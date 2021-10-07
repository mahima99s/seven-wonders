window.addEventListener("load", function () {
	setTimeout(function () {
		$("#loader").animate({ height: '0', width: '0', opacity: '0', marginLeft: '50vw', marginTop: '50vh' }, 500).fadeOut();
	}, 500);
	setTimeout(function () {
		$("#main").fadeIn("slow");
	}, 550);
});
$(document).ready(function () {
	"use strict";
	$(window).scroll(function () {
		var scroll = $(this).scrollTop();
		if ($(window).scrollTop() > 5 || $(window).scrollTop() === 5) {
			$("#top-nav").removeClass("top-nav");
			$("#top-nav").addClass("top-nav-scrolled");
		} else {
			$("#top-nav").addClass("top-nav");
			$("#top-nav").removeClass("top-nav-scrolled");
		}
		$(".first-parallax").css("transform", "translateY(" + -(scroll / 4) + "px)");
		$(".jquery-scroller-div-para-one-scroll").css("transform", "translateY(" + (scroll / 2) + "px)");
	});
	$(".menu-in-top-nav").click(function () {
		$(window).css("overflow", "hidden");
		$(".sidebar-menu").fadeIn(300);
		if ($(window).width() > 480) {
			$(".sidbar-menu-container").animate({width: '350px'}, 300);
		} else {
			$(".side-menu-container").animate({width: '100vw'}, 350);
		}
	});
	$(".side-menu-container-closer, .sidebar-menu").click(function () {
		$(window).css("overflow", "auto")
		if ($(window).width() > 480) {
			$(".sidbar-menu-container").animate({width: '0'}, 325);
		} else {
			$(".sidbar-menu-container").animate({width: '0'}, 350);
		}
		$(".sidebar-menu").fadeOut(350);
	}).children().click(function (e) {
		e.stopPropagation();
		return false;
		});
	$("#seven-wonders-in-menu-option").click(function () {
		$(".menu-option").slideUp("slow");
		$(".seven-wonders-menu-cont").slideDown("slow");
	});
	$("#seven-wonders-menu-cont-closer").click(function () {
		$(".menu-option").slideDown("slow");
		$(".seven-wonders-menu-cont").slideUp("slow");
	});
	$("#sahil-raj-information").click(function () {
		$(".menu-option").slideUp("slow");
		$(".sahil-raj-info-in-side-menu").slideDown("slow");
	});
	$("#sahil-raj-info-in-side-menu-closer").click(function () {
		$(".menu-option").slideDown("slow");
		$(".sahil-raj-info-in-side-menu").slideUp("slow");
	});
	$("#about-the-webpage").click(function () {
		$(".menu-option").slideUp("slow");
		$(".about-website-whole-div").slideDown("slow");
	});
	$("#website-about-in-side-menu-closer").click(function () {
		$(".menu-option").slideDown("slow");
	    $(".about-website-whole-div").slideUp("slow");
	});
	$("#meant-for-trigger").click(function () {
		$(".menu-option").slideUp("slow");
		$(".meant-whole-div").slideDown("slow");
	});
	$("#meant-in-side-menu-closer").click(function () {
		$(".menu-option").slideDown("slow");
		$(".meant-whole-div").slideUp("slow");
	});
});
window.onload = setInterval(orientation, 5);
function orientation() {
	if (window.innerHeight > window.innerWidth) {
    document.getElementById("main").style.display = "none";
    document.getElementById("switch").style.display = "block";
} else {
	document.getElementById("main").style.display = "block";
    document.getElementById("switch").style.display = "none";
}
}
var goFS = window;
goFS.addEventListener("dblclick", function () {
	var doc = window.document;
	var docEl = doc.documentElement;

	var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
	var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

	if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
		requestFullScreen.call(docEl);
	}
	else {
		cancelFullScreen.call(doc);
	}
}, false);