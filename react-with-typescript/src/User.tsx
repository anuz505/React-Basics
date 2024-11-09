import React, { useContext } from "react";
import { UserProps, UserContext } from "./UserContext";
export default function User(props: UserProps) {
  const [userInfo, setUserInfo] = React.useState<boolean | null>(false);
  const [userBio, setUserBio] = React.useState<string | null>(null);
  const { user, addUser } = useContext(UserContext);
  const toggleInfo = () => {
    setUserInfo((prev) => !prev);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserBio(event.target.value);
  };
  const handleAddUser = () => {
    addUser({ name: props.name, age: props.age });
  };
  return (
    <div>
      {userInfo && (
        <>
          <h2>{props.name}</h2>
          <h2>{props.age}</h2>
          {!userBio ? "no user Bio" : userBio}
          <br />
          <input type="text" onChange={handleChange} />
          <br />
        </>
      )}
      <button onClick={toggleInfo}>{userInfo ? "Hide" : "See More"}</button>
      <button onClick={handleAddUser}>Add user</button>
    </div>
  );
}
