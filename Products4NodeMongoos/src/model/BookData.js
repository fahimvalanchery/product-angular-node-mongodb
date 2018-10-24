const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProductDB');
const Schema = mongoose.Schema;

var BookSchema = new Schema({
     bookCode :Number,
     bookName:String,
     bookPrice:Number,
     bookImg:String
    
});

var BookData = mongoose.model('book', BookSchema);                        //UserData is the model and NewBookData is the schema

module.exports = BookData;