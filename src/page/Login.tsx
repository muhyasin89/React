import React from "react";
import LoginForm from "../components/Form/Login";

function Login() {
  return (
    <div>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Sign in to your account
      </h1>
      <LoginForm />
    </div>
  );
}

export default Login;
