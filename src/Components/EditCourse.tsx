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
          `https://67a97dfc6e9548e44fc3c6ea.mockapi.io/courses/${id}`);
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
            console.log("Course updated.");
            const data = await response.json();
            console.log(data);
            setMessage("Course Updated Successfully");
            setTitle("");
            setDescription("");
            setDuration("");
            setFees("");
            setTimeout(() => navigate("/courses"), 2000); 
        }
  };
    return (
      <div>
        {message ? (
          <div className="alert alert-primary alert-dismissible">{message}</div>
        ) : (
          <div></div>
        )}

        <h2>Edit Course</h2>
        <form className="border p-3 shadow-lg rounded" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="titleTextBox" className="text-secondary">
              Title
            </label>
          </div>
          <div>
            <input
              className="form-control mb-4"
              type="text"
              name="titleTextBox"
              id="titleTextBox"
              placeholder="Course Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="descriptionTextBox" className="text-secondary">
              Description
            </label>
          </div>
          <div>
            <input
              className="form-control mb-4"
              type="text"
              name="descriptionTextBox"
              id="descriptionTextBox"
              placeholder="Course Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="durationTextBox" className="text-secondary">
              Duration
            </label>
          </div>
          <div>
            <input
              className="form-control mb-4"
              type="text"
              name="durationTextBox"
              id="durationTextBox"
              placeholder="Course Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="feesTextBox" className="text-secondary">
              Fees
            </label>
          </div>
          <div>
            <input
              className="form-control mb-4"
              type="number"
              name="feesTextBox"
              id="feesTextBox"
              placeholder="Course Fees"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
}
export default EditCourse;