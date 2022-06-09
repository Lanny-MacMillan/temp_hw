const express = require('express');
const router = express.Router();
const Todos = require('../models/todos.js')

router.get('/', (req, res) => {
    Todos.find({}, (err, foundTodos) => {
        res.json(foundTodos)
    })
})

router.delete('/:id', (req, res) => {
    Todos.findByIdAndRemove(req.params.id, (err, deletedTodo) => {
        res.json(deletedTodo);
    })
})

router.put('/:id', (req, res) => {
    Todos.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTodo) => {
        res.json(updatedTodo)
    })
})

router.post('/', (req, res) => {
    Todos.create(req.body, (err, createdTodo) => {
        res.json(createdTodo);
    })
})

module.exports = router;
