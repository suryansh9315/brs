import React from "react";

const Authors = () => {
  return (
    <div className="flex flex-col gap-16 pt-20 pb-10 px-20 bg-[#0c1220]">
      <div className="flex items-center justify-between">
        <div className="text-4xl font-semibold text-white">Get to know</div>
        {/* <div className="cursor-pointer text-lg font-light text-white">
          See all
        </div> */}
      </div>
      <div className="flex gap-16 px-2 lg:flex-row flex-col">
        <div className="flex lg:w-1/2 w-full gap-3 sm:flex-row flex-col-reverse">
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-light text-white">
              Friedrich Nietzsche
            </div>
            <div className="font-thin text-gray-400 text-base">
              Friedrich Nietzsche (1844-1900) was a German philosopher and
              cultural critic who published intensively in the 1870s and 1880s.
              He is famous for uncompromising criticisms of traditional European
              morality and religion, as well as of conventional philosophical
              ideas and social and political pieties associated with modernity.
            </div>
          </div>
          <img src="/fn.webp" className="w-[40%] rounded-b-full" />
        </div>
        <div className="flex lg:w-1/2 w-full gap-3 sm:flex-row flex-col-reverse">
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-light text-white">
              Haruki Murakami
            </div>
            <div className="font-thin text-gray-400 text-base">
              Haruki Murakami (村上 春樹, Murakami Haruki, born January 12,
              1949) is a Japanese writer. His novels, essays, and short
              stories have been best-sellers in Japan and internationally, with
              his work translated into 50 languages and having sold millions
              of copies outside Japan
            </div>
          </div>
          <img src="/haruki.webp" className="w-[40%] rounded-b-full" />
        </div>
      </div>
    </div>
  );
};

export default Authors;
