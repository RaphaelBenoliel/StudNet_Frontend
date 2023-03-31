import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';
import Navbar from './pages/homepage/Navbar';
import Login from './pages/Login';

function App(props) {

  return (
    <>
    <Router>
    <Navbar></Navbar>
      <Routes>
      
      <Route path="/auth" element={<Login />}></Route>

      </Routes>
      
      
    </Router>
     
      
    </>
  );
}

export default App;