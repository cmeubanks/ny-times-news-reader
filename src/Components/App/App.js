import React, { useState, useEffect } from 'react';
import { getArticles } from '../../apiCalls.js';

function App() {

  const [error, setError] = useState('')
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles()
    .then(data => {
      setArticles(data)
    })
    .catch(error => setError(error))
  }, []);

  return (
    <div className="App">
      {console.log(articles)}
    </div>
  );
}

export default App;
