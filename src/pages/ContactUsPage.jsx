import React, { useState, useEffect } from "react";
import ContactUs from "../assets/images/contactBg.jpg"

export default function ContactUsPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputMessageValue, setInputMessageValue] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  async function submitForm(e) {
    e.preventDefault();
    const form = document.getElementById("contact-us-form");
    const formData = new FormData(form);
    setIsButtonClicked(true);

    let emailVerification =
      inputEmailValue &&
      (isValidEmail(inputEmailValue) || isValidPhoneNumber(inputEmailValue));

    // if (emailVerification && inputMessageValue) {
    //   try {
    //     await fetch(
    //       "https://script.google.com/macros/s/AKfycbys2EzXm3ibxigDjM8Xv2ovNGXFwKFIPJqdxFzJiUHmUKOk8Lu52y45CLadBgnCD_jF/exec",
    //       {
    //         method: "POST",
    //         body: formData,
    //       }
    //     );

    //     setSuccessMessage("Thank you for your message! We'll get back to you.");
    //     setIsFormSubmitted(true);
    //     setInputMessageValue("");
    //     setErrorMessage("");

    //     setTimeout(() => {
    //       setIsButtonClicked(false);
    //       setSuccessMessage("");
    //     }, 2000);
    //   } catch (error) {
    //     console.error("Error submitting the form:", error);
    //   }
    // } else {
    //   if (!emailVerification) {
    //     setErrorMessage("Please enter a valid email or phone number.");
    //   } else if (!inputMessageValue) {
    //     setErrorMessage("Message cannot be empty");
    //   }

    //   setIsButtonClicked(false);
    // }
  }

  function isValidEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  function isValidPhoneNumber(value) {
    const phoneRegex =
      /^(\+?\d{1,3})?[-. ]?(\(\d{1,}\)|\d{1,})[-. ]?\d{1,}[-. ]?\d{1,}[-. ]?\d{1,}$/;
    return phoneRegex.test(value);
  }

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  }, [errorMessage]);

  const bgImage = {
    backgroundImage: `url(${ContactUs})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <section className="min-h-[550px] sm:min-h-[600px] w-full bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 overflow-x-hidden"
    style={bgImage}
  >
    <div className="container py-5">
      <div className="container">
        <div className="container heading flex justify-center p-3 px-2 w-full md:w-3/4 lg:w-1/2 mx-auto text-black">
          <div>
            <h1 className="font-bold text-2xl md:text-4xl">Contact Us</h1>
            <hr className="w-1/2 md:w-1/4 border-t-4 border-black h-2" />
            <p className="text-lg md:text-lg">
              Let us know if you have any feedback, suggestion, or review about{" "}
              <span className="text-black font-bold">KhanaKhazana!</span>. Thank You.
            </p>
            <br />
          </div>
        </div>

        <div className="px-2 w-full md:w-3/4 lg:w-1/2 mx-auto">
          <form
            className="mb-3 px-2 bg-white p-6 rounded-lg shadow-lg backdrop-blur-lg bg-opacity-30 w-full max-w-lg md:max-w-2xl"
            id="contact-us-form"
            name="contact-us-form"
            onSubmit={submitForm}
          >
            <div className="mb-3 flex flex-col text-black">
              <label
                htmlFor="input-name"
                className="form-label text-lg font-bold"
              >
                Name
              </label>
              <input
                name="Name"
                type="text"
                className="form-input border border-gray-400 focus:border-pink-200 focus:ring-pink-400 rounded-md p-1 mt-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 w-full bg-gray-200"
                aria-describedby="fullName"
                placeholder="Enter your name"
                aria-label="Enter your name"
              />
            </div>
            <div className="mb-3 flex flex-col text-black">
              <label
                htmlFor="input-email"
                className="form-label text-lg font-bold"
              >
                Email address
              </label>
              <input
                name="Email"
                type="text"
                className="form-input border border-gray-400 focus:border-pink-200 focus:ring-pink-400 rounded-md p-1 mt-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 w-full bg-gray-200"
                aria-describedby="emailHelp"
                onChange={(e) => setInputEmailValue(e.target.value)}
                placeholder="Enter your email / phone no."
                aria-label="Enter your email / phone No."
              />
              <div id="emailHelp" className="text-gray-600">
                We'll never share your email / phone no. with anyone else.
              </div>
            </div>
            <div className="mb-3 flex flex-col text-black">
              <label
                htmlFor="input-text"
                className="form-label text-lg font-bold"
              >
                Feedback / Suggestion / Review
              </label>
              <textarea
                name="Message"
                className="form-textarea border border-gray-400 focus:border-pink-200 focus:ring-pink-400 rounded-md p-1 mt-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 w-full bg-gray-200"
                rows="3"
                placeholder="Enter message"
                aria-label="Enter message"
                onChange={(e) => setInputMessageValue(e.target.value)}
                value={inputMessageValue}
              ></textarea>
            </div>
            <button
              className="btn z-0 bg-pink-400 inline-block py-2 px-4 rounded-lg shadow-lg text-white"
              type="submit"
              id="contact-us-submit-button"
              onClick={() => setIsButtonClicked(true)}
            >
              Submit
            </button>
          </form>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {isFormSubmitted && (
            <p className="text-green-500">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
    </section>
  );
}
