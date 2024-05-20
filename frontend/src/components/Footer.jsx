import React from "react";

const Footer = () => {
  return (
    <div className="lg:px-40 px-20 pt-0 pb-0 bg-[#f9f8f6] gap-14 flex flex-col">
      <div className="flex gap-5 justify-between py-20">
        <div className="flex flex-col gap-3">
          <div className="text-2xl font-semibold">BRS</div>
          <div className="flex flex-col gap-1">
            <div className="text-base font-light cursor-pointer">Home</div>
            <div className="text-base font-light cursor-pointer">Books</div>
            <div className="text-base font-light cursor-pointer">About</div>
            <div className="text-base font-light cursor-pointer">Contact</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-2xl font-semibold">User</div>
          <div className="flex flex-col gap-1">
            <div className="text-base font-light cursor-pointer">Login</div>
            <div className="text-base font-light cursor-pointer">Register</div>
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-3">
          <div className="text-2xl font-semibold">Privacy</div>
          <div className="flex flex-col gap-1">
            <div className="text-base font-light cursor-pointer">Terms of Use</div>
            <div className="text-base font-light cursor-pointer">Security</div>
            <div className="text-base font-light cursor-pointer">Privacy</div>
            <div className="text-base font-light cursor-pointer">Contact</div>
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-3">
          <div className="text-2xl font-semibold">Follow us</div>
          <div className="flex flex-col gap-1">
            <div className="text-base font-light cursor-pointer">Instagram</div>
            <div className="text-base font-light cursor-pointer">Facebook</div>
            <div className="text-base font-light cursor-pointer">Twitter</div>
            <div className="text-base font-light cursor-pointer">Youtube</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-2xl font-semibold">Contact</div>
          <input
            type="text"
            className="bg-white px-5 py-3 outline-none rounded border border-gray-200 lg:w-[350px] sm:w-[250px] w-[150px]"
            placeholder="Enter your email"
          />
          <div className="hover:bg-[#f9f8f6] hover:text-black border transition-all duration-300 border-[#0c1220] mt-2 bg-[#0c1220] rounded text-white h-10 w-36 cursor-pointer text-sm flex items-center justify-center text-center">
            Send Email
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border-t border-gray-300 py-6">
        <div className="text-lg font-light" >&copy; 2024. All rights reserved. Privacy Policy</div>
      </div>
    </div>
  );
};

export default Footer;
