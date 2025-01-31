import { useState } from 'react';
import './App.css';
import Message from './Components/Message';
import Cars from './Components/Cars';
import CourseList from './Components/CourseList';
import Products from './Components/Products';
import LoginStatus from "./Components/LoginStatus";
function App() {
  return (
    <div>
      <LoginStatus />
    </div>
  );
}

export default App;
