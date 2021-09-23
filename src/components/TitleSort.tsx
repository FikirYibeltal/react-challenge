import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import React from "react";

export const TitleSort = ({
  movieList,
  setMovieList,
}: {
  movieList: any;
  setMovieList: any;
}) => {
  const handleTitleMenuClick = (e: any) => {
    console.log(e.key);
    let sorted = [...movieList];
    if (e.key === "1") {
      sorted = sorted?.sort((a: any, b: any) => {
        return (a?.title).localeCompare(b.title);
      });
    } else {
      sorted = sorted?.sort((a: any, b: any) => {
        return (b?.title).localeCompare(a.title);
      });
    }
    setMovieList(sorted);
  };
  const titleMenu = (
    <Menu onClick={handleTitleMenuClick}>
      <Menu.Item key="1">Ascending</Menu.Item>
      <Menu.Item key="2">Descending</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={titleMenu}>
      <Button>
        Title <DownOutlined />
      </Button>
    </Dropdown>
  );
};
