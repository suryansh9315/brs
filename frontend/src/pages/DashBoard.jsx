import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useNavigation } from "react-router-dom";

const DashBoard = () => {
  const { logout } = useGlobalContext();
  // const navigate = useNavigation();

  return (
    <div>
      <div>Dashboard</div>
      <div onClick={logout} className="cursor-pointer">
        Logout
      </div>
    </div>
  );
};

export default DashBoard;
