import React, { useState } from 'react'
import Exercise from '../exercise/Exercise'
import ProgressBar from './components/ProgressBar'
import Button from './components/Button'

const ProgressBarExercise = () => {
    return (
        <div className="progress-bar-exercise">
            <Exercise
                solution={<Solution />}
                specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
                title="Progress Bar Exercise"
            />
        </div>
    )
}

export default ProgressBarExercise

// ----------------------------------------------------------------------------------

const Solution = () => {
    const [progress, setProgress] = useState(0)

    const mockAsyncRequest = (time) => {
        setTimeout(requestResolved, time)
        let updateTimer = setInterval(() => {
            setProgress((current) => {
                if (current < 90) {
                    return current + 0.25
                } else {
                    clearInterval(updateTimer)
                    return current
                }
            })
        }, time / 360)
    }

    const requestResolved = () => {
        let updateTimer = setInterval(() => {
            setProgress((current) => {
                const amount = Math.max((100 - current) / 40, 1)
                setProgress(current + amount)
                if (current >= 100) clearInterval(updateTimer)
            })
        }, 25)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ProgressBar progress={progress} />
            <Button
                onClick={mockAsyncRequest}
                progress={progress}
                setProgress={setProgress}
            />
        </div>
    )
}
