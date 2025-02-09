import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
}
function FilteredProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

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
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h1> Filtered Products</h1>
      <input
        type="color-red"
        name="searchBox"
        id="searchBox"
        value={searchTerm}
        placeholder="Search title"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="list-group">
        {filteredProducts.map((product) => (
          <li key={product.id} className="list-group-item">
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FilteredProductList;
