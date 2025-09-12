function TriggerCard({ triggerText, replaceText, onOpenModal }) {
    return (
        <div className="TriggerCard">
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    onOpenModal();
                }}
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">

                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    {triggerText}
                </h5>
            </a>
        </div>
    );
}

export default TriggerCard;
