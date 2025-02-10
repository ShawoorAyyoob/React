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
import PostList from "./Components/PostList";
import PostDetails from "./Components/PostDetails";
import ProductList2 from "./Components/ProductList2";
import ProductDetails from "./Components/ProductDetails";
import FilteredPostList from "./Components/PostSearch";
import FilteredProductList from "./Components/Products3";
import CoursesList from "./Components/CoursesList";
import AddCourse from "./Components/AddCourse";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1>React</h1>
      </div>
      <Routes>
        {/* <Route path="/" element={<ProductList2 />}></Route> */}
        {/* <Route path="/products" element={<ProductDetails />}></Route> */}
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/products-search"
          element={<FilteredProductList />}
        ></Route>
        <Route path="/courses" element={<CoursesList />}></Route>

        <Route path="/add-course" element={<AddCourse />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
