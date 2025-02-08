import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

interface Product {
    // id: number;
    title: string;
    description: string;
    price: number;
    image: string;
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
    }, []);

    if (error != null) {
        return <h3>Error, Please Wait.</h3>;
    }
    if (product == null) {
        return <h3>Please Wait.</h3>;
    }
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <p>{product.brand}</p>
            <p>{product.rating}</p>
            <img src={product.image} alt="" />
            <p>
                <strong> 💰 Price:</strong> {product.price}
            </p>
            <Link to="/">Back To Products</Link>
        </div>
    );
}
export default ProductDetails;