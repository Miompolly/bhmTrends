// import React from 'react';
import './App.scss';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const user = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/song" element={<Home type="song" />} />
        <Route path="/album" element={<Home type="album" />} />
        <Route path="/watch" element={<Watch />} />
        <Route
          path="/"
          element={user ? <Home type="default" /> : <Navigate to="/register" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
