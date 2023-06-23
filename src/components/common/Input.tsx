import React, { useState } from "react";

function Input() {
  const [input, setInput] = useState("");

  return (
    <div>
      <label>Username:</label>
      {/* <input type="text" value={username} onChange={onUsernameChange} /> */}
    </div>
  );
}

export default Input;
