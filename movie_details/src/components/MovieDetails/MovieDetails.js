import React from 'react';
import SearchIcon from '@epam/assets/icons/common/action-search-24.svg';
import PropTypes from 'prop-types';
import { Logo } from '../Logo';
import './MovieDetails.css';

export default function MovieDetails(props) {
  return (
    <div className="movie-details">
      <div className="header-details">
        <Logo />
        <div className="search-icon" onClick={props.handleIconClick}>
          <SearchIcon />
        </div>
      </div>
      <div className="body-details">
        <div className="film-img">
          <img src={props.film.img} alt={props.film.title} />
        </div>
        <div className="film-info">
          <div className="film-info-title">
            <span>{props.film.title}</span>
            <div className="film-rating">{props.film.rating}</div>
          </div>
          <div>
            <span className="film-year">{props.film.year}</span>
            <span className="film-duration">{`${props.film.duration} min`}</span>
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
  film: PropTypes.object.isRequired,
  handleIconClick: PropTypes.func.isRequired
};
