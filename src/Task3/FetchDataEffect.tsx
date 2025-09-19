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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<ResponseDataType[]>(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (err) {
        setError("Failed to fetch data");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </>
  );
};

export default FetchDataEffect;
