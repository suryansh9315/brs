import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-20 py-8 bg-[#f9f8f6]">
        <div className="flex gap-16 items-center">
          <div className="text-2xl font-semibold cursor-pointer">Logo</div>
          <div className="flex gap-6 items-center">
            <div className="cursor-pointer">Home</div>
            <div className="cursor-pointer">Books</div>
            <div className="cursor-pointer">Categories</div>
            <div className="cursor-pointer">About</div>
            <div className="cursor-pointer">Contact</div>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="cursor-pointer">
            <Link to={"/login"}>Login</Link>
          </div>
          <div className="cursor-pointer">
            <Link to={"/register"}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
