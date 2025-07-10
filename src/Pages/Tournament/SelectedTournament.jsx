import React, { useState } from "react";
import { FaTrophy, FaMoneyBillWave, FaClock } from "react-icons/fa";
import Dog1 from "../../assets/Dog1.png";

import Paint1 from "../../assets/Paint1.png";

import Paint2 from "../../assets/Paint2.png";
import Dog2 from "../../assets/Dog2.png";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import Loading from "../../components/Loading";
import CountdownTimer from "../../components/CountdownTimer";
import useGamePlay from "../../hooks/useGamePlay";
import { numberFormat } from "../../utils";

export default function SelectedTournament() {
  const [agree, setAgree] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);

  const navigate = useNavigate();

  const { currentGameDetails, user, setCurrentGameDetails } = useAppContext();
  const { handlePlayGame, setAnswer, answer } = useGamePlay();

  const playGame = async () => {
    try {
      setIsLoading(true);
      await handlePlayGame();
      setCurrentGameDetails(prev => ({
        ...prev,
        hasPlayedGame: true,
        submittedAnswer: answer,
      }))
      navigate('/SuccessfulSubmission');

    } catch(error) {
      // console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    if (!currentGameDetails || !currentGameDetails.isTournament) {
      navigate('/TournamentHub');
    }
  }, [currentGameDetails, navigate]);

  if (!currentGameDetails) {
    return <Loading/>;
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6 relative">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold flex items-center justify-center gap-2 pt-12">
          <FaTrophy className="text-yellow-400" /> Tournament Hub
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
      <div className="bg-[#0D0D0D] border-4 border-[#00dae4] rounded-lg p-6 w-full max-w-3xl shadow-lg relative z-30">
        {/* Tournament Title */}
        <div className="mb-4 text-center">
          <h2 className="text-lg font-semibold">
            🎮 Tournament: {currentGameDetails.title}
          </h2>
        </div>

        {/* Game Info */}
        <div className="mb-6 text-center">
          <h3 className="text-md font-bold mb-2">
            💡 {currentGameDetails.description}
          </h3>
          <div className="space-y-2 text-sm text-center text-[#988c8c]">
            <div className="flex items-center justify-center gap-2 text-center">
              <FaMoneyBillWave className="text-green-400" /> Entry Fee: ₦{numberFormat(currentGameDetails.entryFee)}
            </div>
            <div className="flex items-center justify-center gap-2">
              🥇 Prize Pool: ₦{numberFormat(currentGameDetails.reward)}
            </div>
            {/* <div className="flex items-center justify-center gap-2">
              <FaClock className="text-purple-400" /> Ends In: <CountdownTimer endingAt={currentGameDetails.endingAt} />
            </div> */}
          </div>
        </div>

        {/* Rules Note */}
        <p className="text-xs text-gray-400 mb-6 text-center">
          📋 Pluck's Note: "Offensive entries will be disqualified. Be
          creative!"
        </p>

        {/* Upload or Text Input */}
        <div className="mb-2">
          <textarea
            className="w-full p-3 rounded-md bg-black border border-gray-700 text-sm"
            placeholder="Type your answer here..."
            rows="4"
            onChange={e => setAnswer(e.target.value)}
          ></textarea>
        </div>

        {/* Agreement Checkbox */}

        <p className="text-xs text-yellow-400 mb-4">
          ⚠️ Only one submission allowed. Maximum: 20 words. Once submitted, no
          edits.
        </p>

        <div className="flex items-center  justify-center mx-auto text-center gap-4 mb-6">
          <div className="flex items-center  text-xs">
            <span>✨ Confirm the Payment</span>
          </div>

          {/* Wallet Info */}
          <div className="flex items-center text-sm ">
            <div>💳 Your Wallet Balance: ₦{numberFormat(user.accountBalance, 2)}</div>
          </div>
        </div>
        {/* Confirm Button */}

        <div className="inline-flex items-center gap-8 w-full">
          <button 
            className="w-full py-2 rounded-md text-black bg-[#00DAE4] hover:bg-cyan-700 font-semibold " 
            onClick={playGame}
          >
            {isLoading ? <Loading/> : '✅ Confirm & Submit'}
          </button>{" "}

          <button 
            onClick={() => navigate(-1)}
            className="w-full py-2 rounded-md text-white bg-transparent border hover:bg-cyan-700 font-semibold "
          >
            ❌ Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
