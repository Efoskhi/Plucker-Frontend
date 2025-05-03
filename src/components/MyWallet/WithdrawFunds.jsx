import React, { useState } from "react";
import Smile from "../../assets/Smile.png";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function WithdrawFunds() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(null);

  const toggleMethod = (method) => {
    setPaymentMethod((prev) => (prev === method ? null : method));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 text-white font-sans space-y-6">
      {/* Amount Input */}
      <h2 className="text-2xl font-semibold mb-4">Withdraw Funds</h2>
      <div className="bg-[#1A1A1A] border border-cyan-500 rounded-md p-4">
        <label className="block text-sm mb-2">
          Enter amount <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center space-x-2 text-2xl font-mono">
          <span>₦</span>
          <input
            type="number"
            min="100"
            placeholder="____"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-[#1A1A1A] border-none outline-none text-white placeholder-gray-500 w-full"
          />
        </div>
        <p className="text-gray-400 text-xs mt-1">(Minimum top-up: ₦100)</p>
      </div>
      {/* Payment Method */}
      <div className="bg-[#1A1A1A] border border-cyan-500 rounded-md p-4 text-white font-sans">
        <label className="block text-sm mb-4">
          Choose Withdrawal Method <span className="text-red-500">*</span>
        </label>

        <div className="space-y-3">
          {/* Bank Transfer */}
          <div>
            <div
              className="inline-flex items-center justify-between w-full cursor-pointer"
              onClick={() => toggleMethod("bank")}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                  className="form-radio text-teal-500 accent-teal-500"
                />
                <span className="text-white">
                  Bank Transfer (1–2 business days)
                </span>
              </label>
              {paymentMethod === "bank" ? (
                <MdKeyboardArrowUp size={20} />
              ) : (
                <MdKeyboardArrowDown size={20} />
              )}
            </div>

            {paymentMethod === "bank" && (
              <div className="bg-[#2B2B2B] mt-3 p-3 rounded-md space-y-2 text-sm border border-gray-600">
                <div>
                  <p className="text-gray-400">Bank Name</p>
                  <input
                    className="text-white text-2xl font-semibold border-b bg-transparent outline-none"
                    placeholder="GT Bank"
                  />
                </div>
                <div>
                  <p className="text-gray-400">Account Number</p>
                  <input
                    className="text-white text-2xl font-semibold border-b bg-transparent outline-none"
                    placeholder="xxxxxxxx"
                  />
                </div>
                <div>
                  <p className="text-gray-400">Account Name</p>
                  <input
                    className="text-white text-2xl font-semibold border-b bg-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Mobile Wallet */}
          <div>
            <div
              className="inline-flex items-center justify-between w-full cursor-pointer"
              onClick={() => toggleMethod("mobile")}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mobile"
                  checked={paymentMethod === "mobile"}
                  onChange={() => setPaymentMethod("mobile")}
                  className="form-radio text-teal-500 accent-teal-500"
                />
                <span className="text-white">
                  Mobile Wallet (e.g., Paga, Opay)
                </span>
              </label>
              {paymentMethod === "mobile" ? (
                <MdKeyboardArrowUp size={20} />
              ) : (
                <MdKeyboardArrowDown size={20} />
              )}
            </div>
            {paymentMethod === "mobile" && (
              <div className="bg-[#2B2B2B] mt-3 p-3 rounded-md space-y-2 text-sm border border-gray-600">
                <div>
                  <p className="text-gray-400">Bank Name</p>
                  <input
                    className="text-white text-2xl font-semibold border-b bg-transparent outline-none"
                    placeholder="GT Bank"
                  />
                </div>
                <div>
                  <p className="text-gray-400">Account Number</p>
                  <input
                    className="text-white text-2xl font-semibold border-b bg-transparent outline-none"
                    placeholder="xxxxxxxx"
                  />
                </div>
                <div>
                  <p className="text-gray-400">Account Name</p>
                  <input
                    className="text-white text-2xl font-semibold border-b bg-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Notice */}
      <div className="bg-[#0F0F0F]  rounded-md p-4">
        <img src={Smile} className="h-5" />
        <p className="text-[#988C8C]">
          Withdrawals are processed within 24-48 hours.
          <br /> A ₦50 service fee may apply.
          <br /> By submitting, you agree to our Withdrawal Policy.
        </p>
      </div>
      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button className="flex-1 bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-2 rounded-md">
          🚀 Submit Withdrawal Request
        </button>
      </div>
    </div>
  );
}
