import React, { useEffect } from "react";
import { useState } from "react";
import useInput from "../../../hooks/use-input";
import axios from "axios";
import { useHistory } from "react-router-dom";

const RegisterForm = () => {
  let history = useHistory();

  const [usernameServerError, setUsernameServerError] = useState("");
  const [passwordServerError, setPasswordServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    value: enteredUsername,
    hasError: usernameHasError,
    isValid: enteredUsernameIsValid,
    valueChangeHandler: usernameChangeHandler,
    valueBlurHandler: usernameBlurHandler,
    reset: resetUsernameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    isValid: enteredPasswordIsValid,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.length >= 6);

  let formIsValid = false;

  if (enteredUsernameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const navigateTLogin = (event) => {
    event.preventDefault();
    history.push("/login");
  };

  const register = (event) => {
    event.preventDefault();

    if (
      !enteredUsernameIsValid ||
      !enteredEmailIsValid ||
      !enteredPasswordIsValid
    ) {
      return;
    }

    setUsernameServerError("");
    setPasswordServerError("");
    setSuccessMessage("");

    axios
      .post("https://localhost:7241/api/Authenticate/register", {
        username: enteredUsername,
        email: enteredEmail,
        password: enteredPassword,
      })
      .then(function(response) {
        setSuccessMessage("תהליך ההרשמה בוצע בהצלחה.");
      })
      .catch(function(error) {
        if (error.response.data.field === "username") {
          setUsernameServerError(error.response.data.message);
        }
        if (error.response.data.field === "password") {
          setPasswordServerError(error.response.data.message);
        }
      });
  };

  return (
    <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto">
      <div className="card card-form card-plain">
        <div className="card-form-header card-header">
          <h4 className="card-form-title font-weight-bolder">הרשמה</h4>
          <p className="card-form-description mb-0">מלא את השדות כדי להירשם</p>
        </div>
        <div className="card-body">
          <form role="form" className="text-start" onSubmit={register}>
            <div className="input-group input-group-outline my-3">
              <label className="form-label" htmlFor="username">
                שם משתמש
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                onChange={usernameChangeHandler}
                onBlur={usernameBlurHandler}
                value={enteredUsername}
              />
            </div>
            {usernameHasError && (
              <p className="input-error">חובה להזין שם משתמש.</p>
            )}
            {usernameServerError && (
              <p className="input-error">{usernameServerError}</p>
            )}
            <div className="input-group input-group-outline my-3">
              <label className="form-label" htmlFor="email">
                מייל
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
              />
            </div>
            {emailHasError && <p className="input-error">חובה להזין מייל.</p>}
            <div className="input-group input-group-outline mb-3">
              <label className="form-label" htmlFor="password">
                סיסמא
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                value={enteredPassword}
              />
            </div>
            {passwordHasError && (
              <p className="input-error">חובה להזין סיסמא.</p>
            )}
            {passwordServerError && (
              <p className="input-error">{passwordServerError}</p>
            )}
            {successMessage && <p className="input-error">{successMessage}</p>}
            <div className="text-center">
              <button
                type="submit"
                disabled={!formIsValid}
                className="btn bg-gradient-primary w-100 my-4 mb-2"
              >
                הרשמה
              </button>
            </div>
            <p className="mt-4 text-sm text-center">
              יש לך חשבון ?
              <a
                href="/#"
                onClick={navigateTLogin}
                className="text-primary text-gradient font-weight-bold"
              >
                כניסה
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
