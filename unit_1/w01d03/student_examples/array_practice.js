const satchel = [
    'yurt',//0
    'mattress',//1
    'candle',//2
    'map',//3
    'trendy sunglasses',//4
    'rupees',//5
    'Pepto Bismol',//6
    'boomerang'//7
  ]
  
  const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// // console.log(satchel[7])
// // console.log(squares[6])
// const index = 2

// console.log(satchel[index])//another way to pull index from satchel but its a const 

// //   const favFoods = [
//       'meat',
//       'pasta',
//       'bread'
//   ]
//   console.log(favFoods)


// //console.log the first element in the array
// make a variable called third and set it to the correct index position
// console.log the third element in the array by using the variable third
// console.log the last element in the array
const drSeussBooks = [
    'Cat in the Hat',
    'Green Eggs and Ham',
    'Grinch',
    'Thing One',
    'Thing Two',
    'Cindy Loo Who',
    'JoJo McDodd'
]
//console.log the first element in the array
//  console.log(drSeussBooks[0])

// make a variable called third and set it to the correct index position  
//   let third = drSeussBooks[2]
//   console.log(third)


// console.log the last element in the array
// console.log(drSeussBooks[6])

// alt console.log the last element in the array
//  let lastItem = drSeussBooks.length - 1
//  console.log(drSeussBooks[lastItem])

//change a name of a variable
// console.log(satchel)
// satchel[2]= 'glowing orb'
// console.log(satchel)

// Change the fifth element of the array to null, and console.log the array to confirm
// drSeussBooks [4] = 'null'
// console.log(drSeussBooks)

//bonus - add pyjama pants to the satchel array
// drSeussBooks[drSeussBooks.length] = 'pajama pants'
// console.log(drSeussBooks)

//In an array with an even number of elements, we could find the element that comes right after the middle:
//console.log(satchel[satchel.length/2])

//In an array with an even number of elements, we could find the element that comes right after the middle:
// const shortArray = ['first', 'middle', 'last']
// //mathfloor rounds down, mathround would round up cause its 1.5, mathceiling would round up
// console.log(shortArray[Math.floor(shortArray.length / 2)])

// for (let i = 0; i < satchel.length; i+= 2){
//     //backtics in the console.log so avoid alot of +''+''+''
//     console.log(`I take out and lovingly admire my ${satchel[i]} and put it back.${i}`)
// }

// for (let i = 0; i < satchel.length; i++){
//     //if i is equal to 0 (even) OR || if i is equal to 5
//     if (i % 2 === 0 || i === 5){
//         //console.log the conditionals met
//     console.log(`I take out and lovingly admire my ${satchel[i]} and put it back. Index: ${i}`)
//     }
// }

// // log the element index that is divisible by 2 and 3
// for (let i = 0; i < satchel.length; i++) {
//     if (i % 2 === 0 && i % 3 === 0) {
//       console.log('I have discovered a mysterious engraving on my ' + satchel[i])
//     }
//   }

//Multidimensional Arrays
// const pairs = [
//     // [0]       [1]
//     ['Harold', 'Kumar'], //[0]
//     ['Laurel', 'Hardy']  //[1]
// ]

// console.log(pairs[0][1])