// const vehicle = ["blue", 4000, 1989];

// const car = {
//     color:'blue',
//     hp: 4000,
//     year: 1989,
// }
// console.clear()
// console.log(vehicle[2])
// console.log(car.hp)

// // ========================================================================================
// how to alter the contents of an object
// house = {
//     doors: 9
// }
// console.clear()
// console.log(house)

// house.windows = 30

// console.log(house)

// house.hasGarden = true

// console.log(house)

// house.windows = 29

// console.log(house)

// delete house.windows

// console.log(house)

// ========================================================================================
// Can leave the object empty with curly brackets and input info later
// const mogwai = {}

// mogwai.name = "Gizmo";
// mogwai.size = "very small";
// console.log(mogwai)

// const dealership = {
//     car1: { color: 'Blue'},
//     car2: { color: 'Red'},
// }
// console.log(dealership)

// ========================================================================================
// Use object properties with coditionals

// const bourough = {
//     name1: 'Brooklyn',
//     name2: 'The Bronx',
// }
// console.log(bourough)

// const obj = {
//     whatevs: 'hi',
// count: 4
// } 
// if (obj.whatevs == 'hi') {
//     console.log('okay')
// }

// for(let i = 0; i <= obj.count; i++){
//     console.log(i)
// }
// //if(condition tests for truthy unless otherwise speciied)
// if(obj.something){
//     console.log('truthy')
// } 
// if(obj.idontexist){
//     console.log('This exists')
// } else {
//     console.log('This does not exist')
// }
// console.log(obj.idontexist)

// ========================================================================================
// Objects inside of objects
// const adventurer = {
//     name: 'Timothy',
//     hitpoints: 10,
//     belongings: ['sword', 'potion', 'tums'],
//     companion: {
//         name: 'Velma',
//         type: 'Bat',
//         companion: {
//             name: 'Tim',
//             type: 'Parasite',
//             belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
//         }
//     }
// }

// console.log(adventurer.companion.name);
// console.log(adventurer.companion.companion.belongings[2])

// for(let i = 0; i < adventurer.belongings.length; i++){
//     //this counts each belonging out in the console until the length is reached
//     console.log(adventurer.belongings[i])
// }

// ========================================================================================
// Use an Array of objects
// const movies = [
//     { 
//         Title: 'Tokyo Story',
//         year: 2002,
//         rathing: 'G'

//     },
//     { 
//         Title:'Paul Blart: Mall Cop'
//     }, 
//     { 
//         Title: "L'Avventura" 
// }]
// for(let i = 0; i <= movies.length; i++){
// console.log(movies[i])
// }

// ========================================================================================
// More Combinations
// done through a functions
// const foo = {
//     someMethod:()=>{
//         if (3 < 4) {
//             console.log('sure it is')
//         }
//         console.log('oh hai');
//         // return 'oh hai';
//     }
// };
// //logs 'oh hai!' through the function
// foo.someMethod();
// //would have to retun to do it this way cause the parameters are set within the curly brackets
// console.log(foo.someMethod())

// ========================================================================================
// You can store and array in an array
// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ];

// for(let i = 0; i <= foo.length; i++){
//     console.log(foo[i])
// }
// console.log(foo[1][2]); //1,2
// console.log(foo[2][2]); //1,2

// ========================================================================================
// You can store a function in an array
// const foo = [
//     1,
//     "hi",
//     () => {
//         console.log('fun');
//     }
// ];

// foo[2]();


// You can create a function that returns an object. Just add the . after the () since the return value of the function is an object
// const summonBird = ()=>{
//     return {
//         color: 'blue'
//     }
// };

// console.log(summonBird().color);
// You can create a function that returns an array. Just add [index] after the () since the return value of the function is an array
// const createBag = () => {
//     return ['apple', 'banana', 'pear']
// }
// console.log(createBag())



// You can create a function that returns a function    . Just add the () after the first () since the return value of the first function is another function
// const generateSpell = ()=>{
//     return ()=>{
//         console.log('fireball!');
//     }
// };
// generateSpell()();