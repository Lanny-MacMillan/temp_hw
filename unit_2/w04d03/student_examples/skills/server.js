const express = require('express')
const skills = require('./models/skills.js')
const app = express();

app.use(express.static('public'));

// 'route after port'
app.get('/', (request, response) => {
    response.send('welcome to the home page');
})

app.get('/skills', (request, response) => {
    // response.send(`${skills[0]}, ${skills[1]}, ${skills[2]}`);
    // response.render('skills.ejs')
    response.render(
        'skills.ejs', 
        {
        mySkills:skills
        }
    )
})

//          :sets up a variable we can get anywhere in the callback
app.get('/skills/:indexOfSkillsArray', (request, response) => {
	response.send(skills[request.params.indexOfSkillsArray])
})

//App listen to port 3000
app.listen(3000, () => {
    console.log('listening...')
})