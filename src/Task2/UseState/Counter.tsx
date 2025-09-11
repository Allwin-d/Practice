import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  function handleIncrement() {
    setCount((prev) => {
      return prev + 1;
    });
  }

  function handleDecrement() {
    setCount((prev) => {
      return prev - 1;
    });
  }

  return (
    <div className="flex space-x-4">
      <button onClick={handleIncrement}> + </button>
      <p>{count}</p>
      <button onClick={handleDecrement}> - </button>
    </div>
  );
};

export default Counter;
