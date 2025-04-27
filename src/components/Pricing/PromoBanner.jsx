import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Egg from "../../assets/Egg.png";

const PromoBanner = () => {
  return (
    <div className="relative  w-full overflow-hidden rounded-lg">
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full py-6">
        {/* Left Content */}
        <div className=" z-10 py-12">
          {/* Party Popper Emoji */}
          <h2 className="flex items-center text-white text-2xl md:text-3xl font-bold mb-3">
            <span className="text-3xl mr-2">🎉</span>
            Don't Miss Out!
          </h2>

          {/* Description with green dot */}
          <div className="flex items-start mb-6">
            <div className="flex-shrink-0 mt-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
            <p className="ml-2 text-gray-300 text-sm">
              Join thousands of verified Pickers today and maximize your
              winnings!
            </p>
          </div>

          {/* CTA Button */}
          <button className="flex items-center bg-[#00ff85] hover:bg-green-500 text-black font-medium py-2 px-4 rounded-md transition-colors">
            <span>Upgrade Now</span>
            <FaChevronRight className="ml-1" />
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden md:block relative z-10">
          <div className=" relative">
            {/* This would be your actual image - I'm creating a placeholder */}
            <img src={Egg} className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
