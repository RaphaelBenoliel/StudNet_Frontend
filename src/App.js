import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route,
} from 'react-router-dom';
import Navbar from './pages/Navbar/Navbar';
import Login from './pages/Login';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SignUp from './pages/SignUp/SignUp';
import NotFound from './pages/NotFound/NotFound';
// import { useLocation } from 'react-router-dom';
// let user = {};
function App() {
  // const location = useLocation();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
