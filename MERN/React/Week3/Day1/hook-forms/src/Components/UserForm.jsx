import React, { useState } from "react";
import "./Main.css"

const UserForm = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmp, setConfirmp] = useState("");

  const createUser = (e) => {
    e.preventDefault();
  };

  const newUser = {
    username: firstname,
    lastname: lastname,
    email: email,
    password: password,
    confirmp: confirmp,
  };

  console.log(" Welcome , ", newUser);
  return (
    <form onSubmit={createUser}>
      <div className="form">
        <label> First Name : </label>
        <input  type="text" onChange={(e)=> {setFirstname(e.target.value)} } placeholder="First Name "/>

        <label> Last Name : </label>
        <input  type="text" onChange={(e)=> {setLastname(e.target.value)} } placeholder="Last Name "/>

        <label> Email : </label>
        <input  type="email" onChange={(e)=> {setEmail(e.target.value)} } placeholder="Email  "/>

        <label> Password : </label>
        <input  type="password" onChange={(e)=> {setPassword(e.target.value)} } placeholder="Password  "/>

        <label> Conform Password : </label>
        <input  type="password" onChange={(e)=> {setConfirmp(e.target.value)} } placeholder="Confirm Password  "/>
      </div>
    </form>
  );
};

export default UserForm;
