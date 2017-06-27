module.exports = function(){	
  var newslist = [];

  this.getList = function() {
    return newslist;
  };

  this.setList = function(list){
    newslist = list;
  }
}