import React, { useState, useEffect } from 'react';

function Article({ story }) {

  return (
    <section className="article-details">
      <h3>{story.title}</h3>
      <p>{story.author}</p>
      <div className="img-container">
        {story && <img className='art-img' src={story.image} alt='article image'/>}
        {!story && <img className='newspaper' height="900" width="900" src={process.env.PUBLIC_URL +"/nyt.jpeg"} alt='article image'/>}
      </div>
      <div className="description">
        {story && <a href={story.url}>View Full Article</a>}
        <p className="abstract">{story.abstract}</p>
      </div>
    </section>
  );
}

export default Article;
