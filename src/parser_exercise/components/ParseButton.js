import React from 'react'
import '../styles/Button.css'
import Button from './Button'

const ParseButton = ({ onClick }) => {
    return (
        <Button className="Button--green" onClick={onClick} children="Parse" />
    )
}

export default ParseButton
