//import TextInput from "../TextInput";
import { useState } from "react";

function LoginForm() {
  const [username, SetUsername] = useState("");
  //   const usernameLabel = { title: "username" };
  //   const usernameField = {
  //     type: "text",
  //     name: "login",
  //     id: "login",
  //     placeholder: "username",
  //   };

  //   const usernameProps = {
  //     value: username,
  //     placeholder: username
  //   }

  //   const handleUsernameChange = (val) => {
  //     console.log("username val", val);
  //     SetUsername(val)
  //   }

  const [password, SetPassword] = useState("");
  //   const passwordLabel = { title: "password" };
  //   const passwordField = {
  //     type: "password",
  //     name: "password",
  //     id: "password",
  //     placeholder: "••••••••",
  //   };
  //   const passwordProps = { value: password };

  //   const handlePasswordChange = (val: any) => {
  //     console.log("password input val", val);
  //     SetPassword(val);
  //   };

  return (
    
      <form className="space-y-4 md:space-y-6" action="#">
        <div>
          <label htmlFor="username">username{username}</label>

          <input
            type="text"
            value={username}
            className="inputField"
            onChange={(e) => SetUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            value={password}
            className="inputField"
            onChange={(e) => SetPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="text-gray-500 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Sign in
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?{" "}
          <a
            href="#"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign up
          </a>
        </p>
      </form>
  );
}

export default LoginForm;
