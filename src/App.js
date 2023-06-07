import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Navigate,
} from 'react-router-dom';
import Navbar from './pages/Navbar/Navbar';
import Login from './pages/Login';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Terms from './pages/Terms/Terms';
import Tools from './pages/Tools/Tools';
import SignUp from './pages/SignUp/SignUp';
import Search from './pages/Search/Search';
import NotFound from './pages/NotFound/NotFound';
import ForgotPass from './pages/ForgotPass/ForgotPass';
import PersonalArea from './pages/PersonalArea/PersonalArea';
// import { UserContext } from './UserContext';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/my-area" element={<PersonalArea />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/login/:fpass" element={<ForgotPass />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
}

export default App;
