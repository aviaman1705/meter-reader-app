import { Fragment, useState } from "react";
import axios from "axios";

function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFirstNameChange = (value) => {
    setFirstName(value);
  };

  const handleLastNameChange = (value) => {
    setLastName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleUserNameChange = (value) => {
    setUserName(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };

  const handleSave = () => {
    const data = {
      FirstName: firstName,
      LastName: lastName,
      EmailAddress: email,
      Username: userName,
      Password: password,
      ConfirmPassword: confirmPassword,
    };

    const url = "https://localhost:44319/api/Test/Registration";
    axios
      .post(url, data)
      .then((result) => {
        alert(result.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Fragment>
      <div>Registration</div>
      <label>FirstName</label>
      <input
        type="text"
        id="txtFirstName"
        placeholder="שם פרטי"
        onChange={(e) => handleFirstNameChange(e.target.value)}
      />
      <br></br>
      <label>LastName</label>
      <input
        type="text"
        id="txtLastName"
        placeholder="שם משפחה"
        onChange={(e) => handleLastNameChange(e.target.value)}
      />
      <br></br>
      <label>Email</label>
      <input
        type="email"
        id="txtEmail"
        placeholder="מייל"
        onChange={(e) => handleEmailChange(e.target.value)}
      />
      <br></br>
      <label>UserName</label>
      <input
        type="text"
        id="txtUserName"
        placeholder="שם משתמש"
        onChange={(e) => handleUserNameChange(e.target.value)}
      />
      <br></br>
      <label>Password</label>
      <input
        type="password"
        id="txtPassword"
        placeholder="סיסמא"
        onChange={(e) => handlePasswordChange(e.target.value)}
      />
      <br></br>
      <label>Confirm Password</label>
      <input
        type="password"
        id="txtConfirmPassword"
        placeholder="וידוא סיסמא"
        onChange={(e) => handleConfirmPasswordChange(e.target.value)}
      />
      <br></br>
      <button onClick={() => handleSave()}>Save</button>
    </Fragment>
  );
}

export default Registration;
