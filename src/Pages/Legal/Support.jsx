import React from "react";

import bgStars from "../../assets/Background.png"; // Adjust the path as needed

import Banner from "../../assets/Banner5.png"; // Replace with your actual logo

import MailBox from "../../assets/MailBox.png"; // Replace with your actual logo

const Support = () => {
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
            <span className="text-3xl mr-3">
              <img src={MailBox} className="h-8" />
            </span>
            <h1 className="text-3xl font-bold">Contact Support</h1>
          </div>

          <p className="mb-6 text-center text-gray-300 pt-8">
            Need help? Our support team is here to assist you. Choose a category
            below and we'll respond within 24 hours.
          </p>

          {/* Support Categories */}
          <div className="space-y-1 text-sm text-center mb-8">
            <p>Support Categories;</p>
            <p>🧑‍💻 Account & Login Issues</p>
            <p>📜 Game Rules & Fair Play Questions</p>
            <p>👛 Wallet & Payment Support</p>
            <p>🏆 Tournament Issues</p>
            <p>❓ General Inquiry</p>
          </div>

          {/* Form Header */}
          <h2 className="text-xl font-semibold mb-6">
            🎮 Questions For Us? Complete Form Below!
          </h2>

          {/* Form */}
          <form className="space-y-4 text-left lg:max-w-3xl px-4 w-full ">
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                placeholder="e.g. Adedeji Ayodeji"
                className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Email Address</label>
              <input
                type="email"
                placeholder="e.g. you@email.com"
                className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Select Category</label>
              <select className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-400">
                <option className="text-black">Account & Login Issues</option>
                <option className="text-black">Game Rules & Fair Play</option>
                <option className="text-black">Wallet & Payment</option>
                <option className="text-black">Tournament Issues</option>
                <option className="text-black">General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm">Enter Message</label>
              <textarea
                placeholder="Type your message here..."
                rows="5"
                className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#00dae4] hover:bg-cyan-500 text-black font-semibold py-2 rounded-md transition"
            >
              Submit Ticket ➡️
            </button>
          </form>

          {/* Footer Note */}
          <p className="text-sm mt-6 text-center text-gray-400">
            Prefer email? Write to us directly: <br />
            <span className="text-white">support@pluckgames.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
