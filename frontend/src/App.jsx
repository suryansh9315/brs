import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useGlobalContext } from "./context/GlobalContext";
import DashBoard from "./pages/DashBoard";
import { Route, Routes } from "react-router-dom";
import BookList from "./pages/BookList";
import BookListSmall from "./components/BookListSmall";

const App = () => {
  const { user } = useGlobalContext();

  return (
    <div>
      {user ? (
        <>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/books" element={<BookList />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/books" element={<BookListSmall />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
