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
import useLeaderboard from "../hooks/useLeaderboard";
import { useAppContext } from "../context/AppContext";
import { numberFormat } from "../utils";
import Loading from "../components/Loading";

const tabs = [
  { id: "all", label: "All Games", icon: "🌍" },
  { id: "rename", label: "Rename Lagos Challenge", icon: "🎯" },
  { id: "bribe", label: "Avoid Bribe Story Game", icon: "💡" },
  { id: "fashion", label: "Fashion Trend Roast", icon: "💎" },
];

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

  const { isLoading, leaderboard, setFilter } = useLeaderboard();
  const { user } = useAppContext();

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  // Get current date
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0-11
  const currentDate = now.getDate();

  // Generate dynamic week options (last 5 weeks)
  const getWeekOptions = () => {
    const weeks = [];
    const oneWeek = 7 * 24 * 60 * 60 * 1000; // milliseconds in a week
    
    for (let i = 0; i < 5; i++) {
      const endDate = new Date(now.getTime() - (i * oneWeek));
      const startDate = new Date(endDate.getTime() - (6 * 24 * 60 * 60 * 1000));
      
      const startMonth = startDate.toLocaleString('default', { month: 'long' });
      const endMonth = endDate.toLocaleString('default', { month: 'long' });
      
      const weekString = startMonth === endMonth 
        ? `${startMonth} ${startDate.getDate()}–${endDate.getDate()}, ${currentYear}`
        : `${startMonth} ${startDate.getDate()}–${endMonth} ${endDate.getDate()}, ${currentYear}`;
      
      weeks.push({
        label: weekString,
        dateFrom: startDate.toISOString().split('T')[0],
        dateTo: endDate.toISOString().split('T')[0]
      });
    }
    
    return weeks;
  };

  // Generate dynamic month options
  const getMonthOptions = () => {
    const months = [];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    // Get current and previous 4 months
    for (let i = 0; i < 5; i++) {
      const monthIndex = (currentMonth - i + 12) % 12;
      const year = currentYear - (currentMonth - i < 0 ? 1 : 0);
      
      const firstDay = new Date(year, monthIndex, 1);
      const lastDay = new Date(year, monthIndex + 1, 0);
      
      months.push({
        label: `${monthNames[monthIndex]} ${year}`,
        dateFrom: firstDay.toISOString().split('T')[0],
        dateTo: lastDay.toISOString().split('T')[0]
      });
    }
    
    return months;
  };

  // Generate dynamic quarter options
  const getQuarterOptions = () => {
    const quarters = [];
    const currentQuarter = Math.floor(currentMonth / 3) + 1;
    
    for (let i = 0; i < 4; i++) {
      const quarter = (currentQuarter - i + 4) % 4 || 4;
      const year = currentYear - (currentQuarter - i <= 0 ? 1 : 0);
      
      const firstMonth = (quarter - 1) * 3;
      const lastMonth = firstMonth + 2;
      
      const firstDay = new Date(year, firstMonth, 1);
      const lastDay = new Date(year, lastMonth + 1, 0);
      
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      
      quarters.push({
        label: `Q${quarter} ${year} (${monthNames[firstMonth]}–${monthNames[lastMonth]})`,
        dateFrom: firstDay.toISOString().split('T')[0],
        dateTo: lastDay.toISOString().split('T')[0]
      });
    }
    
    return quarters;
  };

  const dropdownItems = [
    {
      label: "Select Week",
      emoji: "📅",
      content: getWeekOptions(),
    },
    {
      label: "Month",
      emoji: "🗓️",
      content: getMonthOptions(),
    },
    {
      label: "Season",
      emoji: "🏆",
      content: getQuarterOptions(),
    },
    {
      label: "Top Players",
      emoji: "🔥",
      content: [
        { label: "Top 10 Players", pageSize: 10 },
        { label: "Top 20 Players", pageSize: 20 },
        { label: "Top 50 Players", pageSize: 50 },
        { label: "Top 80 Players", pageSize: 80 },
        { label: "Top 100 Players", pageSize: 100 },
      ],
    },
  ];

  const handleItemClick = (item) => {
    if (item.pageSize) {
      setFilter(prev => ({ ...prev, pageSize: item.pageSize }));
    } else if (item.dateFrom && item.dateTo) {
      setFilter(prev => ({ ...prev, dateFrom: item.dateFrom, dateTo: item.dateTo }));
    }
    setOpenDropdown(null);
  };


  const tabComponents = {
    all: <AllGames leaderboard={leaderboard}/>,
    rename: <Challenge />,
    bribe: <div className="p-4">💡 Story mode: Avoid Bribe Game</div>,
    fashion: <div className="p-4">💎 Fashion Roast Area</div>,
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
                  Personal Status • <span className="font-bold">Level {user.level}</span>
                </div>

                {/* Clover emoji */}
                <div className="text-2xl">🍀</div>

                {/* Welcome */}
                <h2 className="text-xl font-semibold flex items-center justify-center gap-2">
                  👋 Hey, <span className="text-cyan-400">@{user.username}</span>
                </h2>

                {/* Stats */}
                <div className="space-y-1 text-sm">
                  <p>
                    💼 <span className="font-medium">Level:</span> {user.level}
                  </p>
                  {/* <p>
                    🏆 <span className="font-medium">Current Rank:</span> 14th
                  </p> */}
                  <p>
                    💰 <span className="font-medium">Total Wins:</span> ₦{numberFormat(user.totalWinningAmount)}
                  </p>
                  <p>
                    🔥 <span className="font-medium">Streak:</span> {numberFormat(user.totalGamesWon, 0)} Wins
                  </p>
                </div>

                {/* Info */}
                {/* <div className="text-xs text-gray-400">
                  💡 Want to climb higher?
                  <br />
                  <span className="text-white">
                    Complete 3 games today and earn a “Lucky Plucker 🍥” badge!
                  </span>
                </div> */}

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
              {/* <p className="text-sm text-gray-400 mt-2">
                Top Pluckers are crowned every Monday at{" "}
                <span className="text-white">12:00 AM WAT</span>.
              </p> */}
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
                        <button
                          key={i}
                          onClick={() => handleItemClick(entry)}
                          className="w-full text-left text-sm border border-white/10 px-3 py-1 rounded-md hover:bg-white/10 transition"
                        >
                          {entry.label || entry}
                        </button>
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
        {isLoading && <Loading/> }
        {tabComponents[activeTab]}
      </div>
    </div>
  );
};

export default LeaderBoard;
