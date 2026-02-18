import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

type Product = {
  id: string;
  name: string;
  data: Record<string, unknown>;
};

const Crud = () => {
  const API_URL = "https://api.restful-api.dev/objects";
  const [newProd, setNewProd] = useState({
    id: "",
    name: "",
    data: {},
  });
  //   const queryClient =

  const fetchProducts = async (): Promise<Product[]> => {
    const response = await axios.get<Product[]>(API_URL);
    console.log("Data from Crud : ", response.data);
    return response.data; // return actual data only
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  //   const addNewProduct =()=>{

  //   }

  //   const addProduct = useMutation({
  //     mutationFn : addNewProduct,
  //     onSuccess :
  //   })

  console.log("The New Item Value : ", newProd);

  if (isError) {
    return <p>Failed to fetch Data</p>;
  }

  if (isLoading) {
    return <p>Loading Data ...</p>;
  }

  return (
    <div>
      <p>Helooooooooooooooooo</p>

      {data?.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <hr />
          <p>{item.name}</p>
        </div>
      ))}
      <div className="flex flex-row space-x-4">
        <p>Id: </p>
        <input
          type="number"
          value={newProd.id}
          onChange={(e) =>
            setNewProd({ ...newProd, id: String(e.target.value) })
          }
        />
      </div>

      <div className="flex flex-row space-x-4">
        <p>Name : </p>
        <input
          type="text"
          value={newProd.name}
          onChange={(e) =>
            setNewProd({ ...newProd, name: String(e.target.value) })
          }
        ></input>
      </div>

      <div className="flex flex-row space-x-4">
        <p>Data : </p>
        <input
          type="text"
          value={JSON.stringify(newProd.data)}
          onChange={(e) =>
            setNewProd({ ...newProd, data: { value: e.target.value } })
          }
        />
      </div>
    </div>
  );
};

export default Crud;
