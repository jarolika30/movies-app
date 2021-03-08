import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import DeleteModal from '../DeleteModal';
import EditModal from '../EditModal';
import './Card.css';

export default function Card(props) {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleAction = (action) => (
    event
  ) => {
    event.preventDefault();

    if (action === 'Delete') {
      setShowModal(false);
      setShowDeleteModal(true);
    } else if (action === 'Edit') {
      setShowModal(false);
      setShowEditModal(true);
    }
  }

  const onClose = (event) => {
    event.preventDefault();
    setShowModal(false);
  }

  const onCloseDeleteModal = (event) => {
    event.preventDefault();
    setShowDeleteModal(false);
  }

  const onCloseEditModal = (event) => {
    event.preventDefault();
    setShowEditModal(false);
  }

  const handleOpenModal = (event) => {
    event.preventDefault();
    setShowModal(true);
  }

  const handleConfirm = (event) => {
    event.preventDefault();
    setShowDeleteModal(false);
  }

  const handleEditConfirm = (event) => {
    event.preventDefault();
    setShowEditModal(false);
  }

  const movie = {
    id: props.id,
    title: props.title,
    year: props.year,
    ganre: props.ganre
  }

  return (
    <div className="card-container">
      <div className="card-img">
        <div className={showModal ? "kebab-menu-hidden" : "kebab-menu"} onClick={handleOpenModal}>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
          <Modal 
            show={showModal} 
            onClose={onClose}
            handleAction={handleAction}
          />
      </div>
      <div className="card-info">
        <h3 className="title">{props.title}</h3>
        <span className="year">{props.year}</span>
        <span className="ganre">{props.ganre}</span>
      </div>
      <DeleteModal show={showDeleteModal} onClose={onCloseDeleteModal} handleConfirm={handleConfirm} />
      <EditModal show={showEditModal} onClose={onCloseEditModal} handleConfirm={handleEditConfirm} mode={true} movie={movie} />
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  ganre: PropTypes.string.isRequired,
}

