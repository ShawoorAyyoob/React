import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail?: string;
    images?: string[];
    category: string;
    brand: string;
    rating: number;
}
function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product>();
    const [error, setError] = useState<string | null>(null);

    const fetchProducts = async () => {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (response.ok == false) {
            setError(`Error while loading Content`);
        } else {
            const data = await response.json();
            setProduct(data);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [id]);

    if (error != null) {
        return <h3 className="text-danger text-center mt-5">{error}</h3>;
    }
    if (product == null) {
        return <h3 className="text-center mt-5">Please Wait...</h3>;
    }
    return (
        <div className="container mt-4">
            <div className="card shadow rounded-4" style={{ maxWidth: 800, margin: "0 auto" }}>
                <div className="row g-0 align-items-center">
                    <div className="col-md-5 text-center p-4">
                        <img
                            src={product.thumbnail || (product.images && product.images[0])}
                            alt={product.title}
                            className="img-fluid rounded-3"
                            style={{ maxHeight: 260, objectFit: "cover", background: "#f5f7fa" }}
                        />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body p-4">
                            <h2 className="card-title text-primary mb-3">{product.title}</h2>
                            <p className="card-text mb-3" style={{ color: "#374151", lineHeight: 1.7 }}>
                                {product.description}
                            </p>
                            <div className="mb-3">
                                <span className="badge bg-success bg-opacity-75 fs-6 me-2">
                                    ${product.price}
                                </span>
                                <span className="badge bg-info bg-opacity-75 fs-6 me-2">
                                    {product.category}
                                </span>
                                <span className="badge bg-secondary bg-opacity-75 fs-6 me-2">
                                    {product.brand}
                                </span>
                                <span className="badge bg-warning bg-opacity-75 fs-6">
                                    ⭐ {product.rating}
                                </span>
                            </div>
                            <Link to="/products-search" className="btn btn-gradient mt-2">
                                <i className="bi bi-arrow-left me-1"></i>Back to Products
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                .btn-gradient {
                    background: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);
                    color: #fff;
                    border: none;
                    font-weight: 600;
                    box-shadow: 0 2px 8px #3f5efb22;
                    transition: background 0.2s, color 0.2s;
                }
                .btn-gradient:hover {
                    background: linear-gradient(90deg, #3f5efb 0%, #fc466b 100%);
                    color: #fff;
                }
                `}
            </style>
        </div>
    );
}
export default ProductDetails;