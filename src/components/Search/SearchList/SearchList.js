import React from "react";
import SearchItem from "../SearchItem/SearchItem";

const SearchList = ({ data }) => {
  return (
    <>
      {data &&
        data.map((list, index) => (
          <SearchItem
            key={index}
            item={list.item}
            link={list.link}
            trackDone={list.trackDone}
          ></SearchItem>
        ))}{" "}
    </>
  );
};

export default SearchList;
