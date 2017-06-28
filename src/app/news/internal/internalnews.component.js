var products = {
	templateUrl: '../../src/app/news/internal/internalnews.html',
	controller: function($scope, $state, $stateParams, newsFactory){
     var vm = this;

     initController();

     function initController() {        
        if ($stateParams.id) {
            vm.item = newsFactory.getByID($stateParams.id);
            console.log(vm.item[0]);
            }
        }

        // function saveProduct() {
        //   console.log('vm.product', vm.product);
        //     // save product
        //     ProductFactory.Save(vm.product);

        //     // redirect to users view
        //     $state.go('products');

        //     // emit event so list controller can refresh
        //     $scope.$emit('products-updated');
        // }
    }
}

module.exports = products;