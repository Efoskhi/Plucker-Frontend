import { useState } from "react";
import { FaLock, FaEnvelope, FaPhone, FaTrash } from "react-icons/fa";

export default function AccountSettings() {
  const [email, setEmail] = useState("naijasharpguy@email.com");
  const [phoneNumber, setPhoneNumber] = useState("+234 812 345 6789");
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  return (
    <div className="max-w-4xl mx-auto py-6 lg:px-0 px-6">
      <div className=" mx-auto">
        <h1 className="text-white text-2xl font-bold mb-6">Account Settings</h1>

        <div className="bg-[#1A1A1A] rounded-lg p-6 shadow-lg">
          {/* Email Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-white text-lg">Email address</h2>
              <button className="text-cyan-400 hover:text-cyan-300 transition">
                Change
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              Your email address is {email}
            </p>
          </div>

          {/* Phone Number Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-white text-lg">Phone Number</h2>
              <button className="text-cyan-400 hover:text-cyan-300 transition">
                Change
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              Your phone number is {phoneNumber}
            </p>
          </div>

          {/* Password Section */}
          <div className="mb-6">
            <h2 className="text-white text-lg mb-4">Password</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-gray-500 text-sm mb-2">New password</p>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
                  placeholder="********"
                />
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-2">Current password</p>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
                  placeholder="********"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-500 text-sm">
                Can't remember your current password?
                <button className="text-cyan-400 hover:text-cyan-300 ml-1">
                  Reset your password
                </button>
              </p>
            </div>
            <button className="bg-[#0F0F0F] hover:bg-gray-700 text-white text-xs py-2 px-4 rounded transition">
              Save Password
            </button>
          </div>

          {/* Delete Account Section */}
          <div className="pt-4 border-t border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-white text-lg">Delete account</h2>
              <button className="text-red-500 hover:text-red-400 transition">
                Delete account
              </button>
            </div>
            <p className="text-gray-500 text-sm max-w-md">
              Would you like to delete your account?
              <br />
              Deleting your account will remove all the content associated with
              it including funds you have garnered over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
