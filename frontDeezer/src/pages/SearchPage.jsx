import { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { addTrackToPlaylist } from "../services/PlaylistService";
import { searchDeezer } from "../services/DeezerService";
import SearchComponent from "../components/SearchComponent";

const SearchPage = () => {
  const { id: playlistId } = useParams();
  const location = useLocation();
  const playlistName = location.state?.playlistName || `Playlist #${playlistId}`;
    const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [searchTrigger, setSearchTrigger] = useState(null);
  // React Query for search results
  const {
    data: searchResults,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["deezerSearch", searchTrigger],
    queryFn: () => searchDeezer(searchTrigger),
    enabled: !!searchTrigger, // Only run query when searchTrigger has a value
    select: (data) => (Array.isArray(data?.data) ? data.data : []),
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    retry: 1, // Only retry once on failure
  });

  const handleSearch = () => {
    if (!query.trim()) return;
    setSearchTrigger(query.trim()); // This will trigger the query
  };

  const handleAddTrack = async (track) => {
    try {
      const trackDTO = {
      title: track.title,
      duration: track.duration,
      rank: track.rank,
      preview: track.preview,
      artistName: track.artistName,
      albumTitle: track.albumTitle,
      artistPicture: track.artistPicture,
      albumCover: track.albumCover,
    };
      await addTrackToPlaylist(playlistId, trackDTO);
      alert(`Canción agregada a ${playlistName}`);
        
      //navigate(`/playlists/${playlistId}`, { state: { playlistName } });

    } catch (error) {
      console.error("Error agregando canción:", error);
      alert("Hubo un error al agregar la canción.");
    }
  };

  // Handle enter key press for search
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>

    <div className="p-6 ">
      <h1 className="text-3xl font-bold mb-4">
        Agregar canciones a{" "}
        <span className="text-secondary/80 italic ">{playlistName}</span>
      </h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Buscar canciones en Deezer..."
          className="input input-bordered w-full/2"
        />
        <button
          className="btn btn-secondary"
          onClick={handleSearch}
          disabled={isLoading || !query.trim()}
        >
          {isLoading ? "Buscando..." : "Buscar"}
        </button>
      </div>

      {/* Error state */}
      {isError && (
        <div className="alert alert-error mb-4">
          <span>
            Error buscando canciones: {error?.message || "Error desconocido"}
          </span>
        </div>
      )}

      {/* Loading state */}
      {isLoading && (
        <div className="flex justify-center py-8">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      )}

      {/* Results */}
      {searchResults && !isLoading && (
        <div className="space-y-4">
          {searchResults.length === 0 && searchTrigger && (
            <div className="text-center py-8 text-gray-500">
              No se encontraron resultados para "{searchTrigger}"
            </div>
          )}
          {searchResults.map((track) => (
            <SearchComponent
              key={track.id}
              title={track.title}
              duration={track.duration}
              rank={track.rank}
              preview={track.preview}
              artist={track.artist}
              album={track.album}
              onAdd={handleAddTrack}
            />
          ))}
        </div>
      )}

      {/* Initial state - no search performed */}
      {!searchTrigger && (
        <div className="text-center py-8 text-gray-500">
          Busca canciones para agregar a tu playlist
        </div>
      )}
    </div>
    
    </>
  );
};

export default SearchPage;
