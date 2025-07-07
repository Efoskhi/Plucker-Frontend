import React from "react";
import CountdownTimer from "../CountdownTimer";

const SubmissionDetailsModal = ({ isOpen, onClose, submission }) => {
  if (!isOpen) return null;

  const date = new Date(submission.createdAt);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });


  return (
    <div className="fixed inset-0 z-50 flex  items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#0D0D0D] text-white p-6  max-w-6xl text-center rounded-xl shadow-lg animate-fadeIn">
        <div className="flex justify-between items-center mb-4">
          <p></p>
          <button onClick={onClose} className="text-white text-2xl">
            &times;
          </button>
        </div>

        <h2 className="text-xl font-semibold">📝 Question</h2>
        <p className="mb-4">“{submission.game.title}”</p>

        <p className="mb-2">
          📅 <strong>Submitted On:</strong>
          <br />
         {`${formattedDate} at ${formattedTime}`}
        </p>
        <p className="mb-2">
          ✍️ <strong>Your Answer:</strong>
          <br />
          “{submission.submittedAnswer}”
        </p>
        <p className="mb-2">
          💎 <strong>Game Type:</strong>
          <br />
          Paid Challenge (₦{submission.entryFee} seed — Payout: ₦{submission.reward})
        </p>
        <p className="mb-2">
          ✅ <strong>Status:</strong> Submitted & Locked ✅
        </p>
        {submission.game.isTournament && 
          <p className="mb-2">
            🕐 <strong>Time Left to Game End:</strong> <CountdownTimer endingAt={submission.game.endingAt} /> remaining
          </p>
        }
        <p className="mb-4">
          📩 <strong>Result Notification:</strong>
          <br />
          You’ll receive an update via Notification & Email when results are
          out.
        </p>

        <div className="flex flex-col gap-2">
          <button
            onClick={onClose}
            className="bg-[#00DAE4] hover:bg-cyan-600 py-2 text-black rounded-md text-sm font-medium"
          >
            Back to Games
          </button>
          <button className="bg-[#1a1a1a] text-gray-300 hover:bg-gray-700 py-2 rounded-md text-sm">
            Go to Tournaments
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmissionDetailsModal;
