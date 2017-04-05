$(function(){
	var carouselList = $(".carousel ul");
	

	function moveFirstSlide () {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};
	function slideImgNext() {
		carouselList.animate({
			marginLeft:-526}, 1500, moveFirstSlide)		
	};
	
	function moveLastSlide () {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft: -526});
	};

	function slideImgBack() {
		moveLastSlide,		
		carouselList.animate({
			marginLeft: 0}, 1500, moveLastSlide)		
	};
	$(".nextBtn").on("click", slideImgNext);
	$(".backBtn").on("click", slideImgBack);
});
