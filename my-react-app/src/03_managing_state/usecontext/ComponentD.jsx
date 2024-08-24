import { UserContext } from "./ComponentA";
import { useContext } from "react";
export default function ComponentD() {
  const user = useContext(UserContext);
  return (
    <>
      <div className="Box">
        <p>ComponentD</p>
        <p>{`Okay ${user}`}</p>
      </div>
    </>
  );
}
