import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
  