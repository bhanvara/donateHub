import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { donateHub_backend } from "../../declarations/donateHub_backend";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Donate from "./components/Donate";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}