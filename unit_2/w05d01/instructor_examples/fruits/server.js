const express = require('express');
const mongoose = require('mongoose');
const Fruit = require('./models/fruits.js')
const app = express();

app.use(express.urlencoded({extended:true}))

app.get('/fruits/seed', (req, res) => {
    Fruit.create(
        [
            {
                name:'grapefruit',
                color:'pink',
                readyToEat:true
            },
            {
                name:'grape',
                color:'purple',
                readyToEat:false
            },
            {
                name:'avocado',
                color:'green',
                readyToEat:true
            }
        ],
        (error, data) => {
            res.redirect('/fruits')
        }
    )
});
app.get('/fruits/', (req, res) => {
    Fruit.find({}, (error, allFruits) => {
        res.render(
            'index.ejs',
            {
                fruits:allFruits
            }
        );
    })
})

app.get('/fruits/new', (req, res) => {
    res.render('new.ejs')
})

app.get('/fruits/:id', (req, res) => {
    Fruit.findById(req.params.id, (error, foundFruit) => {
        res.render(
            'show.ejs',
            {
                fruit:foundFruit
            }
        )
    })
})

app.post('/fruits/', (req, res) => {
    // console.log(req.body.readyToEat);
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    // res.send(req.body);
    Fruit.create(req.body, (error, createdFruit) => {
        // res.send(createdFruit)
        res.redirect('/fruits');
    })
})

// $('div').on('click', () => {
//     console.log('oh hai!');
// })
// console.log('hello');

app.listen(3000, () => {
    console.log('listening...');
})
mongoose.connect('mongodb://localhost:27017/basiccrud', () => {
    console.log('The connection with mongod is established');
})
