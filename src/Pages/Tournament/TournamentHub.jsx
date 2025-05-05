import React from "react";

import { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import bgStars from "../../assets/Background.png"; // Adjust the path as needed

import Faces from "../../assets/Faces.png"; // Replace with your actual logo

import Strike from "../../assets/Strike.png"; // Replace with your actual logo

import Banner from "../../assets/Banner.png"; // Replace with your actual logo

import Level from "../../assets/Level.png"; // Replace with your actual logo

import Smile from "../../assets/Smile.png";

import Challenge from "../../components/Leaderboard/Challenge";
import Card from "../../components/Tournament/Card";
import AllTournaments from "../../components/Tournament/AllTournaments";
import PastTournaments from "../../components/Tournament/PastTournaments";

const tabs = [
  { id: "all", label: "All Tournaments", icon: "🌍" },
  { id: "past", label: "Past Tournaments", icon: "🎯" },
];
const tabComponents = {
  all: <AllTournaments />,
  past: <PastTournaments />,
};

const TournamentHub = () => {
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
      <img
        src={Faces}
        alt=""
        className="absolute right-0 flex items-center justify-center mx-auto -z-10 top-[30vh]"
      />

      <img src={Strike} className="absolute left-0 -z-10 bottom-0 " />
      <div className=" space-y-6  h-full w-full z-20 py-20 lg:max-w-6xl mx-auto">
        <div className="w-full  py-6 px-2 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Left Side */}
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold pt-20">
                <span className="inline-flex items-center gap-2 text-white text-base md:text-4xl ">
                  <FaTrophy className="inline text-yellow-500 text-4xl" />
                  Tournament Hub
                </span>
              </h1>
              <p className="text-sm text-[#988C8C] inline-flex gap-2 mt-2">
                <img src={Smile} />
                Ready to flex your creativity and climb the ranks?
              </p>
            </div>

            {/* Filters */}
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3 grid-cols-1 px-4 lg:max-w-6xl  items-center justify-center mx-auto">
        <div className=" lg:my-12 lg:mt-12">
          {/* Card */}
          <Card />
        </div>

        <div className=" lg:mb-12">
          {" "}
          <Card />
        </div>
        <div className=" lg:my-12 lg:mt-12">
          <Card />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 items-center text-sm font-medium px-4 pt-8 lg:max-w-6xl mx-auto  overflow-x-auto whitespace-nowrap">
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
      <div className="py-6 lg:max-w-6xl mx-auto ">
        {tabComponents[activeTab]}
      </div>
    </div>
  );
};

export default TournamentHub;
