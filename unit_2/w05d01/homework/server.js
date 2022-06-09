// =======================================
//              DEPENDENCIES
// =======================================

const express = require('express');
const mongoose =  require('mongoose');
const app = express();
const port = 3000;
const db = mongoose.connection
const mongoURI = 'mongodb://localhost:27017/budget'

//body parser parses form 
app.use(express.urlencoded({extended: true}));
app.use(express.json())

//static
app.use(express.static('public'))

// =======================================
//              DATABASE
// =======================================
const Seed = require('./models/budget.js');
const Budget = require('./models/schema.js');

// =======================================
//              ROUTES
// =======================================
// index.ejs load on /budget
app.get('/budget', (req, res) => {
    Budget.find({}, (error, allBudgets) => {
    res.render(
        'index.ejs', {
        // budget matches ejs page, second parameter is set after the error and passed down here
        budget: allBudgets
        }
        )
    })
})

//not sure why this has to be above line 44 but it would load a blank page when below
app.get('/budget/new', (req, res) => {
    res.render('new.ejs')
})

// show.ejs by :id in url 
app.get('/budget/:id', (req, res) => {
    //   request . parameter . ID matches /budget/:id
    Budget.findById(req.params.id, (error, foundBudget) => {
        res.render(
            'show.ejs', {
        // budget matches the show page
            budget: foundBudget
            }
        )
    })
})

app.post('/budget/new', (req, res) => {
    // console.log(req.body);
    Budget.create(req.body, (error, newItem) => {
        if (error) {
            console.log(error);
        } 
        res.redirect('/budget')
    })
})

// =======================================
//              LISTENER
// =======================================
//db error tests
db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))


// express listening on port 3000
app.listen(port, () => {
    console.log(`Budget app listening on port: ${port}`)
});


// connects mongoose to our server.js    /basiccrud will be the DB
mongoose.connect(mongoURI, () => {
    console.log('connection with mongodb is established')
})










//================== SEED BUDGET =============================
// ths should work, copied from Nathan on HW review
app.get('/budgets/seed', (req, res) => {
    Seed.create(seedData, (err, createdData) => {
console.log('Seed data registered!')
    })
    res.redirect('/budgets')
})

// app.get('/budgets/seed', (req, res) => {
//     Budget.create(
//         [
//             {
//                 date: "April 1",
//                 name: "Taxes",
//                 from: "Government",
//                 amount: -300,
//                 tags: ["taxes"]
//             },
//             {
//                 date: "April 1",
//                 name: "Retirement",
//                 from: "Country Bank",
//                 amount: -200,
//                 tags: ["retirement", "investing in the future"]
//             },
//             {
//                 date: "April 1",
//                 name: "Savings",
//                 from: "Country Bank",
//                 amount: -100,
//                 tags: ["savings", "rainy day fund"]
//             },
//             {
//                 date: "April 1",
//                 name: "Credit Card Payment",
//                 from: "NPM Express",
//                 amount: -100,
//                 tags: ["credit card"]
//             },
//             {
//                 date: "April 5",
//                 name: "Monthy Birthday Money from Aunt Tilda",
//                 from: "Aunt Tilda",
//                 amount: 20,
//                 tags: ["Aunt Tilda is the best"]
//             },
//             {
//                 date: "April 5",
//                 name: "Coffee",
//                 from: "Moon Coin",
//                 amount: -4,
//                 tags: ["coffee"]
//             },
//             {
//                 date: "April 5",
//                 name: "Internet",
//                 from: "Horizon",
//                 amount: -100,
//                 tags: ["utilities"]
//             },
//             {
//                 date: "April 3",
//                 name: "Groceries",
//                 from: "Merchant Jack's",
//                 amount: -76,
//                 tags: ["groceries"]
//             },
//             {
//                 date: "April 3",
//                 name: "Pet Food",
//                 from: "Pet Precious Inc",
//                 amount: -7,
//                 tags: ["pets"]
//             },
//         ], 
//         (err, data) => {
//             res.redirect('/budget/');
//         }
//     )
// });
