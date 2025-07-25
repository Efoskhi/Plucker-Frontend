import React, { useState, useRef } from "react";
import useProfile from "../../hooks/useProfile";
import Loading from "../../components/Loading";
import { useAppContext } from "../../context/AppContext";
import UpdateProfileModal from "./UpdateProfileModal";
import DeleteAccountModal from "./DeleteAccountModal";

import { FiEdit2, FiTrash2 } from "react-icons/fi";
import useBank from "../../hooks/useBank";

export default function AccountSettings() {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState("");
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

  const {
    isLoading,
    inputs,
    handleInput,
    handleUpdateProfile,
    handleDeleteAccount,
    handleUpdateBankAccount,
    handleUpdateProfilePhoto,
  } = useProfile();
  const { user } = useAppContext();
  const { banks } = useBank();

  const openProfileModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const [image, setImage] = useState(null);
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleInput('profilePhoto', file)
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDelete = () => {
    setImage(null);
    handleInput('profilePhoto', '')
    inputRef.current.value = "";
  };

  const triggerInput = () => {
    inputRef.current.click();
  };


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
          <div className="relative w-32 h-32 mx-auto">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
              <img
                src={image || user.profilePhoto || "/Profile.jpeg"} // fallback image
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Upload Icon */}
            <button
              onClick={triggerInput}
              className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg hover:bg-blue-100"
            >
              <FiEdit2 className="text-blue-600 text-lg" />
            </button>

            {/* Delete Icon */}
            {image && (
              <button
                onClick={handleDelete}
                className="absolute top-0 right-0 bg-white p-2 rounded-full shadow-lg hover:bg-red-100"
              >
                <FiTrash2 className="text-red-600 text-lg" />
              </button>
            )}

            {/* Hidden file input */}
            <input
              type="file"
              ref={inputRef}
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <button
              onClick={handleUpdateProfilePhoto}
              className="bg-[#0F0F0F] hover:bg-gray-700 text-white text-xs py-2 px-4 rounded transition w-full my-2"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <Loading /> : "Update Photo"}
            </button>
          </div>

          <div className="mb-6 mt-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-white text-lg">Username</h2>
              <button
                onClick={() => openProfileModal("username")}
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
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
              <button
                onClick={() => openProfileModal("email")}
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
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
              <button
                onClick={() => openProfileModal("phoneNumber")}
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                Change
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              Your phone number is {user.phoneNumber}
            </p>
          </div>

          <div className="my-3">
            <p className="text-white text-lg mb-4">Bank Details</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-gray-500 text-sm mb-2">Bank Name</p>
                <select
                  value={inputs.bankID}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
                  required
                  onChange={e => handleInput('bankID', e.target.value)}
                >
                  <option value="" selected disabled>Select Bank</option>
                  {banks.map((item, key) => (
                    <option value={item.id} key={key}>{item.bankName}</option>
                  ))}
                </select>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-2">
                  Bank Account Number
                </p>
                <input
                  value={inputs.accountNumber}
                  type="tel"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
                  placeholder="000 0000 000"
                  required
                  onChange={e => handleInput('accountNumber', e.target.value)}
                />
              </div>
              {!!user.bankAccount?.accountName && 
                <div>
                  <p className="text-gray-500 text-sm mb-2">
                    Account Name
                  </p>
                  <input
                    value={user.bankAccount?.accountName}
                    type="text"
                    disabled
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
                  />
                </div>
              }
            </div>
            <button
              onClick={handleUpdateBankAccount}
              className="bg-[#0F0F0F] hover:bg-gray-700 text-white text-xs py-2 px-4 rounded transition"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <Loading /> : "Update Bank Account"}
            </button>
          </div>

          {/* Password Section */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdateProfile();
            }}
          >
            <div className="mb-6">
              <h2 className="text-white text-lg mb-4">Password</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                {user.hasSetPassword && (
                  <div>
                    <p className="text-gray-500 text-sm mb-2">
                      Current password
                    </p>
                    <input
                      type="password"
                      onChange={(e) =>
                        handleInput("currentPassword", e.target.value)
                      }
                      className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
                      placeholder="********"
                      value={inputs.currentPassword}
                      required
                    />
                  </div>
                )}

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
                    onChange={(e) =>
                      handleInput("confirmPassword", e.target.value)
                    }
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
                {isLoading ? <Loading /> : "Save Password"}
              </button>
            </div>
          </form>

          {/* Delete Account Section */}
          <div className="pt-4 border-t border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-white text-lg">Delete account</h2>
              <button
                onClick={() => setShowDeleteModal(true)}
                className="text-red-500 hover:text-red-400 transition"
              >
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
