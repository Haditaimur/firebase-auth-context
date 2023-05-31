import React, { useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Checkins", path: "/CheckinsPage" },
    { title: "Parkings", path: "/CarParking" },
  ];

  return (
    <div className="flex z-1000 border-r border-gray-100">
      <div
        className={` ${
          open ? "w-72" : "w-0 "
        }  h-screen p-5 relative duration-500`}
      >
        <CiCircleChevLeft
          className={`absolute cursor-pointer right-0 top-2  w-6 h-6 duration-500
          ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div
          className={`${
            !open && "hidden"
          } flex flex-col gap-4 items-center duration-500`}
        >
          <h1 className="underline font-semibold text-xl">Filter</h1>
          <div className="flex flex-col w-full items-center gap-2">
            <h1>search by date:</h1>
            <input
              type="date"
              name="date"
              id="date"
              className="border p-1 w-full rounded"
            />
            <button className="p-2 w-full border bg-transparent rounded hover:text-gray-100 hover:bg-blue-700">
              Search
            </button>
          </div>
          <button className="p-2 w-full border bg-transparent rounded hover:text-gray-100 hover:bg-blue-700">
            TODAY
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
