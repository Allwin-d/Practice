import { useState, useEffect } from "react";

// Example type
type TotalType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const FetchDataEffect = () => {
  const [data, setData] = useState<TotalType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const apiData: TotalType[] = await response.json();
        console.log(apiData);
        setData(apiData);
      } catch (e) {
        console.error("Failed to fetch data", e);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetched Data</h1>

      {data && data.length > 0 ? (
        <div>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.id}</p>
                <h1>{item.title}</h1>
              </div>
            );
          })}
        </div>
      ) : (
        <p>There is no data in here...</p>
      )}
    </div>
  );
};

export default FetchDataEffect;
