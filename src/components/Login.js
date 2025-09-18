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
          console.log(user);
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
          console.log(user);
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
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          {!signInForm && (
            <input
              type="text"
              ref={name}
              placeholder="Name"
              className="p-3 rounded bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email"
            className="p-3 rounded bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-3 rounded bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {errorMessage && (
            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition p-3 rounded font-semibold"
            onClick={handleButtonClick}
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
