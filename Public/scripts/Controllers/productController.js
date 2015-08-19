var app = angular.module('productTest');

app.controller('productController', function($scope, productService){
	

	$scope.addProduct = function(product){
		console.log(product, "add product in frontend controller");
		productService.addProduct(product)
	};


	$scope.getProducts = function(data){
		console.log(data, "I just got the products back");
		productService.getProducts().then(function(response){
			$scope.products = response.data;
			getProducts();
		})
	};



});

