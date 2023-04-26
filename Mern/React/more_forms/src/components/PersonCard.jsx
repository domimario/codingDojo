import React, { useState } from "react";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    if (newName.length < 2) {
      setNameError("Name must be at least 2 characters");
    } else {
      setNameError("");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail.length < 2) {
      setEmailError("Email must be at least 2 characters");
    } else {
      setEmailError("");
    }
  };

  const handleLastNameChange = (e) => {
    const newLastName = e.target.value;
    setLastName(newLastName);

    if (newLastName.length < 2) {
      setLastNameError("Last name must be at least 2 characters");
    } else {
      setLastNameError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    if (newConfirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <>
      <div>
        <label>First Name </label>
        <input type="text" value={name} onChange={handleNameChange} />
        <div>{nameError && <span>{nameError}</span>}</div>
      </div>

      <div>
        <label>Last Name </label>
        <input type="text" value={lastName} onChange={handleLastNameChange} />
        <div> {lastNameError && <span>{lastNameError}</span>}</div>{" "}
      </div>
      <div>
        <label>Email </label>
        <input type="text" value={email} onChange={handleEmailChange} />
        <div> {emailError && <span>{emailError}</span>}</div>{" "}
      </div>
      <div>
        <label>Password </label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <div> {passwordError && <span>{passwordError}</span>}</div>{" "}
      </div>
      <div>
        <label>Confirm Password </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <div>{confirmPasswordError && <span>{confirmPasswordError}</span>}</div>
      </div>
    </>
  );
};

export default UserForm;
