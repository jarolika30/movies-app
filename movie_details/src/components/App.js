import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContainer from './MainContainer';
import { CardInfo } from '../../mocksData/cardsInfo';
import { InitialMovie } from '../../mocksData/initialMovie';
import './App.css';

export default function App() {
  const [activeMovie, setActiveMovie] = useState(InitialMovie);

  return (
    <div className="app">
      <Header activeFilm={activeMovie} handleClickMovie={setActiveMovie} />
      <div className="content">
        <MainContainer films={CardInfo} handleClickMovie={setActiveMovie} activeFilm={activeMovie} />
      </div>
      <Footer/>
    </div>
  );
}

