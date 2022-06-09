// const vehicle = ['blue', 4000, 1989];

// const car = {
//     color: 'blue',
//     hp: 4000,
//     year: 1989
// }
//
// // console.log(vehicle[2]);
// console.log(car.year);
// console.log(car.hp);
// console.log(car.color);

// const house = {
//     doors: 9
// }
//
// console.log(house);
//
// house.windows = 30;
//
// console.log(house);
//
// house.hasGarden = true;
//
// console.log(house);
//
// house.windows = 29;
//
// console.log(house);

// const mogwai = {};
//
// mogwai.name = "Gizmo";
//
// console.log(mogwai);
//
// mogwai = { name: "Gizmo" }
// console.log(mogwai);

// const bourough = {
//     name: 'Brooklyn',
//     name: 'The Bronx'
// }
//
// console.log(bourough);

// const obj = {
//     whatevs: 'hi',
//     count: 4,
//     something: 'wuttt'
// }
//
// if(obj.whatevs == 'hi'){
//     console.log('okay');
// }
//
// for(let i = 0; i < obj.count; i++){
//     console.log(i);
// }
//
// if(obj.something){
//     console.log('truthy');
// }
//
// if(obj.idontexist){
//     console.log('this exists');
// } else {
//     console.log('does not exist');
// }
//
// console.log(obj.idontexist);

// const myArr = [1,2]
// console.log(myArr);
//
// myArr[1] = 'hi'
//
// console.log(myArr);

// const adventurer = {
//     name:'Timothy',
//     hitpoints: 10,
//     belongings: ['sword', 'potion', 'tums'],
//     companion: {
//         name:'Velma',
//         type:"Bat",
//         companion: {
//             name:"Tim",
//             type: "Parasite",
//             belongings: ['SCUBA tank', 'Rogan josh', 'health insurance']
//         }
//     }
// }

// console.log(adventurer.companion.name);
//
// console.log(adventurer.companion.companion.name);

// console.log(adventurer.companion.companion.belongings[2]);

// console.log(adventurer.belongings[2]);
//
// for(let i = 0; i < adventurer.belongings.length; i++){
//     console.log(adventurer.belongings[i]);
// }

// const movies = [
//     {
//         title: 'tokyo story',
//         year: 2002,
//         rating: 'G'
//     },
//     {
//         title: 'paul blart: mall cop'
//     },
//     {
//         title: "L'Avventura"
//     }
// ];
//
// console.log(movies[0].title);
//
// for(let i = 0; i < movies.length; i++){
//     console.log(movies[i].title);
// }

// const foo = {
//     someMethod: () => {
//         console.log('oh hai');
//         // return 'oh hai';
//     }
// }
//
// foo.someMethod();

// console.log(foo.someMethod());

// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ]
//
// console.log(foo[1][2]);

// const foo = [
//     1,
//     'hi',
//     () => {
//         console.log('fun');
//     }
// ]
//
// foo[2]();
// foo[2]();


const summonBird = () => {
    return {
        color: 'blue'
    }
}

console.log(summonBird().color);

const createBag = () => {
    return ['apple', 'banana', 'pear']
}
console.log(createBag()[1]);

const generateSpell = () => {
    return () => {
        console.log('fireball');
    }
}

generateSpell()();
