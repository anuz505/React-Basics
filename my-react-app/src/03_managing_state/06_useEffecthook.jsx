import { useEffect, useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("Green");

  useEffect(() => {
    document.title = `Count ${count} | ${color}`;
  }, [color, count]);

  function addCount() {
    setCount((c) => c + 1);
  }
  function subCount() {
    setCount((c) => c - 1);
  }
  function changeColor() {
    setColor((color) =>
      color === "Green" ? (color = "Red") : (color = "Green")
    );
  }
  return (
    <>
      <p style={{ color: color }}>Count : {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Subtract</button>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}
