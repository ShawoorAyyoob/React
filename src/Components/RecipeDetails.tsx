import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Recipe {
  id: number;
  name: string;
  image: string[];
  instructions: string[];
  ingredients: String[];
  servings: number;
  cookTimeMinutes: number;
  mealType: string[];
}

function RecipeDetails() {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipes = async () => {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
    if (res.ok == false) {
      setError("Error, While laoding Details... :< ");
    } else {
      const data = await res.json();
      setRecipe(data);
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, [id]);

  if (error != null) {
    return <h3>{error}</h3>;
  }
  if (recipe == null) {
    return <h3>Please Wait, Details are loading...</h3>;
  }
  return (
    <>
      <div className="container mt-4">
        <div
          className="card shadow rounded-4"
          style={{ maxWidth: 800, margin: "0 auto" }}
        >
          <div className="row g-0 align-items-center">
            <div className="col-md-5 text-center p-4">
              {recipe.image && recipe.image[0] ? (
                <img
                  src={recipe.image[0]}
                  alt={recipe.name}
                  className="img-fluid rounded-3"
                  style={{
                    maxHeight: 260,
                    objectFit: "cover",
                    background: "#f5f7fa",
                  }}
                />
              ) : (
                <div className="text-muted">Image not available</div>
              )}
            </div>
            <div className="col-md-7">
              <div className="card-body p-4">
                <h2 className="card-title text-primary mb-3">{recipe.name}</h2>
                <p
                  className="card-text mb-3"
                  style={{ color: "#374151", lineHeight: 1.7 }}
                >
                  {recipe.mealType}
                </p>
                <div className="mb-3">
                  <ol className="list-group list-group-numbered mb-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="list-group-item">
                        {ingredient}
                      </li>
                    ))}
                  </ol>

                  <ol className="list-group list-group-numbered mb-3">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index} className="list-group-item">
                        {instruction}
                      </li>
                    ))}
                  </ol>

                  <span className="badge bg-secondary bg-opacity-75 fs-6 me-2">
                    Servings: {recipe.servings}
                  </span>
                  <span className="badge bg-warning bg-opacity-75 fs-6">
                    ⭐ Cook Time: {recipe.cookTimeMinutes} mins
                  </span>
                </div>
                <Link to="/recipe-search" className="btn btn-gradient mt-2">
                  <i className="bi bi-arrow-left me-1"></i>Back to Recipes
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
    </>
  );
}
export default RecipeDetails;
