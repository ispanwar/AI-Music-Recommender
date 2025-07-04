import React, { useState } from "react";
import { analyzeMood, getPlaylists } from "../api/api";
import PlaylistGrid from "./PlaylistGrid";

export default function AnalyseMood({ mood, setLoading, setDetectedMood }) {
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState(null);

  const handleMood = async () => {
    if (!mood) {
      alert("Please enter your mood.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setPlaylists([]);

      // Step 1: Analyze text mood
      const textRes = await analyzeMood(mood);
      const detectedMood = textRes.data.emotion;
      // const detectedMood = textRes.data.mapped_mood;
      if (!detectedMood) {
        throw new Error("No emotion detected.");
      }
      setDetectedMood(detectedMood);
      // Step 2: Get playlists from backend based on emotion
      const playlistRes = await getPlaylists(detectedMood);
      setPlaylists(playlistRes.data);
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <button
        onClick={handleMood}
        className="bg-green-500 text-white font-semibold p-4 mt-4 rounded hover:bg-green-600 transition-all w-full"
      >
        🎶 Analyze My Mood
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {console.log("No errors so far")}
      {!error && playlists.length > 0 && (
        <div className="mt-6">
          <PlaylistGrid playlists={playlists} />
        </div>
      )}
      {console.log(playlists)}
      {console.log("Playlists should be displaying now")}
    </div>
  );
}
