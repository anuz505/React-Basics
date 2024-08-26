import { useState, useEffect, useRef } from "react";
import "./stopwatch_style.css";
export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIDref = useRef(null);
  const StartTime = useRef(0);
  useEffect(() => {
    if (isRunning) {
      intervalIDref.current = setInterval(() => {
        setElapsedTime(Date.now() - StartTime.current);
      }, 10);
    }

    return () => clearInterval(intervalIDref.current);
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    StartTime.current = Date.now() - elapsedTime;
  }
  function stop() {
    setIsRunning(false);
  }
  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }
  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    // Ensure two-digit formatting
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-title">StopWatch</h1>
      <div className="stopwatch-time">{formatTime()}</div>
      <div className="controls">
        <button className="start" onClick={start}>
          Start
        </button>
        <button className="stop" onClick={stop}>
          Stop
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
