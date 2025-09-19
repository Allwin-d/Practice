import { useContext } from "react";
import { GlobalContext } from "./GlobalContextType";

type ContextTypes = {
  name: string;
  address: string;
};

const UserProfile = () => {
  const { name, address } = useContext(GlobalContext) as ContextTypes;

  return (
    <>
      <h1>Name : {name}</h1>
      <span>Address : {address}</span>
    </>
  );
};

export default UserProfile;
