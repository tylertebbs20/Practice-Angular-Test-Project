var app = angular.module('productTest');

app.service('productService', function($http, $q){

	this.addProduct = function(product){
		console.log(product, "passed added product into service");
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: "/api/product",
			data: product
		}).then(function(response){
			deferred.resolve(response.data)
		});
		return deferred.promise;
	};

	this.getProducts = function(products){
		var deferred = $q.defer();
		$http({
			method: "GET",
			url: "/api/products"
		}).then(function(response){
			console.log('I got the data I requested');
			deferred.resolve(response.data)
		});
		return deferred.promise;
	};

	this.getProduct = function(productId){
		var deferred = $q.defer();
		$http({
			method: "GET",
			url: "/api/product" + productId,
		}).then(function(response){
			deferred.resolve(response.data)
		});
		return deferred.promise;
	};

	this.updateProduct = function(productId){
		var deferred = $q.defer();
		$http({
			method: "PUT",
			url: "/api/product" + productId, 
		}).then(function(response){
			deferred.resolve(response.data)
		});
		return deferred.promise;
	};

	this.deleteProduct = function(productId){
		$http({
			method: "DELETE",
			url: "/api/product" + productId,
		}).then(function(response){
			deferred.resolve(response.data)
		})
		return deferred.promise;
	};

});