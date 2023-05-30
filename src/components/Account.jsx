import React, { useEffect, useState } from "react";
import { NavLink, useLocation, Route, Routes } from "react-router-dom";
import ReservationData from "./ReservationData";
import CarParking from "./CarParking";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import NavBar_internal from "./NavBar_internal";

const Account = () => {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    const fetchReservationDetails = async () => {
      try {
        const res = await fetch(
          "https://checkin-system-7ea25-default-rtdb.europe-west1.firebasedatabase.app/ReservationDetails.json"
        );
        const data = await res.json();

        const reservationData = Object.keys(data).map((key) => ({
          key,
          ...data[key],
        }));
        setReservations(reservationData);
      } catch (error) {
        console.error("Error fetching reservation details:", error);
      }
    };

    fetchReservationDetails();
  }, []);

  const [showContent, setShowContent] = useState(
    <ReservationData reservations={reservations} />
  );

  const location = useLocation();

  const handleButtonClick = (content) => {
    setShowContent(content);
  };

  return (
    <>
      <main className="min-h-screen w-full pt-32">
        <NavBar_internal />

        <div className="flex w-full pt-4">
          <Sidebar />
          <div className="w-full px-5">
            <ul className="flex items-center gap-1">
              <li>
                <CustomNavLink
                  to=""
                  onClick={() =>
                    handleButtonClick(
                      <ReservationData reservations={reservations} />
                    )
                  }
                >
                  Checkin's
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink
                  to=""
                  onClick={() => handleButtonClick(<CarParking />)}
                >
                  Parking
                </CustomNavLink>
              </li>
            </ul>

            <div className="w-full h-screen bg-slate-100 p-4">
              <div className="w-full h-10 flex justify-end">
                <div className=" flex w-[20rem] items-center ">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 mx-3 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Search......"
                    className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  dark:text-gray-700  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>
              {showContent}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

function CustomNavLink({ to, children, ...props }) {
  return (
    <NavLink
      to={to}
      {...props}
      className="lg:inline-block py-2 px-6 text-sm font-semibold rounded transition duration-200 hover:bg-blue-600 hover:text-white border border-t border-r border-l border-b-0"
    >
      {children}
    </NavLink>
  );
}

export default Account;
