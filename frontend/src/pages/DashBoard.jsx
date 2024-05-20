import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useNavigation } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import AllBooks from "../fullData.json";
import toast, { Toaster } from "react-hot-toast";

const DashBoard = () => {
  const { logout, token } = useGlobalContext();
  // const navigate = useNavigation();
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
        "http://localhost:8080/api/recommend/getRecommendations",
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
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                  Logo
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow "
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900" role="none">
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Books
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Wishlist
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Books</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Wishlist</span>
              </a>
            </li>
            <li onClick={logout}>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
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
