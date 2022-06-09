## CRA CRUD Practice
For this lab you will be building out a full CRUD app using everything we've learned today.

### Setup

- There is a `django_marvel` directory inside of the [morning_lab](./) directory. Set up Django per usual to get the API running and visible in the browser so we can fetch on the frontend.
- In today's [morning_lab](./) folder OUTSIDE of the  `django_marvel` folder, run `npx create-react-app marvel_frontend`.
- `cd` into your new project folder.
- Strip down your `App.js` so you have a component that renders `Hello` in an `h1` tag.

### MVP Deliverables
- Your app must have a minimum of three components:
  1. App.js
  1. AddForm.js
  1. EditForm.js
- Your App.js is your top level component that contains state and your CRUD functions.
- Your AddForm.js should be a component that allows you to create new characters (your post route).
- Your EditForm.js should be a component that allows you to edit each respective character in your database.

### READ
- A user should be able to see a list of Marvel characters in the browser on page load.

### CREATE
- A user should be able to see a form that has all the required fields for a character.
- A user should be able to type into the fields.
- A user should be able to hit a submit button when all fields are populated and see that character appear on their page without a refresh.

### DELETE
- A user should be able to see a delete button on each character.
- A user should be able to click on said button and see the character get removed from the page without a refresh.

### UPDATE
- A user should be able to see an edit form (probably in a summary/details tag).
- A user should be able to type into the fields for updating a character.
- A user should be able to hit a submit button and see the character update without a refresh.

### Hungry For More?
- Use DOM manipulation or ternary operators to allow a user to click on a character and display a `ShowCharacter.js` component or click on an edit button and display your `EditForm.js`. Do this in a way that makes it look like the user is accessing a different page but doesn't actually trigger a refresh or a redirect.
- Try consolidating your add and edit forms to use the same component. Render this component wherever it makes sense to have the form (i.e. once at the top of the page as an add form, and once under each character as edit forms).
- Portfolio quality styling.
