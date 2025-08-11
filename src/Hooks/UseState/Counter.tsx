import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>The Current Value : {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
