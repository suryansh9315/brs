import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useGlobalContext } from "./context/GlobalContext";
import DashBoard from "./pages/DashBoard";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const { user } = useGlobalContext();

  return (
    <div>
      {user ? (
        <>
          <Routes>
            <Route path="/" element={<DashBoard />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
