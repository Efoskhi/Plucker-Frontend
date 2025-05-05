import { useState } from "react";
import { FaTrophy, FaMoneyBillWave, FaClock, FaCalendar } from "react-icons/fa";
import Dog1 from "../../assets/Dog1.png";

import Paint1 from "../../assets/Paint1.png";

import Paint2 from "../../assets/Paint2.png";
import Dog2 from "../../assets/Dog2.png";

import Smile from "../../assets/Smile.png";

import Success from "../../assets/Success.gif";
import { Link } from "react-router-dom";

export default function SuccessfulSubmission() {
  const [agree, setAgree] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6 relative">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold flex items-center justify-center gap-2 pt-12">
          <FaTrophy className="text-yellow-400" /> Tournament Submission
        </h1>
      </div>

      <img
        src={Dog1}
        className="bottom-0 absolute left-0 h-[500px] z-10"
        alt=""
      />

      <img
        src={Paint1}
        className="bottom-0 absolute left-0 h-[900px] -z-0"
        alt=""
      />

      <img
        src={Dog2}
        className="bottom-0 absolute right-0 h-[500px] z-10"
        alt=""
      />
      <img
        src={Paint2}
        className="bottom-0 absolute right-0 h-[900px] -z-0"
        alt=""
      />
      {/* Tournament Card */}
      <div className="bg-[#0D0D0D] border-4 border-[#00dae4] rounded-lg p-6 w-full max-w-3xl shadow-lg relative z-30 p">
        {/* Tournament Title */}

        <img
          src={Success}
          className="mx-auto absolute -top-7 inset-0 h-52 "
          alt=""
        />
        <div className="mb-2 text-center pt-32">
          <h2 className="text-lg font-semibold">
            🎉 Your answer has been submitted
          </h2>
        </div>

        {/* Game Info */}
        <div className="mb-6 text-center">
          <div className="text-md inline-flex gap-2 text-[#988c8c]  mb-2">
            <img src={Smile} /> Submission success
          </div>
          <div className="space-y-2 text-sm text-center text-white">
            <h2 className="text-lg font-semibold">
              💡 Entry: "ShaMaPa - Sharp Man Pass All"
            </h2>
            <div className="inline-flex items-center gap-4 text-[#988c8c]">
              <div className="flex items-center justify-center gap-2 text-center">
                <FaMoneyBillWave className="text-green-400" /> Seed: ₦500
              </div>
              <div className="flex items-center justify-center gap-2">
                🥇 Potential Payout: ₦10,000
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              <FaCalendar className="text-purple-400" /> Tournament: Street
              Slang Showdown - Gen Z Edition
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaClock className="text-purple-400" /> Results Announced: April
              15, 2025
            </div>
          </div>
        </div>

        {/* Rules Note */}
        <p className="text-xs text-gray-400 mb-6 text-center">
          🏆 You'll receive a notification if you win!
        </p>

        {/* Confirm Button */}

        <div className="inline-flex items-center gap-8 w-full">
          <Link className="w-full" to="/TournamentHub">
            <button className="w-full py-2 rounded-md text-black bg-[#00DAE4] hover:bg-cyan-700 font-semibold ">
              ✅Back to Tournamet
            </button>{" "}
          </Link>
          <Link className="w-full" to="/Submissions">
            <button className="w-full py-2 rounded-md text-white bg-transparent border hover:bg-cyan-700 font-semibold ">
              View My Entries
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
