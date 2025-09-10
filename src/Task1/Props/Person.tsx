//Props is used to pass the information from the parent comp to the child component
//here we destructured the props

type Persontype = {
  name: string;
  age: number;
};

const Person = ({ name, age }: Persontype) => {
  return (
    <div>
      <h2>Name : {name}</h2>
      <p>Age : {age}</p>
    </div>
  );
};

export default Person;
