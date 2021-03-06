import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Links } from '../../../mocksData/linkItems';
import { InitialMovie } from '../../../mocksData/initialMovie'
import './EditModal.css';

export default function EditModal(props) {
  if (!props.show) {
    return null;
  }

  const [movie, setMovie] = useState(props.movie);

  return (
    <div className="modal-edit" id="modal-edit">
      <div className="modal-edit-wrap">
        <div className="edit-header">
          <span className="edit-close-sign" onClick={props.onClose}>x</span>
        </div>
        <div className="edit-body">
          <h2>Edit movie</h2>
          { props.mode && <label htmlFor="movie-id">Movie ID</label> }
          { props.mode && <input
            className="edit-input"
            id="movie-id"
            type='text'
            value={movie.id}
            disabled
          /> }
          <label htmlFor="movie-title">Title</label>
          <input
            className="edit-input"
            id='movie-title'
            type='text'
            value={movie.title}
            placeholder='e.g. Moana'
          />
          <label htmlFor="release-date">Release Date</label>
          <input
            className="edit-input"
            id='release-date'
            type='date'
            value={movie.year}
            placeholder='Select Date'
          />
          <label htmlFor="movie-url">Movie URL</label>
          <input
            className="edit-input"
            id='movie-url'
            type='url'
            placeholder='e.g. moana.com'
          />
          <select className="edit-input filter-select">
            {
              Links.map((el, index) => <option key={el} value={index + 1}>{el}</option>)
            }
          </select>
          <label htmlFor="overview">Overview</label>
          <input
            className="edit-input"
            id='overview'
            type='text'
            placeholder='Type movie overview here'
          />
          <label htmlFor="runtime">Runtime</label>
          <input
            className="edit-input"
            id='runtime'
            name='runtime'
            type='text'
            placeholder='Movie runtime'
          />
        </div>
        <div className="edit-footer">
          <button className='edit-reset-btn' type='reset' onClick={() => setMovie(InitialMovie)}>Reset</button>
          <button className='edit-submit-btn' type='submit'>Save</button>
        </div>
      </div>
    </div>
  );
}

EditModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  mode: PropTypes.bool.isRequired
}