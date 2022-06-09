# Combining data types

## Lesson Objectives

1. Looping with nested arrays/objects
1. Combine objects, arrays, and functions more than one level deep

## Looping with nested arrays/objects

You can loop over an array in an object

```javascript
const foo = {
    someArray:[1,2,3]
};

for(let element of foo.someArray){
    console.log(element);
}

//same as above
for (let i = 0; i < foo.someArray.length; i++) {
    console.log(foo.someArray[i]);
}
```

You can loop over an array in an array.  Just add an additional [*index*] after the first [*index*]

```javascript
const foo = [
    ["0,0", "0,1", "0,2"],
    ["1,0", "1,1", "1,2"],
    ["2,0", "2,1", "2,2"]
];

for(let row of foo){
    for(let element of row){
        console.log(element);
    }
}

//same as above
for (let rowIndex = 0; rowIndex < foo.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < foo[rowIndex].length; columnIndex++) {
        console.log(foo[rowIndex][columnIndex]);
    }
}
```

## Combine objects, arrays, and functions with three levels of nesting

You can create a function that returns an object that has an array

```javascript
const summonServant = ()=>{
    return {
        bagOfStuff: ['clothes', 'food', 'keys']
    }
};

console.log(summonServant().bagOfStuff[1]);
```

You can create a function that returns an object that has an object

```javascript
const summonServant = ()=>{
    return {
        hat: {
            color: 'black'
        }
    }
};

console.log(summonServant().hat.color);
```

You can create a function that returns an object that has a method

```javascript
const summonServant = ()=>{
    return {
        washFeet:()=>{
            console.log('washing...');
        }
    }
};

summonServant().washFeet();
```

---

You can create an object that has a method that returns an object

```javascript
const wizard = {
    summonImp:()=>{
        return {
            color: 'black'
        }
    }
};

console.log(wizard.summonImp().color);
```

You can create an object that has a method that returns a function

```javascript
const wizard = {
    generateSpell:()=>{
        return ()=>{
            console.log('fireball')
        }
    }
}
wizard.generateSpell()();
```

---

You can create an array that has a function that returns an object

```javascript
const bag = [
    1,
    'apple',
    ()=>{
        return {
            name: 'bob'
        }
    }
];

console.log(bag[2]().name);
```

You can create an array that has a function that returns a function

```javascript
const bag = [
    1,
    'apple',
    ()=>{
        return ()=>{
            console.log('fireball!');
        }
    }
];

bag[2]()();
```

## Stretch: All the different possibilities of three level nesting:

There are many more possibilities of nesting objects, arrays, and functions.  See how many of these you can implement:

- object
    - object
        - object
- object
    - object
        - array
- object
    - object
        - function
- object
    - array
        - object
- object
    - array
        - array
- object
    - array
        - function
- object
    - function
        - object
- object
    - function
        - array
- object
    - function
        - function

---

- array
    - object
        - object
- array
    - object
        - array
- array
    - object
        - function
- array
    - array
        - object
- array
    - array
        - array
- array
    - array
        - function
- array
    - function
        - object
- array
    - function
        - array
- array
    - function
        - function

---

- function
    - object
        - object
- function
    - object
        - array
- function
    - object
        - function
- function
    - array
        - object
- function
    - array
        - array
- function
    - array
        - function
- function
    - function
        - object
- function
    - function
        - array
- function
    - function
        - function

## Stretch: Combine objects, arrays, and functions with four levels of nesting

You can create an object that has a method that returns an object that has an array

```javascript
const wizard = {
    summonImp:()=>{
        return {
            belongings: ['fire', 'sulfur', 'pear']
        }
    }
}

console.log(wizard.summonImp().belongings[1]);
```

You can create an object that has a method that returns an object that has an object

```javascript
const wizard = {
    summonImp:()=>{
        return {
            friend: {
                name: 'Bob'
            }
        }
    }
}

console.log(wizard.summonImp().friend.name);
```

You can create an object that has a method that returns an object that has another method

```javascript
const wizard = {
    summonImp:()=>{
        return {
            attack:()=>{
                console.log('attacking!!');
            }
        }
    }
}

wizard.summonImp().attack();
```

---

You can create an array that has a function that returns an object that has an array

```javascript
const bag = [
    1,
    'apple',
    ()=>{
        return {
            belongings: ['shoes', 'glasses']
        }
    }
];

console.log(bag[2]().belongings[1]);
```

You can create an array that has a function that returns an object that has an object

```javascript
const bag = [
    1,
    'apple',
    ()=>{
        return {
            friend: {
                name: 'sally'
            }
        }
    }
];

console.log(bag[2]().friend.name);
```

You can create an array that has a function that returns an object that has a method

```javascript
const bag = [
    1,
    'apple',
    ()=>{
        return {
            fireball:()=>{
                console.log('whoosh');
            }
        }
    }
];

bag[2]().fireball();
```
