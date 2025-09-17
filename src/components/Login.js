// Login.tsx
import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };
  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg')",
      }}
    >
      <Header />
      <div className="bg-black/60 backdrop-blur-md p-8 rounded-lg w-[400px] max-w-full text-white">
        <h1 className="text-3xl font-bold mb-6">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form className="flex flex-col gap-4">
          {!signInForm && (
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition p-3 rounded font-semibold"
          >
            {signInForm ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <div className="flex justify-between text-sm text-gray-400 mt-3">
          <a href="#" className="hover:underline">
            Forgot password?
          </a>
        </div>

        <p
          className="text-gray-400 mt-6 cursor-pointer text-white"
          onClick={toggleSignInForm}
        >
          {signInForm
            ? "New to Netflix? Sign up now"
            : "Already Registered? Sign In"}
        </p>

        <p className="text-xs text-gray-500 mt-6">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Learn more.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
