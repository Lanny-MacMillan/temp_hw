
//================================================================================================================
//                                                   SPACE BATTLE V2.0
//================================================================================================================

// Lanny MacMillan 
// Eric McQuarrie





// console.log("LINKED");
const playerSpaceship = {
    name: 'USS Schwarzenegger',
    hull: 20,
    firepower: 5,
    accuracy: .7
}
const empty = () => {
  $(`body`).empty()
}

const removeNarrator = () => {
    $tag.remove()
}
const deleteNairtor = () => {
    for(let i = 0; i < $(`tag`).length; i++){
    $tag.remove()
    }
}
const narrator = (string) => {
    const $tag = $('<tag>').text(`${string}`)
    $('body').append($tag)
}
const randomFromRange = (min, max) => {
    return Math.round(Math.random() * (max-min) + min);
}
const randomAccuracy = (min, max) => {
    return (Math.round(Math.random() * (max * 10 - min * 10) + min * 10)) / 10
}
// let missleCount = 2
const alienFleet = []
const generateFleet = () => {
    const randomShipNumber = Math.floor(Math.random() * 10 + 1)
        for(let i = 1; i < (randomShipNumber +1) ; i++) {
            const alienShip = {
                name: `Alien Ship`,
                hull: randomFromRange(3, 6),
                firepower: randomFromRange(2, 4),
                accuracy: randomAccuracy(.6, .8)
            }
            alienFleet.push(alienShip)
        }
}
const enemyAttack = (enemyship) => {
  if (checkAccuracy(enemyship)) {
  playerSpaceship.hull -= enemyship.firepower
  console.log(`Another ${enemyship.name} attacks, dealing ${enemyship.firepower} damage. Your ship now has ${playerSpaceship.hull} health`);
    if(checkAccuracy(playerSpaceship)){
    playerSpaceship.hull = (Math.round(Math.random() * (enemyship.firepower - 1)) +1) + playerSpaceship.hull
    }
  console.log(`Your shields activated to defend against enemy attack. Your ships hull strength = ${playerSpaceship.hull}`)
} else {
  console.log(`Another ${enemyship.name} attempted to attack but missed`);
}
  if (playerSpaceship.hull <= 0) {
    console.log(`The enemy ship destroys your hull --GAME OVER-- LOSER!!!!`);
  }
}
const checkAccuracy = (spaceship) => {
  let hitChance = (Math.round(Math.random() * 10)) / 10
  // console.log(hitChance);
  // console.log(spaceship.accuracy);
  if (spaceship.accuracy >= hitChance) {
    // console.log(`true`);
    return true
  } else {
    // console.log(`false`);
    return false
  }
}
const attackCheck = (alienFleet) => {
  for( let i = 1; i < alienFleet.length; i++) {
    if(Math.floor(Math.random() * 10) >= 5) {
      enemyAttack(alienFleet[i])
    }
  }
}
const missleFired = () => {
    missleCount--
    const $h1 = $('<h1>').text(`You destroyed ${enemyship.name}!`);
    $('body').append($h1)
    //remove text
    alienFleet.splice(alienFleet.indexOf(enemyship), 1)
    $('#1missle').remove()
    $('#1cease fire').remove()
}
const ceaseFire = () => {
    $('#1missle').remove()
    $('#1cease fire').remove()
    //remove text
    retreatGame()
}
let flashEffect = () => {
    ($h1b).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}
const pageFlash = () => {
    $(document).ready(() => {
        setInterval(() => {
            $('body').fadeIn();
            $('body').fadeOut();
        }, 5);
    });
}



const retreatGame = () => {
    $('#1').remove()
    $('#2').remove()
    $('h1').remove()
    $('h2').remove()
    const $h1 = $('<h1>').text('You retreat like a COWARD!').css('color', 'white')
    const $h1a = $('<h1>').text('--GAME OVER--').css('color', 'red')
    $('body').append($h1)
    $('body').append($h1a)
}

