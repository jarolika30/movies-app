import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../components/Navigation';
import Filter from '../../components/Filter';
import CardsComponent from '../../components/CardsComponent/CardsComponent';
import ErrorBoundary from './ErrorBoundry';
import './MainContainer.css';

export default function MainContainer(props) {
  return (
    <div className="main-wrap">
      <main className="main-container">
        <div className="nav-wrap">
          <Navigation/>
          <Filter/>
        </div>
        <CardsComponent films={props.films} handleClickMovie={props.handleClickMovie} activeFilm={props.activeFilm} />
      </main>
    </div>
  )
}

MainContainer.propTypes = {
  films: PropTypes.array.isRequired,
  handleClickMovie: PropTypes.func.isRequired,
  activeFilm: PropTypes.object.isRequired
}
