import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import React from 'react'
import './App.css'
import Home from './pages/home'
import FAQS from './pages/faq'
import Profile from './pages/profile'
import Events from './pages/events'
import Error from './pages/error'


function App() {
  return (
    <>
    <h1>
      Hello
    </h1>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/faq'>FAQ</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <li>
              <Link to='/events'>Events</Link>
            </li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQS />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App
