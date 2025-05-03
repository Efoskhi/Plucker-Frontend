import React, { useState } from "react";

export default function TopUpWallet() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("bank");

  return (
    <div className="max-w-4xl mx-auto mt-10 text-white font-sans space-y-6">
      {/* Amount Input */}

      <h2 className="text-2xl font-semibold mb-4">TopUp Your Wallet</h2>
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
      <div className="bg-[#1A1A1A] border border-cyan-500 rounded-md p-4">
        <label className="block text-sm mb-2">
          Select Payment Method <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          {[
            { id: "bank", label: "Bank Transfer" },
            { id: "card", label: "Debit Card (Visa/Mastercard/Verve)" },
            { id: "ussd", label: "USSD (Mobile Banking)" },
            { id: "paystack", label: "Paystack / Flutterwave (Recommended)" },
          ].map((method) => (
            <label
              key={method.id}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="paymentMethod"
                value={method.id}
                checked={paymentMethod === method.id}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="form-radio text-teal-500 accent-teal-500"
              />
              <span className="text-white">{method.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button className="flex-1 bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-2 rounded-md">
          🏦 Proceed to Pay
        </button>
        <button className="flex-1 border border-white text-white hover:bg-red-600 hover:text-white font-semibold py-2 rounded-md">
          ❌ Cancel Top-Up
        </button>
      </div>
    </div>
  );
}
