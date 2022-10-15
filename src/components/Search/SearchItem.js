import React from "react";

const SearchItem = ({ item, link }) => {
  return (
    <>
      <div>
        <div>{item}</div>
        <div>{link}</div>
      </div>
    </>
  );
};

export default SearchItem;
