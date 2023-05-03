import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };
  return (
    <>
      <h2>useState counter example</h2>
      <h2>Basic lols</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue((value - 1))}>dont</button>
      <button className="btn" onClick={() => setValue((value + 1))}>yes</button>
      <button className="btn" onClick={reset}>restart?</button>
    </>
  );
};

export default UseStateCounter;
