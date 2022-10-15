import React from "react";
import SearchItem from "./SearchItem";

const SearchList = ({ data }) => {
  return (
    <>
      {data &&
        data.map((list) => (
          <SearchItem item={list.item} link={list.link}></SearchItem>
        ))}
    </>
  );
};

export default SearchList;
