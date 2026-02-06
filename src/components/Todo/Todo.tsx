import axios from "axios";
import { useEffect, useState } from "react";

const Todo = () => {
  type Item = {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
  };

  type ApiResponse = {
    todos: Item[];
    total: number;
    skip: number;
    limit: number;
  };

  const [data, setData] = useState<ApiResponse | null>(null);

  const [newItem, setNewItem] = useState<Item>({
    id: 0,
    todo: "",
    completed: false,
    userId: 0,
  });

  const API_URL = "https://dummyjson.com/todos";

  const handleSubmit = async (val: Item) => {
    try {
      const response = await axios.post("https://dummyjson.com/todos/add", val);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchTodoData = async () => {
      try {
        const response = await axios.get<ApiResponse>(API_URL);
        setData(response.data);
      } catch (err: unknown) {
        console.error("Failed to fetch Data :", err);
      }
    };

    fetchTodoData();
  }, []);

  console.log("New Item : ", newItem);

  return (
    <div>
      {/* Display Todos */}
      {data && data.todos.length > 0 ? (
        <div>
          {data.todos.map((item) => (
            <div key={item.id}>
              <p>{item.todo}</p>
              <p>User ID: {item.userId}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>No Todos</div>
      )}

      <p>Add a new Todo</p>

      {/* ID */}
      <input
        type="number"
        placeholder="Enter Id"
        value={newItem.id}
        onChange={(e) => setNewItem({ ...newItem, id: Number(e.target.value) })}
      />

      {/* Todo Text */}
      <input
        type="text"
        placeholder="Enter Todo"
        value={newItem.todo}
        onChange={(e) => setNewItem({ ...newItem, todo: e.target.value })}
      />

      {/* Completed Checkbox */}
      <label>
        Completed?
        <input
          type="checkbox"
          checked={newItem.completed}
          onChange={(e) =>
            setNewItem({ ...newItem, completed: e.target.checked })
          }
        />
      </label>

      {/* User ID */}
      <input
        type="number"
        placeholder="Enter User Id"
        value={newItem.userId}
        onChange={(e) =>
          setNewItem({ ...newItem, userId: Number(e.target.value) })
        }
      />

      <button onClick={() => handleSubmit(newItem)}>Submit</button>
    </div>
  );
};

export default Todo;
