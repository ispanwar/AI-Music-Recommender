import React, { useState } from "react";

function ImageUpload({ imageFile, setImageFile }) {
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      alert("Please select a valid image file.");
    }
  };

  const clearImage = () => {
    setImageFile(null);
    setPreviewUrl(null);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-blue-400 rounded-lg mt-6 w-full max-w-md mx-auto">
      <label
        htmlFor="imageUpload"
        className="cursor-pointer text-blue-600 font-medium hover:underline"
      >
        📷 Click to Upload Your Selfie
      </label>
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />

      {previewUrl && (
        <div className="mt-4 flex flex-col items-center gap-2">
          <img
            src={previewUrl}
            alt="Preview"
            className="w-40 h-40 object-cover rounded-full shadow-lg"
          />
          <button
            onClick={clearImage}
            className="text-sm text-red-600 hover:underline mt-2"
          >
            🗑️ Clear Image
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
