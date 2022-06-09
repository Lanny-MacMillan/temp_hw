const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: String,
    species: String,
    image: String,
    reservedForAdoption: Boolean
})

const Animals = mongoose.model('Animals', animalSchema);
module.exports = Animals