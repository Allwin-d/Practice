import Authentication from "./ConditionalRendering/Authentication";
import Weather from "./ConditionalRendering/Weather";
import FetchDataEffect from "./Hooks/UseEffectd/FetchDataEffect";
import Counter from "./Hooks/UseState/Counter";
import ShoppingCart from "./Hooks/UseState/ShoppingCart";
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
      <ShoppingCart />
      <FetchDataEffect />
    </div>
  );
}

export default App;
