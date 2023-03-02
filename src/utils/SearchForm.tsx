import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
// import "./SearchForm.css";

export default function SearchForm() {
  const [enteredTerm, setEnteredTerm] = useState<string | undefined>("");
  const [enteredTermIsValid, setEnteredTermIsValid] = useState<boolean | null>(
    null
  );

  const term = useRef(0);
  const history = useHistory();

  const termInputChangeHandler = (event: any) => {
    setEnteredTerm(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    // if (enteredTerm.trim() === "") {
    //   setEnteredTermIsValid(false);
    //   return;
    // }

    setEnteredTermIsValid(true);

    history.push(`/search-results/${term.current}`);
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
          // ref={term}
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
}
