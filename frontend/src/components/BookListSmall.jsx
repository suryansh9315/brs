import React from "react";
import Navbar from "./Navbar";
import AllBooks from "../fullData.json";

const BookListSmall = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white min-h-screen w-full flex flex-col sm:px-24 px-10 py-10">
        <div className="text-4xl font-semibold mb-8">Best Sellers</div>
        <div className="flex gap-5 flex-wrap items-center">
          {AllBooks.slice(0, 100).map((book, index) => (
            <div key={index}>
              <img
                src={book.image_url}
                alt=""
                className="h-[350px] w-[240px] shadow-md mb-3"
              />
              <div className="flex items-center justify-between mb-2 flex-col gap-1">
                <div className="text-lg font-semibold">
                  {book.title.split(' ').slice(0, 4).join(" ")}
                </div>
                <div className="font-light text-sm">{book.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookListSmall;
