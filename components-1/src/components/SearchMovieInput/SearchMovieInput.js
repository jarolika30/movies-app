import React from 'react';
import './SearchMovieInput.css';

class SearchMovieInput extends React.Component {
  render() {
    return (
      <>
        <div className="search-container">
          <div className="search-wrap">
            <h1>FIND YOUR MOVIE</h1>
            <div>
              <input className="search-input" type="text" placeholder="What do you want to watch?"></input>
              <button className="search-button">
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SearchMovieInput;