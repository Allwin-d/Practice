import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState<string[]>([]);
  const [item, setItem] = useState<string>("");


  //useState example for modifying an array 
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setItem(e.target.value);
  }

  function handleSubmit(item: string) {
    if (todo.includes(item)) {
      setTodo(todo.filter((val) => val !== item));
    } else {
      setTodo([...todo, item]);
    }

    setItem("");
  }

  return (
    <div>
      <form>
        <label htmlFor="items">Items: </label>
        <input
          type="text"
          placeholder="Enter an item to Add"
          value={item}
          onChange={handleChange}
        />

        <button type="button" onClick={() => handleSubmit(item)}>
          Submit
        </button>
      </form>

      {/* ✅ Display Todo List */}
      <ul>
        {todo.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
