# Object-ception

## Lesson Link

[Object-ception](https://www.youtube.com/watch?v=OvGU-pSAhgs&list=PLdnONIhPScSQqXfMndCJRYWQl-0uApORf&index=4)

## Lesson objectives

_After this lesson students will be able to:_

1. Use an array inside an object
1. Iterate over an array that is within an object
1. Use an object within an object
1. Use an object within an object within an object
1. Use an array within an object within an object within an object
1. Use an array of objects
1. Combine objects, arrays, and functions

## Use an array inside an object

Let's model an adventurer who has belongings (a list)

```javascript
const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"]
}
```

Access all values in the player.belongings array:

```javascript
console.log(adventurer.belongings)
```

Access a specific item in the belongings array:

```javascript
console.log(adventurer.belongings[0])
```

## Iterate over an array that is within an object

```javascript
for (let i=0; i < adventurer.belongings.length; i++) {
	console.log(adventurer.belongings[i]);
}
```

## Use an object within an object

Our adventurer now has a companion! Our companion, a **bat**, is an object with its own properties.

Add the `companion` object to the `adventurer` object:

```javascript
const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
		name: "Velma",
		type: "Bat"
	}
}
```

Access the companion object:

```javascript
console.log(adventurer.companion)
```

> => { name: "Velma", type: "Bat" }

Access the companion's name:

```javascript
console.log(adventurer.companion.name)
```

> => "Velma"

Access the companion's type:

```javascript
console.log(adventurer.companion.type)
```

> => "Bat"

## Use an object within an object within an object

Velma the bat also has a companion, a magical **parasite** called Tim.

Let's add **Tim** to our data:

```javascript
const adventurer = {
	name: Timothy,
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
		name: "Velma",
		type: "Bat",
		companion: {
			name: "Tim",
			type: "Parasite"
		}  
	}
}
```

**What would you write to:**

* console.log Tim's **type**

## Use an array within an object within an object within an object

Tim has a **bag of holding** and can carry an infinite number of belongings.

Let's add an array of belongings to Tim:

```javascript
const adventurer = {
	name: 'Timothy',
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
		name: "Velma",
		type: "Bat",
		companion: {
			name: "Tim",
			type: "Parasite",
			belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
		}  
	}
}
```

**What would your write to:**

* console.log "health insurance"

## Use an array of objects

A common pattern you will start to see everywhere (especially in Unit 2 and onwards) is an **array of objects**.

An array of objects can look like this:

```javascript
const movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ];
```

These objects have no names, they are just anonymous objects packed into an array.

You could reference them with indexes as usual:

```javascript
console.log(movies[0]);
```

You could reference the properties by first asking for the index, then the property:

```javascript
console.log(movies[0].title);
```

You could loop over the array and just print all of the titles:

```javascript
for (let i=0; i < movies.length; i++) {
	console.log(movies[i].title);
}
```

## More Combinations

You can create a property for an object that is a function (method)

```javascript
const foo = {
    someMethod:()=>{
        console.log('oh hai');
    }
};

foo.someMethod();//logs 'oh hai!'
```

You can store an array in an array

```javascript
const foo = [
    ["0,0", "0,1", "0,2"],
    ["1,0", "1,1", "1,2"],
    ["2,0", "2,1", "2,2"]
];

foo[1][2]; //1,2
```

You can store a function in an array

```javascript
const foo = [
    1,
    "hi",
    ()=>{
        console.log('fun');
    }
];

foo[2]();
```

You can create a function that returns an object.  Just add the `.` after the `()` since the return value of the function is an object

```javascript
const summonBird = ()=>{
    return {
        color: 'blue'
    }
};

console.log(summonBird().color);
```

You can create a function that returns an array.  Just add `[index]` after the `()` since the return value of the function is an array

```javascript
const createBag = ()=>{
    return ['apple','banana','pear'];
};

console.log(createBag()[1]);
```

You can create a function that returns a function.  Just add the `()` after the first `()` since the return value of the first function is another function

```javascript
const generateSpell = ()=>{
    return ()=>{
        console.log('fireball!');
    }
};

generateSpell()();
```
