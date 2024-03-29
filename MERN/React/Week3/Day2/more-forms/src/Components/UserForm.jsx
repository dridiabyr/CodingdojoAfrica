import React, { useState } from "react";
import "./Main.css";

const UserForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmp, setConfirmp] = useState("");

  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmpError, setConfirmpError] = useState("");

  const createUser = (e) => {
    e.preventDefault();

    // Perform form validation before submission
    if (validateForm()) {
      const newUser = {
        username: firstname,
        lastname: lastname,
        email: email,
        password: password,
        confirmp: confirmp,
      };
      console.log("Welcome, ", newUser);
    }
  };

  const validateForm = () => {
    let isValid = true;

    // First Name validation
    if (firstname.trim().length < 2) {
      setFirstnameError("First Name must be at least 2 characters");
      isValid = false;
    } else {
      setFirstnameError("");
    }

    // Last Name validation
    if (lastname.trim().length < 2) {
      setLastnameError("Last Name must be at least 2 characters");
      isValid = false;
    } else {
      setLastnameError("");
    }

    // Email validation
    if (email.trim().length < 5) {
      setEmailError("Email must be at least 5 characters");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Password validation
    if (password.trim().length < 8) {
      setPasswordError("Password must be at least 8 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    // Confirm Password validation
    if (password !== confirmp) {
      setConfirmpError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmpError("");
    }

    return isValid;
  };

  return (
    <form onSubmit={createUser}>
      <div className="form">
        <label> First Name : </label>
        <input type="text" onChange={(e) => {
            setFirstname(e.target.value);}} placeholder="First Name "/>
            {firstnameError && <p className="error">{firstnameError}</p>}

        <label> Last Name : </label>
        <input type="text" onChange={(e) => {setLastname(e.target.value); }}placeholder="Last Name "/>

        {lastnameError && <p className="error">{lastnameError}</p>}

        <label> Email : </label>
        <input type="email"onChange={(e) => {setEmail(e.target.value);}} placeholder="Email"/>
        {emailError && <p className="error">{emailError}</p>}

        <label> Password : </label>
        <input type="password" onChange={(e) => {setPassword(e.target.value);  }}placeholder="Password  "/>
        
        {passwordError && <p className="error">{passwordError}</p>}

        <label> Confirm Password : </label>
        <input type="password" onChange={(e) => {setConfirmp(e.target.value);}} placeholder="Confirm Password  " />
        
         {confirmpError && <p className="error">{confirmpError}</p>}
        <button type="submit"> Submit </button>
       
      </div>
    </form>
  );
};

export default UserForm;
