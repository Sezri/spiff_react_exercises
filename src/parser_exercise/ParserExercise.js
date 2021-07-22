import React, { useState, useRef } from 'react'
import Exercise from '../exercise/Exercise'
import ParseButton from './components/ParseButton'
import ResetButton from './components/ResetButton'
import TextArea from './components/TextArea'
import ResultPane from './components/ResultPane'

const ParserExercise = () => {
    return (
        <div className="parser">
            <Exercise
                solution={<Solution />}
                specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/2"
                title="Parser Exercise"
            />
        </div>
    )
}

export default ParserExercise

// ----------------------------------------------------------------------------------

function countLettersInWords(phrase) {
    const count = {}
    phrase
        .split(' ')
        .map((word) => new Set(word.split('')))
        .forEach((wordArray) =>
            wordArray.forEach((letter) => {
                const lowercaseLetter = letter.toLowerCase()
                count[lowercaseLetter] = (count[lowercaseLetter] || 0) + 1
            })
        )
    return Object.entries(count).sort()
}

const Solution = () => {
    const [letters, setLetters] = useState([])
    const textAreaRef = useRef()

    const parseButtonClickHandler = () => {
        setLetters(countLettersInWords(textAreaRef.current.value))
    }

    const resetButtonClickHandler = () => {
        textAreaRef.current.value = ''
        setLetters([])
    }

    return (
        <div>
            <TextArea textRef={textAreaRef} />
            <div style={{ display: 'flex' }}>
                <ParseButton onClick={parseButtonClickHandler} />
                <ResetButton onClick={resetButtonClickHandler} />
                <ResultPane letterCounts={letters} />
            </div>
        </div>
    )
}
