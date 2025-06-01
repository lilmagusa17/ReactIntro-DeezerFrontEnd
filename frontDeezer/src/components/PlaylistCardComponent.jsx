import React from 'react';
import { useNavigate } from 'react-router-dom';

const PlaylistCardComponent = ({id, name, mood}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(`Playlist ${id} clicked`);
    navigate(`/playlist/${id}`, {
    state: { playlistName: name }
  });
  }

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {mood}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleClick}>see details</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default PlaylistCardComponent;
