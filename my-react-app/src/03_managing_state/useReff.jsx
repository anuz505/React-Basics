import { useEffect, useRef } from "react";

export default function UserefPractice() {
  useEffect(() => {
    console.log("render");
  });

  const inputref = useRef(0);
  function handleClick() {
    inputref.current++;
  }
  function handleTotalClick() {
    console.log(inputref.current);
  }
  return (
    <>
      <button onClick={handleClick}>Click me </button>
      <button onClick={handleTotalClick}>Total</button>
    </>
  );
}
