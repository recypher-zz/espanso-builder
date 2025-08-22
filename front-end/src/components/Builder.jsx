function Builder({ text, setText, multiline, setMultiline, replaceText, setReplaceText }) {    return (
        <>
            <div className='Builder pt-8 pb-8 flex flex-col items-center justify-center'>
                {/* Trigger Text Input */}
                <div className='trigger-text mb-4 flex flex-1 items-center justify-center'>
                    <label className="font-bold mr-2">
                        Trigger Text - {" "}
                    </label>
                    <input 
                        type='search' 
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="TriggerText outline rounded-sm bg-slate-600 px-2 py-1 w-64"
                    />
                </div>

                {/* Replace Text Input */}
                <div className='replace-text flex flex-1 items-center justify-center'>
                     <label className="font-bold mr-2">
                        Replace Text - {" "}
                    </label>
                    {multiline ? (
                        <textarea
                            value={replaceText}
                            onChange={(e) => setReplaceText(e.target.value)}
                            rows={4}
                            cols={40}
                            className="ReplaceText flex outline rounded-sm bg-slate-600 px-2 py-1 w-64"
                        />
                    ) : (
                        <input
                            type="search"
                            value={replaceText}
                            onChange={(e) => setReplaceText(e.target.value)}
                            className="ReplaceText flex outline rounded-sm bg-slate-600 px-2 py-1 w-64"
                        />
                    )}
                </div>
                {/* Multiline Toggle */}
                <div className='multiline-toggle mb-6'>
                    <label className="font-bold mr-2">
                        Multiline: 
                    </label>
                        <input
                            type="checkbox"
                            checked={multiline}
                            onChange={(e) => setMultiline(e.target.checked)}
                            className="mr-2"
                        />
                </div>
            </div>
        </>
    );
}

export default Builder