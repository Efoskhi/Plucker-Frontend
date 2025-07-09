import React from "react";
import useProfile from "../../hooks/useProfile";
import Loading from "../../components/Loading";
import { useAppContext } from "../../context/AppContext";
import UpdateProfileModal from "./UpdateProfileModal";
import DeleteAccountModal from "./DeleteAccountModal";

export default function AccountSettings() {
  const [ isModalOpen, setModalOpen ] = React.useState(false);
  const [ modalType, setModalType ] = React.useState('');
  const [ showDeleteModal, setShowDeleteModal ] = React.useState(false);

  const { isLoading, inputs, handleInput, handleUpdateProfile, handleDeleteAccount } = useProfile();
  const { user } = useAppContext();

  const openProfileModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  }

  return (
    <div className="max-w-4xl mx-auto py-6 px-2 lg:px-0">
      <div className=" mx-auto">
        <h1 className="text-white text-2xl font-bold mb-6">Account Settings</h1>

        <UpdateProfileModal
          closeModal={() => setModalOpen(false)}
          handleInput={handleInput}
          inputs={inputs}
          isOpen={isModalOpen}
          modalType={modalType}
          isLoading={isLoading}
          onSubmit={handleUpdateProfile}
        />

        <DeleteAccountModal
          showDeleteModal={showDeleteModal}
          handleDeleteAccount={handleDeleteAccount}
          setShowDeleteModal={setShowDeleteModal}
          handleInput={handleInput}
          isLoading={isLoading}
        />

        <div className="bg-[#1A1A1A] rounded-lg p-6 shadow-lg">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-white text-lg">Username</h2>
              <button onClick={() => openProfileModal('username')} className="text-cyan-400 hover:text-cyan-300 transition">
                Change
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              Your username is @{user.username}
            </p>
          </div>

          {/* Email Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-white text-lg">Email address</h2>
              <button onClick={() => openProfileModal('email')} className="text-cyan-400 hover:text-cyan-300 transition">
                Change
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              Your email address is {user.email}
            </p>
          </div>

          {/* Phone Number Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-white text-lg">Phone Number</h2>
              <button onClick={() => openProfileModal('phoneNumber')} className="text-cyan-400 hover:text-cyan-300 transition">
                Change
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              Your phone number is {user.phoneNumber}
            </p>
          </div>

          {/* Password Section */}
          <form onSubmit={e => { e.preventDefault(); handleUpdateProfile() }}>
            <div className="mb-6">
              <h2 className="text-white text-lg mb-4">Password</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                {user.hasSetPassword && 
                  <div>
                    <p className="text-gray-500 text-sm mb-2">Current password</p>
                    <input
                      type="password"
                      onChange={(e) => handleInput("currentPassword", e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
                      placeholder="********"
                      value={inputs.currentPassword}
                      required
                    />
                  </div>
                }

                <div>
                  <p className="text-gray-500 text-sm mb-2">New password</p>
                  <input
                    type="password"
                    onChange={(e) => handleInput("password", e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
                    placeholder="********"
                    value={inputs.password}
                    required
                  />
                </div>

                <div>
                  <p className="text-gray-500 text-sm mb-2">Confirm password</p>
                  <input
                    type="password"
                    onChange={(e) => handleInput("confirmPassword", e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
                    placeholder="********"
                    value={inputs.confirmPassword}
                    required
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
              <button 
                className="bg-[#0F0F0F] hover:bg-gray-700 text-white text-xs py-2 px-4 rounded transition"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <Loading/> : 'Save Password'}
              </button>
            </div>
          </form>

          {/* Delete Account Section */}
          <div className="pt-4 border-t border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-white text-lg">Delete account</h2>
              <button onClick={() => setShowDeleteModal(true)} className="text-red-500 hover:text-red-400 transition">
                Delete account
              </button>
            </div>
            <p className="text-gray-500 text-sm max-w-md">
              Would you like to delete your account?
              <br />
              Deleting your account will remove all the content associated with
              it including funds you have gained over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
