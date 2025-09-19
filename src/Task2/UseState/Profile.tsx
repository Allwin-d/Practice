import { useState } from "react";
//using USESTATE IN AN ARRAY OF OBJECTS

type Person = {
  name: string;
  age: number | null;
};

const Profile = () => {
  const [items, setItems] = useState<Person>({
    name: "",
    age: null,
  });

  const [data, setData] = useState<Person[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setItems((prev) => {
      return {
        ...prev,
        [name]: name === "age" ? Number(value) || null : value, // convert age to number
      };
    });
  }

  function handleSubmit() {
    setData((prev) => {
      return [...prev, items];
    });
    setItems({ name: "", age: null }); // clear input after submit
  }

  return (
    <div>
      <div className="flex space-x-3">
        <p>Name</p>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={items.name}
        />
      </div>

      <div className="flex space-x-3">
        <p>Age</p>
        <input
          type="text"
          name="age"
          onChange={handleChange}
          value={items.age ?? ""}
        />
      </div>

      <button onClick={handleSubmit}>Add Value</button>

      <div>
        <ul>
          {data.length > 0 ? (
            data.map((item, index) => (
              <li key={index}>
                {item.name} - {item.age ?? "N/A"}
              </li>
            ))
          ) : (
            <p>No items added yet</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
