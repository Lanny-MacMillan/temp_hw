import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {

const [newDescription, setNewDescription] = useState('')
const [newComplete, setNewComplete] = useState(false)
const [todos, setTodos] = useState([])



const handleNewDescription = (event) => {
  // console.log(event.target.value)
  setNewDescription(event.target.value)
}

const handleNewChange = (event) => {
  // console.log(event.target.checked)
  setNewComplete(event.target.checked)
}
const handleNewFormSubmit = (event) => {
  event.preventDefault();
  axios.post(
    'http://localhost:3000/todos',
    {
      description:newDescription,
      complete:newComplete
    }//then request is so we dont have to reload page on submission
  ).then(()=>{
    axios
        .get('http://localhost:3000/todos')
        .then((response)=>{
            setTodos(response.data)
        })
    })
  // console.log(newDescription)
  // console.log(newComplete)
}
const handleDelete = (todoData)=>{
  axios
      .delete(`http://localhost:3000/todos/${todoData._id}`)
      .then(()=>{
          axios
              .get('http://localhost:3000/todos')
              .then((response)=>{
                  setTodos(response.data)
              })
      })
}



useEffect(() => {
  axios
      .get('http://localhost:3000/todos')
      .then((response) => {
        // console.log(response.data)
        setTodos(response.data)
      })
}, [])


const handleToggleComplete = (todoData)=>{
  axios
      .put(
          `http://localhost:3000/todos/${todoData._id}`,
          {
            description:todoData.description,
            complete:!todoData.complete
          }
      )
      .then(()=>{
          axios
              .get('http://localhost:3000/todos')
              .then((response)=>{
                  setTodos(response.data)
              })
      })
}



  return (
    <main>
      <h1>To Dos List</h1>
      <section>
        <h2>Create a To do</h2>
        <form onSubmit={handleNewFormSubmit}>
          Description: <input type='text' onChange={handleNewDescription}/><br/>
          Is complete: <input type='checkbox' onChange={handleNewChange}/><br/>
          <input type='submit' value='Create To Do'/>
        </form>
      </section>
      <section>
    <h2>Todos</h2>
    <ul>
        {
          todos.map((todo) => {
            return <li 
            key={todo._id}
            onClick = {(event) => {
              handleToggleComplete(todo)
            }}
            >
            {
            (todo.complete) ? <strike>{todo.description}</strike>
                :
                todo.description
                }
                <button onClick={ (event) => { 
                  handleDelete(todo) 
                  }}>Delete</button>
              </li>
            })
        }
    </ul>
</section>
    </main>
  )
}
export default App;
