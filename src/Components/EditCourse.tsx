import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditCourse = () => {
  const API_URL = `https://67a97dfc6e9548e44fc3c6ea.mockapi.io/courses`;

  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [duration, setDuration] = useState("");
  const navigate = useNavigate();
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [fees, setFees] = useState("");
  const [message, setMessage] = useState("");

  const fetchCourse = async () => {
    const response = await fetch(
      `https://67a97dfc6e9548e44fc3c6ea.mockapi.io/courses/${id}`
    );
    const data = await response.json();
    setTitle(data.title);
    setDescription(data.description);
    setDuration(data.duration);
    setFees(data.fees);
  };
  useEffect(() => {
    fetchCourse();
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isValidForm()) {
      editCourse();
      setMessage("");
    } else setMessage("Please fill the form");
  };
  const isValidForm = () => {
    let validForm: Boolean = true;

    if (title.trim() == "") {
      setTitleError("Please fill the title.");
      validForm = false;
    } else {
      setTitleError("");
    }
    if (description.trim() == "") {
      setDescriptionError("Please fill the Description.");
      validForm = false;
    } else {
      setDescriptionError("");
    }
    return validForm;
  };
  const editCourse = async () => {
    let requestBody = { title, description, duration, fees };
    let requestBodyJSON = JSON.stringify(requestBody);

    const request = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: requestBodyJSON,
    };
    const response = await fetch(`${API_URL}/${id}`, request);
    if (response.ok) {
      setMessage("Course Updated Successfully");
      setTitle("");
      setDescription("");
      setDuration("");
      setFees("");
      setTimeout(() => {
        setMessage("");
        navigate("/courses");
      }, 2000);
    }
  };
  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(120deg, #f5f7fa 60%, #c3cfe2 100%)",
        padding: 0,
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <div className="row w-100 justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="col-12 col-md-10 col-lg-8 col-xl-6 d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
          <div className="w-100">
            {message && (
              <div className="alert alert-success alert-dismissible fade show text-center fw-semibold shadow-sm" role="alert">
                <i className="bi bi-check-circle-fill me-2"></i>
                {message}
              </div>
            )}
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-5">
                <h2 className="mb-4 fw-bold text-primary text-center">
                  <i className="bi bi-pencil-square me-2"></i>Edit Course
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 text-start">
                    <label htmlFor="titleTextBox" className="form-label fw-semibold text-secondary">
                      Title
                    </label>
                    <input
                      className={`form-control ${titleError ? "is-invalid" : ""}`}
                      type="text"
                      name="titleTextBox"
                      id="titleTextBox"
                      placeholder="Course Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    {titleError && <div className="invalid-feedback">{titleError}</div>}
                  </div>
                  <div className="mb-3 text-start">
                    <label htmlFor="descriptionTextBox" className="form-label fw-semibold text-secondary">
                      Description
                    </label>
                    <textarea
                      className={`form-control ${descriptionError ? "is-invalid" : ""}`}
                      name="descriptionTextBox"
                      id="descriptionTextBox"
                      placeholder="Course Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={3}
                    />
                    {descriptionError && <div className="invalid-feedback">{descriptionError}</div>}
                  </div>
                  <div className="mb-3 text-start">
                    <label htmlFor="durationTextBox" className="form-label fw-semibold text-secondary">
                      Duration
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="durationTextBox"
                      id="durationTextBox"
                      placeholder="Course Duration"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    />
                  </div>
                  <div className="mb-4 text-start">
                    <label htmlFor="feesTextBox" className="form-label fw-semibold text-secondary">
                      Fees
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      name="feesTextBox"
                      id="feesTextBox"
                      placeholder="Course Fees"
                      value={fees}
                      onChange={(e) => setFees(e.target.value)}
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-gradient py-2 fw-semibold fs-5 shadow-sm">
                      <i className="bi bi-check-circle me-2"></i>Update Course
                    </button>
                  </div>
                  <div className="mt-3 text-center">
                    <Link to="/courses" className="text-decoration-none text-secondary">
                      <i className="bi bi-arrow-left me-1"></i>Back to Courses
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        .btn-gradient {
          background: linear-gradient(90deg, #43cea2 0%, #185a9d 100%);
          color: #fff;
          border: none;
          transition: background 0.2s, color 0.2s;
        }
        .btn-gradient:hover {
          background: linear-gradient(90deg, #185a9d 0%, #43cea2 100%);
          color: #fff;
        }
      `}
      </style>
    </div>
  );
};
export default EditCourse;