import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-20 py-8 bg-[#f9f8f6]">
        <div className="flex gap-16 items-center">
          <div className="text-2xl font-semibold cursor-pointer">BRS</div>
          <div className="flex gap-6 items-center">
            <Link to={'/'} className="cursor-pointer hover:text-blue-500 transition-all duration-200">Home</Link>
            <Link to={'/books'} className="cursor-pointer hover:text-blue-500 transition-all duration-200">Books</Link>
            <Link to={'/'} className="cursor-pointer hover:text-blue-500 transition-all duration-200">About</Link>
            <Link to={'/'} className="cursor-pointer hover:text-blue-500 transition-all duration-200">Contact</Link>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="cursor-pointer">
            <Link to={"/login"} className="hover:text-blue-500 transition-all duration-200">Login</Link>
          </div>
          <div className="cursor-pointer">
            <Link to={"/register"} className="hover:text-blue-500 transition-all duration-200">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
