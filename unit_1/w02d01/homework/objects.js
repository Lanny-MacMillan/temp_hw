// //============================Object Practice============================
// // 1) Create an object based on your desk setup. You can call this "setup". Be as discriptive as possible. Include how many screens you have, if you have a mouse, type of chair, laptop size.

// const setup = {
//     numScreens: 3,
//     mouse: true,
//     typeOfChair: 'swivel',
// }
// // 2) Let's say you have upgraded your setup and have added another screen. Let's update that screen property on the object to have one more than before.​

// setup.numScreens = 4
// console.log(setup)

// // 3)Let's create an array of any random items on your desk you don't consider part of your setup now! Without hard coding it into the original object, add said array to the object as a new property. Let's call this array "clutter" (If you don't have any random things or clutter, make some stuff up!).​

// setup.clutter = ['notebook', 'pens', 'ipad', 'papers', 'erasers', 'phone charger']
// console.log(setup)

// // 4) Now let's say we want to list all of the things in that array out in a list so we can see just how messy/cluttered it is at the moment. Iterate over the array we added in the previous step and list out all items!​

// for(i = 0; i < setup.clutter.length; i++) {
//     console.log(setup.clutter[i])
// }

// // 5) Now that we have an array in the object, let's also add an object into our object called "computer" (remember do not touch the original object directly). Give it keys of "screenSize" and "OS" (operating system).

// setup.computer = {
//     screenSize: 39,
//     os: 'macOS Big Sur',
// }
// console.log(setup)

// // 6) Let's now use dot notation to pull out both of those keys in the "computer" object and print them to the console.​

// console.log(setup.computer.screenSize, setup.computer.os)

// // 7) Again without touching the original object in your code, let's add an array to that "coomputer" object we added in the previous step. Let's call this "files" and have it be a list of random file names. (These don't have to be real. Make up some file names to put in this array as strings.)​

//  setup.computer.files = ['file.txt', 'homework.js', 'objects.js', 'app.js']
// console.log(setup.computer)

// // 8) Now let's do a little repeat of step 4, but now we have to dive a little deeper into the original object and loop over the array we added in the last step that is nested in the object "computer" that is nested inside of the original object.​
// for(let i = 0; i < setup.computer.files.length; i++) {
//     console.log(setup.computer.files[i])
// }

// // 9) Given the array of objects below, loop through the array and print out both the title and author for each book.

// const books = [
//     {title: 'Pragmatic Programmer', author: 'David Thomas + Andrew Hunt'}, 
//     {title: 'Clean Code', author: 'Robert Martin'}, 
//     {title: 'You Don\'t Know JS', author: 'Kyle Simpson'}
// ]
// for(let i = 0; i < books.length; i++) {
//     console.log(books[i].title)
//     console.log(books[i].author)
// }





//============================== Hero vs Goblin =====================================

const hero = {
    name: 'Isaac',
    hitPoints: 50,
    maxHitPoints: 50,
    attackPower: 10,
}

const goblin = {
    name: 'Gobby',
    hitPoints: 20,
    maxHitPoints: 20,
    attackPower: 5,
}

const sneakAttack = () => {
    hero.hitPoints -= goblin.attackPower
    console.log(hero.name, hero.hitPoints, "hit points")
    console.log(goblin.name, goblin.hitPoints, "hit points")
}

const attack = () => {
    goblin.hitPoints -= hero.attackPower 
    console.log(hero.name, hero.hitPoints, "hit points")
    console.log(goblin.name, goblin.hitPoints, "hit points")
}

const attackEnemy = () => {
    console.log('Goblin creature gets a sneak attack! does 5 damage!')
    sneakAttack()
    console.log('Hero gets an attack! does 10 damage!')
    attack()

}

const checkDeath = () => {
    if (hero.hitPoints <= 0) {
        console.log(`The Goblin has defeated you`)
    }
    else if (goblin.hitPoints <= 0) {
        console.log(`The Hero has vanquished the Goblin`)
    }
}

//EXTRA CREDIT fight 10 angry goblins at once
// let numOfEnemies = 10
// while (numOfEnemies > 0) {
//     while (hero.hitPoints > 0 && goblin.hitPoints > 0) {
//         hero.hitPoints -= goblin.attackPower
//         goblin.hitPoints -= hero.attackPower
//         console.log(hero.hitPoints, goblin.hitPoints)
//     }
// }   numOfEnemies -= 1
//     console.log(numOfEnemies)
//     goblin.hitpoints = 20



console.log(hero.name, hero.hitPoints, "hit points")
console.log(goblin.name, goblin.hitPoints, "hit points")
console.log(`Goblin creature gets a sneak attack! does ${goblin.attackPower} damage!`)
sneakAttack()
console.log('Hero gets an attack! does 10 damage!')
attack()
attackEnemy()
checkDeath()

//WHILE EXAMPLE
// while (hero.hitPoints > 0 && goblin.hitPoints > 0) {
//     hero.hitPoints -= goblin.attackPower
//     goblin.hitPoints -= hero.attackPower
//     console.log(hero.hitPoints, goblin.hitPoints)
// }

// while (hero.hitPoints > 0 && goblin.hitPoints > 0) {
//     hero.attackPower(goblin)
// }

