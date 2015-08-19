var mongoose = require('mongoose');
var Product = require('../models/productSchema.js');

module.exports = {

	getAllProducts: function(req, res){
		console.log('this hit the backend productCtrl');
		Product.find(req.body, function(err, response){
			if (err) {
				res.status(500).json(err);
			} else {
				res.json(response);
			}
		});
	},

	getOneProduct: function(req, res){
		Product.findbyId(req.params.productId, function(err, response){
			if (err) {
				res.status(500).json(err)
			} else {
				res.json(response);
			}
		});
	},

	addProduct: function(req, res){
		console.log('getting to my add product service');
		Product.create(req.body, function(err, response){
			if (err) {
				res.status(500).json(err);
			} else {
				res.json(response);
			}
		});

	},

	editProduct: function(req, res){
		Product.findByIdAndUpdate(req.params.productId, function(err, response){
			if (err) {
				res.status(500).json(err);
			} else {
				res.json(response);
			}

		}); 
			
	},

	deleteProduct: function(req, res){
		Product.findByIdAndDelete(req.params.productId, function(err, response){
			if (err){
				res.status(500).json(err);
			} else {
				res.json(response);
			}
		});
	}

};