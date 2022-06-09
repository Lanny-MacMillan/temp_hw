### Setup

1. Get the Django API that's in todays student_examples up and running.
1. Make a new project via create react app in today's student_examples directory
   `npx create-react-app contacts_frontend`.
1. Delete templete code in `App.js` and replace with:

    ```js
    import React, { useState, useEffect } from 'react'

    const App = () => {
      return (
        <>
          <h1>App</h1>
        </>
      )
    }

    export default App
    ```

### Read

1. Add state to the `App` component:

    ```js
    let [people, setPeople] = useState([])
    ```

1. Add axios `npm i axios`.
1. Import axios `import axios from 'axios'`.
1. Fetch and log people using axios and useEffect:

    ```js
    const getPeople = () => {
     axios
       .get('http://localhost:8000/api/contacts')
       .then(
         (response) => setPeople(response.data),
         (err) => console.error(err)
       )
       .catch((error) => console.error(error))
    }

    useEffect(() => {
     getPeople()
    }, [])
    ```

1. Check react dev tools to see if state was set properly.
  <br/>![devtools](https://i.imgur.com/qwb9RyR.png)
1. Add our map functionality to display values on the page:

    ```js
    <div className="people">
     {people.map((person) => {
       return (
         <div className="person" key={person.id}>
           <h4>Name: {person.name}</h4>
           <h5>Age: {person.age}</h5>
         </div>
       )
     })}
    </div>
    ```

### Create

- `mkdir src/components`
- `touch src/components/Add.js`

1. Create our basic `Add` form component with pieces of state for each value we need to pass up to ("lift" up to)`App.js`.

    ```js
    import React, { useState, useEffect } from 'react'

    //only need props as a param if we are passing in props to this component (we are going to here).
    const Add = (props) => {
      let emptyPerson = { name: '', age: '' }
      const [person, setPerson] = useState(emptyPerson)
      return (
        <>
          <form>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" />
            <br />
            <br />
            <label htmlFor="age">Age: </label>
            <input type="number" name="age" />
            <input type="submit"/>
          </form>
        </>
      )
    }

    export default Add
    ```

1. Write our create functions (handleSubmit/handleChange):

    ```js
    const handleChange = (event) => {
      setPerson({ ...person, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      props.handleCreate(person)
    }
    ```

1. Update our form with the proper properties and functions attached:

    ```js
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" value={person.name} onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="age">Age: </label>
      <input type="number" name="age" value={person.age} onChange={handleChange} />
      <input type="submit" />
    </form>
    ```

1. In `App.js`, write our function for handling the creation of the new person after lifting state from the `Add` component:

    ```js
    const handleCreate = (addPerson) => {
      axios
        .post('http://localhost:8000/api/contacts', addPerson)
        .then((response) => {
          console.log(response)
          getPeople()
        })
    }
    ```

1. Render `Add` in `App.js` and pass in handleCreate as a prop:

    ```js
    <>
      <Add handleCreate={handleCreate} />
      <div className="people">
        {people.map((person) => {
          return (
            <div className="person" key={person.id}>
              <h4>Name: {person.name}</h4>
              <h5>Age: {person.age}</h5>
            </div>
          )
        })}
      </div>
    </>
    ```

### Delete

1. Create our delete function:

    ```js
    const handleDelete = (event) => {
      axios
        .delete('http://localhost:8000/api/contacts/' + event.target.value)
        .then((response) => {
          getPeople()
        })
    }
    ```

1. Create our delete button:

    ```js
    <button onClick={handleDelete} value={person.id}>
      X
    </button>
    ```

### Update

- `touch src/components/Edit.js`

1. Create our `Edit` component:

    ```js
    import React, { useState } from 'react'

    const Edit = (props) => {
      let emptyPerson = { name: '', age: '' }
      const [person, setPerson] = useState(emptyPerson)

      return (
        <>
          <details>
            <summary>Edit Person</summary>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                value={person.name}
                onChange={handleChange}
              />
              <br />
              <br />
              <label htmlFor="age">Age: </label>
              <input
                type="number"
                name="age"
                value={person.age}
                onChange={handleChange}
              />
              <input type="submit" />
            </form>
          </details>
        </>
      )
    }

    export default Edit
    ```

1. Create our functions for update in `App.js` first:

    ```js
    const handleUpdate = (editPerson) => {
      console.log(editPerson)
      axios
        .put('http://localhost:8000/api/contacts/' + editPerson.id, editPerson)
        .then((response) => {
          getPeople()
        })
    }
    ```

1. And then in Edit.js:

    ```js
    const handleChange = (event) => {
      setPerson({ ...person, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      props.handleUpdate(person)
    }
    ```

1. Next, let's render `Edit` in `App.js` and pass in our handleUpdate function. We are also going to need the id of the person to pass into the edited person:

    ```js
    <div className="person" key={person.id}>
      <h4>Name: {person.name}</h4>
      <h5>Age: {person.age}</h5>
      <Edit handleUpdate={handleUpdate} id={person.id} />
      <button onClick={handleDelete} value={person.id}>
        X
      </button>
    </div>
    ```

1. Lastly, let's update the initial state of `Edit` to include the id of the person that we passed in:

    ```js
    let emptyPerson = { id: props.id, name: '', age: '' }
    ```
