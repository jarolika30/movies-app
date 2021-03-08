import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import './Card.css';

export default function Card(props) {
  const [showModal, setShowModal] = useState(false);

  const handleAction = (action) => (
    event
  ) => {
    event.preventDefault();
  }

  const onClose = (event) => {
    event.preventDefault();
    setShowModal(false);
    console.log('showModal from onClose:', showModal);
  }

  const handleOpenModal = (event) => {
    event.preventDefault();
    setShowModal(true);
    console.log('showModal from open:', showModal);
  }

  useEffect(() => {
    setShowModal(showModal);
  }, [showModal]);

  console.log('showModal:', showModal);

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
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  ganre: PropTypes.string.isRequired,
}

