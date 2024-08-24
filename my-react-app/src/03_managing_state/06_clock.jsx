import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);
  function handleFormatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)} `;
  }
  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="Container">
      <div className="Clock">
        <span>{handleFormatTime()}</span>
      </div>
    </div>
  );
}
