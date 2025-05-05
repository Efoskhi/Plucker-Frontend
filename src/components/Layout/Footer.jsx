import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Social1 from "../../assets/Social1.png";

import Social2 from "../../assets/Social2.png";
import Social3 from "../../assets/Social3.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-2  ">
      <div className="  grid grid-cols-1 md:grid-cols-3 gap-10  mx-auto">
        {/* Left Section */}
        <div className="space-y-4 lg:mx-auto">
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
        <div className="lg:mx-auto">
          <h2 className="font-semibold text-lg mb-4 ">Navigation</h2>
          <ul className="space-y-2 text-sm text-[#6D6D6D] cursor-pointer flex-col flex">
            <Link to="/Explore" className="hover:text-cyan-400">
              🏠 HOME
            </Link>
            <Link to="/Explore" className="hover:text-cyan-400">
              🔍 EXPLORE
            </Link>
            <Link to="/Pricing" className="hover:text-cyan-400">
              🧩 PRICING
            </Link>
            <Link to="/MyWallet" className="hover:text-cyan-400">
              👛 WALLET
            </Link>
            <Link to="/Profile" className="hover:text-cyan-400">
              👤 PROFILE
            </Link>
            <Link to="/LeaderBoard" className="hover:text-cyan-400">
              📊 LEADERBOARD
            </Link>
            <Link to="/TournamentHub" className="hover:text-cyan-400">
              🏆 TOURNAMENTS
            </Link>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="lg:mx-auto">
          <h2 className="font-semibold text-lg mb-4 ">Legal</h2>
          <ul className="space-y-2 text-sm text-[#6D6D6D] cursor-pointer flex-col flex">
            <Link to="/Terms" className="hover:text-cyan-400">
              📜 TERMS
            </Link>
            <Link to="/Privacy" className="hover:text-cyan-400">
              🔒 PRIVACY
            </Link>
            <Link to="/GameRules" className="hover:text-cyan-400">
              📕 GAME RULES
            </Link>
            <Link to="/Support" className="hover:text-cyan-400">
              📞 CONTACT
            </Link>
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
