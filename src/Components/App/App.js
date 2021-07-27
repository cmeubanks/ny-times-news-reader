import React, { useState, useEffect } from 'react';
import { getArticles } from '../../apiCalls.js';
import { cleanData } from '../../utilities.js';
import Header from '../Header/Header.js';
import List from '../List/List.js';
import Article from '../Article/Article.js';

function App() {

  const [error, setError] = useState('')
  const [articles, setArticles] = useState('')
  const [genre, setGenre] = useState('')
  const [chosenArticle, setChosenArticle] = useState('')

  useEffect(() => {
    getArticles('fashion')
    .then(data => {
      setArticles(cleanData(data))
    })
    .catch(error => setError(error))
  }, []);

  return (
    <div className="App">
      { error && <p>{error}</p>}
      {!articles && <p>Loading...</p> }
      <Header />
      {articles && <List stories={articles}/>}
    </div>
  );
}

export default App;
