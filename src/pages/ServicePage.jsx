import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.avif";
gsap.registerPlugin(ScrollTrigger);

export default function ServicePage({}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".card").forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          delay: 1,
          translateX: index % 2 === 0 ? "-100px" : "100px",
          opacity: 0,
        },
        {
          delay: index % 2 === 0 ? 1 : 0.5,
          translateX: "0.75px",
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: card,
          },
        }
      );
    });

    gsap.fromTo(
      ".heading",
      { delay: 1, autoAlpha: 0 },
      {
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".heading",
        },
      }
    );
  }, []);

  const services = [
    {
      img: img1,
      title: "Restaurant Selection",
      description:
        "Browse a wide variety of restaurants and cuisines available in your area. Filter by your preferences and find the perfect meal for any occasion.",
    },
    {
      img: img2,
      title: "Food Ordering",
      description:
        "Easily order your favorite dishes from your chosen restaurants. Our platform ensures a seamless ordering experience with real-time updates.",
    },
    {
      img: img3,
      title: "Contactless Delivery",
      description:
        "Enjoy safe and convenient contactless delivery to your doorstep. Our delivery partners follow strict safety protocols to ensure your food is delivered securely.",
    },
    {
      img: img4,
      title: "Live Order Tracking",
      description:
        "Track your order in real-time from the moment you place it until it arrives at your door. Get updates on the status of your food and estimated delivery time.",
    },
    {
      img: img5,
      title: "Exclusive Discounts",
      description:
        "Take advantage of exclusive discounts and offers available only on our platform. Save money while enjoying delicious meals from your favorite restaurants.",
    },
    {
      img: img6,
      title: "24/7 Customer Support",
      description:
        "Have questions or need assistance with your order? Our friendly customer support team is available 24/7 to help you with any issues or concerns.",
    },
  ];

  return (
    <div>
      <div className="text-left md:text-center mx-auto pt-5 mr-12 ml-12 heading">
        <h1 className="text-3xl md:text-5xl font-bold py-2">
          Services We Provide
        </h1>
        <hr className="w-1/2 md:w-1/4 border-t-2 border-gray-400 mb-4 md:mx-auto"></hr>
        <p className="text-lg md:text-xl text-black">
          Ordering delicious meals is a breeze with{" "}
          <span className="text-pink-400 font-bold">KhanaKhazana!</span>!Our
          all-inclusive food delivery services include a wide selection of
          restaurants, easy online ordering, contactless delivery, real-time
          order tracking, and so much more!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 mr-20 ml-24 mt-11 mb-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="max-w-sm border rounded-lg shadow bg-slate-500 border-gray-700"
          >
            <img
              className="rounded-t-lg h-72 w-full"
              src={service.img}
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                <p className="text-pink-400">{index + 1}</p> {service.title}
              </h5>
              <p className="mb-3 font-normal text-white">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
