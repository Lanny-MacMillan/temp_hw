const prompt = require("prompt-sync")();

const endGame = () => {
    console.clear()
    process.exit()
}
const endGame1 = () => {
    process.exit()
}
// Create alien ship-hull, firepower and accuracy to be randomized by math function
const alienShip = []

//create function to randomize alienShip stats
for (let i = 0; i < 6; i++){
alienShip[i] = {
    hull: (Math.floor(Math.random() * 4) + 3),
    firePower: Math.floor(Math.random() * 3) + 2,
    accuracy: (Math.floor(Math.random() * 3) + 6) / 10,
}
}

// create player ship object
const ussSchwarzenegger = {
    hull: 20,
    firePower: 5,
    accuracy: .5,
}

//==============================================================================================
//==============================================================================================
// uss can attack 6 different ships
const ussAttack1 = () => {
    console.log(``)
    alienShip[0].hull -= ussSchwarzenegger.firePower
    console.log('Uss hull:', ussSchwarzenegger.hull)
    console.log('Alien hull:', alienShip[0].hull)
}
const ussAttack2 = () => {
    console.log(``)
    alienShip[1].hull -= ussSchwarzenegger.firePower
    console.log('Uss hull:', ussSchwarzenegger.hull)
    console.log('Alien hull:', alienShip[1].hull)
}
const ussAttack3 = () => {
    console.log(``)
    alienShip[2].hull -= ussSchwarzenegger.firePower
    console.log('Uss hull:', ussSchwarzenegger.hull)
    console.log('Alien hull:', alienShip[2].hull)
}
const ussAttack4 = () => {
    console.log(``)
    alienShip[3].hull -= ussSchwarzenegger.firePower
    console.log('Uss hull:', ussSchwarzenegger.hull)
    console.log('Alien hull:', alienShip[3].hull)
}
const ussAttack5 = () => {
    console.log(``)
    alienShip[4].hull -= ussSchwarzenegger.firePower
    console.log('Uss hull:', ussSchwarzenegger.hull)
    console.log('Alien hull:', alienShip[4].hull)
}
const ussAttack6 = () => {
    console.log(``)
    alienShip[5].hull -= ussSchwarzenegger.firePower
    console.log('Uss hull:', ussSchwarzenegger.hull)
    console.log('Alien hull:', alienShip[5].hull)
}

//==============================================================================================
//==============================================================================================
// aliens can attack from 6 ships with randomized stats
const alienAttack1 = () => {
    console.log(``)
    ussSchwarzenegger.hull -= alienShip[0].firePower
    console.log('Uss hull:', ussSchwarzenegger.hull)
    console.log('Alien hull:', alienShip[0].hull)
    console.log(`the alien ship hits the uss Schwarzenegger`)
}
const alienAttack2 = () => {
    console.log(``)
    ussSchwarzenegger.hull -= alienShip[1].firePower
    console.log('Uss hull:', ussSchwarzenegger.hull)
    console.log('Alien hull:', alienShip[1].hull)
    console.log(`the alien ship hits the uss Schwarzenegger`)
}
const alienAttack3 = () => {
    console.log(``)
    ussSchwarzenegger.hull -= alienShip[2].firePower
    console.log('Uss hull:', ussSchwarzenegger.hull)
    console.log('Alien hull:', alienShip[2].hull)
    console.log(`the alien ship hits the uss Schwarzenegger`)
}
const alienAttack4 = () => {
    console.log(``)
    ussSchwarzenegger.hull -= alienShip[3].firePower
    console.log('Uss hull:', ussSchwarzenegger.hull)
    console.log('Alien hull:', alienShip[3].hull)
    console.log(`the alien ship hits the uss Schwarzenegger`)
}
const alienAttack5 = () => {
    console.log(``)
    ussSchwarzenegger.hull -= alienShip[4].firePower
    console.log('Uss hull:', ussSchwarzenegger.hull)
    console.log('Alien hull:', alienShip[4].hull)
    console.log(`the alien ship hits the uss Schwarzenegger`)
}
const alienAttack6 = () => {
    console.log(``)
    ussSchwarzenegger.hull -= alienShip[5].firePower
    console.log('Uss hull:', ussSchwarzenegger.hull)
    console.log('Alien hull:', alienShip[5].hull)
    console.log(`the alien ship hits the uss Schwarzenegger`)
}

//==============================================================================================
//==============================================================================================

