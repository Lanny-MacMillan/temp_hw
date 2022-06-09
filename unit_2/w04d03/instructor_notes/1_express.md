# Intro to Express

## Video Links

1. [Intro to Express1](https://www.youtube.com/watch?v=vFrOL3KMgfk&list=PLdnONIhPScSQqXfMndCJRYWQl-0uApORf&index=8)
1. [Intro to Express2](https://www.youtube.com/watch?v=JiJ8tutYwhA&list=PLdnONIhPScSQqXfMndCJRYWQl-0uApORf&index=9)

## Set up Express

Initialize a directory for our project:

```
npm init
```

Create a file for our application:

```
touch server.js
```

Install `express`.  This is a library, like jQuery, that makes it easier to write web server applications.

```
npm install express
```

Just because we installed `express`, it doesn't mean our `server.js` file automatically now has that functionality.
JS files don't know about each other.  In order to get the contents of one file into another, you have to require them.
In server.js require `express`, create an `app`, and have it start listening for connections:

```javascript
const express = require('express');
const app = express();

app.listen(3000, ()=> {
	console.log('listening...');
});
```

Install nodemon.  This will allow us to run a js file, and when the file changes, node will restart:

```
sudo npm install -g nodemon
```

Now have nodemon run server.js:

```
nodemon server.js
```

Now go to localhost:3000 in the browser.  You should see `Cannot GET /`

## Create Routes

Let's create a route for that path in server.js

```javascript
app.get('/', (requet, response)=>{
	response.send('welcome to the home page');
});
```

Let's create a route for our about page:

```javascript
app.get('/skills', (request, response)=>{
	response.send('html, css, js');
})
```

Move the hard coded data out into an array:

```javascript
const skills = ['html', 'css', 'js'];
app.get('/skills', (request, response)=>{
	response.send(`${skills[0]}, ${skills[1]}, ${skills[2]}`);
})
```

## Use Request Params

Now we can use that same array to have a detail page for a particular skill:

```javascript
app.get('/skills/:indexOfSkillsArray', (request, response)=>{
	response.send(`skill description: ${skills[request.params.indexOfSkillsArray]}`);
})
```

## Explain MVC

MVC (models, views, controllers) allows us to have separate files for our

- data (models)
- html (views)
- routes (controllers)

Controllers (our routes) act as the middle man, passing data from a model file to a view file.
This is especially helpful on large projects with a lot of code.

## Create a Model File

Open a new terminal tab (command+t), keeping the old one with `nodemon` running open.

Create a directory called `models`

```
mkdir models
```

In there create a file called `skills.js`

```
touch models/skills.js
```

- Cut/Paste your `skills` array in your `server.js` file into your `models/skills.js` file
- Require `models/skills.js` in our `server.js` file:

```javascript
const skills = require('./models/skills.js');
```

- When requiring files we wrote, we need reference the file relative to the requiring file.  Only packages we installed with `npm` (e.g. `express) can be referenced by name
- Our app breaks now because we need to tell node what `require('./models/skills.js')` evaluates to.  Once it knows that, it will assign the result of the `require` function to `skills`
- In `models/skills.js` state what it exports:

```javascript
const skillsArray = ['html', 'css', 'js'];

module.exports = skillsArray;
```

## Create View Files

Sending out text is great, but this could become difficult to read if we had to send out HTML.  Let's create separate files for our HTML and link to them in our routes

```
mkdir views
```

Create a view that we'll link to in our `/skills` route:

```
touch views/skills.ejs
```

Add some html to it:

```html
<html>
	<body>
		<h1>My Skills</h1>
	</body>
</html>
```

EJS is a templating language that lets us programmatically generate HTML.  Let's tell the `/skills` route to render the `skills.ejs` file:

```javascript
app.get('/skills', (request, response)=>{
	response.render('skills.ejs')
});
```

You'll notice an error if you reload the browser.  `ejs` is a separate package we need to install in addition to express:

```
npm install ejs
```

## Use Javascript to Generate HTML

Let's generate some list items programmatically in `views/skills.ejs`:

```html
<ul>
	<% for(let i = 0; i < 5; i++){ %>
		<li>item number: <%=i%></li>
	<% } %>
</ul>
```

- Notice the difference: `<% %>` runs javascript, `<%= %>` runs javascript and inserts the result into the HTML
- EJS files don't know about anything about your server.js code, so if we want to get `skills` array into the EJS file, we'll have to do that manually:

```javascript
app.get('/skills', (request, response)=>{
	response.render(
		'skills.ejs',
		{
			mySkills:skills
		}
	)
});
```

Now lets iterate over the skills array:

```html
<html>
	<body>
		<h1>My Skills</h1>
		<ul>
			<% for(let i = 0; i < mySkills.length; i++){ %>
				<li><%=mySkills[i]%></li>
			<% } %>
		</ul>
	</body>
</html>
```

We can of course use conditionals:

```html
<% if(mySkills.length > 1){ %>
	<h1>My Skills</h1>
<% } else { %>
	<h1>My Skill</h1>
<% } %>
```

Now shorten our list of skills to one item in `models/skills.js`:

```javascript
const skills = ['html'];
```

You can edit attributes of HTML tags:

```html
<li>
    <a href="/skills/<%=i%>"/>
	<%=mySkills[i]%>
    </a>
</li>
```

## Troubleshooting Node

```
ps -A | grep node
kill 1270
```

change 1270 to process id found in first command.

alternatively use

```
lsof -i :3000
```

to find the process id
