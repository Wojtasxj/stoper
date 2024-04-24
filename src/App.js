import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import "./App.scss";

function App() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    const id = setInterval(() => {
      setTime(prevTime => prevTime + 10); // Zwiększamy o 10 milisekund (0.01 sekundy)
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
    <div>
      <Timer milliseconds={time} />
      <button className="button" onClick={startTimer}>Start</button>
      <button className="button" onClick={stopTimer}>Stop</button>
      <button className="button" onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App;