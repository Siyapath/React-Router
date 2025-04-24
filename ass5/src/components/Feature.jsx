import { useEffect, useState } from 'react';
import axios from 'axios';

const Feature = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=313401cfcd7f2a45472da9fe09fd9efd`)
      .then(res => {
        const randomMovies = res.data.results.sort(() => 0.5 - Math.random()).slice(0, 3);
        setMovies(randomMovies);
      });
  }, []);

  return (
    <section>
      <h3>Featured Movies</h3>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default Feature;
