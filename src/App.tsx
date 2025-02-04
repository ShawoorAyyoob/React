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

function App() {
//   return (
//     <div>
//       <h1>La Vendar</h1>
//       <Greeting>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt optio molestias tempora? Pariatur non dignissimos recusandae, quibusdam, qui.</Greeting> 
//     </div>
//   );
 const articles = [
    {
      title: "React",
      body: "React is a JavaScript library created by Facebook for building user interfaces (UIs). It allows developers to create reusable UI components, which can be combined to build complex applications."
    },
    {
      title: "Java",
      body: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."
    },
    {
      title: "Angular",
      body: "Angular is an open-source web application framework maintained by Google and a community of developers. It is designed to build dynamic and interactive single-page applications"
    },
  ];
return(
  <div>
        {articles.map((article) => (
          <ArticleList title={article.title}>{article.body}</ArticleList>
        ))}
  </div>
)
}

export default App;
