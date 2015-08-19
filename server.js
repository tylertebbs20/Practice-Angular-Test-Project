var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 1440;
var productCtrl = require('./apis/controllers/productCtrl.js');

mongoose.connect('mongodb://localhost:27017/productTest');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname+'/Public'));

app.get('/api/products', productCtrl.getAllProducts);
app.get('/api/product:productId', productCtrl.getOneProduct);
app.post('/api/product', productCtrl.addProduct);
app.put('/api/product:productId', productCtrl.editProduct);
app.delete('/api/product:productId', productCtrl.deleteProduct);

app.listen(port, function(){
	console.log('now listening on port ' + port);
});