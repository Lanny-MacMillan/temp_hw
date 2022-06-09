const express = require('express');
const router = express.Router();
const Fruit = require('../models/fruits.js')

// get info from form on fruits/new page
router.get('/ne', (req, res)=>{
    res.render('new.ejs');
});

// show route must after created fruit
router.post('/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit) => {
        // res.send(createdFruit);
        res.redirect('/fruits');
    });
});

// get index.ejs file for /fruits
router.get('/', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render('index.ejs', {
            //fruits var in 
            fruits: allFruits
        });
    });
});

//show route
router.get('/:id', (req, res) => {
    Fruit.findById(req.params.id, (error, foundFruit) => {
        res.render(
            'show.ejs',
            {
                fruit:foundFruit
            }
        )
    })
})

//delete route
router.delete('/:id', (req, res)=>{
    Fruit.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/fruits');//redirect back to fruits index
    });
});

//edit fruits ejs
router.get('/:id/edit', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{ //find the fruit
        res.render(
            'edit.ejs',
            {
    			fruit: foundFruit //pass in found fruit
            }
        );
    });
});

//puts edited Data to the body
router.put('/:id', (req, res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        res.redirect('/fruits');
        // res.send(updatedModel);
    });
});



module.exports = router;