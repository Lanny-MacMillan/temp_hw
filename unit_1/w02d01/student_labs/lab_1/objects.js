//=============================SYNTAX=============================
// const obj = ["string0", "string1", "string2"]
// const car = {
//     color: 'green',
//     year: '1968',
//     model: 'Some sweet car'
// }
// const store = {
//     isle1: 'cereal',
//     isle2: ['ice cream', 'eggs', 'milk', 'yogurt']
//   }
//   if (store.isle1 === 'cereal') {
//     console.log('cereal in stock')
//   }
//   if (store.isle2[1] == 'eggs') {
//       console.log('eggs also in stock')
//   }
//   else {
//       console.log('doesnt seem we have any of those')
//   }

// console.log(store)
//============================ME ME ME============================
// const fancyGreeting = "Much Obliged"
// const me = {
//     firstName: "Nani",
//     lastName: "Pelekai",
//     age: 21,
//     email: "nani@foo.bar",
// }
// if(me.firstName = "Nani"){
//     console.log(fancyGreeting, me.firstName, me.lastName)
// }


// //console.log(me)
// // me.firstName
// me.age = 1000
// //console.log(me.age)
// me.placeOfResidence = "Home town"
// //console.log(me.placeOfResidence)

//============================Slimer============================

// const monster = {
//     name: 'Slimer',
//     color: 'greenish',
//     type: 'plasm or ghost or something'
// }
// 1) What would you write to access the name and console.log it?
// console.log(monster.name)
// 2) What would you write to change the type to 'creature' (without changing it inside the object itself)
// monster.type = 'creature'
// 3) What would you write to add a key to the object called age, and set the age to 6?
// monster.age = 6
// 4) console.log the object to make sure type is creature, and age is 6
// console.log(monster)

//============================Ogres============================
// const playerName = prompt('What is your name') 
// const monster = {
//     name: 'Ogre',
//     hitPoints: 10,
// }
// const hero = {
//     name: 'Link',
//     hitPoints: 10,
// }

// const fight = () => {
//     let num = Math.floor(Math.random() * 3) + 1
//     checkNegativeHealth()
//     if (num === 1) {
//       hero.hitPoints -=1  
//       console.log(hero)
//       console.log(monster)
//     } else if (num === 2) {
//         monster.hitPoints -=2 
//         console.log(hero)
//         console.log(monster)
//     } else if (num === 3) {
//         hero.hitPoints -=3 
//         monster.hitPoints -=3
//         console.log(hero)
//         console.log(monster)
//     }
//     fight()
// }
// const checkNegativeHealth = () => {
//     if (hero.hitPoints <= 0 | monster.hitPoints <= 0) {
//         hero.hitPoints = 0
//         monster.hitPoints = 0
//         return true
//         process.exit()
//       return
//     } else if (hero.hitPoints < 0) {
//         hero.hitPoints = 0
//       return
//     } else if (monster.hitPoints < 0) {
//       monster.hitPoints = 0
//       return
//     } else {
//       return
//     }
    
//   }




// console.log(`${hero.name} HP: ${hero.hitPoints}`),
// console.log(`${monster.name} HP: ${monster.hitPoints}`)
// fight()

// startgame()
// 1) how would you model your adventurer? Your adventurer will want a name and hitpoints. What else would your adventurer need?

// 2) how would you model an ogre? Your ogre will want hitpoints.

// 3) Write a very small program that will simulate a battle between your adventurer and an ogre.

// 4) When your adventurer's hitpoints reach 0 the game is over.

// 5) When your ogre's hitpoints reach 0 the game is over.

// 6) Bonus: Try to accept user input for the game by running it in the Chrome console and using alerts and prompts

//=========================Cats
const cat1 = {
    name: 'kitten',
    breed: 'calico',
    age: 6,
}
const cat2 = {
    name: 'slick',
    breed: 'maine coon',
    age: 4,
}
// console.log(cat1)
// console.log(cat2)
function combineCats(mama, papa) {
    console.log(combineCats = {cat1, cat2})
} 
// combineCats()
