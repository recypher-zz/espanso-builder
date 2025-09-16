import { replace } from "react-router-dom";

function TriggerCard({ triggerText, replaceText, onOpenModal }) {
    return (
        <div className="TriggerCard">
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    onOpenModal();
                }}
                className="
                    block max-w-sm p-6
                    bg-white/30 backdrop-blur-md
                    border border-white/20
                    rounded-2xl shadow-lg
                    hover:bg-white/40 hover:shadow-xl
                    transition-all duration-300 ease-in-out
                    "
                >

                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 text-center drop-shadow-sm">
                    {triggerText}
                </h5>
            </a>
        </div>
    );
}

export default TriggerCard;
