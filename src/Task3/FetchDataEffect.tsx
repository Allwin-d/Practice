import axios from "axios";
import { useEffect, useState } from "react";

type ResponseDataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const FetchDataEffect = () => {
  const [data, setData] = useState<ResponseDataType[]>([]);

  useEffect(() => {
    //this useEffect runs only when the component mounts for the first time
    const fetchData = async (): Promise<ResponseDataType> => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      setData(response.data);
      return response.data;
    };

    fetchData();
  }, []);

  console.log("fetched data from api : ", data);

  return <>{data}</>;
};

export default FetchDataEffect;
