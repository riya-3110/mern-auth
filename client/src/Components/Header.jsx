import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/">
          <h1 className="font-bold text-2xl">Auth App</h1>
        </Link>
        <ul className="flex gap-8 cursor-pointer font-semibold text-[18px]">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/sign-in">
            <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
