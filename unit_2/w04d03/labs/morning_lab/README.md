# Lab - Express

## Frasier

### Make sure you shut down your previous app
1. Be sure to have `control c` your previous app if you were running one before starting this new activity.

### Basic Express App
1. Create a new directory inside your labs dir called "frasier".
1. `cd` into `frasier`.
1. Perform an npm init and specify `server.js` as your entry.
1. Install express and tell npm to save express as a dependency in package.json.
1. Create a `server.js` file.
1. Inside `server.js`, require express and save it to a variable named `express`.
1. Create a variable named app, and set it equal to `express()`.
1. Have app listen on port 3000.
    - Once it's listening, log "Hello, Seattle. I'm listening...".
1. Test it by going to http://localhost:3000.

### Routes

1. Create a GET route for `/frasier`/
    - It should send a response of "Once in prep school, the Existentialist Club once named me 'Most Likely to Be.'"
1. Test the `/frasier` route by going to http://localhost:3000/frasier.
1. Create a GET route for `/niles`.
    - It should send a response of "You know, sometimes I wonder if I'm not just in psychiatry for the money."
1. Test the /niles route by going to http://localhost:3000/niles.
1. Create a GET route for `/daphne`.
    - It should send a response of "Well, have fun.  I'm off to stick my head in the oven."
1. Test the `/daphne` route by going to http://localhost:3000/daphne.
1. Create a GET route for `/roz`.
    - It should send a response of "Let me make it easy for you. Freaks! Freaks on line 1. Freaks on line 2! Freaks! Everywhere!"
1. Test the `/roz` route by going to http://localhost:3000/roz.
1. Create a GET route for `/martin`.
    - It should send a response of "You may think it's tough being middle-aged, but think about me. I got a son who's middle-aged."
1. Test the `/martin` route by going to http://localhost:3000/martin.

Are URLs case sensitive? Let's test:
1. Create a GET route for `/Scrappy`.
    - It should send a response of "woof".
1. Test the `/Scrappy` route by going to...
    - http://localhost:3000/scrappy - what happened?
    - http://localhost:3000/Scrappy - what happened?


## Simpsons

Refer back to previous section and notes/demos for steps, if necessary.

1. `cd` back to your student labs dir.
1. Create a directory called "simpsons".
1. Get a basic express server running:
    - Install express.
    - No routes.
    - Just have the app listen.
1. Test to make sure it works in the browser.
1. Create a route for Homer.
1. Test the Homer route.
1. Create a route for Marge.
1. Test the Marge route.
1. Create a route for Bart.
1. Test the Bart route.
1. Create a route for Lisa.
1. Test the Lisa route.
1. Create a route for Maggie.
1. Test the Maggie route.
1. Create a route for Snowball II (spaces won't work, so just make it one word or add dashes in between each word).
1. Test the Snowball II route.
1. Create a route for Santa's Little Helper (apostrophes won't work, so just remove it in the route).
1. Test the Santa's Little Helper route.


## HTML site

The topic is yours. Try to do it all from memory:

1. Create a basic app with multiple routes.
1. When it comes time to do res.send, instead of just text, send html.
1. To get res.send to work with line breaks in the html, change single/double quotes to backticks.

    ```javascript
    res.send(`
        <html>
            <body>
                <h1>Oh ha!</h1>
            </body>
        </html>
    `);
    ```


## Hungry For More

Some of you will zip through this lab. If you finish quickly, work on any of the following:

1. Try the [super bonus lab](../SUPER_BONUS)!
2. Practice using Bootstrap [here](../../student_examples/bootstrap_practice_oldglory).
3. Learn about [JavaScript's Event Loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ&vl=en). This is great stuff but you'll likely need to watch it a few times to get it all down.
