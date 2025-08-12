import { createContext } from "react";

// 1️⃣ Define the type
type ContextType = {
  name: string;
  age: number;
  theme: string;
  setTheme: (theme: string) => void;
};

// 2️⃣ Define values & functions OUTSIDE the component
let themeValue = "light";

const setTheme = (theme: string) => {
  themeValue = theme;
  console.log("Theme updated to:", themeValue);
};

// Example constants
const name = "Allwin";
const age = 25;

// 3️⃣ Create context with default values
const GlobalContext = createContext<ContextType>({
  name,
  age,
  theme: themeValue,
  setTheme,
});

type Props = {
  children: React.ReactNode;
};

// 4️⃣ Provider component
const GlobalState = ({ children }: Props) => {
  return (
    <GlobalContext.Provider value={{ name, age, theme: themeValue, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

// 5️⃣ Export everything
export default GlobalState;
export { GlobalContext, name, age, themeValue, setTheme };
