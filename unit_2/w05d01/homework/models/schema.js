const mongoose =  require('mongoose');

// creates Schema
const budgetSchema = new mongoose.Schema({
    date:  { type: String, required: true },
    name:  { type: String, required: true },
    from:  { type: String, required: true },
    amount:  { type: Number, required: true },
    tags:  { type: String, required: true },
});

  //  creates a collection 
const newBudget = mongoose.model('Budget', budgetSchema);
module.exports = newBudget