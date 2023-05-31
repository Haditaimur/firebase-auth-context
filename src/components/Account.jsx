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

  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (index) => {
    setActiveTab(index);
  };

  const TabContent = () => {
    switch (activeTab) {
      case 1:
        return <ReservationData reservations={reservations} />;
      case 2:
        return <CarParking />;
      default:
        return null;
    }
  };

  return (
    <>
      <main className="min-h-screen w-full pt-32">
        <NavBar_internal />

        <div className="flex w-full pt-4">
          <Sidebar />
          <div className="w-full px-5">
            <div className="flex items-center gap-1">
              <button
                className={`tabs ${
                  activeTab === 1
                    ? "bg-slate-100 border-b-2 border-b-blue-700"
                    : ""
                } py-4 px-6 border-t border-r border-l rounded-tl-md rounded-tr-md`}
                onClick={() => toggleTab(1)}
              >
                Checkin's
              </button>
              <button
                className={`tabs ${
                  activeTab === 2
                    ? "bg-slate-100 border-b-2 border-b-blue-700"
                    : ""
                } py-4 px-6 border-t border-r border-l rounded-tl-md rounded-tr-md`}
                onClick={() => toggleTab(2)}
              >
                Parking
              </button>
            </div>

            <div className="w-full h-screen bg-slate-100 p-4 border">
              <TabContent />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Account;
