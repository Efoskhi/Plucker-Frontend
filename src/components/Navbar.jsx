// components/Navbar.jsx
import { useState } from "react";
import { FaHome, FaTrophy, FaChartBar } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

import Logo from "../assets/Logo.png";

import Home from "../assets/Home.png";
import Cup from "../assets/Cup.png";

import Leader from "../assets/Leader.png";

import Avatar from "../assets/Avatar.png";

import Dollar from "../assets/Dollars.png";

import Bell from "../assets/Bell.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black/20 fixed top-0 w-full  text-white px-6 py-4 flex justify-between items-center  z-50">
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
          to="/"
        />
        <NavItem
          icon={<img src={Leader} className="h-8" />}
          label="Leaderboard"
          to="/LeaderBoard"
        />
        <NavItem
          icon={<img src={Cup} className="h-8" />}
          label="Tournaments"
          to="/Tournaments"
        />
        <NavItem
          icon={<img src={Dollar} className="h-8" />}
          label="Pricing"
          to="/Pricing"
        />
      </div>

      {/* Right Side - Profile */}
      <div className="flex items-center space-x-3">
        <img src={Avatar} alt="User" className="h-8 w-8 rounded-full" />
        <div className="text-left text-sm">
          <p className="font-semibold">Osato Elijah</p>
          <p className="text-xs text-gray-400">LEVEL 1</p>
        </div>
        <img src={Bell} alt="Icon" className="h-5 w-5 cursor-pointer" />
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
          <NavItem icon={<FaHome />} label="Home" to="/" />
          <NavItem
            icon={<FaChartBar />}
            label="Leaderboard"
            to="/LeaderBoard"
          />
          <NavItem icon={<FaTrophy />} label="Tournaments" to="/" />
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
