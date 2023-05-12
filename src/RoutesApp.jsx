import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Services from "./pages/Services";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
