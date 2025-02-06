import { useEffect, useState } from "react";
import "./Recipe.css";

interface Recipe {
  name: string;
  ingredients: string;
  instructions: string;
}
function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipes = async () => {
    const response = await fetch(
      "https://dummyjson.com/recipes?limit=4&skip=4&select=name,ingredients,instructions"
    );
    if (response.ok == false) {
      setError(`Error while loading Recipes`);
    } else {
      const data = await response.json();
      setRecipes(data.recipes);
    }
  };

  useEffect(() => {
    fetchRecipes();
  });

  if (error != null) {
    return <h3>Error while loading Recipes</h3>;
  }
  return (
    <div className="container">
      <h2> Shawoor La Cusine</h2>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-sm-6 mb-3" key={recipe.name}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-3">{recipe.name}</h5>
                <p className="card-text mb-2">
                  <strong>Ingredients:</strong> {recipe.ingredients}
                </p>
                <p className="card-text">
                  <strong>Instructions:</strong> {recipe.instructions}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default RecipeList;
