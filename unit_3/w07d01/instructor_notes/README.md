## Intermediate React

## Setup

- npx create-react-app intermediate-react
- Delete all starter code in App.js
- npm start to get the app running

## Basic App.js Setup

```js
import React, { useState } from 'react'

const App = () => {
  return (
    <div>
      <h1>App</h1>
    </div>
  )
}

export default App
```

## Map over state to create multiple elements

- Lets dynamically create multiple elements based on our state which we will just set as an array of characters for now.
- Basic map syntax:

```js
somearray.map((element) => {
  return something
})
```

- Lets add state to our component so we have something to map over:

```js
let [characters, setCharacters] = useState(['snow white', 'stitch', 'moana'])
```

- Then lets map over that array to create an unordered list inside of our return statement:

```js
<ul>
  {characters.map((character) => {
    return <li>{character}</li>
  })}
</ul>
```

### Ternary Operators

- Quick review of ternary operators:

```js
const name = 'brendan'
//if name is 'brendan' result = 'Name is brendan' else result = 'Name is not brendan'
const result = name === 'brendan' ? 'Name is brendan' : 'Name is not brendan'
console.log(result)
```

- Lets incorporate ternary operators into our code. First lets add a piece of state to use as our conditional in the ternary:

```js
let [inMovie, setInMovie] = useState(true)
```

- Next lets adjust our map a bit so that if inStock is true we will have some in stock text if not some out of stock text:

```js
{
  characters.map((character) => {
    return (
      <div>
        {inMovie ? <li>Is in movie: {character}</li> : <li>Not in movie: {character}</li>}
      </div>
    )
  })
}
```

## AJAX and React

- Lets start with a barebones React App for our AJAX example.
- We're going to be using an npm package called axios to make all of our requests within react, lets run `npm i axios` and then in App.js under where we pull in react lets add:

```js
import axios from 'axios'
```

- Next we're going to need another hook called useEffect, which will only run once when the application loads.

```js
import React, { useState, useEffect } from 'react'
```

- Now we can make our axios request:

```js
const getCharacters = () => {
  axios.get('https://api.disneyapi.dev/characters').then((response) => {
    setActivity(response.data.data)
  })
}

// passing an empty array as the second argument will prevent an infinite loop by mounting and then unmounting after it has run once
useEffect(() => {
  getCharacters()
}, [])
```

- Lets render a character name and image inside the map:

```js
return (
  <div>
    <hr/>
    <p>{character.name}</p>
    <img src={character.imageUrl} />
  </div>
)
```

- Complete App.js: 
```js
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {

  const [characters, setCharacters] = useState([])

  const getCharacters = () => {
     axios.get('https://api.disneyapi.dev/characters').then((response) => {
        setCharacters(response.data.data)
     })
  }

  useEffect(() => {
     getCharacters()
  }, [])

  return (
    <>
      <h1>Disney Characters</h1>
      {characters.map((character) => {
        return (
          <div>
            <hr/>
            <p>{character.name}</p>
            <img src={character.imageUrl}/>
          </div>
        )
      })}
    </>
  )
}

export default App;
```

## Multiple Components with Props

- Sometimes our applications will get too big to keep everything in one component, lets refactor our app so that we can have two components.
- First lets mkdir src/components
- Then touch src/components/Character.js
- Lets move our div with the p tag and img tag to the new Character component:

```js
import React from 'react'

const Character = (props) => {
  return (
    <div>
      <hr>
      <p>{props.character.name}</p>
      <img src={props.character.imageUrl} />
    </div>
  )
}

export default Character
```

- Next we need to import our Character component into our App componet:

```js
import Character from './components/Character'
```

- Lets render the Character component and pass in a character value (Inside of the curly braces. The value comes from state)  as the prop character (the left side of the equal sign. What the prop will be called in the component it is being passed into) into the Character component:

```js
return (
  <div>
    {characters.map((character) => {
        return (
          <div>
            <Character character={character} />
          </div>
        )
      })}
    
  </div>
)
```

- Lastly we can get rid of that warning we are getting by giving each item in the map a unique key, lucky for us the API we are pulling from provides an id value for us to use: 

```js
return (
  <div>
    {characters.map((character) => {
        return (
          <div>
            <Character character={character} key={_id}/>
          </div>
        )
      })}
    
  </div>
)
```
