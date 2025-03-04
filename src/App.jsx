import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div class="text-gray-600">
          <div>
            <nav class="px-8 py-2 bg-gray-900 text-gray-200">
              <ul class="flex justify-evenly">
                <li><a href="/pages/about.html"><span>About</span></a></li>
                <li><a href="/pages/events.html"><span>Events</span></a></li>
                <li><a href="/pages/donate.html"><span>Donate</span></a></li>
                <li><a href="/pages/get_involved.html"><span>Get Involved</span></a></li>
              </ul>
            </nav>
          </div>
          <div>
            <a href="/"
            >
              <img src="/public/images/sunset.jpg" class="relative text-center"/>
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
    </>
  )
}

export default App
