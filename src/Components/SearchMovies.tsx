import { useState } from "react";
import { fetchMovies } from "../Services/TmdbService";
import Movie from "../Models/Tmdb";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const SearchMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");

  const searchBar = async (e:React.FormEvent) => {
    e.preventDefault();
    const response = await fetchMovies(query);
    setMovies(response);
  }
  return(
    <>
    <div className="container mt-4">
        <h2> Movies</h2>
        <form onSubmit={searchBar}>
            <input 
            type="text" 
            placeholder="Search Movies"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button type="button">Search</button>
        </form>

        <div className="row">
            {movies.map((movie)=>(
            <div key={movie.id} className="col-md-4 col-lg-3 mb-4">
              <div className="card">
                <img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="card-img-top"
                />
                 <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">
                    ⭐ {movie.vote_average} | 🗓 {movie.release_date} </p>
                </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    </>
  )
};
export default SearchMovies;