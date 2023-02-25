import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import { GENRES_ROUTE, HOME_ROUTE, SONGS_ROUTE } from './constants/routes';
import GenresPage from './pages/GenresPage/GenresPage';
import HomePage from './pages/HomePage/HomePage';
import SongsPage from './pages/SongsPage/SongsPage';

function App() {
  return (
    <div className="appContainer">
      <Header />
      <div className="appBodyContainer">
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
    </div>
  );
}

export default App;
