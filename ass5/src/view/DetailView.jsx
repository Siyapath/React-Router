import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailView = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [trailers, setTrailers] = useState([]);

  const fetchMovieDetails = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: { api_key: '313401cfcd7f2a45472da9fe09fd9efd' }
    });
    setDetails(res.data);
  };

  const fetchMovieVideos = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
      params: { api_key: '313401cfcd7f2a45472da9fe09fd9efd' }
    });
    const trailers = res.data.results.filter(v => v.type === 'Trailer' && v.site === 'YouTube');
    setTrailers(trailers);
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchMovieVideos();
  }, [id]);

  if (!details) return <p>Loading...</p>;

  return (
    <div>
      <h2>{details.title}</h2>
      <p><strong>Overview:</strong> {details.overview}</p>
      <p><strong>Release Date:</strong> {details.release_date}</p>
      <p><strong>Runtime:</strong> {details.runtime} min</p>
      <p><strong>Genres:</strong> {details.genres.map(g => g.name).join(', ')}</p>
      <p><strong>Rating:</strong> {details.vote_average}</p>
      <p><strong>Status:</strong> {details.status}</p>

      <h3>Trailers</h3>
      {trailers.length > 0 ? (
        trailers.map(trailer => (
          <div key={trailer.id}>
            <h4>{trailer.name}</h4>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={trailer.name}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))
      ) : (
        <p>No trailers found.</p>
      )}
    </div>
  );
};

export default DetailView;
