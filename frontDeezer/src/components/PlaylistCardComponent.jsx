import React from "react";
import { useNavigate } from "react-router-dom";
import { Music2 } from "lucide-react"; // Ícono decorativo opcional

const PlaylistCardComponent = ({ id, name, mood }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/playlist/${id}`, {
      state: { playlistName: name, mood },
    });
  };

  return (
    <>
        <div
          className="flex items-center justify-between p-5 bg-base-200 rounded-xl shadow-md hover:bg-base-300 transition-colors duration-200 cursor-pointer mt-6"
          onClick={handleClick}
        >
          <div className="flex items-center gap-4">
            <div className="bg-secondary text-secondary-content p-3 rounded-full shadow-sm">
              <Music2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-base-content">
                {name}
              </h2>
              <p className="text-sm text-gray-500 italic">
                Estado de ánimo: {mood}
              </p>
            </div>
          </div>

          <button className="btn btn-xs btn-secondary ml-4">Ver detalles</button>
        </div>
    </>
  );
};

export default PlaylistCardComponent;
