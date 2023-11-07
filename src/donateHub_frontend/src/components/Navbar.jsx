import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-gray-900 py-2">
        <div className="justify-between pr-4 mx-auto  lg:items-center lg:flex">
          <div>
            <div className="flex items-center justify-between lg:block">
              {/* LOGO */}
              <Link to="/" className="text-4xl font-bold text-white hover:text-gray-200 pl-2">DonateHub</Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="lg:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                navbar ? "p-4 lg:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen lg:h-auto items-center justify-center lg:flex ">

                <li className="mb-4">
                  <Link
                    to="/"
                    className="text-xl text-white py-2 px-6 text-center lg:hover:bg-slate-600 rounded-md"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Home
                  </Link>
                </li>

                <li className="mb-4">
                  <Link
                    to="/Donate"
                    className="text-xl text-white py-2 px-6 text-center lg:hover:bg-slate-600 rounded-md"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Donate
                  </Link>
                </li>


                <li className="mb-4">
                  <Link
                    to="/about"
                    className="text-xl text-white py-2 px-6 text-center lg:hover:bg-slate-600 rounded-md"
                    onClick={() => setNavbar(!navbar)}
                  >
                    About
                  </Link>
                </li>

                <li className="mb-4">
                  <Link
                    to="/contact"
                    className="text-xl text-white py-2 px-6 text-center lg:hover:bg-slate-600 rounded-md"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Contact
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}