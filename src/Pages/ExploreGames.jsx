import React, { useState } from "react";
import Navbar from "../components/Layout/Navbar";

import TrendingGames from "../components/TrendingGames";

import NewChallenges from "../components/NewChallenges";
import HighestPayouts from "../components/HighestPayouts";

import bgStars from "../assets/Background.png"; // Adjust the path as needed

import Pad2 from "../assets/Pad2.png"; // Replace with your actual logo

import Pad1 from "../assets/Pad3.png"; // Replace with your actual logo

import { FaFire, FaTrophy, FaCoins } from "react-icons/fa";

const ExploreGames = () => {
  const [activeTab, setActiveTab] = useState("trending");

  const tabContent = {
    trending: <TrendingGames />,
    challenges: <NewChallenges />,
    payouts: <HighestPayouts />,
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center  text-white px-2 relative z-0"
      style={{ backgroundImage: `url(${bgStars})` }}
    >
      <img src={Pad2} className="absolute right-0 -z-10 top-0" />

      <img src={Pad1} className="absolute left-0 -z-10 bottom-0 " />
      <div className=" space-y-6  h-full w-full z-20 py-20  lg:max-w-6xl mx-auto">
        <div className="flex">
          <button
            className={`px-4 py-3 flex items-center space-x-2 text-sm focus:outline-none ${
              activeTab === "trending"
                ? "border-b-2 border-orange-500"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveTab("trending")}
          >
            <FaFire className="text-orange-500" />
            <span>Trending Games</span>
          </button>

          <button
            className={`px-4 py-3 flex items-center space-x-2 text-sm focus:outline-none ${
              activeTab === "challenges"
                ? "border-b-2 border-purple-500"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveTab("challenges")}
          >
            <span className="text-purple-500">
              <FaTrophy />
            </span>
            <span>New Challenges</span>
          </button>

          <button
            className={`px-4 py-3 flex items-center space-x-2 text-sm focus:outline-none ${
              activeTab === "payouts"
                ? "border-b-2 border-yellow-500"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveTab("payouts")}
          >
            <span className="text-yellow-500">
              <FaCoins />
            </span>
            <span>Highest Payouts</span>
          </button>
        </div>
        <div className=" overflow-y-auto overscroll-y-auto min-h-[70vh]">
          {tabContent[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default ExploreGames;
