import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route,
} from 'react-router-dom';
import Navbar from './pages/homepage/Navbar';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/auth" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
