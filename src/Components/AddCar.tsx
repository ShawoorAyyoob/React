import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
    const API_URL = "https://67a97dfc6e9548e44fc3c6ea.mockapi.io/Cars";

    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();
    const [brandError, setBrandError] = useState("");
    const [modelError, setModelError] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isValidForm()) {
            addCar();
            setMessage("Car added successfully!");
        } else setMessage(" Please fill the form");
    };
    const isValidForm = () => {
        let validForm: Boolean = true;

        if (brand.trim() === "") {
            setBrandError("Brand is required");
            validForm = false;
        } else {
            setBrandError("");
        }
        if (model.trim() === "") {
            setModelError("Model is required");
            validForm = false;
        } else {
            setModelError("");
        }
        return validForm;
    };
    const addCar = async () => {
        let requestBody = { brand, model, price };
        let requestBodyJSON = JSON.stringify(requestBody);
        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: requestBodyJSON,
        };
        const response = await fetch(API_URL, request);
        if (response.ok) {
            setMessage("Car added successfully!");
            setBrand("");
            setModel("");
            setPrice("");
            setTimeout(() => navigate("/carlist"), 2000);
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
                <div className="w-100" style={{ maxWidth: 480 }}>
                    {message && (
                        <div className="alert alert-success alert-dismissible fade show text-center fw-semibold shadow-sm" role="alert">
                            <i className="bi bi-check-circle-fill me-2"></i>
                            {message}
                        </div>
                    )}
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-5">
                            <h2 className="mb-4 fw-bold text-primary text-center">
                                <i className="bi bi-plus-circle me-2"></i>Add New Car
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 text-start">
                                    <label htmlFor="brandTextBox" className="form-label fw-semibold text-secondary">Brand</label>
                                    <input
                                        className={`form-control ${brandError ? "is-invalid" : ""}`}
                                        type="text"
                                        name="brandTextBox"
                                        id="brandTextBox"
                                        placeholder="Enter Car Brand"
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                    />
                                    {brandError && <div className="invalid-feedback">{brandError}</div>}
                                </div>
                                <div className="mb-3 text-start">
                                    <label htmlFor="modelTextBox" className="form-label fw-semibold text-secondary">Model</label>
                                    <input
                                        className={`form-control ${modelError ? "is-invalid" : ""}`}
                                        type="text"
                                        name="modelTextBox"
                                        id="modelTextBox"
                                        placeholder="Enter Car Model"
                                        value={model}
                                        onChange={(e) => setModel(e.target.value)}
                                    />
                                    {modelError && <div className="invalid-feedback">{modelError}</div>}
                                </div>
                                <div className="mb-4 text-start">
                                    <label htmlFor="priceTextBox" className="form-label fw-semibold text-secondary">Price</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        name="priceTextBox"
                                        id="priceTextBox"
                                        placeholder="Enter Car Price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-gradient py-2 fw-semibold fs-5 shadow-sm" type="submit">
                                        <i className="bi bi-check-circle me-2"></i>Add Car
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
export default AddCar;