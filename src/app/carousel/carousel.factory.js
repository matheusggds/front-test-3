module.exports = function(carouselService){

	var carousel = {};

	carousel.getCarousel = getCarousel;
	carousel.getItems = getItems;
	carousel.getInterval = getInterval;
	carousel.setInterval = setInterval;
	carousel.nextSlide = nextSlide;
	carousel.setSlideActive = setSlideActive;

	function getCarousel(){
		return carouselService.getCarousel();
	}

	function getItems(){
		return carouselService.getItems();
	}

	function getInterval(){
		return carouselService.getInterval();
	}

	function setInterval(interval){
		return carouselService.setInterval();
	}

	function nextSlide(){
		var items = carouselService.getItems();
		var indexActive = items.filter(function(el, pos){
			if(el.active == true)
				index = pos;
			return el.active == true;
		});

		items[index].active = false;
		index = (index+1)%items.length;
		items[index].active = true;

		return index;
	}

	function setSlideActive(id_item){
		carouselService.removeActive();
		carouselService.setActive(id_item);
	}

	return carousel;

};