import React, { useState } from "react";
import "./style.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  function onLogin() {
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
  }

  return (
    <div className="container">
      <label>Username:</label>
      <input type="text" value={username} onChange={onUsernameChange} />
      <label>Password:</label>
      <input type="password" value={password} onChange={onPasswordChange} />
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
