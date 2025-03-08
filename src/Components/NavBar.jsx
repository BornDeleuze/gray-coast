import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return <>
      <nav class="px-8 py-2 bg-gray-900 text-gray-200">
        <ul class="flex justify-evenly">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/get_involved">Get Involved</Link></li>
        </ul>
      </nav>
    </>
  }
}
export default NavBar