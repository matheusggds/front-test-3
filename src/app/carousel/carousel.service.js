module.exports = function(){	
  var carousel = {
    name: 'Carousel Home',
    items: [
    {id: 1, alt: 'Slide 1', title: 'Slide 1', image: 'http://via.placeholder.com/1110x300/adff85', active: true},
    {id: 2, alt: 'Slide 2', title: 'Slide 2', image: 'http://via.placeholder.com/1110x300/ff8585/ffffff', active: false},
    {id: 3, alt: 'Slide 3', title: 'Slide 3', image: 'http://via.placeholder.com/1110x300/8885ff/ffffff', active: false}
    ],
    paused: true,
    interval: 3500
  };

  this.getCarousel = function() {
    return carousel;
  };

  this.getItems = function(){
    return carousel.items;
  };

   this.getInterval = function(){
    return carousel.interval;
  };

   this.setInterval = function(interval){
    return carousel.interval;
  };

  this.removeActive = function(){
    var indexActive = carousel.items.findIndex(function(el){
      return el.active == true;
    });
    carousel.items[indexActive].active = false;
    return carousel;
  };

  this.setActive = function(id_item){
    var indexItem = carousel.items.findIndex(function(el){
      return el.id == id_item;
    });

    carousel.items[indexItem].active = true;

    return carousel;
  };
};