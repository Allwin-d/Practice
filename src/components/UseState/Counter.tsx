import { useState } from "react";


//basic usage of useState
const Counter = () => {
  const [count, setCount] = useState(0); 

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default Counter;
