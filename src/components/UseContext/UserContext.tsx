/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import type { ReactNode } from "react";

type UserContextType = {
  name: string;
  age: number;
  isMarried: boolean;
};

export const GlobalContext = createContext<UserContextType | null>(null); //we should always createcontext outside of the function

type ChildrenProp = {
  children: ReactNode;
};

const UserContextProvider = ({ children }: ChildrenProp) => {
  //this is the function that we wrap in the app component
  const name = "Allwin";
  const age = 24;
  const isMarried = false;

  return (
    <GlobalContext.Provider value={{ name, age, isMarried }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default UserContextProvider;
