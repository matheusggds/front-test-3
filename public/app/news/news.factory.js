module.exports = function(newsService){

	var news = {};

	news.getList = getList;
	news.setList = setList;
	news.getByID = getByID;

	function getList(){
		return newsService.getList();
	}

	function setList(list){
		newsService.setList(list);
	}

	function getByID(id){
    	var item = newsService.getList().filter(function(el){
      		return el.id == id;
    	});

    	return item;
	}

	return news;
}