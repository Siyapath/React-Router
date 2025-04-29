import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Genres from "../components/Genres";
import { useNavigate } from "react-router-dom";

const genreList = [
  { genre: 'Action', id: 28 }, { genre: 'Adventure', id: 12 },
  { genre: 'Animation', id: 16 }, { genre: 'Crime', id: 80 },
  { genre: 'Family', id: 10751 }, { genre: 'Fantasy', id: 14 },
  { genre: 'History', id: 36 }, { genre: 'Horror', id: 27 },
  { genre: 'Mystery', id: 9648 }, { genre: 'Sci-Fi', id: 878 }
];

const MoviesView = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const navigate = useNavigate();

  const handleGenreSelect = (id) => {
    setSelectedGenre(id);
    navigate(`/genre/${id}`); // Navigating to a genre-specific page
  };

  return (
    <>
      <Header />
      <Genres genres={genreList} onSelect={handleGenreSelect} />
      {/* Based on the selected genre, you can conditionally display more content */}
      {/* Route for GenreView or DetailView can be implemented with React Router */}
      <Footer />
    </>
  );
};

export default MoviesView;
