type WeatherProp = {
  temperature: number;
};

const Weather = ({ temperature }: WeatherProp) => {
  if (temperature < 15) {
    return <p>Its..cold Outside</p>;
  } else if (temperature > 15 && temperature <= 25) {
    return <p>Its nice Outside...</p>;
  } else {
    return <p>Its hot Outside...</p>;
  }

  return <div>
    
  </div>;
};

export default Weather;
