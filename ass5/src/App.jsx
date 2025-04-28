import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './view/HomeView';
import LoginView from './view/LoginView';
import RegisterView from './view/RegisterView';
import MoviesView from './view/MoviesView';
import GenreView from './view/GenreView';
import DetailView from './view/DetailView';
import ErrorView from './view/ErrorView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/movies" element={<MoviesView />} />
        <Route path="/movies/genre/:genre_id" element={<GenreView />} />
        <Route path="/movies/details/:id" element={<DetailView />} />
        <Route path="*" element={<ErrorView />} />
      </Routes>
    </Router>
  );
}
export default App;
