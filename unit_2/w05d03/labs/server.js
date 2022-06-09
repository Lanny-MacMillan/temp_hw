// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const db = mongoose.connection;
const methodOverride = require('method-override') //add on for deletion 
app.use(methodOverride('_method'));

const seedMovies = require('./models/seed.js')
const Movies = require('./models/schema.js')

// const seed
//body parser, parses form 
app.use(express.urlencoded({extended: true}));
app.use(express.json())

// use public folder for css
app.use(express.static('public'))

// =======================================
//              DATABASE
// =======================================

app.get('/movies/seed', (req, res) => {
    //   schema         seedData
        Movies.create(seedMovies, (err, createdData) => {
            console.log('Seed data registered!')
        })
        res.redirect('/index')
})

// =======================================
//              ROUTES
// =======================================
// INDEX
app.get('/movies', (req, res) => {
    Movies.find({}, (error, Movies) => {
    res.render(
        'index.ejs', 
        {
        Movies: Movies
        }
        )
})
})

// SHOW
app.get('/movies/:id', (req, res) => {
    Movies.findById(req.params.id, (error, foundMovies) => {
        res.render(
            'show.ejs',
            {
            Movies: foundMovies
            }
        );
    })
})

// NEW
app.get('/new', (req, res) => {
    res.render(
        'new.ejs', 
        )
})

app.post('/movies', (req,res) => {
	if (req.body.inStock === 'on') {
		req.body.inStock = true
	} else {
		req.body.inStock = false
	}
	Movies.create(req.body, (err, createdMovie) => {
		res.redirect('/movies')
	})
})

// EDIT
app.get('/movies/:id/edit', (req, res) => {
	Movies.findById(req.params.id, (err, foundMovie) => {
		res.render(
			'edit.ejs', {
				Movies: foundMovie
			}
		)
	})
})
app.put('/movies/:id/edit', (req, res) => {
	const id = req.params.id
	console.log(req.body.reviews);
	Movies.findByIdAndUpdate({_id:id},{reviews:req.body.reviews})
	.then((Movies) =>{
	res.redirect("/movies")
})
})

// DELETE
app.delete('/movies/:id', (req, res)=>{
    Movies.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/movies');//redirect back to index
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

// connects mongoose to our server.js    '' will be the DB
mongoose.connect('mongodb://localhost:27017/' + 'movies', () => {
    console.log('connection with mongodb is established')
})