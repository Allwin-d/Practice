import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { userInter } from "./Types";
import axios from "axios";
import { useState } from "react";

const API_URL = "https://6996cbd27d1786436575503c.mockapi.io/users";

const Crud = () => {
  const [user, setUser] = useState<userInter>({
    name: "",
    address: "",
    email: "",
    password: "",
    phone: "",
    role: "",
    status: "",
    avatarUrl: "",
    userName: "",
  });

  const queryClient = useQueryClient();

  const fetchUsers = async (): Promise<userInter[]> => {
    try {
      const response = await axios.get<userInter[]>(API_URL);
      return response.data;
    } catch (err) {
      console.error("Failed to fetch Data : ", err);
      throw err;
    }
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  console.log("UsersData: ", data);
  const adduser = async (user: userInter): Promise<userInter> => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      const data: userInter = await response.json(); // ✅ await added
      return data;
    } catch (err) {
      console.error("Failed to Add new User:", err);
      throw err; // ✅ important for useMutation / proper typing
    }
  };

  const AddUser = useMutation({
    mutationFn: adduser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  const deleteuser = async (id: number): Promise<void> => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to Delete User");
  };

  const DeleteUser = useMutation({
    mutationFn: deleteuser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  if (isError) {
    return (
      <div className="flex items-center justify-center text-red-600 text-4xl">
        <p>Failed to fetch Data...</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center text-blue-600 text-4xl">
        <p>Loading Data ...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 ">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.phone}</p>
              <p>{item.address}</p>
              <p>{item.role}</p>
              <button
                className="bg-red-700 text-white text-xl"
                onClick={() => DeleteUser.mutate(item.id!)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>There is No Data Here ..</p>
        )}
      </div>
      <div className="flex flex-row space-x-3">
        <p>Name : </p>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        ></input>
      </div>
      <div className="flex flex-row space-x-3">
        <p>UserName : </p>
        <input
          type="text"
          value={user.userName}
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
        ></input>
      </div>
      <div>
        <p>Address: </p>
        <input
          type="text"
          value={user.address}
          onChange={(e) => setUser({ ...user, address: e.target.value })}
        ></input>
      </div>
      <div>
        <p>Email: </p>
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
      </div>
      <div>
        <p>password :</p>
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
      </div>
      <div>
        <p>Status : </p>
        <input
          type="text"
          value={user.status}
          onChange={(e) => setUser({ ...user, status: e.target.value })}
        ></input>
      </div>
      <div>
        <p>Role : </p>
        <input
          type="text"
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
        ></input>
      </div>
      <div className="flex flex-row space-x-4">
        <p>phone : </p>
        <input
          type="number"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        ></input>
      </div>
      <button className="cursor-pointer" onClick={() => AddUser.mutate(user)}>
        Add User
      </button>
    </div>
  );
};

export default Crud;
