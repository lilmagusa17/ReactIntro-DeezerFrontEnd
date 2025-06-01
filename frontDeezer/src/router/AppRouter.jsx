
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PlaylistDetailPage from '../pages/PlaylistDetailPage';


const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/playlist/:id" element={<PlaylistDetailPage />} />

        </Routes>
      </BrowserRouter>
    );
}

export default AppRouter;
