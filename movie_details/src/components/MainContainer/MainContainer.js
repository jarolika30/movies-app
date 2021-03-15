import React from 'react';
import Navigation from '../Navigation';
import Filter from '../Filter';
import CardsComponent from '../CardsComponent/CardsComponent';
import ErrorBoundary from './ErrorBoundry';
import './MainContainer.css';

export default function MainContainer() {
  return (
    <main className="main-container">
      <ErrorBoundary>
        <div className="nav-wrap">
          <Navigation/>
          <Filter/>
        </div>
        <CardsComponent/>
      </ErrorBoundary>
    </main>
  )
}
