import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = ({ fetchSearchResult }) => {
  const [enteredTerm, setEnteredTerm] = useState("");
  const [enteredTermIsValid, setEnteredTermIsValid] = useState(null);

  const term = useRef(0);
  const navigate = useNavigate();

  const termInputChangeHandler = (event) => {
    setEnteredTerm(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTerm.trim() === "") {
      setEnteredTermIsValid(false);
      return;
    }

    setEnteredTermIsValid(true);

    navigate(`/search-results/${term.current.value}`);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="box">
        <input
          type="text"
          name=""
          className={`${
            enteredTermIsValid === false
              ? "form-control invalid"
              : "form-control"
          }`}
          ref={term}
          value={enteredTerm}
          onChange={termInputChangeHandler}
          placeholder="חפש..."
        />
        <button id="search-form-btn">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
