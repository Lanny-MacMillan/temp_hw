import './App.css';
import Characters from './Components/Character'
import Locations from './Components/Location'
import Episodes from './Components/Episode'
import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [characters, setCharacters] = useState([])
  const [locations, setLocations] = useState([])
  const [episodes, setEpisodes] = useState()
  const [showEpisodes, setShowEpisodes] = useState(false)
  const [showLocations, setShowLocations] = useState(false)
  const [showCharacters, setShowCharacters] = useState(true)
  const [characterPage, setCharacterPage] = useState('https://rickandmortyapi.com/api/character')
  const [locationPage, setLocationPage] = useState('https://rickandmortyapi.com/api/location')
  const [episodePage, setEpisodePage] = useState('https://rickandmortyapi.com/api/location')



  const getCharacters = () => {
    axios.get(characterPage).then((response) => {
      // console.log(response.data)
      setCharacterPage(response.data.info)
      setCharacters(response.data.results)
    })
  }

  const getLocations = () => {
    axios.get(locationPage).then((response) => {
      // console.log(response.data)
      setLocationPage(response.data.info)
      setLocations(response.data.results)
    })
  }
  const getEpisodes = () => {
    axios.get(episodePage).then((response) => {
      console.log(response.data.results)
      setEpisodePage(response.data.info)
      setEpisodes(response.data.results)
    })
  }

  const ShowCharacters = () => {
    return (
      <div className='container'>
        {characters.map((character)=> {
          return (
            <Characters character={character}/>
          )
        })}
      </div>
    )
  }
  const ShowLocations = () => {
    return (
      <div className='container'>
        {locations.map((location)=> {
          return (
            <Locations location={location}/>
          )
        })}
      </div>
    )
  }
  const ShowEpisodes = () => {
    return (
      <div className='container'>
        {episodes.map((episodes)=> {
          return (
            <Episodes episodes={episodes}/>
          )
        })}
      </div>
    )
  }
  const displayCharacters = () => {
    setShowEpisodes(false)
    setShowLocations(false)
    setShowCharacters(true)
  }
  const displayLocations = () => {
    setShowCharacters(false)
    setShowEpisodes(false)
    setShowLocations(true)
    
  }
  const displayEpisodes = () => {
    setShowLocations(false)
    setShowCharacters(false)
    setShowEpisodes(true)
  }

  const nextPage = () => {
    return(
      showCharacters && characterPage.next !== null ? setCharacterPage(characterPage.next) : null,
      showLocations && locationPage.next !== null  ? setLocationPage(locationPage.next) : null,
      showEpisodes && episodePage.next !== null  ? setEpisodePage(episodePage.next) : null
    )
  }

  const prevPage = () => {
    return (
      showCharacters && characterPage.prev !== null ? setCharacterPage(characterPage.prev) : null,
      showLocations  && locationPage.prev !== null ? setLocationPage(locationPage.prev) : null,
      showEpisodes && episodePage.prev !== null ? setEpisodePage(episodePage.prev) : null
    )
  }

  
  useEffect(() => {
    getCharacters()
  })
  useEffect(() => {
    getLocations()
  })
  useEffect(() => {
    getEpisodes()
  })

  return (
    <>
        <img src="https://i.imgur.com/idhOT7q.png" alt="Rick and Morty"/>
        <div id='button-div'>
          <button onClick={displayCharacters}>Characters</button>
          <button onClick={displayLocations}>Locations</button>
          <button onClick={displayEpisodes}>Episodes</button>
          </div>
          <br/>
        <div id='button-div'>
        <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
        {showCharacters ? <ShowCharacters/> : null}
        {showLocations ? <ShowLocations/> : null}
        {showEpisodes ? <ShowEpisodes/> : null}
    </>

  )
}

export default App;
