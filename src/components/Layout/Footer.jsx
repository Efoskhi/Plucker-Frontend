import Logo from "../../assets/Logo.png";
import Social1 from "../../assets/Social1.png";

import Social2 from "../../assets/Social2.png";
import Social3 from "../../assets/Social3.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="space-y-4">
          <img src={Logo} />
          <p className="text-[28px]">
            Fun. Fast. Fierce.
            <br />
            Win Big Daily.
          </p>
          <div className="flex space-x-4 mt-2">
            <button className="">
              <img src={Social1} className="h-8 w-8" />
            </button>
            <button className="">
              {" "}
              <img src={Social2} className="h-8 w-8" />
            </button>
            <button className="">
              {" "}
              <img src={Social3} className="h-7 w-7" />
            </button>
          </div>
        </div>

        {/* Navigation Section */}
        <div>
          <h2 className="font-semibold text-lg mb-4 ">Navigation</h2>
          <ul className="space-y-2 text-sm text-[#6D6D6D] cursor-pointer ">
            <li className="hover:text-cyan-400">🏠 HOME</li>
            <li className="hover:text-cyan-400">🔍 EXPLORE</li>
            <li className="hover:text-cyan-400">🧩 PRICING</li>
            <li className="hover:text-cyan-400">👛 WALLET</li>
            <li className="hover:text-cyan-400">👤 PROFILE</li>
            <li className="hover:text-cyan-400">📊 LEADERBOARD</li>
            <li className="hover:text-cyan-400">🏆 TOURNAMENTS</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h2 className="font-semibold text-lg mb-4 ">Legal</h2>
          <ul className="space-y-2 text-sm text-[#6D6D6D] cursor-pointer ">
            <li className="hover:text-cyan-400">📜 TERMS</li>
            <li className="hover:text-cyan-400">🔒 PRIVACY</li>
            <li className="hover:text-cyan-400">📕 GAME RULES</li>
            <li className="hover:text-cyan-400">📞 CONTACT</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-[#6D6D6D]">
        © 2025 Pluck Games Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
