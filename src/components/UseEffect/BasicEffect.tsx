import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log(
      "i used to render only when the compoenent render for the first time"
    );
  }, []);

  return <div></div>;
};

export default BasicEffect;
