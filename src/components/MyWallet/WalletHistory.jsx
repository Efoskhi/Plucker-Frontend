import React from "react";

const transactions = [
  {
    date: "April 20, 2025",
    type: "Top-Up (Card)",
    amount: "+₦500",
    status: "Success",
    amountColor: "text-green-500",
  },
  {
    date: "April 19, 2025",
    type: "Game Entry",
    amount: "-₦200",
    status: "Success",
    amountColor: "text-red-500",
  },
  {
    date: "April 18, 2025",
    type: "Withdrawal",
    amount: "-₦1,000",
    status: "Success",
    amountColor: "text-red-500",
  },
  {
    date: "April 18, 2025",
    type: "Top-Up (Bank Transfer)",
    amount: "+₦1,000",
    status: "Success",
    amountColor: "text-green-500",
  },
];

export default function WalletHistory() {
  return (
    <div className="max-w-4xl mx-auto pt-20  text-white font-sans">
      <h2 className="text-2xl font-semibold mb-4">Wallet History</h2>
      <div className="overflow-x-auto border border-teal-500 rounded-lg">
        <table className="min-w-full text-left bg-[#0F0F0F]">
          <thead className="bg-[#2C2C2C] text-white border-b border-teal-500">
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Transaction</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} className="border-b border-teal-800">
                <td className="px-4 py-2">{tx.date}</td>
                <td className="px-4 py-2">{tx.type}</td>
                <td className={`px-4 py-2 ${tx.amountColor}`}>{tx.amount}</td>
                <td className="px-4 py-2">
                  <span className="inline-flex items-center space-x-1 text-green-500">
                    <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>{tx.status}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
