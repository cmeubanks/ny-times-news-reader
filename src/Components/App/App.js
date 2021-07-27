import React, { useState, useEffect } from 'react';
import { getArticles } from '../../apiCalls.js';
import List from '../List/List.js';

function App() {

  const [error, setError] = useState('')
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles('fashion')
    .then(data => {
      setArticles(data)
    })
    .catch(error => setError(error))
  }, []);

  return (
    <div className="App">
    {console.log(articles)}
    { articles && < List stories={articles}/>}
    </div>
  );
}

export default App;
