import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import {
  ERROR_ROUTE, GENRES_ROUTE, HOME_ROUTE, SONGS_ROUTE
} from './constants/routes';
import {
  ErrorPage, GenresPage, HomePage, NotFoundPage, SongsPage
} from './pages';

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
            <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<ErrorPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
