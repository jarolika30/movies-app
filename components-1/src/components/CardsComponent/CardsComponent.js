import React from 'react';
import { CardInfo } from '../../../mocksData/cardsInfo';
import Card from '../Card';
import './CardsComponent.css';

class CardsComponent extends React.Component {
  render() {
    return (
      <div className="cards-container">
        <div className="cards-total">
          <div><span>{CardInfo.length}</span> movies found</div>
        </div>
        {
          CardInfo.map(el => <Card {...el}/>)
        }
      </div>
    )
  }
}

export default CardsComponent;