type PeronProp = {
  name: string;
  age: number;
  career: string;
};

const Person = ({ name, age, career }: PeronProp) => {
  //we can also use it like props : PersonProp
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <li>{career}</li>
    </div>
  );
};

export default Person;
