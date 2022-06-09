[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Just The Beginning

Let's get some practice with everything you've learned today! Using terminal and reading errors, and using loops and getting used to basic JavaScript syntax are all key to web development and you'll be using them throughout the entire course -- so let's get comfortable with them by doing some reps!

#### Learning Objectives

- Terminal
- Errors
- Variables with let and const
- DRY
- Boolean expressions
- While loops
- For loops

#### Prerequisites

- Terminal
- JavaScript

---

## Getting Started - Terminal

1. Open Terminal

1. Navigate to your Documents directory (usually `/User/username/Documents`).

1. Make a directory inside Documents called `w01d01_labs`.

1. Go into the `w01d01_lab` directory.

1. Inside `w01d01_lab`, make a file called `first_lab.js`.

1. Open the `w01d01_lab` directory in your text editor.

1. Write the answers to the rest of this lab in the `first_lab.js` file.

1. Run your code by using `node first_lab.js`. Make sure you are in the same directory as the file in terminal. Otherwise, node won't run.

1. Press the up arrow to retrieve the `node first_lab.js` command. That way, you don't have to type it each time to run the file.

## Errors

**Fix the code by following the errors in Terminal**

Cut and paste the following code into your text editor (the "Cheers" song lyrics). The code is broken -- there are **three errors**. You might already see the errors, but --

Run the code and read the error message in the terminal. Using information from the error message (line numbers, etc.), debug the code and make it work.

At the same time, write a comment below the code that specifies what _type_ of error it was. Example, if you get this:

![](https://i.imgur.com/KRHtmPM.png)

Write

```
// SyntaxError: missing ) after argument list
```

Cut and paste:

```javascript
console.log("Making your way in the world today takes everything you've got.");
console.log("Taking a break from all your worries, sure would help a lot.");
console.log("Wouldn't you like to get away?");
console.log("Sometimes you want to go");
console.log("Where everybody knows your name,");
console.lo("and they're always glad you came.");
console.log("You wanna be where you can see,";
console.log("our troubles are all the same");
console.log("You wanna be where" "everybody knows");
console.log("Your name.");
```

Make it so you do not get any more errors!

## Boolean Expressions
*... and arithmetic*

By just looking at the following expressions, determine in your mind whether or not each will evaluate to **true** or **false**

1. `999 > 999`
2. `999 == 999`
3. `999 != 999`
4. `-5 >= -4`
5. `100 <= -100`
6. `20 + 5 < 5`
7. `81 / 9 == 9`
8. `9 != 8 + 1`

## Assignment Operator vs. Equality Operator

Write: What is the difference between:

the **assignment operator** `=`

and the **equality operator** `==`

## While Loops: Reps and Reps

### 1

Write a *while* loop that will log in the console

```
'Ginger chocolate honey patties'
```

1000 times. You can test it out with a smaller number first, such as 10, and when that works, use 1000.

Make sure you do not run an infinite loop! If you do, close your Terminal. Oops!


### 2

Write another *while* loop that counts from 0 to 1000 and will log in the console the current loop number.

> => 0
>
> => 1
>
> => 2
>
> => 3

etc.

### 3

Write another *while* loop that prints a message to the console _and_ concatenates the current loop number. Make it count from 0 to 1000.

> => "Current loop number is: 0"
>
> => "Current loop number is: 1"
>
> => "Current loop number is: 2"
>
> => "Current loop number is: 3"


**NOTE:** You should not need to see the 'correct answers' in this markdown for these loops. Either they work, or they don't. **Test** them thoroughly to make sure they are giving you the desired output.

## For Loops

### 1
* Write a **for loop** that counts from 0 to 100 and console.logs each number.

### 2
* Write another **for loop** that counts from 7 to 635 (no more, no less!), and console.logs each number.

### 3
* Declare a variable `let start = 0`
* Declare a variable `const limit = 100`
* Write a for loop that counts from the value of `start` to the value of `limit`, using those variables in the **control panel** of the loop.

Test the loop thoroughly.

### 4
Code check! Just like writing sentences, code typically has a certain style/syntax. There are some conventions across all languages, and some that are specific to the language.

#### Best Practices

##### Indentation
Reading material for [JavaScript code conventions](http://javascript.crockford.com/code.html).

As we have mentioned before, indentation denotes hierarchy in your code. When writing code in JavaScript, you should indent code that is being run inside other code. Here's an example:

**Correct:**

```js
if (5 % 2 == 0) {
    console.log('Number is even');
} else {
    console.log('Number is odd');
}
```
Note that the console.log that will be run inside the *if* portion is tabbed over once to denote that it should be run if this portion of the code is executed.

**Incorrect:**

```js
if (5 % 2 == 0) {
console.log('Number is even');
} else {
console.log('Number is odd');
}
```

Note that this code will still run, but it is hard to read! This will make your coworkers (and instructors) :confused: . You want to make it as easy as possible for others to know what you are doing, so please show the relationships with indentation! Also note, this is an easy case, imagine if you had 30 lines of code, figuring out where you are missing a curly brace or need to move things around gets nearly impossible with improper indentation.

### Semantic naming
when naming your variable, be explicit! Skip naming your variables `x` or `y` when you can name them `timeTracker` or `uncleRoysChickenCount`

Remember, JavaScript naming convention is *camel case*. This means, the first word in the name is lowercase and any additional words in the name are connected (no spaces between words) and the first letter is capitalized `camelCase` or `thisIsCamelCase`.

In contrast, a language like Python uses `snake case` which uses underscores like so `snake_case`. HTML uses `sausage-case` or it is also known as `kebab-case`.

### Case Sensitivity
Be aware that names are case sensitive. That means: `const redcow` is **not** the same as `const redCow`.

Go back to the code you've written, proofread it and update it to meet best practices

## 5

Play a game! There are a lot of characters we use in coding that don't show up in our usual typing.

This game will give you the name of the character, press that character, if you get it right you'll score a point. There is also a dictionary of the characters

[Keyboard characters](https://keyboard-characters.netlify.com/)


## Conclusion

Congrats, you finished the lab! There is no need to submit this lab. You will be receiving homework for tonight soon.

If you want more to do however, read below!

## Hungry for More: Train your Google-Fu

### Strings to Numbers

Given two variables that are equal to numbers, find the sum of the two variables. For example, try to run the following code:

```js
let a = '1';
let b = '2';

let sum = a + b
console.log(sum)
```

Hmm, it's not quite what we want. Try to figure out how to make it so that the sum gives you the numerical sum of 3.

### Loops

#### `while` vs. `do while`

1. Write a while loop that counts up by 10 (go from 1 - 1000)
2. Now write it as a `do while loop`
3. In a comment, write the differences between the two and when you'd want to use a while loop versus a do while loop.

#### Fixing a while

The `while loop` below doesn't quite work... try to fix it by rewriting it (using the same conditions as written) with a `do while loop` instead.

```js
let x = 0;

while (1 < x < 11) {
    console.log(x);
    x++;
}
```

### Error Prone

The three code blocks below are riddled with errors. Please help us fix them!

1. For loops
```js
fr (i == 0; i < '10' i+); { console.log['i'];; }
```

2. Object syntax
```js
{ name = 'Moss';  job : IT, 'glasses' : TRUE ];
```

3. Syntax
```js
console.log(type of 10)
```

### Drawing with Loops

1. Make a pyramid of A's using a loop so that the output in your terminal looks like the below:

```
A
AA
AAA
```

2. Now do it backwards!

```
AAA
AA
A
```

3. **Extra bonus:** Make it so that the A's capitilization alternates like so:

- Forwards

```
A
aA
aAa
```

- Backwards

```
AaA
aA
a
```

### Git and GitHub

Tomorrow we will be getting into git and Github. Use your **research skills** (Google-fu) to find out more about:

* The difference between git and github
* What is a Github repo
* forking a repo on Github
* cloning a repo from Github
* What does `git push origin master` do?
* What would `git pull upstream master` do?

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
