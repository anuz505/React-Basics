import { useMemo, useState } from "react";
import { initialItems } from "./ar";

export default function Mem0() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );

  return (
    <div className="tut">
      <h1>Count</h1>
      <p>{count}</p>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
