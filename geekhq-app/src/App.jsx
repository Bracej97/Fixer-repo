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

    <Router>
      <div>
        <nav>
          <ul className="sidebar">
            <li className="nav-link">
              <Link to='/'>Home</Link>
            </li>
            <li className="nav-link">
              <Link to='/faq'>FAQ</Link>
            </li>
            <li className="nav-link">
              <Link to='/profile'>Profile</Link>
            </li>
            <li className="nav-link">
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
