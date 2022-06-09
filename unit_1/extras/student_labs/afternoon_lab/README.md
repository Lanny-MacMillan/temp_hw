[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# What to Do?

![preview](https://i.imgur.com/usMkA4g.png)

A to do list is a classic app to practice programming languages with. So for tonight's homework, you'll be building a To-Do list app with two columns: one for things to do, and another for things that have been done. You shold use jQuery to give your app functionality.

#### Learning Objectives

- Manipulating the DOM with jQuery and user input
- Rendering given data 

#### Prerequisites

- jQuery
- JavaScript
- HTML DOM

---

## Getting Started

1. In tonight's homework folder, we provide you with a `starter-code` folder that holds a few starter files

    * <b>Provided in the starter code when opening the index.html</b>:
      - the user should see two columns and an input field.
      - the user should be able to type a to-do item into an input box.
      - the user should be able to click an add button next to this input.
      
    * <b>Other things provided in the starter code</b>:
      - styling in the `main.css` file 
      - an array called `givenToDos` in the `app.js` file
      - comments inside the `index.html` code to help you keep your classes straight (please give it a look!)
   
1. As a challenge, feel free to start from scratch! If you do start from scratch, the only required thing you need to use from the starter code is the `givenToDos` array, so please keep that! 

1. Regardless of what you choose, please complete this assignment using jQuery 

    * Remember to put any code that affects the DOM inside a **window onload** 
    
    ```javascript
    $(() => {

	    // DOM stuff

    })
    ```

1. As you code, keep in mind the general flow of what is happening. The user makes an action, you run some code in order to process this action, the results of the action are rendered to the page, and then you wait until another action takes place.

## Part One: Rendering Given Data    
   
1. Before we actually handle any user input, let's take the data that's been given to us in the `givenToDos` array and display it under the "Things to Do" column

1. Remember that we want our users to be able to move things from the "Things to Do" column to the "Things That are Done" once they're done with a certain to-do item -- so, don't forget to add a "COMPLETED" button on each one! 
    * Don't worry about the functionality of the button yet, though, we'll add that later! 
  
## Part Two: Handling User Input

1. Great, now that the given data is all displayed, let's make it so that our users can add their own to-do's to the list as well. 

1. When the user clicks the `add` button, the input box value should be added to the "Things to Do" column 
    * Again, don't forget each to-do item needs a "COMPLETED" button!

1. When the user clicks the `add` button, the input should display nicely rather than just text that keeps joining on the same line.
    * _Hint:_ We have a `givenToDos` array that we were able to display nicely, perhaps consider adding the new information into the array and display all of the items in that array.

1. At this point, the user should be able to see all of the todos that they have created as well as the given todos.

## Part Three: Moving the Todos

1. Now that we've displayed our todos nicely, let's make it so the user can actually complete todos and move them to the "Things That are Done" column

1. When displaying a todo item, we made sure each one also got a "COMPLETED" button -- now let's make sure they have an event listener and handler
    * _Note:_ Yes! You _can_ include an event listener inside another event handler
    * The event handler that you add onto the "COMPLETED" button should append the todo item to the completed column AND set the background color of the target to-do-item to `#ED6495`
      * _Hints:_ `$(event.currentTarget)`, `.parent()`
      
## Part Four: Delete

1. Lastly, we want our user to be able to delete a todo item from the app entirely when it's in the completed list 

1. So, when the to-do-item moves to the completed list, the text of the 'COMPLETED' button should change to 'REMOVE'

1. Then, When the 'REMOVE' button is clicked, the target to-do-item should be removed from the DOM

---

## Hungry for More? 

#### Local Storage 

1. The browser has something called [local storage](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage). This allows us to cache data in the browser. Using local storage, make this application remember the to-dos that have already been entered in, even if the page is closed.

#### Draggable/Droppable

1. Look into jQuery's supplemental libraries like jQuery UI's [Draggable and/or Droppable](https://jqueryui.com/droppable/)

#### Styling 

1. Style the app from scratch instead of using the starter code 
1. Make the design responsive!

---

## Deliverables

1. A todo app built with jQuery and HTML/CSS inside the `starter_code` folder

## Technical Requirements

Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong

## Submission Guidelines

- Submit your homework via github issues before the next class starts at 10AM and please don't forget to fill out the form!

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
