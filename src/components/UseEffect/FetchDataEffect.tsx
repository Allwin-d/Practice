import { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const fetchedData = await response.json();
      setData(fetchedData);
    };

    FetchData();
  }, []);

  console.log("Data: ", data);

  return <div></div>;
};

export default FetchDataEffect;
