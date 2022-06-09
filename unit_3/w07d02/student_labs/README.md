[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Rick and Morty API

![](https://i.imgur.com/BmzaXeL.jpeg)


### Learning Objectives

- Make 3rd-party api calls in React
- *Map* over an array of data objects using

### Prerequisites

- React Hooks
- 3rd-party APIs

---

## Getting Started

We've had some practice building components in React, now let's practice using these components to actually render some api data! In this lab we are going to create card components in react, fetch an array of data objects from the [Rick and Morty API](https://rickandmortyapi.com/documentation/#rest), and then learn how to map that data over the card components.

Documentation: https://rickandmortyapi.com/documentation/#rest

### MVP (Minimum Viable Product)

Your app should:

- Feth data from 2 different routes of the API 
- Render multiple cards in the browser
- Map data received from the GET request onto those cards
- A button to display character cards 
- A button to display episodes/location cards
- have some styling 

### Setting up React

1. Navigate to the given `nasa-apod` folder under unit3/w07d04/
2. `npx create-react-app ram-lab`
3. `cd ram-lab`
4. `atom .`
5. `npm start`

### Accessing the API

- Base URL: <https://rickandmortyapi.com/api>
- You do not need an API key here


### Working with the data

What data you display is up to you, but some ideas for the cards are:

Character route:
-Character name
-image
-species
-status (spoiler alert?)

Episodes:
-Air Date
-Episode name

You do *not* need to have CRUD

.map() should be working directly with the array of data objects

---

## Deliverables

- A React app that meets all the MVP requirements outlined at the beginning of this markdown.

## Technical Requirements

- Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong


## Submission Guidelines

- Submit your homework via github issues before the next class starts at 10AM and please don't forget to fill out the form!

---

*Copyright 2019, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
