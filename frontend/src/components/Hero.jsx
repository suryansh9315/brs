import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex items-center justify-center p-20 bg-[#f9f8f6] gap-5">
        <div className="w-1/3 flex flex-col gap-3 pr-10">
          <div className="text-7xl font-bold">Find Your Next Book</div>
          <div className="font-light">
            With the help of our machine learning algorithm find your next read
            in seconds.
          </div>
          <div className="hover:bg-[#f9f8f6] hover:text-black border transition-all duration-300 border-[#0c1220] mt-2 bg-[#0c1220] rounded text-white h-12 w-44 cursor-pointer text-sm flex items-center justify-center text-center">
            Explore Now
          </div>
        </div>
        <div className="w-2/3 flex gap-10 items-center justify-center">
          <div className="flex flex-col items-center">
            <img
              src="/twisted.webp"
              alt=""
              className="h-[370px] w-[240px] rounded-t-full mb-5 shadow-md"
            />
            <div className="text-xl font-semibold">Twisted Love</div>
            <div className="font-light">Ana Huang</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xl font-semibold">Harry Potter</div>
            <div className="font-light">J.K Rowling</div>
            <img
              src="/harry.webp"
              alt=""
              className="h-[370px] w-[240px] rounded-b-full mt-5 shadow-md"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/got.webp"
              alt=""
              className="h-[370px] w-[240px] rounded-t-full mb-5 shadow-md" 
            />
            <div className="text-xl font-semibold">Game of Thrones</div>
            <div className="font-light">George RR Martin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
