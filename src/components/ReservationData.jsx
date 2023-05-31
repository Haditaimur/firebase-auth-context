import React, { forwardRef, useEffect, useRef, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { BsCardText } from "react-icons/bs";
import { Link } from "react-router-dom";

const ReservationData = forwardRef(({ reservations }, ref) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const handleOpenButton = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const menuRef = useRef();
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
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
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  dark:text-gray-700  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
      </div>
      <div ref={ref} className="flex w-full">
        <div className="inline-block min-w-full py-2 align-middle">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    #
                  </th>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                    Name
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Address
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    No of People
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Room
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Reservation Details
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Check in
                  </th>
                  <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {reservations
                  .filter((reservation) => {
                    return search.toLowerCase() === ""
                      ? reservation
                      : reservation.firstname.toLowerCase().includes(search);
                  })
                  .map((reservation, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {reservation.firstname} {reservation.lastname}
                        <br /> {reservation.phone} <br /> {reservation.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        {reservation.address1}
                        <br /> {reservation.address2}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        Adults: {reservation.adults} <br /> Children:{" "}
                        {reservation.children}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        {reservation.rooms}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        {reservation.dates}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        Time: 14:31:20
                        <br /> Date: 2023-05-12
                      </td>
                      <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <div className="inline-block text-left">
                          <div>
                            <button
                              onClick={() => handleOpenButton(index)}
                              type="button"
                              className="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                              id={`menu-button-${index}`}
                              aria-haspopup="true"
                            >
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                              </svg>
                            </button>
                            {openIndex === index && (
                              <div
                                className="origin-top-right absolute right-12 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                                aria-labelledby={`menu-button-${index}`}
                                tabIndex="-1"
                                ref={menuRef}
                              >
                                <Link
                                  to=""
                                  className="text-gray-500 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 flex justify-between w-full"
                                  tabIndex="-1"
                                  id="menu-item-0"
                                >
                                  <span className="font-medium text-sm ">
                                    Edit
                                  </span>
                                  <FiEdit2 width={20} height={20} />
                                </Link>

                                <Link
                                  to=""
                                  className="text-gray-500 font-medium hover:text-gray-900 hover:bg-gray-50 block px-4 py-2 text-sm flex justify-between w-full"
                                  tabIndex="-1"
                                  id="menu-item-0"
                                >
                                  <span className="font-medium text-sm ">
                                    Delete
                                  </span>
                                  <MdDeleteOutline width={20} height={20} />
                                </Link>

                                <Link
                                  to=""
                                  className="text-gray-500 font-medium hover:text-gray-900 hover:bg-gray-50 block px-4 py-2 text-sm flex justify-between w-full"
                                  tabIndex="-1"
                                  id="menu-item-0"
                                >
                                  <span className="font-medium text-sm ">
                                    Registration Card
                                  </span>
                                  <BsCardText width={20} height={20} />
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
});

export default ReservationData;
