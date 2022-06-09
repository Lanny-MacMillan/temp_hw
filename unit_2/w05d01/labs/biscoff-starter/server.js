// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;

// =======================================
//              DATABASE
// =======================================
const bakedGoods = require('./models/bakedgoods.js');

// =======================================
//              ROUTES
// =======================================
// index route
app.get('/bakedgoods/new', (request, response) => {
  response.render('form.ejs',{bakedGoods: bakedGoods})    
})

app.get('/bakedgoods', (request, response) => {
  response.render('index.ejs',{bakedGoods: bakedGoods})    
})

// show route
app.get('/bakedgoods/:id', (request, response) => {
  response.render('show.ejs',{bakedGood: bakedGoods[request.params.id]})    
})
//send form data to DB
app.post('/order/', (req, res)=>{
  Fruit.create(req.body, (error, orderForm) => {
      // res.send(createdFruit);
      res.redirect('orderForm');
  });
});
// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Biscoff Bakery app listening on port: ${port}`)
});
