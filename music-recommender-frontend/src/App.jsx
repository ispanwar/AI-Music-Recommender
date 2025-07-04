import { useState } from "react";
import MoodInput from "./components/MoodInput";
// import ImageUpload from "./components/ImageUpload";
import AnalyseMood from "./components/AnalyseMood";

function App() {
  const [mood, setMood] = useState("");
  // const [imageFile, setImageFile] = useState(null);
  // const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [detectedMood, setDetectedMood] = useState("");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center justify-center border-2 border-black bg-gray-900 mx-auto p-4 rounded-xl shadow-lg w-full max-w-2xl">
        <h1 className="text-5xl font-bold p-4 text-white">
          Music Recommender App
        </h1>

        <MoodInput mood={mood} setMood={setMood} detectedMood={detectedMood} />
        {/* <ImageUpload imageFile={imageFile} setImageFile={setImageFile} /> */}
        <AnalyseMood
          mood={mood}
          // imageFile={imageFile}
          setLoading={setLoading}
          setDetectedMood={setDetectedMood}
        />

        {loading && <p className="text-white mt-4">Analyzing...</p>}
      </div>
    </div>
  );
}

export default App;
