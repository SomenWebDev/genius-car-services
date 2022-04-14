import React from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <br />
        <input type="email" name="email" id="" placeholder="Email" />
        <br />
        <input type="password" name="password" id="" placeholder="Password" />
        <input type="submit" value="Register" />
      </form>

      <p>
        Already Registered.
        <span onClick={navigateLogin} className="text-danger">
          Log in.
        </span>
      </p>
    </div>
  );
};

export default Register;
