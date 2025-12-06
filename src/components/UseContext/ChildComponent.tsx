import { useContext } from "react";
import { GlobalContext } from "./UserContext";

const ChildComponent = () => {
  const Data = useContext(GlobalContext);
  console.log(Data);

  return (
    <div>
      <p>{Data?.name}</p>
      <p>{Data?.age}</p>
      <p>
        {Data?.isMarried ? (
          <span>He is Married</span>
        ) : (
          <span>He is not Married</span>
        )}
      </p>
    </div>
  );
};

export default ChildComponent;
