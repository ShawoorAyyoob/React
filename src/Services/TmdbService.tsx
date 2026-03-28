import axios from "axios";
import Movie from "../Models/Tmdb";

const API_KEY = "b559c2662d324af3e8c98fde508d81e1";
const BASE_URL = "https://api.themoviedb.org/3";

interface MoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string) => {
  const response = await axios.get<MoviesResponse>(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query: query },
  });
  return response.data.results;
};

export const fetchPopularMovies = async () => {
  const response = await axios.get<MoviesResponse>(
    `${BASE_URL}/movie/popular`,
    {
      params: { api_key: API_KEY },
    }
  );
  return response.data.results;
};

export const fetchMovieDetails = async (movieId: number): Promise<Movie | null> => {
  try {
    const response = await axios.get <Movie>(`${BASE_URL}/movie/${movieId}`, {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error(`Error, while fetching Movies...`, error);
    return null;
  }
};
