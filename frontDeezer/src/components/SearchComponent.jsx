import React from "react";
import { ListPlus } from "lucide-react";

const SearchComponent = ({ title, duration, rank, preview, artist, album, onAdd }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-base-200 rounded-2xl shadow-md">
      <img
        src={album.cover}
        alt={title}
        className="w-16 h-16 rounded-xl object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{artist.name} · {album.title}</p>
        <p className="text-xs text-gray-400">
         {Math.floor(duration / 60)}:{String(duration % 60).padStart(2, '0')}
        </p>
      </div>
      
      <ListPlus className="text-white/60 hover:text-green-400 cursor-pointer"
        onClick={() => {
          const trackData = {
            title,
            duration,
            rank,
            preview,
            artistName: artist.name,
            albumTitle: album.title,
            artistPicture: artist.picture,
            albumCover: album.cover
          };
          onAdd(trackData);
        }} />
    </div>
  );
};

export default SearchComponent;