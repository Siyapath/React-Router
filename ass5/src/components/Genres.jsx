const Genres = ({ genres, onSelect }) => (
    <div className="genres">
      {genres.map(g => (
        <button key={g.id} onClick={() => onSelect(g.id)}>
          {g.genre}
        </button>
      ))}
    </div>
  );
  
  export default Genres;
  