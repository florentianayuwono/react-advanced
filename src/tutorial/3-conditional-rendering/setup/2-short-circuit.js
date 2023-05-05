import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || "JO"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>Press for error</button>
      {isError && <h1>It's error!</h1>}
      {!isError && <h1>It's no error!</h1>}
    </>
  );
};

export default ShortCircuit;
