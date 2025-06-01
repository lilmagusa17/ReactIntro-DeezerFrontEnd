


const SongCardComponent = ({ song, onAdd }) => {
    
  return (
    <div className="card bg-base-100 shadow-sm mb-4">
      <div className="card-body flex flex-row items-center">
        <img src={song.albumCover} alt="Album" className="w-16 h-16 rounded mr-4" />
        <div className="flex-grow">
          <h2 className="text-lg font-bold">{song.title}</h2>
          <p className="text-sm">{song.artistName} • {song.albumTitle}</p>
        </div>
        <button className="btn btn-sm btn-success" onClick={() => onAdd(song)}>
          Agregar
        </button>
      </div>
    </div>
  );
};

export default SongCardComponent;
