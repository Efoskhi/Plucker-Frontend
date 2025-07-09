import React from "react";
import Loading from "../Loading";

const DeleteAccountModal = ({ showDeleteModal, setShowDeleteModal, handleDeleteAccount, handleInput, isLoading }) => {

    const submitForm = (e) => {
        e.preventDefault();

        handleDeleteAccount(() => setShowDeleteModal(false))
    }

    React.useEffect(() => {
        if(!showDeleteModal) {
            handleInput('password', '')
        }

    }, [showDeleteModal])

    return (
        <>
            {showDeleteModal && (
                <form onSubmit={submitForm}>
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                        <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg w-full max-w-md text-white">
                            <h3 className="text-xl font-bold mb-4">Delete Account</h3>
                            <p className="text-gray-400 mb-6 text-sm">
                                Are you sure you want to permanently delete your account? This action cannot be undone.
                            </p>

                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 mb-4"
                                onChange={e => handleInput('password', e.target.value)}
                                required
                            />

                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setShowDeleteModal(false)}
                                    className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500"
                                >
                                Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded bg-red-600 hover:bg-red-500 text-white font-semibold"
                                >
                                    {isLoading ? <Loading/> : 'Delete'}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            )}

        </>
    )
}

export default DeleteAccountModal;