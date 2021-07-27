import React, { useState, useEffect } from 'react';
import genres from '../../articleGenres.js';


function Genre({ submitGenre }) {
  const [genre, setChosenGenre] = useState('')

  const dropDown = genres.map((genre) => {
      return(
        <option value={genre}>{genre}</option>
      )
    })

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
        <button className='genreBtn' onClick={(e) => submitGenre(e)}>Get Drink</button>
      </form>
  );
}

export default Genre;
