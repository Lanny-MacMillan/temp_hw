//=================================================================//
//==========================TERMINAL HERO==========================//
//=================================================================//
//                              ,-.
//         ___,---.__          /'|`\          __,---,___
//      ,-'    \`    `-.____,-'  |  `-.____,-'    //    `-.
//    ,'        |           ~'\     /`~           |        `.
//   /      ___//              `. ,'          ,  , \___      \
//  |    ,-'   `-.__   _         |        ,    __,-'   `-.    |
//  |   /          /\_  `   .    |    ,      _/\          \   |
//  \  |           \ \`-.___ \   |   / ___,-'/ /           |  /
//   \  \           | `._   `\\  |  //'   _,' |           /  /
//    `-.\         /'  _ `---'' , . ``---' _  `\         /,-'
//       ``       /     \    ,='/ \`=.    /     \       ''
//               |__   /|\_,--.,-.--,--._/|\   __|
//               /  `./  \\`\ |  |  | /,//' \,'  \
//              /   /     ||--+--|--+-/-|     \   \
//             |   |     /'\_\_\ | /_/_/`\     |   |
//              \   \__, \_     `~'     _/ .__/   /
//               `-._,-'   `-._______,-'   `-._,-'
//
//=================================================================//
//=================================================================//
//=================================================================//

// Zoom Room 10, Ryan Portorreal & Lanny MacMillan

// const prompt = require('prompt-sync')();
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

// You are an adventurer who has taken up the task of defeating a monster.

// Number Menu System
// Health: 20 / 20
// Stamina: 5 / 5
// Enter #1 to Attack
// Enter #2 to Defend
// Enter #3 to Escape

const prompt = require('prompt-sync')();

const player = {
  name: '',
  health: 25,
  maxHealth: 25,
  stamina: 5,
  maxStamina: 5,
  attackPower: 3
};

const monster = {
  name: '',
  health: 25,
  maxHealth: 25,
  stamina: 5,
  maxStamina: 5,
  attackPower: 3
};

//=================================================================//

const biomes = [
    "Dark Forest",
    "Icy Tundra",
    "Volcano of Doom"
]

const randomBiome = () => {
  let num = Math.floor(Math.random() * 3) + 1
  if (num === 1) {
    return biomes[0]
  } else if (num === 2) {
    return biomes[1]
  } else if (num === 3) {
    return biomes[2]
  }
}

const renameMon = (chosenBiome) => {
  const biomeToGo = chosenBiome
  if (biomeToGo == biomes[0]) {
    monster.name = 'Dark Wood Beast'
  } else if (biomeToGo == biomes[1]) {
    monster.name = 'Hellfrost Demon'
  } else if (biomeToGo == biomes[2]) {
    monster.name = 'Brimstone Dragon'
  }
}

const startGame = () => {
  console.log('')
  console.log(`=============  Welcome to Terminal Hero  ==============`)
  console.log('')
  let playerReady = prompt(`Are you ready to play? (y/n) `)
  if (playerReady == 'y' || playerReady == 'yes' || playerReady == 'Y' || playerReady == 'YES' || playerReady == 'Yes') {
    console.log(``)
    console.log('=======================================================')
    console.log(``)
    console.log("                Wonderful choice adventurer                   ")
    console.log(``)
    prepPlayer()
  } else {
    console.log(``)
    console.log(`why have you come to tease us...lets try this again...AHEM `)
    startGame()
    //Jesse said this should exit the program, only in terminal games
    process.exit()
  }
}
//console.clear() clears console for a cleaner game
const prepPlayer = () => {
  const userName = prompt('Now what is your name? ')
  player.name = userName
  console.log(``)
  console.log('=======================================================')
  console.log(``)
  let playerReady = prompt(`Adventurer ${player.name}, would you like to select the location you wish to battle in? (y/n) `)
  if (playerReady == 'y' || playerReady == 'yes' || playerReady == 'Y' || playerReady == 'YES' || playerReady == 'Yes') {
    console.log(``)
    console.log(`         Very well, here are your choices         `)
    console.log(``)
    console.log('=======================================================')
    console.log(``)
    console.log(`Enter #1 for the ${biomes[0]}`)
    console.log(`Enter #2 for the ${biomes[1]}`)
    console.log(`Enter #3 for the ${biomes[2]}`)
    console.log(``)
    let playerBiomeChoice = prompt(`Which will you choose?: `)
    if (playerBiomeChoice == 1 || playerBiomeChoice == 2 || playerBiomeChoice == 3) {
      renameMon(biomes[playerBiomeChoice-1])
      console.log(``)
      console.log('=======================================================')
      console.log(``)
      console.log(`Now that the ${biomes[playerBiomeChoice-1]} has been selected`)
      console.log(``)
      console.log('=======================================================')
      prepBattle()
    } else {
      const randomChoice = randomBiome()
      renameMon(randomChoice)
      console.log(``)
      console.log('=======================================================')
      console.log(``)
      console.log(`        You did not make a valid choice`)
      console.log(`        So we shall choose one for you `)
      console.log(``)
      console.log(`Now that the ${randomChoice} has been selected`)
      console.log(``)
      console.log('=======================================================')
      prepBattle()
    }
  } else {
    const randomChoice = randomBiome()
    renameMon(randomChoice)
    console.log(``)
    console.log('=======================================================')
    console.log(``)
    console.log(`        Then we shall choose one for you `)
    console.log(``)
    console.log(`Now that the ${randomChoice} has been selected`)
    console.log(``)
    console.log('=======================================================')
    prepBattle()
  }
}

