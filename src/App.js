import React, { useState, useRef } from 'react';
import './components/Style.css'
function App() {
  const [timer, setTimer] = useState(0);
  const [isPause, setIsPause] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const countRef = useRef(0);

  const handleStart = () => {

    setIsActive(true)
    setIsPause(true)
    countRef.current = setInterval(() => {
      setTimer((time) => time + 1)
    }, 1000)


  }

  const handlePause = () => {
    clearInterval(countRef.current)
    setIsPause(false)

  }

  const handleResume = () => {
    setIsPause(true)
    countRef.current = setInterval(() => {
      setTimer((time) => time + 1)
    }, 1000)

  }

  const handleReset = () => {
    clearInterval(countRef.current)
    setIsActive(false)
    setIsPause(false)
    setTimer(0)

  }

  const formatTime = () => {
  const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }
  return (
    <>
      <div className="app">
        <h3>React Stopwatch</h3>
        <div className='stopwatch-card'>
          <p>
            {formatTime()}
          </p>
          <div className='buttons'>
            {
              !isActive && !isPause ?
                <button onClick={handleStart}>Start</button>
                : (
                  isPause ? <button onClick={handlePause}>Pause</button> :
                    <button onClick={handleResume}>Resume</button>
                )
            }
            <button onClick={handleReset} disabled={!isActive}>Reset</button>
          </div>
        </div>
      </div>

    </>
  );
}
export default App;


