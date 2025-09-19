import { useState } from "react";
import type { ReactNode } from "react";
import { GlobalContext } from "./GlobalContextType";

type UserProviderProps = {
  children: ReactNode;
};

export default function UserContext({ children }: UserProviderProps) {
  const [name, setName] = useState("Elon");
  const [email, setEmail] = useState("elon@musk.com");
  const [address, setAddress] = useState("United States");

  return (
    <GlobalContext.Provider
      value={{ name, setName, email, setEmail, address, setAddress }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
