// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import Greeting from "./components/Greeting";
// import ProductInfo from "./components/ProductInfo";

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
      <Weather temperature ={25} />
    </div>
  );
};

export default App;
