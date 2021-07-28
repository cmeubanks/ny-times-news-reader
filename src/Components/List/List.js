import React, { useState } from 'react';

function List( { genre, stories, handleClick }) {
  const articles = stories.map(story => {
    return (
      <button key={story.id} onClick={() => handleClick(story.id)}>
        {story.title}
      </button>
    )
  })

  return (
    <section className="article-sec">
      <h2>{genre.toUpperCase()}</h2>
      {articles}
    </section>
  );
}

export default List;
