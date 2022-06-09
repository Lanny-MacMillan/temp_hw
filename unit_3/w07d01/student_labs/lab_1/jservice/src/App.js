import './App.css';

import {useState, useEffect} from 'react'
import axios from 'axios'
// import Data from './Components/Data'
// import Answers from './Components/answers'


const App = () => {
  // open brackets in the useState holds apis full object info to be referenced
  // const [jeopardyData, setJeopardyData] = useState({})
  const [revealAnswer, setRevealAnswer] = useState(false)
  const [trivia, setTrivia] = useState('')
  // const [showAnswer, setShowAnswer] = useState(
  //   {answer: '', onPage: false}
  // )
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [category, setCategory] = useState('')
  const [value, setValue] = useState(0)

  const getTrivia = () => {
    axios.get('http://jservice.io/api/random').then((response) => {
      // console.log(response)
      // console.log(response.data[0].question)
      // console.log(response.data[0].answer)
      setTrivia(response.data[0].question)
      // setAnswer(response.data[0].answer)
      setShowAnswer(response.data[0].answer)
      setValue(response.data[0].value)
      setCategory(response.data[0].category.title)
    })
  }

  const showStuff = () => {
    setShowAnswer(true)
  }
  const increase = () => {
    setScore(score + value)
  }
  const reset = () => {
    setScore(0)
  }
  const decrease = () => {
    setScore(score - value)
  }
  useEffect(() => {
    getTrivia()
  }, [])



  return (
    <>
    <h1>Welcome to Jeopardy</h1>
    <h3>{score}</h3>
    <button class="myRedButton" onClick={decrease} >Answered Incorrectly</button>
    <button class="myGreenButton" onClick={increase} >Answered Correctly</button>
    <br>
    </br>
    <button class="myRedButton" onClick={reset} >Reset Score</button>
    <br></br>
    <h2>Lets Play!</h2>
    <button class="myBlueButton" onClick={getTrivia}>Get Trivia Question</button>
    <h3>Points: {value}</h3>

    <h3 id='red'>Category: </h3><h3>{category}</h3>
    <h3 id='red'>Answer/Clue: </h3><h3>{trivia}</h3>
    <br>
    </br>
    <h3>Question: {showAnswer}</h3>
    <button class="myGreenButton" onClick= {showStuff} >Click to Reveal Question</button>
    <br>
    </br>
    <data Props
    <h5>{showAnswer ? showAnswer:''} </h5>
    {/* <h5>{showAnswer.onPage ? showAnswer:''} </h5> */}
    </>
  )
}

export default App;