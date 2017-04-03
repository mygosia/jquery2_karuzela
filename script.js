$(function(){
	var carouselList = $(".carousel ul");
	

	function slideImgNext() {
		carouselList.animate({
			marginLeft:-526}, 1500, moveFirstSlide)		
	};
	function moveFirstSlide () {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};
	function slideImgBack() {		
		carouselList.animate({
			marginLeft: 0}, 1500, moveLastSlide)		
	};
	function moveLastSlide () {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft: -526});
	};
	$(".nextBtn").click(
		slideImgNext		
	);
	$(".backBtn").click(
		moveLastSlide,
		slideImgBack
	);
});
