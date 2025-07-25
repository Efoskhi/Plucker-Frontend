import React, { useState } from "react";
import Smile from "../../assets/Smile.png";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import useWithdrawal from "../../hooks/useWithdrawal";
import Loading from "../Loading";

export default function WithdrawFunds() {
  const [paymentMethod, setPaymentMethod] = useState(null);

  const { isLoading, amount, setAmount, handleCreateWithdrawal } = useWithdrawal();

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
                  checked={true}
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
        <button 
          onClick={handleCreateWithdrawal}
          className="flex-1 bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-2 rounded-md"
        >
          {isLoading ? <Loading/> : '🚀 Submit Withdrawal Request'}
        </button>
      </div>
    </div>
  );
}
