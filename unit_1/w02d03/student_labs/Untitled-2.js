
//workday teeth
let workDay = () => {
    for (let i = 0; i <= 5; i++){
    bank += tools[0].moneyEarned
    console.log(`Using your ${tools[0].name}, you earned ${tools[0].moneyEarned} dollar(s) today. Keep it up!`)
    console.log(`You've earned ${bank} dollar(s) so far. Let's get back out there tomorrow!`)
    if (bank >= 5) {
        let playerReady = prompt(`Do you want to go to the store and get a new tool?? y/n  `)
        if (playerReady === 'y' || playerReady === 'yes' || playerReady === 'Y' || playerReady === 'YES'){ 
            buyTool()
        } else {
            console.log(`     okay...keep using your ${tools[0].name}      `)
            workDay()
        }
    }
} 
}
//workday scissors
let workDay1 = () => {  
    if (playerTools[1].name == tools[1].name && bank > 0)
    for (let i = 0; i <= 25; i+=5){
    bank += tools[1].moneyEarned
    console.log(`Using your ${tools[1].name}, you earned ${tools[1].moneyEarned} dollar(s) today. Keep it up!`)
    console.log(`You've earned ${bank} dollar(s) so far. Let's get back out there tomorrow!`)
    if (bank >= 25) {
        let playerReady = prompt(`Do you want to go to the store and get a new tool?? y/n  `)
    if (playerReady == 'y' || playerReady == 'yes' || playerReady == 'Y' || playerReady == 'YES'){ 
        buyTool()
        } else {
            console.log(`     okay...keep using your ${tools[1].name}      `)
            workDay1()
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
    console.log(`You've earned ${bank} dollar(s) so far. Let's get back out there tomorrow!`)
    if (bank >= 250) {
        let playerReady = console.log(`Do you want to go to the store and get a new tool?? y/n  `)
        prompt(playerReady)
    if (playerReady == 'y' || playerReady == 'yes' || playerReady == 'Y' || playerReady == 'YES'){ 
        buyTool()
        } else {
            console.log(`     okay...keep using your ${tools[2].name}      `)
            workDay2()
        }
    }
} 
}
//workday battery mower
let workDay3 = () => {
    if (playerTools[3].name == tools[3].name)
    for (let i = bank; i <= 500; i+=100){
    bank += tools[3].moneyEarned
    console.log(`Using your ${tools[3].name}, you earned ${tools[3].moneyEarned} dollar(s) today. Keep it up!`)
    console.log(`You've earned ${bank} dollar(s) so far. Let's get back out there tomorrow!`)
    if (bank >= 500) {
        let playerReady = console.log(`Do you want to go to the store and get a new tool?? y/n  `)
        prompt(playerReady)
    if (playerReady == 'y' || playerReady == 'yes' || playerReady == 'Y' || playerReady == 'YES'){ 
        buyTool()
        } else {
            console.log(`     okay...keep using your ${tools[3].name}      `)
            workDay3()
        }
    }
} 
}
//workday students
let workDay4 = () => {
    if (playerTools[4].name == tools[4].name)
    for (let i = bank; i < 1000 ; i+=250){
    bank += tools[4].moneyEarned
    console.log(`Using your ${tools[4].name}, you earned ${tools[4].moneyEarned} dollar(s) today. Keep it up!`)
    console.log(`You've earned ${bank} dollar(s) so far. Let's get back out there tomorrow!`)
    if (bank >= 1000) {
        endGame1()
        }
    }
}