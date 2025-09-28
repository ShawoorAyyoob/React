import { useState } from "react";
import OnImg from "../assets/switch-on.jpg";
import OffImg from "../assets/switch-off.jpg";

const ToggleButton = () => {
  const [isOn, setON] = useState(true);
  return (
    <div>
      <img src={isOn ? OnImg : OffImg} alt="" onClick={() => setON(!isOn)} />
      <h2>Switch is {isOn ? "Off" : "On"}</h2>
    </div>
  );
};
export default ToggleButton;