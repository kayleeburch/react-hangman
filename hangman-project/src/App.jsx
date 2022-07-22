import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CharInput from './components/CharInput'
import UsedLetters from './components/UsedLetters'
import GuessWord from './components/GuessWord'
import HangSnake from './components/HangSnake'
import './App.css'

function App() {

  const words = [
    "marriageproof",
    "minionette",
    "unlichened",
    "electrocardiographic",
    "hippophagy",
    "polyphore",
    "debellate",
    "zyga",
    "antedonin",
    "hirudinean",
    "foremastman",
    "metapolitics",
    "bianisidine",
    "gros",
    "superindifferent",
    "collar",
    "maculose",
    "unphysically",
    "narrowish",
    "Bartonia",
    "inadherent",
    "arbitrary",
    "forefeelingly",
    "palame",
    "vina",
    "northwestward",
  ];
//gets random word from arr
  function randomWord(){
    let randomNum = Math.floor(Math.random() * words.length)
    return(words[randomNum])
  }

  let hangSnake = ['H','A','N','G','S','N','A','K','E']


  const [word, setWord] = useState(randomWord())
  const [guess, setGuess] = useState([])
  const [snake, setSnake] = useState(hangSnake)
  const [count, setCount] = useState(hangSnake.length - 1)

  const updateCounter = () => {
    setCount(prevCount => prevCount - 1)
    console.log(count)
  }

  //gets user input guess and sets arr to 
  const getGuess = (addLetter) => {
    let guessArr = [...guess, addLetter]
    setGuess(guessArr)
    let letterGuess = document.getElementById('guessInput').value
    checkGuess(letterGuess)
  }

  const checkGuess = (char) => {
    if(word.includes(char)){
      return true
    } else {
      updateCounter()
      removeLastLetter()
    }
  }

  const removeLastLetter = () => {
    let arr = [...hangSnake]
    let index = count
    if(index > 0){
      arr.splice(count)
      setSnake(arr)
    } else {
      setSnake(0)
    }
  }


  return (
    <div className="App">
      <h1>Welcome To HangSnake</h1>
      <HangSnake hangSnake={snake}/>
      <h3>Please enter a letter below:</h3>
      <CharInput getGuess={getGuess}/> 
      <p>{word}</p>
      {/* input and button */}
      <GuessWord word={word} guess={guess}/>
      {/* _ R E E  */}
      {/* will remove one at the end */}
      <UsedLetters guess={guess}/>
      {/* will be li  */}
    </div>
  )
}

export default App
