//========================HOMEWORK NOTES===================================
// Great job on the day 3 homework! The fizzbuzz section is a little off. Look at your console logs and see if you're getting the results you expect. Overall I see your logic is mostly correct, it would just need a few tweaks! For Waldo you need to figure out how you would access the array that has Neff in it. Something like whereIsWaldo[2][2] . For the kitten Section, make sure your if statement is INSIDE the for loop or else you will get an error since i only exists within the for loop code block. let meow = Math.floor(Math.random() * 3); That's how you get back a random element from the catTalk array. I will mark this as complete 



// ////////////////////////////////
// // Easy Going
// ////////////////////////////////
// var i = 0
// while(i <= 20){
//     console.log(i)
//     i++
// }


// ////////////////////////////////
// // Get Even
// ////////////////////////////////
// var i = 0
// while(i <= 200){
//     console.log(i)
//     i += 2
// }


////////////////////////////////
// Fizz Buzz
////////////////////////////////
//I realize this is extra code when i could simply write the variable in the console.log() and forgo the F var, but i could use the extra reps
// let F = [ 
//     "Fizz",
//     "Buzz",
//     "FizzBuzz"
// ]
// for (let i = 1; i <= 100; i++){
//     if (i % 3 !== 0){
//     console.log(F[0]);
//     }
// else if (i % 5 == 0) {
//     console.log(F[1])
//     }
// else if (i % 3 == 0 && i % 5 == 0){
//     console.log(F[3])
// }
// else {
//     console.log(i)
// }
// }
// for (let i = 1; i <= 100; i++){
//     if (i % 3 == 0 && 1 % 5 == 0) {
//         console.log("Fizzbuzz")
//     } else if (1 % 3 == 0) {
//         console.log("Fizz")
//     } else if (i % 5 == 0) {
//         console.log("buzz")
//     } else {
//         console.log(i)
//     }
// }


////////////////////////////////
// Wild Wild Life
// ////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// plantee[2]=5001
// console.log(plantee)

// wolfy[3]="Gotham City"
// console.log(wolfy)

// dart.push("Hawkins")
// console.log(dart)

// wolfy.shift([0])
// wolfy.unshift("Gameboy")
// console.log(wolfy)


// ////////////////////////////////
// // Yell at the Ninja Turtles
// ////////////////////////////////
// const ninjaTurtles = [
//     "Donatello",
//     "Leonardo",
//     "Raphael",
//     "Michealangelo"
// ]
// for (const toUpperCase of ninjaTurtles) {
//     console.log(toUpperCase)
    
// }


// ////////////////////////////////
// // Methods, Revisited
// ////////////////////////////////
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies.indexOf('Titanic'))

// favMovies.sort();
// console.log(favMovies)

// favMovies.pop(favMovies.length) //goodbye fast and furious
// console.log(favMovies)

// favMovies.push("Guardians of the Galaxy")
// console.log(favMovies)

// console.log(favMovies.reverse())

// const firstElementShift = favMovies.shift() 
// console.log(favMovies)
// console.log(firstElementShift)

// console.log(favMovies.unshift('Clerks', 'Mallrats', 'Clerks 2'));
// console.log(favMovies)

// console.log(favMovies.indexOf('Django Unchained'))
// favMovies.splice(3, 1, "Avatar")
// console.log(favMovies)
// // not permanent its just changed within that line of code, that original array still holds the original list

// //I spun my wheels too long and had to count the array...
// //Im storing the value of my variable in secondHalf and accessing the slice from that value only
// const secondHalf = favMovies.slice(9)
// console.log(secondHalf)

// console.log(favMovies[18])
// // i would imagine it would show the [18] in the array as it stands now but im getting 'undefined' I have all my console.log()s commented out while i ran this

// // no const is perfect. the const will keep the array and brackets permanently, the info inside can be altered. I would use a LET when we are setting a condition with a new variable, like storing the value of our slice to use elsewhere in the code 


// ////////////////////////////////
// // Where is Waldo
// ////////////////////////////////
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                      ["Lucinda", "Jacc", "Neff", "Snoop"],
//                      ["Petunia", ["Baked Goods", "Waldo"]]];

// //console.log(whereIsWaldo.indexOf('Eggbert')) // array[1]
// whereIsWaldo.splice(1, 1)
// whereIsWaldo[2].splice(2,1, "no one")
// console.log(whereIsWaldo)
// // whereIsWaldo.splice(2, 3, 'No one') //had trouble replacing NEFF with NO ONE, not sure what i was doing wrong



// ////////////////////////////////
// //  Excited Kitten
// ////////////////////////////////

// //???????????????????????? couldnt figure this ou, spent longer than id like to admit trying to work it out but no luck

// const catTalk = [
//     "Human why are you taking pictures of me?...",
//     "...the catnip made me do it...",
//     "...why does the red dot always get away..."
// ]
// for (let i = 0; i <= 20; i++){
//     console.log(i)
// }
// if(i % 2 === 0){
//     console.log(i)
//     }
// const meow = Math.random() < 0.5
// catTalk = [meow]


// ////////////////////////////////
// //  Find the Median
// ////////////////////////////////

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// const Median = Math.floor(nums.length / 2)
// console.log(Median)
// //console.log(nums.length / 2) //find the mean by dividing the .length by 2

// // I get 12 when the exected is supposed to be 15
// // Expected output: => 15






