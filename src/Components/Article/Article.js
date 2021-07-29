import React, { useState, useEffect } from 'react';

function Article({ story }) {

  return (
    <section>
      <h3>{story.title}</h3>
      <p>{story.author}</p>
      <div className="img-container">
        {story && <img src={story.image} alt='article image'/>}
        {!story && <img src={process.env.PUBLIC_URL +"/nyt.jpeg"} alt='article image'/>}
      </div>
      {story && <a href={story.url}>View Full Article</a>}
      <p>{story.abstract}</p>
    </section>
  );
}

export default Article;
