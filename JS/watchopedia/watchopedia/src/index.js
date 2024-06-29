import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Counter from './Counter';
import MoviePage from './Components/MoviePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Counter />
    <MoviePage />
  </React.StrictMode>
);
