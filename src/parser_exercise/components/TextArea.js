import React from 'react'
import '../styles/TextArea.css'

const TextArea = ({ textRef }) => {
    return (
        <div className="TextArea__container">
            <div>Phrase</div>
            <textarea ref={textRef} className="TextArea"></textarea>
        </div>
    )
}

export default TextArea
