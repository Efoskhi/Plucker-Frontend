import React from "react";

import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import bgStars from "../assets/Background.png"; // Adjust the path as needed

import Pad1 from "../assets/Pad3.png"; // Replace with your actual logo

import Wave1 from "../assets/Wave1.png"; // Replace with your actual logo

import Wave2 from "../assets/Wave2.png"; // Replace with your actual logo

import Banner from "../assets/Banner4.png"; // Replace with your actual logo

import Face from "../assets/Face.png"; // Replace with your actual logo

import Level from "../assets/Level.png"; // Replace with your actual logo
import HowItWorks from "../components/Pricing/HowItWorks";
import FaqSection from "../components/Pricing/FAQ";
import PromoBanner from "../components/Pricing/PromoBanner";
import UserProfileCard from "../components/Profile/UserProfileCard";
import Activity from "../components/Profile/Activity";
import AccountSettings from "../components/Profile/AccountSettings";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Profile = () => {
  const { user } = useAppContext();

  return (
    <div
      className="min-h-screen bg-cover bg-center  text-white  relative z-0"
      style={{ backgroundImage: `url(${bgStars})` }}
    >
      <img
        src={Banner}
        alt=""
        className="absolute inset-0 lg:max-w-5xl h-[195px] flex items-center justify-center mx-auto -z-10 top-24"
      />
      <img
        src={Level}
        alt=""
        className="absolute  flex items-end justify-end  -z-10 right-0 top-40"
      />

      <img src={Pad1} className="absolute left-0 -z-10 bottom-0 " />

      {/* <img src={Wave1} className="absolute right-0 -z-10 top-[40%] " /> */}

      <img src={Wave2} className="absolute left-0 -z-10 bottom-[40%] " />
      <div className=" space-y-6  h-full w-full z-20 py-20 lg:max-w-6xl mx-auto">
        <div className="w-full  py-6 px-2 text-white">
          <div className="flex flex-col md:flex-row md:items-center lg:max-w-5xl mx-auto pt-36  md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold inline-flex items-center">
                <img src={Face} className="h-8" />{" "}
                <span className="text-white">Hello, { user.fullname }</span>{" "}
              </h1>
            </div>

            <div className="flex space-x-2">
              {!user.planID && 
                <Link to="/Pricing">
                  <button className="flex items-center px-4 py-2 bg-[#00FF85] text-white rounded-md shadow hover:bg-green-600 transition-colors">
                    <span className="mr-2">💎</span>
                    <span className="font-medium lg:text-base text-[10px]">
                      Upgrade to Verified
                    </span>
                  </button>
                </Link>
              }
              <Link to="/Submissions">
                <button className="flex items-center px-4 py-2 bg-[#FFD95A] text-gray-800 rounded-md shadow hover:bg-yellow-400 transition-colors">
                  <span className="mr-2">📋</span>
                  <span className="font-medium lg:text-base text-[10px]">
                    My Submissions
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <UserProfileCard />
        <Activity />
        <AccountSettings />
      </div>
    </div>
  );
};

export default Profile;
