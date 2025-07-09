import Loading from "../Loading";

const UpdateProfileModal = ({ isOpen, modalType, inputs, handleInput, onSubmit, closeModal, isLoading }) => {

    let label = 'Phone Number';
    let inputType = "tel";

    if(modalType === "email") {
        label = "Email";
        inputType = "email";
    }

    if(modalType === "username") {
        label = "Username";
    }

    const submitForm = (e) => {
        e.preventDefault();
        onSubmit(closeModal);
    }

    return (
        <>
            {isOpen && (
                <form onSubmit={submitForm}>
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                        <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg w-full max-w-md text-white">
                            <h3 className="text-xl font-semibold mb-4">Change { label }</h3>

                            <input
                                type={inputType}
                                placeholder={`Enter new ${label}`}
                                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 mb-4"
                                onChange={e => handleInput(modalType, e.target.value)}
                                value={inputs[modalType]}
                                required
                            />

                            <div className="flex justify-end gap-2">
                                <button
                                    onClick={closeModal}
                                    className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded bg-cyan-500 hover:bg-cyan-400 text-black"
                                >
                                    {isLoading ? <Loading/> : 'Save'}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            )}

        </>
    )
}

export default UpdateProfileModal;