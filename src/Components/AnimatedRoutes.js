import React from "react";
import Home from "./Navbar/Home";
import About from "./Navbar/About";
import Contact from "./Navbar/Contact";
import Kids from "./Navbar/Kids";
import Movies from "./Movies";
import Shows from "./Shows";
import ErrorPage from "./ErrorPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
