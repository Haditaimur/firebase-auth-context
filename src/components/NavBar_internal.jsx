import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const NavBar_internal = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">img</span>
          LOGO
        </div>
        <FaUserCircle
          className="w-10 h-10 absolute right-5 top-5 cursor-pointer rounded-full"
          onClick={toggleMenu}
          ref={dropdownRef}
        />

        {open && (
          <div className="absolute right-5 top-16 shadow-md bg-[#fff] p-4">
            <h1 className="text-xl font-bold py-4">Account</h1>
            <p>User Email: {user && user.email}</p>

            <button
              onClick={handleLogout}
              className="border px-6 py-2 my-4 hover:bg-blue-700 hover:text-[#fff]"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar_internal;
