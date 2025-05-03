import { useState } from "react";
import { FaRegEyeSlash, FaRegEye, FaLongArrowAltRight } from "react-icons/fa";
import Pad from "../../assets/Pad.png";

import Logo from "../../assets/Logo.png";

import Google from "../../assets/Google.png";

import Gamepad from "../../assets/Gamepad.png";
import { CiMail, CiUser } from "react-icons/ci";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full flex h-screen bg-black">
      <div className="lg:w-1/2 w-full relative lg:px-32 px-4">
        <img
          src={Logo}
          alt="Plk Logo"
          className="h-10  mb-6  absolute mt-[2vh]"
        />
        <div className="min-h-screen flex items-center justify-center bg-black text-white ">
          <div className="w-full  space-y-6">
            <div className="text-start w-full font-semibold">
              <h1 className="text-3xl  " style={{ fontFamily: "grotesk" }}>
                <span
                  role="img"
                  aria-label="boom"
                  className="inline-flex items-center"
                >
                  <img src={Gamepad} className="h-10 mr-2" /> Ready to Pluck &
                  Win?
                </span>{" "}
                <br />
                Join the community!
              </h1>
            </div>

            <button className="w-full bg-[#1A1A1A] text-white text-xs py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-200 transition">
              <img src={Google} alt="Google" className="h-5 w-5" />
              <span>Sign up with Google</span>
            </button>

            <div className="flex items-center justify-center text-[#2C2C2C]">
              <hr className="flex-grow border-[#2C2C2C]" />
              <span className="px-4">OR</span>
              <hr className="flex-grow border-[#2C2C2C]" />
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-xs mb-1">Username</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g NaijaSharpGuy"
                    className="w-full bg-transparent border border-[#2C2C2C] rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#00DAE4]"
                  />
                  <span className="absolute right-3 top-2.5 text-gray-400">
                    <CiUser />
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs mb-1">Create Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Your password here"
                    className="w-full bg-transparent border border-[#2C2C2C] rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#00DAE4]"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-2.5 text-gray-400 focus:outline-none"
                  >
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs mb-1">Re-enter Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Your password here"
                    className="w-full bg-transparent border border-[#2C2C2C] rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#00DAE4]"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-2.5 text-gray-400 focus:outline-none"
                  >
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </button>
                </div>
              </div>

              <button className="w-full bg-[#00DAE4] hover:bg-cyan-700 items-center justify-center text-black py-2 rounded-md font-semibold  transition inline-flex gap-2 items-center">
                Create My Plicked Account <FaLongArrowAltRight />
              </button>
            </form>

            <div className="text-center text-sm mt-4 text-gray-400">
              Already have an account?{" "}
              <a href="#" className="text-[#00DAE4] hover:underline ">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 lg:flex  hidden">
        <img src={Pad} className="w-full h-full" />
      </div>
    </div>
  );
};

export default Signup;
