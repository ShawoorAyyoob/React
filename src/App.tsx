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
import getProduct from "./Services/ProductService";
import Counter from "./Components/Counter";
import Toggle from "./Components/Toggle";
import NameInput from "./Components/NameInput";
import ToggleButton from "./Components/ToggleSwitch";
import Greeting from "./Components/Greetings";
import ArticleList from "./Components/ArticleList";
import UserList from "./Components/UserList";

function App() {
//   return (
//     <div>
//       <h1>La Vendar</h1>
//       <Greeting>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt optio molestias tempora? Pariatur non dignissimos recusandae, quibusdam, qui.</Greeting> 
//     </div>
//   );
return(
  <div>
          <UserList/>
  </div>
)
}

export default App;
