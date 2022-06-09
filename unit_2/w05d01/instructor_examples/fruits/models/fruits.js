const mongoose = require('mongoose');

const fruitsSchema = new mongoose.Schema({
    name: { type: String, required:true },
    color: { type: String, required:true },
    readyToEat: Boolean
})

const fruitCollection = mongoose.model('Fruit', fruitsSchema)

module.exports = fruitCollection;
