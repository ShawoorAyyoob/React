import { useState } from "react";
import OnImg from "../assets/on.jpg";
import OffImg from "../assets/off.jpg";

const ToggleButton = () => {
    const [isOn, setON] = useState(true);
    return (
        <div>
            <h1>Toggle</h1>
            <img src={isOn? OnImg: OffImg } alt="" />
            <h2>{isOn ? "On" : "Off"}</h2>
            <button onClick={() => setON(!isOn)}> Click</button>
        </div>
    );
};
export default ToggleButton;
