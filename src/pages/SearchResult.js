import React from "react";
import { useParams } from "react-router-dom";
import SearchList from "../components/Search/SearchList";

const SearchResult = ({ searchList }) => {
  const params = new URLSearchParams(window.location.pathname);
  alert(this.props.match.params.term);
  return <SearchList data={searchList} />;
};

export default SearchResult;
