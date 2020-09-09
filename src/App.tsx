import React, { useState } from "react";
import "./styles.css";

interface StateObj {
  id?: string;
  name?: string;
  checked?: boolean;
}

export default function App() {
  const [obj, setObj] = useState<StateObj>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    console.log(value, checked);
    if (checked) {
      setObj([...obj, { name }]);
    } else {
      setObj(obj.filter((tool) => tool.name != name));
    }
  };
  return (
    <div className="App">
      M{" "}
      <input
        type="checkbox"
        name="M"
        value="M"
        checked={obj.checked}
        onChange={handleChange}
      />
      F
      <input
        type="checkbox"
        name="F"
        value="F"
        checked={obj.checked}
        onChange={handleChange}
      />
      L{" "}
      <input
        type="checkbox"
        name="L"
        value="L"
        checked={obj.checked}
        onChange={handleChange}
      />
      N{" "}
      <input
        type="checkbox"
        value="N"
        name="N"
        checked={obj.checked}
        onChange={handleChange}
      />
      <p>{JSON.stringify(obj)}</p>
    </div>
  );
}
