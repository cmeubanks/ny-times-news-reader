import React, { useState, useEffect } from 'react';

function Article() {


  return (
    <section>
      <h3>{title}</h3>
      <p>{author}</p>
      <img src={url} alt='article image'/>
      <a href={url}>View Full Article</a>
      <p>{abstract}</p>
    </section>
  );
}

export default Article;
