const ProductInfo = () => {
  type Product = {
    name: string;
    price: string;
    availability: string;
  };

  const product: Product = {
    name: "Laptop",
    price: "$1200",
    availability: "In Stock",
  };

  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.availability}</p>
    </div>
  );
};
export default ProductInfo;
