import React from 'react';
import Navigation from '../Navigation';
import Filter from '../Filter';
import CardsComponent from '../CardsComponent/CardsComponent';
import ErrorBoundary from './ErrorBoundry';
import './MainContainer.css';

class MainContainer extends React.Component {
  render() {
    return (
      <>
        <main className="main-container">
          <ErrorBoundary>
            <div className="nav-wrap">
              <Navigation/>
              <Filter/>
            </div>
            <CardsComponent/>
          </ErrorBoundary>
        </main>
      </>
    )
  }
}

export default MainContainer;