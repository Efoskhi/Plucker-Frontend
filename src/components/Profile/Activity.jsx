import { useState } from "react";
import { FaTrophy, FaGamepad, FaCoins } from "react-icons/fa";
import Act1 from "../../assets/Act1.png";

import Act2 from "../../assets/Act2.png";
import Act3 from "../../assets/Act3.png";

export default function Activity() {
  const [stats, setStats] = useState({
    gamesPlayed: 23,
    wins: 14,
    winnings: 440000,
  });

  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: "Beginner Plucker",
      icon: "🏅",
      color: "from-purple-500 to-purple-900",
      border: "border-purple-500",
    },
    {
      id: 2,
      title: "Top 10% Winner",
      icon: "🏅",
      color: "from-amber-500 to-amber-900",
      border: "border-amber-500",
    },
    {
      id: 3,
      title: "5 Games in a Week Badge",
      icon: "🏆",
      color: "from-green-500 to-green-900",
      border: "border-green-500",
    },
  ]);

  return (
    <div className=" p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-gray-400 text-lg font-medium mb-4">
          Recent Activity
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Games Played */}
          <div className="bg-black border border-[#00DAE4] rounded-lg p-4 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <FaGamepad className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">Total Games Played</span>
              </div>
            </div>
            <div className="text-white text-2xl font-bold">
              {stats.gamesPlayed}
            </div>
            <div className="absolute -bottom-4 -right-4 ">
              <div className="text-purple-500 opacity-50">
                <img src={Act1} className="z-50" />
              </div>
            </div>
          </div>

          {/* Total Wins */}
          <div className="bg-black border border-[#00DAE4] rounded-lg p-4 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <FaTrophy className="h-5 w-5 text-amber-500" />
                <span className="text-amber-500">Total Wins</span>
              </div>
            </div>
            <div className="text-white text-2xl font-bold">{stats.wins}</div>
            <div className="absolute -bottom-6 -right-6">
              <div className="text-amber-500 opacity-50">
                <img src={Act2} className="z-50" />
              </div>
            </div>
          </div>

          {/* Total Winnings */}
          <div className="bg-black border border-[#00DAE4] rounded-lg p-4 relative ">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <FaCoins className="h-5 w-5 text-green-500" />
                <span className="text-green-500">Total Winnings</span>
              </div>
            </div>
            <div className="text-green-500 text-2xl font-bold">
              ₦{stats.winnings.toLocaleString()}
            </div>
            <div className="absolute -bottom-10 -right-4">
              <div className="text-green-500 opacity-50">
                {/* <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12.4V17M12 12.4C14.2091 12.4 16 10.6091 16 8.4C16 6.19086 14.2091 4.4 12 4.4C9.79086 4.4 8 6.19086 8 8.4C8 10.6091 9.79086 12.4 12 12.4ZM19 19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V18C5 15.8 9.2 14 12 14C14.8 14 19 15.8 19 18V19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg> */}
                <img src={Act3} className="z-50" />
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <h2 className="text-white text-2xl font-medium mb-4">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`bg-gradient-to-br ${achievement.color} bg-opacity-10 border ${achievement.border} rounded-lg p-4 relative overflow-hidden`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{achievement.icon}</span>
                <span
                  className={`text-${
                    achievement.color.split("-")[1]
                  }-500 font-medium`}
                >
                  {achievement.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
