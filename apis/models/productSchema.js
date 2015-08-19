var mongoose =require('mongoose');

var productSchema = mongoose.Schema({
	name: {type: String}
	, price: {type: Number}
	, color: {type: String}
	, size: {type: String}
	, images: [{type: String}]
	, date: {type: Date}
});

productSchema.pre('save', function(next){
	var product = this;
	product.date = Date.now();
	next();
})

module.exports = mongoose.model('Products', productSchema);