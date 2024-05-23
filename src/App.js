import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import './styles.scss';


function App() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    const id = setInterval(() => {
      setTime(prevTime => prevTime + 10);
    }, 10);
    setIntervalId(id);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTime(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div className='box'>
      <Timer milliseconds={time} />
      <button className="button" onClick={startTimer}>START</button>
      <button className="button" onClick={stopTimer}>STOP</button>
      <button className="button" onClick={resetTimer}>RESET</button>
    </div>
  );
}

export default App;