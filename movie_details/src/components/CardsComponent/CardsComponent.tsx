import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './CardsComponent.css';

export default function CardsComponent(props) {
  return (
    <div className="cards-container">
      <div className="cards-total">
        <div>
          <span>{props.films.length}</span>{" "}
          movies found
        </div>
      </div>
      {
        props.films.map(el => <Card key={el.id} handleClickMovie={props.handleClickMovie} activeFilm={props.activeFilm} {...el} />)
      }
    </div>
  )
}

CardsComponent.propTypes = {
  films: PropTypes.array.isRequired,
  handleClickMovie: PropTypes.func.isRequired,
  activeFilm: PropTypes.object.isRequired
}