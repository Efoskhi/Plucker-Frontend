import { useState } from "react";
import { FaTrophy, FaMoneyBillWave, FaClock, FaCalendar } from "react-icons/fa";
import Dog1 from "../../assets/Dog1.png";

import Paint1 from "../../assets/Paint1.png";

import Paint2 from "../../assets/Paint2.png";
import Dog2 from "../../assets/Dog2.png";

import Smile from "../../assets/Smile.png";

import Success from "../../assets/Success.gif";

export default function FailedSubmission() {
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
          <h2 className="text-lg font-semibold">🚫 Insufficient Balance</h2>
          <h2 className="text-lg font-semibold">
            Please top up your wallet to join this tournament
          </h2>
        </div>

        {/* Confirm Button */}

        <div className="flex  items-center gap-8 w-full">
          <button className="w-full py-2 rounded-md text-black bg-[#00DAE4] hover:bg-cyan-700 font-semibold ">
            💵Top Up Now
          </button>{" "}
          <button className="w-full py-2 rounded-md text-white bg-transparent border hover:bg-cyan-700 font-semibold ">
            ❌ Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
