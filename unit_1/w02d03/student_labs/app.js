// Landscaper
// Kai B. and Lanny M.

const prompt = require('prompt-sync')();
// const username = prompt('What is your name? ');
// console.log(`Your name is ${username}`);

//You are starting a landscaping business, but all you have are your teeth.
//Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.
//need to keep track of money earned
//container for tools
//different tools will have differnet stats
//teeth generate $1 a day
//scissors cost $5 
//Scissors generate $5 a day
//push lawnmower for $25
//tools
//end game at start

// function to end game before it starts
const endGame = () => {
    console.log(`''  ''   '''      '''  ' '  '''   '''  '  '  '  ''   '''''        ''   ''   '''  ''    ''`)
    console.log(`    '      '    '     ''    '   Fine stay home and do nothing   '   '       '     '      `)
    console.log(`''  ''   '''      '''  ' '  '''   '''  '  '  '  ''   '''''        ''   ''   '''  ''    ''`)
    process.exit()
}
// functon to end game after completion
const endGame1 = () => {
    console.log(`'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''`)
    console.log(`'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''`)
    console.log(`''''''''''''''''''''''''You've WON! Congratulations your rich!'''''''''''''''''''''''''''`)
    console.log(`'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''`)
    console.log(`'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''`)
    const playerName = prompt(`                            High Score! Enter your name `)
    console.log(``)
    console.log(`========HIGH SCORES==========`)
    console.log(`${playerName}..................${bank}`)
    console.log('Kai Brown................1000')
    console.log(`Lanny Mac................1000`)
    console.log(`DHP.......................960`)
    console.log(`Seymour B.................950`)
    console.log(`Pat S.....................940`)
    console.log(`............................0`)
    console.log(`............................0`)
    console.log(`............................0`)
    console.log(``)
    console.log(``)
    console.log(``)
    process.exit()
}

// function for mid game exit
const endGame2 = () => {
    console.log(`''  ''   '''      '''  ' '  '''   '''  '  '  '  ''   '''''        ''   ''   '''  ''    ''`)
    console.log(` '   '        '     '     ' '  working hard is not for everyone     '   '          '  '  `)
    console.log(`''  ''   '''      '''  ' '  '''   '''  '  '  '  ''   '''''        ''   ''   '''  ''    ''`)

    process.exit()
}
const resetGame = () => {
    bank = 0
    console.log("you must love the grind")
    prepPlayer()
}
// object to hold tools aquired
const tools = [
{   name: 'teeth', 
    cost: 0,
    moneyEarned: 5,
},
{   name: 'rustyScissors',
    cost: 5,
    moneyEarned: 5,
},
{   name: 'pushLawnmowers',
    cost: 25,
    moneyEarned: 25,
},
{   name: 'batteryLawnmower',
    cost: 250,
    moneyEarned: 100,
},
{   name: 'starvingStudents',
    cost: 500,
    moneyEarned: 250,
},
]


// the money earned
let bank = 0

// tools aquired
let playerTools = []

// workday functions / level 1
const workDay = () => {
    for (let i = 0; i <= 5; i++){
    bank += tools[0].moneyEarned
    console.log(`'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''`)
    console.log(`                       Work Day: 1          Bank Total: ${bank}                          `)
    console.log(`'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''`)
    console.log(``)
    console.log(``)
    console.log(`           Using your ${tools[0].name}, you earned ${tools[0].moneyEarned} dollar today. Keep it up!`)
    console.log(`           You've earned ${bank} dollar(s) so far. Let's get back out there tomorrow!`)
    console.log(``)
    console.log(``)
    if (bank >= 5) {
        let playerReady = prompt(`               Do you want to go to the store and get a new tool?? y/n  `)
        if (playerReady == 'y' || playerReady == 'yes' || playerReady == 'Y' || playerReady == 'YES') {
        buyTool()
        } else {
            console.log(`               Enjoy using your ${tools[0].name}!`)
            workDay()
        }
    }
    console.log(``)
    console.log(`       '  '    '    '       all done on to the next lawn  '    '    ' '  '         ' '   `)
    console.log(``)
workDay()
    }
}

