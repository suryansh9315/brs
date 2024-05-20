import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useGlobalContext } from "./context/GlobalContext";
import DashBoard from "./pages/DashBoard";
import { Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import BookListSmall from "./components/BookListSmall";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

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
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
