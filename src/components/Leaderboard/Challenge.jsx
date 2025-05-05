// Challenge.tsx
import React from "react";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const players = [
  { id: 1, name: "@MejiSharpGuy", score: 5, seed: "₦500", payout: "₦10,000" },
  { id: 2, name: "@QuizBabe", score: 4, seed: "₦500", payout: "₦10,000" },
  { id: 3, name: "@StreetWiz", score: 3, seed: "₦500", payout: "₦10,000" },
  { id: 4, name: "@GidiGuru", score: 5, seed: "₦2,500", payout: "₦25,000" },
  { id: 5, name: "@StreetWiz", score: 3, seed: "₦25,000", payout: "₦25,000" },
  { id: 6, name: "@PluckQueen", score: 4, seed: "₦20,500", payout: "₦20,500" },
  { id: 7, name: "@TacticMaster", score: 3, seed: "₦8,000", payout: "₦8,000" },
  { id: 8, name: "@WahalaNoDey", score: 4, seed: "₦5,500", payout: "₦6,500" },
  { id: 9, name: "@SharpShooter", score: 5, seed: "₦2,000", payout: "₦2,000" },
];

const getStars = (count) => {
  return (
    <div className="flex items-center space-x-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) =>
        i < count ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
      )}
    </div>
  );
};

const Challenge = () => {
  return (
    <div className="overflow-auto whitespace-nowrap  bg-[#0F0F0F] text-sm border border-cyan-400  shadow-2xl  rounded-md shadow-[#00DAE4]">
      <table className="min-w-full  text-white  rounded-lg">
        <thead className="bg-white/10 ">
          <tr className="text-left border-b border-gray-700">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">👤 Player</th>
            <th className="px-4 py-2">🧠 Best Answer Score</th>
            <th className="px-4 py-2">💰 Seed</th>
            <th className="px-4 py-2">💵 Payout</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={player.id} className="border-b border-gray-800 px-2">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{player.name}</td>
              <td className="px-4 py-2">{getStars(player.score)}</td>
              <td className="px-4 py-2">{player.seed}</td>
              <td className="px-4 py-2">{player.payout}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Challenge;
