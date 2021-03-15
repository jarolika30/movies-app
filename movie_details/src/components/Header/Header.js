import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../Logo';
import AddMovieButton from '../AddMovieButton';
import SearchMovieInput from '../SearchMovieInput';
import MovieDetails from '../MovieDetails';
import { InitialMovie } from '../../../mocksData/initialMovie';
import './Header.css';

export default function Header(props) {
  const [isDetailShown, setIsDetailShown] = useState(props.activeFilm.id);

  const handleIconClick = () => {
    props.handleClickMovie(InitialMovie);
  };

  useEffect(() => {
    setIsDetailShown(props.activeFilm.id);
  }, [props.activeFilm])

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
          <MovieDetails film={props.activeFilm} handleIconClick={handleIconClick} />
        )
      }
    </header>
  )
}

Header.propTypes = {
  activeFilm: PropTypes.object.isRequired,
  handleClickMovie: PropTypes.func.isRequired
}
