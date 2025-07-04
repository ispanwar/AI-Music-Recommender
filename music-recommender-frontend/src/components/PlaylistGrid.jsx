import React from "react";

const PlaylistGrid = ({ playlists }) => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
      {playlists.map((playlist, index) => (
        <div
          key={index}
          className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          <img
            src={playlist.image}
            alt={playlist.name}
            className="rounded-lg mb-2 w-full h-48 object-cover"
          />
          <a
            href={playlist.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-white hover:text-green-400 font-semibold block mt-2 text-center"
          >
            {playlist.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default PlaylistGrid;
