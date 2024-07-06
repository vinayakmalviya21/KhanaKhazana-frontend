import React from 'react';
import logo from "../assets/images/heroBg.jpg";

export default function HeroSection() {

  const bgImage = {
    backgroundImage: `url(${logo})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div
      className="min-h-[550px] sm:min-h-[600px] w-full bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 overflow-x-hidden"
      style={bgImage}
    >
      <div className="text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Elevate Your Inner Foodie <br/> with Every Bite</h1>
        <p className="text-lg md:text-xl">Explore our services and discover more.</p>
      </div>
    </div>
  );
}
