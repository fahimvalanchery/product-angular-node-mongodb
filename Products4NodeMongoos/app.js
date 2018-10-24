const express = require('express');
const ProductData = require('./src/model/Productdata');
const BookData = require('./src/model/BookData');

const cors = require('cors'); // for externsl request
var bodyparser=require('body-parser'); //for post method
var app = new express();
app.use(cors());
app.use(bodyparser.json())

app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var product = {       
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl,
   }       
   var product = new ProductData(product);
   console.log(product);
   product.save();
});

app.post('/insertbook',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var book={
        bookCode:req.body.book.bookCode,
        bookName:req.body.book.bookName,
        bookPrice:req.body.book.bookPrice,
        bookImg:req.body.book.bookImg,
    }
    var book = new BookData(book);
    console.log(book);
    book.save();
});

app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    ProductData.find()
                .then(function(products){
                    res.send(products);
                });
});

app.get('/books',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    BookData.find()
    .then(function(books){
        res.send(books);
    });

});
app.listen(3000, function(){
    console.log('listening to port 3000');
});

