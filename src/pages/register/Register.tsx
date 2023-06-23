import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };
  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const onGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  function onRegister() {
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Address: ${address}`);
    console.log(`Phone: ${phone}`);
    console.log(`Gender: ${gender}`);
    console.log(`Password: ${password}`);
  }

  return (
    <div className="container">
      <label>Name:</label>
      <input type="text" value={name} onChange={onNameChange} />
      <label>Email:</label>
      <input type="email" value={email} onChange={onEmailChange} />
      <label>Address:</label>
      <input type="text" value={address} onChange={onAddressChange} />
      <label>Phone Number:</label>
      <input type="number" value={phone} onChange={onPhoneChange} />
      <label>Gender:</label>
      <input type="text" value={gender} onChange={onGenderChange} />
      <label>Password:</label>
      <input type="password" value={password} onChange={onPasswordChange} />
      <button onClick={onRegister}>Register</button>

      <Link to="login">Goto Login</Link>
    </div>
  );
}

export default Register;
