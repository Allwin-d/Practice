const ArrayOfObj = () => {
  type eachProd = {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    category: string;
  };

  type Product = eachProd[];

  const products: Product = [
    {
      id: 101,
      name: "Wireless Mouse",
      price: 799,
      inStock: true,
      category: "Accessories",
    },
    {
      id: 102,
      name: "Mechanical Keyboard",
      price: 3499,
      inStock: false,
      category: "Accessories",
    },
    {
      id: 103,
      name: "Monitor",
      price: 12499,
      inStock: true,
      category: "Electronics",
    },
  ];

  return (
    <div>
      {products.map((item) => {
        return (
          <ul key={item.id}>
            <li>Name: {item.name}</li>
            <p>Price:{item.price}</p>
            <span>Categories : {item.category}</span>
          </ul>
        );
      })}
    </div>
  );
};

export default ArrayOfObj;
