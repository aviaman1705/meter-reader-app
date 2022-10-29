import React from "react";

import "./SearchResultItem.css";
const SearchResultItem = ({ item }) => {
  return (
    <div className="col-12">
      <div id="search-item">
        <h2 id="search-item-title">{item.number}</h2>
        <div id="search-item-called">{item.called}</div>
        <div id="search-item-uncalled">{item.uncalled}</div>
      </div>
    </div>
  );
};

export default SearchResultItem;
