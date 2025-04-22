import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);


// Navlink close hamburger
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

// Click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);


  return (
    <>
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
            ref={buttonRef}
            onClick={(e) => {
              e.stopPropagation(); // Prevent click from bubbling to the outside click handler
              setMenuOpen(!menuOpen);
            }}
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
         ref={menuRef}
          className={`fixed top-0 right-0 h-full w-2/5 bg-gray-900 text-gray-200 transform transition-transform duration-300 ease-in-out md:hidden z-40 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <li>
            <Link to="/" className="block py-4 px-6 hover:text-gray-400" onClick={handleLinkClick}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="block py-4 px-6 hover:text-gray-400" onClick={handleLinkClick}>About</Link>
          </li>
          <li>
            <Link to="/events" className="block py-4 px-6 hover:text-gray-400" onClick={handleLinkClick}>Events</Link>
          </li>
          <li>
            <Link to="/donate" className="block py-4 px-6 hover:text-gray-400" onClick={handleLinkClick}>Donate</Link>
          </li>
          <li>
            <Link to="/get_involved" className="block py-4 px-6 hover:text-gray-400" onClick={handleLinkClick}>Get Involved</Link>
          </li>
        </ul>
      </nav>
      {/* BANNER */}
      <div>
        <a href="/">
          <div className="relative">
            <img src="/images/sunset.jpg" className="w-full" alt="Sunset"/>
            <div className="absolute inset-0"></div>
            <h5 className="font-dmserif outline-5 px-4 py-2 absolute font-semibold tracking-wide text-3xl md:text-5xl text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-center drop-shadow-[0_0_2px_#999999]">
              Gray Coast Guildhall
            </h5>
          </div>
        </a>
      </div>
    </>
  );
};

export default NavBar;
