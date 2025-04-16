import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-8 py-4 bg-gray-900 text-gray-200 relative z-50">
      {/* DESKTOP */}
      <div className="hidden md:flex justify-center relative">
        <ul className="flex flex-row justify-center space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-gray-400">Events</Link>
          </li>
          <li>
            <Link to="/donate" className="hover:text-gray-400">Donate</Link>
          </li>
          <li>
            <Link to="/get_involved" className="hover:text-gray-400">Get Involved</Link>
          </li>
        </ul>
      </div>
      

        {/* HAMBURGER */}
      <div className="md:hidden flex justify-between items-center relative">
        <div className="flex-1">
         {/* logo? */}
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-between w-7 h-6 z-50 relative"
        >
          <span
            className={`block h-0.5 bg-gray-200 transition-transform duration-300 ease-in-out origin-center ${
              menuOpen ? "rotate-45 translate-y-2.75" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-gray-200 transition-all duration-300 ease-in-out origin-center ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-gray-200 transition-transform duration-300 ease-in-out origin-center ${
              menuOpen ? "-rotate-45 -translate-y-2.75" : ""
            }`}
          />
        </button>
      </div>
      <ul
        className={`fixed top-0 right-0 h-full w-2/5 bg-gray-900 text-gray-200 transform transition-transform duration-300 ease-in-out md:hidden z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <li>
          <Link to="/" className="block py-4 px-6 hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/about" className="block py-4 px-6 hover:text-gray-400">About</Link>
        </li>
        <li>
          <Link to="/events" className="block py-4 px-6 hover:text-gray-400">Events</Link>
        </li>
        <li>
          <Link to="/donate" className="block py-4 px-6 hover:text-gray-400">Donate</Link>
        </li>
        <li>
          <Link to="/get_involved" className="block py-4 px-6 hover:text-gray-400">Get Involved</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
