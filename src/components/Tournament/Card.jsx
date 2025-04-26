import React, { useState } from "react";

import { BsCircleFill, BsHourglassSplit } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdOutlineCreditScore, MdOutlineMessage } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import Leaf from "../../assets/Leaf.png";

import Smile from "../../assets/Smile.png";
import { IoMdClose } from "react-icons/io";

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#1c1c1c] rounded-lg overflow-hidden p-4 text-white">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-black px-3 py-0.5 text-xs rounded flex items-center gap-1">
          <span>LIVE</span>
          <span className="text-gray-400">•</span>
          <span>Tournament</span>
        </div>
      </div>

      {/* Challenge Icon */}
      <div className="mb-3">
        <img src={Leaf} />
      </div>

      {/* Challenge Title */}
      <h2 className="text-xl font-semibold mb-4">
        "Rename Lagos based on its current vibe"
      </h2>

      {/* Instructions */}
      <div className="flex gap-3 mb-6">
        <div className="mt-1">
          {/* <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center">
             <BsCircleFill className="text-teal-500 text-[8px]" />
           </div> */}

          <img src={Smile} />
        </div>
        <div className="text-sm text-gray-400">
          Keep answers short, max 20 words. Creativity + humor gets higher
          ratings.
        </div>
      </div>

      {/* Challenge Details */}
      <div className="flex items-center justify-between text-xs text-[#cccccc] mb-4">
        <div className="flex items-center gap-1">
          <FaMoneyBill1Wave className="text-gray-400" />
          <span>₦500</span>
          <span>•</span>
          <span>Paid</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <MdOutlineCreditScore className="text-gray-400" />
            <span>10,000</span>
          </div>

          <div className="flex items-center gap-1">
            <BsHourglassSplit className="text-gray-400" />
            <span>03h 49m</span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="inline-flex gap-4">
        <button
          className="bg-[#00DAE4] hover:bg-cyan-700 cursor-pointer  text-black font-medium text-sm py-2 px-4 rounded-md"
          onClick={() => setIsOpen(true)}
        >
          Join Tournaent
        </button>

        {/* Action Button */}
        <button className=" hover:bg-cyan-700 cursor-pointer border border-[#00DAE4]  text-white font-medium text-sm py-2 px-4 rounded-md">
          View Submissions
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-[#0D0D0D] text-white rounded-lg p-6 lg:w-[60vw] w-full shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              <IoMdClose size={20} />
            </button>

            {/* Modal Content */}
            <h2 className="text-lg font-bold mb-4">📜 Tournament Rules</h2>
            <h3 className="text-2xl font-semibold mb-2">
              💡 Game: Rename Lagos — The Vibe Game
            </h3>
            <p className="text-sm my-4 text-[#988c8c]">
              💕 Objective: Submit the wittiest, most fitting nickname for Lagos
              today.
            </p>
            <img src={Smile} className="h-4" alt="" />
            <ul className="list-disc list-inside text-sm space-y-1 my-4 text-[#988c8c]">
              <li>Entries must be under 50 characters.</li>
              <li>No offensive or plagiarized content.</li>
              <li>Winners selected by Pluck team, verified for fairness.</li>
            </ul>

            {/* Confirmation Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="bg-[#00DAE4] hover:bg-cyan-700 text-black font-medium text-sm py-2 px-4 rounded-md w-full"
            >
              ✅ Got it! Let me Play
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
