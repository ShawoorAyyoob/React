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
import EditCourse from "./Components/EditCourse";
import AddCar from "./Components/AddCar";
import EditCar from "./Components/EditCar";
import CarList from "./Components/CarList";
import PostSearch from "./Components/PostSearch";
import RecipeSearch from "./Components/RecipeSearch"
import RecipeDetails from "./Components/RecipeDetails";
import PopularMovies from "./Components/PopularMovies";
import SearchMovies from "./Components/SearchMovies";

function App() {
  return (
    <Router>
      <div className="container mt-4"> </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/postList" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/posts-search" element={<PostSearch />} />
        <Route path="/popular-movies" element={<PopularMovies />} />
        <Route path="/movies-search" element={<SearchMovies />} />
        <Route path="/recipe-search" element={<RecipeSearch />} />
        <Route path="/recipes/:id" element={<RecipeDetails/>} />
        <Route path="/products-search" element={<FilteredProductList />}></Route>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/courses" element={<CoursesList />}></Route>
        <Route path="/add-course" element={<AddCourse />}></Route>
        <Route path="/edit-course/:id" element={<EditCourse />}></Route>
        <Route path="/carlist" element={<CarList />}> Cars</Route>
        <Route path="/add-car" element={<AddCar />}> Add Car</Route>
        <Route path="/edit-car/:id" element={<EditCar />}> Edit Car</Route>
      </Routes>
    </Router >
  );
}
export default App;