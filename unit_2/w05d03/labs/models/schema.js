const mongoose =  require('mongoose');

// creates Schema
const movieSchema = new mongoose.Schema({
    name: {type:String, required:true},
    img: String,
    type: {type:String, required:true} ,
    director: String,
    stars: String,
    rating: String,
    inStock: {type:Boolean, required:true},
    reviews: String,
}) 

  //  creates a collection 
const Movies = mongoose.model('movies', movieSchema);
module.exports = Movies
