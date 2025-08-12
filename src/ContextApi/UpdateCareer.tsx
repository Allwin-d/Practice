import { useGlobalContext } from "./GlobalState";

const UpdateCareer = () => {
  const { career, updateCareer } = useGlobalContext();

  return (
    <div>
      <p>{career}</p>
      <button onClick={updateCareer}>Click to Update Career </button>
    </div>
  );
};

export default UpdateCareer;
