import React from 'react'
import '../styles/Button.css'
import Button from './Button'

const ResetButton = ({ onClick }) => {
    return (
        <Button className="Button--orange" onClick={onClick} children="Reset" />
    )
}

export default ResetButton
