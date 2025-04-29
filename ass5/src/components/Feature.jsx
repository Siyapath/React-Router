import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Feature.css';

const Feature = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  // Use async/await in the useEffect to fetch data asynchronously
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }

        const data = await response.json();
        setMovies(data.results.slice(0, 3)); // Store the first 3 movies
        setLoading(false); // Set loading state to false after data is fetched
      } catch (err) {
        setError(err.message); // Set error message if the fetch fails
        setLoading(false); // Stop loading
        console.error('Error fetching movies:', err);
      }
    };

    fetchMovies(); // Call the async function
  }, []); // Empty dependency array ensures this runs only once

  if (loading) {
    return <p>Loading...</p>; // Show loading message until data is fetched
  }

  if (error) {
    return <p>Error: {error}</p>; // Show error message if there is an error
  }

  return (
    <div className="feature-section">
      <h2>Featured Now Playing</h2>
      <div className="feature-movies">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <p>{movie.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Feature;
