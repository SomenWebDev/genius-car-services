import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;

  if (error || error1) {
    errorElement = (
      <div>
        <p>
          Error: {error?.message}
          {error1?.message}
        </p>
      </div>
    );
  }
  if (user || user1) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div className="my-2">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary w-50 d-block mx-auto"
        >
          Google Sign In
        </button>
      </div>
      <div className="my-2">
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-primary w-50 d-block mx-auto"
        >
          Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
