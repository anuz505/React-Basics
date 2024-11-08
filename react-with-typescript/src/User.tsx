import React from "react";

interface UserProps {
  name: string;
  age: number;
}

export default function User(props: UserProps) {
  return (
    <div>
      <h1>User Details</h1>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
    </div>
  );
}
