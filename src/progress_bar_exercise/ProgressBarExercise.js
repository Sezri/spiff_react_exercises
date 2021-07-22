import React, { useState, useRef } from 'react'
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

function calculateIncrementAmount(
    currentProgress,
    numberOfIntervals,
    breakpoints
) {
    const lastIdx = breakpoints.findIndex(
        (percent) => percent > currentProgress
    )
    let lower, higher, closestDistance
    if (lastIdx === -1) {
        lower = breakpoints[breakpoints.length - 1]
        higher = 90
        closestDistance = currentProgress - lower
    } else if (lastIdx === 0) {
        lower = 0
        higher = breakpoints[lastIdx]
        closestDistance = higher - currentProgress
    } else {
        lower = breakpoints[lastIdx - 1]
        higher = breakpoints[lastIdx]
        closestDistance = Math.min(
            higher - currentProgress,
            currentProgress - lower
        )
    }
    const totalDistance = higher - lower
    const relativeDistance = closestDistance / totalDistance
    const increment = -1 * Math.abs(0.6 * relativeDistance - 0.3) + 0.15
    console.log(
        'lower,higher,current,increment:',
        lower,
        higher,
        currentProgress,
        increment
    )
    return increment
}

const Solution = () => {
    const [progress, setProgress] = useState(0)
    const inputRef = useRef()

    const mockAsyncRequest = (time, numberOfIntervals, breakpoints) => {
        setTimeout(requestResolved, time)
        let updateTimer = setInterval(() => {
            setProgress((current) => {
                let increment = 90 / numberOfIntervals
                if (breakpoints)
                    increment += calculateIncrementAmount(
                        current,
                        numberOfIntervals,
                        breakpoints
                    )
                if (current < 90) {
                    return current + increment
                } else {
                    clearInterval(updateTimer)
                    return current
                }
            })
        }, time / numberOfIntervals)
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
                breakpointInputRef={inputRef}
            />
            <input ref={inputRef} placeholder="(Optional) 10,20,60,..." />
        </div>
    )
}
