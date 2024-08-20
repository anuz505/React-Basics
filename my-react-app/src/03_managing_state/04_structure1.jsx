import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedid, setSelectedID] = useState(0);

  const selectedItem = items.find((item) => item.id === selectedid);

  function handleOnChange(id, event) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: event.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <h1>What's your travel snack</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="text"
              value={item.title}
              onChange={(e) => handleOnChange(item.id, e)}
            />
            <button
              onClick={() => {
                setSelectedID(item.id);
              }}
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}</p>
    </>
  );
}