const combat = (enemyship) => {
    $('#1').remove()
    $('#2').remove()
    $('h1').remove()
    $('h2').remove()
    let combatSequence = true
    const $h4 = $('<h4>').text(`Alien Fleet: ${alienFleet.length} ships`).css('text-align', 'left').css('color', 'white')
    const $h4a = $('<h4>').text(`${playerSpaceship.name}`).css('text-align', 'left').css('color', 'white')
    const $h4b = $('<h4>').text(`Ship Hull: ${playerSpaceship.hull}`).css('text-align', 'left').css('color', 'white')
    const $h2 = $('<h2>').text(`You begin your fight with the ${enemyship.name}, it has ${enemyship.hull} health`).css('color', 'white')
    $('body').append($h4a)
    $('body').append($h4b)
    $('body').append($h4)
    $('body').append($h2)

    while (enemyship.hull > 0 && playerSpaceship.hull > 0) {
        if (checkAccuracy(playerSpaceship)){
            enemyship.hull -= playerSpaceship.firepower
            const $h3 = $('<h3>').text(`You hit the ${enemyship.name} for ${playerSpaceship.firepower} damage, leaving them with ${enemyship.hull} hull integrity`).css('color', 'white');
            $('body').append($h3)
        } else {
            const $h3a = $('<h3>').text(`You attemped to attack the ${enemyship.name} but missed`).css('color', 'white');
            $('body').append($h3a)
        }   
        if (enemyship.hull > 0) {
            if (checkAccuracy(enemyship)) {
                playerSpaceship.hull -= enemyship.firepower
                const $h3b = $('<h3>').text(`The ${enemyship.name} attacks, dealing ${enemyship.firepower} damage. Your ship now has ${playerSpaceship.hull} hull integrity`).css('color', 'white');
                $('body').append($h3b)
                if(checkAccuracy(playerSpaceship)){
                    playerSpaceship.hull = (Math.round(Math.random() * enemyship.firepower)) + playerSpaceship.hull
                    const $h3c = $('<h3>').text(`Your shields activated to defend against enemy attack. Your ships hull integrity = ${playerSpaceship.hull}`).css('color', 'white')
                    $('body').append($h3c)
                }
            } else {
                const $h3d = $('<h3>').text(`The ${enemyship.name} attempted to attack but missed`).css('color', 'white');
                $('body').append($h3d)
            }
            attackCheck(alienFleet)
            if (playerSpaceship.hull <= 0) {
                empty()
                const $p4 = $('<h2>').text(`The enemy ship destroyed your hull`).css('color', 'red').appendTo(`body`)
                const $p4a = $('<h2>').text(` --GAME OVER-- `).css('color', 'red').appendTo(`body`)
                thisEndsTheGameByForcingAnError
            }
        } else if (enemyship.hull <= 0){
            const $h1b = $('<h2>').text(`You destroyed an ${enemyship.name}!`).css('color', 'red');
            $('body').append($h1b)
            
            alienFleet.splice(alienFleet.indexOf(enemyship), 1)
            return
        }
    }
}

$(()=>{
const stats = () => {
    const $aside = $('<aside>')
    $('body').append($aside)
}
const startGame = () => {
    const $button = $('<button>').attr('id', `1`).text(`Start Game`)
    const $h1 = $('<h1>').text('Welcome to Space Battle').css('color', 'white')
    const $h2 = $('<h2>').text('Are you ready for battle?!').css('color', 'white')
    $('body').append($h1)
    $('body').append($h2)
    $('body').append($button)
    $('#1').on('click', runGame);
}

// missleCount = 2
generateFleet()
let fleet = alienFleet.length-1
const attack = () => {
    combat(alienFleet[fleet])
    fleet--
    const $clear = $('<button>').attr('id', `3`).text(`Return`)
    $('body').prepend($clear)
    $(`#3`).on(`click`, () => {
        
    empty()
    if(fleet < 0){
        empty()
        const $p1 = $('<h2>').text('YOU DEFEATED THE ENEMY FLEET!').css('color', 'white')
        const $p1a = $('<h2>').text('CONGRATULATIONS!').css('color', 'red')
        $('body').append($p1)
        $('body').append($p1a)
        thisEndsTheGameByForcingAnError
    }
    else {
    game()
}
})
}


const game = () => {
    $('h1').remove()
    $('h2').remove()
    $('h3').remove()
    $('#6').remove()
    const $buttonPlay = $('<button>').attr('id', `1`).text(`Attack`)
    const $buttonEnd = $('<button>').attr('id', `2`).text(`Retreat`)
    $('body').prepend($buttonEnd)
    $('body').prepend($buttonPlay)
    $('#1').on('click', attack)
    $('#2').on('click', retreatGame);

    if(alienFleet.length > 0 && playerSpaceship.hull > 0) {
        const $h2 = $('<h2>').text(`There are ${alienFleet.length} ships in the enemy fleet.
                    Would you like to attack the enemy or retreat?`).css('color', 'white')
                    $('body').append($h2)
    } else if (alienFleet.length <= 0){
        const $p1 = $('<h2>').text('YOU DEFEATED THE ENEMY FLEET!').css('color', 'white')
        const $p1a = $('<h1>').text('CONGRATULATIONS!').css('color', 'red')
        $('body').append($p1)
        $('body').append($p1a)
        thisEndsTheGameByForcingAnError
      
    } else {
        const $p2 = $('<h2>').text('YOU DIED -- GAME OVER!').css('color', 'red').appendTo(`body`)
        // thisEndsTheGameByForcingAnError
    }
}

const runGame = () => {
    $('#1').remove()
    $('h1').remove()
    $('h2').remove()
    const $buttonNext = $('<button>').attr('id', `6`).text(`Next`)
    
    //append fleet and player info to header to keep tstats at top
    const $h1 = $('<h1>').text('Space Battle').css('color', 'white')
    const $h2 = $('<h2>').text('--Captain--').css('color', 'white')
    const $h3a = $('<h3>').text(`We are currently out in deep space, within the Andromeda Galaxy, near the planet Zebes`).css('color', 'white')
    const $h3b = $('<h3>').text(`Your ship, the ${playerSpaceship.name}, has just come in contact with a fleet of Alien ships. They appear to be hostile and we will have to either fight or retreat`).css('color', 'white')
    $('body').append($h1)
    $('body').append($h2)
    $('body').append($h3a)
    $('body').append($h3b)
    $('body').append($buttonNext)
    $(`#6`).on('click', game)
}

startGame()
});
