import React from 'react';
import PropTypes from 'prop-types';
import './Link.css';

export default function Link(props) {
  return (
    <li className="list-item" key={props.key}>
      <a href="#all">{props.title}</a>
    </li>
  )
}

Link.PropTypes = {
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
