import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SongsPage from './pages/SongsPage/SongsPage';
import GenresPage from './pages/GenresPage/GenresPage';
import { HOME_ROUTE, SONGS_ROUTE, GENRES_ROUTE } from './constants/routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path={HOME_ROUTE}
            element={<HomePage />}
          />
          <Route
            path={SONGS_ROUTE}
            element={<SongsPage />}
          />
          <Route
            path={GENRES_ROUTE}
            element={<GenresPage />}
          />
          <Route path="*" element={<div>404 Error. Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
