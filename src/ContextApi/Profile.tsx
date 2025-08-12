import { useContext } from "react";
import { GlobalContext } from "./GlobalState";

const Profile = () => {
  const { name, theme, setTheme } = useContext(GlobalContext);

  return (
    <div>
      <p>{name}</p>
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme("dark")}>Switch to Dark</button>
    </div>
  );
};

export default Profile;
