import { useState } from 'react';
import './App.css';
import Message from './Components/Message';
import Cars from './Components/Cars';
import CourseList from './Components/CourseList';
function App() {
  return (
    <div>
      <h1>Courses</h1>
      <CourseList />
    </div>
  );
}

export default App;
