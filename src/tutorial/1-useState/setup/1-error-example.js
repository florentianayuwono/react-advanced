import React from "react";

const ErrorExample = () => {
  let title = "Hello World";
  const handleClick = () => {
    title = "See, it doesn't change the Hello World!"
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title!
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
