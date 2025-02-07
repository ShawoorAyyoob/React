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
import Message from "./Components/Message";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      {/* <Link to="/">React App</Link> | <Link to="/">Home</Link> | <Link to="/about">About Us</Link> | <Link to="/component">Components</Link> */}
        <div className="container-fluid">
    <a className="navbar-brand" href="#"><Link to="/">React App</Link></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/">Home</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" ><Link to="/about">About Us</Link></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <Link to="/component">Components</Link>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Recipes</a></li>
            <li><a className="dropdown-item" href="#">Toggle</a></li>
            <li><a className="dropdown-item" href="#">Message</a></li>
            <li><a className="dropdown-item" href="#">User List</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/component" element={<RecipeList/>}></Route>
        <Route path="/component" element={<Toggle/>}></Route>
        <Route path="/component" element={<Message/>}></Route>
        <Route path="/component" element={<UserList/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
