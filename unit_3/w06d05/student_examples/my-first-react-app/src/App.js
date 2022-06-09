import logo from './logo.svg';
import './App.css';

import {useState} from 'react'

// ==============================
const App = () => {

  const [name, setName] = useState('Lanny')
  
  const changeName = (event) => {
    setName(event.target.value)
  }

  const sayHello = () => {
  console.log('hello')
  }

  return (
    //react fragments
    <>
      <h1>{name}</h1>
      <button onClick={sayHello}>Say Hi!</button>
      {/* <button onClick={changeName}>Change Name</button> */}
      <input type="text" onChange={changeName}/>
    </>
  )
}
// ==============================







// ==============================
// const App = () => {
//   return (
//     //react fragments
//     <>
//       <h1>Hello World!</h1>
//       <ComponentTwo/>
//     </>
//   )
// }

// const ComponentTwo = () => {
//   return (
//     <>
//     <h2>Second Component</h2>
//     </>
//   )
// }
// ==============================



export default App;
