const Greeting = () => {
  const Name = "John";
  const date: Date = new Date();

  return (
    <div>
      <h1>Welcome {Name}</h1>
      {/* Convert date to readable string */}
      <p>{date.toLocaleString()}</p>
    </div>
  );
};

export default Greeting;
