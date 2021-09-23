import { environment } from "../environments/environment.dev";

export const MovieEndpoint = {
  getTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${environment.TMDB_API_KEY}`,
};
