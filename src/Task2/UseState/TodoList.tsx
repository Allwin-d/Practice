import { useState } from "react";
//UPDATING USE STATE IN ARRAY OF DATA
const TodoList = () => {
  // Explicitly type: todo is an array of strings
  const [todo, setTodo] = useState<string[]>([]);
  const [item, setItem] = useState<string>("");

  function handleSubmit() {
    if (!item) return; // prevent empty items
    setTodo([...todo, item]);
    setItem(""); // clear input after adding
  }

  return (
    <div>
      <p>Add a New Item</p>
      <input
        type="text"
        placeholder="Enter Item"
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {todo.length > 0 ? (
          todo.map((item) => {
            return <li>{item}</li>;
          })
        ) : (
          <p>No Items to show here ...</p>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
