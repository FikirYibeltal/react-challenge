import axios from "axios";
import { MovieEndpoint } from "./movie.endpoint";

export const getTopRatedApi = (page: number) => {
  return axios
    .get(MovieEndpoint.getTopRatedMovies + `&page=${page}`)
    .then((result) => {
      return result?.data;
    });
};
