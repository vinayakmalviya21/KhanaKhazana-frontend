import React, { useState } from "react";
import logo from "../assets/images/logo-no-background.png";

function NavbarSidebar({ show }) {

  return (
    <div
      className={`bg-white z-10 duration-500 ${
        show ? "translate-x-full" : "translate-x-0"
      } py-8 flex items-start flex-col justify-start px-6 fixed h-full w-full top-0 right-0 sm:w-72`}
    >
      <span className="flex gap-y-8 w-full flex-col items-start justify-center">
      <a className="flex items-end justify-start cursor-pointer" href="/">
              <img
                src={logo}
                className="h-20 w-64 object-cover overflow-y-hidden"
                alt="loading error"
              />
            </a>

        <ul className="font-color-tertiary flex flex-col text-black gap-y-2.5 items-start justify-center font-bold">
          <span className="cursor-pointer">
            <a
              className="font-color-tertiary flex items-center gap-x-2.5 justify-center text-md"
              href="/"
            >
              Home
            </a>
          </span>

          <span className="cursor-pointer">
            <a
              href="/services"
              className="font-color-tertiary flex items-center gap-x-2.5 justify-center text-md"
            >
              Services
            </a>
          </span>

          <span className="cursor-pointer">
            <a
              href="/contact-us"
              className="font-color-tertiary flex items-center gap-x-2.5 justify-center text-md"
            >
              Contact us
            </a>
          </span>

        </ul>
      </span>
    </div>
  );
}

export default NavbarSidebar;
