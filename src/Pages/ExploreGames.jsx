import React, { useState } from "react";
import Navbar from "../components/Layout/Navbar";

import TrendingGames from "../components/TrendingGames";

import NewChallenges from "../components/NewChallenges";
import HighestPayouts from "../components/HighestPayouts";

import bgStars from "../assets/Background.png"; // Adjust the path as needed

import Pad2 from "../assets/Pad2.png"; // Replace with your actual logo

import Pad1 from "../assets/Pad3.png"; // Replace with your actual logo

import { FaFire, FaTrophy, FaCoins } from "react-icons/fa";
import useDashboard from "../hooks/useDashboard";
import Loading from "../components/Loading";

const ExploreGames = () => {
  const { games, isLoading, currentTab, setCurrentTab } = useDashboard();

  // const tabContent = {
  //   TRENDING: <TrendingGames games={games[currentTab]}/>,
  //   NEW_CHALLANGES: <NewChallenges games={games.NEW_CHALLANGES}/>,
  //   HIGHEST_PAYOUTS: <HighestPayouts games={games.HIGHEST_PAYOUTS}/>,
  // };
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
              currentTab === "TRENDING"
                ? "border-b-2 border-orange-500"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setCurrentTab("TRENDING")}
          >
            <FaFire className="text-orange-500" />
            <span>Trending Games</span>
          </button>

          <button
            className={`px-4 py-3 flex items-center space-x-2 text-sm focus:outline-none ${
              currentTab === "NEW_CHALLANGES"
                ? "border-b-2 border-purple-500"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setCurrentTab("NEW_CHALLANGES")}
          >
            <span className="text-purple-500">
              <FaTrophy />
            </span>
            <span>New Challenges</span>
          </button>

          <button
            className={`px-4 py-3 flex items-center space-x-2 text-sm focus:outline-none ${
              currentTab === "HIGHEST_PAYOUTS"
                ? "border-b-2 border-yellow-500"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setCurrentTab("HIGHEST_PAYOUTS")}
          >
            <span className="text-yellow-500">
              <FaCoins />
            </span>
            <span>Highest Payouts</span>
          </button>
        </div>
        <div className=" overflow-y-auto overscroll-y-auto min-h-[70vh]">
          {isLoading ? (
            <Loading/>
          ) : (
            <>
              <TrendingGames games={games[currentTab]}/>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreGames;
