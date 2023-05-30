import React, { useEffect, useRef, useState } from "react";

function ReservationData({ reservations }) {
  const [openIndex, setOpenIndex] = useState(null);

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
    <div className="flex w-full">
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
              {reservations.map((reservation, index) => (
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
                          <span className="sr-only"></span>
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
                          <div>
                            <div
                              className="origin-top-right absolute right-12 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby={`menu-button-${index}`}
                              tabIndex="-1"
                              ref={menuRef}
                            >
                              <div className="" role="none">
                                <a
                                  href="#"
                                  className="text-gray-500 font-medium hover:text-gray-900 hover:bg-gray-50 block px-4 py-2 text-sm"
                                  role="menuitem"
                                  tabIndex="-1"
                                  id="menu-item-0"
                                >
                                  Detalle
                                </a>
                              </div>
                              <div className="" role="none">
                                <a
                                  href="#"
                                  className="text-gray-500 font-medium hover:text-gray-900 hover:bg-gray-50 block px-4 py-2 text-sm"
                                  role="menuitem"
                                  tabIndex="-1"
                                  id="menu-item-0"
                                >
                                  Editar
                                </a>
                              </div>
                            </div>
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
  );
}

export default ReservationData;
