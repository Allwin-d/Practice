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
      <p>Name : {product.name}</p>
      <p>Price : {product.price}</p>
      <p>Availability : {product.availability}</p>
    </div>
  );
};
export default ProductInfo;
