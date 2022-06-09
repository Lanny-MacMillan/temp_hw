//functions stores a variable for future use

// const printBanner = () => {
//     console.log("======"),
//     console.log("Banner Text"),
//     console.log("======")
// }
// printBanner()

// const printSum = () => {
//     console.log(10+10)
// }
// printSum()


//====================================PARAMS==============================================//
//back ticks in console.log will pull the function in
//Function declaration
// const sayName = name => {
//     console.log(`Hello my name is ${name}`)
// }
// sayName('Frodo') /// function invocation() or function arguement
// sayName('Pippin')
// sayName('Sam')


// const calculateArea = (num1, num2) => {
//     console.log(num1 * num2)
// }
// calculateArea(4, 5)

//Write a function called minusOne that takes a parameter num. Assuming the argument is a number, print the argument -1.
//     func     parameter
// const minusOne = (num) => {
// console.log(num - 1)
// }
// minusOne(10)
// minusOne(100)




//====================================RETURN==============================================//
// // return is the only way to get a value out of a function into yhe place where you invoked that function
// const ten = () => {
//     return 10
// }
// console.log(8 + ten())

// const calculateArea = (num1, num2) => {
//     return num1 * num2
// }
// //function invocation wrapped inside of console.log()
// //console.log(calculateArea(2, 10))
// //                                      //6                   //36
// console.log(calculateArea(calculateArea(2, 3), calculateArea(9, 4)))
// //this runs 2,3 and gets 6, then it runs 9,4 and gets 36 and multiplies them together

// const testFunction = () => {
//     console.log('hello')
//     return
//     console.log('world')
// }

// testFunction()

//write a function
//take in a parameter[string]
//check if string is palindrome
    //reverse the string 
        //turn string into array
        //use array methos to reverse
        //turn back into a string
    //check original string against new reversed string