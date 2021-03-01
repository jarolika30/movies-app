import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
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
          <h3 className="title">Niagara</h3>
          <span className="year">1952</span>
          <span className="ganre"> Mystery and thriller</span>
        </div>
      </div>
    )
  }
}

export default Card;