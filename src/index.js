import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Components/App/App.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const router = <BrowserRouter> <App /> </BrowserRouter>
ReactDOM.render(router, document.getElementById('root'));

reportWebVitals();
