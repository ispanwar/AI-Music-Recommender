import { useState } from "react";
import MoodInput from "./components/MoodInput";
import ImageUpload from "./components/ImageUpload";
import AnalyseMood from "./components/AnalyseMood";

function App() {
  const [mood, setMood] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center border-2 border-black bg-gray-900 mx-auto p-4 rounded-xl shadow-lg w-full max-w-2xl">
        <h1 className="text-5xl font-bold p-4 text-white">
          Music Recommender App
        </h1>

        <MoodInput mood={mood} setMood={setMood} />
        <ImageUpload imageFile={imageFile} setImageFile={setImageFile} />
        <AnalyseMood
          mood={mood}
          imageFile={imageFile}
          setResult={setResult}
          setLoading={setLoading}
        />

        {loading && <p className="text-white mt-4">Analyzing...</p>}
        {result.length > 0 && (
          <div className="mt-6 p-4 text-white bg-gray-800 rounded-lg w-full">
            <h2 className="text-lg font-bold mb-2">Result:</h2>
            <pre className="text-sm">{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
