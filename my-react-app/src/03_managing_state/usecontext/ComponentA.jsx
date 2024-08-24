import { useState, createContext } from "react";
import ComponentB from "./ComponentB";
import "./index.css";
export const UserContext = createContext();
export default function ComponentA() {
  const [user, setUser] = useState("anuz");
  return (
    <>
      <div className="Box">
        <p>ComponentA</p>
        <p>{`Hi, ${user}`}</p>
        <UserContext.Provider value={user}>
          <ComponentB />
        </UserContext.Provider>
      </div>
    </>
  );
}
