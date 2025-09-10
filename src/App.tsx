import GreetingCon from "./Task1/ConditionalRendering/GreetingCon";
import UserStatus from "./Task1/ConditionalRendering/UserStatus";
import Weather from "./Task1/ConditionalRendering/Weather";
import Greeting from "./Task1/Jsx/Greeting";
import ProductInfo from "./Task1/Jsx/ProductInfo";
import UserList from "./Task1/Methods/UserList";
import Person from "./Task1/Props/Person";
import Product from "./Task1/Props/Product";

function App() {
  return (
    <div>
      <Greeting />
      <ProductInfo />
      <UserList />
      <Person name="Unmukt" age={32} />
      <Product name="Apple" price={70000} />
      <Weather temperature={17} />
      <UserStatus loggedIn={true} isAdmin={false} />
      <GreetingCon timeOfDay="morning" />
    </div>
  );
}

export default App;
