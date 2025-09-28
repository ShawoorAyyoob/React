import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './CarList.css';

interface Car {
    id: string;
    brand: string;
    model: string;
    price: string;
    image?: string;
}
function CarsList() {
    const [cars, setCars] = useState<Car[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const API_URL = "https://67a97dfc6e9548e44fc3c6ea.mockapi.io/Cars";
    const fetchCars = async () => {
        const response = await fetch(API_URL);
        if (response.ok == false) {
            setError("Failed to fetch cars");
        } else {
            const data = await response.json();
            const carImages = [
                "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80"
            ];
            const carsWithImages = data.map((car: Car, idx: number) => ({
                ...car,
                image: car.image || carImages[idx % carImages.length] ||
                    "https://via.placeholder.com/400x200?text=No+Image"
            }));
            setCars(carsWithImages);
        }
    };
    const deleteCar = async (id: string) => {
        window.confirm("Are you sure you want to delete this car?");
        const request = {
            method: "DELETE",
        };
        const response = await fetch(`${API_URL}/${id}`, request);
        const data = await response.json();

        const updatedCars = cars.filter((car) => car.id != id);
        setCars(updatedCars);
    };
    useEffect(() => {
        fetchCars();
    }, []);
    if (error != null) {
        return <h3>Error, please wait.</h3>;
    }
    const filteredCars = cars.filter((car) =>
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <>
            <div className="container mt-4">
                <h2 className="mb-4 fw-bold text-primary">Cars List</h2>
                <input className="form-control mb-3 shadow-sm"
                    type="text"
                    name="searchBox"
                    id="searchBox"
                    value={searchTerm}
                    placeholder=" 🔎 Search Car"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Link to="/add-car" className="btn btn-outline btn-primary mb-3">
                    <i className="bi bi-plus-circle me-2"></i> Add New Car
                </Link>
            </div>
            <div className="container mt-4">
                <div className="row">
                    {filteredCars.map((car) => (
                        <div className="col-md-4 mb-4" key={car.id}>
                            <div className="card h-100 border-0 shadow-sm position-relative hover-card">
                                {car.image && (
                                    <img className="card-img-top"
                                        src={car.image} alt={`${car.brand} ${car.model}`}
                                        style={{ objectFit: "cover", height: "200px", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }}
                                    />)}

                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold">{car.brand} {car.model}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">ID: {car.id}</h6>
                                    <p className="card-text mb-2"><span className="fw-semibold text-success">Price:</span> {car.price}</p>
                                    <div className="mt-auto d-flex justify-content-between">
                                        <Link className="btn btn-outline-primary btn-sm" to={`/edit-car/${car.id}`}>
                                            <i className="bi bi-pencil-square me-1"></i>Edit
                                        </Link>
                                        <button className="btn btn-outline-danger btn-sm" onClick={() => deleteCar(car.id)}>
                                            <i className="bi bi-trash me-1"></i>Delete
                                        </button>
                                    </div>
                                </div>
                                <span className="badge bg-primary position-absolute top-0 end-0 m-2">{car.brand}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default CarsList;