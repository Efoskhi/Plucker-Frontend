import React from "react";
import bgStars from "../../assets/Background.png"; // Adjust the path as needed
import logo from "../../assets/logo.png"; // Replace with your actual logo

import Mailbox from "../../assets/Mailbox.png"; // Replace with your actual logo

const VerifyEmail = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center text-white px-4 relative"
      style={{ backgroundImage: `url(${bgStars})` }}
    >
      <div className="w-full max-w-md text-center space-y-6 ">
        <img
          src={logo}
          alt="Logo"
          className="h-10 absolute top-4 lg:left-32 left-8"
        />
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "grotesk" }}>
            <span
              role="img"
              aria-label="email"
              className="inline-flex items-center"
            >
              <img src={Mailbox} className="h-12" />
              Verify Your Email
            </span>{" "}
          </h1>
          <p className="text-gray-100 mt-2" style={{ fontFamily: "grotesk" }}>
            We’ve sent a link to <strong>you@gmail.com</strong>
            <br />
            Once verified, you will unlock your level 1 badge. Let’s go! 🕹️
          </p>
        </div>
        <button className="hover:bg-cyan-700 bg-[#00DAE4] text-black py-2 px-6 rounded-md font-medium  transition">
          Resend Verification Link
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
