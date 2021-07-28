import React, { useState, useEffect } from 'react';
import { getArticles } from '../../apiCalls.js';
import { cleanData } from '../../utilities.js';
import { Route, Switch, Redirect} from 'react-router-dom';
import Header from '../Header/Header.js';
import List from '../List/List.js';
import Article from '../Article/Article.js';
import Genre from '../Genre/Genre.js';

function App() {

  const [error, setError] = useState('')
  const [articles, setArticles] = useState('')
  const [genre, setGenre] = useState('fashion')
  const [chosenArticle, setChosenArticle] = useState('')

  useEffect(() => {
    getArticles(genre)
    .then(data => {
      setArticles(cleanData(data))
    })
    .catch(error => setError(error))
  }, [genre]);

  const handleClick = (id) => {
    const selectedStory = articles.find((article) => article.id === id)
    setChosenArticle(selectedStory)
  }

  const submitGenre = (section) => {
   setGenre(section)
  }

  return (
    <div className="app">
      <Header />
      <Route path="/articles" render={() => {
        return (
          <div className='article-display'>
            { error && <p>{error}</p>}
            {!articles && <p>Loading...</p> }
            {articles && <List genre={genre} stories={articles} handleClick={handleClick}/>}
            {chosenArticle && <Article story={chosenArticle}/>}
          </div>
        )
      }} />
      <Route exact path="/" render={() => <Genre submitGenre={submitGenre}/>} />
    </div>
  );
}

export default App;
