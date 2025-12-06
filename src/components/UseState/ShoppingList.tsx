import { useState } from "react";

type singleProd = {
  name: string;
  quantity: string;
};

const ShoppingList = () => {
  const [items, setItems] = useState<singleProd[]>([]);
  const [prod, setProd] = useState<singleProd>({
    name: "",
    quantity: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setProd((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // ✅ prevent page reload

    if (!prod.name || !prod.quantity) return;

    setItems((prev) => [...prev, prod]); // ✅ add to list
    setProd({ name: "", quantity: "" }); // ✅ clear input
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={prod.name}
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />

        <label>Quantity</label>
        <input
          type="text"
          value={prod.quantity}
          name="quantity"
          placeholder="Enter Quantity"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      {/* ✅ Display List */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
