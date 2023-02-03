import React, { useState } from "react";

const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = event.target;

    // Find user login info
    //const userData = database.find((user) => user.username === uname.value);

    fetch("https://localhost:44319/api/account", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ username: uname.value, password: pass.value }),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res) {
          this.setState({ message: "New Employee is Created Successfully" });
        }
      });

    // fetch(`https://localhost:44319/api/account/login`, {
    //   method: "POST",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify({ username: uname.value, password: pass.value }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));

    // Compare user info
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({
    //       name: "pass",
    //       message: errors.pass,
    //     });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({
    //     name: "uname",
    //     message: errors.uname,
    //   });
    // }
  };
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return renderForm;
};

export default Login;
