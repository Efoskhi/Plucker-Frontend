import React from "react";

const NotificationModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[380px] overflow-y-auto  bg-[#0D0D0D] text-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "-translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 border-b border-gray-700 flex justify-between items-center">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span role="img" aria-label="bell">
            🔔
          </span>{" "}
          Notifications
        </h2>
        <button onClick={onClose} className="text-xl">
          &times;
        </button>
      </div>

      {/* Buttons */}
      <div className="flex justify-between px-6 py-3 border-b border-gray-700 text-xs">
        <div className="flex gap-2">
          <button className="bg-[#00FF8533] px-3 py-1 text-[10px] rounded">
            Mark All as Read
          </button>
          <button className="bg-[#FF4C6D4D] px-3 py-1 text-[10px] rounded">
            Clear All
          </button>
        </div>
      </div>

      {/* Notification Items */}
      <div className="px-6 py-4 space-y-6 text-sm">
        <div className="bg-[#1A1A1A] p-4 rounded-md border border-gray-700">
          <p className="text-yellow-400 font-semibold mb-1">
            🕹️ New Game Alert!
          </p>
          <p className="text-white">
            <span className="text-green-400">
              "Rename Lagos Based on Current Vibes"
            </span>{" "}
            is now LIVE!
          </p>
          <p className="mt-2 text-gray-400 text-xs">
            🪙 ₦1000 • Potential payout: ₦10,000 • Join before 6:00 PM today.
          </p>
          <button className="mt-3 bg-[#00DAE4] px-3 py-1 rounded text-white text-xs">
            👾 View Game
          </button>
        </div>

        <div className="bg-[#1A1A1A] p-4 rounded-md border border-gray-700">
          <p className="text-green-400 font-semibold mb-1">
            💸 Withdrawal Completed
          </p>
          <p>
            Your withdrawal of ₦1,000 to GTBank (****4321) has been successfully
            processed.
          </p>
          <p className="mt-2 text-gray-400 text-xs">
            Thank you for playing with Pluck! • Yesterday, 6:15 PM
          </p>
          <button className="mt-3 bg-[#00DAE4] px-3 py-1 rounded text-white text-xs">
            👛 View Wallet
          </button>
        </div>
        <div className="bg-[#1A1A1A] p-4 rounded-md border border-gray-700">
          <p className="text-green-400 font-semibold mb-1">
            🔧 Schedule Maintenance
          </p>
          <p>
            We'll be upgrading our servers on April 28, 2025 from 1:00 AM - 3:00
            AM (WAT). Some services may be temporarily unavailable.
          </p>
          <p className="mt-2 text-gray-400 text-xs">Yesterday 9:30AM</p>
          <button className="mt-3 bg-[#00DAE4] px-3 py-1 rounded text-white text-xs">
            👛 Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
