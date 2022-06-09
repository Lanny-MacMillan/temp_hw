const express = require('express')
const app = express()
const PORT = 3000;

app.get('/calc/:num1/:num2', (request, response) => {
    var num1 = request.params.num1
    var num2 = request.params.num2
    const Sum = parseInt(num1) + parseInt(num2)
    response.send('the sum is ' + Sum)
})


app.get('/calcquery/:num1/:num2', (request, response) => {
    const num1 = request.params.num1
    const num2 = request.params.num2
    if (request.query.operation == 'add') {
    const sum = parseInt(num1) + parseInt(num2)
    response.send(`The sum is ${sum}`)

    } else if (request.query.operation == 'minus') {
    const sum = parseInt(num1) - parseInt(num2)
    response.send(`The total is ${sum}`)

    } else if (request.query.operation == 'multiply') {
    const sum = parseInt(num1) * parseInt(num2)
    response.send(`The total is ${sum}`)

    } else if (request.query.operation == 'divide') {
    const sum = parseInt(num1) / parseInt(num2)
    response.send(`The total is ${sum}`)

    } else {
    response.send(`Invalid Input`)
    }
  // console.log(request.query.operation);
})

//example URL link
//http://localhost:3000/calcquery/12/12?operation=divide



app.listen(PORT, () => {
    console.log(`app is running on port: ', ${PORT}`)
})