// create the battle option for alienShip 1-6
const battle1 = () => {
    console.log('=======================================================')
    console.log(``)
    console.log(`   You chose to attack! The USS Schwartzenegger does  `) 
    console.log(`      `, ussSchwarzenegger.firePower,`damage!         `)
    console.log(``)
    ussAttack1()
    console.log(``)
    checkDeath1()
    console.log('=======================================================')
    console.log('=======================================================')
    console.log(``)
    console.log(`   The Alien Ship has retaliated! The Alien Ship does  `) 
    console.log(`                    `, alienShip[0].firePower,`damage!             `)
    console.log(``)
    alienAttack1()
    console.log(``)
    console.log('=======================================================')
    checkDeath1()
    menu1()
}
const battle2 = () => {
    console.log('=======================================================')
    console.log(``)
    console.log(`   You chose to attack! The USS Schwartzenegger does  `) 
    console.log(`                `, ussSchwarzenegger.firePower,`damage!         `)
    console.log(``)
    ussAttack2()
    console.log(``)
    checkDeath2()
    console.log('=======================================================')
    console.log('=======================================================')
    console.log(``)
    console.log(`   The Alien Ship has retaliated! The Alien Ship does  `) 
    console.log(`                 `, alienShip[1].firePower,`damage!             `)
    console.log(``)
    alienAttack2()
    console.log(``)
    console.log('=======================================================')
    checkDeath2()
    menu2()
}
const battle3 = () => {
    console.log('=======================================================')
    console.log(``)
    console.log(`   You chose to attack! The USS Schwartzenegger does  `) 
    console.log(`              `, ussSchwarzenegger.firePower,`damage!         `)
    console.log(``)
    ussAttack3()
    console.log(``)
    checkDeath3()
    console.log('=======================================================')
    console.log('=======================================================')
    console.log(``)
    console.log(`   The Alien Ship has retaliated! The Alien Ship does  `) 
    console.log(`                `, alienShip[2].firePower,`damage!             `)
    console.log(``)
    alienAttack3()
    console.log(``)
    console.log('=======================================================')
    checkDeath3()
    menu3()

}
const battle4 = () => {
    console.log('=======================================================')
    console.log(``)
    console.log(`   You chose to attack! The USS Schwartzenegger does  `) 
    console.log(`                 `, ussSchwarzenegger.firePower,`damage!         `)
    console.log(``)
    ussAttack4()
    console.log(``)
    checkDeath4()
    console.log('=======================================================')
    console.log('=======================================================')
    console.log(``)
    console.log(`   The Alien Ship has retaliated! The Alien Ship does  `) 
    console.log(`                  `, alienShip[3].firePower,`damage!                   `)
    console.log(``)
    alienAttack4()
    console.log(``)
    console.log('=======================================================')
    checkDeath4()
    menu4()
}
const battle5 = () => {
    console.log('=======================================================')
    console.log(``)
    console.log(`   You chose to attack! The USS Schwartzenegger does  `) 
    console.log(`                 `, ussSchwarzenegger.firePower,`damage!         `)
    console.log(``)
    ussAttack5()
    console.log(``)
    checkDeath5()
    console.log('=======================================================')
    console.log('=======================================================')
    console.log(``)
    console.log(`   The Alien Ship has retaliated! The Alien Ship does  `) 
    console.log(`                  `, alienShip[4].firePower,`damage!                   `)
    console.log(``)
    alienAttack5()
    console.log(``)
    console.log('=======================================================')
    checkDeath5()
    menu5()
}
const battle6 = () => {
    console.log('=======================================================')
    console.log(``)
    console.log(`   You chose to attack! The USS Schwartzenegger does  `) 
    console.log(`               `, ussSchwarzenegger.firePower,`damage!               `)
    console.log(``)
    ussAttack6()
    console.log(``)
    checkDeath6()
    console.log('=======================================================')
    console.log('=======================================================')
    console.log(``)
    console.log(`   The Alien Ship has retaliated! The Alien Ship does  `) 
    console.log(`               `, alienShip[5].firePower,`damage!                   `)
    console.log(``)
    alienAttack6()
    console.log(``)
    console.log('=======================================================')
    checkDeath6()
    menu6()
}