// workday functions / level 2
const workDay1 = () => {
    for (let i = 0; i <= 25; i+=5){
        if (bank >= 1000) {
            endGame1()
        } else {
    bank += tools[1].moneyEarned
    console.log(`'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''`)
    console.log(`                       Work Day: 2          Bank Total: ${bank}                          `)
    console.log(`'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''`)
    console.log(``)
    console.log(``)
    console.log(`               Using your ${tools[1].name}, you earned ${tools[1].moneyEarned} dollar today. Keep it up!`)
    console.log(`               You've earned ${bank} dollar(s) so far. Let's get back out there tomorrow!`)
    console.log(``)
    console.log(``)
    if (bank >= 25) {
        let playerReady = prompt(`               Do you want to go to the store and get a new tool?? y/n  `)
        if (playerReady == 'y' || playerReady == 'yes' || playerReady == 'Y' || playerReady == 'YES') {
        buyTool()
        } else {
            console.log(`               Enjoy using your ${tools[0].name}!`)
            workDay1()
        }
    }
    console.log(``)
    console.log(`       '  '    '    '       all done on to the next lawn  '    '    ' '  '         ' '   `)
    console.log(``)
workDay1()
    }
    }
}

// workday functions / level 3
const workDay2 = () => {
    for (let i = 0; i <= 250; i+=50){
        if (bank >= 1000) {
            endGame1()
        } else {
    bank += tools[2].moneyEarned
    console.log(`'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''`)
    console.log(`                       Work Day: 3          Bank Total: ${bank}                          `)
    console.log(`'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''`)
    console.log(``)
    console.log(``)
    console.log(`               Using your ${tools[2].name}, you earned ${tools[2].moneyEarned} dollar today. Keep it up!`)
    console.log(`               You've earned ${bank} dollar(s) so far. Let's get back out there tomorrow!`)
    console.log(``)
    console.log(``)
    if (bank >= 250) {
        let playerReady = prompt(`               Do you want to go to the store and get a new tool?? y/n  `)
        if (playerReady == 'y' || playerReady == 'yes' || playerReady == 'Y' || playerReady == 'YES') {
        buyTool()
        } else {
            console.log(`               Enjoy using your ${tools[1].name}!`)
            workDay2()
        }
    }
    console.log(``)
    console.log(`       '  '    '    '       all done on to the next lawn  '    '    ' '  '         ' '   `)
    console.log(``)
workDay2()
        }
    }
}

// workday functions / level 4
const workDay3 = () => {
    for (let i = bank; i <= 500; i+=100){
        if (bank >= 1000) {
            endGame1()
        } else {
    bank += tools[3].moneyEarned
    console.log(`'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''`)
    console.log(`                       Work Day: 4          Bank Total: ${bank}                          `)
    console.log(`'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''`)
    console.log(``)
    console.log(``)
    console.log(`               Using your ${tools[3].name}, you earned ${tools[3].moneyEarned} dollar today.Keep it up!`)
    console.log(`               You've earned ${bank} dollar(s) so far. Let's get back out there tomorrow!`)
    console.log(``)
    console.log(``)
    if (bank >= 500) {
        let playerReady = prompt(`               Do you want to go to the store and get a new tool?? y/n  `)
        if (playerReady == 'y' || playerReady == 'yes' || playerReady == 'Y' || playerReady == 'YES') {
        buyTool()
        } else {
            console.log(`               Enjoy using your ${tools[2].name}!`)
            workDay3()
        }
    }
    console.log(``)
    console.log(`       '  '    '    '       all done on to the next lawn  '    '    ' '  '         ' '   `)
    console.log(``)
workDay3()
        }
    }
}

// workday functions / level 5 / final level
const workDay4 = () => {  
    for (let i = bank; i <= 1000; i+=500){
        if (bank >= 1000) {
            endGame1()
            } else {
            bank += tools[4].moneyEarned
            console.clear()
            console.log(`'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''`)
            console.log(`                       Work Day: 5          Bank Total: ${bank}                          `)
            console.log(`'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''`)
            console.log(``)
            console.log(``)
            console.log(`               Using your ${tools[4].name}, you earned ${tools[4].moneyEarned} dollar today. Keep it up!`)
            console.log(`               You've earned ${bank} dollar(s) so far. Let's get back out there tomorrow!`)
            console.log(``)
            console.log(``)
            console.log(`       '  '    '    '       all done on to the next lawn  '    '    ' '  '         ' '   `)
            console.log(``)
            console.log(``)
            workDay4()

        }
    }
}

