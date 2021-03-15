import React, { useState, useCallback } from 'react';
import { Logo } from '../Logo';
import AddMovieButton from '../AddMovieButton';
import SearchMovieInput from '../SearchMovieInput';
import MovieDetails from '../MovieDetails';
import './Header.css';

export default function Header() {
  const activeFilm = { 
    id: '1234', 
    title: 'Niagara', 
    year: '1952', 
    ganre: 'Mystery and thriller',
    img: '/assets/img/merelin.png',
    rating: '4.5',
    duration: '90',
    description: 'Rose Loomis (Marilyn Monroe) and her older, gloomier husband, George (Joseph Cotten), are vacationing at a cabin in Niagara Falls, N.Y. The couple befriend Polly (Jean Peters) and Ray Cutler (Casey Adams), who are honeymooning in the area. Polly begins to suspect that something is amiss between Rose and George, and her suspicions grow when she sees Rose in the arms of another man. While Ray initially thinks Polly is overreacting, things between George and Rose soon take a shockingly dark turn.'
  };

  const [isDetailShown, setIsDetailShown] = useState(true);

  const handleIconClick = useCallback(() => {
    setIsDetailShown(!isDetailShown);
  }, []);

  return (
    <header className="header">
      { !isDetailShown ? (
          <>
            <div className="header-add-movie">
              <Logo/>
              <AddMovieButton/>
            </div>
            <SearchMovieInput/>
          </>
        ) : (
          <MovieDetails film={activeFilm} handleIconClick={handleIconClick} />
        )
      }
    </header>
  )
}
