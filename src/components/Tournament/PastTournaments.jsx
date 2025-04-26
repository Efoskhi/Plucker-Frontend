import React from "react";
import { FaTrophy } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";

const PastTournaments = () => {
  const tournaments = [
    {
      id: 1,
      rank: 1,
      title: "Fortnite Logan Challenge",
      winner: "@Fortnite91_Queen",
      prize: "₩10,000",
      date: "April 7, 2025",
    },
    {
      id: 2,
      rank: 2,
      title: "BRBR Avalanche Story Battle",
      winner: "@GObsAnnihilator",
      prize: "₩5,000",
      date: "April 6, 2025",
    },
    {
      id: 3,
      rank: 3,
      title: "Local Team Rumble",
      winner: "@GhostRelict_X",
      prize: "₩5,000",
      date: "March 28, 2025",
    },
  ];

  return (
    <div className="mx-auto py-4">
      <div className="bg-[#0F0F0F] rounded-lg overflow-hidden shadow-2xl shadow-[#00DAE41F] border border-[#00B8C1]">
        {/* Table Header */}
        <div className="flex items-center bg-[#2C2C2C] text-gray-300 py-3 px-4">
          <div className="w-10 text-center font-medium">#</div>
          <div className="flex items-center space-x-2 flex-1 px-2">
            🏆
            <span className="text-sm font-medium">Tournament Title</span>
          </div>
          <div className="w-1/4 flex items-center space-x-2 px-2">
            <span className=" font-bold">🥇</span>
            <span className="text-sm font-medium">Winner</span>
          </div>
          <div className="w-1/6 flex items-center space-x-2 px-2">
            💰
            <span className="text-sm font-medium">Prize</span>
          </div>
          <div className="w-1/5 flex items-center space-x-2 px-2">
            ⏳ <span className="text-sm font-medium"> End Date</span>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-800">
          {tournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="flex items-center py-3 px-4 hover:bg-gray-800 transition-colors"
            >
              <div className="w-10 text-center text-gray-400 font-medium">
                {tournament.rank}
              </div>
              <div className="flex-1 px-2 text-gray-200 font-medium">
                {tournament.title}
              </div>
              <div className="w-1/4 px-2 text-blue-400">
                {tournament.winner}
              </div>
              <div className="w-1/6 px-2 text-green-500 font-medium">
                {tournament.prize}
              </div>
              <div className="w-1/5 px-2 text-gray-400 text-sm">
                {tournament.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastTournaments;
