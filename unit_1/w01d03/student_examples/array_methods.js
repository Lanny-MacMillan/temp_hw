const favMovies = [
    'Interstellar',
    'There Will Be Blood',
    'Jurassic Park',
    'The Room',
    'Monty Python: Holy Grail',
    'Black Panther',
    'Shutter Island',
    'Alien',
    'Terminator',
    'LOTR',
    'Lion King',
    'Star Wars',
    'Happy Feet',
    'Anchorman',
    'Shrek',
    'Little Miss Sunshine',
    'Inception',
    'The Secret Life of Walter Mitty',
    'The Emoji Movie',
    'Paddington 2'
  ]
const A = favMovies.join(' & ')
  console.log(`This is a list of movies everyone likes ${A}`)

// index of
// console.log(favMovies.indexOf('Lion King'))
// //if you know a string, array.indexOf("known string") will return the index number of the string
// console.log(favMovies.indexOf('Lion King', 11))
// // definitons inside the ()  (searchElement, fromIndex)
// // searchElement is the string to search for, fromIndex is the index to start searching from.
// //indexOf will always start from index 0 without a fromIndex input
// //this code checks if the string is inside of the array
// //since indexOf returns -1 if it's not in the array, !== -1 is just checking to make sure the string is in the array
// let toFind = 'Lion Kings'
// if (favMovies.indexOf(toFind) !== -1) {
//   console.log(favMovies.indexOf(toFind))
//   //prints index number if in the area
// } else {
//   console.log(-1);
//   // returns -1 since it's not in the area
// }


// push
//pushes item to the end of the array,You can push multiple elements by separating each element with a comma.
//favMovies.push("Stepbrothers")
//console.log(favMovies)


// pop
//removes the last element of the array and returns it - this also chanes the lengthof the array
// console.log(favMovies.pop())
// //assigns a variable to store the pop
// let last = favMovies.pop()
// console.log(last)


// reverse
//The reverse method is a way of reversing the order of an array. An easy way to test the functionality of this method is by using the below code. The result will be that the array will now log in the opposite order.
//console.log(favMovies.reverse())


// unshift
//unshift( ) is a method that adds one or more elements to the beginning of an array and returns the new length of the array
// console.log(favMovies.unshift(‘Spider Man’));
// console.log(favMovies);
// console.log(favMovies.unshift(‘Bridesmaids’,‘Mean girls’));
// console.log(favMovies); (edited) 


// shift
//Removes the first element of an array
// favMovies.shift();
// console.log(favMovies)
// //Returns array w/o first element
// console.log(favMovies.shift())
// //Returns only first element
// const first = favMovies.shift()
// console.log(first)
// console.log(favMovies)
// console.log(first)
// //makes the shifted element a const


// join
// const A = favMovies.join(' & ')
// console.log(`This is a list of movies everyone likes ${A}`)


// includes
// // Notes: includes is a true/false based method that searches the array for a specific value/values. You can also set a specific starting index in the array to begin to search
// // Syntax: array.includes(searchElement) OR array.includes(searchElement, fromIndex)
// //Examples: 
// console.log(favMovies.includes('Harry Potter'));
// // this will be false because Harry Potter isn't in our array
// console.log(favMovies.includes('Interstellar', 1));
// // this will be false because the Interstellar is before index 1
// console.log(favMovies.includes('LOTR', 4));
// this will be true because LOTR is included after index 4
//source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes


// slice
// console.log(favMovies.slice(4));
// console.log(favMovies.slice(4, 10));
// console.log(favMovies.slice(-1));
// let newMovieList = favMovies.slice(5, 10)
// console.log(newMovieList);
// Breakout Room 9
// The .slice method returns a "shallow copy"(non-destructive) of the array containing only the values between the start and end points.
// Example:
// favMovies.slice(4, 10);
//     would return
// [
//   'Monty Python: Holy Grail',
//   'Black Panther',
//   'Shutter Island',
//   'Alien',
//   'Terminator',
//   'LOTR'
// ]
//
// You can also use a negative number in .slice(). It will return that many elements from the end of the array.
//
// Example:
//
// favMovies.slice(-3);
//     would return
// [
//   'The Secret Life of Walter Mitty',
//   'The Emoji Movie',
//   'Paddington 2'
// ]


// Splice
//   adds and/or removes array elements
// Syntax:
//   arrayName.splice(index#, deletCount#, item1, item2, ..., itemN)
//     -index # is required, it set the position to add or remove from
//     -deleteCount# the quantity you want to delete starting at the index# selected. If you do not want to delete anything put a 0 here.
// const favMovies = [
//   'Interstellar',
//   'There Will Be Blood',
//   'Jurassic Park',
//   'The Room',
//   'Monty Python: Holy Grail',
//   'Black Panther',
//   'Shutter Island',
//   'Alien',
//   'Terminator',
//   'LOTR',
//   'Lion King',
//   'Star Wars',
//   'Happy Feet',
//   'Anchorman',
//   'Shrek', //14
//   'Little Miss Sunshine',
//   'Inception',
//   'The Secret Life of Walter Mitty',
//   'The Emoji Movie',
//   'Paddington 2'
// ]
// //Will take the 14th spot in the array (enters in front of Shrek)
// favMovies.splice(14, 0, "*   MR. DEEDS", "*   50 FIRST DATES")
// console.log(favMovies);
// //Will delet Shrek and insert into the 14th spot
// favMovies.splice(14, 1, "*   MR. DEEDS", "*   50 FIRST DATES")
// console.log(favMovies);
// //Will insert these movies at the 14th spot. It will also delete the three next items 'Shrek','Little Miss Sunshine', and 'Inception',
// favMovies.splice(14, 3, "Mr. Deeds", "50 First Dates")
// console.log(favMovies);


// sort
favMovies.sort();
console.log(favMovies);
// the sort function sorts a given array in the order of ascending then compares their sequences of UTF-16 code unit values.
// So for the first character A-Z and numbers 0-9 to max in the array.

// output:
// [
//   "Alien",
//   "Anchorman",
//   "Black Panther",
//   "Happy Feet",
//   "Inception",
//   "Interstellar",
//   "Jurassic Park",
//   "LOTR",
//   "Lion King",
//   "Little Miss Sunshine",
//   "Monty Python: Holy Grail",
//   "Paddington 2",
//   "Shrek",
//   "Shutter Island",
//   "Star Wars",
//   "Terminator",
//   "The Emoji Movie",
//   "The Room",
//   "The Secret Life of Walter Mitty",
//   "There Will Be Blood",
// ];