import React from 'react'

const ResultPane = ({ letterCounts }) => {
    return (
        <div>
            {letterCounts.map((keyValuePair) => (
                <div>{`${keyValuePair[0]}: ${keyValuePair[1]}`}</div>
            ))}
        </div>
    )
}

export default ResultPane
