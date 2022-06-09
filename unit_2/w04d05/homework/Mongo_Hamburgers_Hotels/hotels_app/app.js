// Dependencies
const mongoose = require('mongoose')


// Config
const db = mongoose.connection
const mongoURI = 'mongodb://localhost:27017/hotel'

// Models
const Hotel = require('./models/hotel.js')
const hotelSeed = require('./models/seed.js')

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('The connection with mongod is established')
})

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

// Hotel.create(hotelSeed, (err, data) => {
//     if (err) console.log(err.message);
//     console.log('added provided hotel data')
// })

Hotel.count({} , (err , data)=> {
    if ( err ) console.log( err.message );
    console.log ( `There are ${data} hotels in this database` );
});


// //============================ C =================================
// // Create a hotel 

// const myFIrstHotel = {
//     name: 'Under the Bridge Hotel',
//     location: 'Boston, Massachusetts',
//     ratingType: '1',
//     price: 10,
//     vacancies: true,
//     tags: ["fresh water", "natural ammenities"],
//     rooms: [{"roomNumber": 1, size: "Large stone sized bed", price: 15, booked: false}],
// }


// Hotel.create(myFIrstHotel, (error, Hotel) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(Hotel)
//     }
//     db.close()
// })



// //============================ R ====================================
// // let's find all our hotels

// Hotel.find((error, hotels) => {
//     console.log(hotels)
//     db.close()
// })



// // find all the hotels but only return the hotel name and console.log them

// Hotel.find({}, 'name', (error, hotels) => {
//     console.log(hotels)
//     db.close()
// })



// // find just your hotel using a search parameter that would only match your hotel

// Hotel.find({name:"Under the Bridge Hotel"}, (error, hotels) => {
//     console.log(hotels)
//     db.close()
// })



// //find all the hotels that have vacancies, also exclude ratings.

// Hotel.find({vacancies: true}, {ratingType: 0}, (error, hotels) => {
//     console.log(hotels)
//     db.close()
// })



// //============================ D ====================================
// turns out Hotelicopter was an April Fool's prank! Let's delete that one from our database

// Hotel.findOneAndRemove({name:"Hotelicopter"}, (error, hotels)=>{
//     if (error){
//         console.log(error);
//     } else {
//         console.log(`deleted Hotelicopter`);
//     }
//     db.close()
// })




// // Hilbert's Hotel is getting terrible ratings all it does is give everyone headaches and no room service. Let's just remove that one as well

// Hotel.findOneAndRemove({name:"Hilbert's Hotel"}, (error, hotels)=>{
//     if (error){
//         console.log(error);
//     } else {
//         console.log(`deleted Hilbert's Hotel`);
//     }
//     db.close()
// })





// // The hotel in the Colorado Rockies has been closed for undisclosed reasons. Delete this hotel too

// Hotel.findOneAndRemove({location:"Colorado Rockies"}, (error, hotels)=>{
//     if (error){
//         console.log(error);
//     } else {
//         console.log(`deleted hotel in the Colorado Rockies`);
//     }
//     db.close()
// })




// //============================ U ====================================
// // The Great Northern's rating is only a 3! Update that to be a 5

// Hotel.findOneAndUpdate({name: "The Great Northern"}, {ratingType: 5}, (error, hotels) => {
//     if (error){
//         console.log(error);
//     } else {
//         console.log('done');
//     }
//     db.close()
// })




// // Motel Bambi is now fully booked, change the vacancies to false
// Hotel.findOneAndUpdate({name: "Motel Bambi"}, {vacancies: false}, (error, hotels) => {
//     if (error){
//         console.log(error);
//     } else {
//         console.log('done');
//     }
//     db.close()
// })



// // Things are on the decline for the Motel in 'White Bay, Oregon', change the rating to 2

// Hotel.findOneAndUpdate({location: "White Bay, Oregon"}, {ratingType: 2}, (error, hotels) => {
//     if (error){
//         console.log(error);
//     } else {
//         console.log('done');
//     }
//     db.close()
// })
