import React from "react";
import Lottie from "react-lottie";
import contactAnimation from "../lottie/contact_1.json";

const Contact = () => {
  return (
    <div className="flex items-center justify-center p-20 py-28 gap-2">
      <div className="flex flex-col gap-10 w-1/3">
        <div className="text-4xl font-bold">Book a Consultation</div>
        <div className="flex flex-col gap-5 bg-gray-100 px-8 py-8 rounded-lg shadow-sm">
          <div className="flex flex-col gap-1">
            <div className="font-normal text-sm">Name</div>
            <input
              type="text"
              className="bg-white px-5 py-3 outline-none rounded border border-gray-200"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-normal text-sm">Email</div>
            <input
              type="text"
              className="bg-white px-5 py-3 outline-none rounded border border-gray-200"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-normal text-sm">Message</div>
            <textarea
              placeholder="Enter message"
              className="bg-white px-5 py-3 outline-none rounded border border-gray-200 h-40"
            />
          </div>
          <div className="hover:bg-[#f9f8f6] hover:text-black border transition-all duration-300 border-[#0c1220] mt-2 bg-[#0c1220] rounded text-white h-12 w-44 cursor-pointer text-sm flex items-center justify-center text-center">
            Book Now
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <Lottie
          options={{
            autoplay: true,
            loop: true,
            animationData: contactAnimation,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          width='85%'
        />
      </div>
    </div>
  );
};

export default Contact;
