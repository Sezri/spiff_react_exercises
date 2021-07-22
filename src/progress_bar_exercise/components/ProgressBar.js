import React, { useState } from 'react'
import '../styles/ProgressBar.css'

const ProgressBar = ({ progress }) => {
    return (
        <div className="ProgressBar" style={{ width: `${progress}vw` }}>
            <div className="ProgressBar__background"></div>
        </div>
    )
}

export default ProgressBar
