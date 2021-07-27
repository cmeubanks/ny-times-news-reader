import React, { useState } from 'react';

function List( { stories }) {
  const articles = stories.map(story => {
    return (
      <p key={story.id}>{story.title}</p>
    )
  })

  return (
    <button className="article-btn">
      <h2>Fashion</h2>
      {articles}
    </button>
  );
}

export default List;
