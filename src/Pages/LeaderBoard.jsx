import React from "react";

import { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import bgStars from "../assets/Background.png"; // Adjust the path as needed

import Pad1 from "../assets/Pad3.png"; // Replace with your actual logo

import ClickMe from "../assets/ClickMe.png"; // Replace with your actual logo

import Banner from "../assets/Banner.png"; // Replace with your actual logo

import Level from "../assets/Level.png"; // Replace with your actual logo

import AllGames from "../components/Leaderboard/AllGames";

import Challenge from "../components/Leaderboard/Challenge";
import { Link } from "react-router-dom";

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
  {
    label: "Select Week",
    emoji: "📅",
    content: [
      "April 1–7, 2025",
      "March 25–31, 2025",
      "March 18–24, 2025",
      "March 11–17, 2025",
      "March 4–10, 2025",
    ],
  },
  {
    label: "Month",
    emoji: "🗓️",
    content: [
      "January 2025",
      "February 2025",
      "March 2025",
      "April 2025",
      "May 2025",
    ],
  },
  {
    label: "Season",
    emoji: "🏆",
    content: [
      "Q1 2025 (Jan–Mar)",
      "Q2 2025 (Apr–Jun)",
      "Q3 2025 (Jul–Sep)",
      "Q4 2025 (Oct–Dec)",
    ],
  },
  {
    label: "Top 100",
    emoji: "🔥",
    content: [
      "Top 100 Players",
      "Top 200 Players",
      "Top 300 Players",
      "Top 400 Players",
      "Top 500 Players",
    ],
  },
];

const LeaderBoard = () => {
  const [activeTab, setActiveTab] = useState("all");

  const [openDropdown, setOpenDropdown] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

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

      <div className=" space-y-6  h-full w-full z-20 py-20 lg:max-w-6xl mx-auto">
        <div className="w-full  py-6 px-2 text-white relative">
          <img
            src={ClickMe}
            alt=""
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          {/* Modal */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <div className="bg-[#111] rounded-xl p-6 max-w-md mx-auto text-center text-white border border-cyan-500/30 shadow-xl space-y-4">
                {/* Badge */}
                <div className="inline-block bg-black px-3 py-1 text-xs rounded-full border border-white/10">
                  Personal Status • <span className="font-bold">Level 2</span>
                </div>

                {/* Clover emoji */}
                <div className="text-2xl">🍀</div>

                {/* Welcome */}
                <h2 className="text-xl font-semibold flex items-center justify-center gap-2">
                  👋 Hey, <span className="text-cyan-400">@Osato</span>
                </h2>

                {/* Stats */}
                <div className="space-y-1 text-sm">
                  <p>
                    💼 <span className="font-medium">Level:</span> 2
                  </p>
                  <p>
                    🏆 <span className="font-medium">Current Rank:</span> 14th
                  </p>
                  <p>
                    💰 <span className="font-medium">Total Wins:</span> ₦9,500
                  </p>
                  <p>
                    🔥 <span className="font-medium">Streak:</span> 2 Wins
                  </p>
                </div>

                {/* Info */}
                <div className="text-xs text-gray-400">
                  💡 Want to climb higher?
                  <br />
                  <span className="text-white">
                    Complete 3 games today and earn a “Lucky Plucker 🍥” badge!
                  </span>
                </div>

                {/* Button */}
                <Link to="/Explore">
                  <button className="bg-cyan-400 hover:bg-cyan-500 mt-4 text-black font-semibold px-4 py-2 rounded-md text-sm transition">
                    View Active Games →
                  </button>
                </Link>
              </div>
            </div>
          )}

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
                <div key={index} className="relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-md text-sm text-white bg-white/5 hover:bg-white/10 transition"
                  >
                    <span>{item.emoji}</span>
                    {item.label}
                    <BsChevronDown className="text-xs" />
                  </button>

                  {/* Dropdown Panel */}
                  {openDropdown === index && (
                    <div className="absolute z-10 mt-2 w-56 bg-[#0F0F0F] border border-cyan-500 rounded-md shadow-xl p-3 text-white space-y-2">
                      {item.content.map((entry, i) => (
                        <div
                          key={i}
                          className="text-sm border border-white/10 px-3 py-1 rounded-md hover:bg-white/10 transition"
                        >
                          {entry}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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
