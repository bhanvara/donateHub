import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { donateHub_backend } from "../../declarations/donateHub_backend";
import Contact from "./components/Contact";
import About from "./components/About";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      {/* <Contact />
      <About/> */}
      <Footer />
    </div>
  );
}
