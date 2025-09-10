import type { Product } from "../../Types/JsxTypes/Types";

const ProductInfo = () => {
  const product: Product = {
    name: "Laptop",
    price: "$1200",
    availability: "In Stock",
  };

  //whenever we are using expression it should be inside the curly braces

  return (
    <div>
      <p>Name : {product.name}</p>
      <p>Price : {product.price}</p>
      <p>Availability : {product.availability}</p>
    </div>
  );
};

export default ProductInfo;
