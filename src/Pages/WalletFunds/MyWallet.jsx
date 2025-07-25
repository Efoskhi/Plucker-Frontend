import React, { useState } from "react";

import bgStars from "../../assets/Background.png"; // Adjust the path as needed

import Faces from "../../assets/Moon.png"; // Replace with your actual logo

import Strike from "../../assets/Stars.png"; // Replace with your actual logo

import Banner from "../../assets/Banner6.png"; // Replace with your actual logo

import Dollars from "../../assets/dollars.png";

import Splash from "../../assets/Splash.png";
import TopUpWallet from "../../components/MyWallet/TopUpWallet";
import WithdrawFunds from "../../components/MyWallet/WithdrawFunds";
import { useAppContext } from "../../context/AppContext";
import { numberFormat } from "../../utils";
import PaymentHistory from "../../components/MyWallet/PaymentHistory";
import WithdrawalHistory from "../../components/MyWallet/WithdrawalHistory";

const MyWallet = () => {
  const [activeComponent, setActiveComponent] = useState(null); // null | 'topup' | 'withdraw'

  const { user } = useAppContext();

  return (
    <div
      className="min-h-screen bg-cover bg-center  text-white  relative z-0"
      style={{ backgroundImage: `url(${bgStars})` }}
    >
      <img
        src={Banner}
        alt=""
        className="absolute inset-0  flex items-center justify-center mx-auto -z-10 top-24"
      />

      <img
        src={Faces}
        alt=""
        className="absolute right-0 flex items-center justify-center mx-auto -z-10 top-[30vh]"
      />

      <img src={Strike} className="absolute left-0 -z-10 bottom-0 " />
      <div className=" space-y-6  h-full w-full z-20 py-20 lg:px-0 px-4">
        {/* Header */}
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between mx-auto lg:max-w-4xl  pt-1 items-start md:items-center gap-6">
          {/* Left: Wallet Title */}
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              💼 My Wallet
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              🟢 You must maintain a minimum balance of ₦100 to join paid games.
            </p>
          </div>

          {/* Right: Wallet Card */}
          <div className="bg-[#101010] border border-[#FFD95A] rounded-lg p-6 relative w-full max-w-sm shadow-lg">
            {/* Confetti emoji for style */}
            <div className="absolute top-2 right-2 text-xl">
              <img src={Splash} alt="" />
            </div>
            <p className="text-sm text-gray-400 mb-1">
              Current Wallet Balance:
            </p>
            <p className="text-2xl font-bold flex items-center gap-2">
              <img src={Dollars} alt="" className="h-8" /> ₦{numberFormat(user.accountBalance)}
            </p>

            <div className="flex gap-3 mt-4">
              <button
                className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-md text-sm font-semibold"
                onClick={() => setActiveComponent("topup")}
              >
                ➕ Top Up Wallet
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold"
                onClick={() => setActiveComponent("withdraw")}
              >
                ↘️ Withdraw Funds
              </button>
            </div>
          </div>
        </div>

        {/* Conditional Rendering Below */}
        <div className="mt-8 max-w-4xl mx-auto">
          {activeComponent === "topup" && <TopUpWallet />}
          {activeComponent === "withdraw" && <WithdrawFunds />}
        </div>
        {activeComponent !== "withdraw" &&<PaymentHistory />}
        {activeComponent === "withdraw" &&<WithdrawalHistory />}
      </div>
    </div>
  );
};

export default MyWallet;
