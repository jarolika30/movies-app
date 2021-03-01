import React from 'react';
import Navigation from '../Navigation';
import Filter from '../Filter';
import CardsComponent from '../CardsComponent/CardsComponent';
import './MainContainer.css';

class MainContainer extends React.Component {
  render() {
    return (
      <>
        <main className="main-container">
          <div className="nav-wrap">
            <Navigation/>
            <Filter/>
          </div>
          <CardsComponent/>
        </main>
      </>
    )
  }
}

export default MainContainer;