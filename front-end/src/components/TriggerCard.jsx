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
                className="block p-6 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg hover:bg-white/30 transition"
                >

                <h5 className="text-white font-semibold text-center">
                    {triggerText}
                </h5>
            </a>
        </div>
    );
}

export default TriggerCard;
