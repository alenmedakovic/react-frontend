import React from 'react';
import './App.css';
import { Navbar, Header, Body } from "./components";
import { Routes, Route, Link } from "react-router-dom";
import { About, Home, Login, Signup } from "./pages/index";

function App() {
   return (
    <Routes>
    <Route
      path="/about"
      element={<About />}
    />
    <Route
    exact path="/"
    element={<Home />}
    />
    <Route
    path="/login"
    element={<Login />}
    />
    <Route
    exact path="/signup"
    element={<Signup />}
    />
  </Routes>
  );
}

export default App;
