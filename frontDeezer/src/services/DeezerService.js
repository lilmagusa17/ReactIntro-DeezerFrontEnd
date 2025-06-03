import axios from 'axios'
import { URL_BASE } from '../constants/globals'

// GET /api/v1/deezer/search
/*
EXAMPLE REQUEST
GET /api/v1/deezer/search?q=eminem

EXAMPLE RESPONSE
{
  "data": [
    {
      "id": "3135556",
      "title": "Lose Yourself",
      "artist": "Eminem",
      "album": "8 Mile"
    }
  ]
}
*/
export const searchDeezer = async (query) => {
    const result  = await axios.get(`${URL_BASE}/api/v1/deezer/search?q=${encodeURIComponent(query)}`);
    console.log('Deezer search results:', result.data);
    return result.data;
  
}