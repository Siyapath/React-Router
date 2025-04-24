import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const GenreView = () => {
  const { genre_id } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const fetchGenreMovies = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
      params: {
        api_key: '313401cfcd7f2a45472da9fe09fd9efd',
        with_genres: genre_id,
        page
      }
    });
    setMovies(res.data.results);
  };

  useEffect(() => {
    fetchGenreMovies();
  }, [genre_id, page]);

  return (
    <div>
      <h2>Movies in this Genre</h2>
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id}>
            <h4>{movie.title}</h4>
            <Link to={`/movies/details/${movie.id}`}>Details</Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}>
          Previous
        </button>
        <span> Page {page} </span>
        <button onClick={() => setPage(p => p + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default GenreView;
