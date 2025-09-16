function Builder({ text, setText, multiline, setMultiline, replaceText, setReplaceText }) {
  return (
    <div className="Builder pt-10 pb-10 flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8 space-y-6">
        
        {/* Trigger Text Input */}
        <div className="trigger-text flex flex-col">
          <label className="text-sm font-semibold text-gray-800 mb-2">
            Trigger Text
          </label>
          <input 
            type="search" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="rounded-lg bg-white/50 backdrop-blur-sm border border-white/30 px-3 py-2 text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 w-full transition"
            placeholder="Type a trigger..."
          />
        </div>

        {/* Replace Text Input */}
        <div className="replace-text flex flex-col">
          <label className="text-sm font-semibold text-gray-800 mb-2">
            Replace Text
          </label>
          {multiline ? (
            <textarea
              value={replaceText}
              onChange={(e) => setReplaceText(e.target.value)}
              rows={4}
              className="rounded-lg bg-white/50 backdrop-blur-sm border border-white/30 px-3 py-2 text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 w-full transition resize-none"
              placeholder="Enter replacement text..."
            />
          ) : (
            <input
              type="search"
              value={replaceText}
              onChange={(e) => setReplaceText(e.target.value)}
              className="rounded-lg bg-white/50 backdrop-blur-sm border border-white/30 px-3 py-2 text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 w-full transition"
              placeholder="Enter replacement text..."
            />
          )}
        </div>

        {/* Multiline Toggle */}
        <div className="multiline-toggle flex items-center justify-between">
          <label className="text-sm font-semibold text-gray-800">
            Multiline
          </label>
          <input
            type="checkbox"
            checked={multiline}
            onChange={(e) => setMultiline(e.target.checked)}
            className="w-5 h-5 accent-gray-600 rounded cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Builder;
