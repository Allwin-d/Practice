import { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);


  //this useEffect runs whenever the page mounts 
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
