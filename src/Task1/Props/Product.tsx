//here we didnt destructured the props

type ProductType = {
  name: string;
  price: number;
};

const Product = (props: ProductType) => {
  return (
    <div>
      <h2>Name :{props.name}</h2>
      <p>price : {props.price}</p>
    </div>
  );
};

export default Product;
