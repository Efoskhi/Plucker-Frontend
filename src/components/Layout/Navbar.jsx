// components/Navbar.jsx
import { useState } from "react";
import { FaHome, FaTrophy, FaChartBar, FaMoneyBill } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

import Logo from "../../assets/Logo.png";

import Home from "../../assets/Home.png";
import Cup from "../../assets/Cup.png";

import Leader from "../../assets/Leader.png";

import Avatar from "../../assets/Avatar.png";

import Dollars from "../../assets/dollars.png";
import Dollar from "../../assets/dollar.png";

import Bell from "../../assets/bell.png";
import { Link, useNavigate } from "react-router-dom";
import NotificationModal from "../Notification";
import { useAppContext } from "../../context/AppContext";
import { FaMoneyBill1Wave } from "react-icons/fa6";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useAppContext();

  return (
    <nav className="bg-black/20 fixed top-0 w-full  text-white px-2 lg:px-[7vw] py-4 flex justify-between items-center  z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Logo" className="h-8" />
      </div>

      {/* Desktop Links */}
      <div
        className="hidden md:flex items-center space-x-8 font-panchang"
        style={{ fontFamily: "panchang" }}
      >
        <NavItem
          icon={<img src={Home} className="h-8" />}
          label="Home"
          to="/Explore"
        />
        <NavItem
          icon={<img src={Leader} className="h-8" />}
          label="Leaderboard"
          to="/LeaderBoard"
        />
        <NavItem
          icon={<img src={Cup} className="h-8" />}
          label="Tournament"
          to="/TournamentHub"
        />
        {!user.planID && 
          <NavItem
            icon={<img src={Dollars} className="h-8" />}
            label="Pricing"
            to="/Pricing"
          />
        }
         <NavItem
            icon={<img src={Dollar} className="h-8" />}
            label="Wallet"
            to="/MyWallet"
          />
      </div>

      {/* Right Side - Profile */}
      <div className="flex items-center space-x-3">
        <Link className="inline-flex gap-2 items-center" to="/Profile">
          <img src={user?.profilePhoto ?? Avatar} alt="User" className="h-8 w-8 rounded-full" />
          <div className="text-left text-sm">
            <p className="font-semibold">{ user?.fullname }</p>
            <p className="text-xs text-gray-400">LEVEL { user.level }</p>
          </div>
        </Link>

        <img
          src={Bell}
          alt="Icon"
          className="h-5 w-5 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />

        <NotificationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        {/* Hamburger menu */}
        <button
          className="md:hidden ml-3"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-start px-6 py-4 space-y-4 md:hidden">
          <NavItem icon={<FaHome />} label="Home" to="/Explore" />
          <NavItem
            icon={<FaChartBar />}
            label="Leaderboard"
            to="/LeaderBoard"
          />
          <NavItem
            icon={<FaTrophy />}
            label="Tournaments"
            to="/TournamentHub"
          />

          <NavItem icon={<FaMoneyBill />} label="Pricing" to="/Pricing" />
          <NavItem icon={<FaMoneyBill1Wave />} label="Wallet" to="/MyWallet" />
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ icon, label, to }) => (
  <Link
    to={to}
    className="flex items-center space-x-2 cursor-pointer hover:text-cyan-400 transition"
  >
    {icon}
    <span className="uppercase text-lg">{label}</span>
  </Link>
);

export default Navbar;
