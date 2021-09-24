import React, { useEffect, useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { fetchAll } from "./components/fetchApi";
import { CardItem } from "./components/CardItem";
import { TitleSort } from "./components/TitleSort";
import { RatingSort } from "./components/RatingSort";
import { Button, Spin } from "antd";
import { movieType } from "./models/movieType";

function App() {
  const [movieList, setMovieList]: any = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetchAll(setMovieList, setLoading);
  }, []);

  const handleStar = (id: any) => {
    if (localStorage.getItem("" + id) === "true") {
      setMovieList(
        movieList?.map((item: any) =>
          item?.id === id ? { ...item, star: false } : item
        )
      );
      localStorage.setItem("" + id, "false");
    } else {
      setMovieList(
        movieList?.map((item: movieType) =>
          item?.id === id ? { ...item, star: true } : item
        )
      );
      localStorage.setItem("" + id, "true");
    }
  };
  if (loading)
    return (
      <div className="loading-spinner">
        <Spin size={"large"} />
      </div>
    );
  return (
    <div className="app-container">
      <div className="header">Top 500 Movies of all Time</div>
      <div className="sort-items">
        <p className="sort-title">Sort By:</p>
        <TitleSort movieList={movieList} setMovieList={setMovieList} />
        <RatingSort movieList={movieList} setMovieList={setMovieList} />
      </div>

      <div className="movie-list-grid">
        {movieList?.slice(0, currentPage * 20).map((item: any, index: any) => (
          <CardItem key={item?.id} item={item} handleStar={handleStar} />
        ))}
      </div>
      <div className="load-more">
        <Button
          type="primary"
          disabled={currentPage === 25}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Load More
        </Button>
      </div>
    </div>
  );
}

export default App;
