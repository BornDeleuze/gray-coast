import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-8 py-2 bg-gray-900 text-gray-200 relative z-50">
      <div className="flex justify-between items-center relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-200 focus:outline-none absolute top-2 right-4 z-50"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-full right-0 bg-gray-900 w-full md:static md:flex justify-center uppercase mt-2 md:mt-0 z-50`}
      >
        <li><Link to="/" className="block py-2 px-4 hover:text-gray-400">Home</Link></li>
        <li><Link to="/about" className="block py-2 px-4 hover:text-gray-400">About</Link></li>
        <li><Link to="/events" className="block py-2 px-4 hover:text-gray-400">Events</Link></li>
        <li><Link to="/donate" className="block py-2 px-4 hover:text-gray-400">Donate</Link></li>
        <li><Link to="/get_involved" className="block py-2 px-4 hover:text-gray-400">Get Involved</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
