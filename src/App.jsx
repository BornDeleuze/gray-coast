import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Events from './Pages/Events';
import Contact from './Pages/Contact';
import Donate from './Pages/Donate';
import GetInvolved from './Pages/Get_Involved';
import NavBar from './Components/NavBar.jsx';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <div class="text-gray-600">
          <div>
           <NavBar/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/get_involved" element={<GetInvolved />} />
              </Routes>
          </div>
        </div>
        </Router>
    </>
  )
}

export default App
