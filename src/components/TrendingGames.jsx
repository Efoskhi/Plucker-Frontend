import React, { useEffect, useState } from "react";
import { BsCircleFill, BsHourglassSplit } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdOutlineCreditScore } from "react-icons/md";
import Leaf from "../assets/Leaf.png";
import Smile from "../assets/Smile.png";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import CountdownTimer from "./CountdownTimer";

const TrendingGames = ({ games }) => {
  const navigate = useNavigate();

  const { setCurrentGameDetails } = useAppContext();

  const handleGameDetails = (game) => {
    setCurrentGameDetails(game)
    navigate("/GameDetails");
  };

  return (
    <div className="text-white grid lg:grid-cols-3 grid-cols-1 w-full z-50 gap-5">
      {games.map((item, key) => (
        <div key={key} className="bg-[#1c1c1c] rounded-lg overflow-hidden p-4 text-white">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-black px-3 py-0.5 text-xs rounded flex items-center gap-1">
              <span>{ item.status }</span>
              {item.isTournament &&
                <>
                  <span className="text-gray-400">•</span>
                  <span>Tournament</span>
                </>
              }
            </div>
          </div>

          <div className="mb-3">
            <img src={Leaf} alt="Leaf" />
          </div>

          <h2 className="text-xl font-semibold mb-4">
            {item.title}
          </h2>

          <div className="flex gap-3 mb-6">
            <div className="mt-1">
              <img src={Smile} alt="Smile" />
            </div>
            <div className="text-sm text-gray-400">
              {item.description}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#cccccc] mb-4">
            <div className="flex items-center gap-1">
              <FaMoneyBill1Wave className="text-gray-400" />
              <span>₦{item.entryFee}</span>
              {item.hasPlayedGame && 
                <>
                  <span>•</span>
                  <span>Paid</span>
                </>
              }
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <MdOutlineCreditScore className="text-gray-400" />
                <span>{item.reward}</span>
              </div>
              {/* {item.isTournament && 
                <>
                  End:
                  <CountdownTimer endingAt={item.endingAt} />
                </>
              } */}
            </div>
          </div>

          <button
            onClick={() => handleGameDetails(item)}
            className="bg-[#00DAE4] hover:bg-cyan-700 cursor-pointer text-black font-medium text-sm py-2 px-4 rounded-md"
          >
            Pluck in
          </button>
        </div>
      ))}
    </div>
  );
};

export default TrendingGames;
