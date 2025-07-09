import React from "react";

import { useState } from "react";
import { BsArrowRight, BsChevronDown } from "react-icons/bs";

import { FaTrophy } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import bgStars from "../../assets/Background.png"; // Adjust the path as needed

import Faces from "../../assets/Faces.png"; // Replace with your actual logo

import Strike from "../../assets/Strike.png"; // Replace with your actual logo

import Banner from "../../assets/Banner4.png"; // Replace with your actual logo

import Level from "../../assets/Level.png"; // Replace with your actual logo

import Bottle from "../../assets/Bottle.png";

import Smile from "../../assets/Smile.png";
import Card from "../../components/Submission/Card";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const UpgrdeSuccessful = () => {
  const { user } = useAppContext();
  
  const navigate = useNavigate();

  if(user.planID) {
    navigate('/Explore');
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white relative z-0"
      style={{ backgroundImage: `url(${bgStars})` }}
    >
      <img
        src={Banner}
        alt=""
        className="absolute inset-0  flex items-center justify-center mx-auto -z-10 top-24"
      />
      <img
        src={Level}
        alt=""
        className="absolute  flex items-end justify-end  -z-10 right-0 top-40"
      />
      <img
        src={Faces}
        alt=""
        className="absolute right-0 bottom-0 flex  mx-auto -z-10 "
      />
      <img src={Strike} className="absolute left-0 -z-10 bottom-0 " />
      <div className=" space-y-6  h-full w-full z-20 py-20">
        <div className="w-full  pt-40 lg:px-24 px-6 text-white">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Left Side */}
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold">
                <span className="text-white">
                  💎Congrat You're now a Verified Plucker
                </span>{" "}
              </h1>
              <p className="text-[#988C8C] inline-flex text-xs items-center py-2 pl-">
                <img src={Smile} /> Stand out. Win bigger. Unlock unlimited
                games
              </p>
            </div>
          </div>

          {/* Empty State */}
          <div className="max-w-4xl mt-6 mx-auto bg-[#0F0F0F] border-2 border-cyan-400 rounded-lg p-6 text-white text-center shadow-xl">
            {/* Selected Plan */}
            <div className="text-green-400 font-medium mb-2">
              ✅ You are Now Verified
            </div>

            {/* Plan Title */}
            <h2 className="text-xl font-semibold mb-2">
              Welcome to the Verified League.
            </h2>

            {/* Amount */}
            <p className="text-sm text-gray-300 mb-1">
              💰 Unlimited daily plays unlock.
            </p>

            {/* Payment Method */}
            <p className="text-sm text-gray-300 mb-4">
              🏆 Verified badge activated
            </p>

            {/* Wallet Balance */}
            <p className="text-sm text-gray-400 mb-4">
              Access premium tournaments
            </p>

            {/* Confirm Button */}
            <Link to="/Explore">
              <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold w-full py-2 rounded-md mb-3 transition">
                Start Pluckin Now ✅
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgrdeSuccessful;
