import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import AllBooks from "../fullData.json";
import toast, { Toaster } from "react-hot-toast";
import Sidebar from "../components/Sidebar";

const DashBoard = () => {
  const { token } = useGlobalContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = () => {
    const books = AllBooks.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(books);
  };

  const fetchRecommendations = async () => {
    console.log("fetching...");
    try {
      const res = await fetch(
        "https://brs-backend-z4da.onrender.com/api/recommend/getRecommendations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token,
            bookName: selectedBook.title,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (res.status === 200 && data.number > 0) {
        let list = [];
        for (const title of data.result) {
          const book = AllBooks.filter((book) => book.title === title);
          list.push(book[0]);
        }
        console.log(list)
        setRecommendedBooks(list);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      return toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (selectedBook) {
      fetchRecommendations();
    }
  }, [selectedBook]);

  return (
    <div>
      <Sidebar />
      <div className="bg-blue-50 min-h-screen w-full pt-[76px] pl-[286px] pr-[30px] flex flex-col">
        <div className="relative shadow-sm">
          <AiOutlineSearch
            className="absolute top-[14px] left-4 text-xl text-gray-500 cursor-pointer"
            onClick={handleSearch}
          />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for Keywords"
            className="bg-white h-12 px-12 rounded-lg focus:outline-none w-full"
          />
          {searchQuery && (
            <AiOutlineClose
              className="absolute top-[14px] right-4 text-xl text-gray-500 cursor-pointer"
              onClick={() => setSearchQuery("")}
            />
          )}
          {filteredBooks.length > 0 && (
            <div className="bg-white mt-1 absolute w-full px-4 py-3 z-10 gap-3 flex flex-col">
              {filteredBooks.map((book, index) => (
                <div
                  className="cursor-pointer hover:bg-gray-100 px-4 py-3 rounded-sm"
                  key={index}
                  onClick={() => {
                    setFilteredBooks([]);
                    setSearchQuery("");
                    setSelectedBook(book);
                    console.log(book);
                  }}
                >
                  <div className="font-semibold text-xl">{book.title}</div>
                  <div className="font-light text-sm">{book.author}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedBook && (
          <div className="flex flex-col gap-5 mt-10">
            <div className="font-semibold text-3xl">Your Book</div>
            <div className="flex flex-col w-[240px]">
              <img
                src={selectedBook.image_url}
                alt=""
                className="h-[350px] w-[240px] shadow-md mb-3"
              />
              <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col gap-1">
                  <div className="text-lg font-semibold">
                    {selectedBook.title}
                  </div>
                  <div className="font-light text-sm">
                    {selectedBook.author}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {recommendedBooks.length > 0 && (
          <div className="flex flex-col gap-5 my-10">
            <div className="font-semibold text-3xl">Similar Books</div>
            <div className="flex gap-5 flex-wrap">
              {recommendedBooks.map((book, index) => (
                <div className="flex flex-col w-[240px]" key={index}>
                  <img
                    src={book.image_url}
                    alt=""
                    className="h-[350px] w-[240px] shadow-md mb-3"
                  />
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex flex-col gap-1">
                      <div className="text-lg font-semibold">
                        {book.title}
                      </div>
                      <div className="font-light text-sm">{book.author}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default DashBoard;
