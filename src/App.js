import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Tracking from './components/Tracking';
import BoardingOne from './components/Boarding/BoardingOne';
import './App.css'
import BoardingTwo from './components/Boarding/BoardingTwo';
import BoardingThree from './components/Boarding/BoardingThree';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/boarding" element={<BoardingOne />} />
        <Route path='/boarding-two' element={<BoardingTwo />} />
        <Route path='/boarding-three' element={<BoardingThree />} />
      </Routes>
    </Router>
  );
}

export default App;
