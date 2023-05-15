import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Services from './Pages/Services'

function RouteApp() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}

export default RouteApp