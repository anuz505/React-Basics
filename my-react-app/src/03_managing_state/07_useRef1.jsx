import { useEffect, useRef } from "react";

export default function USEref() {
  useEffect(() => {
    console.log("render");
  });
  const inputref = useRef("");
  function handleClick() {
    inputref.current.focus();
    inputref.current.style.background = "Yellow";
  }

  return (
    <>
      <input ref={inputref} />
      <button onClick={handleClick}>Click to focus</button>
    </>
  );
}
