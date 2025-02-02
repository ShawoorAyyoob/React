import { useState } from "react";
import "./App.css";
// import message from "./Components/message";
// import Cars from "./Components/Cars";
import CourseList from "./Components/CourseList";
import Products from "./Components/Products";
import LoginStatus from "./Components/LoginStatus";
import Fruits from "./Components/fruits";
import Courses from "./Components/NewCourses";
import Cars from "./Components/Cars3";
import getCars from "./Services/CarsService";

function App() {
  return (
    <div>
      <Cars list={getCars()} />
    </div>
  );
}

export default App;
