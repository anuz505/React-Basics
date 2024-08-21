import { useState } from "react";

export default function Scoreboard() {
  const [isPlayerA, setisPlayerA] = useState(true);

  return (
    <div>
      {isPlayerA ? (
        <Counter key={"anuj"} person={"anuj"} />
      ) : (
        <Counter key={"Shreya"} person={"Shreya"} />
      )}
      <button onClick={() => setisPlayerA(!isPlayerA)}>Next</button>
    </div>
  );
}

function Counter({ person }) {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h2>
        {person}'s Score : {score}
      </h2>
      <button onClick={() => setScore(score + 1)}>Add</button>
    </div>
  );
}
