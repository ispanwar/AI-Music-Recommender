import React from "react";
import axios from "axios";
export default function AnalyseMood({
  mood,
  imageFile,
  setResult,
  setLoading,
}) {
  const handleMood = async () => {
    if (!mood || !imageFile) {
      alert("Please enter your mood and upload an image.");
      return;
    }
    try {
      setLoading(true);
      const responses = [];
      if (mood) {
        const textRes = await axios.post("http://localhost:5000/analyse-text", {
          mood,
        });
        responses.push({ from: "text", data: textRes.data });
      }
      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);
        const imageRes = await axios.post(
          "http://localhost:5000/analyse-image",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        responses.push({ from: "image", data: imageRes.data });
      }
      setResult(responses);
    } catch (error) {
      console.error("Error analyzing mood:", error);
      alert("An error occurred while analyzing your mood. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="bg-green-500 text-white font-semibold p-4 mt-4 rounded hover:bg-green-600 transition-all w-full max-w-md mx-auto"
      onClick={handleMood}
    >
      🎶 Analyze My Mood
    </button>
  );
}
