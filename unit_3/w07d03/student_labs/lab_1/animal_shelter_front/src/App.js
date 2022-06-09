import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Animal from './components/Animal'


function App() {
  const [name, setName] = useState('')
  const [species, setSpecies] = useState('')
  const [image, setImage] = useState('')
  const [animals, setAnimals] = useState([])

  
  const handleNewName = (event) => {
    // console.log(event.target.value)
    setName(event.target.value)
  }
  const handleNewSpecies = (event) => {
    // console.log(event.target.value)
    setSpecies(event.target.value)
  }
  const handleNewImage = (event) => {
    // console.log(event.target.value)
    setImage(event.target.value)
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post(
      'http://localhost:3000/animals',
      {
        name:name,
        species:species,
        image:image,
        reservedForAdoption:false,
      }//then request is so we dont have to reload page on submission
    ).then(()=>{
      axios
          .get('http://localhost:3000/animals')
          .then((response)=>{
              setAnimals(response.data)
          })
      })
    // console.log(newDescription)
    // console.log(newComplete)
  }

  const editAnimal = (event, animalData) => {
    event.preventDefault()
      axios
        .put(
          `http://localhost:3000/animals/${animalData._id}`,
          {
            name: name,
            species: species,
            image: image,
            reservedForAdoption: false,
          }
      )
      .then(() => {
        axios
          .get('http://localhost:3000/animals')
          .then((response) => {
              setAnimals(response.data)
          })
      })
  }

  const removeAnimal = (animalData)=>{
    axios
        .delete(`http://localhost:3000/animals/${animalData._id}`)
        .then(()=>{
            axios
                .get('http://localhost:3000/animals')
                .then((response)=>{
                    setAnimals(response.data)
                })
        })
  }

  useEffect(() => {
    axios 
        .get('http://localhost:3000/animals')
        .then((response) => {
          // console.log(response.data)
          setAnimals(response.data)
        })
  }, [])

  return (
    <>
    <h1>Sunny Animal Shelter</h1>
    <section>
      <h2>Animal Form</h2>
        <form onSubmit={handleFormSubmit}>
          <input type='text' placeholder='Name' onChange={handleNewName} required/><br/>
          <input type='text' placeholder='Species' onChange={handleNewSpecies} required/><br/>
          <input type='text' placeholder='Image' onChange={handleNewImage} required/><br/>
          <input type='submit' value='Create Animal'/>
        </form><br/>
    </section>
    <div className='container'>
    {animals.map((animal)=> {
            return <Animal 
            //    Props   =    Values
              removeAnimal={removeAnimal} 
              animal={animal} 
              editAnimal={editAnimal}
              handleNewName={handleNewName}
              handleNewSpecies={handleNewSpecies}
              handleNewImage={handleNewImage}
              key={animals._id}/>
          })}
    </div>
    </>
  );
}

export default App;