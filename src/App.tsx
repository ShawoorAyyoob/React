import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
import ProductList from "./Components/ProductList";
import RecipeList from "./Components/RecipeList";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About Us</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
