import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // ⬅ added useNavigate
import './MovieDetailView.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const MovieDetailView = () => {
  const { movieId } = useParams();
  const navigate = useNavigate(); // ⬅ added navigate hook
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: import.meta.env.VITE_TMDB_API_KEY,
          language: 'en-US',
          append_to_response: 'videos',
        },
      })
      .then((res) => {
        setMovie(res.data);

        const trailer = res.data.videos.results.find(
          (video) => video.type === 'Trailer' && video.site === 'YouTube'
        );
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load movie details.');
      });
  }, [movieId]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!movie) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="movie-detail-view">
      <Header />
      <div className="movie-detail-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back 
        </button>

        <img
          className="movie-detail-poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-detail-info">
          <h2>{movie.title}</h2>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
          <p><strong>Runtime:</strong> {movie.runtime} min</p>
          <p><strong>Status:</strong> {movie.status}</p>
          <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
          <p><strong>Budget:</strong> ${movie.budget.toLocaleString()}</p>
          <p>
            <strong>Production Companies:</strong>{' '}
            {movie.production_companies.map(pc => pc.name).join(', ')}
          </p>
          <p className="overview"><strong>Overview: </strong>{movie.overview}</p>

          {trailerKey && (
            <div className="trailer">
              <h3>Trailer</h3>
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="Movie Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetailView;
