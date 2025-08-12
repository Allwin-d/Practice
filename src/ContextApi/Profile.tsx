import { useGlobalContext } from "./GlobalState"; // ✅ use the safe custom hook

const Profile = () => {
  const { name, theme, changeTheme } = useGlobalContext(); // ✅ correct function name

  return (
    <div>
      <p>{name}</p>
      <p>Theme: {theme}</p>
      <button onClick={changeTheme}>Switch Theme</button>
    </div>
  );
};

export default Profile;
