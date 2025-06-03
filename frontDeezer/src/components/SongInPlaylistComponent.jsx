
import { Trash } from 'lucide-react';
const SongInPlaylistComponent = ({
  id,
  title,
  duration,
  rank,
  album,
  artist,
  artistPicture,
  cover,
  onDelete
}) => {
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = String(seconds % 60).padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  return (
    <>
      <div className="w-full mx-auto">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4 bg-base-200 rounded-xl shadow-md hover:bg-base-300 transition-colors duration-200">
          {/* Álbum cover */}
          {cover && (
            <img
              src={cover}
              alt={`${title} album cover`}
              className="w-16 h-16 rounded-lg object-cover"
            />
          )}

          {/* Info principal */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-base-content">
                {title}
              </h3>
            </div>
            <p className="text-sm text-gray-500">
              {artist} — <span className="italic">{album}</span>
            </p>
            <span className="text-sm text-gray-400">
              {formatDuration(duration)}
            </span>
          </div>

          {/* Columna derecha */}
          <div className="flex items-center gap-3">
            
            {/* eliminar */}
            <Trash className="text-white/60 hover:text-red-400 cursor-pointer" onClick={() => onDelete(id)} />

          </div>
        </div>
      </div>
    </>
  );
};

export default SongInPlaylistComponent;
