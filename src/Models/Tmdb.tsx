export default interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  popularity: number;
  vote_average: number;
  status: string;
  budget: number;
  revenue: number;
  genres: Genre[];
}

interface Genre {
  id: number;
  name: string;
}