//==============================================================================================
//==============================================================================================
//create a menu/UI to prompt select battle commands
const menu1 = () => {
    console.clear()
    console.log('=======================================================')
    console.log('=======================================================')
    console.log(`                  Alien ship incoming!                 `)
    console.log(``)
    console.log(`                   Enter #1 to Attack                  `)
    console.log(`                   Enter #2 to Retreat                 `)
    console.log(``)
    let playerAction = prompt(`            What will you choose to do? `)
    console.log(``)
    console.log('=======================================================')
    if (playerAction == 1) {
        battle1()
    } else if (playerAction == 2) {
        endGame()
    }
}
const menu2 = () => {
    console.clear()
    console.log('=======================================================')
    console.log('=======================================================')
    console.log(`            A second Alien ship is incoming!           `)
    console.log(``)
    console.log(`                   Enter #1 to Attack                  `)
    console.log(`                   Enter #2 to Retreat                 `)
    console.log(``)
    let playerAction = prompt(`            What will you choose to do? `)
    console.log(``)
    console.log('=======================================================')
    if (playerAction == 1) {
        battle2()
    } else if (playerAction == 2) {
        endGame()
    }
}
const menu3 = () => {
    console.clear()
    console.log('=======================================================')
    console.log('=======================================================')
    console.log(`             A third Alien ship is incoming!           `)
    console.log(``)
    console.log(`                   Enter #1 to Attack                  `)
    console.log(`                   Enter #2 to Retreat                 `)
    console.log(``)
    let playerAction = prompt(`            What will you choose to do? `)
    console.log(``)
    console.log('=======================================================')
    if (playerAction == 1) {
        battle3()
    } else if (playerAction == 2) {
        endGame()
    }
}
const menu4 = () => {
    console.clear()
    console.log('=======================================================')
    console.log('=======================================================')
    console.log(`            A fourth Alien ship is incoming!           `)
    console.log(``)
    console.log(`                   Enter #1 to Attack                  `)
    console.log(`                   Enter #2 to Retreat                 `)
    console.log(``)
    let playerAction = prompt(`            What will you choose to do? `)
    console.log(``)
    console.log('=======================================================')
    if (playerAction == 1) {
        battle4()
    } else if (playerAction == 2) {
        endGame()
    }
}
const menu5 = () => {
    console.clear()
    console.log('=======================================================')
    console.log('=======================================================')
    console.log(`            A fifth Alien ship is incoming!            `)
    console.log(``)
    console.log(`                   Enter #1 to Attack                  `)
    console.log(`                   Enter #2 to Retreat                 `)
    console.log(``)
    let playerAction = prompt(`            What will you choose to do? `)
    console.log(``)
    console.log('=======================================================')
    if (playerAction == 1) {
        battle5()
    } else if (playerAction == 2) {
        endGame()
    }
}
const menu6 = () => {
    console.clear()
    console.log('=======================================================')
    console.log('=======================================================')
    console.log(`      The sixth and final Alien ship is incoming!      `)
    console.log(``)
    console.log(`                   Enter #1 to Attack                  `)
    console.log(`                   Enter #2 to Retreat                 `)
    console.log(``)
    let playerAction = prompt(`            What will you choose to do? `)
    console.log(``)
    console.log('=======================================================')
    if (playerAction == 1) {
        battle6()
    } else if (playerAction == 2) {
        endGame()
    }
}

//==============================================================================================
//==============================================================================================
//player prep
const prepPlayer = () => {
    console.clear()
    console.log('=======================================================')
    console.log(``)
    console.log(`                 Welcome to Spacebattle                `)
    console.log(`                  What is your name?                  `)
    const playerName = prompt(`                       `)
    console.log(``)
    console.log('=======================================================')
    console.log(` please open your terminal wide for the best gameplay ` )
    console.log(``)
    let playerReady = prompt(`  Are you ready to play SpaceBattle ${playerName}? y/n  `)
    if (playerReady == 'y' || playerReady == 'yes' || playerReady == 'Y' || playerReady == 'YES') {
        console.clear()
        menu1()
    } else {
        endGame()
    }
}

