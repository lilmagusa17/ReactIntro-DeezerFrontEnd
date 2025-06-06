import { useQuery } from '@tanstack/react-query';
import PlaylistCardComponent from '../components/PlaylistCardComponent';
import { getPlaylists } from '../services/PlaylistService';

const HomePage = () => {
  const { data: playlists, isLoading, isError } = useQuery({
    queryKey: ['playlists'],
    queryFn: getPlaylists,
  });

  if (isLoading) return <div className="text-center mt-10">Cargando playlists...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Error al cargar las playlists.</div>;

  return (
    <>

    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 align-center">Playlists disponibles</h1>
      <div className="w-full  m-2">
        {playlists.map((playlist) => (
          <PlaylistCardComponent
            key={playlist.id}
            id={playlist.id}
            name={playlist.name}
            mood={playlist.mood}
          />
        ))}
      </div>
    </div>
    
    </>
  );
};

export default HomePage;
