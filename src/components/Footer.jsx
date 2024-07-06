import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <section className="mt-5 z-10 bg-black relative flex-col flex items-center justify-center w-full px-3 sm:px-12 overflow-x-hidden">
        <div className="bg-black flex text-white items-center justify-center w-full px-3 sm:px-12">
          <span className="flex flex-col items-center justify-between w-full lg:flex-row max-w-7xl">
            <ul className="flex list-none text-xs md:text-sm gap-x-2.5 items-start justify-center">
              <li className="cursor-pointer hover:-translate-y-1 duration-300">
                <a href="/">Home</a>
              </li>
              |
              <li className="cursor-pointer hover:-translate-y-1 duration-300">
                <a href="/services">Services</a>
              </li>
              |
              <li className="cursor-pointer hover:-translate-y-1 duration-300">
                <a href="/contact-us">Contact us</a>
              </li>
            </ul>

            <span className="flex items-center justify-center">
              <h4 className="text-sm lg:text-base">
                Follow us on : &nbsp; &nbsp;
              </h4>
              <span className="flex text-sm lg:text-base gap-x-1.5 items-center justify-center">
                <a
                  target="blank"
                  href="https://www.facebook.com"
                  className="p-2 cursor-pointer text-white hover:-translate-y-1 duration-300"
                >
                  <FaFacebookF className="text-lg" />
                </a>
                <a
                  target="blank"
                  href="https://youtube.com"
                  className="p-2 cursor-pointer text-white hover:-translate-y-1 duration-300"
                >
                  <FaYoutube className="text-lg" />
                </a>
                <a
                  target="blank"
                  href="https://www.instagram.com"
                  className="p-2 cursor-pointer text-white hover:-translate-y-1 duration-300"
                >
                  <FaInstagram className="text-lg" />
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com"
                  className="p-2 cursor-pointer text-white hover:-translate-y-1 duration-300"
                >
                  <FaLinkedinIn className="text-lg" />
                </a>
              </span>
            </span>
          </span>
        </div>

        <div className="text-white flex items-center justify-center w-full ">
          <span className="flex flex-col items-center justify-center w-full max-w-7xl lg:flex-row">
            <span className="text-sm font-semibold pb-2">
              © 2024 KhanaKhazana, Inc
            </span>
          </span>
        </div>
      </section>
    </>
  );
}

export default Footer;
