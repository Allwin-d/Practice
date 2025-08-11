type PeronProp = {
  name: string;
  age: number;
  career: string;
};

const Person = ({ name, age, career }: PeronProp) => {
  //we can also use it like props : PersonProp
  return ( // then in child we have to use it like props.name , props.age like that....
    <div> 
      <h1>{name}</h1>  /
      <p>{age}</p>
      <li>{career}</li>
    </div>
  );
};

export default Person;
