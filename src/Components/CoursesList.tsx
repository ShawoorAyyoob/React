import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditCourse from "./EditCourse";
import "./CoursesList.css";

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
      const courseImages = [
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
      ];
      const coursesWithImages = data.map((course: Course, idx: number) => ({
        ...course,
        image: course.image || courseImages[idx % courseImages.length],
      }));
      setCourses(coursesWithImages);
    }
  };
  const deleteCourse = async (id: string) => {
    const request = {
      method: "DELETE",
    };
    await fetch(`${API_URL}/${id}`, request);
    const updatedCourses = courses.filter((course) => course.id !== id);
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
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="fw-bold text-success" style={{ letterSpacing: "1px" }}>
            <i className="bi bi-journal-code me-2"></i>
            Explore Our <span className="text-primary">Courses</span>
          </h1>
          <Link to="/add-course" className="btn btn-gradient px-4 py-2 fw-semibold shadow-sm">
            <i className="bi bi-plus-circle me-2"></i>Add Course
          </Link>
        </div>
        <div className="table-responsive rounded-4 shadow-lg">
          <table className="table table-hover align-middle mb-0 bg-white">
            <thead className="bg-gradient text-white">
              <tr>
                <th>Id</th>
                <th>Course</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Fees</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="table-row-hover">
                  <td className="fw-semibold text-secondary">#{course.id}</td>
                  <td>
                    <span className="fw-bold text-primary fs-5">{course.title}</span>
                  </td>
                  <td style={{ maxWidth: "220px" }}>
                    <span className="text-muted">{course.description}</span>
                  </td>
                  <td>
                    <span className="badge bg-success bg-opacity-75 fs-6">{course.duration}</span>
                  </td>
                  <td>
                    <span className="fw-semibold text-success">${course.fees}</span>
                  </td>
                  <td>
                    <img
                      src={course.image}
                      alt={course.title}
                      style={{
                        width: "70px",
                        height: "50px",
                        objectFit: "cover",
                        borderRadius: "0.5rem",
                        border: "2px solid #e0e7ef",
                        boxShadow: "0 2px 8px #e0e7ef55"
                      }}
                    />
                  </td>
                  <td>
                    <Link
                      className="btn btn-outline-primary btn-sm me-2"
                      to={`/edit-course/${course.id}`}
                    >
                      <i className="bi bi-pencil-square me-1"></i>Edit
                    </Link>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteCourse(course.id)}
                    >
                      <i className="bi bi-trash me-1"></i>Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default CoursesList;