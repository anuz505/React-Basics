import { useState } from "react";

export default function SyncedInputs() {
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <Input label="First input" value1={text} onChange1={handleChange} />
      <Input label="Second input" value1={text} onChange1={handleChange} />
    </>
  );
}

function Input({ label, value1, onChange1 }) {
  return (
    <label>
      {label} <input value={value1} onChange={onChange1} />
    </label>
  );
}
