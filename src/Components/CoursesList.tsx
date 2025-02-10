import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Course {
  id: number;
  title: string;
  description: string;
}
function CoursesList() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [error, setError] = useState<string | null>(null);

    const API_URL = "https://67a97dfc6e9548e44fc3c6ea.mockapi.io/courses";
  const fetchCourses = async () => {
    const response = await fetch(API_URL);
    if (response.ok == false) {
      setError(`Error while loading Courses`);
    } else {
      const data = await response.json();
      setCourses(data);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (error != null) {
    return <h3>Error, Please Wait.</h3>;
  }

  return (
    <>
      <div>
        <Link to="/add-course" className="btn btn-outline-success mb-3">
          Add Course
        </Link>
      </div>
      <div className="container mt-4">
        <h1> Courses List</h1>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr>
                <th scope="row">{course.id}</th>
                <td>{course.title}</td>
                <td>{course.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default CoursesList;
