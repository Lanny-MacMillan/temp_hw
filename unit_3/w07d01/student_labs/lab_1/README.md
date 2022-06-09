![](/ga_cog.png)

# jService

For this assignment, you're going to be making an online version of Jeopardy-lite using an API called jService.

### jService API

> http://jservice.io/

jService is a free API that has Jeopardy trivia questions and answers available to the public. For your purposes, you will just be hitting one of their routes `/api/random`, which will return a random question and answer every time.

Try going to that route in your browser to see what data is available and how it's formatted: http://jservice.io/api/random

---

## The Application

Now that you've looked into the API, make your Jeopardy Trivia App using it!

![](https://imgur.com/CAsc8o3.gif)

### User Stories

1. As a user, I should be able to click on a button that says "Get Trivia" to populate the page with new random trivia data
    - On click, have this button make a GET request to `http://jservice.io/api/random` and use that data to populate the page
    - Display the following data on click: **question, category, points**

1. As a user, when I click on "Get Trivia", the answer should **not** be shown on the page yet
    - Consider creating a div that will hold the answer, but is not displayed on the page initially

1. As a user, I should be able to click on a button that says "Click to Reveal Answer" to reveal the answer
    - Clicking this button should now display the div that holds the answer

1. As a user, I should be able to see my score on the page
    - By default, the score should be 0

1. As a user, I should be able to click on a button that says "Decrease" that will subtract 1 point from my score

1. As a user, I should be able to click on a button that says "Increase" that will add 1 point to my score
    - **Stretch**: Instead of just subtracting or adding 1, try using the actual point value of the question instead. You may have to look into [lifting state up, from the React docs](https://reactjs.org/docs/lifting-state-up.html)

1. Finally, add some style and color to your app!

---

## Deliverables

- Run `npx create-react-app jservice` in today's `student_labs/afternoon` folder. You should complete user stories 1 - 3 at the very least.

---

## Hungry for More User Stories

1. As a user, I should be able to click on a button that says "Reset" that will reset my score back to 0

1. As a user, I should be able to click on a different button that says "Get 10 Trivia" that will then display 10 trivia questions all at once
    - To get 10 items, use the following route: `http://jservice.io/api/random?count=10`

1. As a user, when I have 10 trivia showing, each one should have a "Click to Reveal Answer" button that will only display one trivia's answer at a time
    - You may find it easy to reveal ALL the answers on click, but revealing just the question of one trivia is challenging!

1. Use the documentation to look at the categories that are available with jService. Choose a category. Make a request to get the trivia information for that category. Display them on your page in the same way as before (a question with an answer button and all the other functionality)
