import Authentication from "./ConditionalRendering/Authentication";
import Weather from "./ConditionalRendering/Weather";
import UpdateCareer from "./ContextApi/UpdateCareer";
import FetchDataEffect from "./Hooks/UseEffectd/FetchDataEffect";
import FocusInput from "./Hooks/UseRef/FocusInput";
import Counter from "./Hooks/UseState/Counter";
import ShoppingCart from "./Hooks/UseState/ShoppingCart";
import Map from "./Methods/Map";
import Person from "./Props/Person";
import UpdatingArrObject from "./Hooks/UseState/upObject";

function App() {
  return (
    <div>
      {/* <Map />
      <Person name="thePrimeTime" age={52} career="Youtuber" />{" "} */}
      {/*-have to pass number inside curly braces - */}
      {/* <Weather temperature={25} />
      <Authentication isAdmin={true} isLoggedIn={true} />
      <Counter />
      <ShoppingCart />
      <FetchDataEffect />
      <UpdateCareer />
      <FocusInput /> */}
      <UpdatingArrObject />
    </div>
  );
}

export default App;
