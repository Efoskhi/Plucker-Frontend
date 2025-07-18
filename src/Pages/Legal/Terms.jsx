import React from "react";

import bgStars from "../../assets/Background.png"; // Adjust the path as needed

import Banner from "../../assets/Banner5.png"; // Replace with your actual logo

const Terms = () => {
  const termItems = [
    {
      id: 1,
      emoji: "📜",
      text: "Welcome to Pluck! By using our platform, you agree to these Terms of Service. Please read carefully before participating.",
    },
    {
      id: 2,
      emoji: "🔞",
      text: "You must be at least 18 years old or meet your jurisdiction's age of majority to use Pluck.",
    },
    {
      id: 3,
      emoji: "🔐",
      text: "You are responsible for maintaining the confidentiality of your account and activities.",
    },
    {
      id: 4,
      emoji: "🎮",
      text: "Players must follow game rules and respect fair competition. Any cheating or misconduct may result in permanent ban.",
    },
    {
      id: 5,
      emoji: "💸",
      text: "Prize winnings are subject to verification. Payments are processed within 24 hours.",
    },
    {
      id: 6,
      emoji: "⚠️",
      text: "Pluck reserves the right to update these Terms at any time. Updated Terms will be posted on this page.",
    },
    {
      id: 7,
      emoji: "✉️",
      text: "For any questions regarding these Terms, please email: support@plucked.me ",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white relative z-0"
      style={{ backgroundImage: `url(${bgStars})` }}
    >
      <img
        src={Banner}
        alt=""
        className="absolute inset-0  flex items-center justify-center mx-auto -z-10 top-16"
      />

      <div className="max-w-2xl text-start items-center mx-auto py-[35vh]">
        {/* Header */}
        <div className="flex justify-center items-center mb-8">
          <span className="text-3xl mr-3">📜</span>
          <h1 className="text-3xl font-bold">Terms of Service</h1>
        </div>

        {/* Terms List */}
        <div className="space-y-6 text-start items-center">
          {termItems.map((item) => (
            <div key={item.id} className="flex items-center text-start">
              {/* <span className="text-2xl mr-3 flex-shrink-0">{item.emoji}</span> */}
              {item.id !== 7 ? (
                <p className="text-gray-300 text-start">{item.text}</p>
              ) : (
                <p className="text-gray-300 text-start">
                  {item.text.split("support@plucked.me ")[0]}
                  <a
                    href="mailto:support@plucked.me "
                    className="text-cyan-400 hover:underline"
                  >
                    support@plucked.me
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terms;
