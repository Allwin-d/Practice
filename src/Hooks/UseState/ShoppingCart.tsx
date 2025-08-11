import { useState } from "react";

// Updating state for an array of objects
type Item = {
  name: string;
  quantity: string;
};

const ShoppingCart = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (name === "name") {
      setProductName(value);
    } else if (name === "quantity") {
      setQuantity(value);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!productName.trim() || !quantity.trim()) return; // avoid empty entries

    setItems((prev) => {
      return [...prev, { name: productName, quantity: quantity }];
    });

    // Clear inputs
    setProductName("");
    setQuantity("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={productName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Quantity</label>
          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            value={quantity}
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
