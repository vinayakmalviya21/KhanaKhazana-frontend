import React, { useState } from "react";
import logo from "../assets/images/logo-color.svg";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import NavbarSidebar from "./NavbarSidebar";

function Navbar() {
  const [showHide, setShowHide] = useState(true);

  return (
    <section className="bg-black w-full text-white z-10 relative top-0 flex flex-col items-center justify-center overflow-x-hidden">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex relative items-center justify-between w-full">
          <a className="flex items-end justify-start cursor-pointer" href="/">
            <img
              src={logo}
              className="h-16 w-64 object-cover overflow-y-hidden"
              alt="loading error"
            />
          </a>

          <span className="pr-5 hidden text-[1rem] font-bold items-center justify-center gap-x-4 md:flex">
            <span className="cursor-pointer">
              <a
                href="/"
                onClick={() => {
                  window.scroll({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Home
              </a>
            </span>
            <span className="flex items-center justify-center cursor-pointer">
              <a
                href="/services"
                onClick={() => {
                  window.scroll({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Services
              </a>
            </span>
            <span className="flex items-center justify-center cursor-pointer">
              <a
                href="/contact-us"
                onClick={() => {
                  window.scroll({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Contact us
              </a>
            </span>
          </span>

          <span className="absolute top-3.4 right-2.5 z-20 text-2xl md:hidden text-gray-300">
            {showHide ? (
              <FiMenu onClick={() => setShowHide(!showHide)} />
            ) : (
              <AiFillCloseCircle onClick={() => setShowHide(!showHide)} />
            )}
          </span>
        </div>

        <NavbarSidebar show={showHide} />
      </div>

      <div
        className={`${showHide ? "hidden" : "flex"} fixed left-0 top-0 w-screen h-screen bg-[#000000c4]`}
        onClick={() => setShowHide(!showHide)}
      ></div>
    </section>
  );
}

export default Navbar;
