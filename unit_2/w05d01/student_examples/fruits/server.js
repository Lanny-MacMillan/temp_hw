const express = require('express');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override') //add on for deletion with forms
// const Fruit = require('./models/fruits.js');
const fruitsController = require('./controllers/fruit.js');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use('/fruits', fruitsController);



// // fruits/seed uploads the seeded array 
// app.get('/fruits/seed', (req, res) => {
//     Fruit.create(
//         [
//             {
//                 name:'grapefruit',
//                 color:'pink',
//                 readyToEat:true
//             },
//             {
//                 name:'grape',
//                 color:'purple',
//                 readyToEat:false
//             },
//             {
//                 name:'avocado',
//                 color:'green',
//                 readyToEat:true
//             }
//         ], 
//         (err, data) => {
//             res.redirect('/fruits');
//         }
//     )
// });

// //delete route
// app.delete('/fruits/:id', (req, res)=>{
//     Fruit.findByIdAndRemove(req.params.id, (err, data)=>{
//         res.redirect('/fruits');//redirect back to fruits index
//     });
// });

// //edit fruits ejs
// app.get('/fruits/:id/edit', (req, res)=>{
//     Fruit.findById(req.params.id, (err, foundFruit)=>{ //find the fruit
//         res.render(
//             'edit.ejs',
//             {
//     			fruit: foundFruit //pass in found fruit
//             }
//         );
//     });
// });



// // get index.ejs file for /fruits
// app.get('/fruits', (req, res)=>{
//     Fruit.find({}, (error, allFruits)=>{
//         res.render('index.ejs', {
//             //fruits var in 
//             fruits: allFruits
//         });
//     });
// });


// // get info from form on fruits/new page
// app.get('/fruits/new', (req, res)=>{
//     res.render('new.ejs');
// });

// app.get('/fruits/:id', (req, res) => {
//     Fruit.findById(req.params.id, (error, foundFruit) => {
//         res.render(
//             'show.ejs',
//             {
//                 fruit:foundFruit
//             }
//         )
//     })
// })

// // show route must after created fruit
// app.post('/fruits/', (req, res)=>{
//     if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
//         req.body.readyToEat = true;
//     } else { //if not checked, req.body.readyToEat is undefined
//         req.body.readyToEat = false;
//     }
//     Fruit.create(req.body, (error, createdFruit) => {
//         // res.send(createdFruit);
//         res.redirect('fruits');
//     });
// });

// //puts edited Data to the body
// app.put('/fruits/:id', (req, res)=>{
//     if(req.body.readyToEat === 'on'){
//         req.body.readyToEat = true;
//     } else {
//         req.body.readyToEat = false;
//     }
//     Fruit.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
//         res.redirect('/fruits');
//         // res.send(updatedModel);
//     });
// });



app.listen(3000, ()=>{
    console.log('express listening');
});
// connects mongoose to our server.js    /basiccrud will be the DB
mongoose.connect('mongodb://localhost:27017/basiccrud', () => {
    console.log('connection with mongodb is established')
})
