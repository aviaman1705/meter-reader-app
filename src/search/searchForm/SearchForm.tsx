import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "../../utils/Button";
import "./SearchForm.css";

export default function SearchForm() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [enteredTerm, setEnteredTerm] = useState<string | undefined>("");

  const history = useHistory();

  const termInputChangeHandler = (event: any) => {
    if (event.target.value === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
    setEnteredTerm(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    const term = enteredTerm;
    setEnteredTerm("");

    history.push(`/search-results/${term}`);
  };

  return (
    <form id="search-form" onSubmit={submitHandler}>
      <input
        type="text"
        id="term"
        className="form-control pe-1"
        value={enteredTerm}
        onChange={termInputChangeHandler}
        placeholder="חפש..."
      />

      <Button
        type="submit"
        id="search-form-btn"
        className="btn btn-primary ms-1"
        disabled={isDisabled}
      >
        <i className="fa fa-search" aria-hidden="true"></i>
      </Button>
    </form>
  );
}
