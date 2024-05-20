import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <div className="flex items-center justify-between px-20 py-8 bg-[#f9f8f6]">
        <div className="flex gap-16 items-center">
          <div className="text-2xl font-semibold cursor-pointer">BRS</div>
          <div className="sm:flex gap-6 items-center hidden">
            <Link
              to={"/"}
              className={`cursor-pointer hover:text-blue-500 transition-all duration-200 ${
                location.pathname === "/" ? "text-blue-500" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to={"/books"}
              className={`cursor-pointer hover:text-blue-500 transition-all duration-200 ${
                location.pathname === "/books" ? "text-blue-500" : ""
              }`}
            >
              Books
            </Link>
            {/* <Link
              to={"/"}
              className={`cursor-pointer hover:text-blue-500 transition-all duration-200 ${
                location.pathname === "/about" ? "text-blue-500" : ""
              }`}
            >
              About
            </Link> */}
            <Link
              to={"/contact"}
              className={`cursor-pointer hover:text-blue-500 transition-all duration-200 ${
                location.pathname === "/contact" ? "text-blue-500" : ""
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="cursor-pointer">
            <Link
              to={"/login"}
              className="hover:text-blue-500 transition-all duration-200"
            >
              Login
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link
              to={"/register"}
              className="hover:text-blue-500 transition-all duration-200"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
