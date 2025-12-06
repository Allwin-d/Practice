import { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  //this useEffect runs whenever the count value changes 
  useEffect(() => {
    async function handleCount() {
      document.title = String(count);
    }

    handleCount();
  }, [count]);

  function increment() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+ </button>
    </div>
  );
};

export default CounterEffect;
