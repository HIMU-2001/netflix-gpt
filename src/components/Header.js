// Header.tsx
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/fireBase";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR, languages, LOGO } from "../utils/constants";
import { toggleGPTSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gptSearch.showGPTSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearch());
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        if (location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent px-4 md:px-8 py-4 flex items-center justify-between">
      {/* Netflix Logo */}
      <img src={LOGO} alt="Netflix Logo" className="h-12" />

      {/* Right section */}
      {user && (
        <div className="flex items-center gap-4">
          {/* GPT Search Button */}

          <button
            className="bg-white text-black font-bold px-4 py-1 rounded hover:bg-gray-300 transition text-sm"
            onClick={handleGPTSearch}
          >
            {showGPTSearch ? "Home Page" : "GPT Search"}
          </button>
          {/* Simple Language Dropdown */}
          {showGPTSearch && (
            <select
              onChange={(e) => dispatch(changeLanguage(e.target.value))}
              className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 transition text-sm focus:outline-none"
            >
              {languages.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          {/* User Avatar */}
          <img
            src={AVATAR}
            alt="User Account"
            className="h-10 w-10 rounded-full border border-white object-cover"
          />

          {/* Sign Out Button */}
          <button
            className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded font-semibold text-white text-sm"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
