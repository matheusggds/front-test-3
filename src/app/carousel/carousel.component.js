var carousel = {
	templateUrl: '../app/carousel/carousel.html',
	controller: function(carouselFactory, $interval){

		var vm = this;

		vm.carousel = carouselFactory.getCarousel();
		vm.items = vm.carousel.items;
		vm.interval = vm.carousel.interval;
		vm.nextSlide = nextSlide;
		vm.gotoSlide = gotoSlide;

		$interval(nextSlide, vm.interval);

		function nextSlide(){
			carouselFactory.nextSlide();
		}

		function gotoSlide(id_item){
			carouselFactory.setSlideActive(id_item);
		}
	}
};

module.exports = carousel;