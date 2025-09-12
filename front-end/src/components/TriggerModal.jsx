import Modal from "react-modal";

function TriggerModal({ isOpen, onClose, title, children }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="bg-white w-[80vw] max-w-[700px] h-[70vh] p-6 rounded-lg shadow-lg mx-auto mt-20 outline-none relative"
            overlayClassName="fixed inset-0 bg-black/20 flex justify-center items-start z-50"
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
                X
            </button>

            {title && (
                <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
            )}

            <div>{children}</div>
        </Modal>
    )
}

export default TriggerModal;