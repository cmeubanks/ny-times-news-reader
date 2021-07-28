import React, { useState, useEffect } from 'react';
import genres from '../../articleGenres.js';
import { Link } from 'react-router-dom';


function Genre({ submitGenre }) {
  const [genre, setChosenGenre] = useState('')

  const dropDown = genres.map((genre, index) => {
      return(
        <option key={index} value={genre}>{genre}</option>
      )
    })

  const viewArticles = () => {
    submitGenre(genre);
  }

  return (
    <form>
      <div className='filter-container'>
        <label className='label'>
          Choose your article genre:
          <select className='select' value={genre} onChange={(e) => setChosenGenre(e.target.value)}>
            {dropDown}
          </select>
        </label>
        </div>
        <Link to="/articles">
          <button className='genreBtn' onClick={() => viewArticles}>
          View Articles
          </button>
        </Link>
      </form>
  );
}

export default Genre;
