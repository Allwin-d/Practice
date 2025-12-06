// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import Greeting from "./components/Greeting";
// import ProductInfo from "./components/ProductInfo";

import UserStatus from "./components/ConditionalRendering/UserStatus";
import Weather from "./components/ConditionalRendering/Weather";

// import ParentPerson from "./components/props/ParentPerson";

// import ArrayOfObj from "./components/ArrayOfObj";

const App = () => {
  return (
    <div>
      {/* <Header />
      <MainContent />
      <Footer /> */}
      {/* <Greeting />
      <ProductInfo /> */}
      {/* <ArrayOfObj /> */}
      {/* <ParentPerson /> */}
      <Weather temperature={25} />
      <UserStatus loggedIn={true} isAdmin={true} />
    </div>
  );
};

export default App;
