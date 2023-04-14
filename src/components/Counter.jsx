import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [userValue, setUserValue] = useState(1);
  let colour = true;

  const handleReset = () => {
    setCount(0);
  };
  const handleIncrement = () => {
    setCount(count + userValue);
  };
  const handleDecrement = () => {
    setCount(count - userValue);
  };
  const handleUserInput = (e) => {
    if (e.target.valueAsNumber) {
      setUserValue(e.target.valueAsNumber);
    }
  };

  if (count >= 0) {
    colour = false;
  } else {
    colour = true;
  }

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <div className="counter">
        <h1 className={colour ? "red" : "green"}>{count}</h1>
        <div className="buttons">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <div className="userInput-container">
          <label className="userInput-label" htmlFor="userValue" />
          Enter the value to increment/decrement by :
          <input
            type="number"
            className="userInput"
            name="userValue"
            id="userValue"
            onChange={handleUserInput}
          />
        </div>
      </div>
    </div>
  );
}
