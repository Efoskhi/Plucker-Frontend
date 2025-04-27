import { useState } from "react";

const faqData = [
  {
    question: "What happens after upgrading?",
    answer:
      "You immediately unlock unlimited games and receive your Verified badge.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel easily in your Profile Settings.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" text-white flex flex-col items-center  w-full  space-y-6">
      <h2 className="text-3xl font-bold">FAQ</h2>

      <div className="w-full lg:w-full space-y-4">
        <div className="bg-zinc-900 rounded-lg p-4 space-y-4">
          <div className="text-sm text-gray-400 mb-2">
            <span className="text-blue-400">🔹</span> Most popular questions
          </div>
          <div className="bg-[#2c2c2c] p-4 rounded-md">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-700 last:border-none"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left py-3"
                >
                  <div className="text-sm text-white">{item.question}</div>
                </button>

                {openIndex === index && (
                  <div className="text-sm text-white font-semibold p-2">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
