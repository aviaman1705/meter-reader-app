import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ fetchSearchResult }) => {
  const term = useRef(0);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    navigate(`/search-result?term=${term.current.value}`);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input-group input-group-outline">
        <label className="form-label">חפש...</label>
        <input type="text" className="form-control" ref={term} />
      </div>
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
