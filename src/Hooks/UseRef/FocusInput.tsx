import { useRef } from "react";
//It is used to access dom elements without re-rendering our components

const FocusInput = () => {
  const inputElement = useRef<HTMLInputElement>(null); // Type the ref

  const updateInputField = () => {
    if (inputElement.current) {
      inputElement.current.focus(); // Focus the input
      inputElement.current.value = "Hello Allwin";
    }
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={updateInputField}>Click to Focus Input field</button>
    </div>
  );
};

export default FocusInput;
