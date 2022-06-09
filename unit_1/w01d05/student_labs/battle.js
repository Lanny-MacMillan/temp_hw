// Zoom Room 10, Ryan Portorreal & Lanny MacMillan

const prompt = require('prompt-sync')();
// const username = prompt('What is your name? ');
// console.log(`Your name is ${username}`);

// Establish protaganist
// Functions to execute game functionality
// Prompts that take userInput and store & manipulate it in the game
// After each prompt is answered, there should be a response message and a new
// follow up prompt.

// const startGame = () => {
//   let playerReady = prompt('Welcome to the game! Are you ready to play? (y/n) ')
//   if (playerReady == 'y') {
//     menu()
//   }
// }

const startGame = () => {
    let playerReady = prompt(`Welcome to the game! Are you ready to play? (y/n) `)
    if (playerReady == 'y' || playerReady == 'yes' || playerReady == 'Y' || playerReady == 'YES' || playerReady == 'Yes') {
        console.log('==================================================')
        console.log("Okay adventurer")
    } else {
        console.log(`why have you come to tease us...lets try this again...AHEM `)
  }
}

startGame()
//const choices = prompt `[y, yes, n , no]`
const userName = prompt('What is your name? ') 
console.log('==================================================') 
console.log(`Hello ${userName}! Lets begin our adventure, shall we?!`)
console.log(``)
console.log(`You are in for a real treat today`)
console.log(``)





// You are an adventurer who has taken up the task of defeating a monster.

// Number Menu System
// Health: 20 / 20
// Stamina: 5 / 5
// Enter #1 to Attack
// Enter #2 to Defend
// Enter #3 to Exit

const player = {
  health: 20,
  maxHealth: 20,
  stamina: 5,
  maxStamina: 5,
  attackPower: 3
};

const monster = {
  health: 20,
  maxHealth: 20,
  stamina: 5,
  maxStamina: 5,
  attackPower: 3
};


const takeDamage = (target) => {
  if (target == 'player') {
    player.health -= monster.attackPower
    return
  } else if (target == 'monster') {
    monster.health -= player.attackPower
    return
  }
}

const takeHalfDamage = (target) => {
  if (target == 'player') {
    player.health -= Math.floor(monster.attackPower/2)
    return
  } else if (target == 'monster') {
    monster.health -= Math.floor(player.attackPower/2)
    return
  }
}

const checkDeath = () => {
  if (player.health <= 0 && monster.health <= 0) {
    console.log('You and the monster have both died.')
    console.log('GAME OVER')
    console.log('=======================================================')
    return true
  } else if (player.health <= 0) {
    console.log('You have died.')
    console.log('YOU LOSE')
    console.log('=======================================================')
    return true
  } else if (monster.health <= 0) {
    console.log('The monster has died.')
    console.log('YOU WIN')
    console.log('=======================================================')
    return true
  } else {
    return false
  }
}

const checkNegativeHealth = () => {
  if (player.health < 0 && monster.health < 0) {
    player.health = 0
    monster.health = 0
    return
  } else if (player.health < 0) {
    player.health = 0
    return
  } else if (monster.health < 0) {
    monster.health = 0
    return
  } else {
    return
  }
}


