import React from "react";

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
    <div className="mx-auto  w-full overflow-x-auto border border-[#00B8C1] rounded-lg">
      <table className="min-w-full table-auto bg-[#0F0F0F]  rounded-lg overflow-hidden text-sm text-left text-gray-400 shadow-2xl shadow-[#00DAE41F]">
        <thead className="bg-[#2C2C2C] text-gray-300">
          <tr>
            <th className="py-3 px-4 text-center">#</th>
            <th className="py-3 px-4 whitespace-nowrap">🏆 Tournament Title</th>
            <th className="py-3 px-4 whitespace-nowrap">🥇 Winner</th>
            <th className="py-3 px-4 whitespace-nowrap">💰 Prize</th>
            <th className="py-3 px-4 whitespace-nowrap">⏳ End Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {tournaments.map((tournament) => (
            <tr
              key={tournament.id}
              className="hover:bg-gray-800 transition-colors"
            >
              <td className="py-3 px-4 text-center font-medium text-gray-400">
                {tournament.rank}
              </td>
              <td className="py-3 px-4 font-medium text-gray-200">
                {tournament.title}
              </td>
              <td className="py-3 px-4 text-blue-400">{tournament.winner}</td>
              <td className="py-3 px-4 font-medium text-green-500">
                {tournament.prize}
              </td>
              <td className="py-3 px-4 text-sm">{tournament.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PastTournaments;
