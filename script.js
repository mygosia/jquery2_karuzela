$(function(){
	var carouselList = $(".carousel ul");

	function slideImg() {
		carouselList.animate({
			marginLeft:-526})		
	};

	setInterval(slideImg, 1500, moveFirstSlide);
	
	function moveFirstSlide () {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};

});