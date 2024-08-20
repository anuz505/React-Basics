import { useState } from "react";

export default function Feedback() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing");

  const isSending = status === "sending";
  const isSent = status === "sent";

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    await sendMessage(text);
    setStatus("sent");
  }

  function sendMessage(text) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(text);
        resolve();
      }, 2000);
    });
  }

  if (isSent) {
    return <h1>Thank you for your feedback</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isSending}
      ></textarea>
      <button type="submit" disabled={isSending}>
        Submit
      </button>
      {isSending && <p>Sending your message........</p>}
    </form>
  );
}
