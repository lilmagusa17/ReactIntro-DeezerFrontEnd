
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PlaylistDetailPage from '../pages/PlaylistDetailPage';
import SearchPage from '../pages/SearchPage';


const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/playlist/:id" element={<PlaylistDetailPage />} />
          <Route path="/search" element={<SearchPage />} />

        </Routes>
      </BrowserRouter>
    );
}

export default AppRouter;
