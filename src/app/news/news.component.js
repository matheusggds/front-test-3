var carousel = {
	templateUrl: '../app/news/news.html',
	controller: function(newsFactory, $http){

		var vm = this;

		vm.title = 'teste news';

		setList();

		function setList(){
			$http.get('https://api.myjson.com/bins/a56hd').then(function(response) {
        		newsFactory.setList(response.data);
        		vm.list = newsFactory.getList();
    		}); 
		}
	}
};

module.exports = carousel;