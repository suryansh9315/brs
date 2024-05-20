import React from "react";
import { Link } from "react-router-dom";

const RegisterSection = () => {
  return (
    <div className="bg-[#0c1220] flex">
      <img src="/books.png" alt="" className="w-[50vw]" />
      <div className="flex flex-col items-center justify-center gap-5 px-10">
        <div className="text-4xl font-semibold text-white">
          Books Recommendation System
        </div>
        <div className="text-base font-light text-white px-10 text-center">
          Welcome to Book Haven, the ultimate destination for book lovers!
          Whether you're an avid reader or just getting started on your literary
          journey, our platform is designed to cater to your every reading need.
        </div>
        <div className="hover:bg-[#f9f8f6] hover:text-black border transition-all duration-300 border-white mt-2 bg-[#0c1220] rounded text-white h-12 w-40 cursor-pointer text-sm flex items-center justify-center text-center">
          <Link to={'/register'}>Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
