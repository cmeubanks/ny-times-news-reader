import React, { useState, useEffect } from 'react';
import genres from '../../articleGenres.js';


function Genre({ submitGenre }) {
  const [genre, setChosenGenre] = useState('')

  const dropDown = genres.map((genre) => {
      return(
        <option value={genre}>{genre}</option>
      )
    })

  const viewArticles = (e) => {
    e.preventDefault();
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
        <button className='genreBtn' onClick={(e) => viewArticles(e)}>View Articles</button>
      </form>
  );
}

export default Genre;
