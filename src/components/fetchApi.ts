import { getTopRatedApi } from "../api/movie.api";
export const fetchAll = async (setMovieList: any, setLoading: any) => {
  const pages = Array.from(Array(25).keys());
  console.log(pages);
  let data;
  let results: any = [];
  try {
    setLoading(true);
    data = await Promise.all(
      pages.map((page, index) => getTopRatedApi(page + 1))
    );
    data.forEach((perPage) => {
      results.push(...perPage?.results);
    });
    results = results.map((item: any, index: any) => {
      const ItemSubset = {
        id: item?.id,
        title: item?.title,
        vote_average: item?.vote_average,
        backdrop_path: item?.backdrop_path,
        release_date: item?.release_date,
      };
      return {
        ...ItemSubset,
        rank: index + 1,
        star: localStorage.getItem("" + item?.id) === "true",
      };
    });
    setLoading(false);
    setMovieList(results);
    localStorage.setItem("19404", "true");
  } catch (error) {
    setLoading(false);
    throw error;
  }
};
