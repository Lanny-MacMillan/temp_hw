//SECTION 1


//What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
//DRY-Don't Repeat Yourself. You can save yourself hundreds or thousands of lines of code using other methods. For exapmle using a for or when loop to count to 100 or 1000 instead of writing out a thousand lines of code

//What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources
//Cont is a constant, information inside wont change. (Name,birthplace,etc)

//let is a variable assigned within a set of curly brackets {}, we can add multiple lines of code within the let
//Var is Variable and we assign a var with a datatype (var = 0, var = num,)



//SECTION 2

// const a = 4
// const b = 53
// const c = 57
// const d = 16
// const e = 'Kelvin'
// const f = false
//console.log(a < b)
//console.log(c > d)
//console.log('name' === 'name') or console.log('name' == 'name')
//console.log(a < b < c)
//console.log(a == a != d) //this one was a little confusing
//console.log(e !== 'Kevin')
//console.log(48 !== '48')
//console.log(f !== e)
//const g = 0
//console.log(g)
// let g = a + b
// console.log(g)

// Did you use const, let or var? Why did you choose the one you chose?
//I used let. I chose that cause we are letting g be the sum of two other const. using const works as well but using var gave me an error saying a was not defined

// What happens if you don't use const, let or var? Do you get an error? If so what does it say?
//if i dont use any of them it still shows me 57, the sum of a and b in the console, but you cant reference or pull this info at all

// what happens if you write 10 = g?
//console.log will print out 10 instead of 57



// SECTION 3

// Is the code below an infinite loop? Why or why not?
//Yes i believe it is, we arent setting anything to stop the console from printing ('do not run this loop') indefinitely.
// while (true) {
//     console.log('Do not run this loop')
//   }


// Is the code below an infinite loop? Why or why not?
//No it is not, its says while (runProgram) is true, console.log ('Do not run this loop'), the sets runProgram to false
// const runProgram = true

// while (runProgram) {
//   console.log('Do not run this loop')
//   runProgram = false
// }

//lets letters = 'A' in our loop
// let letters = 'A'
//setting a starting value to i
// let i = 0
//starts a while loop that will run as long as i is greater than 20
// while (i < 20) {
//honestly im confused by this, seems like its saying add onto the original 'letters' value as its increased
//   letters += 'A'
//increments the value of i by 1
//   i++
//closes our while loop, code will run until the condition becomes false, in this when i < 20
// }

// console.log(letters)

//my expected result is the computer will count to 21 and print "A"
//I was wrong the computer printed out 21 "A" in a single line, this was my other idea that may happen but I wouldnt have guessed it would be in one line. I would think it would be listed out like when we count.



// SECTION 4

// FOR LOOP
//  (initial condition; while condition; repeating condition)
// for (let i = 0; i < 100; i++) {
//     console.log("Without you, today's emotions are the scurf of yesterday's")
//   }

//FOR LOOP 2
// for (let i =0; i <= 999; i++){
//     console.log(i)
// }

//LOOP IN REVERSE
// for (let i = 999; i >= 0; i--){
//     console.log(i)
// }

//MORE COUNTING
// for (let i = 1; i < 10; i++){
//     console.log("The value of i is: " + i + " of 10")
// }

