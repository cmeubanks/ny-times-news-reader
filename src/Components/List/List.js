import React, { useState } from 'react';

function List( { stories }) {
  const articles = stories.map(story => {
    return (
      <p key={story.id}>{story.title}</p>
    )
  })

  return (
    <section className="list-container">
      <h2>Fashion</h2>
      {articles}
    </section>
  );
}

export default List;
