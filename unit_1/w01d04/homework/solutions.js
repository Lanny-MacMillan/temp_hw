//===================================VERBAL QUESTIONS=======================================
//What is the difference between a parameter and an argument?
//ANSWER-Parameter is a variable set inside the (), and Arguement is a value set that a function will call on when it invoked

//Within a function, what is the difference between return and console.log?
//ANSWER-console.log() will print whatever is inside the (), good for testing code within the console/terminal. Return is used for returning a value function in js


//=======================================Palindrome=========================================
// // Write a function checkPalindrome that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with capital letters.

// ONE WAY TO DO IT
// const checkPalindrome = (str) => {
//     let isPalindrome = false
//     // splits str and reverses them into an array then joins them back together
//     let strReverse = str.split("").reverse("").join("");
//     console.log(strReverse)
//     if (strReverse === str) {
//         isPalindrome = true
//         console.log(isPalindrome)
//         return isPalindrome 
//     } else {
//         console.log(isPalindrome)
//         return isPalindrome
//     }
// }   
// checkPalindrome("racecar")

//ANOTHER WAY
// const checkPalindrome = (pal) => {
//     let palReverse = pal.split("").reverse().join("");
//     if (pal === palReverse) {
//       console.log(`${pal} is a palindrome`);
//     } else {
//       console.log(`${pal} is NOT a palindrome`);
//     }
// }
// checkPalindrome("racecar")


//=======================================Sum Array=========================================
// // Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array. Use a for loop within the function to iterate over the array and sum the contents. Use a variable such as

// let array = [1, 2, 3,4 ,5 ,6]
// let array2 = [1, 2, 2, 3 ,8]

// const sumArray = (arr) => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }   
//     console.log(sum)
// } 

// sumArray(array2)


//=======================================Prime Numbers=========================================
// Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.
//This one is very confusing to me, im not sure how to execute the math function properly, hopeful to gain some clarity on how to achieve this. Hoping we will go over in class

// const checkPrime = (num) => {
//     let isPrime = true
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i == 0) {
//             isPrime = false
//             //console.log(isPrime)
//             return isPrime
//         }
//     }
//     //console.log(isPrime)
//     return isPrime
// }

// // checkPrime(0)

// const printPrimes = (upToNum) => {
//     for (let i = 0; i <= upToNum; i ++) {
//         if (checkPrime(i) == true) {
//             console.log(i)
//         }
//     }
// }
// printPrimes(97)

//FISRT STEP 
//shouldnt run i off of 0 cause 0 is a prime and would mess up the code
// const checkPrime = (prime) => {
//     for (let i = 0; Math.sqrt(); i <= 97; i++){
//         if (prime % i === 0) {
//             return true
//         } else {
//             return false
//         }
//     }
// }

// checkPrime()


//=======================================Rock Paper Scissors=========================================
// I got the 2 functions written to get a randomized choice for player and computer and the third to decideWinner. But im having some syntax errors with my decideWinner func that compares the two for a winner(ln 105 + ln 109) both on my "if else". I got the wode written out but cant seem to figure out this bug to continue. im so close!

const choices = ['rock', 'paper', 'scissors']

const randomMove = () => {
    return choices[Math.floor(math.random()*3)]
}

constRockPaperScissors = (compMove, userMove) => {
    compMove = randomMove()
    if (compMove === userMove) {
        console.log("Its a tie!")
    } else if (compMove == choices[0] && userMove == choices[1]) {
        console.log("Paper beat rock")
    } else if (compMove == choices[0] && userMove == choices[1]) {
        console.log("Paper beat rock")
}
}
















// const choices = ["Rock", "Paper", "Scissor"]

// //find computer move
// function getComputerMove() {
//     var computerMove = Math.random();
//     if (computerMove < 0.33) {
//         console.log("computer chose rock");
//         computerMove === choices[0];
//     } else if (computerMove < 0.66) {
//         console.log("computer chose paper");
//         computerMove === choices[1];
//     } else {
//         console.log("computer chose scissors");
//         computerMove === choices[2];
//     }
//     return computerMove;
// }

// //find player move
// function getUserMove() {
//     var userMove = Math.random();
//     if (userMove < 0.33) {
//         console.log("user chose rock");
//         userMove === choices[0];
//     } else if (userMove < 0.66) {
//         console.log("user chose paper");
//         userMove === choices[1];
//     } else {
//         console.log("user chose scissors");
//         userMove === choices[2];
//     }
//     return userMove;
// }

// //compare arguements to decide a winner
// function decideWinner() {
//     if (userMove === computerMove) {
//         console.log("Its a Tie!");
//     } else if (userMove === choices[0] && computerMove === choices[1]) {
//         console.log("Bummer, Computer wins this one!")
//     } else (userMove === choices[0] && computerMove ===[2]); {
//         console.log("Hell yes! Player wins, time to retire a champion!")
//     } else if (userMove === choices[1] && computerMove === choices[0]) {
//         console.log("Hell yes! Player wins, time to retire a champion!");
//     } else (userMove === choices[1] && computerMove ===[2]); {
//         console.log("Bummer, Computer wins this one!");
//     } else if (userMove === choices[2] && computerMove === choices[0]) {
//         console.log("Bummer, Computer wins this one!");
//     } else (userMove === choices[2] && computerMove ===[1]); {
//     console.log("Hell yes! Player wins, time to retire a champion!");
//     }
// }
// //gets computer input function
// getComputerMove()
// //gets user input function
// getUserMove()
// //decides winner function
// decideWinner()