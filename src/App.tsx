import Authentication from "./ConditionalRendering/Authentication";
import Weather from "./ConditionalRendering/Weather";
import Counter from "./Hooks/UseState/Counter";
import Map from "./Methods/Map";
import Person from "./Props/Person";

function App() {
  return (
    <div>
      <Map />
      <Person name="thePrimeTime" age={52} career="Youtuber" />{" "}
      {/*-have to pass number inside curly braces -*/}
      <Weather temperature={25} />
      <Authentication isAdmin={true} isLoggedIn={true} />
      <Counter />
    </div>
  );
}

export default App;
