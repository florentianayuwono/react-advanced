import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const delayIncrease = () => {
    setTimeout(() => {
      //setValue(value + 2); // This will only increase once even though pressed multiple times
      setValue((prevState) => {
        return prevState + 2;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>useState counter example</h2>
        <h2>Basic lols</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          dont
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          yes
        </button>
        <button className="btn" onClick={reset}>
          restart?
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <button className="btn" onClick={delayIncrease}>
          delay lazy
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
