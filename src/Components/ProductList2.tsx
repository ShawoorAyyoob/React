import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
    category: string;
    brand: string;
    rating: number;
    description: string;
}
function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchProducts = async () => {
        const response = await fetch(
            "https://dummyjson.com/products"
        );
        if (response.ok == false) {
            setError(`Error while loading Recipes`);
        } else {
            const data = await response.json();
            setProducts(data.products);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (error != null) {
        return <h3>Error, Please Wait.</h3>;
    }

    return (
        <div className="container mt-4">
            <ul className="list-group">
                {products.map((product) => (
                    <li key={product.image} className="list-group-item">
                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ProductList;