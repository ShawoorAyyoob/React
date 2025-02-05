import { useEffect, useState } from "react";
interface Recipe {
  name: string;
  ingredients: string;
  instructions: string;
}
function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = async () => {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
    setRecipes(data);
  };
  useEffect(() => {
    fetchRecipes();
  }, );

  return (
    <>
      {recipes.map((recipe) => (
        <div className="card w-75 mb-3">
          <div className="card-body">
            <h5 className="card-title">{recipe.name}</h5>
            <p className="card-text">
              {recipe.ingredients} <br /> {recipe.instructions}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
export default RecipeList;
