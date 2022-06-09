
// // Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.
// //console.log(printGreeting("Slimer"));

// const printGreeting = name =>{
//     console.log(`Hello, there ${name}`);
// }
// printGreeting('Slimer')


// // Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.
// const names = [
//     "lanny",
//     "Alyssa",
//     "Aria",
//     "Melody"
// ]
// const reverseWordOrder = names => {
//     console.log(`${names}`)
// }
// reverseWordOrder(names.reverse())


// program to print prime numbers between the two numbers

// take input from the user

let array = [1, 2, 3,4 ,5 ,6]
let array2 = [1, 2, 2, 3 ,8]

const sumArray = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }   
    console.log(sum)
} 

sumArray(array2)



const checkPalindrome = (pal) => {
    let palReverse = pal.split("").reverse().join("");
    if (pal === palReverse) {
      console.log(`${pal} is a palindrome`);
    } else {
      console.log(`${pal} is NOT a palindrome`);
    }
}
checkPalindrome("racecar")