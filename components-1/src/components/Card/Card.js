import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card(props) {
  return (
    <div className="card-container">
      <div className="card-img">
        <div className="kebab-menu">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
      <div className="card-info">
        <h3 className="title">{props.title}</h3>
        <span className="year">{props.year}</span>
        <span className="ganre">{props.ganre}</span>
      </div>
    </div>
  )
}

Card.PropTypes = {
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  ganre: PropTypes.string.isRequired,
}

