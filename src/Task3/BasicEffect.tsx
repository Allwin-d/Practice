import { useEffect, useState } from "react";

const BasicEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("this runs whenever the count changes..");
  }, [count]);

  function handleIncrement() {
    setCount((prev) => {
      return prev + 1;
    });
  }

  return (
    <>
      <span>{count}</span>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default BasicEffect;
