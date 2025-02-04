import { useState, useEffect } from "react";

const Toggle = () => {
  const [isOn, setON] = useState(true);
  useEffect(() => {
    console.log("Updated Log");
  });

  return (
    <div>
      <h1>Toggle Demo</h1>
      <h2>{isOn ? "On" : "Off"}</h2>
      <button onClick={() => setON(!isOn)}> Click</button>
    </div>
  );
};
export default Toggle;
