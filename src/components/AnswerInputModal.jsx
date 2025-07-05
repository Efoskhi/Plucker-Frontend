import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Loading from "../assets/Loading.gif";

import Success from "../assets/Success.gif";
import { useNavigate } from "react-router-dom";
import useGamePlay from "../hooks/useGamePlay";
import { useAppContext } from "../context/AppContext";

const AnswerInputModal = ({ setIsOpen }) => {
  const navigate = useNavigate();

  const { answer, step, handlePlayGame, setAnswer } = useGamePlay();
  const { currentGameDetails, user } = useAppContext();

  const handleGoHome = () => {
    navigate("/Explore"); // this routes to the homepage
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
        {/* Modal Box */}

        {/* Answer Form */}
        {step === "form" && (
          <div className="bg-[#1c1c1c] text-white w-[90%] max-w-md px-6 py-2  rounded-lg relative shadow-cyan-600 shadow-lg">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white hover:text-gray-400"
            >
              <IoClose size={24} />
            </button>

            <h2 className="text-lg font-semibold mb-2">Question</h2>
            <p className="text-xl font-medium mb-2">
              “{currentGameDetails.title}”
            </p>
            <p className="text-sm text-gray-400 mb-4">
              💡 {currentGameDetails.description}
            </p>

            <textarea
              onInput={e => setAnswer(e.target.value)}
              value={answer}
              rows={4}
              placeholder="type your answer here..."
              className="w-full p-3 rounded-md bg-[#111] text-white placeholder-gray-500 resize-none mb-4 outline-none"
            />

            <p className="text-xs text-yellow-400 mb-4">
              ⚠️ Only one submission allowed. Maximum: 20 words. Once submitted,
              no edits.
            </p>

            <button
              onClick={handlePlayGame}
              className="bg-[#00DAE4] mb-4 hover:bg-cyan-700 text-black font-medium text-sm py-2 px-4 rounded-md w-full"
            >
              Submit Your Answer
            </button>
          </div>
        )}

        {/* Loading Modal */}
        {step === 'loading' && (
          <div className="bg-[#000000] rounded-lg p-6 w-full max-w-sm text-center shadow-lg shadow-cyan-600">
            <img
              src={Loading} // 👈 replace with your animated face GIF
              alt="loading"
              className="mx-auto w-full h-full mb-4"
            />
            <p className="text-lg mb-2">
              Hold on while we send in your response...
            </p>
            <p className="text-green-400 text-sm">
              🟢 We're with you, {user.fullname}...
            </p>
          </div>
        )}

        {/* Success Modal */}
        {step === 'success' && (
          <div className="bg-[#000000] lg:mx-[30%] rounded-lg p-6 w-full  text-center relative shadow-xl shadow-cyan-600">
            <img
              src={Success}
              className=" mx-auto absolute top-[-20%] inset-0"
            />
            <p className="text-xl font-bold pt-32">
              🎉 Your answer has been submitted!
            </p>
            <p className="text-sm text-gray-400">🟢 Don’t close this page...</p>

            <div className="text-center text-xs pt-4">
              {/* <p className="mt-2">
                <strong>Game:</strong> Rename Lagos based on its current vibe
              </p> */}
              <p>💰 Seed: ₦{currentGameDetails.entryFee} • 🏆 Potential Payout: ₦{currentGameDetails.reward}</p>
              <p className="pt-4">
                👥 27 players and counting — you're officially in!
              </p>
              <p>
                📅 Winners will be announced:{" "}
                <span className="text-green-400">April 17th (9PM WAT)</span>
              </p>
              <p className="text-yellow-400 mt-2">
                ⚠️ Stay tuned — you’ll get a notification if you win.
              </p>
            </div>
            <div className="space-y-4 pt-8">
              <button className="bg-[#00DAE4] hover:bg-cyan-700 text-black font-medium text-sm py-2 px-4 rounded-md w-full">
                View Game Status ➜
              </button>

              <button
                onClick={handleGoHome}
                className="bg-[#1A1A1A] text-white font-medium text-sm py-2 px-4 rounded-md w-full"
              >
                Go Back to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnswerInputModal;
