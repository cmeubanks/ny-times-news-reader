import React, { useState, useEffect } from 'react';


function Genre({ submitGenre }) {

  return (
    <form>
      <div className='filter-container'>
        <label className='label'>
          Choose your article genre:
          <select className='select' value={this.state.value} onChange={this.handleChange}>
            {}
          </select>
        </label>
        </div>
        <button className='drinkBtn' onClick={(e) => submitGenre(e)}>Get Drink</button>
      </form>
  );
}

export default Genre;
