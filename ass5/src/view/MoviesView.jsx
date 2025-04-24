import Header from "../components/Header";
import Footer from "../components/Footer";
import Genres from "../components/Genres";

const genreList = [
  { genre: 'Action', id: 28 }, { genre: 'Adventure', id: 12 },
  { genre: 'Animation', id: 16 }, { genre: 'Crime', id: 80 },
  { genre: 'Family', id: 10751 }, { genre: 'Fantasy', id: 14 },
  { genre: 'History', id: 36 }, { genre: 'Horror', id: 27 },
  { genre: 'Mystery', id: 9648 }, { genre: 'Sci-Fi', id: 878 }
];

const MoviesView = () => (
  <>
    <Header />
    <Genres genres={genreList} onSelect={(id) => console.log(id)} />
    {/* Route between GenreView or DetailView here */}
    <Footer />
  </>
);
export default MoviesView;
