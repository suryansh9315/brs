import React from "react";
import { Link } from "react-router-dom";

const RegisterSection = () => {
  return (
    <div className="bg-[#0c1220] sm:flex hidden">
      <img src="/books.png" alt="" className="w-[50vw]" />
      <div className="flex flex-col items-center justify-center md:gap-5 gap-2 md:px-10 px-3">
        <div className="lg:text-4xl text-2xl font-semibold text-white">
          Books Recommendation System
        </div>
        <div className="lg:text-base text-sm font-light text-white md:px-10 px-3 text-center">
          Welcome to Book Haven, the ultimate destination for book lovers!
          Whether you're an avid reader or just getting started on your literary
          journey, our platform is designed to cater to your every reading need.
        </div>
        <div className="hover:bg-[#f9f8f6] hover:text-black border transition-all duration-300 border-white mt-2 bg-[#0c1220] rounded text-white md:h-12 h-8 w-40 cursor-pointer text-sm flex items-center justify-center text-center">
          <Link to={'/register'}>Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
