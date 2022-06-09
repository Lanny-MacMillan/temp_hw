const express = require('express')
const app = express();

const pastWork = require('./models/pastwork.js')
const arrayLinks = require('./models/links.js')
const arrayStaff = require('./models/staff.js')
const breadsF = require('./models/home.js')
const offers = require('./models/favourite.js');
const historyList = require('./models/history');
const products = require('./models/products')

//tells express to try to match requests with files in the directory called 'public'
app.use(express.static('public'));

//App listen to port 3000
app.listen(3000, () => {
    console.log('listening...')
})


app.get('/', (request, response) => {
    response.send('Welcome to a functional req/res, no HTML import')
})

app.get('/home', (request, response) => {
    response.render('home.ejs',{breads: breadsF})    
})
app.get('/companyhistory', (request, response) => {
    response.render(`companyhistory.ejs`,{history: historyList})
})
app.get('/contact', (request, response) => {
    response.render(`contact.ejs`)
})
app.get('/pastwork', (request, response) => {
    response.render('pastwork.ejs', {pastWork:pastWork})
})
app.get('/staff', (request, response) => {
    response.render('staff.ejs', {arrayStaff:arrayStaff})
})
app.get('/links', (request, response) => {
    response.render('links.ejs', {arrayLinks:arrayLinks})
})
app.get('/products', (request, response) => {
    response.render('products.ejs', {products:products})
})