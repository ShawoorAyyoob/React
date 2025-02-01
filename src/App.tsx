import { useState } from "react";
import "./App.css";
import Message from "./Components/Message";
import Cars from "./Components/Cars";
import CourseList from "./Components/CourseList";
import Products from "./Components/Products";
import LoginStatus from "./Components/LoginStatus";
import Fruits from "./Components/fruits";
import Courses from "./Components/NewCourses";
function App() {
  const courses = [
    {
      id: 1,
      Name: "Java",
      Instructor: 'Aeraf',
    },
    {
      id: 2,
      Name: "Html",
      Instructor: 'Aeraf',
    },
    {
      id: 3,
      Name: "Cyber",
      Instructor: 'Aeraf',
    },
    {
      id: 4,
      Name: "Cloud",
      Instructor: 'Aeraf',
    },
  ];
  return (
    <div>
      <Courses list={courses} title="Courses list" />
    </div>
  );
}

export default App;
