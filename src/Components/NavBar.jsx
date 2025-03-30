import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  componentDidMount() {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

  render() {
    return (
      <>
        <nav className="px-8 py-2 bg-gray-900 text-gray-200">
          <div className="flex justify-between items-center">
            <button id="menu-toggle" className="md:hidden text-gray-200 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <ul id="menu" className="hidden md:flex justify-evenly uppercase mt-2 md:mt-0">
            <li><a href="/" className="block py-2 px-4 hover:text-gray-400">Home</a></li>
            <li><a href="/about" className="block py-2 px-4 hover:text-gray-400">About</a></li>
            <li><a href="/events" className="block py-2 px-4 hover:text-gray-400">Events</a></li>
            <li><a href="/donate" className="block py-2 px-4 hover:text-gray-400">Donate</a></li>
            <li><a href="/get_involved" className="block py-2 px-4 hover:text-gray-400">Get Involved</a></li>
          </ul>
        </nav>
      </>
    );
  }
}

export default NavBar;