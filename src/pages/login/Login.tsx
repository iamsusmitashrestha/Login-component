import React, { useState } from "react";
import "./login.style.scss";
import { Link } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  function onLogin() {
    console.log(`Name: ${name}`);
    console.log(`Password: ${password}`);
  }

  return (
    <div className="container">
      <label>Username:</label>
      <input type="text" value={name} onChange={onNameChange} />
      <label>Password:</label>
      <input type="password" value={password} onChange={onPasswordChange} />
      <button onClick={onLogin}>Login</button>
      <Link to="/">Goto SignUp</Link>
    </div>
  );
}

export default Login;
