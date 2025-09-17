// Header.tsx
import React from "react";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-transparent px-8 py-4">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
        className="h-12"
      />
    </header>
  );
};

export default Header;
