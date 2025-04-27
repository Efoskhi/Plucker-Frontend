import { useState } from "react";

const paymentOptions = [
  { id: 1, title: "Debit/Credit Card" },
  { id: 2, title: "Bank Transfer" },
  { id: 3, title: "Wallet Balance" },
];

export default function HowItWorks() {
  const [selected, setSelected] = useState("");

  return (
    <div className="min-h-full w-full text-white flex flex-col items-center justify-center py-6 space-y-6">
      <h2 className="text-3xl font-bold">How it works</h2>

      <div className="w-full  space-y-4">
        <div className="bg-zinc-900 rounded-lg p-4 space-y-4">
          <div className="text-sm text-gray-400 mb-2">
            <span className="text-blue-400">🔹</span> Pay securely via{" "}
            <span className="text-red-500">*</span>
          </div>

          {paymentOptions.map((option) => (
            <div
              key={option.id}
              className="border-b border-gray-700 last:border-none"
            >
              <button
                onClick={() => setSelected(option.id)}
                className="w-full flex items-center justify-between py-3 text-left"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={selected === option.id}
                    onChange={() => setSelected(option.id)}
                    className="accent-blue-500"
                  />
                  <span className="text-white">{option.title}</span>
                </div>
                <span className="text-gray-400">⌄</span> {/* dropdown arrow */}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 rounded-lg p-4 flex flex-col gap-2 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-green-400">🌟</span> Auto-renews monthly.
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">🌟</span> Cancel anytime — no
            hidden fees.
          </div>
        </div>
      </div>
    </div>
  );
}
