//====================================SCOPE RESTRICTION==============================================//
// Global scope is the the part of your code outside of any enclosing functions
// Local scope is the parts of your code that are inside functions.
// const exampleFunction = () => {

//     const num = 100  //locally stored function
//     console.log(num * num)
// }
// console.log(num) ///trying to access globally scoped variable

//const item = 'spicy meatball'

// const exampleFunction = () => {
//     console.log(`${item} within function`);
// }
// exampleFunction() //executes function

// const setItem = () => {
//     const item = 'spicey meatball'
//     return item
// }

// const getItem = () => {
//     return item
// }

// console.log(setItem())

//console.log call function{retrunGreeting}, runs that code and it calls for returnName function 

// const returnName = () => {
//     return 'Brendan'
// }

// const returnGreeting = () => {
//     return `oh hi ${returnName()}`
// }

// console.log(returnGreeting())


//below is locally scoped and consol.log is trying to globally scope it, it will not find it as its localled scoped
// {
//     const item = 'spicy meatball'
// }
// console.log(item)


//vr will allow the variable to be chaged but could cause issues so not a good practice
// {
//     var item = 'spicy meatball'
// }
// console.log(item)
//       control panel
// for (let i = 0; i < 100; i++){
//     console.log(`inside the block ${i}`)
// }
// console.log(`outside of the scope ${i}`)
// if (true) {
//     const num = 100
//     console.log(num)
// }

// const age = 21
// let message = ''

// if (age < 21) {
//     message = 'You cannot buy the beer'
// } else {
//     message = 'you can buy the beer'
// }
// console.log(message)


//  const words = 'thats a ...'
//  {
//      const item = 'Spicy Meatball'
//      const start = 'mama mia!'
//      {
//          console.log(start)
//          console.log(words)
//          console.log(item)
//      }
//  }

//=================================Recusion======================================
// //if num is set to ten this function will count down from 10 until it gets to 0 console.logging each num
// const countdown = num => {
//     if (num != 0) {
//       console.log(num)
//       countdown(num - 1)
//     }
//   }


