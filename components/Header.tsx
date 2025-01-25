import React from "react";
import AuthButton from "./AuthButton";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="text-xl font-bold">NextJS Supabase User Auth</div>
        <div className="flex flex-direction-row gap-4">
          <DarkModeToggle />
          <AuthButton />
        </div>
      </header>
    </>
  );
};

export default Header;
