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
import { Link, useNavigate } from "react-router-dom";
import usePlan from "../../hooks/usePlan";
import { numberFormat } from "../../utils";
import Loading from "../../components/Loading";
import { useAppContext } from "../../context/AppContext";

const Pricing = () => {

  const { isLoading, plans } = usePlan();

  const { user } = useAppContext();
    
  const navigate = useNavigate();

  if(user.planID) {
    navigate('/Explore');
  }

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
      <div className=" space-y-6  h-full w-full z-20 py-20 lg:max-w-6xl mx-auto">
        <div className="w-full  py-6 px-2 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Left Side */}
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold">
                <span className="text-white">🤑 Unlock Unlimited Pluckin'</span>{" "}
              </h1>
              <p className="text-sm text-gray-400 mt-2">
                {/* 💎 Become a Verified Member for just ₦1,000/month! */}
              </p>
            </div>
          </div>
        </div>
      </div>

      {isLoading && <Loading/>}

      <div className="min-h-screen lg:max-w-4xl mx-auto text-white flex flex-col items-center py-6 px-2 space-y-8">
        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {plans.map((item, key) => (
            <div
              key={key}
              className="bg-[#0D0D0D] p-6 rounded-lg flex justify-between items-center shadow-lg"
            >
              <div>
                <div className="text-sm text-gray-400 mb-2 border-b">
                  {item.planName} 💎
                </div>
                <div className="text-2xl font-bold mb-4">
                  ₦{numberFormat(item.amountPerMonth)}{' '}
                  <span className="text-sm font-normal">/ month</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 items-end">
                <Link to={`/UpgradeAccount/${item.id}`}>
                  <button className="bg-[#00ff85] hover:bg-green-500 text-black font-bold py-2 px-6 rounded-md">
                    Upgrade Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
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
