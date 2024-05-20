import React from "react";
import Sidebar from "./Sidebar";
import AllBooks from "../fullData.json";

const BookList = () => {
  return (
    <div>
      <Sidebar />
      <div className="bg-blue-50 min-h-screen w-full pt-[76px] sm:pl-[286px] sm:pr-[30px] pl-10 pr-10 flex flex-col">
        <div className="text-4xl font-semibold mb-5">Best Sellers</div>
        <div className="flex gap-5 flex-wrap items-center">
          {AllBooks.map((book, index) => (
            <div key={index}>
              <img
                src={book.image_url}
                alt=""
                className="h-[350px] w-[240px] shadow-md mb-3"
              />
              <div className="flex items-center justify-between mb-2 flex-col gap-1">
                <div className="text-lg font-semibold">
                  {book.title.split(" ").slice(0, 4).join(" ")}
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

export default BookList;
