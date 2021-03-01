import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContainer from './MainContainer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="content">
        <MainContainer/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
