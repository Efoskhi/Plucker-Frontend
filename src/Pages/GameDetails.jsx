import bgStars from "../assets/Background.png"; // Adjust the path as needed

import Pad2 from "../assets/Pad2.png"; // Replace with your actual logo

import Pad1 from "../assets/Pad3.png";

import Pad0 from "../assets/Pad0.png";

import { IoClose } from "react-icons/io5";
import React, { useState } from "react";

import { BsHourglassSplit } from "react-icons/bs";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdOutlineCreditScore, MdOutlineMessage } from "react-icons/md";
import Leaf from "../assets/Leaf.png";
import Smile from "../assets/Smile.png";
import MoreLikeThis from "../components/MoreLikeThis";
import AnswerInputModal from "../components/AnswerInputModal";

const GameDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center  text-white px-6 relative z-0"
      style={{ backgroundImage: `url(${bgStars})` }}
    >
      <img src={Pad2} className="absolute right-0 -z-10 top-0" />

      <img src={Pad1} className="absolute left-0 -z-10 bottom-0 " />
      <div className=" space-y-6  h-full w-full z-20 py-20">
        <h1 className="inline-flex gap-2 items-center font-grotesk font-bold">
          About Game <img src={Pad0} />
        </h1>

        <div className="bg-[#1c1c1c] rounded-lg overflow-hidden p-4 text-white border-cyan-600  border shadow-2xl shadow-[#00DAE41F]">
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
          <div className=" gap-3 mb-6 inline-flex items-center">
            <div className="mt-1 ">
              <img src={Smile} />
            </div>
            <div className="text-sm text-gray-400">
              Keep answers short, max 20 words. Creativity + humor gets higher
              ratings.
            </div>
          </div>

          {/* Challenge Details */}
          <div className="flex items-center justify-start gap-8 text-1xl  text-[#cccccc] mb-4">
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
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#00DAE4] hover:bg-cyan-700 cursor-pointer  text-black font-medium text-sm py-2 px-4 rounded-md"
          >
            Type Your Answer
          </button>
          {/* Modal Overlay */}
          {isOpen && <AnswerInputModal setIsOpen={setIsOpen} />}
        </div>

        <MoreLikeThis />
      </div>
    </div>
  );
};

export default GameDetails;
