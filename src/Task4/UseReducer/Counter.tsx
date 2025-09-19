import { useReducer } from "react";

type State = { count: number };
type Action = { type: "Increment" | "Decrement" | "Reset" };

// Reducer must be declared before useReducer
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    case "Reset":
      return { count: 0 };
    default:
      return state;
  }
};

const Counter = () => {
  const initialState: State = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </>
  );
};

export default Counter;
