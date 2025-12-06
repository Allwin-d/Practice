import { useState } from "react";

//useState example for Array of Objects
const Profiles = () => {
  type singlePro = {
    id: number;
    name: string;
    age: number;
    role: string;
    email: string;
    isActive: boolean;
  };

  type Profile = singlePro[];

  const [profile, setProfile] = useState<Profile>([
    {
      id: 1,
      name: "Allwin",
      age: 22,
      role: "Frontend Developer",
      email: "allwin@example.com",
      isActive: true,
    },
    {
      id: 2,
      name: "Rahul",
      age: 24,
      role: "Backend Developer",
      email: "rahul@example.com",
      isActive: false,
    },
    {
      id: 3,
      name: "Priya",
      age: 23,
      role: "UI Designer",
      email: "priya@example.com",
      isActive: true,
    },
    {
      id: 4,
      name: "Karthik",
      age: 25,
      role: "Full Stack Developer",
      email: "karthik@example.com",
      isActive: true,
    },
    {
      id: 5,
      name: "Sneha",
      age: 21,
      role: "Intern",
      email: "sneha@example.com",
      isActive: false,
    },
  ]);

  function updateProfile(val: singlePro) {
    const updated = profile.map((item) =>
      item.id === val.id ? { ...item, name: "Jesus" } : item
    );
    setProfile(updated);
  }

  return (
    <div>
      {profile.map((item) => {
        return (
          <ul key={item.id}>
            <li>Name: {item.name}</li>
            <p>Age : {item.age}</p>
            <p>Email : {item.email}</p>
            <p>{item.isActive}</p>
            <p>Role :{item.role}</p>
            <button
              className="bg-black text-white p-2 rounded-lg"
              onClick={() => updateProfile(item)}
            >
              Update
            </button>
          </ul>
        );
      })}
    </div>
  );
};

export default Profiles;
