//THIS COMPONENT MAINLY FOCUS ON THE MAP METHOD

const UserList = () => {
  const people = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
    { id: 4, name: "Diana", age: 22 },
    { id: 5, name: "Ethan", age: 35 },
  ];

  return (
    <div>
      {people.map((item, key) => {
        return (
          <div key={key}>
            <p>Name : {item.name}</p>
            <p>Age : {item.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
