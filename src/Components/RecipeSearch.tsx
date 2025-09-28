import { useEffect, useState } from "react";
import './RecipeSearch.css'
import { Link } from "react-router-dom";

interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    prepTimeMinutes: number;
    cuisine: string;
    image: string;
}

function RecipeSearch() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [error, setError] = useState<String | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const API_URL = "https://dummyjson.com/recipes"

    const fetchRecipes = async () => {
        const res = await fetch(API_URL);
        if (res.ok == false) {
            setError('Error while loading Recipes')
        }
        else {
            const data = await res.json();
            setRecipes(data.recipes);
        }
    }
    useEffect(() => {
        fetchRecipes();
    });
    if (error != null) {
        return <h3>Error, while laoding Recipes</h3>
    };
    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <>
            <div className="container mt-4">
                <h2 className="mb-4 fw-bold text-primary">🍽 Recipe List</h2>
                <input className="form-control mb-3 shadow-sm"
                    type="text"
                    name="searchBox"
                    id="searchBox"
                    value={searchTerm}
                    placeholder=" 🔎 Search Recipe"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            < div className="container mt-4" >
                {error && <p className="text-danger">{error}</p>}
                <div className="row">
                    {filteredRecipes.map((recipe) => (
                        <div key={recipe.id} className="col-md-4 mb-4">
                            <div className="card h-100 border-0 shadow-sm position-relative hover-card">
                                {recipe.image && (
                                    <img src={recipe.image} alt="..." className="card-img-top"
                                        style={{ objectFit: "cover", height: "200px", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }} />)}
                                <div className="card-body d-flex flex-column">
                                    <h3 className="card-title text-danger fw-bold">{recipe.name}</h3>
                                    <h5 className="card-title text-danger">{recipe.cuisine}</h5>
                                    <p className="card-text mb-2"><span className="fw-semibold text-success">Preparation Time: </span> {recipe.prepTimeMinutes}</p>
                                    <Link to= {`/recipes/${recipe.id}`} className="btn btn-gradient mt-auto"> View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </>
    );
};

export default RecipeSearch;