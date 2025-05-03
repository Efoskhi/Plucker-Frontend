import React from "react";

import bgStars from "../../assets/Background.png"; // Adjust the path as needed

import Banner from "../../assets/Banner5.png"; // Replace with your actual logo

const GameRules = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white relative z-0"
      style={{ backgroundImage: `url(${bgStars})` }}
    >
      <img
        src={Banner}
        alt=""
        className="absolute inset-0  flex items-center justify-center mx-auto -z-10 top-16"
      />

      <div className=" py-[35vh]">
        {/* Header */}
        <div className="flex flex-col justify-center items-center mb-8">
          <div className="inline-flex justify-center items-center mx-auto">
            <span className="text-3xl mr-3">🎮</span>
            <h1 className="text-3xl font-bold">
              Game Rules & FairPlay Guideline
            </h1>
          </div>

          <p className="mb-6 text-center text-gray-300 pt-8">
            At Pluck, we believe in fair competition. These rules apply to all
            players across all games and tournaments.
          </p>

          <div className="mb-6 text-gray-300">
            <p className="mb-2">
              No cheating, exploiting, or use of automated tools is allowed.
            </p>
          </div>

          <div className="mb-6 text-center text-gray-300">
            <p className="mb-2">
              Answer submissions must be completed within the countdown timer
              for each game.
            </p>
          </div>

          <div className="text-center text-gray-300 text-sm">
            <p className="mb-4">
              One player = one account. Multiple accounts may lead to
              disqualification.
            </p>
            <p className="mb-4">
              Pluck may require ID verification for large winnings before
              payouts.
            </p>
            <p className="mb-4">
              Each tournament may have additional specific rules. Read the
              Tournament Note carefully before joining.
            </p>
            <p>
              If you suspect unfair play, report it immediately via the Contact
              page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameRules;
