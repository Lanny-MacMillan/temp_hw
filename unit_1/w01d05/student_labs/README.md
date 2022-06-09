# Choose Your Own Adventure

Create a "Choose Your Own Adventure" style game in `app.js`.  This is a story where the user is frequently asked what the protagonist should do.  The story progresses based on what the user says should happen.

**GETTING STARTED**

`cd` into this directory and run `npm i` in it.  This will install the `prompt-sync` package which will allow you to run the `prompt()` function.

**TIPS:**

- Use the provided `prompt()` function to retrieve input from the user.
- Try to use as many functions as you can
	- To game is structured in sections, each containing two parts: what just happend and a prompt for what to do next.  Perhaps each section is a function?
	- You could structure it so the functions take parameters relating to what the user has chosen to do
- Use variables to keep track of things that have happened in the story (e.g. how much money the user has, has the user accomplished certain tasks)
- Try to turn the app into as much of a game as possible, as opposed to just a simple story
