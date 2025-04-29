import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './DetailView.css';  
const DetailView = () => {
  const { id } = useParams();  // Grab the movie ID from the URL
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: import.meta.env.VITE_TMDB_API_KEY,
          language: 'en-US',
        },
      })
      .then((res) => {
        setMovieDetails(res.data); // Set the movie details based on the id
      })
      .catch((err) => console.error('Error fetching movie details:', err));
  }, [id]); // Fetch data whenever the id changes

  if (!movieDetails) return <p>Loading...</p>;

  return (
    <div className="detail-view">
      <h1>{movieDetails.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <p>{movieDetails.overview}</p>
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Rating: {movieDetails.vote_average}</p>
      {/* You can add more details like genres, production companies, etc. */}
    </div>
  );
};

export default DetailView;
