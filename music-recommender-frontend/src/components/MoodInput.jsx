import React from "react";
function MoodInput({ mood, setMood, detectedMood }) {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-amber-200 p-4 mt-4 w-full max-w-md mx-auto rounded-lg text-white">
      <textarea
        name="mood"
        id="mood"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        placeholder="Enter your mood"
        className="border-2 border-gray-300 p-4 rounded w-full focus:outline-none focus:border-green-500 text-white"
        minLength={5}
      />
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mt-4">
        <button
          className=" hover:scale-110 transition-transform p-4 rounded-full text-2xl"
          onClick={() => setMood((prev) => prev + " 😭")}
        >
          😭
        </button>
        <button
          className="hover:scale-110 transition-transform p-4 rounded-full text-2xl"
          onClick={() => setMood((prev) => prev + " 😀")}
        >
          😀
        </button>
        <button
          className=" hover:scale-110 transition-transform p-4 rounded-full text-2xl"
          onClick={() => setMood((prev) => prev + " 😡")}
        >
          😡
        </button>
        <button
          className="hover:scale-110 transition-transform p-4 rounded-full text-2xl"
          onClick={() => setMood((prev) => prev + " 🥰")}
        >
          🥰
        </button>
      </div>
      {detectedMood ? (
        <p className="mt-3 text-green-400 italic">
          Detected mood: {detectedMood}
        </p>
      ) : (
        mood && (
          <p className="mt-3 text-gray-300 italic">Current mood: {mood}</p>
        )
      )}
    </div>
  );
}

export default MoodInput;