const prepBattle = () => {
  console.log(``)
  let playerReady2 = prompt(`Are you ready for combat? (y/n)`)
  if (playerReady2 == 'y' || playerReady2 == 'yes' || playerReady2 == 'Y' || playerReady2 == 'YES' || playerReady2 == 'Yes') {
    console.log(``)
    console.log('=======================================================')
    console.log(``)
    console.log(`               Let the Battle Begin!                   `)
    console.log(``)
    menu()
  } else {
    console.log(``)
    console.log('=======================================================')
    console.log(``)
    console.log(`            Such a pityful adventurer                  `)
    console.log(`   You will not waste our time Adventurer ${player.name},     `)
    console.log(`           Prepare for battle weakling!                `)
    console.log(``)
    console.log(`               Let the Battle Begin!                   `)
    console.log(``)
    menu()
  }
}

//=================================================================//

const menu = () => {
  checkNegativeHealth()
  console.log('=======================================================')
  console.log(``)
  console.log(`Player ${player.name}\'s Health: ${player.health} / ${player.maxHealth} ----- ${monster.name}\'s Health: ${monster.health} / ${monster.maxHealth}`)
  console.log(`Player ${player.name}\'s Stamina: ${player.stamina} / ${player.maxStamina}  ----- ${monster.name}\'s Stamina: ${monster.stamina} / ${monster.maxStamina}`)
  let end = checkDeath()
  if (end === true) {return}
  console.log(``)
  console.log('Enter #1 to Attack (Cost: 1 Stamina)');
  console.log('Enter #2 to Defend (Restore: 1 Stamina)');
  console.log('Enter #3 to Escape (Exit Game)');
  console.log(``)
  let playerAction = prompt('What will you do? ')
  console.log(``)
  console.log('=======================================================')

  if (playerAction == 1 || playerAction == 2) {
    toBattle(playerAction)
    menu()
  } else if (playerAction == 3) {
    console.log(``)
    console.log('      You Dare to Run Away From This Glorious Battle!')
    console.log(`        Begone from my sight, Adventurer ${player.name}`)
    console.log(``)
    console.log('=======================================================')
    return
  } else {
    console.log('Not a Valid Entry, Try Again.')
    menu()
  }
}

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
    console.log('')
    console.log(' You and the monster have both died.')
    console.log('            GAME OVER')
    console.log('')
    console.log('=======================================================')
    return true
  } else if (player.health <= 0) {
    console.log('')
    console.log('          You have died.')
    console.log('            YOU LOSE')
    console.log('')
    console.log('=======================================================')
    return true
  } else if (monster.health <= 0) {
    console.log('')
    console.log('       The monster has died.')
    console.log('             YOU WIN')
    console.log('')
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
      console.log(``)
      console.log('You chose to attack.')
      console.log('The monster chose to attack.')
      monster.stamina -= 1
      takeDamage('player')
      console.log(`Player takes ${monster.attackPower} damage.`)
      player.stamina -= 1
      takeDamage('monster')
      console.log(`Monster takes ${player.attackPower} damage.`)
      console.log(``)
      return
    } else if (player.stamina > 0) {
      console.log(``)
      console.log('You chose to attack.')
      console.log('The monster tried to attack but has no stamina.')
      player.stamina -= 1
      takeDamage('monster')
      console.log(`Monster takes ${player.attackPower} damage.`)
      console.log(``)
      return
    } else if (monster.stamina > 0) {
      console.log(``)
      console.log('You tried to attack but have no stamina.')
      console.log('The monster chose to attack.')
      monster.stamina -= 1
      takeDamage('player')
      console.log(`Player takes ${monster.attackPower} damage.`)
      console.log(``)
      return
    } else {
      console.log(``)
      console.log('You tried to attack but have no stamina.')
      console.log('The monster tried to attack but has no stamina.')
      console.log(``)
      return
    }

  } else if (monChoice == 2 && playChoice == 1) {
    if (monster.stamina < monster.maxStamina && player.stamina > 0) {
      console.log(``)
      console.log('You chose to attack.')
      console.log('The monster chose to defend')
      player.stamina -= 1
      monster.stamina += 1
      takeHalfDamage('monster')
      console.log(`Monster takes ${Math.floor(player.attackPower/2)} damage.`)
      console.log(``)
      return
    } else if (player.stamina > 0) {
      console.log(``)
      console.log('You chose to attack.')
      console.log('The monster chose to defend')
      player.stamina -= 1
      takeHalfDamage('monster')
      console.log(`Monster takes ${Math.floor(player.attackPower/2)} damage.`)
      console.log(``)
      return
    } else if (monster.stamina < monster.maxStamina) {
      console.log(``)
      console.log('You tried to attack but have no stamina.')
      console.log('The monster chose to defend')
      monster.stamina += 1
      console.log('Monster takes no damage.')
      console.log(``)
      return
    } else {
      console.log(``)
      console.log('You tried to attack but have no stamina.')
      console.log('The monster chose to defend')
      console.log('Monster takes no damage.')
      console.log(``)
      return
    }

  } else if (monChoice == 1 && playChoice == 2) {
    if (monster.stamina > 0 && player.stamina < player.maxStamina) {
      console.log(``)
      console.log('You chose to defend.')
      console.log('The monster chose to attack.')
      player.stamina += 1
      monster.stamina -= 1
      takeHalfDamage('player')
      console.log(`Player takes ${Math.floor(monster.attackPower/2)} damage.`)
      console.log(``)
      return
    } else if (player.stamina < player.maxStamina) {
      console.log(``)
      console.log('You chose to defend.')
      console.log('The monster tried to attack but has no stamina.')
      player.stamina += 1
      console.log('You take no damage.')
      console.log(``)
      return
    } else if (monster.stamina > 0) {
      console.log(``)
      console.log('You chose to defend.')
      console.log('The monster chose to attack.')
      monster.stamina -= 1
      takeHalfDamage('player')
      console.log(`Player takes ${Math.floor(monster.attackPower/2)} damage.`)
      console.log(``)
      return
    } else {
      console.log(``)
      console.log('You chose to defend.')
      console.log('The monster tried to attack but has no stamina.')
      console.log('You take no damage.')
      console.log(``)
      return
    }

  } else if (monChoice == 2 && playChoice == 2) {
    if (monster.stamina < monster.maxStamina && player.stamina < player.maxStamina) {
      console.log(``)
      console.log('You chose to defend.')
      console.log('The monster chose to defend')
      monster.stamina += 1
      player.stamina += 1
      console.log('You and the monster glare at each other.')
      console.log(``)
      return
    } else if (player.stamina < player.maxStamina) {
      console.log(``)
      console.log('You chose to defend.')
      console.log('The monster chose to defend')
      player.stamina += 1
      console.log('You and the monster glare at each other.')
      console.log(``)
      return
    } else if (monster.stamina < monster.maxStamina) {
      console.log(``)
      console.log('You chose to defend.')
      console.log('The monster chose to defend')
      monster.stamina += 1
      console.log('You and the monster glare at each other.')
      console.log(``)
      return
    } else {
      console.log(``)
      console.log('You chose to defend.')
      console.log('The monster chose to defend')
      console.log('You and the monster glare at each other.')
      console.log(``)
      return
    }
  }
}

startGame()