//function that gives player an option to exit game and then send to correct level
const startNewDay1 = () => {
    let playerReady = prompt(`                    Are you ready to begin your next workday? y/n `)
    if (playerReady == 'y' || playerReady == 'yes' || playerReady == 'Y' || playerReady == 'YES') {
        console.clear()
        workDay1()
    } else {
        endGame2()
    }
}
const startNewDay2 = () => {
    let playerReady = prompt(`                    Are you ready to begin your next workday? y/n `)
    if (playerReady == 'y' || playerReady == 'yes' || playerReady == 'Y' || playerReady == 'YES') {
        console.clear()
        workDay2()
    } else {
        endGame2()
    }
}
const startNewDay3 = () => {
    let playerReady = prompt(`                    Are you ready to begin your next workday? y/n `)
    if (playerReady == 'y' || playerReady == 'yes' || playerReady == 'Y' || playerReady == 'YES') {
        console.clear()
        workDay3()
    } else {
        endGame2()
    }
}
const startNewDay4 = () => {
    let playerReady = prompt(`                    Are you ready to begin your next workday? y/n `)
    if (playerReady == 'y' || playerReady == 'yes' || playerReady == 'Y' || playerReady == 'YES') {
        console.clear()
        workDay4()
    } else {
        endGame2()
    }
}
//function to buy a tool with earned money, loop based off money in our bank
const buyTool = () => {
    if (bank == 5 || bank < 25) {
        console.clear()
        console.log(`''  ''   '''     '' '  ' '  '''   '''  '  '  ''  '   '' '   ''''  ''     ''   '  ''    ''`)
        console.log(`                             -------------------------------                             `)
        console.log(`   '   '     '   ''          'WELCOME TO LANDSCAPE SUPPLIES'      ''       '   '    '    `)
        console.log(`                             -------------------------------                             `)
        console.log(`   '   '     '   ''         '  '      Bank Total: $${bank}     '   '   '   ''      '    '    `)
        console.log(`                             -------------------------------                             `)
        console.log(`''   ''   '''     ' ''  ' '  '''   '''  '  '  ''  '   ''' '  ''''  ''     '' ''  ''    ''`)
        console.log(``)
        let playerChoice = prompt(`               Would you like to buy the ${tools[1].name} for $5? y/n `)
        if (playerChoice.toLowerCase() === "y" || playerChoice.toLowerCase() === "yes") {
        console.log(`                            You bought the ${tools[1].name}`)
        playerTools[1] = tools[1]
        bank -= tools[1].cost
        startNewDay1()
        //===========
    } else {
        console.log(`                            Enjoy using your ${tools[0].name}!`)
        workDay()
    }     
    } else if (bank == 25 || bank < 250) {
        console.clear()
        console.log(`''  ''   '''     '' '  ' '  '''   '''  '  '  ''  '   '' '   ''''  ''     ''   '  ''    ''`)
        console.log(`                             -------------------------------                             `)
        console.log(`   '   '     '   ''          'WELCOME TO LANDSCAPE SUPPLIES'      ''       '   '    '    `)
        console.log(`                             -------------------------------                             `)
        console.log(`   '   '     '   ''         '  '      Bank Total: $${bank}     '   '   '   ''      '    '    `)
        console.log(`                             -------------------------------                             `)
        console.log(`''   ''   '''     ' ''  ' '  '''   '''  '  '  ''  '   ''' '  ''''  ''     '' ''  ''    ''`)
        console.log(``)
        let playerChoice = prompt(`               Would you like to buy the ${tools[2].name} for $25? y/n `)
        if (playerChoice.toLowerCase() === "y" || playerChoice.toLowerCase() === "yes") {
        console.log(`                            You bought the ${tools[2].name}`)
        playerTools[2] = tools[2]
        bank -= tools[2].cost
        startNewDay2()
        //===========
    } else {
        console.log(`                            Enjoy using your ${tools[1].name}!`)
        workDay1()
    }   
    } else if (bank == 250 || bank < 500) {
        console.clear()
        console.log(`''  ''   '''     '' '  ' '  '''   '''  '  '  ''  '   '' '   ''''  ''     ''   '  ''    ''`)
        console.log(`                             -------------------------------                             `)
        console.log(`   '   '     '   ''          'WELCOME TO LANDSCAPE SUPPLIES'      ''       '   '    '    `)
        console.log(`                             -------------------------------                             `)
        console.log(`   '   '     '   ''         '  '      Bank Total: $${bank}     '   '   '   ''      '    '    `)
        console.log(`                             -------------------------------                             `)
        console.log(`''   ''   '''     ' ''  ' '  '''   '''  '  '  ''  '   ''' '  ''''  ''     '' ''  ''    ''`)
        console.log(``)
        let playerChoice = prompt(`               Would you like to buy the ${tools[3].name} for $250? y/n `)
        if (playerChoice.toLowerCase() === "y" || playerChoice.toLowerCase() === "yes") {
        console.log(`                            You bought the ${tools[3].name}`)

        playerTools[3] = tools[3]
        bank -= tools[3].cost
        startNewDay3()
        //===========
    } else {
        console.log(`                            Enjoy using your ${tools[2].name}!`)
        workDay2()
    } 
    } else if (bank >= 500) {
        console.clear()
        console.log(`''  ''   '''     '' '  ' '  '''   '''  '  '  ''  '   '' '   ''''  ''     ''   '  ''    ''`)
        console.log(`                             -------------------------------                             `)
        console.log(`   '   '     '   ''          'WELCOME TO LANDSCAPE SUPPLIES'      ''       '   '    '    `)
        console.log(`                             -------------------------------                             `)
        console.log(`   '   '     '   ''         '  '      Bank Total: $${bank}     '   '   '   ''      '    '    `)
        console.log(`                             -------------------------------                             `)
        console.log(`''   ''   '''     ' ''  ' '  '''   '''  '  '  ''  '   ''' '  ''''  ''     '' ''  ''    ''`)
        console.log(``)
        let playerChoice = prompt(`              Would you like to buy the ${tools[4].name} for $500? y/n `)
        if (playerChoice.toLowerCase() === "y" || playerChoice.toLowerCase() === "yes") {
        console.log(`                            You bought the ${tools[4].name}`)
        playerTools[4] = tools[4]
        bank -= tools[4].cost
        startNewDay4()
        }
    } else {
        console.log(`                            Enjoy using your ${tools[3].name}!`)
        workDay4()
        }
}
// player prep function
const prepPlayer = () => {
    console.clear()
    console.log(`''  ''   '''     ''''  ' '  '''   '''  '  '  '   '''     '    ''''  ''       ''  ''    ''`)
    console.log(`'   '''   '''     '    ' '  '''   '''  '  '  '  ''   '  ''  ''''  ''     '   ''  ''    ''`)
    console.log(`   '   '     '   ''          '  '-----------------------   '      ''       '   '    '    `)
    console.log(`       '     '        '   ''      Welcome to Landscaper  '            ''       ''    '   `)
    console.log(`   '   '     '   ''          '  '-----------------------'   '      ''       '   '   '    `)
    console.log(`''  ''   '''      '''  ' '  '''   '''  '  '  '  ''   '''''        ''   ''   '''  ''    ''`)
    console.log(`''   '   '''     ''''  ' '  '''   '''  '  '  ''     '''  '  ''''  ''     ''   '  ''    ''`) 
    console.log(``)
    console.log(`                     please enlarge your terminal for optimal gameplay                   `)
    console.log(``)
    console.log(``)
    let playerReady = prompt(`                        Are you ready to begin your workday? y/n `)
    if (playerReady == 'y' || playerReady == 'yes' || playerReady == 'Y' || playerReady == 'YES') {
        console.clear()
        workDay()
    } else {
        endGame()
    }
}
prepPlayer()



