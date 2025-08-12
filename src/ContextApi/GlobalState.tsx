import { createContext, useState, useContext } from "react";

type ContextType = {
  name: string;
  age: number;
  theme: string;
  changeTheme: () => void;
  updateName: (newName: string) => void;
};

// 1️⃣ No default object — use `null` instead
const GlobalContext = createContext<ContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

// 2️⃣ Define all values and functions inside GlobalState
const GlobalState = ({ children }: Props) => {
  const [name, setName] = useState("Allwin");
  const [age] = useState(25);
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const updateName = (newName: string) => {
    setName(newName);
  };

  return (
    <GlobalContext.Provider
      value={{ name, age, theme, changeTheme, updateName }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// 3️⃣ Safe custom hook for consuming context
const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalState provider"
    );
  }
  return context;
};

export default GlobalState;
export { useGlobalContext };
