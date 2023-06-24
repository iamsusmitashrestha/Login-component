import { Link } from "react-router-dom";
import InputField from "../../components/common/Input";

function Register() {
  function onRegister() {
    console.log(`Name: `);
    console.log(`Email: `);
    console.log(`Address: `);
    console.log(`Phone: `);
    console.log(`Gender: `);
    console.log(`Password: `);
  }

  return (
    <div className="container">
      <InputField label="Name" />
      <InputField label="Email" type="email" />
      <InputField label="Address" />
      <InputField label="Phone Number" />
      <InputField label="Gender" />
      <InputField label="Password" type="password" />

      <button onClick={onRegister}>Register</button>

      <Link to="login">Goto Login</Link>
    </div>
  );
}

export default Register;
