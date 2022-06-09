[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)
​
# Objects and Goblins
​
## Setup
1. Create an `objects.js` file in tonight's homework directory.
1. Open `objects.js` in your text editor.
1. Write a `console.log()` and run the file with node in your terminal to make sure you're set up properly.
​
## Part 1: Object Practice
​
1. Create an object based on your desk setup. You can call this "setup". Be as discriptive as possible. Include how many screens you have, if you have a mouse, type of chair, laptop size.

1. Let's say you have upgraded your setup and have added another screen. Let's update that screen property on the object to have one more than before.
​
1. Let's create an array of any random items on your desk you don't consider part of your setup now! Without hard coding it into the original object, add said array to the object as a new property. Let's call this array "clutter" (If you don't have any random things or clutter, make some stuff up!).
​
1. Now let's say we want to list all of the things in that array out in a list so we can see just how messy/cluttered it is at the moment. Iterate over the array we added in the previous step and list out all items!
​
1. Now that we have an array in the object, let's also add an object into our object called "computer" (remember do not touch the original object directly). Give it keys of "screenSize" and "OS" (operating system).
​
1. Let's now use dot notation to pull out both of those keys in the "computer" object and print them to the console.
​
1. Again without touching the original object in your code, let's add an array to that "coomputer" object we added in the previous step. Let's call this "files" and have it be a list of random file names. (These don't have to be real. Make up some file names to put in this array as strings.)
​
1. Now let's do a little repeat of step 4, but now we have to dive a little deeper into the original object and loop over the array we added in the last step that is nested in the object "computer" that is nested inside of the original object.
​
1. Given the array of objects below, loop through the array and print out both the title and author for each book.
```js
const books = [{title: 'Pragmatic Programmer', author: 'David Thomas + Andrew Hunt'}, {title: 'Clean Code', author: 'Robert Martin'}, {title: 'You Don\'t Know JS', author: 'Kyle Simpson'}]
```
​
## Part 2: Hero vs Goblin
​
1. Create an object for your hero and call this "hero". The hero object should have a name, hitPoints (set this to 50), attack (set this to 10).
​
1. Create an object for an enemy goblin and call this "goblin". The goblin object should have a name, hitPoints(set this to 20), and attack (set this to 5).
​
1. Let's have the goblin get a sneak attack in and hit the hero first. Subtract the goblin's attack from the hero's hitPoints and console log the hero's hit points after.
​
1. Now it's the hero's turn! Have the hero attack the goblin in the same way the goblin attacked the hero and log the goblin's hp after.
​
1. Now both are locked into a battle! Let's write some logic here that will allow the goblin and hero to fight until one of their hitPoints values reaches 0 or below. 
​
1. Let's do some refactoring! Let's have these two objects interact with each other using methods. Give both the hero and goblin a method called attackEnemy which will accept a parameter called "enemy" (this will be the other object when you pass an argument to it). The method should subtract the attack of the attacker from the hitPoints of the enemy.
​
1. Now instead of having the two attack each other with just property values, let's have them fight using the methods we just made!
​
## Hungry For More!
1. The hero has defeated the goblin! But wait! They see in the distance 10 goblins running straight for him looking for revenge! Create a way for the hero to continuously battle all 10 goblins (1 at a time they're not so smart and don't coordinate at all).
---

*Copyright 2020, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
