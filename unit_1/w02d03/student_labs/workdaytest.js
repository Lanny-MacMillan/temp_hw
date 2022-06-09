
const prompt = require('prompt-sync')();
​
const tools = [
    {   name: 'teeth', 
        cost: 0,
        moneyEarned: 1,
    },
    {   name: 'rustyScissors',
        cost: 5,
        moneyEarned: 5,
    },
    {   name: 'pushLawnmowers',
        cost: 25,
        moneyEarned: 50,
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
    //the money earned
    let bank = 0
    let playerTools = [
        {   name: 'teeth', 
        cost: 0,
        moneyEarned: 1,
    },
    {   name: 'rustyScissors',
        cost: 5,
        moneyEarned: 5,
    },
    {   name: 'pushLawnmowers',
        cost: 25,
        moneyEarned: 50,
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
​
   
//workday teeth
    let workDay = () => {
        for (let i = 0; i <= 5; i++){
        bank += tools[0].moneyEarned
        console.log(`Using your ${tools[0].name}, you earned ${tools[0].moneyEarned} dollar(s) today. Keep it up!`)
        console.log(`You've earned ${bank} dollar(s) so far. Let's get back out there tomorrow!`)
        if (bank >= 5) {
            let playerReady = console.log(`Do you want to go to the store and get a new tool?? y/n  `)
            prompt(playerReady)
        if (playerReady == 'y' || playerReady == 'yes' || playerReady == 'Y' || playerReady == 'YES') 
            console.log(`You bought the ${tools[1].name}`)
            playerTools[1] = tools[1]
            bank -= tools[1].cost
            }
    } 
​
//workday scissors
    let workDay1 = () => {
        
        if (playerTools[1].name == tools[1].name && bank > 0)
        for (let i = 0; i <= 25; i+=5){
        bank += tools[1].moneyEarned
        console.log(`Using your ${tools[1].name}, you earned ${tools[1].moneyEarned} dollar(s) today. Keep it up!`)
        console.log(`You've earned ${bank} dollar(s) so far. Let's get back out there tomorrow!`)
        if (bank >= 5) {
            let playerReady = prompt(`  Do you want to go to the store and get a new tool?? y/n  `)
        if (playerReady == 'y' || playerReady == 'yes' || playerReady == 'Y' || playerReady == 'YES') 
            buyTool()
            }
        }
    }
    }
//workday pullmower
    let workDay2 = () => {
        if (playerTools[2].name == tools[2].name)
        for (let i = 0; i <= 250; i+=50){
        bank += tools[2].moneyEarned
        console.log(`Using your ${tools[2].name}, you earned ${tools[2].moneyEarned} dollar(s) today. Keep it up!`)
        console.log(`You've earned ${bank} dollar(s) so far. Let's get back out there tomorrow!`)}
    }
//workday battery mower
    let workDay3 = () => {
        if (playerTools[3].name == tools[3].name)
        for (let i = bank; i <= 500; i+=100){
        bank += tools[3].moneyEarned
        console.log(`Using your ${tools[3].name}, you earned ${tools[3].moneyEarned} dollar(s) today. Keep it up!`)
        console.log(`You've earned ${bank} dollar(s) so far. Let's get back out there tomorrow!`)}
    }
//workday students
    let workDay4 = () => {
        if (playerTools[4].name == tools[4].name)
        for (let i = bank; i < 1000 ; i+=250){
        bank += tools[4].moneyEarned
        console.log(`Using your ${tools[4].name}, you earned ${tools[4].moneyEarned} dollar(s) today. Keep it up!`)
        console.log(`You've earned ${bank} dollar(s) so far. Let's get back out there tomorrow!`)}
    }
    
    const buyTool = () => {
        let playerChoice = prompt(`Would you like to buy the ${tools[1].name}?`)
        if (playerChoice.toLowerCase() === "y" || playerChoice.toLowerCase() === "yes") {
        console.log(`You bought the ${tools[1].name}`)
        bank -= tools[1].cost
        workDay()
        //===========
      } else {
        console.log(`Enjoy using your ${tools[0].name}!`)
        workDay()
      }     
//     }   else if (bank == 25 || bank < 250) {
//         let playerChoice = prompt(`Would you like to buy the ${tools[2].name}?`)
//         if (playerChoice.toLowerCase() === "y" || playerChoice.toLowerCase() === "yes") {
//         console.log(`You bought the ${tools[2].name}`)
//         bank -= tools[2].cost
//         workDay1()
//         //===========
//       } else {
//         console.log(`Enjoy using your ${tools[1].name}!`)
//         workDay1()
//       }   
  
//     } else if (bank == 250 || bank < 500) {
//         let playerChoice = prompt(`Would you like to buy the ${tools[3].name}?`)
//         if (playerChoice.toLowerCase() === "y" || playerChoice.toLowerCase() === "yes") {
//         console.log(`You bought the ${tools[3].name}`)
//         bank -= tools[3].cost
//         workDay2()
//         //===========
//       } else {
//         console.log(`Enjoy using your ${tools[2].name}!`)
        
//       }   
  
//     } else if (bank >= 500) {
//         let playerChoice = prompt(`Would you like to buy the ${tools[4]}?`)
//         if (playerChoice.toLowerCase() === "y" || playerChoice.toLowerCase() === "yes") {
//         console.log(`You bought the ${tools[4]}`)
//         bank -= tools[4].cost
//         workDay3()
//       } else {
//         console.log(`Enjoy using your ${tools[3]}!`)
//         workDay3()
//       }   
//     }
//   }
    }
    workDay()
    // console.log(`'n`)
    // console.log(`'n`)
    // workDay1()
    // console.log(`'n`)
    // console.log(`'n`)
    // workDay2()
    // console.log(`'n`)
    // console.log(`'n`)
    // workDay3()
    // console.log(`'n`)
    // console.log(`'n`)
    // workDay4()
    
​