import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState<string[]>([]);
  const [name, setName] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return; 

    setTodo((prevTodos) => [...prevTodos, name]);
    setName(""); 
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Todo</h1>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {todo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
