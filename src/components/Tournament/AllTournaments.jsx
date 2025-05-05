import React from "react";

const statuses = [
  {
    id: 1,
    status: "Ongoing",
    description: "Rename Lagos — The Vibe Game",
    seed: "₦600",
    payout: "₦10,000",
    timeLeft: "3d 14h left",
  },
  {
    id: 2,
    status: "New",
    description: "Most Creative Bribe Avoidance Story",
    seed: "₦300",
    payout: "₦5,000",
    timeLeft: "6d 8h left",
  },
  {
    id: 3,
    status: "Closing Soon",
    description: "Most Ridiculous Local Trend Story",
    seed: "₦700",
    payout: "₦5,000",
    timeLeft: "12h left",
  },
];

const getStatusIcon = (status) => {
  if (status === "Ongoing") return <span className="text-orange-500">🔥</span>;
  if (status === "New") return <span className="text-green-500">🟢</span>;
  if (status === "Closing Soon")
    return <span className="text-gray-400">🚩</span>;
};

const AllTournaments = () => {
  return (
    <div className="py-4 overflow-auto rounded-xl whitespace-nowrap ">
      <table className="w-full bg-[#0F0F0F] text-white border border-[#00B8C1] shadow-2xl shadow-[#00DAE41F] rounded-xl">
        <thead className="bg-[#2C2C2C]">
          <tr className="text-left border-b border-gray-700">
            <th className="p-3">#</th>
            <th className="p-3">🧩 Status</th>
            <th className="p-3">🧠 Best Answer Score</th>
            <th className="p-3">💰 Seed</th>
            <th className="p-3">💵 Payout</th>
            <th className="p-3">⏳ Time Left</th>
          </tr>
        </thead>
        <tbody>
          {statuses.map((item, index) => (
            <tr key={item.id} className="border-b border-gray-800">
              <td className="p-3">{index + 1}</td>
              <td className="p-3 flex items-center gap-2">
                {getStatusIcon(item.status)}
                {item.status}
              </td>
              <td className="p-3">{item.description}</td>
              <td className="p-3">{item.seed}</td>
              <td className="p-3">{item.payout}</td>
              <td className="p-3">{item.timeLeft}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTournaments;
