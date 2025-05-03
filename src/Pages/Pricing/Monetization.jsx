import React from "react";

import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import bgStars from "../../assets/Background.png"; // Adjust the path as needed

import Pad1 from "../../assets/Pad3.png"; // Replace with your actual logo

import Wave1 from "../../assets/Wave1.png"; // Replace with your actual logo

import Wave2 from "../../assets/Wave2.png"; // Replace with your actual logo

import Banner from "../../assets/Banner3.png"; // Replace with your actual logo

import Level from "../../assets/Level.png"; // Replace with your actual logo
import HowItWorks from "../../components/Pricing/HowItWorks";
import FaqSection from "../../components/Pricing/FAQ";
import PromoBanner from "../../components/Pricing/PromoBanner";

const Pricing = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center  text-white  relative z-0"
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

      <img src={Pad1} className="absolute left-0 -z-10 bottom-0 " />

      <img src={Wave1} className="absolute right-0 -z-10 top-[40%] " />

      <img src={Wave2} className="absolute left-0 -z-10 bottom-[40%] " />
      <div className=" space-y-6  h-full w-full z-20 py-20">
        <div className="w-full  py-6 px-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Left Side */}
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold">
                <span className="text-white">🤑 Unlock Unlimited Pluckin'</span>{" "}
              </h1>
              <p className="text-sm text-gray-400 mt-2">
                💎 Become a Verified Member for just ₦1,000/month!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen lg:max-w-4xl mx-auto text-white flex flex-col items-center p-6 space-y-8">
        {/* Plans */}
        <div className="flex flex-col md:flex-row  w-full gap-6">
          {/* Monthly Plan */}
          <div className="bg-[#0D0D0D] p-6 rounded-lg w-full inline-flex justify-between items-center shadow-lg  ">
            <div className="">
              <div className="text-sm text-gray-400 mb-2 border-b">
                Verified Member 💎
              </div>
              <div className="text-2xl font-bold mb-4">
                ₦1,000 <span className="text-sm font-normal">/ month</span>
              </div>
            </div>

            <button className="bg-[#00ff85] hover:bg-green-500 text-black font-bold py-2 px-6 rounded-md">
              Upgrade Now
            </button>
          </div>

          {/* Monthly Plan */}
          <div className="bg-[#0D0D0D] p-6 rounded-lg w-full flex  justify-between items-center shadow-lg  ">
            <div className="">
              <div className="text-sm text-gray-400 mb-2 border-b">
                Verified Member 💎
              </div>
              <div className="text-2xl font-bold mb-4">
                ₦10,000 <span className="text-sm font-normal">/ month</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-end">
              <button className="bg-[#00ff85] hover:bg-green-500 text-black font-bold py-2 px-6 rounded-md">
                Upgrade Now
              </button>
              <button className="border text-[#00ead4] hover:text-white font-bold py-2 px-6 rounded-md w-full">
                Save N2000
              </button>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-[#0D0D0D] p-6 rounded-lg w-full max-w-4xl shadow-lg shadow-cyan-500 border border-cyan-400">
          <div className="text-gray-400 text-sm mb-4">Benefits</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" /> Play unlimited games
              every day
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" /> Early invites to
              tournaments
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" /> Get an instant
              Verified badge
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" /> Priority leaderboard
              placement
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" /> Access bigger prize
              pools
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" /> No ads in premium
              games
            </div>
          </div>
        </div>

        <HowItWorks />
        <FaqSection />
        <PromoBanner />
      </div>
    </div>
  );
};

export default Pricing;
