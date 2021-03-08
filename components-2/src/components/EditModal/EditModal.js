import React from 'react';
import PropTypes from 'prop-types';
import { Links } from '../../../mocksData/linkItems';
import './EditModal.css';

export default function EditModal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal-edit" id="modal-edit">
      <div className="modal-edit-wrap">
        <div className="edit-header">
          <span className="edit-close-sign" onClick={props.onClose}>x</span>
        </div>
        <div className="edit-body">
          <h2>Edit movie</h2>
          { props.mode && <label for="movie-id">Movie ID</label> }
          { props.mode && <input
            className="edit-input"
            id="movie-id"
            type='text'
            disabled
          /> }
          <label for="movie-title">Title</label>
          <input
            className="edit-input"
            id='movie-title'
            type='text'
            placeholder='e.g. Moana'
          />
          <label for="release-date">Release Date</label>
          <input
            className="edit-input"
            id='release-date'
            type='date'
            placeholder='Select Date'
          />
          <label for="movie-url">Movie URL</label>
          <input
            className="edit-input"
            id='movie-url'
            type='url'
            placeholder='e.g. moana.com'
          />
          <select className="edit-input filter-select">
            {
              Links.map((el, index) => <option value={index + 1}>{el}</option>)
            }
          </select>
          <label for="overview">Overview</label>
          <input
            className="edit-input"
            id='overview'
            type='text'
            placeholder='Type movie overview here'
          />
          <label for="runtime">Runtime</label>
          <input
            className="edit-input"
            id='runtime'
            name='runtime'
            type='text'
            placeholder='Movie runtime'
          />
        </div>
        <div className="edit-footer">
          <button className='edit-reset-btn' type='reset'>Reset</button>
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