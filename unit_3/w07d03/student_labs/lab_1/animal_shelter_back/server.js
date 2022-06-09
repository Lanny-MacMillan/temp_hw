const express = require ('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Animals = require('./models/animals.js')


const app = express()
app.use(cors());
app.use(express.json()); //use .json(), not .urlencoded()


//======================= ROUTES =========================

// CREATE ROUTE
app.post('/animals', (req,res) => {
    Animals.create(req.body, (err, createdAnimals)=>{
        res.json(createdAnimals)
    })
})
// INDEX ROUTE
app.get('/animals', (req,res) => {
    Animals.find({}, (err, foundAnimals) => {
        res.json(foundAnimals);
    })
})
// DELETE ROUTE
app.delete('/animals/:id', (req, res)=>{
    Animals.findByIdAndRemove(
        req.params.id, (err, deletedAnimals)=>{
        res.json(deletedAnimals);
    });
});
// UPDATE ROUTE
app.put('/animals/:id', (req, res)=>{
    Animals.findByIdAndUpdate(
        req.params.id, req.body,
        {new:true}, (err,
        updatedAnimals) => {
        res.json(updatedAnimals);
    });
});


//==================LISTENERS========================
app.listen(3000, () => {
    console.log('listening on port 3000...')
})
mongoose.connect('mongodb://localhost:27017/animal_shelter')
mongoose.connection.once('open', () => {
    console.log('connected to mongod on port 27017')
})