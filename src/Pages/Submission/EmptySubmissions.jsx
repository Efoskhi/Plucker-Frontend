import React from "react";

import { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { BsArrowRight, BsChevronDown } from "react-icons/bs";
import bgStars from "../../assets/Background.png"; // Adjust the path as needed

import Faces from "../../assets/Faces.png"; // Replace with your actual logo

import Strike from "../../assets/Strike.png"; // Replace with your actual logo

import Banner from "../../assets/Banner5.png"; // Replace with your actual logo

import Level from "../../assets/Level.png"; // Replace with your actual logo

import Bottle from "../../assets/Bottle.png";
import Card from "../../components/Submission/Card";
import { Link } from "react-router-dom";

const EmptySubmissions = () => {
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
                <span className="text-white">📝 My Submissions</span>{" "}
              </h1>
            </div>
          </div>

          {/* Empty State */}
          <div className="z-10 text-center">
            <div className="flex justify-center mb-3">
              <span
                className="text-4xl"
                role="img"
                aria-label="disappointed face"
              >
                😔
              </span>
            </div>

            <h1 className="text-white text-2xl font-bold mb-4">
              You haven't submitted any
              <br />
              answers yet.
            </h1>

            <div className="flex items-center justify-center mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <p className="text-white text-sm">
                Go join a game and start Puckin'! 🎮
              </p>
            </div>
            <Link to="/Explore" className="">
              <button className="bg-cyan-400 hover:bg-cyan-500 mx-auto text-black font-medium px-6 py-2 rounded flex items-center justify-center transition-colors mb-2">
                Explore Games
                <BsArrowRight className="ml-1" size={16} />
              </button>
            </Link>

            <div className="relative w-[500px] h-[400px] mx-auto">
              <img
                src={Bottle}
                alt="Purple potion bottle"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptySubmissions;