const toBattle = (playChoice) => {
  let monChoice = Math.floor(Math.random() * 2) + 1
  if (monChoice == 1 && playChoice == 1) {
    if (monster.stamina > 0 && player.stamina > 0) {
      console.log('You chose to attack.')
      console.log('The monster chose to attack.')
      monster.stamina -= 1
      takeDamage('player')
      console.log(`Player takes ${monster.attackPower} damage.`)
      player.stamina -= 1
      takeDamage('monster')
      console.log(`Monster takes ${player.attackPower} damage.`)
      return
    } else if (player.stamina > 0) {
      console.log('You chose to attack.')
      console.log('The monster tried to attack but has no stamina.')
      player.stamina -= 1
      takeDamage('monster')
      console.log(`Monster takes ${player.attackPower} damage.`)
      return
    } else if (monster.stamina > 0) {
      console.log('You tried to attack but have no stamina.')
      console.log('The monster chose to attack.')
      monster.stamina -= 1
      takeDamage('player')
      console.log(`Player takes ${monster.attackPower} damage.`)
      return
    } else {
      console.log('You tried to attack but have no stamina.')
      console.log('The monster tried to attack but has no stamina.')
      return
    }

  } else if (monChoice == 2 && playChoice == 1) {
    if (monster.stamina < monster.maxStamina && player.stamina > 0) {
      console.log('You chose to attack.')
      console.log('The monster chose to defend')
      player.stamina -= 1
      monster.stamina += 1
      takeHalfDamage('monster')
      console.log(`Monster takes ${Math.floor(player.attackPower/2)} damage.`)
      return
    } else if (player.stamina > 0) {
      console.log('You chose to attack.')
      console.log('The monster chose to defend')
      player.stamina -= 1
      takeHalfDamage('monster')
      console.log(`Monster takes ${Math.floor(player.attackPower/2)} damage.`)
      return
    } else if (monster.stamina < monster.maxStamina) {
      console.log('You tried to attack but have no stamina.')
      console.log('The monster chose to defend')
      monster.stamina += 1
      console.log('Monster takes no damage.')
      return
    } else {
      console.log('You tried to attack but have no stamina.')
      console.log('The monster chose to defend')
      console.log('Monster takes no damage.')
      return
    }

  } else if (monChoice == 1 && playChoice == 2) {
    if (monster.stamina > 0 && player.stamina < player.maxStamina) {
      console.log('You chose to defend.')
      console.log('The monster chose to attack.')
      player.stamina += 1
      monster.stamina -= 1
      takeHalfDamage('player')
      console.log(`Player takes ${Math.floor(monster.attackPower/2)} damage.`)
      return
    } else if (player.stamina < player.maxStamina) {
      console.log('You chose to defend.')
      console.log('The monster tried to attack but has no stamina.')
      player.stamina += 1
      console.log('You take no damage.')
      return
    } else if (monster.stamina > 0) {
      console.log('You chose to defend.')
      console.log('The monster chose to attack.')
      monster.stamina -= 1
      takeHalfDamage('player')
      console.log(`Player takes ${Math.floor(monster.attackPower/2)} damage.`)
      return
    } else {
      console.log('You chose to defend.')
      console.log('The monster tried to attack but has no stamina.')
      console.log('You take no damage.')
      return
    }

  } else if (monChoice == 2 && playChoice == 2) {
    if (monster.stamina < monster.maxStamina && player.stamina < player.maxStamina) {
      console.log('You chose to defend.')
      console.log('The monster chose to defend')
      monster.stamina += 1
      player.stamina += 1
      console.log('You and the monster glare at each other.')
      return
    } else if (player.stamina < player.maxStamina) {
      console.log('You chose to defend.')
      console.log('The monster chose to defend')
      player.stamina += 1
      console.log('You and the monster glare at each other.')
      return
    } else if (monster.stamina < monster.maxStamina) {
      console.log('You chose to defend.')
      console.log('The monster chose to defend')
      monster.stamina += 1
      console.log('You and the monster glare at each other.')
      return
    } else {
      console.log('You chose to defend.')
      console.log('The monster chose to defend')
      console.log('You and the monster glare at each other.')
      return
    }
  }
}

const menu = () => {
    checkNegativeHealth()
    console.log('=======================================================')
    console.log(`Player Health: ${player.health} / ${player.maxHealth} ----- Monster Health: ${monster.health} / ${monster.maxHealth}`)
    console.log(`Player Stamina: ${player.stamina} / ${player.maxStamina} ----- Monster Stamina: ${monster.stamina} / ${monster.maxStamina}`)
    let end = checkDeath()
    if (end === true) {return}
    console.log('Enter #1 to Attack (Cost: 1 Stamina)');
    console.log('Enter #2 to Defend (Restore: 1 Stamina)');
    console.log('Enter #3 to Exit The Game');
    let playerAction = prompt('What will you do? ')
    console.log('=======================================================')
  
    if (playerAction == 1 || playerAction == 2) {
      toBattle(playerAction)
      menu()
    } else if (playerAction == 3) {
      return
    } else {
      console.log('Not a Valid Entry, Please Try Again.')
      menu()
    }
  }
  
  let playerReady = prompt(` Are you ready for your first challege? (y/n) `)
  if (playerReady == 'y' || playerReady == 'yes' || playerReady == 'Y' || playerReady == 'YES' || playerReady == 'Yes') {
      console.log('==================================================')
      console.log(``)
      console.log("You will battle the Monster!")
      menu()
  } else {
      console.log('==================================================')
      console.log(`Such a pityful adventurer, why have you wasted our time ${userName}?`)
      console.log(`come back when you have a backbone`)
      // menu()
  }

startGame()