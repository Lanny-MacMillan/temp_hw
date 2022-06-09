
Title: Express Calculator<br>
Type: Lab<br>
Duration: 1+ hrs<br>
Creator: Thom Page<br>
Topics: Routing and req.params. Extra: req.query<br>
<hr>

# CALCULATOR

Make a calculator that takes two params from the URI and sends the sum to the browser!

&#x1F535; **Setup**

In the `student_labs` directory for today:

1. Make a directory `express_calculator`. `cd` into the directory.
1. `touch server.js` and open the project.
1. `npm init`
1. Enter `server.js` as the entry point (if it hasn't already defaulted to it)
1. `npm i express`

Set up server code:

```javascript
const express = require('express')
const app = express()

const PORT = 3000;

app.listen(PORT, () => {
    console.log('app is running on port: ', port)
})
```

<hr>


### Instructions

Make a route in `server.js` that responds to the URI `calc`. Give the route two params, `:num1` and `:num2`.

Make it so that if the user enters `http://localhost:3000/calc/4/4` in the browser, the server sends back a response of `8`.


### Notes

The params come in as strings, so, in order add them together as numbers, you must turn them into numbers using **parseInt()** or **Number()**.

The sum will be a number. If you try to send a number to the browser it will be interpreted as an error code.

The number must be coerced back into a string when you send it back. The coercion could be as simple as:

```javascript
res.send("the sum is " + sum);
```

<br>
<hr>

# `req.query`

Let's expand our calculator so that we can get it to do more than just addition.

We _could_ make a route for each arithmetic expression (addition, multiplication, etc.), or code in another param, but there is another way using `req.query`. Let's explore:

Example server route:

```javascript
app.get('/someroute', (req, res) => {
    console.log('req.query: ', req.query);
    res.send('someroute accessed')
})
```

Here we will console.log the `query` object instead of the `params` object.

What is the query object?

Go to this URL in your browser: `http://localhost:3000/someroute?operation=add`

Note that we begin our query with a `?` and then add a key-value pair using an equals sign.

Check in Terminal for the req.query console.log.

![](https://i.imgur.com/2fUOyHZ.png)

It gives us back the key-value pair from our URL.

## DIRECTIONS

Make a new route for the URI `calcquery`, with the same `:num1` and `:num2` params.

Copy and paste your calculator code into the route.

```javascript
app.get('/calcquery/:num1/:num2', (req, res) => {

    // calculator code

});
```

Add an `if` statement that checks for a key within `req.query` called `operation`. If the value is "add", sum the values and res.send the result.

If the value is "multiply", perform multiplication and res.send the result.

Do the same for "subtraction", "division", and "exponents".

Add in an `else` to to send a message: "no operation"

* NOTE: We are only allowed have multiple res operations (i.e. res.send) within a single route _if_ they send independently. For example, we can have multiple res.sends if they are inside **if statements** and have no risk of running at the same time.

## Bonus

- Figure out how a user/client could change the query parameters without typing in the URL bar. Hint (you'll need to do a bit of research!)

- Finish the [morning lab](../morning_lab)
- Work on the [Super Bonus](../SUPER_BONUS)
