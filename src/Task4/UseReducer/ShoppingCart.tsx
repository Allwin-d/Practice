import { useReducer, useState } from "react";

type CartItem = {
  name: string;
  quantity: number;
};

type Action =
  | { type: "addItem"; payload: string }
  | { type: "removeItem"; payload: string }
  | { type: "updateQuantity"; payload: { name: string; quantity: number } }
  | { type: "emptyCart" };

const reducer = (state: CartItem[], action: Action): CartItem[] => {
  switch (action.type) {
    case "addItem":
      // If item already exists, increase quantity
      if (state.some((item) => item.name === action.payload)) {
        return state.map((item) =>
          item.name === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Else add new item
      return [...state, { name: action.payload, quantity: 1 }];

    case "removeItem":
      return state.filter((item) => item.name !== action.payload);

    case "updateQuantity":
      return state.map((item) =>
        item.name === action.payload.name
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    case "emptyCart":
      return [];

    default:
      return state;
  }
};

const ShoppingCart = () => {
  const InitialState: CartItem[] = [];
  const [item, setItem] = useState<string>("");

  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <div className="flex flex-col space-y-3 p-4">
      <h1 className="text-xl font-bold">Shopping Cart</h1>

      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Enter Item"
          className="border p-2"
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => {
            if (item) {
              dispatch({ type: "addItem", payload: item });
              setItem(""); // clear input
            }
          }}
        >
          Add
        </button>
      </div>

      <ul className="list-disc pl-5">
        {state.map((cartItem, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span>
              {cartItem.name} (x{cartItem.quantity})
            </span>
            <button
              className="text-red-500"
              onClick={() =>
                dispatch({ type: "removeItem", payload: cartItem.name })
              }
            >
              ❌
            </button>
            <button
              className="text-green-500"
              onClick={() =>
                dispatch({
                  type: "updateQuantity",
                  payload: {
                    name: cartItem.name,
                    quantity: cartItem.quantity + 1,
                  },
                })
              }
            >
              ➕
            </button>
            <button
              className="text-yellow-500"
              onClick={() =>
                dispatch({
                  type: "updateQuantity",
                  payload: {
                    name: cartItem.name,
                    quantity: Math.max(1, cartItem.quantity - 1),
                  },
                })
              }
            >
              ➖
            </button>
          </li>
        ))}
      </ul>

      {state.length > 0 && (
        <button
          className="bg-red-600 text-white px-3 py-1 rounded mt-2"
          onClick={() => dispatch({ type: "emptyCart" })}
        >
          Empty Cart
        </button>
      )}
    </div>
  );
};

export default ShoppingCart;
