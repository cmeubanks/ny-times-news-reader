import React, { useState } from 'react';

function List( { stories }) {
  const articles = stories.map(story => {
    return (
      <p>{story.title}</p>
    )
  })

  return (
    <section className="list-container">
      {articles}
    </section>
  );
}

export default List;
