// create 5 burgers (at least 3 should be beef)
db.burger.insert(
    [
    {
    meat: 'beef',
    cheese: false,
    toppings: ['ketchup' ,'onions' ,'pickles']
    },
    {
    meat: 'beef',
    cheese: true,
    toppings: ['ketchup' ,'onions' ,'pickles']
    },
    {
    meat: 'beef',
    cheese: false,
    toppings: ['ketchup' ,'onions' ,'lettuce', 'pickles']
    },
    {
    meat: 'chicken',
    cheese: false,
    toppings: ['bacon' ,'onions' ,'pickles']
    },
    {
    meat: 'beef',
    cheese: false,
    toppings: ['ketchup' ,'onions' ,'pickles', 'bacon']
    }
]
)
db.budgets.insert(
    [
        {
        date: "April 1",
        name: "Income",
        from: "Old Glory Insurance",
        amount: 1000,
        tags: ["income", "yay"]
        },
        {
          date: "April 1",
          name: "Taxes",
          from: "Government",
          amount: -300,
          tags: ["taxes"]
        },
        {
          date: "April 1",
          name: "Retirement",
          from: "Country Bank",
          amount: -200,
          tags: ["retirement", "investing in the future"]
        },
        {
          date: "April 1",
          name: "Savings",
          from: "Country Bank",
          amount: -100,
          tags: ["savings", "rainy day fund"]
        },
        {
          date: "April 1",
          name: "Credit Card Payment",
          from: "NPM Express",
          amount: -100,
          tags: ["credit card"]
        },
        {
          date: "April 5",
          name: "Monthy Birthday Money from Aunt Tilda",
          from: "Aunt Tilda",
          amount: 20,
          tags: ["Aunt Tilda is the best"]
        },
        {
          date: "April 5",
          name: "Coffee",
          from: "Moon Coin",
          amount: -4,
          tags: ["coffee"]
        },
        {
          date: "April 5",
          name: "Internet",
          from: "Horizon",
          amount: -100,
          tags: ["utilities"]
        },
        {
          date: "April 3",
          name: "Groceries",
          from: "Merchant Jack's",
          amount: -76,
          tags: ["groceries"]
        },
        {
          date: "April 3",
          name: "Pet Food",
          from: "Pet Precious Inc",
          amount: -7,
          tags: ["pets"]
        },
      ]
)
// find all the burgers
db.burger.find()

// show just the meat of each burger
db.burger.find({}, {meat: 1, _id: 0})
//    OR
db.burger.find({}, {cheese: 0, "toppings": 0, _id: 0})

// show just the toppings of each burger
db.burger.find({}, {toppings: 1, _id: 0})
//     OR
db.burger.find({}, {cheese: 0, "meat": 0, _id: 0})

// show everything but the cheese
db.burger.find({}, {cheese: 0 })

// find all the burgers with beef
db.burger.find( {meat: "beef"})

// find all the burgers that are not beef
db.burger.find({meat:{$ne: "beef"}})

// find the first burger with cheese
db.burger.findOne({cheese: true})

// find one and update the first burger with cheese to have a property of 'double cheese'
db.burger.updateOne({ cheese: false }, {$set: {cheese: "double cheese"},})

// find the burger you updated to have double cheese
db.burger.find({cheese: "double cheese"})

// find and update all the beef burgers to be 'veggie'
db.burger.updateMany({meat: 'beef'}, {$set: {meat: 'veggie'}})


// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burger.deleteOne({meat: 'veggie'})

// drop the collection
//Expected Output
//true
db.burger.drop()

// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
db.dropDatabase()

//================================================================
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database


//
// Change the name of the key cheese to 'pumpkinSpice'
db.burger.update(
    { "cheese": {"$exists": true}},
    { "$rename": {'cheese': 'pumpkinSpice'}},
    { "multi": true}
)

// find all the burgers with ketchup (or another topping you used at least once)
db.burger.find({toppings: "ketchup"})

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles
db.burger.updateMany(
    {toppings:"pickles"}, 
    {$pull: {toppings: "pickles"}}
)

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact
db.burger.updateMany(
    {meat: "beef"},
    {$push: {toppings: "eggs"}}
)

//Add a price to each burger, start with $5.00 for each burger 
db.burger.update(
    {},
    {$set : {"Price":5}},
    {upsert:false, multi:true}
) 