import React from "react";
import { Link } from "react-router-dom";

const bestSellers = [
  {
    title: "Twisted Love",
    author: "Ana Huang",
    rating: "4.2",
    image: "twisted.webp",
  },
  {
    title: "Game of Thrones",
    author: "Grorge RR Martin",
    rating: "4.8",
    image: "got.webp",
  },
  {
    title: "Harry Potter",
    author: "JK Rowling",
    rating: "4.5",
    image: "harry.webp",
  },
  {
    title: "Kafka on the Shore",
    author: "Haruki Murakami",
    rating: "4.6",
    image: "kafka.webp",
  },
];

const BestSellers = () => {
  return (
    <div className="flex items-center justify-center p-20 py-28">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div className="text-4xl font-bold">Best Sellers</div>
          <div className="cursor-pointer text-lg font-light">
            <Link to={'/books'}>See all</Link>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap">
          {bestSellers.map((book, index) => (
            <div className="flex flex-col" key={index}>
              <img
                src={book.image}
                alt=""
                className="h-[350px] w-[240px] shadow-md mb-3"
              />
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-lg font-semibold">{book.title}</div>
                  <div className="font-light text-sm">by {book.author}</div>
                </div>
                <div>{book.rating} ⭐</div>
              </div>
              {/* <div className="hover:bg-[#f9f8f6] hover:text-black border transition-all duration-300 border-[#0c1220] mt-2 bg-[#0c1220] rounded text-white h-10 w-24 cursor-pointer text-xs flex items-center justify-center text-center">
                Add ⭐
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
