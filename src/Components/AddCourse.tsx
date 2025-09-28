import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const API_URL = "https://67a97dfc6e9548e44fc3c6ea.mockapi.io/courses";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [fees, setFees] = useState("");
  const navigate = useNavigate();
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isValidForm()) {
      addCourse();
      setMessage("");
    } else setMessage("Please fill the form");
  };
  const isValidForm = () => {
    let validForm: Boolean = true;

    if (title.trim() === "") {
      setTitleError("Please fill the title.");
      validForm = false;
    } else {
      setTitleError("");
    }
    if (description.trim() === "") {
      setDescriptionError("Please fill the Description.");
      validForm = false;
    } else {
      setDescriptionError("");
    }
    return validForm;
  };

  const addCourse = async () => {
    let requestBody = { title, description, duration, fees };
    let requestBodyJSON = JSON.stringify(requestBody);

    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: requestBodyJSON,
    };
    const response = await fetch(API_URL, request);
    if (response.ok) {
      setMessage("Course Added Successfully");
      setTitle("");
      setDescription("");
      setDuration("");
      setFees("");
      setTimeout(() => navigate("/courses"), 2000);
    }
  };

  return (
    <div
      className="container-fluid"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #f5f7fa 60%, #c3cfe2 100%)",
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <div className="d-flex align-items-center justify-content-center w-100" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: 520 }}>
          {message && (
            <div className="alert alert-success alert-dismissible fade show text-center fw-semibold shadow-sm" role="alert">
              <i className="bi bi-check-circle-fill me-2"></i>
              {message}
            </div>
          )}
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h2 className="mb-4 fw-bold text-primary text-center">
                <i className="bi bi-plus-circle me-2"></i>Add Course
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
                    <i className="bi bi-check-circle me-2"></i>Add Course
                  </button>
                </div>
              </form>
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
export default AddCourse;