const express = require('express');
const mongoose = require('mongoose');
const Fruit = require('./models/fruits.js');
const app = express();

app.use(express.urlencoded({extended:true}))

app.get('/fruits/new', (req, res) => {
    res.render('new.ejs');
});

app.get('/fruits/:id', (req, res) => {
    Fruit.findById(req.params.id, (error, foundFruit) => {
        res.render(
            'show.ejs',
            {
                fruit:foundFruit
            }
        );
    })
})

app.get('/fruits', (req, res) => {
    Fruit.find({}, (error, allFruits) => {
        res.render(
            'index.ejs',
            {
                fruits:allFruits,
            }
        )
    })

})

app.post('/fruits', (req, res) => {
    // console.log(req.body.readyToEat);
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit) => {
        // res.send(createdFruit)
        res.redirect('/fruits')
    })
    // res.send('hello')
})

mongoose.connect('mongodb://localhost:27017/basiccrud', () => {
    console.log('The connection with mongod is established');
})

app.listen(3000, () => {
    console.log('listening...');
})
