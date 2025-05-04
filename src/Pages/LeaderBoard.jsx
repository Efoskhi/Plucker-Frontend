import React from "react";

import { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import bgStars from "../assets/Background.png"; // Adjust the path as needed

import Pad1 from "../assets/Pad3.png"; // Replace with your actual logo

import Banner from "../assets/Banner.png"; // Replace with your actual logo

import Level from "../assets/Level.png"; // Replace with your actual logo

import AllGames from "../components/Leaderboard/AllGames";

import Challenge from "../components/Leaderboard/Challenge";

const tabs = [
  { id: "all", label: "All Games", icon: "🌍" },
  { id: "rename", label: "Rename Lagos Challenge", icon: "🎯" },
  { id: "bribe", label: "Avoid Bribe Story Game", icon: "💡" },
  { id: "fashion", label: "Fashion Trend Roast", icon: "💎" },
];

const tabComponents = {
  all: <AllGames />,
  rename: <Challenge />,
  bribe: <div className="p-4">💡 Story mode: Avoid Bribe Game</div>,
  fashion: <div className="p-4">💎 Fashion Roast Area</div>,
};

const dropdownItems = [
  { label: "Select Week", emoji: "📅" },
  { label: "Month", emoji: "🗓️" },
  { label: "Season", emoji: "🏆" },
  { label: "Top 100", emoji: "🏅" },
];

const LeaderBoard = () => {
  const [activeTab, setActiveTab] = useState("all");
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
      <div className=" space-y-6  h-full w-full z-20 py-20 lg:max-w-6xl mx-auto">
        <div className="w-full  py-6 px-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Left Side */}
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold">
                <span className="text-white">Leaderboard</span>{" "}
                <span className="inline-flex items-center gap-2 text-yellow-400 text-base md:text-lg ml-2">
                  <FaTrophy className="inline" />
                  Compete. Climb. Conquer.
                </span>
              </h1>
              <p className="text-sm text-gray-400 mt-2">
                Top Pluckers are crowned every Monday at{" "}
                <span className="text-white">12:00 AM WAT</span>.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3 border border-cyan-400/50 p-2 rounded-lg backdrop-blur">
              {dropdownItems.map((item, index) => (
                <button
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-md text-sm text-white bg-white/5 hover:bg-white/10 transition"
                >
                  <span>{item.emoji}</span>
                  {item.label}
                  <BsChevronDown className="text-xs" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Nav */}
      <div className="flex gap-6 items-center text-sm font-medium px-4 py-2 lg:max-w-6xl mx-auto  overflow-x-auto whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 relative pb-1.5 transition ${
              activeTab === tab.id
                ? "text-white"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {tab.icon}
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 rounded" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="lg:max-w-6xl mx-auto py-6">
        {tabComponents[activeTab]}
      </div>
    </div>
  );
};

export default LeaderBoard;
