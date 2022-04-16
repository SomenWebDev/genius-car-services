import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Button, Form } from "react-bootstrap";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  if (user) {
    navigate("/home");
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/home");
  };

  return (
    <div className="register-form w-25 mx-auto mt-5">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setAgree(!agree)}
            type="checkbox"
            label="Check me out"
            className={` ${agree ? "" : "text-danger"}`}
          />
        </Form.Group>
        <Button disabled={!agree} variant="primary" type="submit">
          Register
        </Button>
      </form>

      <p>
        Already Registered.
        <span onClick={navigateLogin} className="text-danger">
          Log in.
        </span>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
