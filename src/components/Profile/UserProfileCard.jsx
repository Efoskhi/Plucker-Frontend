import React from "react";
import Profile from "../../assets/Profile.webp";

export default function UserProfileCard() {
  return (
    <div className="max-w-4xl mx-auto lg:px-0 px-6">
      <div className="bg-[#1A1A1A] rounded-lg p-4 border border-[#0c474a] relative overflow-hidden">
        {/* Blue glow effect at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#9747ff] shadow-[0_0_10px_5px_rgba(59,130,246,0.5)]"></div>

        <div className="flex items-center">
          {/* Profile Image */}
          <div className="relative mr-4">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-yellow-500">
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* User Info */}
          <div className="text-white">
            <div className="mb-1">
              <span className="text-gray-400 text-sm">Username: </span>
              <span className="font-medium">@NaijaSharpGuy</span>
            </div>

            <div className="flex items-center mb-1">
              <span className="text-gray-400 text-sm mr-1">Level: </span>
              <span className="font-medium">2</span>
            </div>

            <div className="flex items-center mb-1">
              <span className="text-gray-400 text-sm mr-1">Verified: </span>
              <span className="text-green-500 text-lg">✓</span>
            </div>

            <div className="mt-2">
              <button className="flex items-center text-sm  border bg-[#2C2C2C] border-gray-600 rounded px-3 py-1 hover:bg-gray-800 transition-colors">
                <span>Edit Profile Settings</span>
                <span className="ml-1">🔧</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
