function TriggerCard ({ triggerText, replaceText, setText, setReplaceText }) {
    return (
        <>
            <div className='TriggerCard'>
                <a 
                    href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        setText(triggerText);
			console.log(triggerText);
                        setReplaceText(replaceText);
			console.log(replaceText);
                    }}
                    className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ triggerText }</h5>
                </a>
            </div>
        </>
    )
}

export default TriggerCard;
