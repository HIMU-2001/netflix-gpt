// Header.tsx
import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <header className="w-full fixed top-0 left-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-transparent px-8 py-4 flex items-center justify-between">
      {/* Netflix Logo */}
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
        className="h-12"
      />

      {/* User Profile + Sign Out */}
      {user && (
        <div className="flex items-center gap-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQeTvOXh-a1w7h_gDcvhojqtBxTeUnlGZ0Q&s"
            alt="User Account"
            className="h-10 w-10 rounded-full border border-white object-cover"
          />
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
