const { response } = require('express');
const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('welcome to the Simpsons home page');
})
app.get('/Homer', (request, response) => {
    response.send('DOH!')
})
app.get('/Marge', (request, response) => {
    response.send('Oh Homieee')
})
app.get('/Bart', (request, response) => {
    response.send('Dont have a cow man!')
})
app.get('/Lisa', (request, response) => {
    response.send('Im Lisa')
})
app.get('/Maggie', (request, response) => {
    response.send('suck suck')
})
app.get('/SnowballII', (request, response) => {
    response.send('Im snowball II')
})
app.get('/Santaslittlehelper', (request, response) => {
    response.send('woof woof')
})
app.get('/main', (request, response) => {
    response.send(`<html>
    <body>
    <h1>The Simpsons</h1>
    <ul>
        <li>Homer</li>
        <li>Marge</li>
        <li>Bart</li>
        <li>Lisa</li>
        <li>Maggie</li>
        <li>Snowball II</li>
        <li>Santa's Little Helper</li>
    </ul>
    </body>
</html>`)
})



//App listen to port 3000 
app.listen(3000, () => {
    console.log("Hello, Simpsons. I'm listening...")
})