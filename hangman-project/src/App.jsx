import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CharInput from './components/CharInput'
import UsedLetters from './components/UsedLetters'
import GuessWord from './components/GuessWord'
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


  const [word, setWord] = useState(randomWord())
  const [guess, setGuess] = useState([])
  const [snake, setSnake] = useState(['H','A','N','G','S','N','A','K','E'])

  // const removeChar = () => {

  //   setSnake(snake.pop)
  // }

  const getInput = () => {
    console.log(getInput)
  }
  const getSnake = () => {
    let guessArr = [...snake]
    snake = getArr.pop()
    setSnake(guessArr)
  }

  //gets user input guess and sets arr to 
  const getGuess = (addLetter) => {
    let guessArr = [...guess, addLetter]
    setGuess(guessArr)
  }

  return (
    <div className="App">
      <h1>Welcome To Hangman!</h1>
      <h2>Please enter a word below:</h2>
      <CharInput getGuess={getGuess} getInput={getInput}/> 
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
