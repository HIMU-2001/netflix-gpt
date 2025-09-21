// Header.tsx
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR, LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent px-8 py-4 flex items-center justify-between">
      {/* Netflix Logo */}
      <img src={LOGO} alt="Netflix Logo" className="h-12" />

      {/* User Profile + Sign Out */}
      {user && (
        <div className="flex items-center gap-4">
          <img
            src={AVATAR}
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
