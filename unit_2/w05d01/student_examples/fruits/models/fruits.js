const mongoose =  require('mongoose');

// creates Schema or model for data
const fruitSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
});

//  creates a collection 
const fruitCollection = mongoose.model('Fruit', fruitSchema);

// exports fruitCollections
module.exports = fruitCollection;

// would also work
// module.exports =  mongoose.model('Fruit', fruitSchema);