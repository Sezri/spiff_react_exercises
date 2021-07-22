import React, { useState } from 'react'
import '../styles/Button.css'

const Button = ({ onClick, progress, setProgress }) => {
    const [clicked, setClicked] = useState(false)
    const [isBolded, setIsBolded] = useState(false)
    return (
        <button
            className={`Button ${
                progress < 100 ? 'Button--green' : 'Button--red'
            }`}
            style={{ borderWidth: isBolded ? '3px' : '' }}
            onClick={() => {
                setIsBolded(true)
                setTimeout(() => setIsBolded(false), 350)
                if (!clicked) {
                    onClick(15000)
                    setClicked(true)
                } else if (progress >= 100) {
                    setClicked(false)
                    setProgress(0)
                }
            }}
        >
            {clicked
                ? progress < 100
                    ? 'LOADING...'
                    : 'FINISH REQUEST'
                : 'START REQUEST'}
        </button>
    )
}

export default Button
