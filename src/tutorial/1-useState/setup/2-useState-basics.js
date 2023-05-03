import React, { useState } from "react";
 
const UseStateBasics = () => {
  // console.log(useState("Hello World"));
  // useState is an array of [default value, 
  // function that will take in old value, then change the value]
  const [text, setText] = useState("Hello World")
  const handleClick = () => {
    if (text === "Hello World") {
      setText("It changed!") // Change the "text" title
    } else {
      setText("Hello World") // Change the "text" title
    }
  }
  return <React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick={handleClick}>
      Change the title for real!
    </button>
  </React.Fragment>
};

export default UseStateBasics;