// Teacher Notes
// const tools = [
//     {   name: 'teeth', 
//         cost: 0,
//         moneyEarned: 5,
//     },
//     {   name: 'rustyScissors',
//         cost: 5,
//         moneyEarned: 5,
//     },
//     {   name: 'pushLawnmowers',
//         cost: 25,
//         moneyEarned: 25,
//     },
//     {   name: 'batteryLawnmower',
//         cost: 250,
//         moneyEarned: 100,
//     },
//     {   name: 'starvingStudents',
//         cost: 500,
//         moneyEarned: 250,
//     },
//     ]
    
// // the money earned
// let bank = 0

// let toolIndex = 0

// // tools aquired
// let player = {
//     tool: tools[0].tool,
//     bankAccount: 0,
// }


// const mowLawn = () => {
//     player.bankAccount += player.tool.cost
//     console.log(player.bankAccount)
//     if (player.bankAccount >= tools[toolIndex + 1].cost) {
//         upgrade()
//     } else {
//         mowLawn()
//     }
// }
// const upgrade = () => {
//     for (let i =0; i < tools.length; i++) {
//         if (player.bankAccount >= tools[i].cost) {
//             let playerChoice = prompt(`do you want to upgrade tool?`)
//             if(playerChoice === 'y') {
//             player.tool = tools[i +1].tool
//             } else {
//             console.log("ahh saving your money")
//             } 
        
//         } else {
//             console.log("Keep working for the money")
//     }
// }
// }

// const startGame = () => {
//     console.log("Welcome to landscaper")
//     let choice = prompt("do you want to play")
//     if (choice == 'y') {
//         mowLawn()
//     }
// }