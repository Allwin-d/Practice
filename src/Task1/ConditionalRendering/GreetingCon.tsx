type Greet = {
  timeOfDay: string;
};

const GreetingCon = ({ timeOfDay }: Greet) => {
  return (
    <div>
      {timeOfDay === "morning" ? (
        <h2>Good Morning</h2>
      ) : (
        <h2>Good Afternoon</h2>
      )}
    </div>
  );
};

export default GreetingCon;
