const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors'); // Makes our API public

const Todos = require('./models/todos.js')

const app = express();

//tells app its json data 
app.use(express.json()); //use .json(), not .urlencoded()
// Makes our API public
app.use(cors());
// CREATE ROUTE
app.post('/todos', (req,res) => {
    Todos.create(req.body, (err, createdTodo)=>{
        res.json(createdTodo)
    })
})
// INDEX ROUTE
app.get('/todos', (req,res) => {
    Todos.find({}, (err, foundTodos) => {
        res.json(foundTodos);
    })
})
// DELETE ROUTE
app.delete('/todos/:id', (req, res)=>{
    Todos.findByIdAndRemove(req.params.id, (err, deletedTodo)=>{
        res.json(deletedTodo);
    });
});
// UPDATE ROUTE
app.put('/todos/:id', (req, res)=>{
    Todos.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTodo)=>{
        res.json(updatedTodo);
    });
});


app.listen(3000, () => {
    console.log('listening on port 3000...')
})
mongoose.connect('mongodb://localhost:27017/merncrud')
mongoose.connection.once('open', () => {
    console.log('connected to mongod on port 27017')
})