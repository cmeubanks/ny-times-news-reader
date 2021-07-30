import React, { useState, useEffect } from 'react';
import genres from '../../articleGenres.js';
import { useHistory } from 'react-router-dom';


function Genre({ submitGenre }) {
  let history = useHistory();
  const [genre, setChosenGenre] = useState('')

  const dropDown = genres.map((genre, index) => {
      return(
        <option key={index} value={genre}>{genre}</option>
      )
    })

  const viewArticles = (e) => {
    e.preventDefault();
    submitGenre(genre);
    history.push("/articles");
    //need to do this without manu=ipulating history "code smell"
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
          <button className='genreBtn' onClick={(e) => viewArticles(e)}>
          View Articles
          </button>
      </form>
  );
}

export default Genre;
