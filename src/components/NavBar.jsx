import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavBar = () => {
  let links = [
    { name: "Guest", link: "/" },
    { name: "Admin", link: "/Account" },
  ];
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
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

        <div
          onClick={toggleMenu}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.name}>
              <CustomLink to={link.link}>{link.name}</CustomLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div className="ml-0 md:ml-5 mb-5 md:mb-0">
      <Link
        to={to}
        className={`${
          isActive
            ? "bg-blue-700 text-white hover:bg-blue-600"
            : "text-gray-800 hover:bg-blue-600 hover:text-white"
        } rounded-full block px-6 py-2 text-center w-full h-full  text-lg`}
      >
        {children}
      </Link>
    </div>
  );
}

export default NavBar;
