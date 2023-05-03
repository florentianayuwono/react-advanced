import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("page rendered.");
    if (value >= 1) {
      document.title = `New Things!(${value})`;
    }
  });
  console.log("Is it rendering?");
  return (
    <>
      <h2>useEffect Basics</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Try me?
      </button>
    </>
  );
};

export default UseEffectBasics;
