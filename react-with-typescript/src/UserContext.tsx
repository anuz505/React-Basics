import React, { createContext, useEffect, useState } from "react";

export interface UserProps {
  name: string;
  age: number;
}

interface UserContextType {
  user: UserProps[] | null;
  addUser: (user: UserProps) => void;
}
const contextInitialValues = {
  user: null,
  addUser: (user: UserProps) => null,
};
const UserContext = createContext<UserContextType>(contextInitialValues);
interface Props {
  children: React.ReactNode;
}
export const UserContextProvider = (props: Props) => {
  const [user, setUser] = useState<UserProps[] | null>(null);
  useEffect(() => {
    setUser([{ name: "Anuj Bhandari", age: 21 }]);
  }, []);
  const addUser = (user: UserProps) => {
    setUser((prevUsers) => (prevUsers ? [...prevUsers, user] : [user]));
  };
  return (
    <UserContext.Provider value={{ user, addUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
export { UserContext };
