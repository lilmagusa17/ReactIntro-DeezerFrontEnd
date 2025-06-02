import { useParams, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTracksByPlaylist } from '../services/PlaylistService';
import SongInPlaylistComponent from '../components/SongInPlaylistComponent';

const PlaylistDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const playlistName = location.state?.playlistName || `Playlist #${id}`;

  const { data: tracks, isLoading, isError } = useQuery({
    queryKey: ['playlist', id],
    queryFn: () => getTracksByPlaylist(id),
  });

  if (isLoading) return <div className="text-center mt-10">Cargando playlist...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Error al cargar la playlist.</div>;

  return (
    <>

    <div className='bg-base-100 min-h-screen justify-center items-center flex align-center'>
      <div className="p-6">
      <h1 className="text-3xl font-bold">{playlistName}</h1>

      <p className="text-gray-500 mb-6">Songs: {tracks.length}</p>
      
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
            />
          ))
        ) : (
          <p>No hay canciones en esta playlist.</p>
        )}
      </div>
    </div>
    </div>
    
    </>
  );
};

export default PlaylistDetailPage;
