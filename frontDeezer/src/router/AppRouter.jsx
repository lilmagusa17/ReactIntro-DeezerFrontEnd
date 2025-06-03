import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PlaylistDetailPage from "../pages/PlaylistDetailPage";
import SearchPage from "../pages/SearchPage";
import Breadcrumb from "../components/Breadcrumb";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="bg-base-100 min-h-screen px-6 py-4">
        <Breadcrumb />
        <div className="mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/playlist/:id" element={<PlaylistDetailPage />} />
            <Route path="/playlist/:id/search" element={<SearchPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
