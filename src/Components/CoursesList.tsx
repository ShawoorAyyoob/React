import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditCourse from "./EditCourse";

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  fees: string;
  image: string;
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
  const deleteCourse = async (id: string) => {
    const request = {
      method: "DELETE",
    };
    const response = await fetch(`${API_URL}/ ${id}`, request);
    const data = response.json();

    const updatedCourses = courses.filter((course) => course.id != id);
    setCourses(updatedCourses);
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
         ➕ Add Course
        </Link>
      </div>
      <div className="container mt-4">
        <h1> Courses List</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Duration</th>
              <th scope="col">Fees</th>
              <th scope="col">Image</th>
              <th scope="col">More</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr>
                <th scope="row">{course.id}</th>
                <td>{course.title}</td>
                <td>{course.description}</td>
                <td>{course.duration}</td>
                <td>{course.fees}</td>
                <td>
                  <img src={course.image} alt="..." />
                </td>
                <td>
                     <Link className="btn btn-success" to={`/edit-course/${course.id}`}>⚙️ Edit </Link>
                  <button
                    className="btn btn-danger" 
                    onClick={() => deleteCourse(course.id)}
                  >
                   ❌ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default CoursesList;
