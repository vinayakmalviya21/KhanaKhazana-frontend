import React from "react";
import HeroSection from "../components/HeroSection";
import RestaurantList from "../components/RestaurantList";
import ContactUsPage from "./ContactUsPage";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <RestaurantList />
      <ContactUsPage />
    </>
  );
}
