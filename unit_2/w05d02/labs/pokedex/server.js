// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const mongoose = require('mongoose'); //require mongoose
// const methodOverride = require('method-override') //add on for deletion with forms
const port = 3000;
const db = mongoose.connection
const methodOverride = require('method-override') //add on for deletion with forms
const seedPokemon = require('./models/pokemon.js');
const Pokemon = require('./models/schema.js')
app.use(methodOverride('_method'));

//body parser, parses form 
app.use(express.urlencoded({extended: true}));
app.use(express.json())

// use public folder for css
app.use(express.static('public'))

// =======================================
//              DATABASE
// =======================================

app.get('/pokemon/seed', (req, res) => {
//   schema         seedData
    Pokemon.create(seedPokemon, (err, createdData) => {
        console.log('Seed data registered!')
    })
    res.redirect('/pokemon')
})

// =======================================
//              ROUTES
// =======================================
// INDEX
//express app get /poke url
app.get('/pokemon', (req, res) => {
    //DB looking for all Pokemon matching schema
    Pokemon.find({}, (error, allPokemon) => {
        //when found render index.ejs
    res.render(
        'index.ejs', 
        //
        {
        Pokemon: allPokemon
        }
        )
    })
})

// NEW - needs to be near top
app.get('/pokemon/new', (req, res) => {
    res.render(
        'new.ejs'
        )
    res.render('new.ejs', { data: Pokemon });
});

// CREATE
app.post('/pokemon/new', (req,res) =>{
    Pokemon.create(req.body, (error, createdPokemon)=>{
        if (error) {
            console.log('error');
        }
        res.redirect(
            '/pokemon'
            )
    })
})

// SHOW
app.get('/pokemon/:id', (req, res) => {
    Pokemon.find({id:req.params.id}, (error, foundPokemon) => {
        // console.log(foundPokemon)
        res.render(
            'show.ejs',
            {
                Pokemon: foundPokemon[0]
            }
        )
    })
})

//EDIT
app.get('/pokemon/:id/edit', (req, res) => {
    Pokemon.find({id:req.params.id}, (error, data) => {
    res.render(
        'edit.ejs', 
        {
        Pokemon: data[0]
        }
        )
    })
})

app.put('/pokemon/:id/', (req, res) => {
// findOneAndUpdate looks for whats in the {}   where it will be updated
    Pokemon.findOneAndUpdate({id:req.params.id}, req.body, {new:true}, (err, updatedPokemon) => {
        res.redirect('/pokemon')
    })
})

// router.put('/:id', (req, res)=>{
//     let convertedBody = {
//       name: req.body.name,
//       img: req.body.img,
//       type: req.body.type.split(', '),
//       stats: {
//         hp: req.body.hp,
//         attack: req.body.attack,
//         defense: req.body.defense,
//         spattack: req.body.spattack,
//         spdefense: req.body.spdefense,
//         speed: req.body.speed
//       }
//     }

// DESTROY
app.delete('/pokemon/:id', (req, res)=>{
    Pokemon.findOneAndDelete({id:req.params.id}, (error, foundPokemon) => {
        res.redirect('/pokemon');//redirect back to pokemon index
    });
});
// =======================================
//              LISTENER
// =======================================
//db error tests
db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected: localhost:27017'))
db.on('disconnected', () => console.log('mongo disconnected'))

// express listening on port 3000
app.listen(port, () => {
    console.log(`Express app listening on port: ${port}`)
});

// connects mongoose to our server.js    /pokedex will be the DB
mongoose.connect('mongodb://localhost:27017/' + 'pokemon', () => {
    console.log('connection with mongodb is established')
})