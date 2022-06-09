const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())

const todosController = require('./controllers/todos.js');
app.use('/todos', todosController)

app.listen(3000, () => {
    console.log('listening...');
})
mongoose.connect('mongodb://localhost:27017/merncrud')
mongoose.connection.once('open', () => {
    console.log('connected to mongod');
})
