const mongoose = require('mongoose')
const Schema = mongoose.Schema


const hotelSchema = new Schema({
    name: { type: String, required: true, unique: true },
    location: String,
    ratingType: { type: Number, min: 0, max: 5},
    price: Number,
    vacancies: Boolean,
    tags: [{type: Array}],
    rooms: [{ roomNumber: Number, size: String, price: Number, booked: Boolean}],
}, {timestamps: true})



const Hotel = mongoose.model('Hotel', hotelSchema)
module.exports = Hotel