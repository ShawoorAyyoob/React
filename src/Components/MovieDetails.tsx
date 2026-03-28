import { Link, useParams } from "react-router-dom";
import Movie from "../Models/Tmdb";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../Services/TmdbService";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieDetails.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      if (id) {
        const data = await fetchMovieDetails(Number(id));
        setMovie(data);
        setLoading(false);
      }
    };
    getDetails();
  }, [id]);

  return (
    <div className="container mt-4">
      {loading ? (
        <p className="text-center">Loading Movie Details...</p>
      ) : movie ? (
        <div className="details-card">
          {/* Left: Poster */}
          <div className="details-poster-section">
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="details-poster"
            />
          </div>

          {/* Right: Info */}
          <div className="details-info-section">
            <h2 className="details-title">{movie.title}</h2>

            <p className="details-overview">{movie.overview}</p>

            <div className="details-badges">
              <span
                className={`status-badge status-${movie.status.toLowerCase().replace(/ /g, "-")}`}
              >
                {movie.status}
              </span>
              <span className="details-rating">⭐ {movie.vote_average}</span>
              <span className="details-date">🗓 {movie.release_date}</span>
            </div>

            <table className="detail-table">
              <tbody>
                <tr>
                  <td className="detail-key">Original Title</td>
                  <td className="detail-value">{movie.title}</td>
                </tr>
                <tr>
                  <td className="detail-key">Budget</td>
                  <td className="detail-value">
                    {movie.budget === 0
                      ? "N/A"
                      : `$${movie.budget.toLocaleString()}`}
                  </td>
                </tr>
                <tr>
                  <td className="detail-key">Revenue</td>
                  <td className="detail-value">
                    {movie.revenue === 0
                      ? "N/A"
                      : `$${movie.revenue.toLocaleString()}`}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="genre-tags mt-3">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="genre-tag">
                  {genre.name}
                </span>
              ))}
              <Link to="/popular-movies" className="btn btn-primary ms-5">
                ← Back to Movies
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">Movie not found.</p>
      )}
    </div>
  );
};
export default MovieDetails;
