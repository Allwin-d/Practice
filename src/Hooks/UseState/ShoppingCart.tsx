import { useState } from "react";

type Item = {
  name: string;
  quantity: string;
};

const ShoppingCart = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [details, setDetails] = useState<Item>({
    name: "",
    quantity: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    // Update the details object dynamically
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!details.name.trim() || !details.quantity.trim()) return;

    // Add new item to items array
    setItems((prev) => [...prev, details]);

    // Clear details
    setDetails({ name: "", quantity: "" });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={details.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Quantity</label>
          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            value={details.quantity}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <h3>Shopping List</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
