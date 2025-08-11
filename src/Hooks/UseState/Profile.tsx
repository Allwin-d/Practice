import { useState } from "react";
//UPDATING STATE FOR AN OBJECT
type UserType = {
  name: string;
  age: string;
};

const Profile = () => {
  const [user, setUser] = useState<UserType>({
    name: "",
    age: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value, //here we are updating an object with the previous item
      };
    });
  }

  function handleSubmit() {
    console.log("User details:", user);
  }

  return (
    <div>
      <h2>User Details</h2>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        value={user.age}
        placeholder="Enter Age"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Profile;
