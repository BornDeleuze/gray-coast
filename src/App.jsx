import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Events from './Pages/Events';
import Contact from './Pages/Contact';
import Donate from './Pages/Donate';
import Get_Involved from './Pages/Get_Involved';
import './App.css';

function App() {
  return (
    <>
            <Router>
        <div class="text-gray-600">
          <div>
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
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/get_involved" element={<Get-Involved />} />
              </Routes>
          </div>
          <div>
            <a href="/"
            >
              <img src="/images/sunset.jpg" class="relative text-center"/>
              <h5 class="text-xlg top-100px absolute text-red-900"> Gray Coast Guildhall </h5>
            </a>
          </div>
          <div>
            <header>
              {/* <h3 class="text-lg"> Gray Coast Guildhall </h3> */}
            </header>
            <h3>
              Welcome
            </h3>
            <div>
              The Gray Coast Guildhall is a space for gathering, creating, organizing, and performing. Our home is the Old Theater Building in Quilcene, Washington, on traditional Twana & S’Klallam territory.
              We provide space for music events and other performances, meetings and gatherings, dances, movie nights, and more. We are working on creating space for local artists and crafters to set up small working studios.
              The Grey Coast Guildhall is a not-for-profit project, and is collectively managed by a team of dedicated volunteers. This space is only possible with the help and support of many people, and we welcome you to get involved!
            </div>
            <img src="/public/images/back.jpg"/>
          </div>
          <div>
            <div>
              <h4>
                Visit Us
              </h4>
              <h5>
                11 Old church rd
                Quilcene, WA  98376
                USA
              </h5>
            </div>
            <div>
              <h4>
                Send us a message
              </h4>
            </div>
          </div>
        </div>
        </Router>
    </>
  )
}

export default App
