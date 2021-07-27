import React, { useState, useEffect } from 'react';

function Article({ story }) {

  return (
    <section>
      <h3>{story.title}</h3>
      <p>{story.author}</p>
      <img src={story.url} alt='article image'/>
      <a href={story.url}>View Full Article</a>
      <p>{story.abstract}</p>
    </section>
  );
}

export default Article;
