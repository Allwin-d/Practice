const Map = () => {
  const dummyData = [
    {
      id: 1,
      name: "Item 1",
      description: "Description for Item 1",
      price: 10.99,
    },
    {
      id: 2,
      name: "Item 2",
      description: "Description for Item 2",
      price: 12.5,
    },
    {
      id: 3,
      name: "Item 3",
      description: "Description for Item 3",
      price: 8.75,
    },
    {
      id: 4,
      name: "Item 4",
      description: "Description for Item 4",
      price: 15.2,
    },
    {
      id: 5,
      name: "Item 5",
      description: "Description for Item 5",
      price: 6.99,
    },
    {
      id: 6,
      name: "Item 6",
      description: "Description for Item 6",
      price: 11.3,
    },
    {
      id: 7,
      name: "Item 7",
      description: "Description for Item 7",
      price: 14.8,
    },
    {
      id: 8,
      name: "Item 8",
      description: "Description for Item 8",
      price: 9.4,
    },
    {
      id: 9,
      name: "Item 9",
      description: "Description for Item 9",
      price: 13.6,
    },
    {
      id: 10,
      name: "Item 10",
      description: "Description for Item 10",
      price: 7.25,
    },
  ];

  const products = [
    {
      id: 1,
      name: "Phone",
      price: "$699",
    },
    {
      id: 2,
      name: "Samsung",
      price: "$1200",
    },
    {
      id: 3,
      name: "Laptop",
      price: "$2000",
    },
  ];

  return (
    <div>
      <ul>
        {dummyData.map((item, index) => {
          //map method performs call back function for each element in here...,here we also provide index to specify each element
          return (
            <div key={index}>
              <li> Name : {item.name}</li>
              <li>Description : {item.description}</li>
              <li>Price: {item.price}</li>
            </div>
          );
        })}
      </ul>
      <ul>
        {products.map((item, index) => {
          return (
            <div key={index}>
              <li>{item.name}</li>
              <li>{item.price}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Map;
