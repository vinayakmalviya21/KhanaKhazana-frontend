import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetail from "./components/RestaurantDetail";
import Footer from "./components/Footer";
import ContactUsPage from "./pages/ContactUsPage";
import ServicePage from "./pages/ServicePage";
import "./App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
