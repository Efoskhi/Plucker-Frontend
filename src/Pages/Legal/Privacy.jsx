import React from "react";

import bgStars from "../../assets/Background.png"; // Adjust the path as needed

import Banner from "../../assets/Banner5.png"; // Replace with your actual logo

const Privacy = () => {
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

      <div className=" py-[35vh]">
        {/* Header */}
        <div className="flex flex-col justify-center items-center mb-8">
          <div className="inline-flex justify-center items-center mx-auto">
            <span className="text-3xl mr-3">🔒</span>
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>

          <p className="mb-6 text-center text-gray-300 pt-8">
            Your privacy is important to us. This Privacy Policy explains how
            Puck collects, uses, and protects your information.
          </p>

          <div className="mb-6 items-center text-center">
            <h2 className="text-lg font-semibold mb-3 text-center">
              Information we collect:
            </h2>
            <div className="flex flex-col items-center space-y-2 text-gray-300 text-center">
              <p className="flex items-center text-center">Email address</p>
              <p className="flex items-center">Username and profile info</p>
              <p className="flex items-center">Gameplay statistics</p>
              <p className="flex items-center">Wallet transactions</p>
            </div>
          </div>

          <div className="mb-6 items-center text-center">
            <h2 className="text-lg font-semibold mb-3 text-center">
              How We Use Your Information:
            </h2>
            <div className="flex flex-col items-center space-y-2 text-gray-300 text-center">
              <p className="flex items-center text-center">
                To operate and improve the platform
              </p>
              <p className="flex items-center">
                To process transactions and payouts
              </p>
              <p className="flex items-center">
                To communicate updates, promotions, and support
              </p>
            </div>
          </div>

          <div className="mb-6 text-gray-300">
            <p className="mb-2">
              We do not sell your information. Data may be shared with
              third-party partners only for necessary service delivery.
            </p>
          </div>

          <div className="mb-6 text-gray-300">
            <p className="mb-2">
              You can request access, updates, or deletion of your personal
              information anytime.
            </p>
          </div>

          <div className="text-center text-gray-300 text-sm">
            <p className="mb-4">
              We use industry-standard encryption and security measures to
              protect your data.
            </p>
            <p>
              If you have any privacy concerns, please reach out:{" "}
              <a
                href="mailto:privacy@puckgames.com"
                className="text-blue-400 hover:text-blue-300"
              >
                privacy@puckgames.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
