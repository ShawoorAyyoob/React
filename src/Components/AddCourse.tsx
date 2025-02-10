import { useState } from "react";

const AddCourse = () => {
  const API_URL = "https://67a97dfc6e9548e44fc3c6ea.mockapi.io/courses";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [fees, setFees] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser();
  };

  const addUser = async () => {
    let requestBody = { title, description, duration, fees };
    let requestBodyJSON = JSON.stringify(requestBody);
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: requestBodyJSON,
    };
    const response = await fetch(API_URL, request);
    if (response.ok) {
      console.log("Course added.");
      const data = await response.json();
      console.log(data);
    }
  };

  return (
    <div>
      <h2>Add Course</h2>
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
};
export default AddCourse;
