import React from 'react';
import Card from '../Card';
import './CardsComponent.css';

class CardsComponent extends React.Component {
  render() {
    return (
      <div className="cards-container">
        <div className="cards-total">
          <div><span>2</span> movies found</div>
        </div>
        <Card/>
        <Card/>
      </div>
    )
  }
}

export default CardsComponent;