import { useEffect, useState } from "react";
interface Product {
  title: string;
  image: string;
  price: number;
  category: string;
}
function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  });

  return (
    <>
      {products.map((product) => (
        <div className="card w-75 mb-3">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">
              <img src={product.image} className="card-img-top" alt="..." />
              <br /> {product.price} <br /> {product.category}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
export default ProductList;
