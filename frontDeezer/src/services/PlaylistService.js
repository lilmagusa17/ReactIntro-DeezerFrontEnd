import axios from 'axios'
import { URL_BASE } from '../constants/globals'

//GET /api/v1/playlists
export const getPlaylists = async () => {
    let result = await axios.get(
        `${URL_BASE}/api/v1/playlists`
    );
    console.log('Playlists fetched:', result.data);
    return result.data;
};


//ADD TRACK TO PLAYLIST
/*
EXAMPLE REQUEST
httpPOST /api/v1/playlists/1/tracks
Content-Type: application/json

{
  "id": 12345,
  "title": "Lose Yourself",
  "duration": 326,
  "rank": 887584,
  "artistName": "Eminem",
  "albumTitle": "8 Mile",
  "artistPicture": "https://api.deezer.com/artist/13/image",
  "albumCover": "https://api.deezer.com/album/302127/image"
}
*/
export const addTrackToPlaylist = async (playlistId, track) => {
    let result = await axios.post(`${URL_BASE}/api/v1/playlists/${playlistId}/tracks`, track);
    console.log('Track added to playlist:', result.data);
    return result.data;
};
    
//REMOVE TRACK FROM PLAYLIST
/*
EXAMPLE REQUEST
DELETE /api/v1/playlists/{playlistId}/tracks/{trackId}*/
export const removeTrackFromPlaylist = async (playlistId, trackId) => {
    let result = await axios.delete(
        `${URL_BASE}/api/v1/playlists/${playlistId}/tracks/${trackId}`
    );
    console.log('Track removed from playlist:', result.data);
    return result.data;
};


//Get tracks by playlist
//GET /api/v1/playlists/{playlistId}/tracks
export const getTracksByPlaylist = async (playlistId) => {
    let result = await axios.get(`${URL_BASE}/api/v1/playlists/${playlistId}/tracks`);
    console.log('Tracks fetched for playlist:', result.data);
    return result.data; 
};
