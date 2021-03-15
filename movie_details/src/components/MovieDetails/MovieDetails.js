import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../Logo';
import './MovieDetails.css';

export default function MovieDetails(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="movie-details">
      <div className="header-details">
        <Logo />
      </div>
      <div className="body-details">
        <div className="film-img">
          <img src={props.film.img} alt={props.film.title} />
        </div>
        <div className="film-info">
          <div>
            <h2>{props.film.title}</h2>
            <div className="film-rating">{props.film.rating}</div>
          </div>
          <div>
            <span className="film-year">{props.film.year}</span>
            <span className="film-duration">{props.film.duration}</span>
          </div>
          <div className="film-description">
            <p>{props.film.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  show: PropTypes.bool.isRequired,
  film: PropTypes.object.isRequired
};
