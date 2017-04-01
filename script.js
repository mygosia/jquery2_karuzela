$(function(){
	var carouselList = $(".carousel ul");
	$(".carousel ul").setInterval(function(){ alert("Hello"); }, 3000);
	/*
	function changeSlide () {
		carouselList.animate({marginleft: '-=526px'}, 500, moveFirstSlide);
	}
	function moveFirstSlide () {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}*/
});