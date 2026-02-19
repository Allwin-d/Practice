import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

type Product = {
  id: string;
  name: string;
  data: Record<string, unknown>;
};

const Crud = () => {
  const API_URL = "/api/objects"; // ✅ Use the Vite proxy

  const [newProd, setNewProd] = useState<Product>({
    id: "",
    name: "",
    data: {},
  });

  const queryClient = useQueryClient();

  // Fetch products
  const fetchProducts = async (): Promise<Product[]> => {
    const response = await axios.get<Product[]>(API_URL);
    console.log("Data from Crud:", response.data);
    return response.data;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // Add product mutation
  const addProductMutation = useMutation({
    mutationFn: async (prod: Product) => {
      const response = await axios.post(API_URL, prod, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  if (isError) return <p>Failed to fetch data</p>;
  if (isLoading) return <p>Loading data...</p>;

  return (
    <div>
      <h2>Products</h2>
      {data?.map((item) => (
        <div key={item.id} className="mb-2">
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
          <pre>{JSON.stringify(item.data, null, 2)}</pre>
          <hr />
        </div>
      ))}

      <div className="flex flex-col gap-2 mt-4">
        <div className="flex gap-2 items-center">
          <label>ID:</label>
          <input
            type="text"
            value={newProd.id}
            onChange={(e) => setNewProd({ ...newProd, id: e.target.value })}
          />
        </div>

        <div className="flex gap-2 items-center">
          <label>Name:</label>
          <input
            type="text"
            value={newProd.name}
            onChange={(e) => setNewProd({ ...newProd, name: e.target.value })}
          />
        </div>

        <div className="flex gap-2 items-center">
          <label>Data (JSON):</label>
          <input
            type="text"
            value={JSON.stringify(newProd.data)}
            onChange={(e) => {
              try {
                setNewProd({ ...newProd, data: JSON.parse(e.target.value) });
              } catch {
                // invalid JSON, ignore or handle
              }
            }}
          />
        </div>

        <button
          onClick={() => addProductMutation.mutate(newProd)}
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default Crud;
