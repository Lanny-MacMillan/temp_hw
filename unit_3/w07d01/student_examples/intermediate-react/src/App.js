import './App.css';

import {useState, useEffect} from 'react'
import axios from 'axios'

import Character from './components/Character'

const App = () => {

  const [characters, setCharacters] = useState([])
// request from an API
  const getCharacters = () => {
    axios.get('https://api.disneyapi.dev/characters').then((response) => {
      console.log(response)
      console.log(response.data.data)
      // pulls all data from API and sets its into out useState array
      setCharacters(response.data.data)
    })
  }

  // load page then run function
  useEffect(() => {
    getCharacters()
    // empty brackets are to keep from an infinite loop, listening, we dont want it to listen just get info
    // if [character]was in brackets it would listen for a change in chaacters then change
  }, [])


  return (
    <>
      <h1>Characters</h1>
      <div>
        {characters.map((character) => {
          return <Character character={character} key={character._id}/>
        })}
      </div>

      {/* this would set a key ID if there were not any available */}
      {/* <h1>Characters</h1>
      <div>
        {characters.map((character, i) => {
          return <Character character={character} key={i}/>
        })}
      </div> */}
    </>
  )
}

export default App



// =========================FIRST PART==========================

// FIrst Part
// import logo from './logo.svg';
// import './App.css';

// import {useState} from 'react'

// const App = () => {

//   const [characters, setCharacters] = useState([
//     {name: 'snow white', inMovie: true},
//     {name: 'stitch', inMovie: false},
//     {name: 'moana', inMovie: true},
  
//   ])

//   const ariel = () => {
//     // copies the characters array and adds ariel to it
//     setCharacters([...characters, {name: 'ariel', inMovie: true}])
//   }

//   return (
//     <>
//       <h1>App</h1>
//       <button onClick={ariel} >Click me for Ariel</button>

//       <ul>
//         {/* loop and character set as argurment to be called on below */}
//         {characters.map((character) => {
//           return (
//             <>
//             {/* Ternary Operators */}
//               {character.inMovie ? <li>Character is in a movie: {character.name}</li> : <li>Character is not in a movie: {character.name}</li>}
//             </>
//           )
//         })}
//       </ul>
//     </>
//   )
// }

// export default App