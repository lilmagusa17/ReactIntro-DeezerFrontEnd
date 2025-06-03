import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getTracksByPlaylist,
  removeTrackFromPlaylist,
} from "../services/PlaylistService";
import SongInPlaylistComponent from "../components/SongInPlaylistComponent";

const PlaylistDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const playlistName = location.state?.playlistName || `Playlist #${id}`;
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    data: tracks,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["playlist", id],
    queryFn: () => getTracksByPlaylist(id),
  });

  if (isLoading)
    return <div className="text-center mt-10">Cargando playlist...</div>;
  if (isError)
    return (
      <div className="text-center mt-10 text-red-500">
        Error al cargar la playlist.
      </div>
    );

  const handleDeleteTrack = async (trackId) => {
    try {
      await removeTrackFromPlaylist(id, trackId);
      queryClient.invalidateQueries(["playlist", id]); // para que se recargue la lista
    } catch (error) {
      console.error("Error eliminando canción:", error);
    }
  };

  const handleSearchTracks = () => {
    navigate(`/playlist/${id}/search`, {
      state: { playlistName},
    });
  };

  return (
    <>
     <div className="p-6">
          <h1 className="text-3xl font-bold">{playlistName}</h1>

          <p className="text-gray-500 mb-6">Canciones: {tracks.length}</p>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Canciones</h2>
            <button
              className="btn btn-secondary btn-sm"
              onClick={handleSearchTracks}
            >
              Buscar Canciones
            </button>
          </div>

          <div className="space-y-4">
            {tracks.length > 0 ? (
              tracks.map((song) => (
                <SongInPlaylistComponent
                  key={song.id}
                  id={song.id}
                  title={song.title}
                  duration={song.duration}
                  rank={song.rank}
                  artist={song.artistName}
                  album={song.albumTitle}
                  artistPicture={song.artistPicture}
                  cover={song.albumCover}
                  onDelete={handleDeleteTrack}
                />
              ))
            ) : (
              <p>No hay canciones en esta playlist.</p>
            )}
          </div>
        </div>
    </>
  );
};

export default PlaylistDetailPage;
