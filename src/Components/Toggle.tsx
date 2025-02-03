import { useState } from "react";

const Toggle = () => {
  const [isOn, setON] = useState(true);
  return (
    <div>
      <h1>Toggle Demo</h1>
      <img src="" alt="" />
      <h2>{isOn ? "On" : "Off"}</h2>
      <button onClick={() => setON(!isOn)}> Click</button>
    </div>
  );
};
export default Toggle;
