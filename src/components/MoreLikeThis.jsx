import React from "react";

import Pad0 from "../assets/Pad0.png";

import { BsCircleFill, BsHourglassSplit } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdOutlineCreditScore, MdOutlineMessage } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import Leaf from "../assets/Leaf.png";
import Smile from "../assets/Smile.png";

const MoreLikeThis = () => {
  return (
    <div className="py-12">
      <h1 className="inline-flex gap-2 items-center font-grotesk font-bold pb-6">
        More like this <img src={Pad0} />
      </h1>
      <div className="text-white grid lg:grid-cols-3 grid-cols-1 w-full z-50">
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
          <button className="bg-[#00DAE4] hover:bg-cyan-700 cursor-pointer  text-black font-medium text-sm py-2 px-4 rounded-md">
            Pluck in
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreLikeThis;
