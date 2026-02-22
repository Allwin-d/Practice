import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { userInter } from "./Types";
import axios from "axios";
import { useState } from "react";

const API_URL = "https://6996cbd27d1786436575503c.mockapi.io/users";

const Crud = () => {
  const queryClient = useQueryClient();

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

  const [editUserId, setEditUserId] = useState<number | null>(null);

  // ---------------- FETCH USERS ----------------
  const fetchUsers = async (): Promise<userInter[]> => {
    const response = await axios.get<userInter[]>(API_URL);
    return response.data;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // ---------------- ADD USER ----------------

  //This is using fetch (here we use the method , headers , and body)
  //   const addUser = async (user: userInter): Promise<userInter> => {
  //   const response = await fetch(API_URL, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   });

  //   if (!response.ok) {
  //     throw new Error("Failed to add user");
  //   }

  //   const data = await response.json();
  //   return data;
  // };

  const addUser = async (user: userInter): Promise<userInter> => {
    const response = await axios.post<userInter>(API_URL, user);
    return response.data;
  };

  const AddUserMutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      resetForm();
    },
  });

  // ---------------- DELETE USER ----------------
  const deleteUser = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  };

  const DeleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  // ---------------- UPDATE USER ----------------
  const updateUser = async ({
    id,
    user,
  }: {
    id: number;
    user: userInter;
  }): Promise<userInter> => {
    console.log(`The updated user details : id : ${id} , user det : ${user}`);
    const response = await axios.put(`${API_URL}/${id}`, user);
    return response.data;
  };

  const UpdateUserMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setEditUserId(null);
      resetForm();
    },
  });

  // ---------------- RESET FORM ----------------
  const resetForm = () => {
    setUser({
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
  };

  // ---------------- LOADING & ERROR ----------------
  if (isError) {
    return (
      <div className="flex items-center justify-center text-red-600 text-4xl">
        Failed to fetch Data...
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center text-blue-600 text-4xl">
        Loading Data ...
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* ---------------- USERS LIST ---------------- */}
      <div className="grid grid-cols-4 gap-5 mb-10">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="border p-4 rounded-md shadow-md">
              <p>
                <strong>Name:</strong> {item.name}
              </p>
              <p>
                <strong>Email:</strong> {item.email}
              </p>
              <p>
                <strong>Phone:</strong> {item.phone}
              </p>
              <p>
                <strong>Address:</strong> {item.address}
              </p>
              <p>
                <strong>Role:</strong> {item.role}
              </p>

              <div className="space-x-3 mt-3">
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => DeleteUserMutation.mutate(item.id!)}
                >
                  Delete
                </button>

                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                  onClick={() => {
                    setEditUserId(item.id!);
                    setUser(item); // fill form for editing
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No Data Found</p>
        )}
      </div>

      {/* ---------------- FORM ---------------- */}
      <div className="space-y-3 max-w-md">
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="border p-2 w-full"
        />

        <input
          type="text"
          placeholder="Username"
          value={user.userName}
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
          className="border p-2 w-full"
        />

        <input
          type="text"
          placeholder="Address"
          value={user.address}
          onChange={(e) => setUser({ ...user, address: e.target.value })}
          className="border p-2 w-full"
        />

        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="border p-2 w-full"
        />

        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="border p-2 w-full"
        />

        <input
          type="text"
          placeholder="Phone"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
          className="border p-2 w-full"
        />

        <input
          type="text"
          placeholder="Status"
          value={user.status}
          onChange={(e) => setUser({ ...user, status: e.target.value })}
          className="border p-2 w-full"
        />

        <input
          type="text"
          placeholder="Role"
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
          className="border p-2 w-full"
        />

        <button
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
          onClick={() => {
            if (editUserId) {
              UpdateUserMutation.mutate({
                id: editUserId,
                user: user,
              });
            } else {
              AddUserMutation.mutate(user);
            }
          }}
        >
          {editUserId ? "Update User" : "Add User"}
        </button>
      </div>
    </div>
  );
};

export default Crud;
