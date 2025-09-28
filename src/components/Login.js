// Login.tsx
import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateFormData } from "../utils/validate";
import { auth } from "../utils/fireBase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/constants";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };

  const handleButtonClick = () => {
    const message = validateFormData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!signInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " " + errorMessage);
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: BG_IMG,
      }}
    >
      {/* Header */}
      <Header />

      {/* Form Card */}
      <div className="bg-black/60 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg text-white mt-24 sm:mt-32">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          {!signInForm && (
            <input
              type="text"
              ref={name}
              placeholder="Name"
              className="p-3 sm:p-4 rounded bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm sm:text-base"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email"
            className="p-3 sm:p-4 rounded bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm sm:text-base"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-3 sm:p-4 rounded bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm sm:text-base"
          />

          {errorMessage && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition p-3 sm:p-4 rounded font-semibold text-sm sm:text-base mt-2"
            onClick={handleButtonClick}
          >
            {signInForm ? "Sign In" : "Sign Up"}
          </button>
        </form>

        {/* Forgot Password */}
        <div className="flex justify-between text-xs sm:text-sm text-gray-400 mt-3">
          <a href="#" className="hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Toggle Sign In/Sign Up */}
        <p
          className="text-gray-400 mt-6 cursor-pointer text-center text-sm sm:text-base"
          onClick={toggleSignInForm}
        >
          {signInForm
            ? "New to Netflix? Sign up now"
            : "Already Registered? Sign In"}
        </p>

        {/* reCAPTCHA info */}
        <p className="text-xs sm:text-sm text-gray-500 mt-6 text-center">
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
