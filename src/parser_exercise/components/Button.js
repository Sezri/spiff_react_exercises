import React, { useState } from 'react'
import '../styles/Button.css'

const Button = ({ onClick, className, children }) => {
    const [isBolded, setIsBolded] = useState(false)
    return (
        <button
            className={`Button ${className}`}
            style={{ borderWidth: isBolded ? '3px' : '' }}
            onClick={() => {
                setIsBolded(true)
                setTimeout(() => setIsBolded(false), 350)
                onClick()
            }}
        >
            {children}
        </button>
    )
}

export default Button
