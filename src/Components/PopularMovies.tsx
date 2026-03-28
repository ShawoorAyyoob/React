import { fetchPopularMovies } from "../Services/TmdbService";
import Movie from "../Models/Tmdb";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './PopularMovies.css'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const PopularMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await fetchPopularMovies();
      setMovies(movieData);
      setLoading(false);
    };
    fetchMovies();
  }, []);
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Popular Movies</h2>

      {loading ? (
        <p className="text-center">Loading Movies...</p>
      ) : (
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-md-4 col-lg-3 mb-4 d-flex">
              <div className="card h-100">
                <img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">
                    ⭐ {movie.vote_average} | 🗓 {movie.release_date}
                  </p>
                  <p className="card-text">
                    {movie.overview.substring(0, 80)}...
                  </p>
                  <Link to={`/movies/${movie.id}/`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default PopularMovies;
