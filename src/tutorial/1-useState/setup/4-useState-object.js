import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Susanh",
    age: 10,
    message: "Hello World!",
  });

  const changeMessage = () => {
  // ...person to iterate all the components of person, 
  // then change the message component to be new message
    setPerson({ ...person, message: "Nice!" });
  };
  return (
  <>
    <h2>useState object example</h2>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className="btn" onClick={changeMessage}>
      change me!
    </button>
  </>);
};

export default UseStateObject;
