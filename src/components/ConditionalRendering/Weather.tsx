type WeatherProps = {
  temperature: number;
};

//conditional rendering based on if else conditions 
const Weather = ({ temperature }: WeatherProps) => {
  if (temperature > 25) {
    return <h2>It's hot outside</h2>;
  } else if (temperature >= 15 && temperature <= 25) {
    return <h2>It's nice outside</h2>;
  } else {
    return <h2>It's cold outside</h2>;
  }
};

export default Weather;
