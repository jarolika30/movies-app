import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app-title">
        {React.createElement(
          'p',
          {},
          'Hello World'
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
