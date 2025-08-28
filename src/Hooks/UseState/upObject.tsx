import { useState } from "react";

const UpdatingArrObject = () => {
  type objType = {
    id: number;
    name: string;
  };

  const [obj, setobj] = useState<objType[]>([
    { id: 1, name: "Sach" },
    { id: 2, name: "unmuk" },
  ]);

  function handleChange() {
    setobj(obj.map((m) => (m.id === 2 ? { ...m, name: "Lara" } : m)));
  }

  return (
    <div>
      {obj.length > 0 && <h2>you have {obj.length} items</h2>}
      {obj.map((item, key) => {
        return (
          <div>
            <li>
              {key}
              {item.name}
            </li>
          </div>
        );
      })}
      <button onClick={handleChange}>Change </button>
    </div>
  );
};

export default UpdatingArrObject;
