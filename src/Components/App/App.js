import React, { useState, useEffect } from 'react';
import { getArticles } from '../../apiCalls.js';
import { cleanData } from '../../utilities.js'
import List from '../List/List.js';

function App() {

  const [error, setError] = useState('')
  const [articles, setArticles] = useState('')

  useEffect(() => {
    getArticles('fashion')
    .then(data => {
      setArticles(cleanData(data))
    })
    .catch(error => setError(error))
  }, []);

  return (
    <div className="App">
    {console.log(articles)}
    { error && <p>{error}</p>}
    {!articles && <p>Loading...</p> }
    {articles && <List stories={articles}/>}
    </div>
  );
}

export default App;
