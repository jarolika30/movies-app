import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import Filter from '../Filter';
import CardsComponent from '../CardsComponent/CardsComponent';
import ErrorBoundary from './ErrorBoundry';
import './MainContainer.css';

export default function MainContainer(props) {
  return (
    <main className="main-container">
      <ErrorBoundary>
        <div className="nav-wrap">
          <Navigation/>
          <Filter/>
        </div>
        <CardsComponent films={props.films} handleClickMovie={props.handleClickMovie} activeFilm={props.activeFilm} />
      </ErrorBoundary>
    </main>
  )
}

MainContainer.propTypes = {
  films: PropTypes.array.isRequired,
  handleClickMovie: PropTypes.func.isRequired,
  activeFilm: PropTypes.object.isRequired
}
