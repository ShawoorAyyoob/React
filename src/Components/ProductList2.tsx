import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductList2.css";
interface Product {
  id: number;
  images: string[];
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
    const response = await fetch("https://dummyjson.com/products");
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
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.images[0]} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Title: {product.title}</h5>
              <p className="card-text">
                Brand: {product.brand}. <br />
                Category: {product.category}.<br />
                Price: {product.price}.<br />
                Description: {product.description}.<br />
                Rating: {product.rating}.<br />
              </p>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}
export default ProductList;
