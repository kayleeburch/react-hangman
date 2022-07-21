import { useState } from 'react'

function CharInput(props) {



    const getWord = () => {
        props.getGuess(document.getElementById('guessInput').value)
    }

    const getLetter = () => {
        props.getInput(document.getElementById('guessInput').value)
    }




    return(
        <div>
            <input
                type="text"
                id="guessInput"
            />
            <br></br>
            <button onClick={() => {getWord();getLetter()}}>Submit Letter</button>
        </div>
    )
}

export default CharInput