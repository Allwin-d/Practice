//Conditional rendering in React means showing or hiding UI elements based on certain conditions (like if statements in JavaScript). Instead of always rendering everything, React lets you decide what to display depending on the state, props, or logic.

type WeatherType = {
  temperature: number;
};
const Weather = ({ temperature }: WeatherType) => {
  if (temperature <= 15) {
    <h2>Cold Outside</h2>;
  } else if (temperature >= 15 && temperature <= 25) {
    <h2>Nice Outside..</h2>;
  } else {
    <h2>Hot Outside..</h2>;
  }

  return <div></div>;
};

export default Weather;
