import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

export const CardItem = ({
  item,
  handleStar,
}: {
  item: any;
  handleStar: any;
}) => {
  return (
    <Card
      hoverable
      key={item?.id}
      style={{
        width: "20rem",
        marginBottom: "1.5rem",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: item?.star ? "yellow" : "white",
      }}
      cover={
        <img
          onClick={() =>
            window.open(
              `https://www.themoviedb.org/movie/${item?.id}`,
              "_blank noreferrer noopener"
            )
          }
          alt="example"
          style={{ width: "100%" }}
          src={`https://image.tmdb.org/t/p/w200/${item?.backdrop_path}`}
        />
      }
    >
      <div className="card-item-content">
        <h2 className="rank">#{item?.rank}</h2>
        <h4
          onClick={() =>
            window.open(
              `https://www.themoviedb.org/movie/${item?.id}`,
              "_blank noreferrer noopener"
            )
          }
          className="title"
        >
          {item?.title}
        </h4>
        <div className="footer">
          <div className="left-content">
            <p className="vote">{item?.vote_average}</p>
            <p className="vote">{item?.release_date}</p>
          </div>
          <StarOutlined
            style={{ fontSize: "2rem", alignSelf: "flex-end" }}
            onClick={() => handleStar(item?.id)}
          />
        </div>
      </div>
    </Card>
  );
};
