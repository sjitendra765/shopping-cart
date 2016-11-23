var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
	new Product({
	imagePath: 'images/gothic.png',
	title: 'Gothic Video Game',
	description:'Awesome Game!!!',
	price:10
	}),
	new Product({
	imagePath: 'images/gothic.png',
	title: 'Gothic Video Game',
	description:'Awesome Game!!!',
	price:10
	}),
	new Product({
	imagePath: 'images/gothic.png',
	title: 'Gothic Video Game',
	description:'Awesome Game!!!',
	price:10
	}),
	new Product({
	imagePath: 'images/gothic.png',
	title: 'Gothic Video Game',
	description:'Awesome Game!!!',
	price:10
	}),
	new Product({
	imagePath: 'images/gothic.png',
	title: 'Gothic Video Game',
	description:'Awesome Game!!!',
	price:10
	}),
	new Product({
	imagePath: 'images/gothic.png',
	title: 'Gothic Video Game',
	description:'Awesome Game!!!',
	price:10
	})
	];

	var done = 0;

	for(var i=0; i < products.length; i++){
		products[i].save();
		done++;
		console.log('test');
		if (done === products.length){
			exit();
		}
	}
	function exit(){
		mongoose.disconnect();
	}
