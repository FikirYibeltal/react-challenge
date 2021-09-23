import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import React from "react";

export const RatingSort = ({
  movieList,
  setMovieList,
}: {
  movieList: any;
  setMovieList: any;
}) => {
  const handleRatingMenuClick = (e: any) => {
    console.log(e.key);
    let sorted = [...movieList];
    if (e.key === "1") {
      sorted = sorted?.sort((a: any, b: any) => {
        return a?.rank - b?.rank;
      });
    } else {
      sorted = sorted?.sort((a: any, b: any) => {
        return b?.rank - a?.rank;
      });
    }
    setMovieList(sorted);
  };

  const ratingMenu = (
    <Menu onClick={handleRatingMenuClick}>
      <Menu.Item key="1">Ascending</Menu.Item>
      <Menu.Item key="2">Descending</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={ratingMenu}>
      <Button>
        Rating <DownOutlined />
      </Button>
    </Dropdown>
  );
};
