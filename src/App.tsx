import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import MediaDetailPage from './pages/MediaDetailPage';
import VideoPlayerPage from './pages/VideoPlayerPage';
import FavoritesPage from './pages/FavoritesPage';
import NotFoundPage from './pages/NotFoundPage';
import ResultsPage from './pages/ResultsPage'
import { FavoritesProvider } from './context/favoritesContext';

import CreateMoviePage from './pages/CreateMoviePage';
import EditMoviePage from './pages/EditMoviePage';
import EditMovieListPage from './pages/EditMovieListPage';

function App() {
  return (
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/media/:id" element={<MediaDetailPage />} />
          <Route path="/media/:id/play" element={<VideoPlayerPage />} />
          <Route path="/favoritos" element={<FavoritesPage />} />
          <Route path="/resultados" element={<ResultsPage />} />
          <Route path="/crear" element={<CreateMoviePage />} />
          <Route path="/editar" element={<EditMovieListPage />} />
          <Route path="/editar/:id" element={<EditMoviePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </FavoritesProvider>
  );
}

export default App;