//==============================================================================================
//==============================================================================================
// check alien ship 1-6 or our ship can be destroyed
const checkDeath1 = () => {
    if (alienShip[0].hull <= 0) {
        console.log('=======================================================')
        console.log('=======================================================')
        console.log(`           You have defeated an alien ship!            `)
        console.log('=======================================================')
        console.log('=======================================================')
        console.log(``)
        console.log(`         Enter #1 to approach next alien ship          `)
        console.log(`          Enter #2 to Retreat at light speed           `)
        console.log(``)
        let playerAction = prompt(`             What will you choose to do?  `)
        console.log(``)
        if (playerAction == 1) {
            menu2()
        } else if (playerAction == 2) {
            endGame()
        }
        } else if (ussSchwarzenegger.hull <= 0) {
            console.log(`                Incredible battle but                   `)
            console.log(`       you have been defeated by the alien ship         `)
            endGame1()
    }  
}
const checkDeath2 = () => {
    if (alienShip[1].hull <= 0) {
        console.log('=======================================================')
        console.log('=======================================================')
        console.log(`       You have defeated your second alien ship!       `)
        console.log('=======================================================')
        console.log('=======================================================')
        console.log(``)
        console.log(`         Enter #1 to approach next alien ship          `)
        console.log(`          Enter #2 to Retreat at light speed           `)
        console.log(``)
        let playerAction = prompt(`             What will you choose to do?  `)
        console.log(``)
        if (playerAction == 1) {
            menu3()
        } else if (playerAction == 2) {
            endGame()
        }
        } else if (ussSchwarzenegger.hull <= 0) {
            console.log(`                Incredible battle but                   `)
            console.log(`       you have been defeated by the alien ship         `)
            endGame1()
    }  
}
const checkDeath3 = () => {
    if (alienShip[2].hull <= 0) {
        console.log('=======================================================')
        console.log('=======================================================')
        console.log(`       You have defeated your third alien ship!        `)
        console.log('=======================================================')
        console.log('=======================================================')
        console.log(``)
        console.log(`         Enter #1 to approach next alien ship          `)
        console.log(`          Enter #2 to Retreat at light speed           `)
        console.log(``)
        let playerAction = prompt(`             What will you choose to do?  `)
        console.log(``)
        if (playerAction == 1) {
            menu4()
        } else if (playerAction == 2) {
            endGame()
        }
        } else if (ussSchwarzenegger.hull <= 0) {
            console.log(`                Incredible battle but                   `)
            console.log(`       you have been defeated by the alien ship         `)
            endGame1()
    }  
}
const checkDeath4 = () => {
    if (alienShip[3].hull <= 0) {
        console.log('=======================================================')
        console.log('=======================================================')
        console.log(`       You have defeated your fourth alien ship!       `)
        console.log('=======================================================')
        console.log('=======================================================')
        console.log(``)
        console.log(`         Enter #1 to approach next alien ship          `)
        console.log(`          Enter #2 to Retreat at light speed           `)
        console.log(``)
        let playerAction = prompt(`             What will you choose to do?  `)
        console.log(``)
        if (playerAction == 1) {
            menu5()
        } else if (playerAction == 2) {
            endGame()
        }
        } else if (ussSchwarzenegger.hull <= 0) {
            console.log(`                Incredible battle but                   `)
            console.log(`       you have been defeated by the alien ship         `)
            endGame1()
    }  
}
const checkDeath5 = () => {
    if (alienShip[4].hull <= 0) {
        console.log('=======================================================')
        console.log('=======================================================')
        console.log(`         You have defeated a fifth alien ship!         `)
        console.log('=======================================================')
        console.log('=======================================================')
        console.log(``)
        console.log(`         Enter #1 to approach final alien ship          `)
        console.log(`          Enter #2 to Retreat at light speed           `)
        console.log(``)
        let playerAction = prompt(`             What will you choose to do?  `)
        console.log(``)
        if (playerAction == 1) {
            menu6()
        } else if (playerAction == 2) {
            endGame()
        }
        } else if (ussSchwarzenegger.hull <= 0) {
            console.log(`                Incredible battle but                   `)
            console.log(`       you have been defeated by the alien ship         `)
            endGame1()
    }  
}
const checkDeath6 = () => {
    if (alienShip[5].hull <= 0) {
        console.log('=======================================================')
        console.log('=======================================================')
        console.log(`                    CONGRATULATIONS                    `)
        console.log(`        You have defeated all the alien ships!         `)
        console.log('=======================================================')
        console.log('=======================================================')
        console.log(``)
        console.log(`           Enter #1 to play SpaceBattle again!         `)
        console.log(`     Enter #2 to engage light speed and exit game      `)
        console.log(``)
        let playerAction = prompt(`             What will you choose to do?  `)
        console.log(``)
        if (playerAction == 1) {
            prepPlayer()
        } else {
            console.log(`         Sit back and relax we're out of here!         `)
            console.log(``)
            console.log('=======================================================')
            endGame1()
        }
        } else if (ussSchwarzenegger.hull <= 0) {
            console.log(`                Incredible battle but                   `)
            console.log(`       you have been defeated by the alien ship         `)
            endGame1()
    }  
}
//==============================================================================================
prepPlayer()

