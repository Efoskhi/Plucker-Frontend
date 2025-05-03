import React, { useState } from "react";

import { BsCircleFill, BsHourglassSplit } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdOutlineCreditScore, MdOutlineMessage } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import Leaf from "../../assets/Leaf.png";
import Smile from "../../assets/Smile.png";
import { useNavigate } from "react-router-dom";
import SubmissionDetailsModal from "./SubmissionDetailsModal";

const Card = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-[#1c1c1c] rounded-lg overflow-hidden p-4 text-white">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-black px-3 py-0.5 text-xs rounded flex items-center gap-1">
          <span>Answer</span>
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
      <div className="items-center inline-flex gap-3 mb-6">
        <div className="mt-1">
          <img src={Smile} />
        </div>
        <div className="text-sm text-gray-400">
          🔹 Submitted answer:{" "}
          <span className="font-bold text-[#ffd95a]">"Eko Hustle City"</span>
        </div>
      </div>

      {/* Challenge Details */}
      <div className="flex items-center justify-between text-xs text-[#cccccc] mb-4">
        <div className="flex items-center gap-1">
          <FaMoneyBill1Wave className="text-gray-400" />
          <span>₦500</span>
          <span>•</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <MdOutlineCreditScore className="text-gray-400" />
            <span>Prize Pool; 10,000</span>
          </div>

          <div className="flex items-center gap-1">
            <BsHourglassSplit className="text-gray-400" />
            <span>Pending Review</span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={() => setShowModal(true)}
        className=" border border-[#00DAE4] hover:bg-cyan-700 cursor-pointer  text-white font-medium text-sm py-2 px-4 rounded-md"
      >
        View Details
      </button>

      <SubmissionDetailsModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Card;
