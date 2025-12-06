const ProductsArray = () => {
  type eachProd = {
    id: number;
    name: string;
    price: string;
  };

  type Product = eachProd[];

  const products: Product = [
    {
      id: 1,
      name: "Phone",
      price: "$1200",
    },
    {
      id: 2,
      name: "Laptop",
      price: "$1200",
    },
    {
      id: 3,
      name: "HeadPhones",
      price: "$199",
    },
  ];

  return (
    <div>
      {products.map((item) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <span>{item.price}</span>
        </ul>
      ))}
    </div>
  );
};

export default ProductsArray;
