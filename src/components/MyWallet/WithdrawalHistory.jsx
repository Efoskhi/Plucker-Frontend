import React from "react";
import usePayment from "../../hooks/usePayment";
import { formatDate, numberFormat } from "../../utils";
import Loading from "../Loading";


export default function WithdrawalHistory() {
  const { isLoading, payments } = usePayment();

  return (
    <div className="max-w-4xl mx-auto pt-20  text-white font-sans">
      <h2 className="text-2xl font-semibold mb-4">Payment History</h2>
      <div className="overflow-x-auto border border-teal-500 rounded-lg">
        <table className="min-w-full text-left bg-[#0F0F0F]">
          <thead className="bg-[#2C2C2C] text-white border-b border-teal-500">
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={3} className="text-center py-8 text-white">
                  <Loading /> {/* ← ensure your <Loading /> component fits dark background */}
                </td>
              </tr>
            )}

            {!isLoading && payments.map((tx, index) => {
              const statusColor =
                tx.status === 'success'
                  ? 'text-green-500 bg-green-500'
                  : tx.status === 'failed'
                  ? 'text-red-500 bg-red-500'
                  : 'text-yellow-400 bg-yellow-400';

              const iconPath =
                tx.status === 'success' ? (
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm-1 6a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
                    clipRule="evenodd"
                  />
                );
                
              return (
                <tr key={index} className="border-b border-teal-800">
                  <td className="px-4 py-2">{formatDate(tx.createdAt)}</td>
                  <td className="px-4 py-2 text-green-500">+₦{numberFormat(tx.amount)}</td>
                  <td className="px-4 py-2">
                    <span className={`inline-flex items-center space-x-1 text-green-500 ${statusColor.split(' ')[0]}`}>
                      <span className={`w-4 h-4 ${statusColor.split(' ')[1]} rounded-full flex items-center justify-center`}>
                        <svg
                          className="w-3 h-3 text-black"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          {iconPath}
                        </svg>
                      </span>
                      <span>{tx.status}</span>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

      </div>
    </div>
  );
}
