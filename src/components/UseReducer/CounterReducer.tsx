import { useReducer } from "react";

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "Increment By 5 " };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "Increment By 5 ":
      return state + 5;
    default:
      return state;
  }
}

const CounterReducer = () => {
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state, dispatch);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "Increment By 5 " })}>+5</button>
    </div>
  );
};

export default CounterReducer;
