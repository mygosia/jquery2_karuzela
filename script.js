$(function(){
	var carouselList = $(".carousel ul");

	function slideImg() {
		carouselList.animate({
			marginLeft:-526}, 500, moveFirstSlide)		
	};

	setInterval(slideImg, 1500);
	
	function moveFirstSlide () {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};

});