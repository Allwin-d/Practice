import Map from "./Methods/Map";
import Person from "./Props/Person";

function App() {
  return (
    <div>
      <Map />
      <Person name="thePrimeTime" age={52} career="Youtuber" />
    </div>
  );
}

export default App;
