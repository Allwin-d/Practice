type greetProps = {
  timeOfDay: string;
};

//Conditional rendering based on ternary operator
const Greetings = ({ timeOfDay }: greetProps) => {
  return (
    <div>
      {timeOfDay === "Morning" ? (
        <h2>Good Morning </h2>
      ) : (
        <h2>Good Afternoon</h2>
      )}
    </div>
  );
};

export default Greetings;
