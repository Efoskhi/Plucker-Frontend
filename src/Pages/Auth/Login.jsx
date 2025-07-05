import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import Pad from "../../assets/Pad.png";

import Logo from "../../assets/Logo.png";

import Google from "../../assets/Google.png";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { isLoading, inputs, handleInput, handleLogin, handleGoogleLogin } = useAuth();

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
                <span role="img" aria-label="boom">
                  💥
                </span>{" "}
                Welcome back, Plucker!
                <br />
                Let the games begin.
              </h1>
            </div>

            <button 
              className="w-full bg-[#1A1A1A] text-white text-xs py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-200 transition"
              onClick={handleGoogleLogin}
            >
              <img src={Google} alt="Google" className="h-5 w-5" />
              <span>Log in with Google</span>
            </button>

            <div className="flex items-center justify-center text-[#2C2C2C]">
              <hr className="flex-grow border-[#2C2C2C]" />
              <span className="px-4">OR</span>
              <hr className="flex-grow border-[#2C2C2C]" />
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-xs mb-1">Email address</label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-transparent border border-[#2C2C2C] rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#00DAE4]"
                    onChange={e => handleInput('login.email', e.target.value)}
                    value={inputs.login.email}
                  />
                  <span className="absolute right-3 top-2.5 text-gray-400">
                    <CiMail />
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Your password here"
                    className="w-full bg-transparent border border-[#2C2C2C] rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#00DAE4]"
                    onChange={e => handleInput('login.password', e.target.value)}
                    value={inputs.login.password}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-2.5 text-gray-400 focus:outline-none"
                  >
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </button>
                </div>
                <div className="text-right mt-1">
                  <a
                    href="#"
                    className="text-[#00DAE4] text-xs hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>

              <button 
                className="w-full mt-6 bg-[#00DAE4] hover:bg-cyan-700 text-black py-2 rounded-md font-semibold  transition"
                onClick={handleLogin}
              >
                {isLoading ? <Loading/> : 'Log in'}
              </button>
            </form>

            <div className="text-center text-sm mt-4 text-gray-400">
              Don’t have an account?{" "}
              <Link to="/Signup" className="text-[#00DAE4] hover:underline">
                Sign up
              </Link>
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

export default Login;
