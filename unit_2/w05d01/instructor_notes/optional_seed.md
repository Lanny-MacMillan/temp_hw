# Creating a Seed Route

## Lesson Objectives

1. Create a Seed Route

## Create a Seed Route

Sometimes you might need to add data to your database for testing purposes.  You can do so like this:

```javascript
app.get('/fruits/seed', (req, res)=>{
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
        (err, data)=>{
            res.redirect('/fruits');
        }
    )
});
```

This way, every time you visit http://localhost:3000/fruits/seed, it will populate your database for you so you don't have to manually enter the data through the web app.  You can quickly dump your data in mongo with `db.fruits.remove({})` and then reseed the data.  Great for when you have bad data and you just want to start fresh
