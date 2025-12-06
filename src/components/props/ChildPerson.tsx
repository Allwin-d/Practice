type childProp = {
  name: string;
  age: number;
  isMarried: boolean;
  hobbies: string[];
};

const ChildPerson = ({ name, age, isMarried, hobbies }: childProp) => { //we are destructuring in this line 
  return (
    <div>
      <p>Name : {name}</p>
      <p>Age: {age}</p>
      <p>isMarried : {isMarried}</p>
      <p>Hobbies : {hobbies}</p>
    </div>
  );
};

export default ChildPerson;
