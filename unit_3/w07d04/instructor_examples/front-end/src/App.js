import logo from './logo.svg';
import './App.css';

import {useState} from 'react';
import axios from 'axios';

// import React from 'react';
// const useState = React.useState;

// const myObj = {
//     asdf : true
// }
// // const property = myObj.property;
// // console.log(property);
// const {asdf} = myObj;
// console.log(asdf);

// const myArray = [1,2,3];
// const [first, second] = myArray;
// console.log(first);
// console.log(second);

const App = () => {

    const [newDescription, setNewDescription] = useState('');
    const [newComplete, setNewComplete] = useState(false);
    // console.log(newDescription);
    // console.log(setNewDescription);
    // const stateArray = useState('');
    // const newDescription = stateArray[0]
    // const setNewDescription = stateArray[1]
    // // console.log(stateArray);
    // console.log(newDescription);
    // console.log(setNewDescription);



    const handleNewDescriptionChange = (event) => {
        // console.log(event.target.value);
        setNewDescription(event.target.value)
    }

    const handleNewCompleteChange = (event) => {
        // console.log(event.target.checked);
        setNewComplete(event.target.checked);
    }

    const handleNewTodoFormSubmit = (event) => {
        event.preventDefault();
        // console.log(newDescription);
        // console.log(newComplete);
        axios.post(
            'http://localhost:3000/todos',
            {
                description:newDescription,
                complete: newComplete
            }
        )
    }

    return (
        <main>
            <h1>Todos List</h1>
            <section>
                <h2>Create a Todo</h2>
                {newDescription} - {newComplete.toString()}
                <form onSubmit={handleNewTodoFormSubmit}>
                    Description: <input type="text" onChange={handleNewDescriptionChange}/><br/>
                    Is Complete: <input type="checkbox" onChange={handleNewCompleteChange}/><br/>
                    <input type="submit" value="Create To Do"/>
                </form>
            </section>
        </main>
    );
}

export default App;
