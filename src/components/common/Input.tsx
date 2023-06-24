import { type } from "os";
import React, { useState } from "react";

interface Input {
  label: string;
  type?: string;
}

function InputField(props: Input) {
  const [input, setInput] = useState("");
  const { label, type = "text" } = props;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  function onclick() {
    console.log(input);
  }

  return (
    <div>
      <label>{label}</label>
      <input type={type} value={input} onChange={onChange} />
    </div>
  );
}

export default InputField;
